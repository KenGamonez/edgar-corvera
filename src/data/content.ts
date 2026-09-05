export const brand = {
  name: 'Edgar Corvera',
  fullName: 'Edgar Corvera',
  knownAs: 'Edgar Corvera',
  title: 'Candidate for Barangay Captain',
  location: 'Barangay Tabon · Bislig City',
  locationShort: 'Barangay Tabon',
  city: 'Bislig City',
  province: 'Surigao del Sur, Philippines',
  election: '2026 Barangay & SK Elections',
  tagline: 'Electrical Engineer · Public Service · Experience',
} as const

export const navLinks = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'public-service', label: 'Public Service', href: '#public-service' },
  { id: 'for-tabon', label: 'For Tabon', href: '#for-tabon' },
  { id: 'updates', label: 'Updates', href: '#updates' },
  { id: 'media', label: 'Media', href: '#media' },
] as const

export const about = {
  education: 'University of San Jose–Recoletos, Cebu',
  profession: 'Electrical Engineer',
  previousRole: 'Former project manager at Philsaga Mining',
  publicService: 'Multiple terms as Bislig City councilor',
  intro:
    'An electrical engineer and former project manager with years of experience in Bislig City public service — bringing technical discipline and community focus to Barangay Tabon.',
} as const



export const timeline = [
  {
    id: 'engineering',
    title: 'Engineering',
    subtitle: 'Technical Foundation',
    detail: 'Electrical engineering background with technical training and professional practice.',
  },
  {
    id: 'philsaga',
    title: 'Project Management',
    subtitle: 'Philsaga Mining',
    detail: 'Former project manager delivering complex works with accountability and precision.',
  },
  {
    id: 'public-service',
    title: 'Public Service',
    subtitle: 'Bislig City',
    detail: 'Transitioned from industry into elective public service for Bislig communities.',
  },
  {
    id: 'councilor',
    title: 'City Council',
    subtitle: 'Multiple Terms',
    detail: 'Served multiple terms as Bislig City councilor, focused on works and development.',
  },
  {
    id: '2026',
    title: '2026',
    subtitle: 'Barangay Tabon',
    detail: 'Candidate for Barangay Captain — bringing experience home to Tabon.',
  },
] as const

export const legislativeRecords = [
  {
    number: '01',
    title: 'Anti-Smoking Ordinance',
    reference: 'Ordinance No. 2017-05',
    year: '2017',
    role: 'Co-sponsor',
  },
  {
    number: '02',
    title: 'Anti-Rice-Wastage Measure',
    reference: null,
    year: '2023',
    role: 'Principal Author',
  },
  {
    number: '03',
    title: 'Renewable Energy Resolutions',
    reference: null,
    year: '2023',
    role: 'Co-sponsor',
  },
  {
    number: '04',
    title: 'City Budget / Infrastructure Measures',
    reference: null,
    year: '2022–2025',
    role: 'Sponsor / Co-author',
  },
] as const

export const committees = [
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
] as const

export const elections = [
  {
    year: '2022',
    race: 'City Council Election',
    votes: '≈22,845',
    votesLabel: 'Votes',
    secondary: '2nd Place',
    result: 'Won',
    won: true,
  },
  {
    year: '2025',
    race: 'City Council Election',
    votes: '22,114',
    votesLabel: 'Votes',
    secondary: '30.56% · 11th Place',
    result: 'Did not win a seat',
    won: false,
  },
] as const

export const visionAreas = [
  { 
    number: '01', 
    title: 'Infrastructure', 
    subtitle: null,
    description: 'Reliable roads, drainage, public spaces, facilities and the infrastructure that supports everyday community life.'
  },
  { 
    number: '02', 
    title: 'Environment', 
    subtitle: '& Sustainability',
    description: 'Environmental stewardship, sustainability initiatives, and preservation of Tabon\'s natural resources.'
  },
  { 
    number: '03', 
    title: 'Health', 
    subtitle: '& Community Welfare',
    description: 'Community health services, wellness programs, and initiatives that support the well-being of residents.'
  },
  { 
    number: '04', 
    title: 'Youth', 
    subtitle: '& Sports',
    description: 'Youth development programs, sports activities, and opportunities for young residents in Tabon.'
  },
  { 
    number: '05', 
    title: 'Livelihood', 
    subtitle: '& Local Development',
    description: 'Economic opportunities, livelihood programs, and local development initiatives for the community.'
  },
  { 
    number: '06', 
    title: 'Peace, Safety', 
    subtitle: '& Disaster Preparedness',
    description: 'Community safety, peace and order, and disaster preparedness for the welfare of all residents.'
  },
] as const

export const updates = [
  {
    id: 'update-1',
    tag: 'COMING SOON',
    category: 'Community',
    title: 'Campaign updates forthcoming',
    excerpt:
      'Verified campaign activities and community updates will be published here.',
    date: '2026',
  },
] as const

export const mediaItems = [
  {
    id: 'm1',
    category: 'Community',
    caption: 'Barangay life and shared spaces',
    aspect: 'wide' as const,
  },
  {
    id: 'm2',
    category: 'Public Service',
    caption: 'Service in Bislig City',
    aspect: 'tall' as const,
  },
  {
    id: 'm3',
    category: 'Events',
    caption: 'Gatherings and civic moments',
    aspect: 'square' as const,
  },
  {
    id: 'm4',
    category: 'Documentation',
    caption: 'Record of public work',
    aspect: 'wide' as const,
  },
  {
    id: 'm5',
    category: 'Community',
    caption: 'Tabon’s everyday landscape',
    aspect: 'square' as const,
  },
  {
    id: 'm6',
    category: 'Public Service',
    caption: 'Infrastructure and works',
    aspect: 'tall' as const,
  },
] as const

export const disclaimers = {
  legislative:
    'Selected records shown for presentation purposes and subject to verification before publication.',
  elections:
    'Election figures shown are based on supplied research and should be verified before official publication.',
} as const
