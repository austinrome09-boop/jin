import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WebDev = () => {
  return (
    <>
      <Navbar />
      <div className="smooth-scroll-wrapper">
        
        {/* Hero Section */}
        <section className="web-hero section-bg" id="web-home">
            <div className="qa-hero-content reveal">
                <h1>Code. <span className="accent">Create.</span> Captivate.</h1>
                <p>Building responsive, user-centric digital experiences...</p>
                <div className="qa-stats">
                    <div className="stat-item">
                        <h3>HTML</h3>
                        <span>& CSS Expert</span>
                    </div>
                    <div className="stat-item">
                        <h3>JavaScript</h3>
                        <span>Dynamic UIs</span>
                    </div>
                    <div className="stat-item">
                        <h3>React</h3>
                        <span>Organized, Efficient, Scalable</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Tech Stack */}
        <section className="qa-tools">
            <div className="content-wrapper reveal">
                <h2 className="section-title"><span>My Stack</span></h2>
                <div className="tools-grid">
                    
                    <div className="tool-category">
                        <h3><i className="fas fa-layer-group"></i> Core Technologies</h3>
                        <div className="badge-container">
                            <span className="badge">HTML</span>
                            <span className="badge">CSS</span>
                            <span className="badge">JavaScript</span>
                            <span className="badge">React</span>
                        </div>
                    </div>

                    <div className="tool-category">
                        <h3><i className="fas fa-paint-brush"></i> Design & UI</h3>
                        <div className="badge-container">
                            <span className="badge">Figma</span>
                            <span className="badge">Animations</span>
                        </div>
                    </div>

                    <div className="tool-category">
                        <h3><i className="fas fa-terminal"></i> Workflow</h3>
                        <div className="badge-container">
                            <span className="badge">Git / GitHub</span>
                            <span className="badge">VS Code</span>
                            <span className="badge">NPM / Yarn</span>
                            <span className="badge">Deployment</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section className="qa-projects">
            <div className="content-wrapper">
                <h2 className="section-title reveal"><span>Featured Works</span></h2>
                
                {/* Project 1 */}
                <div className="project-card reveal">
                    <div className="project-img">
                        <img 
                            src="/web-project1.jpg" 
                            alt="Lyrical Deaf Brand Website" 
                            onError={(e) => e.target.src='https://placehold.co/600x400/131313/b74b4b?text=Lyrical+Deaf+Mockup'} 
                        />
                    </div>
                    <div className="project-info">
                        <h3>Lyrical Deaf Official Store</h3>
                        <span className="role">Co-Founder, Designer, & Lead Developer | Launching Dec 2025</span>
                        <p>A bespoke e-commerce experience for our upcoming clothing brand. This project translates the brand's "Feel the Sound" philosophy into a visual digital journey.</p>
                        <ul>
                            <li><i className="fas fa-check"></i> <strong>Immersive Shopping:</strong> Explore products through an RPG-inspired interface that makes browsing feel like an adventure.</li>
                            <li><i className="fas fa-check"></i> <strong>Dynamic Brand Experience:</strong> Custom animations and layouts that bring the brand's artistic vision to life in a game-like environment.</li>
                            <li><i className="fas fa-check"></i> <strong>Seamless Performance:</strong> Optimized for smooth navigation and handling high traffic during new collection drops.</li>
                        </ul>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card reveal">
                    <div className="project-img">
                      <img 
                        src="/web-project2.jpg" 
                        alt="Personal Portfolio" 
                        onError={(e) => e.target.src='https://placehold.co/600x400/131313/b74b4b?text=Portfolio+Screenshot'} 
                      />
                    </div>
                    <div className="project-info">
                        <h3>frostinrome.me</h3>
                        <span className="role">Personal Portfolio | Live</span>
                        <p>A central hub showcasing my multi-disciplinary career. Designed to be professional yet expressive of my personal brand identity.</p>
                        <ul>
                            <li><i className="fas fa-check"></i> <strong>Performance:</strong> Optimized asset loading and clean code structure for fast load times.</li>
                            <li><i className="fas fa-check"></i> <strong>Interactive UI:</strong> Implemented scroll reveals, typing effects, and smooth navigation.</li>
                            <li><i className="fas fa-check"></i> <strong>Dark Mode:</strong> A custom high-contrast dark theme designed for visual comfort.</li>
                        </ul>
                        <a 
                            href="https://frostinrome.me" 
                            target="_blank" 
                            className="btn" 
                            style={{ marginTop: '1rem', padding: '0.5rem 2rem', fontSize: '1.4rem' }}
                        >
                            Visit Live Site
                        </a>
                    </div>
                </div>

            </div>
        </section>

        {/* Services / Capabilities */}
        <section className="qa-process section-bg">
            <div className="content-wrapper reveal">
                <h2 className="section-title"><span>What I Deliver</span></h2>
                <div className="process-steps">
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-mobile-alt"></i></div>
                        <h4>Responsive</h4>
                        <p>Sites that look perfect on phones, tablets, and desktops.</p>
                    </div>
                    <div className="line"></div>
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-rocket"></i></div>
                        <h4>Fast</h4>
                        <p>Optimized code for quick loading and smooth performance.</p>
                    </div>
                    <div className="line"></div>
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-universal-access"></i></div>
                        <h4>Accessible</h4>
                        <p>Inclusive design practices ensuring usability for all.</p>
                    </div>
                    <div className="line"></div>
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-search-plus"></i></div>
                        <h4>SEO Ready</h4>
                        <p>Structured data to help your site rank better.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="qa-cta">
            <div className="content-wrapper reveal">
                <h2>Have a vision? Let's build it.</h2>
                <p>From concept to code, I bring ideas to life on the web.</p>
                <Link to="/#contact" className="btn">Start a Project</Link>
            </div>
        </section>

        {/* Footer */}
        <footer>
            <p>Copyright &copy; 2025 jin. All Rights Reserved.</p>
        </footer>

      </div>
    </>
  );
};

export default WebDev;