/** Verified personal details, project history, links and supplied certificate assets for Abhaypratap Sikarwar. */
export type Palette = { from: string; via: string; to: string; accent: string };
const cyan: Palette = { from: '#031d27', via: '#075565', to: '#05090f', accent: '#00f7ff' };
const magenta: Palette = { from: '#210923', via: '#67205e', to: '#08070d', accent: '#ff20df' };
const blue: Palette = { from: '#06162b', via: '#114a7b', to: '#05080d', accent: '#48aaff' };
const green: Palette = { from: '#061c18', via: '#126451', to: '#05090a', accent: '#46e3a8' };
const amber: Palette = { from: '#211506', via: '#70501b', to: '#090807', accent: '#ffca67' };

export const profile = {
  fullName: 'Abhaypratap Sikarwar',
  displayName: 'Abhaypratap Sikarwar',
  firstName: 'ABHAYPRATAP',
  seriesTag: 'THE ENGINEERING SERIES',
  originalLabel: 'AN ABHAYPRATAP ORIGINAL',
  role: 'CSE Student • IoT & Software Developer',
  tagline: ['C++ Developer', 'Computer Science Engineering', 'IoT & Robotics Projects'],
  intro: 'I am a Computer Science Engineering student at Shri Ram Institute of Information Technology, Banmore. I enjoy turning ideas into practical prototypes by combining programming, electronics, embedded systems and problem-solving. My work includes IoT projects, robotics, access-control systems and engineering projects presented at technical events.',
  location: 'Banmore, Madhya Pradesh, India',
  email: 'abhaysikarwar326@gmail.com',
  phone: '6267936255',
  links: {
    linkedin: 'https://www.linkedin.com/in/abhay-sikarwar-a5b9792b1/',
    github: 'https://github.com/abhaypratap1278',
    instagram: 'https://www.instagram.com/abhaysikarwar__?igsi=NHhydXlhdWxnOGEz',
    whatsapp: 'https://wa.me/916267936255',
    facebook: 'https://www.facebook.com/share/191ExXiFrU/',
  },
  resumePdf: '',
  portrait: { src: '/portfolio/images/dp.jpg', srcSet: '', alt: 'Abhaypratap Sikarwar' },
  interests: ['IoT Programming', 'System Design', 'Machine Learning'],
};

export const education = [
  { school: 'Shri Ram Institute of Information Technology', place: 'Banmore, Madhya Pradesh', degree: 'B.Tech / Computer Science Engineering', period: 'Batch 2024', score: 'Software • Embedded Systems • IoT' },
];
export const experience = [
  { company: 'Personal & Academic Projects', role: 'Engineering Student', place: 'Madhya Pradesh, India', period: 'Ongoing', points: ['Building practical projects that connect engineering concepts with real-world use cases.', 'Interested in embedded systems, access-control concepts and software development.'] },
];
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; image?: string; gallery?: string[]; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export const projects: Project[] = [
  { id: 'garbage-boat', title: 'Smart Garbage Cleaning Boat', year: '1st Position · Technoparv', genre: 'IoT • Mechanical Design • Environmental Innovation', logline: 'A prototype boat designed to collect floating waste from water bodies using a controlled boat platform and a mechanical waste-collection mechanism.', stack: ['Microcontroller', 'Sensors', 'Motors', 'Mechanical Collection'], image: '/portfolio/images/garbage-boat1.jpg', gallery: ['/portfolio/images/garbage-boat.jpg', '/portfolio/images/garbage-boat1.jpg', '/portfolio/images/garbage-boat2.jpg', '/portfolio/images/garbage-boat3.jpg'], build: ['Designed and developed a prototype for collecting floating waste from water surfaces.', 'Combined boat movement, connected components and a collection mechanism into one concept.'], features: ['Floating-waste collection concept', 'Microcontroller-based control', 'Mechanical collection mechanism', 'Environmental problem solving'], metrics: [{ value: '1st', label: 'position at Technoparv' }, { value: 'IoT', label: 'project category' }], palette: cyan, motif: 'flow' },
  { id: 'smart-home', title: 'Smart Home IoT Dashboard', year: 'IoT Project', genre: 'NodeMCU • Blynk • Home Automation', logline: 'A home-automation system using NodeMCU, relay modules and Blynk IoT to remotely monitor and control connected appliances.', stack: ['NodeMCU', 'Blynk IoT', 'Relay Modules', 'Wi-Fi'], image: '/portfolio/images/project1.jpg', gallery: ['/portfolio/images/project1.jpg', '/portfolio/images/proj.jpg'], build: ['Connected a NodeMCU controller to the Blynk IoT interface.', 'Used relay modules to control connected home appliances.'], features: ['Remote appliance control', 'IoT app integration', 'NodeMCU-based controller', 'Relay-based switching'], metrics: [{ value: 'IoT', label: 'remote control' }, { value: 'Blynk', label: 'app interface' }], palette: blue, motif: 'tenants' },
  { id: 'obstacle-robot', title: 'Autonomous Obstacle Avoidance Robot', year: 'Robotics Project', genre: 'Robotics • Ultrasonic Sensors • Embedded Systems', logline: 'A microcontroller-based robot designed to detect obstacles and navigate its surroundings autonomously.', stack: ['Ultrasonic Sensors', 'Motors', 'Microcontroller', 'PID Control'], image: '/portfolio/images/project2.jpg', gallery: ['/portfolio/images/project2.jpg', '/portfolio/images/iitb4.jpg'], build: ['Uses ultrasonic sensing to detect obstacles ahead.', 'Processes sensor input to control movement and support smoother navigation.'], features: ['Obstacle detection', 'Autonomous movement concept', 'Motor control', 'Sensor-based navigation'], metrics: [{ value: 'Real-time', label: 'obstacle detection' }, { value: 'Robotics', label: 'project area' }], palette: green, motif: 'shield' },
  { id: 'rfid-lock', title: 'Password Based Lock System with RFID', year: 'Featured Project', genre: 'Arduino Nano • RFID • Access Control', logline: 'A secure access-control system using a matrix keypad, RFID authentication and an Arduino Nano controller.', stack: ['Arduino Nano', 'RFID', 'Password Authentication', 'Display'], image: '/portfolio/images/project3.jpg', gallery: ['/portfolio/images/project3.jpg', '/portfolio/images/photo2.jpg'], build: ['Designed an access-control lock combining password entry and an RFID module to verify authorized cards.', 'Uses an Arduino Nano to process authentication and control the locking mechanism.'], features: ['Password-based access control', 'RFID card/tag authentication', 'Arduino Nano controller', 'Display-based user feedback'], metrics: [{ value: '2', label: 'authentication methods' }, { value: 'Nano', label: 'controller' }], palette: { from: '#031d27', via: '#075565', to: '#05090f', accent: '#00f7ff' }, motif: 'shield' },
  { id: 'raspberry-server', title: 'Raspberry Pi Smart Server', year: 'Computing Project', genre: 'Raspberry Pi • Local Server • Automation', logline: 'A local server concept for hosting small applications, services and automation tasks on a Raspberry Pi.', stack: ['Raspberry Pi', 'Local Network', 'Server Software', 'Automation'], image: '/portfolio/images/project4.jpg', gallery: ['/portfolio/images/project4.jpg'], build: ['Uses Raspberry Pi as a local host for lightweight applications and services.', 'Explores local-network services and automation workflows.'], features: ['Local hosting concept', 'Network-based access', 'Lightweight services', 'Automation experiments'], metrics: [{ value: 'Local', label: 'server environment' }, { value: 'Pi', label: 'platform' }], palette: magenta, motif: 'tenants' },
  { id: 'tech-for-seva', title: 'Smart Irrigation System · Tech for Seva', year: '10 Sep 2025', genre: 'Social Impact • Agriculture • Engineering', logline: 'A smart irrigation concept presented at Tech for Seva, an event focused on bringing farmers’ and village communities’ problems to engineers.', stack: ['Smart Irrigation', 'Agriculture', 'Problem Solving', 'Engineering'], image: '/portfolio/images/iiitm2.jpg', gallery: ['/portfolio/images/iiitm1.jpg', '/portfolio/images/iiitm2.jpg', '/portfolio/images/iiitm3.jpg', '/portfolio/images/iiitm4.jpg'], build: ['Presented a Smart Irrigation System at Tech for Seva hosted at IIITM Gwalior.', 'The project was selected and further development into a real-world project was discussed.'], features: ['Focused on farmers’ and village communities’ needs', 'Event included NGO participation', 'Project selected for further development discussion'], metrics: [{ value: '2025', label: 'event year' }, { value: 'IIITM', label: 'Gwalior venue' }], palette: magenta, motif: 'flow' },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'iitb-techfest', title: 'Final Round', org: 'IIT Bombay · Techfest', detail: 'Participated in the Cozmoclench robotics competition, cleared qualifying rounds at Bhopal and Kanpur, and advanced to the final round at IIT Bombay.', laurel: 'National-Level Event', link: '/portfolio/certificates/iitb-techfest-certificate.pdf' },
  { id: 'technoparv', title: '1st Position', org: 'Technoparv · SRIIT Banmore', detail: 'Presented the Smart Garbage Cleaning Boat and secured first position at the college technical event, receiving the winner’s trophy.', laurel: 'Winner', link: '/portfolio/certificates/technoparv-certificate.pdf' },
  { id: 'tech-for-seva', title: 'Project Selected', org: 'Tech for Seva · IIITM Gwalior', detail: 'Presented a Smart Irrigation System at the 10 September 2025 event. The project was selected and further real-world development was discussed.', laurel: 'Project Selection', link: '/portfolio/certificates/tech-for-seva-certificate.pdf' },
  { id: 'utsav', title: '1st Position', org: 'UTSAV 3.2 · SRIIT Banmore', detail: 'Received first position at UTSAV 3.2, as documented by the certificate supplied with the portfolio.', laurel: 'Winner', link: '/portfolio/certificates/utsav-certificate.pdf' },
  { id: 'national-tech-day', title: 'Participation', org: 'National Technology Day · SRIIT', detail: 'Participated in the National Technology Day event at Shri Ram Institute of Information Technology, Banmore.', laurel: 'Participation', link: '/portfolio/certificates/national-tech-day.pdf' },
  { id: 'iit-kanpur', title: 'Participation', org: 'IIT Kanpur · Tech Event', detail: 'Participated in a technology event at IIT Kanpur and explored engineering and innovation activities.', laurel: 'Tech Event' },
];
export type Certification = { issuer: string; name: string; link?: string };
export const certifications: Certification[] = [
  { issuer: 'IIT Bombay', name: 'Techfest · Cozmoclench Robotics Competition', link: '/portfolio/certificates/iitb-techfest-certificate.pdf' },
  { issuer: 'Tech for Seva', name: 'Tech for Seva · IIITM Gwalior', link: '/portfolio/certificates/tech-for-seva-certificate.pdf' },
  { issuer: 'IIT Kanpur', name: 'IIT Kanpur Technology Event' },
  { issuer: 'SRIIT Banmore', name: 'Technoparv · 1st Position', link: '/portfolio/certificates/technoparv-certificate.pdf' },
  { issuer: 'SRIIT Banmore', name: 'Utsav 2.0' },
  { issuer: 'SRIIT Banmore', name: 'Utsav 3.2 · 1st Position', link: '/portfolio/certificates/utsav-certificate.pdf' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'programming', title: 'Programming', subtitle: 'Languages and web development', skills: [{ name: 'C++', mono: 'C+' }, { name: 'Python', mono: 'Py' }, { name: 'C', mono: 'C' }, { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }, { name: 'JavaScript', mono: 'Js' }, { name: 'Node.js', mono: 'Nd' }, { name: 'Express.js', mono: 'Ex' }, { name: 'SQL', mono: 'Sq' }] },
  { id: 'fundamentals', title: 'CS Fundamentals', subtitle: 'Core concepts and problem-solving', skills: [{ name: 'OOP', mono: 'OP' }, { name: 'DBMS', mono: 'DB' }, { name: 'DSA', mono: 'DS' }, { name: 'Operating Systems', mono: 'OS' }, { name: 'Computer Networks', mono: 'CN' }, { name: 'Multithreading', mono: 'MT' }, { name: 'Collections', mono: 'CL' }, { name: 'STL', mono: 'ST' }] },
  { id: 'database', title: 'Database', subtitle: 'Relational database systems', skills: [{ name: 'MySQL', mono: 'My' }, { name: 'PostgreSQL', mono: 'Pg' }, { name: 'SQL', mono: 'Sq' }] },
  { id: 'infra-tools', title: 'Infrastructure & Tools', subtitle: 'Development workflow and APIs', skills: [{ name: 'VS Code', mono: 'Vs' }, { name: 'Git', mono: 'Gt' }, { name: 'GitHub', mono: 'Gh' }, { name: 'Microservices', mono: 'µS' }, { name: 'REST APIs', mono: 'API' }] },
  { id: 'backend', title: 'Backend', subtitle: 'Server-side application development', skills: [{ name: 'Node.js', mono: 'Nd' }, { name: 'Express.js', mono: 'Ex' }] },
  { id: 'embedded', title: 'Embedded, IoT & Hardware', subtitle: 'Microcontrollers, sensors and prototypes', skills: [{ name: 'ESP8266 / ESP32', mono: 'Es' }, { name: 'NodeMCU', mono: 'Nm' }, { name: 'Arduino Nano', mono: 'Ar' }, { name: 'RFID', mono: 'RF' }, { name: 'Raspberry Pi', mono: 'Pi' }, { name: 'Sensors / IoT', mono: 'Io' }, { name: 'Robotics', mono: 'Rb' }] },
];

export const skillEvidence: Record<string, string[]> = {
  'Arduino Nano': ['Password Based Lock System with RFID'], RFID: ['Password Based Lock System with RFID'], HTML: ['Cinematic Developer Portfolio'], CSS: ['Cinematic Developer Portfolio'], JavaScript: ['Cinematic Developer Portfolio'], 'Node.js': ['Backend development learning'], 'Express.js': ['Backend development learning'], 'GitHub': ['Project repositories'], 'Problem Solving': ['Technical events and engineering projects'], 'C++': ['Programming fundamentals and problem-solving'], MySQL: ['Relational databases'], PostgreSQL: ['Relational databases'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: 'Learning journey', synopsis: 'Building a foundation in computer science and engineering through coursework and practical exploration.', episodes: [{ code: 'S01 E01', title: 'The Engineer', description: 'Studying Computer Science Engineering at Shri Ram Institute of Information Technology, Banmore.', tags: ['Computer Science', 'Engineering'], runtime: 'Education', palette: blue }] },
  { number: 2, title: 'Building with Hardware', period: 'Project chapter', synopsis: 'Exploring embedded systems and practical authentication concepts.', episodes: [{ code: 'S02 E01', title: 'The Lock System', description: 'A password-based lock system with RFID, display and Arduino Nano.', tags: ['Arduino Nano', 'RFID', 'Access Control'], runtime: 'Featured project', palette: cyan }] },
  { number: 3, title: 'Engineering for People', period: '10 September 2025', synopsis: 'Presenting a project at Tech for Seva, an event focused on problems faced by farmers and village communities.', episodes: [{ code: 'S03 E01', title: 'Tech for Seva', description: 'Project selected at the event hosted at IIITM Gwalior; further real-world development was discussed.', tags: ['Community', 'Engineering', 'IIITM Gwalior'], runtime: '10 Sep 2025', palette: magenta }] },
  { number: 4, title: 'The Next Chapter', period: 'In progress', synopsis: 'Continuing to learn, prototype and develop useful technology projects.', episodes: [{ code: 'S04 E01', title: 'What Comes Next', description: 'Growing skills in embedded systems, web interfaces and practical problem solving.', tags: ['Learn', 'Build', 'Improve'], runtime: 'Ongoing', palette: green }] },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Programming', title: 'C++', detail: 'Building programming fundamentals, logic and problem-solving skills.', palette: cyan },
  { label: 'Engineering', title: 'IoT Development', detail: 'Connecting microcontrollers, sensors and practical real-world systems.', palette: green },
  { label: 'Developer Tools', title: 'GitHub', detail: 'Organizing code, documenting projects and sharing development work.', palette: blue },
  { label: 'Problem Solving', title: 'LeetCode', detail: 'Practicing coding patterns, algorithms and data structures.', palette: amber },
  { label: 'Technology Festival', title: 'IIT Bombay Techfest', detail: 'Participated in a national-level technology festival and robotics competition.', palette: magenta },
  { label: 'Technical Event', title: 'IIT Kanpur', detail: 'Participated in a technology event and explored engineering activities.', palette: blue },
  { label: 'Embedded Systems', title: 'Arduino', detail: 'Prototyping controller-based projects and hardware interactions.', palette: green },
  { label: 'Architecture', title: 'System Design', detail: 'Exploring scalable software architecture and component-level design.', palette: cyan },
  { label: 'Web Basics', title: 'HTML & CSS', detail: 'Structuring and styling responsive, accessible web interfaces.', palette: magenta },
  { label: 'Full Stack', title: 'Web Development', detail: 'Learning frontend and backend concepts to build complete web experiences.', palette: amber },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Episode 01 · Education', title: 'The Foundation', lines: ['B.Tech in Computer Science Engineering', 'Shri Ram Institute of Information Technology, Banmore · Batch 2024'], chips: ['B.Tech CSE', 'SRIIT Banmore'] },
  { kicker: 'Episode 02 · Tech Stack', title: 'C++ First', lines: ['C++ · Python · C', 'Node.js · Express.js · SQL · PostgreSQL'], chips: ['Programming', 'Backend', 'Database'] },
  { kicker: 'Episode 03 · Projects', title: 'Built to Solve', lines: ['Main project: Garbage Cleaning Boat', 'Wireless Boat with Gripper · Home Automation · RFID Projects · Serving Robot · Portfolio Website'], chips: ['Robotics', 'IoT', 'Web Development'] },
  { kicker: 'Episode 04 · Top Moments', title: 'On the Tech Stage', lines: ['Techfest — IIT Bombay, Mumbai · Tech Event — IIT Kanpur', 'Tech for Seva — IIITM Gwalior · Technoparv — SRIIT Banmore'], chips: ['Participation', 'Engineering Events'] },
  { kicker: 'Episode 05 · Certificates', title: 'Certified & Growing', lines: ['IIT Bombay Techfest · Tech for Seva · IIT Kanpur Tech Event', 'Technoparv · Utsav 2.0 · Utsav 3.2'], chips: ['Learning', 'Recognition'] },
  { kicker: 'Episode 06 · Featured Highlights', title: 'Learn. Build. Share.', lines: ['C++ · IoT · GitHub · LeetCode · Arduino', 'System Design · HTML · Web Development'], chips: ['Build', 'Practice', 'Improve'] },
  { kicker: 'Episode 07 · Current Mission', title: 'What Comes Next', lines: ['Currently exploring System Design, Cloud Computing and Machine Learning.', 'Focused on growing strong fundamentals and building useful technology.'], chips: ['System Design', 'Cloud Computing', 'Machine Learning'] },
];

export type ProfileId = 'abhay' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'abhay', name: 'Abhaypratap', blurb: 'The full series, in order', color: '#00f7ff', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Projects and achievements first', color: '#ff20df', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects and technologies first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Explorer', blurb: 'Highlights and journey first', color: '#ffca67', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & interests', palette: blue },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects`, palette: cyan },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Featured work and interests', palette: green },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: blue },
  moments: { nav: 'Achievements', card: 'Achievements & Certificates', meta: `${achievements.length} Highlights • ${certifications.length} Certificates`, palette: magenta },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Profile summary', palette: amber },
};
