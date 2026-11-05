import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, BrainCircuit,
  Code2, Database, Layers3, Terminal, ExternalLink, GraduationCap,
  BriefcaseBusiness, Award, Sparkles
} from 'lucide-react'
import './styles.css'

const GITHUB = 'https://github.com/sambidemi'
const projects = [
  {
    number: '01',
    name: 'HouseMind',
    type: 'Real Estate · Predictive Analytics',
    description: 'An AI-powered real estate evaluation and investment insights project. Work included property price prediction, clustering, investment analysis, and exposing model functionality through a FastAPI backend.',
    tags: ['Python', 'Scikit-learn', 'Regression', 'K-Means', 'FastAPI'],
    link: 'https://github.com/sambidemi/HouseMind-AI-Powered-Real-Estate-Evaluation-',
    featured: true
  },
  {
    number: '02',
    name: 'AgroSense',
    type: 'Agriculture · Decision Support',
    description: 'A smart agricultural decision support system combining crop recommendation with agricultural commodity price prediction, using supervised and unsupervised machine learning.',
    tags: ['Python', 'Scikit-learn', 'Classification', 'Clustering', 'FastAPI', 'PostgreSQL'],
    link: 'https://github.com/sambidemi/Smart-Agricultural-DSS',
    featured: true
  },
  {
    number: '03',
    name: 'Diabetes Prediction',
    type: 'Healthcare · Classification',
    description: 'A machine learning classification project that predicts diabetes risk from input features, with an interactive Streamlit application for users to explore predictions.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Classification', 'Streamlit'],
    link: 'https://github.com/sambidemi/Diabetes-Prediction'
  },
  {
    number: '04',
    name: 'Diamond Price Prediction',
    type: 'Regression · Price Estimation',
    description: 'A regression workflow for estimating diamond prices, covering exploratory analysis, data preparation, feature encoding, model development, and evaluation with MAE and RMSE.',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Regression'],
    link: 'https://github.com/sambidemi/Diamond-Price-Prediction'
  },
  {
    number: '05',
    name: 'Customer Shopping Segmentation',
    type: 'Customer Analytics · Clustering',
    description: 'An analysis of customer shopping data using clustering to explore customer groups and differences in purchasing behaviour.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Clustering', 'EDA'],
    link: 'https://github.com/sambidemi/Customer-Shopping-Segmentation'
  }
]

const skills = [
  { icon: Code2, title: 'Programming', items: ['Python', 'SQL'] },
  { icon: BrainCircuit, title: 'Machine Learning', items: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning', 'Classification', 'Regression', 'Clustering', 'Feature Engineering', 'Model Evaluation'] },
  { icon: Layers3, title: 'Data Analysis', items: ['Pandas', 'NumPy', 'Data Cleaning', 'Data Preprocessing', 'Exploratory Data Analysis', 'Statistical Analysis'] },
  { icon: Terminal, title: 'Visualization & Development', items: ['Matplotlib', 'Seaborn', 'FastAPI', 'Streamlit', 'REST APIs'] },
  { icon: Database, title: 'Databases & Tools', items: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Render'] }
]

const certificates = [
  ['Supervised Machine Learning', 'DeepLearning.AI', 'November 2025', 'https://www.coursera.org/account/accomplishments/certificate/OBOVQ5XTG44H'],
  ['Advanced Learning Algorithms', 'DeepLearning.AI', 'August 2026', 'https://www.coursera.org/account/accomplishments/verify/S5D0HHHB2AZD'],
  ['Unsupervised Learning Algorithms', 'DeepLearning.AI', 'September 2026', 'https://www.coursera.org/account/accomplishments/records/R5P8IO2MPSCS'],
  ['Neural Networks and Deep Learning', 'DeepLearning.AI', 'October 2026', 'https://www.coursera.org/account/accomplishments/verify/APMA8HVR534H']
]

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function App() {
  return (
    <div className="site-shell">
      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-mark">SO</span><span>Samuel Owolabi<span className="brand-dot">.</span></span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact" className="nav-cta">Let's connect <ArrowUpRight size={15}/></a>
        </div>
      </nav>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO MACHINE LEARNING OPPORTUNITIES</div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>Samuel Abidemi<br/><span>Owolabi.</span></h1>
            <h2>Machine Learning Engineer <span className="blue-slash">/</span> Data Scientist</h2>
            <p className="hero-description">I build practical machine learning solutions by turning data into useful predictions, insights, and applications. My interests include predictive modelling, applied AI, and deploying data-driven systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href="https://github.com/sambidemi" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Nigeria</span><span><GraduationCap size={16}/> First-Class Graduate</span></div>
          </div>
          <div className="hero-visual" aria-label="Decorative machine learning illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="core"><BrainCircuit size={76} strokeWidth={1.2}/><span>ML</span></div>
            <div className="float-card card-python"><Code2 size={17}/><span>Python</span></div>
            <div className="float-card card-data"><Database size={17}/><span>Data</span></div>
            <div className="float-card card-model"><Sparkles size={17}/><span>Models</span></div>
            <div className="visual-caption">DATA <i>→</i> INSIGHT <i>→</i> IMPACT</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section wrap" id="about">
          <SectionHeading eyebrow="01 / ABOUT" title="A little about me" text="A practical, curious approach to machine learning and problem-solving."/>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">I am an Information and Communication Science graduate from the <strong>University of Ilorin</strong>, where I earned First Class Honours.</p>
              <p>I have hands-on experience using Python and its data science ecosystem to prepare data, explore patterns, develop and evaluate machine learning models, and build applications that make model outputs accessible.</p>
              <p>My project work spans real estate, agriculture, healthcare, and customer analytics. I enjoy understanding the problem behind the data and selecting an appropriate approach rather than applying a model without context.</p>
              <p>My career direction is to grow as a Machine Learning Engineer, contribute to real-world AI products, and strengthen my skills in building reliable, maintainable, and deployable ML systems.</p>
            </div>
            <div className="about-facts">
              <div className="fact"><span className="fact-number">01</span><div><strong>Academic foundation</strong><p>B.Sc. Information and Communication Science · First Class Honours</p></div></div>
              <div className="fact"><span className="fact-number">02</span><div><strong>Core focus</strong><p>Machine learning, predictive analytics, and applied data science</p></div></div>
              <div className="fact"><span className="fact-number">03</span><div><strong>Development</strong><p>Model APIs and interactive applications with FastAPI and Streamlit</p></div></div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="wrap">
            <SectionHeading eyebrow="02 / TOOLKIT" title="Skills & technologies" text="Tools and techniques I have used in coursework and practical projects."/>
            <div className="skills-grid">
              {skills.map(({icon: Icon, title, items}) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={21}/></div><h3>{title}</h3><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section className="section wrap" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects that solve problems" text="A selection of machine learning and data science work. Open a repository to explore the implementation and details."/>
          <div className="project-grid">
            {projects.map(project => <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.number}>
              <div className="project-top"><span className="project-number">{project.number}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><ArrowUpRight size={19}/></a></div>
              <span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p>
              <div className="tag-list project-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View project <ExternalLink size={14}/></a>
            </article>)}
          </div>
          <div className="center-action"><a className="button button-secondary" href={GITHUB} target="_blank" rel="noreferrer">More on GitHub <Github size={16}/></a></div>
        </section>

        <section className="section section-muted" id="experience">
          <div className="wrap">
            <SectionHeading eyebrow="04 / EXPERIENCE" title="Professional experience" text="My industry experience and the work I contributed to."/>
            <div className="timeline">
              <div className="timeline-mark"><BriefcaseBusiness size={19}/></div>
              <div className="timeline-content">
                <div className="timeline-header"><div><h3>Data Scientist Intern</h3><p className="company">CodeSquad LLC</p></div><span className="date-pill">APR 2025 — SEP 2025</span></div>
                <p>Worked on data science tasks across the machine learning workflow, including data collection, cleaning, exploratory analysis, visualization, predictive modelling, and communicating findings.</p>
                <ul><li>Prepared datasets and performed exploratory analysis to identify patterns and relationships.</li><li>Developed and evaluated classification and regression models using Python and Scikit-learn.</li><li>Contributed to predictive analytics projects involving real estate, healthcare, and other problem domains.</li><li>Worked with team members to translate project requirements into practical data science solutions.</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="education">
          <SectionHeading eyebrow="05 / EDUCATION" title="Education & certifications"/>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={25}/></div>
            <div className="education-main"><h3>Bachelor of Science — Information and Communication Science</h3><p>University of Ilorin · Ilorin, Kwara State, Nigeria</p><div className="education-bottom"><span>First Class Honours</span><span>Graduation: 2026</span></div></div>
          </div>
          <div className="cert-heading"><h3><Award size={19}/> Certifications</h3></div>
          <div className="cert-list">
            {certificates.map(([name, provider, date, url]) => <div className="cert-row" key={name}><div><strong>{name}</strong><p>{provider}</p></div><div className="cert-meta"><span>{date}</span><span>{url}</span></div></div>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-inner">
            <span className="eyebrow">06 / CONTACT</span>
            <h2>Let's build something<br/><span>useful with data.</span></h2>
            <p>I am interested in machine learning opportunities, collaborations, and projects with meaningful real-world applications.</p>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:owolabisamuel085@gmail.com"><Mail size={17}/> Email me</a>
              <a className="button button-outline-light" href="https://www.linkedin.com/in/owolabi-samuel-85a82a381" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a className="button button-outline-light" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">SO</span><span>Samuel Owolabi<span className="brand-dot">.</span></span></a><span>Designed & built with React · © {new Date().getFullYear()} Samuel Abidemi Owolabi</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
