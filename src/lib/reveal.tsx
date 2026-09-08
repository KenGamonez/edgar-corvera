/**
 * Observes all [data-reveal] elements (current and future) with a single
 * IntersectionObserver, adding `.is-revealed` as they enter the viewport.
 */
export function initReveal(): () => void {
  let io: IntersectionObserver | null = null;

  const observeAll = () => {
    if (!io) return;
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (!el.classList.contains("is-revealed")) io!.observe(el);
    });
  };

  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io!.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  observeAll();

  const mo =
    typeof MutationObserver !== "undefined"
      ? new MutationObserver(observeAll)
      : null;
  if (mo) mo.observe(document.body, { childList: true, subtree: true });

  return () => {
    io?.disconnect();
    mo?.disconnect();
  };
}

type RevealProps = {
  children?: React.ReactNode;
  as?: React.ElementType;
  variant?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  id?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  id,
}: RevealProps) {
  const TagCmp = Tag as React.ElementType;
  return (
    <TagCmp
      id={id}
      data-reveal={variant}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </TagCmp>
  );
}

export default Reveal;