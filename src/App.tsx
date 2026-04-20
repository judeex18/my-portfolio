import type { CSSProperties } from "react";

import "./App.css";

const highlights = [
  {
    title: "Support & Systems Focus",
    description:
      "I help users resolve hardware, software, and account-related issues while maintaining a calm and clear approach. I aim to keep systems running smoothly and users productive through reliable support.",
  },
  {
    title: "Data & Organization",
    description:
      "I value accuracy and organization when handling data. I ensure information is well-structured, easy to access, and maintained properly to support daily operations and decision-making.",
  },
  {
    title: "Development Mindset",
    description:
      "I apply basic programming skills to build simple applications and improve workflows. I enjoy creating practical solutions that solve real-world problems and support system efficiency.",
  },
];

const skillGroups = [
  {
    title: "Technical Skills",
    sections: [
      {
        title: "Support & Systems",
        items: [
          "Windows troubleshooting",
          "Basic network troubleshooting",
          "Hardware setup and maintenance",
          "Software installation and configuration",
          "Remote support fundamentals",
          "Basic Active Directory knowledge",
        ],
      },
      {
        title: "Data & Productivity",
        items: [
          "Microsoft 365 (Word, Excel, Outlook)",
          "Data entry and record management",
          "File organization and documentation",
          "Accuracy checking and data validation",
        ],
      },
    ],
  },
  {
    title: "Basic Programming",
    sections: [
      {
        title: "Development Basics",
        items: [
          "HTML",
          "CSS",
          "Java (fundamentals)",
          "Basic web application development",
        ],
      },
      {
        title: "Core Strengths",
        items: [
          "Clear communication with technical and non-technical users",
          "Customer service and user support",
          "Problem-solving and troubleshooting mindset",
          "Documentation for repeatable solutions",
          "Accessibility awareness and user-focused thinking",
        ],
      },
    ],
  },
];

const workingStyle = [
  "I am organized, dependable, and open to feedback, always aiming to improve the way I work and support others. I take responsibility for my tasks and make sure they are completed with consistency and attention to detail.",
  "I stay calm and patient when assisting users, especially in situations where they are under pressure or frustrated. I understand the importance of maintaining a clear and supportive approach to help resolve issues effectively.",
  "I focus on clarity and accuracy in everything I do, whether it’s troubleshooting problems, handling data, or documenting solutions. I aim to provide practical, easy-to-follow solutions that can be reused when similar issues occur.",
  "I am also willing to learn and adapt in fast-paced environments. As a fresh graduate, I am eager to gain real-world experience, improve my technical skills, and grow into a reliable member of any team.",
];

const projects = [
  {
    name: "Technical Support",
    summary: "Focus: helping users fix problems.",
    stack: [
      "Login issues",
      "Slow computers",
      "Software errors",
      "Internet problems",
    ],
    details: [
      "You deal with users who need quick and clear solutions.",
      'Think: "User has a problem -> you solve it."',
      "Guide users step by step until the issue is resolved.",
    ],
  },
  {
    name: "IT Support",
    summary: "Focus: maintaining systems and supporting users.",
    stack: ["Computer setup", "Network support", "Software installation"],
    details: [
      "Set up computers for users.",
      "Helped manage basic network tasks.",
      "Installed and monitored software.",
    ],
  },
  {
    name: "Data Encoder",
    summary: "Accurate data entry and record keeping.",
    stack: ["Data input", "Verification", "Organization"],
    details: [
      "Entered data into digital systems.",
      "Checked information for errors.",
      "Kept records organized and easy to find.",
    ],
  },
];

const deployments = [
  {
    name: "JA Car Rental System",
    description:
      "My capstone project deployed on Vercel, built to show a real production-ready release.",
    url: "https://ja-car-rental-system.vercel.app",
    label: "Capstone",
  },
  {
    name: "Ian's Laundry Hub",
    description:
      "A personal POS project for our laundry business, also deployed live on Vercel.",
    url: "https://ianslaundryhub.vercel.app",
    label: "Business POS",
  },
  {
    name: "Steezy Clothing Online",
    description:
      "An ongoing project that shows continued development and deployment work.",
    url: "https://steezy-clothing-online.vercel.app",
    label: "Ongoing",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Fresh graduate",
    description:
      "Ready for entry-level roles in IT support, technical support, data management, and entry-level development.",
  },
  {
    year: "Capstone",
    title: "Support & System projects",
    description:
      "Built practical projects focused on usability, data organization, and reliable system workflows. Applied both support thinking and basic development skills to solve real-world problems.",
  },
  {
    year: "Always learning",
    title: "Continuous Skill Growth",
    description:
      "Actively improving troubleshooting, data handling, and programming skills while strengthening communication and user support knowledge.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "judechristian.amoguis18@gmail.com",
    href: "mailto:judechristian.amoguis18@gmail.com",
  },
  {
    label: "Contact number",
    value: "+63 908 880 9419",
    href: "tel:+639088809419",
  },
  {
    label: "GitHub.com",
    value: "judeex18",
    href: "https://github.com/judeex18",
  },
  {
    label: "Onlinejobs.ph",
    value: "Jude Christian Bustillo Amoguis",
    href: "https://www.onlinejobs.ph/jobseekers/info/3425167",
  },
  {
    label: "Curriculum Vitae",
    value: "View Curriculum Vitae",
    href: "https://drive.google.com/file/d/1I1-TItbsNtBf0IUNXLZvNcyl_cKGrISt/view?usp=sharing",
  },
];

function App() {
  return (
    <main className="page">
      <div className="ambient ambient--left" aria-hidden="true" />
      <div className="ambient ambient--right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand__mark">JC</span>
          <span className="brand__text">Jude Christian Amoguis</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="hero__copy reveal">
          <p className="eyebrow">
            Technical Support, Data & Development Portfolio
          </p>
          <h1>
            I help users resolve issues efficiently and build practical
            solutions with patience and clarity.
          </h1>
          <p className="lede">
            I am a recent graduate seeking opportunities in IT support,
            Technical support, Data management, or Entry-level programming. I
            bring a practical problem-solving mindset, strong attention to
            detail, and clear communication skills, along with experience in
            building and supporting real-world applications.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href="mailto:judechristian.amoguis18@gmail.com"
            >
              Contact me
            </a>
            <a className="button button--secondary" href="#deployments">
              View projects
            </a>
          </div>

          <div className="hero__stats" aria-label="Profile highlights">
            <div>
              <strong>Focus</strong>
              <span>
                System support, issue diagnosis, and user problem resolution
              </span>
            </div>
            <div>
              <strong>Tools</strong>
              <span>
                Windows OS, Microsoft 365, basic networking, support tools
              </span>
            </div>
            <div>
              <strong>Open to</strong>
              <span>
                Technical support, desktop support, and entry-level IT positions
              </span>
            </div>
          </div>
        </div>

        <aside className="hero__panel reveal" aria-label="Profile summary">
          <div className="profile-card">
            <div className="profile-card__photo-wrap">
              <img
                className="profile-card__photo"
                src="/Jude.png"
                alt="Jude Christian Amoguis in formal attire"
              />
            </div>

            <div className="profile-card__head">
              <span className="pill">Available now</span>
            </div>

            <h2>Jude Christian Amoguis</h2>
            <p className="profile-card__role">
              IT Support, Data & Entry-Level Development
            </p>

            <p className="profile-card__text">
              I help resolve account, device, and software issues while ensuring
              data is accurate and systems run smoothly. I bring a calm
              troubleshooting approach, clear communication, and a habit of
              documenting solutions for future use.
            </p>

            <ul className="profile-card__list">
              <li>Clear communication with non-technical users</li>
              <li>Basic hardware, software, and network troubleshooting</li>
              <li>Data entry, organization, and accuracy management</li>
              <li>Entry-level web development and system building</li>
            </ul>

            <div className="profile-card__quote">
              <span>Current goal</span>
              <p>
                To start my career in a role where I can provide technical
                support, manage data effectively, and continue developing
                real-world applications.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="section section--about" id="about">
        <div className="section-heading reveal">
          <p className="eyebrow">About</p>
          <h2>A fresh graduate profile aimed at support and service roles.</h2>
        </div>

        <div className="about-grid">
          <article className="panel reveal">
            <h3>What I bring</h3>
            <p>
              I am at my best when solving problems that require structure,
              clear communication, and practical solutions.
              <br />
              <br />I take time to fully understand each issue by listening
              carefully, asking the right questions, and identifying the root
              cause before taking action.
            </p>
            <p>
              I approach problems in a step-by-step manner, ensuring that each
              solution is clear, effective, and easy for users to follow.
              <br />
              <br />I communicate in a way that is simple and understandable,
              especially for non-technical users, so they feel confident and
              supported throughout the process.
            </p>
            <p>
              I also make it a priority to document solutions clearly.
              <br />
              <br />
              This helps issues be resolved faster in the future and makes it
              easier to share knowledge with others. My goal is not just to fix
              problems, but to create reliable, repeatable solutions that
              improve efficiency and support long-term use.
            </p>
          </article>

          <div className="highlights">
            {highlights.map((item, index) => (
              <article
                className="panel panel--soft reveal"
                key={item.title}
                style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading reveal">
          <p className="eyebrow">Skills</p>
          <h2>Core tools, Technical strengths, and Working approach.</h2>
        </div>

        <div className="skills-layout">
          <article className="panel reveal">
            <div className="skills-stack">
              {skillGroups.map((group) => (
                <section className="skills-stack__group" key={group.title}>
                  <h4>{group.title}</h4>
                  {group.sections.map((section) => (
                    <div className="skills-stack__section" key={section.title}>
                      <p className="skills-stack__label">{section.title}</p>
                      <ul
                        className="bullets skills-list"
                        aria-label={section.title}
                      >
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </article>

          <article className="panel reveal">
            <h3>Working style</h3>
            <ul className="bullets">
              {workingStyle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2>Technical Support, IT Support & Data Encoder </h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.name}
              style={{ "--delay": `${index * 140}ms` } as CSSProperties}
            >
              <div className="project-card__head">
                <span className="project-card__index">0{index + 1}</span>
                <h3>{project.name}</h3>
              </div>

              <p>{project.summary}</p>

              <div className="chips chips--compact">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <ul className="bullets bullets--tight">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="deployments">
        <div className="section-heading reveal">
          <p className="eyebrow">Recent deployments</p>
          <h2>Live projects I have deployed on Vercel.</h2>
        </div>

        <div className="project-grid">
          {deployments.map((deployment, index) => (
            <article
              className="project-card reveal"
              key={deployment.name}
              style={{ "--delay": `${index * 140}ms` } as CSSProperties}
            >
              <div className="project-card__head">
                <span className="project-card__index">LIVE</span>
                <span className="pill pill--ghost">{deployment.label}</span>
              </div>

              <h3>{deployment.name}</h3>
              <p>{deployment.description}</p>

              <div className="hero__actions" style={{ marginTop: "20px" }}>
                <a
                  className="button button--primary"
                  href={deployment.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open deployment
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="section-heading reveal">
          <p className="eyebrow">Education & growth</p>
          <h2>
            A simple timeline that shows readiness, versatility, and continuous
            improvement.
          </h2>
        </div>

        <div className="timeline-grid">
          <article className="panel reveal">
            <h3>Timeline</h3>
            <div className="timeline">
              {timeline.map((item) => (
                <div className="timeline__item" key={item.title}>
                  <span className="timeline__year">{item.year}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel panel--accent reveal">
            <h3>What hiring teams can expect</h3>
            <ul className="bullets">
              <li>
                Hiring teams can expect a clear communicator who is able to
                explain technical solutions in a simple and understandable way,
                especially when assisting non-technical users. I make sure that
                users feel guided and supported throughout the process, reducing
                confusion and improving overall experience.
              </li>
              <li>
                I am a practical problem solver who focuses on user needs and
                outcomes. I take time to understand the issue, identify the root
                cause, and apply step-by-step solutions that are effective and
                easy to follow. My goal is not just to resolve problems, but to
                ensure they are handled in a reliable and efficient way.
              </li>
              <li>
                I bring strong attention to data accuracy, organization, and
                documentation. I understand the importance of maintaining clean
                and well-structured data, as well as documenting solutions
                clearly so they can be reused, tracked, and improved over time.
              </li>
              <li>
                As a recent graduate, I am eager to learn and continuously
                improve my skills. I am open to feedback, adaptable to new
                environments, and motivated to contribute to both support and
                development tasks while gaining real-world experience.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="section-heading reveal">
          <p className="eyebrow">Contact</p>
        </div>

        <div className="contact-grid">
          <article className="panel reveal">
            <h3>Get in touch</h3>
            <p>
              Feel free to reach out if you’d like to connect, discuss
              opportunities, or learn more about my work. You can contact me
              through the details below.
            </p>

            <div className="contact-list">
              {contactLinks.map((item) => (
                <a className="contact-link" href={item.href} key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </article>

          <article className="panel panel--soft reveal">
            <h3>Quick note</h3>
            <p>
              I’m actively looking for opportunities where I can grow in IT
              support, data management, and development. I am eager to gain
              hands-on experience by working on real-world systems, supporting
              users, and improving everyday processes.
            </p>
            <br />
            <p>
              I am open to learning new tools, adapting to different
              environments, and taking on challenges that will help me develop
              both my technical and problem-solving skills. I value feedback and
              continuous improvement, and I am committed to building reliable
              solutions while contributing positively to a team.
            </p>
            <br />
            <p>
              My goal is to grow into a well-rounded professional who can
              support users effectively, manage data accurately, and contribute
              to building practical and efficient systems.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
