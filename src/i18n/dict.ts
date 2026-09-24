export type Lang = 'en' | 'bi'

export interface NavLinkEntry {
  id: string
  label: string
  href: string
}

export interface Content {
  meta: {
    title: string
    description: string
    ogDescription: string
  }
  a11y: {
    skipToContent: string
    openMenu: string
    closeMenu: string
    home: string
    backToTop: string
    previous: string
    next: string
    slideLabelPrefix: string
    slidesRegion: string
    language: string
  }
  brand: {
    /** Invariant: do not translate */
    name: string
    /** Invariant: do not translate */
    fullName: string
    title: string
    /** Invariant: place names */
    location: string
    /** Invariant */
    locationShort: string
    /** Invariant */
    city: string
    province: string
    /** Informational election label (kickers, drawer footer, crest caption) */
    election: string
    /** Action-oriented sticky header CTA -> #connect */
    connectCta: string
  }
  nav: {
    about: string
    publicService: string
    forTabon: string
    updates: string
    media: string
    connect: string
  }
  hero: {
    slide0Kicker: string
    slide0Body: string
    slide0Cta1: string
    slide0Cta2: string
    slide1Kicker: string
    slide1TitleLine1: string
    slide1TitleLine2: string
    slide1TitleLine3: string
    slide1Body: string
    slide1Cta1: string
    slide1Cta2: string
  }
  about: {
    kicker: string
    titleLine1: string
    titleLine2: string
    tagline: string
    intro: string
    factEducation: string
    factProfession: string
    factBackground: string
    factPublicService: string
    educationValue: string
    professionValue: string
    backgroundValue: string
    publicServiceValue: string
    ctaPrimary: string
    ctaSecondary: string
    tile1: string
    tile2: string
    tile3: string
  }
  publicService: {
    eyebrow: string
    title: string
    description: string
  }
  timeline: {
    title: string
    subtitle: string
    detail: string
  }[]
  legislative: {
    eyebrow: string
    title: string
    description: string
    cityOrdinanceFallback: string
    disclaimer: string
  }
  legislativeRecords: {
    title: string
    role: string
  }[]
  committeesSection: {
    eyebrow: string
    title: string
    description: string
  }
  committees: {
    title: string
    subtitle: string
    description: string
  }[]
  stats: {
    eyebrow: string
    title: string
    votesLabel: string
    disclaimer: string
  }
  elections: {
    race: string
    secondary: string
    result: string
  }[]
  vision: {
    eyebrow: string
    title: string
    description: string
  }
  visionAreas: {
    title: string
    subtitle: string | null
    description: string
  }[]
  updatesSection: {
    eyebrow: string
    title: string
    description: string
    rightLinkLabel: string
  }
  updates: {
    tag: string
    category: string
    title: string
    excerpt: string
    date: string
  }[]
  media: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    crestTitle: string
    crestNote: string
    galleryLabel: string
  }
  mediaItems: {
    category: string
    caption: string
  }[]
  connectSection: {
    kicker: string
    titleLine1: string
    titleLine2: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    note: string
  }
  footer: {
    pagesHeading: string
    disclaimer: string
    copyrightSuffix: string
  }
}

/**
 * Invariants (never translated): Edgar Corvera, EC, Barangay Tabon,
 * Bislig City, Surigao del Sur, University of San Jose–Recoletos,
 * Philsaga Mining, ordinance numbers, years, vote figures, URLs.
 */
export const dict: Record<Lang, Content> = {
  en: {
    meta: {
      title: 'Edgar Corvera — For Barangay Captain | Tabon, Bislig City',
      description:
        'Edgar Corvera — Candidate for Barangay Captain, Barangay Tabon, Bislig City. Electrical Engineer · Public Service · Experience',
      ogDescription:
        'Electrical Engineer · Public Service · Experience. Candidate for Barangay Captain, Barangay Tabon, Bislig City. 2026 Barangay & SK Elections.',
    },
    a11y: {
      skipToContent: 'Skip to content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Edgar Corvera — home',
      backToTop: 'Edgar Corvera — back to top',
      previous: 'Previous',
      next: 'Next',
      slideLabelPrefix: 'Slide',
      slidesRegion: 'Slides',
      language: 'Language',
    },
    brand: {
      name: 'Edgar Corvera',
      fullName: 'Edgar Corvera',
      title: 'Candidate for Barangay Captain',
      location: 'Barangay Tabon · Bislig City',
      locationShort: 'Barangay Tabon',
      city: 'Bislig City',
      province: 'Surigao del Sur, Philippines',
      election: '2026 Barangay & SK Elections',
      connectCta: 'Get Involved',
    },
    nav: {
      about: 'About',
      publicService: 'Public Service',
      forTabon: 'For Tabon',
      updates: 'Updates',
      media: 'Media',
      connect: 'Connect',
    },
    hero: {
      slide0Kicker: 'Candidate for Barangay Captain',
      slide0Body:
        'An electrical engineer and former project manager with years of experience in Bislig City public service — bringing technical discipline and community focus to Barangay Tabon.',
      slide0Cta1: 'Meet Edgar',
      slide0Cta2: 'Vision for Tabon',
      slide1Kicker: 'Barangay Tabon · Bislig City',
      slide1TitleLine1: 'Engineering.',
      slide1TitleLine2: 'Public Service.',
      slide1TitleLine3: 'Experience.',
      slide1Body:
        'Bringing technical discipline and community focus home to Barangay Tabon.',
      slide1Cta1: 'Public Service',
      slide1Cta2: 'Updates',
    },
    about: {
      kicker: '2026 Barangay & SK Elections',
      titleLine1: 'Barangay',
      titleLine2: 'Captain',
      tagline: 'Barangay Tabon · Bislig City',
      intro:
        'An electrical engineer and former project manager with years of experience in Bislig City public service — bringing technical discipline and community focus to Barangay Tabon.',
      factEducation: 'Education',
      factProfession: 'Profession',
      factBackground: 'Background',
      factPublicService: 'Public Service',
      educationValue: 'University of San Jose–Recoletos, Cebu',
      professionValue: 'Electrical Engineer',
      backgroundValue: 'Former project manager at Philsaga Mining',
      publicServiceValue: 'Multiple terms as Bislig City councilor',
      ctaPrimary: 'View Public Service',
      ctaSecondary: 'Vision for Tabon',
      tile1: 'Public Service',
      tile2: 'Legislative Record',
      tile3: 'For Tabon',
    },
    publicService: {
      eyebrow: 'The Journey So Far',
      title: 'Service with Purpose',
      description:
        'From engineering discipline to project leadership, from industry to elective public service — a path of experience that leads to Barangay Tabon.',
    },
    timeline: [
      {
        title: 'Engineering',
        subtitle: 'Technical Foundation',
        detail:
          'Electrical engineering background with technical training and professional practice.',
      },
      {
        title: 'Project Management',
        subtitle: 'Philsaga Mining',
        detail:
          'Former project manager delivering complex works with accountability and precision.',
      },
      {
        title: 'Public Service',
        subtitle: 'Bislig City',
        detail:
          'Transitioned from industry into elective public service for Bislig communities.',
      },
      {
        title: 'City Council',
        subtitle: 'Multiple Terms',
        detail:
          'Served multiple terms as Bislig City councilor, focused on works and development.',
      },
      {
        title: '2026',
        subtitle: 'Barangay Tabon',
        detail: 'Candidate for Barangay Captain — bringing experience home to Tabon.',
      },
    ],
    legislative: {
      eyebrow: 'Ordinances & Measures',
      title: 'Legislative Record',
      description:
        'Selected measures sponsored and authored during service on the Bislig City Council.',
      cityOrdinanceFallback: 'City Ordinance',
      disclaimer:
        'Selected records shown for presentation purposes and subject to verification before publication.',
    },
    legislativeRecords: [
      { title: 'Anti-Smoking Ordinance', role: 'Co-sponsor' },
      { title: 'Anti-Rice-Wastage Measure', role: 'Principal Author' },
      { title: 'Renewable Energy Resolutions', role: 'Co-sponsor' },
      { title: 'City Budget / Infrastructure Measures', role: 'Sponsor / Co-author' },
    ],
    committeesSection: {
      eyebrow: 'Council Committees',
      title: 'Committee Experience',
      description:
        'Areas of committee work where engineering discipline meets city governance.',
    },
    committees: [
      {
        title: 'Public Works',
        subtitle: '& Infrastructure',
        description:
          'Committee experience centered on public works and infrastructure — the foundations of daily life in Bislig City.',
      },
      {
        title: 'Renewable Energy',
        subtitle: '& Waterworks Development',
        description:
          'Engagement in renewable energy and waterworks development — stewardship of resources communities depend on.',
      },
    ],
    stats: {
      eyebrow: 'Election Record',
      title: 'Proven in the field.',
      votesLabel: 'Votes',
      disclaimer:
        'Election figures shown are based on supplied research and should be verified before official publication.',
    },
    elections: [
      { race: 'City Council Election', secondary: '2nd Place', result: 'Won' },
      {
        race: 'City Council Election',
        secondary: '30.56% · 11th Place',
        result: 'Did not win a seat',
      },
    ],
    vision: {
      eyebrow: 'Vision & Platform',
      title: 'Agenda for Tabon',
      description:
        'Six priority areas that will guide the campaign and the work ahead for Barangay Tabon.',
    },
    visionAreas: [
      {
        title: 'Infrastructure',
        subtitle: null,
        description:
          'Reliable roads, drainage, public spaces, facilities and the infrastructure that supports everyday community life.',
      },
      {
        title: 'Environment',
        subtitle: '& Sustainability',
        description:
          "Environmental stewardship, sustainability initiatives, and preservation of Tabon's natural resources.",
      },
      {
        title: 'Health',
        subtitle: '& Community Welfare',
        description:
          'Community health services, wellness programs, and initiatives that support the well-being of residents.',
      },
      {
        title: 'Youth',
        subtitle: '& Sports',
        description:
          'Youth development programs, sports activities, and opportunities for young residents in Tabon.',
      },
      {
        title: 'Livelihood',
        subtitle: '& Local Development',
        description:
          'Economic opportunities, livelihood programs, and local development initiatives for the community.',
      },
      {
        title: 'Peace, Safety',
        subtitle: '& Disaster Preparedness',
        description:
          'Community safety, peace and order, and disaster preparedness for the welfare of all residents.',
      },
    ],
    updatesSection: {
      eyebrow: 'Campaign Newsroom',
      title: 'Latest Updates',
      description:
        'Verified campaign activities and community updates as they are published.',
      rightLinkLabel: 'Media',
    },
    updates: [
      {
        tag: 'COMING SOON',
        category: 'Community',
        title: 'Campaign updates forthcoming',
        excerpt: 'Verified campaign activities and community updates will be published here.',
        date: '2026',
      },
    ],
    media: {
      eyebrow: 'Featured',
      titleLine1: 'In the',
      titleLine2: 'community.',
      description:
        'Barangay life, public service, and shared civic moments across Tabon and Bislig City.',
      ctaPrimary: 'Follow Updates',
      ctaSecondary: 'Connect',
      crestTitle: 'The campaign for Barangay Tabon',
      crestNote: 'Media compilation will be published here once verified',
      galleryLabel: 'Gallery',
    },
    mediaItems: [
      { category: 'Community', caption: 'Barangay life and shared spaces' },
      { category: 'Public Service', caption: 'Service in Bislig City' },
      { category: 'Events', caption: 'Gatherings and civic moments' },
      { category: 'Documentation', caption: 'Record of public work' },
      { category: 'Community', caption: 'Tabon’s everyday landscape' },
      { category: 'Public Service', caption: 'Infrastructure and works' },
    ],
    connectSection: {
      kicker: '2026 Barangay & SK Elections',
      titleLine1: 'Stay',
      titleLine2: 'connected.',
      description:
        'Follow the campaign, learn more about Edgar’s public-service record, and stay informed about activities in Barangay Tabon.',
      ctaPrimary: 'Follow Updates',
      ctaSecondary: 'Vision for Tabon',
      note: 'Official contact channels will be published here once verified.',
    },
    footer: {
      pagesHeading: 'Pages',
      disclaimer: 'Election and legislative figures subject to verification.',
      copyrightSuffix: 'Edgar Corvera Campaign',
    },
  },

  bi: {
    meta: {
      title: 'Edgar Corvera — Para sa Kapitan sa Barangay | Tabon, Bislig City',
      description:
        'Edgar Corvera — Kandidato sa Kapitan sa Barangay, Barangay Tabon, Bislig City. Electrical Engineer · Serbisyo Publiko · Kasinatian',
      ogDescription:
        'Electrical Engineer · Serbisyo Publiko · Kasinatian. Kandidato sa Kapitan sa Barangay, Barangay Tabon, Bislig City. 2026 Barangay ug SK Elections.',
    },
    a11y: {
      skipToContent: 'Laktaw sa sulod',
      openMenu: 'Ablihi ang menu',
      closeMenu: 'Isira ang menu',
      home: 'Edgar Corvera — home',
      backToTop: 'Edgar Corvera — balik sa taas',
      previous: 'Miagi',
      next: 'Sunod',
      slideLabelPrefix: 'Slide',
      slidesRegion: 'Mga slide',
      language: 'Pinulongan',
    },
    brand: {
      name: 'Edgar Corvera',
      fullName: 'Edgar Corvera',
      title: 'Kandidato sa Kapitan sa Barangay',
      location: 'Barangay Tabon · Bislig City',
      locationShort: 'Barangay Tabon',
      city: 'Bislig City',
      province: 'Surigao del Sur, Pilipinas',
      election: '2026 Barangay ug SK Elections',
      connectCta: 'Apil Na',
    },
    nav: {
      about: 'Mahitungod',
      publicService: 'Serbisyo Publiko',
      forTabon: 'Para sa Tabon',
      updates: 'Mga Balita',
      media: 'Media',
      connect: 'Pakig-uban',
    },
    hero: {
      slide0Kicker: 'Kandidato sa Kapitan sa Barangay',
      slide0Body:
        'Usa ka electrical engineer ug kanhi project manager nga adunay daghang tuig nga kasinatian sa serbisyo publiko sa Bislig City — nagdala sa teknikal nga disiplina ug pagtagad sa komunidad ngadto sa Barangay Tabon.',
      slide0Cta1: 'Ila-ilha si Edgar',
      slide0Cta2: 'Panan-awon para sa Tabon',
      slide1Kicker: 'Barangay Tabon · Bislig City',
      slide1TitleLine1: 'Engineering.',
      slide1TitleLine2: 'Serbisyo Publiko.',
      slide1TitleLine3: 'Kasinatian.',
      slide1Body:
        'Pagdala sa teknikal nga disiplina ug pagtagad sa komunidad pauli sa Barangay Tabon.',
      slide1Cta1: 'Serbisyo Publiko',
      slide1Cta2: 'Mga Balita',
    },
    about: {
      kicker: '2026 Barangay ug SK Elections',
      titleLine1: 'Kapitan',
      titleLine2: 'sa Barangay',
      tagline: 'Barangay Tabon · Bislig City',
      intro:
        'Usa ka electrical engineer ug kanhi project manager nga adunay daghang tuig nga kasinatian sa serbisyo publiko sa Bislig City — nagdala sa teknikal nga disiplina ug pagtagad sa komunidad ngadto sa Barangay Tabon.',
      factEducation: 'Edukasyon',
      factProfession: 'Propesyon',
      factBackground: 'Trabaho Sa Una',
      factPublicService: 'Serbisyo Publiko',
      educationValue: 'University of San Jose–Recoletos, Cebu',
      professionValue: 'Electrical Engineer',
      backgroundValue: 'Kanhi project manager sa Philsaga Mining',
      publicServiceValue: 'Kapila ka termino isip konsehal sa Bislig City',
      ctaPrimary: 'Tan-awa ang Serbisyo',
      ctaSecondary: 'Panan-awon para sa Tabon',
      tile1: 'Serbisyo Publiko',
      tile2: 'Rekord sa Lehislatura',
      tile3: 'Para sa Tabon',
    },
    publicService: {
      eyebrow: 'Ang Panaw Hangtod Karon',
      title: 'Serbisyo nga may Katuyuan',
      description:
        'Gikan sa disiplina sa engineering ngadto sa pagpangulo sa proyekto, gikan sa industriya ngadto sa pinili nga serbisyo publiko — usa ka dalan sa kasinatian nga padulong sa Barangay Tabon.',
    },
    timeline: [
      {
        title: 'Engineering',
        subtitle: 'Sukaranang Teknikal',
        detail:
          'Background sa electrical engineering nga adunay teknikal nga pagbansay ug propesyonal nga praktis.',
      },
      {
        title: 'Pagdumala sa Proyekto',
        subtitle: 'Philsaga Mining',
        detail:
          'Kanhi project manager nga nagdumala sa mga komplikadong buhat nga may tulubagon ug katukma.',
      },
      {
        title: 'Serbisyo Publiko',
        subtitle: 'Bislig City',
        detail:
          'Nibulhin gikan sa industriya ngadto sa pinili nga serbisyo publiko alang sa mga komunidad sa Bislig.',
      },
      {
        title: 'Konseho sa Syudad',
        subtitle: 'Kapila ka Termino',
        detail:
          'Nisilbi sa kapila ka termino isip konsehal sa Bislig City, naka-focus sa mga buhat ug kalamboan.',
      },
      {
        title: '2026',
        subtitle: 'Barangay Tabon',
        detail: 'Kandidato sa Kapitan sa Barangay — nagdala sa kasinatian pauli sa Tabon.',
      },
    ],
    legislative: {
      eyebrow: 'Mga Ordinansa ug Lakang',
      title: 'Rekord sa Lehislatura',
      description:
        'Piniling mga lakang nga gisuportahan ug gisulat atol sa pagserbisyo sa Konseho sa Bislig City.',
      cityOrdinanceFallback: 'Ordinansa sa Syudad',
      disclaimer:
        'Piniling mga rekord nga gipakita para sa presentasyon ug kinahanglan pa kumpirmahon sa dili pa imantala.',
    },
    legislativeRecords: [
      { title: 'Anti-Smoking Ordinance', role: 'Co-sponsor' },
      { title: 'Anti-Rice-Wastage Measure', role: 'Principal Author' },
      { title: 'Renewable Energy Resolutions', role: 'Co-sponsor' },
      { title: 'City Budget / Infrastructure Measures', role: 'Sponsor / Co-author' },
    ],
    committeesSection: {
      eyebrow: 'Mga Komite sa Konseho',
      title: 'Kasinatian sa Komite',
      description:
        'Mga bahin sa buhat sa komite diin ang disiplina sa engineering nagtagbo sa pagdumala sa syudad.',
    },
    committees: [
      {
        title: 'Public Works',
        subtitle: '& Infrastructure',
        description:
          'Kasinatian sa komite nga naka-focus sa public works ug infrastructure — ang pundasyon sa adlaw-adlaw nga kinabuhi sa Bislig City.',
      },
      {
        title: 'Renewable Energy',
        subtitle: '& Waterworks Development',
        description:
          'Pag-apil sa renewable energy ug waterworks development — pag-atiman sa mga kahinguhaan nga gisaligan sa komunidad.',
      },
    ],
    stats: {
      eyebrow: 'Rekord sa Eleksyon',
      title: 'Napamatud-an sa buhat.',
      votesLabel: 'Mga Boto',
      disclaimer:
        'Ang mga numero sa eleksyon gibase sa gihatag nga research ug kinahanglan pa kumpirmahon sa dili pa opisyal nga imantala.',
    },
    elections: [
      { race: 'Eleksyon sa Konseho sa Syudad', secondary: 'Ika-2 nga Pwesto', result: 'Nakadaog' },
      {
        race: 'Eleksyon sa Konseho sa Syudad',
        secondary: '30.56% · Ika-11 nga Pwesto',
        result: 'Wala makakuha og pwesto',
      },
    ],
    vision: {
      eyebrow: 'Panan-awon ug Plataporma',
      title: 'Adyenda para sa Tabon',
      description:
        'Unom ka prayoridad nga mogiya sa kampanya ug sa buhat nga nagpaabot para sa Barangay Tabon.',
    },
    visionAreas: [
      {
        title: 'Infrastructure',
        subtitle: null,
        description:
          'Kasigan nga mga dalan, drainage, mga luna sa publiko, pasilidad ug infrastructure nga nagsuporta sa adlaw-adlaw nga kinabuhi sa komunidad.',
      },
      {
        title: 'Environment',
        subtitle: '& Sustainability',
        description:
          'Pag-atiman sa kinaiyahan, mga inisyatiba sa sustainability, ug pagpreserbar sa natural nga kahinguhaan sa Tabon.',
      },
      {
        title: 'Health',
        subtitle: '& Community Welfare',
        description:
          'Serbisyo sa panglawas sa komunidad, mga programa sa kaayohan, ug mga inisyatiba nga nagsuporta sa kahimsog sa mga residente.',
      },
      {
        title: 'Youth',
        subtitle: '& Sports',
        description:
          'Mga programa sa kalamboan sa kabatan-onan, mga kalihokan sa sports, ug mga oportunidad para sa mga batan-on sa Tabon.',
      },
      {
        title: 'Livelihood',
        subtitle: '& Local Development',
        description:
          'Mga oportunidad sa panginabuhi, mga programa sa livelihood, ug mga inisyatiba sa lokal nga kalamboan para sa komunidad.',
      },
      {
        title: 'Peace, Safety',
        subtitle: '& Disaster Preparedness',
        description:
          'Kaluwasan sa komunidad, kahusay ug kalinaw, ug pagpangandam sa katalagman para sa kaayohan sa tanang residente.',
      },
    ],
    updatesSection: {
      eyebrow: 'Balitaan sa Kampanya',
      title: 'Pinakabag-ong Balita',
      description: 'Kumpirmadong mga kalihokan sa kampanya ug mga balita sa komunidad.',
      rightLinkLabel: 'Media',
    },
    updates: [
      {
        tag: 'COMING SOON',
        category: 'Komunidad',
        title: 'Mga balita sa kampanya ipagawas pa',
        excerpt:
          'Ang kumpirmadong mga kalihokan sa kampanya ug mga balita sa komunidad ipagawas dinhi.',
        date: '2026',
      },
    ],
    media: {
      eyebrow: 'Pinasahi',
      titleLine1: 'Sa',
      titleLine2: 'komunidad.',
      description:
        'Kinabuhi sa barangay, serbisyo publiko, ug mga panagtapok sa civic sa Tabon ug Bislig City.',
      ctaPrimary: 'Sunda ang Balita',
      ctaSecondary: 'Pakig-uban',
      crestTitle: 'Ang kampanya para sa Barangay Tabon',
      crestNote: 'Ang mga hulagway ipagawas dinhi human makumpirma',
      galleryLabel: 'Galerya',
    },
    mediaItems: [
      { category: 'Komunidad', caption: 'Kinabuhi sa barangay ug mga luna' },
      { category: 'Serbisyo Publiko', caption: 'Serbisyo sa Bislig City' },
      { category: 'Mga Kalihokan', caption: 'Mga panagtapok ug civic nga higayon' },
      { category: 'Dokumentasyon', caption: 'Rekord sa buhat sa publiko' },
      { category: 'Komunidad', caption: 'Adlaw-adlaw nga talan-awon sa Tabon' },
      { category: 'Serbisyo Publiko', caption: 'Infrastructure ug mga buhat' },
    ],
    connectSection: {
      kicker: '2026 Barangay ug SK Elections',
      titleLine1: 'Pabiling',
      titleLine2: 'konektado.',
      description:
        'Sunda ang kampanya, ilha pa ang rekord sa serbisyo publiko ni Edgar, ug magpabiling updated sa mga kalihokan sa Barangay Tabon.',
      ctaPrimary: 'Sunda ang Balita',
      ctaSecondary: 'Panan-awon para sa Tabon',
      note: 'Ang opisyal nga mga paagi sa pagkontak ipagawas dinhi human makumpirma.',
    },
    footer: {
      pagesHeading: 'Mga Pahina',
      disclaimer: 'Ang mga numero sa eleksyon ug lehislatura kinahanglan pa kumpirmahon.',
      copyrightSuffix: 'Kampanya ni Edgar Corvera',
    },
  },
}

/** Ordered navigation model — ids + hrefs are invariant, labels translate. */
export function getNavLinks(t: Content): NavLinkEntry[] {
  return [
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'public-service', label: t.nav.publicService, href: '#public-service' },
    { id: 'for-tabon', label: t.nav.forTabon, href: '#for-tabon' },
    { id: 'updates', label: t.nav.updates, href: '#updates' },
    { id: 'media', label: t.nav.media, href: '#media' },
    { id: 'connect', label: t.nav.connect, href: '#connect' },
  ]
}
