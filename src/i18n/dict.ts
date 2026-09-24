/* ============================================================
   BILINGUAL DICTIONARY — Phase 1 (navigation + route metadata)
   ------------------------------------------------------------
   EN = English, BI = Bisaya (Cebuano, Bislig / Surigao del Sur).
   Extend with one namespace per phase; keep keys identical in
   both languages. Invariants (never translated): Edgar Corvera,
   place names, URLs, file names, reference-code formats, numbers.
   ============================================================ */

export type Lang = "en" | "bi";

export interface RouteMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface Content {
  meta: {
    home: RouteMeta;
    volunteer: RouteMeta;
    digitalCampaign: RouteMeta;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    language: string;
  };
  nav: {
    about: string;
    publicService: string;
    forTabon: string;
    updates: string;
    media: string;
    joinTeam: string;
    teamLogin: string;
  };
  hero: {
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    footerTag: string;
    scrollLabel: string;
    scrollAria: string;
  };
  about: {
    eyebrow: string;
    leadLine1: string;
    leadLine2: string;
    text1: string;
    text2: string;
    photoLabel: string;
    toBePublished: string;
    principlesTitle: string;
  };
  aboutChapters: {
    title: string;
    text: string;
  }[];
  aboutPrinciples: {
    title: string;
    text: string;
  }[];
  publicService: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    noteLabel: string;
    noteText: string;
    recogLabel: string;
    recogText: string;
    recogState: string;
  };
  publicServiceRecords: {
    area: string;
    detail: string;
    tag: string;
  }[];
  forTabon: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    linkCardGo: string;
    openAction: string;
    openPrefix: string;
    backLabel: string;
    fallbackLabel: string;
    pledge: string;
  };
  forTabonFeatures: {
    title: string;
    text: string;
  }[];
  updates: {
    eyebrow: string;
    title: string;
    note: string;
    emptyLabel: string;
    emptyText: string;
    emptyMeta: string;
    status: string;
  };
  media: {
    eyebrow: string;
    title: string;
    note: string;
    featuredAria: string;
    featuredCaption: string;
    recordSuffix: string;
    stripLabel: string;
    stripText: string;
    stripState: string;
  };
  mediaSlots: string[];
  getInvolved: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    text: string;
    detailCommunity: string;
    detailReach: string;
    detailReachValue: string;
    panelTitle: string;
    signupTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emptyError: string;
    invalidError: string;
    submit: string;
    submitting: string;
    successLead: string;
  };
  getInvolvedActions: {
    label: string;
    detail: string;
  }[];
  digitalCta: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    sub: string;
    cta: string;
    note: string;
  };
  digitalCtaMeta: {
    label: string;
    text: string;
  }[];
  volunteerCta: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    sub: string;
    cta: string;
    note: string;
  };
  volunteerCtaMeta: {
    label: string;
    text: string;
  }[];
  common: {
    saveError: string;
  };
  footer: {
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBtn: string;
    tagline: string;
    colSite: string;
    colFeatures: string;
    colCommunity: string;
    navSiteLabel: string;
    navFeaturesLabel: string;
    getInvolved: string;
    openTabonTransparency: string;
    legalSuffix: string;
    motto: string;
  };
  footerSite: string[];
  footerFeatures: string[];
  volunteerPage: {
    title: string;
    sub: string;
    formTitle: string;
    formSub: string;
    fullName: string;
    required: string;
    contactNumber: string;
    email: string;
    areaLabel: string;
    areaPlaceholder: string;
    helpLabel: string;
    helpDefault: string;
    skillsLabel: string;
    availabilityLabel: string;
    availabilityPlaceholder: string;
    activitiesLabel: string;
    messageLabel: string;
    optional: string;
    consent: string;
    privacyNote: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successLead: string;
    successTail: string;
    errName: string;
    errContact: string;
    errEmail: string;
    errConsent: string;
  };
  volunteerHelp: string[];
  digitalCampaign: {
    heroMono: string;
    heroTitle1: string;
    heroTitle2: string;
    heroLede: string;
    heroCta1: string;
    heroCta2: string;
    panelCaption: string;
    panelMono: string;
    heroFootLeft: string;
    heroFootRight: string;
    moreEyebrow: string;
    moreTitle: string;
    moreP1Lead: string;
    moreP1Strong: string;
    moreP1Rest: string;
    moreP2: string;
    whatEyebrow: string;
    whatTitle1: string;
    whatTitle2: string;
    qrEyebrow: string;
    qrTitle: string;
    qrSub: string;
    fieldEyebrow: string;
    fieldTitle: string;
    fieldSub: string;
    communityEyebrow: string;
    communityTitle: string;
    communitySub: string;
    opsEyebrow: string;
    opsTitle: string;
    opsSub: string;
    socialEyebrow: string;
    socialTitle: string;
    socialSub: string;
    mediaEyebrow: string;
    mediaTitle: string;
    mediaSub: string;
    activitiesEyebrow: string;
    activitiesTitle: string;
    activitiesSub: string;
    connectEyebrow: string;
    connectTitle: string;
    roleEyebrow: string;
    roleTitle: string;
    roleSub: string;
    teamEyebrow: string;
    teamTitle: string;
    teamSub: string;
    timelineEyebrow: string;
    timelineTitle: string;
    closingEyebrow: string;
    closingTitle1: string;
    closingTitle2: string;
    closingText: string;
    closingCta1: string;
    closingCta2: string;
    complianceLabel: string;
  };
  dcGets: { title: string; text: string }[];
  dcQr: { title: string; text: string }[];
  dcField: { title: string; text: string }[];
  dcCommunity: { title: string; text: string }[];
  dcOps: { title: string; text: string }[];
  dcSocial: { title: string; text: string }[];
  dcMediaLib: { title: string; text: string }[];
  dcActivities: { title: string; text: string }[];
  dcConnects: { title: string; tag: string; text: string }[];
  dcFlow: string[];
  dcRoles: { title: string; text: string }[];
  dcTeamRoles: { title: string; text: string }[];
  dcTimeline: { label: string; items: string[] }[];
  dcCompliance: string[];
  featSurvey: {
    eyebrow: string;
    title: string;
    intro: string;
    cardTitle: string;
    specifyLabel: string;
    answerPlaceholder: string;
    noteLabel: string;
    noteHint: string;
    notePlaceholder: string;
    errSelect: string;
    submit: string;
    submitting: string;
    successLead: string;
    postNote: string;
    emptyLabel: string;
    emptyText: string;
    emptyMeta: string;
  };
  surveyPriorities: string[];
  featConcerns: {
    eyebrow: string;
    title: string;
    intro: string;
    stagesLabel: string;
    catLabel: string;
    catDefault: string;
    areaLabel: string;
    areaHint: string;
    areaPlaceholder: string;
    descLabel: string;
    descPlaceholder: string;
    photoLabel: string;
    optional: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactHint: string;
    contactPlaceholder: string;
    fileSelected: string;
    errCat: string;
    errDesc: string;
    submit: string;
    submitting: string;
    successLead: string;
    successTail: string;
    emptyLabel: string;
    emptyText: string;
    emptyMeta: string;
  };
  concernCategories: string[];
  concernStages: string[];
  featAsk: {
    eyebrow: string;
    title: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    msgLabel: string;
    msgPlaceholder: string;
    errName: string;
    errContact: string;
    errMsg: string;
    submit: string;
    submitting: string;
    helper: string;
    successLead: string;
    successTail: string;
    emptyLabel: string;
    emptyText: string;
    emptyMeta: string;
  };
  featPulse: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyLabel: string;
    emptyText: string;
    emptyMeta: string;
  };
  pulseSlots: { label: string; note: string }[];
  featInfo: {
    eyebrow: string;
    title: string;
    intro: string;
    nothingYet: string;
    hallLabel: string;
    hallText: string;
  };
  infoCategories: { title: string; note: string }[];
  featProjects: {
    eyebrow: string;
    title: string;
    intro: string;
    statusesLabel: string;
    cardTitle: string;
    emptyLabel: string;
    emptyText: string;
    emptyMeta: string;
  };
  projectStatuses: string[];
  projectRows: { label: string; desc: string }[];
  featOpen: {
    eyebrow: string;
    title: string;
    intro: string;
    nothingYet: string;
    emptyLabel: string;
    emptyText: string;
    emptyMeta: string;
  };
  openAreas: { title: string; note: string }[];
}

export const dict: Record<Lang, Content> = {
  en: {
    meta: {
      home: {
        title: "Edgar Corvera — Public Service for Barangay Tabon",
        description:
          "Edgar Corvera — Electrical Engineer from Barangay Tabon, Bislig City, Surigao del Sur. Public service, community participation, and transparency for the people of Barangay Tabon.",
        ogTitle: "Edgar Corvera — Public Service for Barangay Tabon",
        ogDescription:
          "Public service for the community of Barangay Tabon, Bislig City, Surigao del Sur — listening, participation, information, and transparency.",
      },
      volunteer: {
        title: "Volunteer with the Campaign — Edgar Corvera | Tabon, Bislig City",
        description:
          "Register your interest to volunteer with the Edgar Corvera campaign in Barangay Tabon, Bislig City — community activities, documentation, communications, logistics, and event support.",
        ogTitle: "Volunteer with the Campaign — Edgar Corvera",
        ogDescription:
          "Take part in the work happening in Tabon. Register as a campaign volunteer in Barangay Tabon, Bislig City.",
      },
      digitalCampaign: {
        title: "Digital Campaign System — Edgar Corvera | Tabon, Bislig City",
        description:
          "How the Edgar Corvera campaign is organized and run behind the scenes — coordination, field documentation, community connection, and transparent operations for Barangay Tabon.",
        ogTitle: "Digital Campaign System — Edgar Corvera",
        ogDescription:
          "One campaign, one digital system — how the campaign stays organized and connected with the community of Barangay Tabon.",
      },
    },
    a11y: {
      skipToContent: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primaryNav: "Primary",
      language: "Language",
    },
    nav: {
      about: "About",
      publicService: "Public Service",
      forTabon: "For Tabon",
      updates: "Updates",
      media: "Media",
      joinTeam: "Join the team",
      teamLogin: "Team login",
    },
    hero: {
      tagline: "Public service, in the open",
      titleLine1: "Honest work,",
      titleLine2: "for the people",
      titleLine3: "of Tabon.",
      lede: "Public service is measured not by position, but by the work, and by the trust of the people who receive it. This site is offered in that spirit — open, careful, and accountable.",
      ctaPrimary: "The record of service",
      ctaSecondary: "For Tabon",
      footerTag: "For the people of Barangay Tabon",
      scrollLabel: "Scroll",
      scrollAria: "Scroll to About",
    },
    about: {
      eyebrow: "About Edgar",
      leadLine1: "Experience built through engineering,",
      leadLine2: "industry, and public service.",
      text1:
        "Edgar Corvera is an Electrical Engineer from Barangay Tabon, Bislig City, Surigao del Sur. His approach to public service is shaped by the discipline of engineering — measure a problem carefully, plan the work, do it properly, and account for the result.",
      text2:
        "This section records who Edgar is and the experience he brings into serving his community. Education, professional experience, public service, committee work, and recognitions are each listed here — and only what is confirmed is shown.",
      photoLabel: "Edgar Corvera — photograph",
      toBePublished: "To be published",
      principlesTitle: "Working principles",
    },
    aboutChapters: [
      {
        title: "Education",
        text: "Edgar Corvera is an Electrical Engineer. Verified educational background will be published here as it is confirmed.",
      },
      {
        title: "Professional experience",
        text: "Engineering and industry experience — verified positions and organizations will be listed here as they are confirmed.",
      },
      {
        title: "Public service",
        text: "His documented public-service experience will be explained here, with dates and detail.",
      },
      {
        title: "Committee & responsibility",
        text: "Relevant committee and responsibility areas will be listed here as they are verified.",
      },
      {
        title: "Recognitions",
        text: "Documented awards and recognitions will be shown here, together with their sources.",
      },
    ],
    aboutPrinciples: [
      {
        title: "Honesty before optics",
        text: "Clear communication and disciplined public accounting.",
      },
      {
        title: "People before privilege",
        text: "Every decision weighed against the interest of ordinary citizens.",
      },
      {
        title: "Work before words",
        text: "Progress measured by accomplishment, not by announcement.",
      },
    ],
    publicService: {
      eyebrow: "Public service",
      titleLine1: "A record of",
      titleLine2: "responsibility.",
      intro:
        "Public service is measured by the work. These are the areas of public life Edgar intends to take responsibility for Barangay Tabon — and the specific record behind each is published as it is verified.",
      noteLabel: "On this record",
      noteText:
        "Specific service details — dates, positions, and responsibilities — will be added here as they are verified. Nothing is listed that cannot be shown.",
      recogLabel: "Recognitions",
      recogText:
        "Documented awards and recognitions will be listed here, together with their sources, as they are verified.",
      recogState: "Nothing published yet",
    },
    publicServiceRecords: [
      {
        area: "Council & legislative work",
        detail:
          "Ordinances, resolutions, and decisions shape how a community is governed. This is public work — studied in public, decided in public, and accountable to the people it serves.",
        tag: "Public responsibility",
      },
      {
        area: "Infrastructure & public works",
        detail:
          "Roads, drainage, public buildings, and the physical foundations of daily life — the discipline of an engineer who expects structures to be measured, safe, and maintained.",
        tag: "Engineering",
      },
      {
        area: "Renewable energy & power",
        detail:
          "Clean, dependable electricity for households and public facilities — energy planning that begins from a community’s actual needs, not from headlines.",
        tag: "Engineering",
      },
      {
        area: "Waterworks & supply",
        detail:
          "Safe, dependable water for households and barangays — the utility a community cannot do without, understood as a service, not as a commodity.",
        tag: "Public responsibility",
      },
      {
        area: "Budget · ways & means · taxation",
        detail:
          "How public resources are raised, budgeted, and accounted for — discipline that protects every peso that belongs to the community.",
        tag: "Public responsibility",
      },
      {
        area: "Community welfare & programs",
        detail:
          "Senior citizens, youth, livelihood, health, education, and disaster preparedness — service that runs across the daily concerns of the community.",
        tag: "Community",
      },
    ],
    forTabon: {
      eyebrow: "For Tabon",
      titleLine1: "The community is",
      titleLine2: "at the center of this.",
      intro:
        "A place to listen, understand what matters, connect people with information, and keep track of the work that affects our community.",
      linkCardGo: "Community updates",
      openAction: "Open feature",
      openPrefix: "Open",
      backLabel: "All For Tabon features",
      fallbackLabel: "For Tabon features",
      pledge:
        "Nothing is posted on this platform that has not actually happened — and no promise is made before it is ready.",
    },
    forTabonFeatures: [
      { title: "What matters to you", text: "Community priority survey." },
      { title: "Tell us a concern", text: "Residents can submit a community concern." },
      { title: "Ask Edgar", text: "Questions, suggestions, or a message." },
      { title: "Community Pulse", text: "Aggregated community feedback and priorities." },
      {
        title: "Tabon Information",
        text: "Useful community information, announcements, contacts, and resources.",
      },
      {
        title: "Community Updates",
        text: "News, activities, announcements, and verified developments.",
      },
      { title: "Community Projects", text: "Track the projects that affect our community." },
      { title: "Open Tabon", text: "Projects, reports, documents, and community priorities." },
    ],
    updates: {
      eyebrow: "Updates",
      title: "Tabon Updates.",
      note: "Community updates, announcements, meetings, and verified developments will be published here — nothing that has not actually happened.",
      emptyLabel: "Tabon Updates",
      emptyText: "No updates have been published yet.",
      emptyMeta: "Updates will appear here as they are published",
      status: "Nothing is posted here that has not actually happened.",
    },
    media: {
      eyebrow: "Media",
      title: "A visual record of public service.",
      note: "Photography, video, and press coverage will be published here as they are produced. Nothing is labelled before it exists.",
      featuredAria: "Edgar Corvera — visual record",
      featuredCaption: "Visual record",
      recordSuffix: "Edgar Corvera record",
      stripLabel: "Press & coverage",
      stripText:
        "Press releases and coverage will be archived here, with links to their original sources, as they are published.",
      stripState: "Nothing published yet",
    },
    mediaSlots: [
      "Community",
      "Public Service",
      "Events",
      "Activities",
      "Press",
      "Video",
    ],
    getInvolved: {
      eyebrow: "Get involved",
      titleLine1: "Participation is how",
      titleLine2: "a community works.",
      text: "Answer a survey, raise a concern, send a suggestion, ask a question, or simply stay informed. Every form of participation helps the platform serve the community better.",
      detailCommunity: "Community",
      detailReach: "Reach the team",
      detailReachValue: "Through the forms on this page.",
      panelTitle: "Ways to take part",
      signupTitle: "Receive updates",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emptyError: "Please add your name and email.",
      invalidError: "Please enter a valid email address.",
      submit: "Sign up for updates",
      submitting: "Submitting…",
      successLead: "Salamat. You are signed up for updates",
    },
    getInvolvedActions: [
      {
        label: "Answer the community survey",
        detail: "Help set what Tabon should prioritize first.",
      },
      {
        label: "Tell us a concern",
        detail: "Log a community concern so it can be documented and followed up.",
      },
      { label: "Send a suggestion", detail: "A suggestion is a form of service." },
      {
        label: "Ask Edgar",
        detail: "Questions and messages are collected for review and response.",
      },
    ],
    digitalCta: {
      eyebrow: "Digital Campaign",
      titleLine1: "ONE CAMPAIGN.",
      titleLine2: "ONE DIGITAL SYSTEM.",
      sub: "How the campaign is organized and run behind the scenes — and how it stays connected with the community.",
      cta: "See the system",
      note: "The digital side of the campaign — not a campaign manager, and not a commercial service.",
    },
    digitalCtaMeta: [
      { label: "Coordinate", text: "One clear operations system" },
      { label: "Document", text: "Field work recorded as it happens" },
      { label: "Connect", text: "The community stays in the loop" },
      { label: "Account", text: "Honest, transparent, within the law" },
    ],
    volunteerCta: {
      eyebrow: "Volunteer",
      titleLine1: "Your time can make",
      titleLine2: "a difference.",
      sub: "Want to take part in the work happening in Tabon?",
      cta: "Join the team",
      note: "Registering does not guarantee a role. The campaign team reviews registrations and reaches out when opportunities are available.",
    },
    volunteerCtaMeta: [
      { label: "Community", text: "Community activities & field support" },
      { label: "Documentation", text: "Photography & records" },
      { label: "Communications", text: "Social media & outreach" },
      { label: "Logistics", text: "Event coordination & support" },
    ],
    common: {
      saveError: "The message could not be saved right now. Please try again.",
    },
    footer: {
      ctaEyebrow: "Digital Campaign",
      ctaTitle: "A more connected campaign.",
      ctaBtn: "See the system",
      tagline: "Public service for the community of Barangay Tabon.",
      colSite: "Site",
      colFeatures: "For Tabon",
      colCommunity: "Community",
      navSiteLabel: "Site",
      navFeaturesLabel: "Community features",
      getInvolved: "Get involved",
      openTabonTransparency: "Open Tabon — transparency",
      legalSuffix: "Built for the community of Barangay Tabon.",
      motto: "Honest work · for the people of Tabon",
    },
    footerSite: ["About", "Public Service", "For Tabon", "Updates", "Media"],
    footerFeatures: [
      "Community survey",
      "Community concerns",
      "Ask Edgar",
      "Community projects",
      "Open Tabon",
    ],
    volunteerPage: {
      title: "Be part of the work in Tabon.",
      sub: "Whether you can help with community activities, documentation, communications, logistics, or other campaign work, register your interest with the team.",
      formTitle: "Volunteer registration",
      formSub:
        "This registration lets the team understand how you can help. Registering does not guarantee a role, but it tells the campaign you want to participate.",
      fullName: "Full name",
      required: "(required)",
      contactNumber: "Contact number",
      email: "Email address",
      areaLabel: "Area / location",
      areaPlaceholder: "e.g. Purok 3",
      helpLabel: "How would you like to help?",
      helpDefault: "Select an area",
      skillsLabel: "Skills / experience",
      availabilityLabel: "Availability",
      availabilityPlaceholder: "e.g. Weekends, Evenings, Flexible",
      activitiesLabel: "Preferred activities",
      messageLabel: "Additional message",
      optional: "Optional",
      consent:
        "I consent to be contacted by the campaign team regarding volunteer opportunities.",
      privacyNote:
        "This registration is received privately by the campaign operations team. Your information is not displayed on the public site.",
      submit: "Become a volunteer",
      submitting: "Submitting…",
      successTitle: "Thank you for volunteering.",
      successLead: "Your registration has been received",
      successTail:
        "The campaign team will contact you regarding available opportunities.",
      errName: "Name is required.",
      errContact: "Contact is required.",
      errEmail: "Enter a valid email address.",
      errConsent: "Consent is required.",
    },
    volunteerHelp: [
      "Community Activities",
      "Documentation / Photography",
      "Video",
      "Social Media",
      "Communications",
      "Logistics",
      "Event Support",
      "Other",
    ],
    digitalCampaign: {
      heroMono: "The digital side of the campaign",
      heroTitle1: "ONE CAMPAIGN.",
      heroTitle2: "ONE DIGITAL SYSTEM.",
      heroLede:
        "A single, organized digital system behind the campaign for the people of Barangay Tabon — coordinate the team, document the work, and connect with the community in one clear, honest place.",
      heroCta1: "What the campaign gets",
      heroCta2: "How it connects",
      panelCaption: "Organize · Document · Connect",
      panelMono: "SEP 2026 — after the election",
      heroFootLeft: "Digital operations · in service of the record",
      heroFootRight: "No pricing. Nothing for sale.",
      moreEyebrow: "More than a website",
      moreTitle: "The digital side of the campaign.",
      moreP1Lead:
        "A campaign depends on coordination, timing, and trust. This page describes the ",
      moreP1Strong: "digital system",
      moreP1Rest:
        " that keeps those three things in order — a working operations layer behind the campaign, not a marketing page.",
      moreP2:
        "It is the digital side of a public-service campaign for Barangay Tabon. Positioned that way on purpose: this is how the campaign is organized and run — not a commercial service.",
      whatEyebrow: "What the campaign gets",
      whatTitle1: "Order, record,",
      whatTitle2: "and a clear path.",
      qrEyebrow: "One simple link",
      qrTitle: "The QR system.",
      qrSub:
        "A single scannable link connects the community to the campaign's public information — nothing scattered, nothing confusing.",
      fieldEyebrow: "Evidence over claims",
      fieldTitle: "Field documentation.",
      fieldSub:
        "The campaign's real work happens on the ground. Every field activity is documented as it happens — dated, placed, and filed — so the record rests on what was actually done.",
      communityEyebrow: "Two-way, not one-way",
      communityTitle: "Community connection.",
      communitySub:
        "Digital works alongside field contact. The campaign listens as much as it speaks, and every message reaches a real person.",
      opsEyebrow: "Behind the scenes",
      opsTitle: "Private operations.",
      opsSub:
        "Inside the campaign, a controlled, shared space keeps the team coordinated — separate from what the public sees.",
      socialEyebrow: "Steady, not scattered",
      socialTitle: "Social media command center.",
      socialSub:
        "One calendar, one voice. Posts are planned, timed, and kept human across every channel.",
      mediaEyebrow: "An organized archive",
      mediaTitle: "The media library.",
      mediaSub:
        "Photos, documents, and materials — named, dated, and filed in one searchable place that supports both the campaign and the record it leaves behind.",
      activitiesEyebrow: "The campaign path",
      activitiesTitle: "Campaign activities.",
      activitiesSub:
        "The campaign is laid out in phases — from readiness through the official period to a clean closeout — always in step with the law.",
      connectEyebrow: "One system, four parts",
      connectTitle: "How everything connects.",
      roleEyebrow: "My part in it",
      roleTitle: "My role.",
      roleSub:
        "The digital side of the campaign — not the campaign manager, and not a commercial service.",
      teamEyebrow: "The work is shared",
      teamTitle: "The campaign team.",
      teamSub:
        "Digital is one piece of a much larger effort, carried by organizers, volunteers, and supporters.",
      timelineEyebrow: "The whole path",
      timelineTitle: "SEP 2026 — closeout.",
      closingEyebrow: "The point of it all",
      closingTitle1: "Less scattered.",
      closingTitle2: "More connected.",
      closingText:
        "When the team is organized, the record is honest, and the community stays connected — the campaign runs the way public life should: measured, open, and accountable.",
      closingCta1: "Return to the campaign site",
      closingCta2: "Join the team",
      complianceLabel: "Honest boundaries",
    },
    dcGets: [
      {
        title: "One source of truth",
        text: "Every member of the campaign team works from the same up-to-date record — schedules, tasks, locations, and updates all live in one place.",
      },
      {
        title: "A clear campaign timeline",
        text: "From readiness to final days to closeout, the whole campaign path is laid out in plain view — so the team always knows where it stands.",
      },
      {
        title: "Clean, organized media",
        text: "Photos, documents, and materials are named, dated, and stored in one library — ready when they are needed, easy to find later.",
      },
      {
        title: "Public trust through transparency",
        text: "The same discipline applied in public service — studied, documented, and accountable — is applied to how the campaign presents itself.",
      },
    ],
    dcQr: [
      {
        title: "A link the community can scan",
        text: "A single QR code placed in campaign materials leads to the campaign's public digital presence — no clutter, no confusion.",
      },
      {
        title: "Information in one place",
        text: "What the community needs — who, what, where, when — is gathered into one simple, reliable place they can open on any phone.",
      },
      {
        title: "Easy to update, always accurate",
        text: "Because the content is centralized, a correction or an update appears everywhere at once. The community always reads the current version.",
      },
    ],
    dcField: [
      {
        title: "Evidence over claims",
        text: "Field work is documented as it happens — with date, place, and detail — so the record rests on what was actually done.",
      },
      {
        title: "Organized records",
        text: "Every entry is filed consistently, so the team can recall precisely what happened, where, and when.",
      },
      {
        title: "Accountable to the community",
        text: "The same discipline Edgar applies to public service — measure, plan, do, account — is applied to the campaign's own activity.",
      },
    ],
    dcCommunity: [
      {
        title: "Two-way, not one-way",
        text: "The campaign listens as much as it speaks — concerns, questions, and input from the community are gathered and acknowledged.",
      },
      {
        title: "In every voice",
        text: "Digital is one channel among many. It works alongside field visits and face-to-face contact where the community lives and moves.",
      },
      {
        title: "Real people, real responses",
        text: "Every message is read and answered by the team — not by automated noise. The connection stays human.",
      },
    ],
    dcOps: [
      {
        title: "Internal coordination",
        text: "One shared space for the team to coordinate tasks, schedules, and responsibilities — without scattering information across messages.",
      },
      {
        title: "Controlled access",
        text: "The private operations area is separate and restricted. Only authorized members of the campaign team can enter it.",
      },
      {
        title: "Protected records",
        text: "Internal notes and planning are kept separate from public material — protected while the campaign is active.",
      },
    ],
    dcSocial: [
      {
        title: "One calendar, one voice",
        text: "Posts across channels are planned from a single calendar, keeping the message consistent and the tempo steady.",
      },
      {
        title: "Consistent timing",
        text: "Material goes out on a schedule the team controls — not in scattered bursts, but in a steady, planned rhythm.",
      },
      {
        title: "Keep it human",
        text: "Campaigns remain most credible when they sound like real people talking to neighbors, not like output from a machine.",
      },
    ],
    dcMediaLib: [
      {
        title: "One organized archive",
        text: "Photos, documents, and materials are filed by date and purpose — searchable, label-led, and easy to pull when needed.",
      },
      {
        title: "Named and dated",
        text: "Consistent naming keeps the library usable even months later, and makes it simple to trace any image back to its moment.",
      },
      {
        title: "Ready for the record",
        text: "An organized library supports both the campaign and the lasting public record it leaves behind.",
      },
    ],
    dcActivities: [
      {
        title: "Readiness",
        text: "Building and testing the tools the campaign will rely on, so everything is ready before the official campaign period begins.",
      },
      {
        title: "Official campaign",
        text: "The core of the campaign — connected, documented field activity across the barangay, day by day.",
      },
      {
        title: "The final days",
        text: "A focused, deliberate closing stretch — measured, not rushed, and always in step with the law.",
      },
      {
        title: "Silence",
        text: "All campaign activity pauses as the law requires. The quiet speaks louder than any post.",
      },
      {
        title: "Election day",
        text: "The team steps back to let the people of Tabon decide — calmly, cleanly, and without obstruction.",
      },
      {
        title: "Closeout",
        text: "The work is accounted for, records are preserved, and the campaign closes openly and honestly.",
      },
    ],
    dcConnects: [
      {
        title: "Field",
        tag: "What happens on the ground",
        text: "The source of the campaign's real work — visits, activities, and the people behind them.",
      },
      {
        title: "Documentation",
        tag: "The record",
        text: "Every field activity is captured, dated, and filed — so the work is never lost or unverifiable.",
      },
      {
        title: "Operations",
        tag: "The coordination",
        text: "A private space where the team plans, schedules, and coordinates around that record.",
      },
      {
        title: "Public",
        tag: "The connection",
        text: "A clean, honest public presence shaped from the documented work — so the community hears what actually happened.",
      },
    ],
    dcFlow: ["Field", "Documentation", "Operations", "Public"],
    dcRoles: [
      {
        title: "Digital lead & operator",
        text: "My role is the digital side of the campaign — building and running the systems that keep the team organized and the public connected. I am not the campaign manager and do not claim to be one.",
      },
      {
        title: "Reliable, not flashy",
        text: "The work favors dependability over noise. Systems are built to run steadily, be easy to operate, and survive a demanding schedule.",
      },
      {
        title: "Accountable to the same rules",
        text: "Everything the digital side does stays within the same legal and ethical boundaries that govern the whole campaign.",
      },
    ],
    dcTeamRoles: [
      {
        title: "The whole team",
        text: "The campaign team is broader than any one role — organizers, volunteers, and supporters each carry the work forward.",
      },
      {
        title: "My place in it",
        text: "I support the team's digital system so that coordination is easier and the public connection is stronger.",
      },
      {
        title: "Plenty still to do",
        text: "Digital is one piece of a larger effort. Field work, community contact, and the people themselves remain at the center.",
      },
    ],
    dcTimeline: [
      {
        label: "Build & readiness",
        items: ["Digital system set up and tested", "Team onboarding and roles clarified"],
      },
      {
        label: "Official campaign",
        items: ["Connected field activity", "Steady public presence", "Full documentation"],
      },
      {
        label: "Silence & election day",
        items: ["Campaign activity paused as required", "People of Tabon decide"],
      },
      {
        label: "Closeout",
        items: ["Work accounted for", "Records preserved", "Campaign closed honestly"],
      },
    ],
    dcCompliance: [
      "This page is the digital operations side of a public-service campaign — not a commercial offering. There is no pricing, no package, and nothing for sale.",
      "It is a demonstration and planning concept. No figures, statistics, results, or testimonials on this page are real or claimed.",
      "The campaign will operate strictly within the rules and schedules set by the Commission on Elections (COMELEC). Nothing here overrides or replaces those rules.",
      "Nothing on this page is legal advice. The campaign will follow the guidance of qualified counsel on all matters.",
      "All published content reflects only confirmed information, in line with the same honesty this site is built on.",
    ],
    featSurvey: {
      eyebrow: "Feature 01 · Community survey",
      title: "What should Tabon prioritize?",
      intro:
        "If you could improve one thing in our community first, what should it be? Responses are collected anonymously and used only to understand what matters to the community.",
      cardTitle: "Choose the area to prioritize",
      specifyLabel: "Specify",
      answerPlaceholder: "Your answer",
      noteLabel: "Optional note",
      noteHint: "(anything else we should know)",
      notePlaceholder: "Optional",
      errSelect: "Please select the area Tabon should prioritize first.",
      submit: "Submit response",
      submitting: "Submitting…",
      successLead: "Salamat. Your response has been received",
      postNote:
        "Aggregate views will appear in Community Pulse once a real set of responses is available.",
      emptyLabel: "Community responses",
      emptyText: "Community responses will appear here as residents participate.",
      emptyMeta: "Results are only shown once verified",
    },
    surveyPriorities: [
      "Roads & drainage",
      "Water",
      "Electricity",
      "Health",
      "Education",
      "Livelihood",
      "Public safety",
      "Environment",
      "Sports & recreation",
      "Senior citizens",
      "Youth",
      "Disaster preparedness",
      "Other",
    ],
    featConcerns: {
      eyebrow: "Feature 02 · Community concerns",
      title: "Tell us a concern",
      intro:
        "Share a concern so it can be documented, understood, and followed up. A concern is logged with a reference number and moves through the stages below as it is reviewed and acted on.",
      stagesLabel: "Concern review stages",
      catLabel: "Category",
      catDefault: "Select a category",
      areaLabel: "Location / area",
      areaHint: "(purok, sitio, street, landmark)",
      areaPlaceholder: "e.g. purok 3, near the covered court",
      descLabel: "Description",
      descPlaceholder: "Describe the concern concretely",
      photoLabel: "Photo",
      optional: "(optional)",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      contactLabel: "Contact",
      contactHint: "(optional, for follow-up)",
      contactPlaceholder: "Phone or email",
      fileSelected: "selected",
      errCat: "Please choose a category for the concern.",
      errDesc: "Please describe the concern briefly.",
      submit: "Submit concern",
      submitting: "Submitting…",
      successLead: "Salamat. Your concern has been received",
      successTail: "It will be reviewed and followed up.",
      emptyLabel: "Published concerns",
      emptyText:
        "No concerns are published yet. Public updates about concerns will appear here as they are received, reviewed, and followed up.",
      emptyMeta: "Nothing published yet",
    },
    concernCategories: [
      "Roads & drainage",
      "Water",
      "Electricity",
      "Health",
      "Education",
      "Livelihood",
      "Public safety",
      "Environment",
      "Sports & recreation",
      "Senior citizens",
      "Youth",
      "Disaster preparedness",
      "Other",
    ],
    concernStages: ["Received", "Under review", "In progress", "Resolved"],
    featAsk: {
      eyebrow: "Feature 03 · Ask Edgar",
      title: "Ask Edgar",
      intro:
        "Have a question, suggestion, or message? Your message is collected for review and response. General questions that help the whole community may be published without your personal details.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      contactLabel: "Contact",
      contactPlaceholder: "Phone or email",
      msgLabel: "Question or message",
      msgPlaceholder: "Write your message",
      errName: "Please share your name so the message can be addressed.",
      errContact: "Please add a way to reach you for a reply.",
      errMsg: "Please write your question or message.",
      submit: "Send message",
      submitting: "Submitting…",
      helper: "Messages are collected for review and response.",
      successLead: "Salamat. Your message has been received",
      successTail: "and will be reviewed and responded to.",
      emptyLabel: "Public replies",
      emptyText:
        "Responses to general community questions will be published here if they are useful to everyone in Barangay Tabon.",
      emptyMeta: "Nothing published yet",
    },
    featPulse: {
      eyebrow: "Feature 04 · Community pulse",
      title: "What Tabon is telling us",
      intro:
        "This is the shared view of community feedback — priorities, concerns, and topics raised through the features on this page. Numbers are only shown when they are real.",
      emptyLabel: "Community pulse",
      emptyText:
        "Community responses will appear here as residents participate. Nothing is published until the data is verified.",
      emptyMeta: "Awaiting community data",
    },
    pulseSlots: [
      { label: "Top priorities", note: "No data yet" },
      { label: "Survey participation", note: "No data yet" },
      { label: "Community concerns", note: "No data yet" },
      { label: "Recent topics", note: "No data yet" },
    ],
    featInfo: {
      eyebrow: "Feature 05 · Tabon information",
      title: "Tabon Information",
      intro:
        "A single place for information that residents actually use — contacts, announcements, events, services, and resources for Barangay Tabon. Category by category, useful information will be published here as it is prepared and verified.",
      nothingYet: "Nothing published yet",
      hallLabel: "Barangay hall",
      hallText:
        "Barangay Tabon, Bislig City, Surigao del Sur. Official contact details of the barangay hall will be published here as they are verified.",
    },
    infoCategories: [
      {
        title: "Announcements",
        note: "Official announcements for Barangay Tabon will be posted here.",
      },
      {
        title: "Events",
        note: "Meetings, consultations, and community activities will be listed here.",
      },
      {
        title: "Important contacts",
        note: "Verified contacts for the barangay and public services will be listed here.",
      },
      {
        title: "Emergency information",
        note: "Emergency numbers and procedures will be published here as they are verified.",
      },
      {
        title: "Public services",
        note: "Public services available to residents will be explained here.",
      },
      {
        title: "Community programs",
        note: "Ongoing and upcoming community programs will be shown here.",
      },
      {
        title: "Local resources",
        note: "Local offices, facilities, and useful resources will be compiled here.",
      },
      {
        title: "Useful documents",
        note: "Public documents and reference materials will be made available here.",
      },
    ],
    featProjects: {
      eyebrow: "Feature 07 · Community projects",
      title: "Community Projects",
      intro:
        "The work that affects our community should be visible: what is being done, where, with what timeline, and what stage it has reached. Projects are tracked plainly — nothing is shown that has not actually happened.",
      statusesLabel: "Project statuses",
      cardTitle: "How each project will be tracked",
      emptyLabel: "Community projects",
      emptyText: "Community projects will be shown here as they are published.",
      emptyMeta: "Nothing published yet",
    },
    projectStatuses: ["Planning", "In progress", "Completed"],
    projectRows: [
      { label: "Project name", desc: "What the project is and who it serves" },
      { label: "Location", desc: "Purok, sitio, street, or area" },
      { label: "Category", desc: "Water, power, roads, structures, programs" },
      { label: "Status", desc: "Planning · In progress · Completed" },
      { label: "Timeline", desc: "Start and target dates" },
      { label: "Progress", desc: "Updates against plan" },
      { label: "Documentation", desc: "Photos and public documents" },
    ],
    featOpen: {
      eyebrow: "Feature 08 · Open Tabon",
      title: "Open Tabon",
      intro:
        "Transparency is the operating policy of this platform: public information is shared plainly — projects, progress, reports, documents, accomplishments, and the priorities the community has set. Nothing is published here that is not verified, and nothing is hidden that is public.",
      nothingYet: "Nothing published yet",
      emptyLabel: "Open Tabon",
      emptyText:
        "Verified public documents, project progress, and community priorities will be shared here.",
      emptyMeta: "Ready for public records",
    },
    openAreas: [
      {
        title: "Public projects",
        note: "Community projects and their status will be shared here.",
      },
      {
        title: "Project progress",
        note: "Verified progress updates will be published here.",
      },
      {
        title: "Reports",
        note: "Public reports will be made available here.",
      },
      {
        title: "Public documents",
        note: "Public documents will be published here.",
      },
      {
        title: "Accomplishments",
        note: "Documented accomplishments will be shown here, with sources.",
      },
      {
        title: "Community priorities",
        note: "Priorities set with the community will be listed here as they are finalized.",
      },
    ],
  },

  bi: {
    meta: {
      home: {
        title: "Edgar Corvera — Serbisyo Publiko para sa Barangay Tabon",
        description:
          "Edgar Corvera — Electrical Engineer gikan sa Barangay Tabon, Bislig City, Surigao del Sur. Serbisyo publiko, partisipasyon sa komunidad, ug transparency para sa mga tawo sa Barangay Tabon.",
        ogTitle: "Edgar Corvera — Serbisyo Publiko para sa Barangay Tabon",
        ogDescription:
          "Serbisyo publiko para sa komunidad sa Barangay Tabon, Bislig City, Surigao del Sur — pagpaminaw, partisipasyon, impormasyon, ug transparency.",
      },
      volunteer: {
        title: "Pag-volunteer sa Kampanya — Edgar Corvera | Tabon, Bislig City",
        description:
          "Iparehistro ang imong interes sa pag-volunteer sa kampanya ni Edgar Corvera sa Barangay Tabon, Bislig City — mga kalihokan sa komunidad, dokumentasyon, komunikasyon, logistics, ug suporta sa mga event.",
        ogTitle: "Pag-volunteer sa Kampanya — Edgar Corvera",
        ogDescription:
          "Apil sa buhat nga nagakahitabo sa Tabon. Pagparehistro isip volunteer sa kampanya sa Barangay Tabon, Bislig City.",
      },
      digitalCampaign: {
        title: "Sistemang Digital sa Kampanya — Edgar Corvera | Tabon, Bislig City",
        description:
          "Giunsa pag-organisar ug pagpadagan ang kampanya ni Edgar Corvera — koordinasyon, dokumentasyon sa field, koneksyon sa komunidad, ug matinud-anon nga operasyon para sa Barangay Tabon.",
        ogTitle: "Sistemang Digital sa Kampanya — Edgar Corvera",
        ogDescription:
          "Usa ka kampanya, usa ka digital nga sistema — giunsa pagpabiling organisado ug konektado sa komunidad sa Barangay Tabon.",
      },
    },
    a11y: {
      skipToContent: "Laktaw sa sulod",
      openMenu: "Ablihi ang menu",
      closeMenu: "Isira ang menu",
      primaryNav: "Panguna",
      language: "Pinulongan",
    },
    nav: {
      about: "Mahitungod",
      publicService: "Serbisyo Publiko",
      forTabon: "Para sa Tabon",
      updates: "Mga Balita",
      media: "Media",
      joinTeam: "Apil sa Team",
      teamLogin: "Login sa Team",
    },
    hero: {
      tagline: "Serbisyo publiko nga dayag",
      titleLine1: "Matinud-anon nga buhat,",
      titleLine2: "para sa katawhan",
      titleLine3: "sa Tabon.",
      lede: "Ang serbisyo publiko masukod dili sa posisyon, kondili sa buhat, ug sa pagsalig sa mga tawo nga nakadawat niini. Kini nga site gihalad sa maong espiritu — dayag, mabinantayon, ug may tulubagon.",
      ctaPrimary: "Ang rekord sa serbisyo",
      ctaSecondary: "Para sa Tabon",
      footerTag: "Para sa mga tawo sa Barangay Tabon",
      scrollLabel: "Pag-scroll",
      scrollAria: "Pag-scroll ngadto sa About",
    },
    about: {
      eyebrow: "Mahitungod kang Edgar",
      leadLine1: "Kasinatian nga natukod pinaagi sa engineering,",
      leadLine2: "industriya, ug serbisyo publiko.",
      text1:
        "Si Edgar Corvera usa ka Electrical Engineer gikan sa Barangay Tabon, Bislig City, Surigao del Sur. Ang iyang pamaagi sa serbisyo publiko naporma sa disiplina sa engineering — sukoa ang problema nga maayo, planuha ang buhat, buhata kini sa husto, ug panubag sa resulta.",
      text2:
        "Kini nga seksyon nagrekord kung kinsa si Edgar ug ang kasinatian nga iyang dala sa pagserbisyo sa iyang komunidad. Edukasyon, propesyonal nga kasinatian, serbisyo publiko, buhat sa komite, ug mga pasidungog gilista dinhi — ug ang kumpirmado lamang ang gipakita.",
      photoLabel: "Edgar Corvera — litrato",
      toBePublished: "Ipagawas pa",
      principlesTitle: "Mga prinsipyo sa pagtrabaho",
    },
    aboutChapters: [
      {
        title: "Edukasyon",
        text: "Si Edgar Corvera usa ka Electrical Engineer. Ang kumpirmadong background sa edukasyon ipagawas dinhi human makumpirma.",
      },
      {
        title: "Propesyonal nga kasinatian",
        text: "Kasinatian sa engineering ug industriya — ang kumpirmadong mga posisyon ug organisasyon ilista dinhi human makumpirma.",
      },
      {
        title: "Serbisyo publiko",
        text: "Ang dokumentadong kasinatian sa serbisyo publiko ipasabot dinhi, uban ang mga petsa ug detalye.",
      },
      {
        title: "Komite ug responsibilidad",
        text: "Ang mga may kalabotan nga bahin sa komite ug responsibilidad ilista dinhi human makumpirma.",
      },
      {
        title: "Mga pasidungog",
        text: "Ang dokumentadong mga award ug pasidungog ipakita dinhi, uban sa ilang mga tinubdan.",
      },
    ],
    aboutPrinciples: [
      {
        title: "Kamatinuoron una sa panagway",
        text: "Tin-aw nga komunikasyon ug disiplinadong pagpanubag sa publiko.",
      },
      {
        title: "Katawhan una sa pribilihiyo",
        text: "Ang matag desisyon gitimbang batok sa interes sa ordinaryong mga molupyo.",
      },
      {
        title: "Buhat una sa pulong",
        text: "Ang kalamboan masukod sa nahimo, dili sa gipahibalo.",
      },
    ],
    publicService: {
      eyebrow: "Serbisyo publiko",
      titleLine1: "Usa ka rekord",
      titleLine2: "sa responsibilidad.",
      intro:
        "Ang serbisyo publiko masukod sa buhat. Kini ang mga bahin sa kinabuhing publiko nga tuyo ni Edgar nga akuon para sa Barangay Tabon — ug ang espesipikong rekord luyo sa matag usa ipagawas human makumpirma.",
      noteLabel: "Mahitungod niini nga rekord",
      noteText:
        "Ang espesipikong mga detalye sa serbisyo — mga petsa, posisyon, ug responsibilidad — idugang dinhi human makumpirma. Walay gilista nga dili mapakita.",
      recogLabel: "Mga pasidungog",
      recogText:
        "Ang dokumentadong mga award ug pasidungog ilista dinhi, uban sa ilang mga tinubdan, human makumpirma.",
      recogState: "Wala pay gipagawas",
    },
    publicServiceRecords: [
      {
        area: "Buhat sa konseho ug lehislatura",
        detail:
          "Ang mga ordinansa, resolusyon, ug desisyon naghulma kung giunsa pagdumala ang usa ka komunidad. Kini buhat sa publiko — gitun-an sa dayag, gidesisyunan sa dayag, ug may tulubagon sa mga tawo nga gialagaran.",
        tag: "Responsibilidad sa publiko",
      },
      {
        area: "Infrastructure ug public works",
        detail:
          "Mga dalan, drainage, mga edipisyo sa publiko, ug ang pisikal nga pundasyon sa adlaw-adlaw nga kinabuhi — ang disiplina sa usa ka inhinyero nga nagpaabot nga ang mga estruktura masukod, luwas, ug maatiman.",
        tag: "Engineering",
      },
      {
        area: "Renewable energy ug kuryente",
        detail:
          "Limpyo, kasaligang kuryente para sa mga panimalay ug pasilidad sa publiko — pagplano sa enerhiya nga nagsugod sa tinuod nga panginahanglan sa komunidad, dili sa mga ulohan sa balita.",
        tag: "Engineering",
      },
      {
        area: "Waterworks ug suplay sa tubig",
        detail:
          "Luwas, kasaligang tubig para sa mga panimalay ug barangay — ang serbisyo nga dili mabuhi ang komunidad kung wala, nga sabton isip serbisyo, dili isip baligya.",
        tag: "Responsibilidad sa publiko",
      },
      {
        area: "Budget · ways & means · taxation",
        detail:
          "Giunsa pagtigom, pagbadyet, ug pagpanubag ang mga kahinguhaan sa publiko — disiplina nga nanalipod sa matag piso nga iya sa komunidad.",
        tag: "Responsibilidad sa publiko",
      },
      {
        area: "Kaayohan sa komunidad ug mga programa",
        detail:
          "Senior citizens, kabatan-onan, panginabuhi, panglawas, edukasyon, ug pagpangandam sa katalagman — serbisyo nga naglangkob sa adlaw-adlaw nga kabalaka sa komunidad.",
        tag: "Komunidad",
      },
    ],
    forTabon: {
      eyebrow: "Para sa Tabon",
      titleLine1: "Ang komunidad",
      titleLine2: "ang sentro niini.",
      intro:
        "Usa ka lugar sa pagpaminaw, pagsabot sa importante, pagkonektar sa mga tawo sa impormasyon, ug pagsubay sa buhat nga nakaapekto sa atong komunidad.",
      linkCardGo: "Mga balita sa komunidad",
      openAction: "Ablihi ang feature",
      openPrefix: "Ablihi",
      backLabel: "Tanang feature sa Tabon",
      fallbackLabel: "Mga feature sa Tabon",
      pledge:
        "Walay gi-post niini nga plataporma nga wala pa mahitabo — ug walay saad nga himoon sa dili pa kini andam.",
    },
    forTabonFeatures: [
      { title: "Unsay importante kanimo", text: "Survey sa prayoridad sa komunidad." },
      { title: "Sultihi kami sa kabalaka", text: "Ang mga residente makasumiter og kabalaka sa komunidad." },
      { title: "Pangutana kang Edgar", text: "Mga pangutana, sugyot, o mensahe." },
      { title: "Pulso sa Komunidad", text: "Gitipon nga feedback ug mga prayoridad sa komunidad." },
      {
        title: "Impormasyon sa Tabon",
        text: "Mapuslanong impormasyon sa komunidad, mga pahibalo, kontak, ug kahinguhaan.",
      },
      {
        title: "Mga Balita sa Komunidad",
        text: "Balita, mga kalihokan, pahibalo, ug kumpirmadong mga kalamboan.",
      },
      { title: "Mga Proyekto sa Komunidad", text: "Subaya ang mga proyekto nga nakaapekto sa atong komunidad." },
      { title: "Open Tabon", text: "Mga proyekto, report, dokumento, ug mga prayoridad sa komunidad." },
    ],
    updates: {
      eyebrow: "Mga Balita",
      title: "Balita sa Tabon.",
      note: "Ang mga balita sa komunidad, pahibalo, miting, ug kumpirmadong mga kalamboan ipagawas dinhi — walay butang nga wala pa mahitabo.",
      emptyLabel: "Balita sa Tabon",
      emptyText: "Wala pay balita nga gipagawas.",
      emptyMeta: "Ang mga balita makita dinhi human ipagawas",
      status: "Walay gi-post dinhi nga wala pa mahitabo.",
    },
    media: {
      eyebrow: "Media",
      title: "Usa ka biswal nga rekord sa serbisyo publiko.",
      note: "Ang potograpiya, bidyo, ug press coverage ipagawas dinhi human kini mahimo. Walay label nga ibutang sa dili pa kini anaa.",
      featuredAria: "Edgar Corvera — biswal nga rekord",
      featuredCaption: "Biswal nga rekord",
      recordSuffix: "rekord ni Edgar Corvera",
      stripLabel: "Press ug coverage",
      stripText:
        "Ang mga press release ug coverage i-archive dinhi, uban ang mga link sa orihinal nga mga tinubdan, human ipagawas.",
      stripState: "Wala pay gipagawas",
    },
    mediaSlots: [
      "Komunidad",
      "Serbisyo Publiko",
      "Mga Kalihokan",
      "Mga Aktibidad",
      "Press",
      "Bidyo",
    ],
    getInvolved: {
      eyebrow: "Pag-apil",
      titleLine1: "Ang partisipasyon",
      titleLine2: "maoy nagpalihok sa komunidad.",
      text: "Tubaga ang survey, ipataas ang kabalaka, pagsumiter og sugyot, pangutana, o magpabiling updated. Ang matag porma sa partisipasyon makatabang sa plataporma sa pagserbisyo sa komunidad.",
      detailCommunity: "Komunidad",
      detailReach: "Pagkontak sa team",
      detailReachValue: "Pinaagi sa mga form niini nga panid.",
      panelTitle: "Mga paagi sa pag-apil",
      signupTitle: "Dawat og mga balita",
      nameLabel: "Ngalan",
      namePlaceholder: "Imong ngalan",
      emailLabel: "Email",
      emptyError: "Palihog isulat ang imong ngalan ug email.",
      invalidError: "Palihog isulat ang husto nga email address.",
      submit: "Pag-sign up sa mga balita",
      submitting: "Ginasumiter…",
      successLead: "Salamat. Magdawat ka na og mga balita",
    },
    getInvolvedActions: [
      {
        label: "Tubaga ang survey sa komunidad",
        detail: "Tabangi pagtakda kung unsay unahon sa Tabon.",
      },
      {
        label: "Sultihi kami sa kabalaka",
        detail: "I-log ang kabalaka sa komunidad aron ma-dokumento ug masundan.",
      },
      { label: "Pagsumiter og sugyot", detail: "Ang sugyot usa ka porma sa serbisyo." },
      {
        label: "Pangutana kang Edgar",
        detail: "Ang mga pangutana ug mensahe kolektahon para repasohon ug tubagon.",
      },
    ],
    digitalCta: {
      eyebrow: "Digital nga Kampanya",
      titleLine1: "USA KA KAMPANYA.",
      titleLine2: "USA KA DIGITAL NGA SISTEMA.",
      sub: "Giunsa pag-organisar ug pagpadagan ang kampanya luyo sa entablado — ug giunsa kini pagpabiling konektado sa komunidad.",
      cta: "Tan-awa ang sistema",
      note: "Ang digital nga bahin sa kampanya — dili kini campaign manager, ug dili kini komersyal nga serbisyo.",
    },
    digitalCtaMeta: [
      { label: "Koordinasyon", text: "Usa ka tin-aw nga sistema sa operasyon" },
      { label: "Dokumentasyon", text: "Ang buhat sa field narekord samtang nahitabo" },
      { label: "Koneksyon", text: "Ang komunidad nagpabiling updated" },
      { label: "Tulubagon", text: "Matinud-anon, transparent, subay sa balaod" },
    ],
    volunteerCta: {
      eyebrow: "Volunteer",
      titleLine1: "Ang imong oras makahimo",
      titleLine2: "og kalainan.",
      sub: "Gusto ka bang moapil sa buhat nga nagakahitabo sa Tabon?",
      cta: "Apil sa Team",
      note: "Ang pagparehistro dili garantiya sa papel. Ang team sa kampanya nagrepaso sa mga rehistrasyon ug mokontak kung adunay mga oportunidad.",
    },
    volunteerCtaMeta: [
      { label: "Komunidad", text: "Mga kalihokan sa komunidad ug suporta sa field" },
      { label: "Dokumentasyon", text: "Potograpiya ug mga rekord" },
      { label: "Komunikasyon", text: "Social media ug outreach" },
      { label: "Logistics", text: "Koordinasyon sa event ug suporta" },
    ],
    common: {
      saveError: "Dili ma-save ang mensahe karon. Palihog sulayi pag-usab.",
    },
    footer: {
      ctaEyebrow: "Digital nga Kampanya",
      ctaTitle: "Usa ka mas konektadong kampanya.",
      ctaBtn: "Tan-awa ang sistema",
      tagline: "Serbisyo publiko para sa komunidad sa Barangay Tabon.",
      colSite: "Mga Pahina",
      colFeatures: "Para sa Tabon",
      colCommunity: "Komunidad",
      navSiteLabel: "Site",
      navFeaturesLabel: "Mga feature sa komunidad",
      getInvolved: "Apil",
      openTabonTransparency: "Open Tabon — transparency",
      legalSuffix: "Gitukod para sa komunidad sa Barangay Tabon.",
      motto: "Matinud-anong buhat · para sa mga tawo sa Tabon",
    },
    footerSite: ["Mahitungod", "Serbisyo Publiko", "Para sa Tabon", "Mga Balita", "Media"],
    footerFeatures: [
      "Survey sa komunidad",
      "Mga kabalaka sa komunidad",
      "Pangutana kang Edgar",
      "Mga proyekto sa komunidad",
      "Open Tabon",
    ],
    volunteerPage: {
      title: "Mahimong bahin sa buhat sa Tabon.",
      sub: "Bisan makatabang ka sa mga kalihokan sa komunidad, dokumentasyon, komunikasyon, logistics, o uban pang buhat sa kampanya, iparehistro ang imong interes sa team.",
      formTitle: "Pagparehistro sa volunteer",
      formSub:
        "Kini nga rehistrasyon magpahibalo sa team kung giunsa ka makatabang. Ang pagparehistro dili garantiya sa papel, apan nagpahibalo kini sa kampanya nga gusto kang moapil.",
      fullName: "Tibuok ngalan",
      required: "(gikinahanglan)",
      contactNumber: "Numero sa kontak",
      email: "Email address",
      areaLabel: "Dapit / lokasyon",
      areaPlaceholder: "e.g. Purok 3",
      helpLabel: "Giunsa nimo gusto pagtabang?",
      helpDefault: "Pagpili og bahin",
      skillsLabel: "Abilidad / kasinatian",
      availabilityLabel: "Kanus-a bakante",
      availabilityPlaceholder: "e.g. Weekends, gabii, flexible",
      activitiesLabel: "Gipalabi nga mga kalihokan",
      messageLabel: "Dugang mensahe",
      optional: "Opsyonal",
      consent:
        "Miuyon ko nga kontakon sa team sa kampanya mahitungod sa mga oportunidad sa pag-volunteer.",
      privacyNote:
        "Kini nga rehistrasyon dawaton nga pribado sa operations team sa kampanya. Ang imong impormasyon dili ipakita sa publikong site.",
      submit: "Pag-volunteer na",
      submitting: "Ginasumiter…",
      successTitle: "Salamat sa pag-volunteer.",
      successLead: "Nadawat na ang imong rehistrasyon",
      successTail:
        "Ang team sa kampanya mokontak kanimo mahitungod sa mga oportunidad nga anaa.",
      errName: "Kinahanglan ang ngalan.",
      errContact: "Kinahanglan ang kontak.",
      errEmail: "Isulat ang husto nga email address.",
      errConsent: "Kinahanglan ang pag-uyon.",
    },
    volunteerHelp: [
      "Mga Kalihokan sa Komunidad",
      "Dokumentasyon / Potograpiya",
      "Bidyo",
      "Social Media",
      "Komunikasyon",
      "Logistics",
      "Suporta sa Event",
      "Uban pa",
    ],
    digitalCampaign: {
      heroMono: "Ang digital nga bahin sa kampanya",
      heroTitle1: "USA KA KAMPANYA.",
      heroTitle2: "USA KA DIGITAL NGA SISTEMA.",
      heroLede:
        "Usa ka organisado nga digital nga sistema luyo sa kampanya para sa mga tawo sa Barangay Tabon — pagkoordinar sa team, pagdokumento sa buhat, ug pagkonektar sa komunidad sa usa ka tin-aw ug matinud-anon nga lugar.",
      heroCta1: "Unsay madawat sa kampanya",
      heroCta2: "Giunsa kini pagkonektar",
      panelCaption: "Pag-organisar · Dokumentasyon · Koneksyon",
      panelMono: "SEP 2026 — human sa eleksyon",
      heroFootLeft: "Digital nga operasyon · alang sa rekord",
      heroFootRight: "Walay presyo. Walay gibaligya.",
      moreEyebrow: "Labaw pa sa website",
      moreTitle: "Ang digital nga bahin sa kampanya.",
      moreP1Lead:
        "Ang kampanya nagsalig sa koordinasyon, timing, ug pagsalig. Kini nga panid naghulagway sa ",
      moreP1Strong: "digital nga sistema",
      moreP1Rest:
        " nga nagmintinar niining tulo ka butang — usa ka naglihok nga sapaw sa operasyon luyo sa kampanya, dili usa ka panid sa marketing.",
      moreP2:
        "Kini ang digital nga bahin sa kampanya sa serbisyo publiko para sa Barangay Tabon. Gituyo kini nga pagkaposisyon: mao kini kung giunsa pag-organisar ug pagpadagan ang kampanya — dili kini komersyal nga serbisyo.",
      whatEyebrow: "Unsay madawat sa kampanya",
      whatTitle1: "Kahan-ay, rekord,",
      whatTitle2: "ug tin-aw nga dalan.",
      qrEyebrow: "Usa ka yano nga link",
      qrTitle: "Ang sistema sa QR.",
      qrSub:
        "Usa ka ma-scan nga link nagkonektar sa komunidad sa publikong impormasyon sa kampanya — walay kalat, walay kalibog.",
      fieldEyebrow: "Ebidensya labaw sa mga pangangkon",
      fieldTitle: "Dokumentasyon sa field.",
      fieldSub:
        "Ang tinuod nga buhat sa kampanya nahitabo sa ground. Ang matag kalihokan sa field gidokumento samtang nahitabo — gipetsahan, gibutangan og lugar, ug gi-file — aron ang rekord magbase sa tinuod nga nahimo.",
      communityEyebrow: "Duha ka direksyon, dili usa",
      communityTitle: "Koneksyon sa komunidad.",
      communitySub:
        "Ang digital naglihok uban sa kontak sa field. Ang kampanya naminaw sama kadaghan sa pagsulti niini, ug ang matag mensahe makaabot sa tinuod nga tawo.",
      opsEyebrow: "Luyo sa entablado",
      opsTitle: "Pribadong operasyon.",
      opsSub:
        "Sulod sa kampanya, ang kontrolado ug gipaambit nga luna nagmintinar sa koordinasyon sa team — bulag sa makita sa publiko.",
      socialEyebrow: "Makanunayon, dili isabwag",
      socialTitle: "Command center sa social media.",
      socialSub:
        "Usa ka kalendaryo, usa ka tingog. Ang mga post giplano, gi-orasan, ug gipabiling tawhanon sa matag agianan.",
      mediaEyebrow: "Usa ka organisadong arkibo",
      mediaTitle: "Ang library sa media.",
      mediaSub:
        "Mga litrato, dokumento, ug materyales — ginganlan, gipetsahan, ug gi-file sa usa ka ma-search nga lugar nga nagsuporta sa kampanya ug sa rekord nga ibilin niini.",
      activitiesEyebrow: "Ang dalan sa kampanya",
      activitiesTitle: "Mga kalihokan sa kampanya.",
      activitiesSub:
        "Ang kampanya gibutang sa mga hugna — gikan sa pagpangandam hangtod sa opisyal nga panahon hangtod sa limpyo nga closeout — kanunayng subay sa balaod.",
      connectEyebrow: "Usa ka sistema, upat ka bahin",
      connectTitle: "Giunsa pagkonektar ang tanan.",
      roleEyebrow: "Akong bahin niini",
      roleTitle: "Akong papel.",
      roleSub:
        "Ang digital nga bahin sa kampanya — dili ang campaign manager, ug dili kini komersyal nga serbisyo.",
      teamEyebrow: "Ang buhat gipaambit",
      teamTitle: "Ang team sa kampanya.",
      teamSub:
        "Ang digital usa ka bahin sa mas dako nga paningkamot, nga gidala sa mga organizer, volunteer, ug supporter.",
      timelineEyebrow: "Ang tibuok dalan",
      timelineTitle: "SEP 2026 — closeout.",
      closingEyebrow: "Ang punto sa tanan",
      closingTitle1: "Dili isabwag.",
      closingTitle2: "Mas konektado.",
      closingText:
        "Kung ang team organisado, ang rekord matinud-anon, ug ang komunidad nagpabiling konektado — ang kampanya modagan sama sa angay sa kinabuhing publiko: sinukod, dayag, ug may tulubagon.",
      closingCta1: "Balik sa site sa kampanya",
      closingCta2: "Apil sa Team",
      complianceLabel: "Matinud-anong mga utlanan",
    },
    dcGets: [
      {
        title: "Usa ka tinubdan sa kamatuoran",
        text: "Ang matag miyembro sa team sa kampanya nagtrabaho gikan sa samang updated nga rekord — mga iskedyul, buluhaton, lokasyon, ug mga update anaa sa usa ka lugar.",
      },
      {
        title: "Tin-aw nga timeline sa kampanya",
        text: "Gikan sa pagpangandam hangtod sa katapusang mga adlaw hangtod sa closeout, ang tibuok dalan sa kampanya gibutang sa dayag — aron ang team kanunayng masayod kung asa kini nagbarog.",
      },
      {
        title: "Limpyo, organisadong media",
        text: "Ang mga litrato, dokumento, ug materyales ginganlan, gipetsahan, ug gitipigan sa usa ka library — andam kung kinahanglanon, sayon pangitaon unya.",
      },
      {
        title: "Pagsalig sa publiko pinaagi sa transparency",
        text: "Ang samang disiplina nga gigamit sa serbisyo publiko — gitun-an, gidokumento, ug may tulubagon — gigamit usab kung giunsa pagpresentar sa kampanya ang kaugalingon.",
      },
    ],
    dcQr: [
      {
        title: "Usa ka link nga ma-scan sa komunidad",
        text: "Usa ka QR code nga gibutang sa mga materyales sa kampanya padulong sa publikong digital nga presensya sa kampanya — walay kalat, walay kalibog.",
      },
      {
        title: "Impormasyon sa usa ka lugar",
        text: "Ang gikinahanglan sa komunidad — kinsa, unsa, asa, kanus-a — gitigom sa usa ka yano ug kasaligang lugar nga maablihan sa bisan unsang telepono.",
      },
      {
        title: "Sayon i-update, kanunayng tukma",
        text: "Tungod kay sentralisado ang sulod, ang pagtul-id o update makita dayon sa tanan. Ang komunidad kanunayng nagbasa sa pinakabag-ong bersyon.",
      },
    ],
    dcField: [
      {
        title: "Ebidensya labaw sa pangangkon",
        text: "Ang buhat sa field gidokumento samtang nahitabo — uban ang petsa, lugar, ug detalye — aron ang rekord magbase sa tinuod nga nahimo.",
      },
      {
        title: "Organisadong mga rekord",
        text: "Ang matag entry gi-file nga makanunayon, aron ang team makahinumdom gayod kung unsay nahitabo, asa, ug kanus-a.",
      },
      {
        title: "May tulubagon sa komunidad",
        text: "Ang samang disiplina nga gigamit ni Edgar sa serbisyo publiko — sukod, plano, buhat, tubag — gigamit usab sa kaugalingong kalihokan sa kampanya.",
      },
    ],
    dcCommunity: [
      {
        title: "Duha ka direksyon, dili usa",
        text: "Ang kampanya naminaw sama kadaghan sa pagsulti niini — ang mga kabalaka, pangutana, ug input gikan sa komunidad gikolekta ug giila.",
      },
      {
        title: "Sa matag tingog",
        text: "Ang digital usa lang ka agianan sa daghan. Naglihok kini uban sa mga pagbisita sa field ug atubangay nga kontak diin nagpuyo ug naglihok ang komunidad.",
      },
      {
        title: "Tinuod nga mga tawo, tinuod nga mga tubag",
        text: "Ang matag mensahe basahon ug tubagon sa team — dili sa awtomatikong kasaba. Ang koneksyon nagpabiling tawhanon.",
      },
    ],
    dcOps: [
      {
        title: "Internal nga koordinasyon",
        text: "Usa ka gipaambit nga luna para sa team sa pagkoordinar sa mga buluhaton, iskedyul, ug responsibilidad — nga dili isabwag ang impormasyon sa mga mensahe.",
      },
      {
        title: "Kontroladong akses",
        text: "Ang pribadong dapit sa operasyon bulag ug restriktado. Ang awtorisadong mga miyembro lang sa team sa kampanya ang makasulod niini.",
      },
      {
        title: "Protektadong mga rekord",
        text: "Ang internal nga mga nota ug pagplano gibulag sa publikong materyal — giprotektahan samtang aktibo ang kampanya.",
      },
    ],
    dcSocial: [
      {
        title: "Usa ka kalendaryo, usa ka tingog",
        text: "Ang mga post sa mga agianan giplano gikan sa usa ka kalendaryo, nga nagmintinar sa mensahe nga makanunayon ug sa dagan nga malig-on.",
      },
      {
        title: "Makanunayong timing",
        text: "Ang materyal mogawas sa iskedyul nga kontrolado sa team — dili isabwag nga pinakalit, kondili sa malig-on ug planadong ritmo.",
      },
      {
        title: "Pabiling tawhanon",
        text: "Ang mga kampanya labing katuohan kung kini sama sa tinuod nga mga tawo nga nakigsulti sa mga silingan, dili sama sa output sa makina.",
      },
    ],
    dcMediaLib: [
      {
        title: "Usa ka organisadong arkibo",
        text: "Ang mga litrato, dokumento, ug materyales gi-file base sa petsa ug katuyuan — ma-search, may label, ug sayon kuhaon kung kinahanglanon.",
      },
      {
        title: "Ginganlan ug gipetsahan",
        text: "Ang makanunayong pagngalan nagpabiling magamit ang library bisan mga buwan ang milabay, ug nagpasayon sa pagsubay sa bisan unsang hulagway pabalik sa higayon niini.",
      },
      {
        title: "Andam para sa rekord",
        text: "Ang organisadong library nagsuporta sa kampanya ug sa molungtad nga publikong rekord nga ibilin niini.",
      },
    ],
    dcActivities: [
      {
        title: "Pagpangandam",
        text: "Pagtukod ug pagsulay sa mga galamiton nga saligan sa kampanya, aron ang tanan andam sa dili pa magsugod ang opisyal nga panahon sa kampanya.",
      },
      {
        title: "Opisyal nga kampanya",
        text: "Ang kinauyokan sa kampanya — konektado, dokumentadong kalihokan sa field sa tibuok barangay, adlaw-adlaw.",
      },
      {
        title: "Ang katapusang mga adlaw",
        text: "Usa ka nakapokus, tinuyo nga panapos nga bahin — sinukod, dili dinaganan, ug kanunayng subay sa balaod.",
      },
      {
        title: "Kahilom",
        text: "Ang tanang kalihokan sa kampanya mohunong sumala sa gikinahanglan sa balaod. Ang kahilom mas kusog pa kay sa bisan unsang post.",
      },
      {
        title: "Adlaw sa eleksyon",
        text: "Ang team moatras aron padesisyonon ang mga tawo sa Tabon — nga kalmado, limpyo, ug walay babag.",
      },
      {
        title: "Closeout",
        text: "Ang buhat gipanubag, ang mga rekord gipreserbar, ug ang kampanya nagsira nga dayag ug matinud-anon.",
      },
    ],
    dcConnects: [
      {
        title: "Field",
        tag: "Unsay nahitabo sa ground",
        text: "Ang tinubdan sa tinuod nga buhat sa kampanya — mga pagbisita, kalihokan, ug mga tawo luyo niini.",
      },
      {
        title: "Dokumentasyon",
        tag: "Ang rekord",
        text: "Ang matag kalihokan sa field makuha, mapetsahan, ug ma-file — aron ang buhat dili mawala o dili ma-verify.",
      },
      {
        title: "Operasyon",
        tag: "Ang koordinasyon",
        text: "Usa ka pribadong luna diin ang team nagplano, nag-iskedyul, ug nagkoordinar libot niana nga rekord.",
      },
      {
        title: "Publiko",
        tag: "Ang koneksyon",
        text: "Usa ka limpyo, matinud-anon nga publikong presensya nga naporma gikan sa dokumentadong buhat — aron ang komunidad makadungog sa tinuod nga nahitabo.",
      },
    ],
    dcFlow: ["Field", "Dokumentasyon", "Operasyon", "Publiko"],
    dcRoles: [
      {
        title: "Digital lead ug operator",
        text: "Akong papel ang digital nga bahin sa kampanya — pagtukod ug pagpadagan sa mga sistema nga nagmintinar sa team nga organisado ug sa publiko nga konektado. Dili ako ang campaign manager ug wala ako mag-angkon nga ako kini.",
      },
      {
        title: "Kasaligan, dili pasikat",
        text: "Ang buhat nagpabor sa kasaligan kaysa kasaba. Ang mga sistema gitukod aron modagan nga malig-on, sayon operahan, ug makalahutay sa lisod nga iskedyul.",
      },
      {
        title: "May tulubagon sa samang mga lagda",
        text: "Ang tanang buhaton sa digital nga bahin magpabilin sulod sa samang legal ug etikal nga mga utlanan nga nagdumala sa tibuok kampanya.",
      },
    ],
    dcTeamRoles: [
      {
        title: "Ang tibuok team",
        text: "Ang team sa kampanya mas lapad pa kay sa bisan unsang papel — ang mga organizer, volunteer, ug supporter matag usa nagdala sa buhat.",
      },
      {
        title: "Akong lugar niini",
        text: "Gisuportahan nako ang digital nga sistema sa team aron mas sayon ang koordinasyon ug mas lig-on ang koneksyon sa publiko.",
      },
      {
        title: "Daghan pa ang buhaton",
        text: "Ang digital usa ka bahin sa mas dako nga paningkamot. Ang buhat sa field, kontak sa komunidad, ug ang mga tawo mismo nagpabilin sa sentro.",
      },
    ],
    dcTimeline: [
      {
        label: "Pagtukod ug pagpangandam",
        items: ["Digital nga sistema gitukod ug gisulayan", "Team onboarding ug mga papel giklaro"],
      },
      {
        label: "Opisyal nga kampanya",
        items: ["Konektadong kalihokan sa field", "Makanunayong presensya sa publiko", "Kumpletong dokumentasyon"],
      },
      {
        label: "Kahilom ug adlaw sa eleksyon",
        items: ["Kalihokan sa kampanya gipahunong sumala sa gikinahanglan", "Mga tawo sa Tabon ang modesisyon"],
      },
      {
        label: "Closeout",
        items: ["Buhat gipanubag", "Mga rekord gipreserbar", "Kampanya gisirhan nga matinud-anon"],
      },
    ],
    dcCompliance: [
      "Kini nga panid mao ang digital nga bahin sa operasyon sa kampanya sa serbisyo publiko — dili kini komersyal nga tanyag. Walay presyo, walay pakete, ug walay gibaligya.",
      "Kini usa ka demonstrasyon ug konsepto sa pagplano. Walay mga numero, estadistika, resulta, o testimonial niini nga panid nga tinuod o giangkon.",
      "Ang kampanya molihok nga hugot sulod sa mga lagda ug iskedyul nga gitakda sa Commission on Elections (COMELEC). Walay bisan unsa dinhi nga molabaw o mopuli niana nga mga lagda.",
      "Walay bisan unsa niini nga panid ang legal nga tambag. Ang kampanya mosunod sa giya sa kwalipikadong abogado sa tanang butang.",
      "Ang tanang gipagawas nga sulod nagpakita lang sa kumpirmadong impormasyon, subay sa samang pagkamatinud-anon nga gitukod kini nga site.",
    ],
    featSurvey: {
      eyebrow: "Feature 01 · Survey sa komunidad",
      title: "Unsay unahon sa Tabon?",
      intro:
        "Kung usa ka butang sa atong komunidad ang imong pauswagon una, unsa kini? Ang mga tubag kolektahon nga anonim ug gamiton lang aron masabtan kung unsay importante sa komunidad.",
      cardTitle: "Pilii ang bahin nga unahon",
      specifyLabel: "Espesipikara",
      answerPlaceholder: "Imong tubag",
      noteLabel: "Opsyonal nga nota",
      noteHint: "(uban pang angay namong masayran)",
      notePlaceholder: "Opsyonal",
      errSelect: "Palihog pilii ang bahin nga unahon sa Tabon.",
      submit: "Isumiter ang tubag",
      submitting: "Ginasumiter…",
      successLead: "Salamat. Nadawat na ang imong tubag",
      postNote:
        "Ang kinatibuk-ang pagtan-aw makita sa Pulso sa Komunidad human nga adunay tinuod nga hugpong sa mga tubag.",
      emptyLabel: "Mga tubag sa komunidad",
      emptyText: "Ang mga tubag sa komunidad makita dinhi samtang moapil ang mga residente.",
      emptyMeta: "Ang resulta ipakita lang human ma-verify",
    },
    surveyPriorities: [
      "Dalan ug drainage",
      "Tubig",
      "Kuryente",
      "Panglawas",
      "Edukasyon",
      "Panginabuhi",
      "Kaluwasan sa publiko",
      "Kinaiyahan",
      "Sports ug kalingawan",
      "Senior citizens",
      "Kabatan-onan",
      "Pagpangandam sa katalagman",
      "Uban pa",
    ],
    featConcerns: {
      eyebrow: "Feature 02 · Mga kabalaka sa komunidad",
      title: "Sultihi kami sa kabalaka",
      intro:
        "Ipaambit ang kabalaka aron kini ma-dokumento, masabtan, ug masundan. Ang kabalaka gi-log uban ang reference number ug molihok sa mga ang-ang sa ubos samtang kini repasohon ug aksyonan.",
      stagesLabel: "Mga ang-ang sa pagrepaso sa kabalaka",
      catLabel: "Kategoriya",
      catDefault: "Pagpili og kategoriya",
      areaLabel: "Lokasyon / dapit",
      areaHint: "(purok, sitio, street, landmark)",
      areaPlaceholder: "e.g. purok 3, duol sa covered court",
      descLabel: "Deskripsyon",
      descPlaceholder: "Ihulagway ang kabalaka nga konkreto",
      photoLabel: "Litrato",
      optional: "(opsyonal)",
      nameLabel: "Ngalan",
      namePlaceholder: "Imong ngalan",
      contactLabel: "Kontak",
      contactHint: "(opsyonal, para sa follow-up)",
      contactPlaceholder: "Telepono o email",
      fileSelected: "napili",
      errCat: "Palihog pagpili og kategoriya para sa kabalaka.",
      errDesc: "Palihog ihulagway ang kabalaka sa mubo.",
      submit: "Isumiter ang kabalaka",
      submitting: "Ginasumiter…",
      successLead: "Salamat. Nadawat na ang imong kabalaka",
      successTail: "Kini repasohon ug sundan.",
      emptyLabel: "Gipagawas nga mga kabalaka",
      emptyText:
        "Wala pay mga kabalaka nga gipagawas. Ang mga publikong update mahitungod sa mga kabalaka makita dinhi samtang kini madawat, repasohon, ug sundan.",
      emptyMeta: "Wala pay gipagawas",
    },
    concernCategories: [
      "Dalan ug drainage",
      "Tubig",
      "Kuryente",
      "Panglawas",
      "Edukasyon",
      "Panginabuhi",
      "Kaluwasan sa publiko",
      "Kinaiyahan",
      "Sports ug kalingawan",
      "Senior citizens",
      "Kabatan-onan",
      "Pagpangandam sa katalagman",
      "Uban pa",
    ],
    concernStages: ["Nadawat", "Ginarepaso", "Ginabuhat", "Nasulbad"],
    featAsk: {
      eyebrow: "Feature 03 · Pangutana kang Edgar",
      title: "Pangutana kang Edgar",
      intro:
        "Aduna kay pangutana, sugyot, o mensahe? Ang imong mensahe kolektahon para repasohon ug tubagon. Ang mga kinatibuk-ang pangutana nga makatabang sa tibuok komunidad mahimong ipagawas nga walay imong personal nga detalye.",
      nameLabel: "Ngalan",
      namePlaceholder: "Imong ngalan",
      contactLabel: "Kontak",
      contactPlaceholder: "Telepono o email",
      msgLabel: "Pangutana o mensahe",
      msgPlaceholder: "Isulat ang imong mensahe",
      errName: "Palihog ipaambit ang imong ngalan aron matubag ang mensahe.",
      errContact: "Palihog pagbutang og paagi aron mareplyan ka.",
      errMsg: "Palihog isulat ang imong pangutana o mensahe.",
      submit: "Ipadala ang mensahe",
      submitting: "Ginasumiter…",
      helper: "Ang mga mensahe kolektahon para repasohon ug tubagon.",
      successLead: "Salamat. Nadawat na ang imong mensahe",
      successTail: "ug kini repasohon ug tubagon.",
      emptyLabel: "Mga publikong tubag",
      emptyText:
        "Ang mga tubag sa kinatibuk-ang mga pangutana sa komunidad ipagawas dinhi kung kini mapuslanon sa tanan sa Barangay Tabon.",
      emptyMeta: "Wala pay gipagawas",
    },
    featPulse: {
      eyebrow: "Feature 04 · Pulso sa komunidad",
      title: "Unsay gisulti sa Tabon kanato",
      intro:
        "Kini ang gipaambit nga pagtan-aw sa feedback sa komunidad — mga prayoridad, kabalaka, ug mga hilisgotan nga gipatungha pinaagi sa mga feature niini nga panid. Ang mga numero ipakita lang kung kini tinuod.",
      emptyLabel: "Pulso sa komunidad",
      emptyText:
        "Ang mga tubag sa komunidad makita dinhi samtang moapil ang mga residente. Walay ipagawas hangtod ma-verify ang datos.",
      emptyMeta: "Naghulat sa datos sa komunidad",
    },
    pulseSlots: [
      { label: "Mga nag-unang prayoridad", note: "Wala pay datos" },
      { label: "Partisipasyon sa survey", note: "Wala pay datos" },
      { label: "Mga kabalaka sa komunidad", note: "Wala pay datos" },
      { label: "Bag-ong mga hilisgotan", note: "Wala pay datos" },
    ],
    featInfo: {
      eyebrow: "Feature 05 · Impormasyon sa Tabon",
      title: "Impormasyon sa Tabon",
      intro:
        "Usa ka lugar para sa impormasyon nga tinuod nga gigamit sa mga residente — mga kontak, pahibalo, kalihokan, serbisyo, ug kahinguhaan para sa Barangay Tabon. Matag kategoriya, ang mapuslanong impormasyon ipagawas dinhi samtang kini giandam ug ma-verify.",
      nothingYet: "Wala pay gipagawas",
      hallLabel: "Barangay hall",
      hallText:
        "Barangay Tabon, Bislig City, Surigao del Sur. Ang opisyal nga mga detalye sa kontak sa barangay hall ipagawas dinhi samtang kini ma-verify.",
    },
    infoCategories: [
      {
        title: "Mga Pahibalo",
        note: "Ang opisyal nga mga pahibalo para sa Barangay Tabon i-post dinhi.",
      },
      {
        title: "Mga Kalihokan",
        note: "Ang mga miting, konsultasyon, ug kalihokan sa komunidad ilista dinhi.",
      },
      {
        title: "Importanteng mga kontak",
        note: "Ang mga verified nga kontak para sa barangay ug serbisyo publiko ilista dinhi.",
      },
      {
        title: "Impormasyon sa emerhensya",
        note: "Ang mga numero sa emerhensya ug pamaagi ipagawas dinhi samtang kini ma-verify.",
      },
      {
        title: "Mga serbisyo sa publiko",
        note: "Ang mga serbisyo publiko nga magamit sa mga residente ipasabot dinhi.",
      },
      {
        title: "Mga programa sa komunidad",
        note: "Ang nagapadayon ug umaabot nga mga programa sa komunidad ipakita dinhi.",
      },
      {
        title: "Lokal nga mga kahinguhaan",
        note: "Ang mga lokal nga opisina, pasilidad, ug mapuslanong kahinguhaan tigomon dinhi.",
      },
      {
        title: "Mapuslanong mga dokumento",
        note: "Ang mga publikong dokumento ug reperensya himoong magamit dinhi.",
      },
    ],
    featProjects: {
      eyebrow: "Feature 07 · Mga proyekto sa komunidad",
      title: "Mga Proyekto sa Komunidad",
      intro:
        "Ang buhat nga nakaapekto sa atong komunidad kinahanglan makita: unsay gibuhat, asa, uban ang unsang timeline, ug unsang ang-ang na ang naabot. Ang mga proyekto gisubay nga yano — walay gipakita nga wala pa mahitabo.",
      statusesLabel: "Mga estado sa proyekto",
      cardTitle: "Giunsa pagsubay ang matag proyekto",
      emptyLabel: "Mga proyekto sa komunidad",
      emptyText: "Ang mga proyekto sa komunidad ipakita dinhi samtang kini ipagawas.",
      emptyMeta: "Wala pay gipagawas",
    },
    projectStatuses: ["Pagplano", "Ginabuhat", "Nahuman"],
    projectRows: [
      { label: "Ngalan sa proyekto", desc: "Unsa ang proyekto ug kinsa ang gialagaran" },
      { label: "Lokasyon", desc: "Purok, sitio, dalan, o dapit" },
      { label: "Kategoriya", desc: "Tubig, kuryente, dalan, estruktura, mga programa" },
      { label: "Estado", desc: "Pagplano · Ginabuhat · Nahuman" },
      { label: "Timeline", desc: "Petsa sa pagsugod ug target" },
      { label: "Kalamboan", desc: "Mga update batok sa plano" },
      { label: "Dokumentasyon", desc: "Mga litrato ug publikong dokumento" },
    ],
    featOpen: {
      eyebrow: "Feature 08 · Open Tabon",
      title: "Open Tabon",
      intro:
        "Ang transparency mao ang palisiya sa operasyon niini nga plataporma: ang publikong impormasyon ipaambit nga yano — mga proyekto, kalamboan, report, dokumento, mga nahimo, ug ang mga prayoridad nga gitakda sa komunidad. Walay ipagawas dinhi nga dili verified, ug walay gitago nga publiko.",
      nothingYet: "Wala pay gipagawas",
      emptyLabel: "Open Tabon",
      emptyText:
        "Ang mga verified nga publikong dokumento, kalamboan sa proyekto, ug mga prayoridad sa komunidad ipaambit dinhi.",
      emptyMeta: "Andam na para sa mga publikong rekord",
    },
    openAreas: [
      {
        title: "Mga proyektong publiko",
        note: "Ang mga proyekto sa komunidad ug ang ilang estado ipaambit dinhi.",
      },
      {
        title: "Kalamboan sa proyekto",
        note: "Ang kumpirmadong mga update sa kalamboan ipagawas dinhi.",
      },
      {
        title: "Mga report",
        note: "Ang mga publikong report himoong magamit dinhi.",
      },
      {
        title: "Mga publikong dokumento",
        note: "Ang mga publikong dokumento ipagawas dinhi.",
      },
      {
        title: "Mga nahimo",
        note: "Ang dokumentadong mga nahimo ipakita dinhi, uban ang mga tinubdan.",
      },
      {
        title: "Mga prayoridad sa komunidad",
        note: "Ang mga prayoridad nga gitakda uban sa komunidad ilista dinhi human mahuman.",
      },
    ],
  },
};
