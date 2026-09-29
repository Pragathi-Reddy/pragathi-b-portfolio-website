import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react'

const featuredProjects = [
  {
    number: '01',
    title: 'Zenith Satellite System',
    subtitle: 'Hazard Zone Detection and Monitoring',
    technologies: 'ESP32-CAM · Environmental Sensors · Arduino IDE · Dipole Transmitter',
    description:
      'Developed a system to identify hazards and monitor environmental conditions in remote areas, including fires, chemical spills, temperature, humidity, and gas levels.',
  },
  {
    number: '02',
    title: 'Online Food Delivery Web Application',
    subtitle: 'College Project',
    technologies: 'Java · JDBC · Servlets · JSP · MySQL · HTML · CSS',
    description:
      'Developed a full-stack web application using MVC architecture and DAO pattern with login, menu, cart, checkout, sessions, and transaction handling.',
  },
  {
    number: '03',
    title: 'Wireless Display Notice Board',
    subtitle: 'College Project',
    technologies: 'Arduino · Bluetooth',
    description:
      'Designed a system for remote message display using Bluetooth communication, embedded systems, circuit design, and hardware interfacing.',
  },
]

const personalBuilds = [
  { title: 'TrainWake', subtitle: 'Smart Train Journey Alarm', points: ['Set journey and destination', 'Track journey using location services', 'Trigger alerts near destination', 'Customize alarm timings'] },
  { title: 'Wishly', subtitle: 'Wishlist & Memory Organizer', points: ['Create and organize personal wishes', 'Save places, food and experiences', 'Mark completed wishes', 'Add photos and memories'] },
  { title: 'Smart Task Scheduler', subtitle: 'Full-Stack Task Management Application', points: ['Create tasks with deadlines and priorities', 'Manage recurring tasks and schedules', 'Track tasks through a calendar', 'Send reminders and notifications'] },
]

const experiences = [
  { label: '01 · 1 MONTH', company: 'Syscon Instruments Pvt Ltd', role: 'Intern', description: 'Worked on strain-gauge-based sensor systems for force measurement, including signal conditioning, ADC conversion, sensor interfacing, calibration, testing, data acquisition, PCB, wiring, soldering, instrumentation, quality testing, and documentation.' },
  { label: '02 · 1 MONTH', company: 'Teknic Euchner', role: 'Trainee', description: 'Performed calibration, pre-testing, and testing of proximity sensors. Tested specified sensing distances such as 1 mm and 1.75 mm and verified sensor performance and sensing accuracy.' },
  { label: '03 · INTERNSHIP', company: 'Extion Infotech', role: 'Intern, Remote Certification Program', description: 'Completed project-based training in full-stack development fundamentals and developed a Smart Task Scheduler with task creation, recurring schedules, reminders, calendar view, and completion tracking.' },
]

const skillGroups = [
  { title: 'Software', skills: 'Java, Core Java, OOP, JDBC, Servlets, J2EE Basics, DAO, MVC, MySQL, DBMS, SQL, HTML, CSS, JavaScript, React' },
  { title: 'Electronics & VLSI', skills: 'CMOS Basics, NMOS, PMOS, Analog Circuits, Current Mirror, Differential Pair, Op-Amp Basics, Physical Design Flow, Setup/Hold/Slack, Signal Conditioning, Sensors, PCB Basics, Soldering, Embedded Systems' },
  { title: 'Tools', skills: 'MATLAB, Multisim, Arduino IDE, VS Code, Eclipse, MySQL Workbench, Apache Tomcat' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>
}

function ArrowLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return <a className="arrow-link" href={href}>{children}<ArrowUpRight aria-hidden="true" /></a>
}

export default function Page() {
  return (
    <main>
      <header className="site-header wrapper">
        <a href="#top" className="wordmark">PB.</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <ArrowLink href="https://www.linkedin.com">LinkedIn</ArrowLink>
      </header>

      <section id="top" className="hero wrapper">
        <div className="hero-copy">
          <SectionLabel>Personal Portfolio</SectionLabel>
          <h1>Pragathi B</h1>
          <p className="hero-title">VLSI &amp; Software Development.</p>
          <p className="hero-description">Electronics &amp; Communication Engineering graduate with a foundation in VLSI, physical design, Java, and full-stack development.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">View projects <ArrowDown aria-hidden="true" /></a><a className="button button-outline" href="#contact">Connect on LinkedIn <ArrowUpRight aria-hidden="true" /></a></div>
          <ArrowLink href="https://github.com">GitHub</ArrowLink>
        </div>
        <div className="direction-visual" aria-label="Two professional directions">
          <div className="direction-card direction-card-top"><span>01</span><strong>VLSI &amp;<br />Physical Design</strong></div>
          <div className="direction-card direction-card-bottom"><span>02</span><strong>Java Full-Stack<br />Development</strong></div>
        </div>
      </section>

      <section id="about" className="section wrapper split-section"><SectionLabel>01 / About</SectionLabel><div className="split-content"><h2>An ECE graduate with two technical directions.</h2><div><h3>Building across hardware and software.</h3><p>I&apos;m an Electronics and Communication Engineering graduate with a foundation in VLSI, physical design, analog and digital electronics, Java, and full-stack development. I&apos;ve worked with sensor systems, signal conditioning, PCB implementation, and software applications, combining my electronics background with software development skills.</p></div></div></section>

      <section className="section wrapper"><div className="section-header"><SectionLabel>02 / What I Work With</SectionLabel><h2 className="section-heading">A cross-disciplinary foundation.</h2></div><div className="two-grid"><article className="outline-card"><span className="card-index">01</span><h3>Software</h3><p>Java · Full Stack · DBMS · SQL · Web Development</p></article><article className="outline-card"><span className="card-index">02</span><h3>Electronics &amp; VLSI</h3><p>Semiconductors (CMOS Basics) · Analog &amp; Digital Electronics · VLSI Physical Design · PCB Basics · Sensor Interfacing</p></article></div></section>

      <section id="projects" className="section wrapper"><div className="section-header"><SectionLabel>03 / Featured Projects</SectionLabel><h2 className="section-heading">Technology made tangible.</h2></div><div className="project-grid">{featuredProjects.map((project) => <article className="project-card" key={project.number}><span className="card-index">{project.number}</span><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="tech-line">{project.technologies}</p><p>{project.description}</p></article>)}</div></section>

      <section className="section wrapper"><div className="section-header"><SectionLabel>04 / Apps &amp; Personal Builds</SectionLabel><h2 className="section-heading">Apps &amp; Personal Builds</h2></div><div className="project-grid personal-grid">{personalBuilds.map((project) => <article className="project-card compact-card" key={project.title}><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></section>

      <section className="section wrapper"><div className="section-header"><SectionLabel>05 / Experience</SectionLabel><h2 className="section-heading">Learning through real systems.</h2></div><div className="experience-list">{experiences.map((experience) => <article className="experience-row" key={experience.label}><span className="experience-label">{experience.label}</span><div><h3>{experience.company}</h3><p className="role">{experience.role}</p></div><p>{experience.description}</p></article>)}</div></section>

      <section className="section wrapper"><div className="section-header"><SectionLabel>06 / Skills</SectionLabel><h2 className="section-heading">Tools for the work.</h2></div><div className="skills-grid">{skillGroups.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-tags">{group.skills.split(', ').map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

      <section className="section wrapper split-section"><SectionLabel>07 / Research &amp; Achievements</SectionLabel><div className="split-content"><h2>Curiosity backed by practice.</h2><div className="research-content"><p className="eyebrow">IEEE Research Paper · ICSSS 2025 — IEEE</p><h3>Satellite-based Image Transmission with Hazard Detection and Real-Time Environmental Monitoring using LoRa and ESP32-CAM</h3><div className="achievement"><strong>250+</strong><p>Programming problems completed across arrays, strings, loops, subarrays, sets, maps, and basic time and space complexity.</p></div></div></div></section>

      <section className="section wrapper split-section"><SectionLabel>08 / Education</SectionLabel><div className="split-content"><h2>The foundation.</h2><div><h3>Bachelor of Engineering – Electronics and Communication Engineering</h3><p>CMR Institute of Technology</p><p className="education-meta">CGPA: 8.2 · 2025</p></div></div></section>

      <section id="contact" className="contact-section wrapper"><SectionLabel>09 / Contact</SectionLabel><h2>Let&apos;s build something practical.</h2><div className="contact-links"><ArrowLink href="mailto:pragatireddy900@gmail.com"><span><small>Email</small>pragatireddy900@gmail.com</span></ArrowLink><ArrowLink href="https://www.linkedin.com"><span><small>LinkedIn</small>LinkedIn</span></ArrowLink><ArrowLink href="https://github.com"><span><small>GitHub</small>GitHub</span></ArrowLink></div></section>

      <footer className="site-footer wrapper"><span>Pragathi B</span><span>Electronics &amp; technology</span></footer>
    </main>
  )
}
