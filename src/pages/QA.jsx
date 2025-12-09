import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const QA = () => {
  return (
    <>
      {/* We use the Navbar component to handle the Mobile Menu toggle logic automatically */}
      <Navbar />

      <div className="smooth-scroll-wrapper">

        {/* QA Hero Section */}
        <section className="qa-hero section-bg" id="qa-home">
            <div className="qa-hero-content reveal">
                <h1>Precision. <span className="accent">Reliability.</span> Excellence.</h1>
                <p>Ensuring digital products meet the highest standards of performance through robust automation and meticulous manual testing.</p>
                <div className="qa-stats">
                    <div className="stat-item">
                        <h3>4+</h3>
                        <span>Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <h3>100%</h3>
                        <span>Test Coverage Goal</span>
                    </div>
                    <div className="stat-item">
                        <h3>20+</h3>
                        <span>Major Projects</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Tech Stack / Toolbox */}
        <section className="qa-tools">
            <div className="content-wrapper reveal">
                <h2 className="section-title"><span>Technical Arsenal</span></h2>
                <div className="tools-grid">
                    
                    {/* Automation */}
                    <div className="tool-category">
                        <h3><i className="fas fa-robot"></i> Automation</h3>
                        <div className="badge-container">
                            <span className="badge">Playwright</span>
                            <span className="badge">Cypress</span>
                            <span className="badge">Allure Reporting</span>
                            <span className="badge">Monocart Coverage Reporting</span>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="tool-category">
                        <h3><i className="fas fa-code"></i> Languages</h3>
                        <div className="badge-container">
                            <span className="badge">JavaScript</span>
                            <span className="badge">Python</span>
                            <span className="badge">SQL</span>
                            <span className="badge">HTML/CSS</span>
                        </div>
                    </div>

                    {/* Management & CI/CD */}
                    <div className="tool-category">
                        <h3><i className="fas fa-tasks"></i> Management & CI/CD</h3>
                        <div className="badge-container">
                            <span className="badge">Kanban</span>
                            <span class="badge">Git/GitHub</span>
                            <span class="badge">Postman (API)</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Case Studies / Projects */}
        <section className="qa-projects">
            <div className="content-wrapper">
                <h2 className="section-title reveal"><span>Key Projects</span></h2>
                
                {/* Project 1 */}
                <div className="project-card reveal">
                    <div className="project-img">
                        <img 
                            src="/qa-project1.jpg" 
                            alt="Banking System Testing" 
                            onError={(e) => e.target.src='https://placehold.co/600x400/131313/b74b4b?text=Web-Based+Consoles'} 
                        />
                    </div>
                    <div className="project-info">
                        <h3>Secure Card Management System</h3>
                        <span className="role">QA Engineer | AllCard Tech</span>
                        <p>Performed end-to-end testing for high-security card printing platforms used by Ateneo De Manila University, BDO Unibank, and Government LGUs.</p>
                        <ul>
                            <li><i className="fas fa-check"></i> Implemented Playwright automation, reducing regression time by 40%.</li>
                            <li><i className="fas fa-check"></i> Established CI/CD pipelines for automated nightly builds.</li>
                            <li><i className="fas fa-check"></i> Conducted rigorous API testing using Postman.</li>
                        </ul>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card reveal">
                    <div className="project-img">
                        <img 
                            src="/qa-project2.jpg" 
                            alt="ERP System" 
                            onError={(e) => e.target.src='https://placehold.co/600x400/131313/b74b4b?text=ERP+System'} 
                        />
                    </div>
                    <div className="project-info">
                        <h3>ERIC (Enterprise Resource Planning)</h3>
                        <span className="role">QA Engineer I | Jupiter Systems</span>
                        <p>Ensured the stability of core ERP modules including Order-Entry-Billing, Inventory, and Purchasing.</p>
                        <ul>
                            <li><i className="fas fa-check"></i> Maintained automation scripts using Robot Framework.</li>
                            <li><i className="fas fa-check"></i> Created data-fix scripts to resolve critical production data issues.</li>
                            <li><i className="fas fa-check"></i> Collaborated in Agile/Scrum sprints for bi-weekly releases.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        {/* My Process (Methodology) */}
        <section className="qa-process section-bg">
            <div className="content-wrapper reveal">
                <h2 className="section-title"><span>My Methodology</span></h2>
                <div className="process-steps">
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-search"></i></div>
                        <h4>Analyze</h4>
                        <p>Review Scope of Work, Business Requirements, & QA Acceptance Criteria.</p>
                    </div>
                    <div className="line"></div>
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-pencil-ruler"></i></div>
                        <h4>Plan</h4>
                        <p>Create test plans, scenarios, and cases.</p>
                    </div>
                    <div class="line"></div>
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-bug"></i></div>
                        <h4>Execute</h4>
                        <p>Manual testing & script automation.</p>
                    </div>
                    <div className="line"></div>
                    <div className="step">
                        <div className="step-icon"><i className="fas fa-chart-line"></i></div>
                        <h4>Report</h4>
                        <p>Track bugs & validate fixes.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="qa-cta">
            <div className="content-wrapper reveal">
                <h2>Ready to secure your software's quality?</h2>
                <p>I bring the technical expertise to find bugs before your users do.</p>
                {/* Note: We use Link to route back to the contact section on the home page */}
                <Link to="/#contact" className="btn">Hire Me For QA</Link>
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

export default QA;