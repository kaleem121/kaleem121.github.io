import { useState, useEffect } from 'react';
import { 
  Code2, Database, Layout, Server, Award, Mail, 
  Github, Linkedin, Download, ExternalLink, Moon, Sun, Monitor
} from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`app ${theme}`}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            Kaleem Ahmad
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
            <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a>
            <a href="#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Experience</a>
            <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in">
              <h1>Building Modern <span className="text-gradient">Web Applications</span> with Angular, Java & AI</h1>
              <p>Frontend-Focused Full Stack Software Engineer with 4+ years of experience delivering enterprise-scale web applications, cloud-enabled solutions, and AI-powered products.</p>
              
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                  Contact Me
                </a>
                <a href="#projects" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
                  View Projects <ExternalLink size={18} />
                </a>
                <a href="/resume.pdf" target="_blank" className="btn btn-outline">
                  Resume <Download size={18} />
                </a>
              </div>

              <div className="tech-badges">
                <span className="badge">Angular 18</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Java</span>
                <span className="badge">Spring Boot</span>
                <span className="badge">AWS</span>
                <span className="badge">Microservices</span>
                <span className="badge">Generative AI</span>
              </div>
            </div>
            
            <div className="hero-image-wrapper animate-fade-in delay-200">
              <img src="/avatar.png" alt="Kaleem Ahmad" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-text animate-fade-in">
              <p>
                I am a Frontend-Focused Full Stack Software Engineer with over 4 years of experience developing enterprise applications and digital transformation solutions.
              </p>
              <p>
                My expertise spans Angular, TypeScript, Java, Spring Boot, REST APIs, and Microservices. I enjoy building scalable systems, optimizing performance, and creating intuitive user experiences.
              </p>
              <p>
                Currently, I am building AI-powered products and exploring cloud-native architectures, modern frontend engineering practices, and intelligent automation solutions.
              </p>
              <p>
                I am passionate about solving real-world business problems through technology and continuously learning emerging technologies.
              </p>
            </div>
            
            <div className="stats-grid animate-fade-in delay-200">
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div>Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div>Enterprise Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div>Major Awards</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">AI</div>
                <div>Product Builder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          
          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-category animate-fade-in">
              <div className="skill-icon">
                <Layout size={24} />
              </div>
              <h3>Frontend Engineering</h3>
              <div className="skill-list">
                <span className="skill-tag">Angular 16/18</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5/CSS3</span>
                <span className="skill-tag">SCSS</span>
                <span className="skill-tag">Angular Material</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">RxJS & NgRx</span>
              </div>
            </div>

            {/* Backend */}
            <div className="skill-category animate-fade-in delay-100">
              <div className="skill-icon">
                <Server size={24} />
              </div>
              <h3>Backend Engineering</h3>
              <div className="skill-list">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Spring MVC</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">JPA & Hibernate</span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="skill-category animate-fade-in delay-200">
              <div className="skill-icon">
                <Monitor size={24} />
              </div>
              <h3>Cloud & DevOps</h3>
              <div className="skill-list">
                <span className="skill-tag">AWS EC2 & S3</span>
                <span className="skill-tag">AWS IAM</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>

            {/* Database */}
            <div className="skill-category animate-fade-in delay-300">
              <div className="skill-icon">
                <Database size={24} />
              </div>
              <h3>Databases</h3>
              <div className="skill-list">
                <span className="skill-tag">Oracle</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">PL/SQL</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>

            {/* AI */}
            <div className="skill-category animate-fade-in">
              <div className="skill-icon">
                <Code2 size={24} />
              </div>
              <h3>AI & Emerging Tech</h3>
              <div className="skill-list">
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">LLM Integrations</span>
                <span className="skill-tag">AI APIs</span>
                <span className="skill-tag">AI-assisted Dev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="timeline">
            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <h3>System Engineer</h3>
                    <h4>Tata Consultancy Services (TCS)</h4>
                  </div>
                  <div className="timeline-date">June 2021 – July 2025</div>
                </div>
                
                <ul className="timeline-list">
                  <li>Developed enterprise-grade web applications using Angular, TypeScript, Java, and Spring Boot.</li>
                  <li>Designed scalable frontend architectures and reusable UI components.</li>
                  <li>Built responsive and high-performance interfaces.</li>
                  <li>Developed backend services and REST APIs, integrating frontend applications with backend microservices.</li>
                  <li>Optimized application performance through frontend and backend improvements.</li>
                  <li>Participated in Agile development, code reviews, and production releases.</li>
                </ul>

                <div className="achievements-box">
                  <h5><Award size={18} /> Key Achievements</h5>
                  <ul className="timeline-list" style={{ marginBottom: 0 }}>
                    <li><strong>Change Details API:</strong> Developed centralized customer profile update services, reducing business effort by approximately 60%.</li>
                    <li><strong>Notification Automation Platform:</strong> Automated communication workflows, improving operational efficiency and compliance tracking.</li>
                  </ul>
                  
                  <div className="tech-badges" style={{ marginTop: '1rem' }}>
                    <span className="badge">Contextual Master Award</span>
                    <span className="badge">Star Team Award</span>
                    <span className="badge">Best Team Award</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card animate-fade-in">
              <div className="project-content">
                <h3>Canada Tax Leakage Detection Platform</h3>
                <p>An intelligent tax analysis platform designed to help investors identify tax leakage opportunities, optimize after-tax returns, and generate AI-assisted investment insights.</p>
                
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    <li>Tax leakage detection & portfolio analytics</li>
                    <li>Interactive dashboards & investment reporting</li>
                    <li>AI-powered explanations & insights engine</li>
                  </ul>
                </div>
                
                <div className="tech-badges">
                  <span className="badge">Angular 18</span>
                  <span className="badge">Java</span>
                  <span className="badge">Spring Boot</span>
                  <span className="badge">Generative AI</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card animate-fade-in delay-100">
              <div className="project-content">
                <h3>Product & Order Microservices Platform</h3>
                <p>Enterprise-grade microservices architecture supporting scalable order management and product workflows. Designed for high availability and robust data processing.</p>
                
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    <li>Scalable order management</li>
                    <li>Distributed transaction handling</li>
                    <li>High-performance data synchronization</li>
                  </ul>
                </div>
                
                <div className="tech-badges">
                  <span className="badge">Java</span>
                  <span className="badge">Spring Boot</span>
                  <span className="badge">Microservices</span>
                  <span className="badge">Oracle</span>
                  <span className="badge">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          
          <div className="about-grid">
            <div className="timeline animate-fade-in" style={{ padding: 0 }}>
              <div className="timeline-item" style={{ marginBottom: 0 }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-title">
                      <h3>Bachelor of Technology (IT)</h3>
                      <h4>Dr. Ambedkar Institute of Technology for Handicapped, Kanpur</h4>
                    </div>
                  </div>
                  <div className="tech-badges">
                    <span className="badge">CGPA: 7.35</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-grid animate-fade-in delay-100" style={{ gridTemplateColumns: '1fr' }}>
              <div className="achievements-box">
                <h5><Award size={18} /> Professional Certifications</h5>
                <ul className="timeline-list" style={{ marginBottom: 0, marginTop: '1rem' }}>
                  <li>AI Foundation – Tata Consultancy Services</li>
                  <li>Xperience Foundation (Java) – Tata Consultancy Services</li>
                  <li>Complex Problem Solving</li>
                  <li>Cyber Security Foundation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-grid">
            <div className="contact-info animate-fade-in">
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <a href="mailto:kaleem.it786@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Email</div>
                  <div style={{ color: 'var(--color-text-muted)' }}>kaleem.it786@gmail.com</div>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/kaleem-ahmad-83b76ab6" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>LinkedIn</div>
                  <div style={{ color: 'var(--color-text-muted)' }}>Kaleem Ahmad</div>
                </div>
              </a>
              
              <a href="https://github.com/kaleem121" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Github size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>GitHub</div>
                  <div style={{ color: 'var(--color-text-muted)' }}>@kaleem121</div>
                </div>
              </a>
            </div>
            
            <div className="contact-form animate-fade-in delay-200">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-input" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-input" placeholder="your.email@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" id="subject" className="form-input" placeholder="How can I help you?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-textarea" placeholder="Your message here..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h3>Kaleem Ahmad</h3>
          <p>Senior Developer I | Frontend-Focused Full Stack Engineer</p>
          
          <div className="footer-socials">
            <a href="https://github.com/kaleem121" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/kaleem-ahmad-83b76ab6" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kaleem.it786@gmail.com" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} Kaleem Ahmad. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
