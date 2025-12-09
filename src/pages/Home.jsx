import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  // --- 1. TYPING EFFECT LOGIC ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Software QA Engineer", "Web Developer", "DJ & Mixer", "Graphic Designer", "Video Editor"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 200);

      if (!isDeleting && text === fullText) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        // Word deleted, move to next
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Small pause before typing next
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);


  // --- 2. SCROLL ANIMATIONS (Reveal & Home Exit) ---
  useEffect(() => {
    const handleScroll = () => {
        // A. Reveal on Scroll Logic
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach((reveal) => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });

        // B. Home Section Exit Animation
        const homeSection = document.querySelector('.home');
        if (homeSection) {
            if (window.scrollY > 50) {
                homeSection.classList.add('scrolled-out');
            } else {
                homeSection.classList.remove('scrolled-out');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load to show elements already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // --- 3. EMAIL JS LOGIC ---
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    // UI Feedback
    btn.innerText = "Sending...";
    btn.disabled = true;

    // IMPORTANT: Using the exact IDs from your script.js
    emailjs.sendForm(
      'service_p4pi7r5',    // Service ID from your script
      'template_1fvswrk',   // Template ID from your script
      form.current,         // The form reference
      'e7rWnpjlr8SjYq8ML'   // Public Key (from your HTML init)
    )
      .then((result) => {
          console.log("Email success:", result.text);
          alert("Message sent successfully!");
          e.target.reset();
          btn.innerText = originalText;
          btn.disabled = false;
      }, (error) => {
          console.error("Email failed:", error.text);
          alert("Failed to send. Please check console for details.");
          btn.innerText = originalText;
          btn.disabled = false;
      });
  };

  return (
    <>
      <Navbar />
      <div className="smooth-scroll-wrapper">
        
        {/* --- Home Section --- */}
        <section className="home" id="home">
            <div className="home-img">
                <img src="/main.jpg" alt="Profile Picture" />
            </div>
            <div className="home-content">
                <h1>Hi, It's <span>jin.!</span></h1>
                <h3 className="typing-text">I'm a <span id="dynamic-text">{text}</span></h3>
                <p>I'm a multi-skilled professional specializing in Web Development, Software QA Engineering, Software Development, DJing & Live Mixing, Social Media Management, Video Editing, and Graphic Design.
                Let’s bring your ideas to life with creativity, rhythm, and precision!</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/austin-rome-paras-a4b482219/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/frostinrome_/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                </div>
                
                <a href="#contact" className="btn">Let's Chat!</a>
            </div>
        </section>

        {/* --- About Section --- */}
        <section className="about section-bg" id="about">
            <div className="content-wrapper reveal">
                <h2 className="section-title"><span>About Me</span></h2>
                <div className="about-details">
                    <div className="left">
                        {/* Empty container for layout balance */}
                    </div>
                    <div className="right">
                        <p><br />I’m a versatile professional with a passion for creating impactful experiences across both tech and creative fields. With a Bachelor’s degree in Computer Science, I bring a strong technical foundation to everything I do — blending logic, artistry, and rhythm in my work.</p>
                        
                        <p><br />My expertise spans Software QA Engineering, Software Development, Web Development, DJing & Live Mixing, Social Media Management, Video Editing, and Graphic Design. Whether it’s building seamless digital systems, mixing live sets that move crowds, crafting engaging websites, curating digital content, or designing visually stunning graphics, I’m dedicated to delivering results that inspire and connect.</p>
                        
                        <p><br />In the tech world, I excel in software quality assurance — ensuring applications meet the highest standards of performance and reliability. My background in software and web development allows me to turn ideas into efficient, scalable, and user-focused solutions. On the creative side, I thrive in producing captivating visuals, videos, and sound experiences that tell meaningful stories and leave a lasting impact.</p>

                        <p><br />Adaptable, creative, and detail-oriented, I approach every project with collaboration, innovation, and a commitment to excellence.</p>

                        <p><br />Let’s build, create, and make something unforgettable together.</p>
                        <br />
                    </div>
                </div>
            </div>
        </section>

        {/* --- Skills Section --- */}
        <section className="skills" id="skills">
            <div className="content-wrapper">
                <h2 className="section-title reveal"><span>What I Do</span></h2>
                <div className="skills-grid">

                    <Link to="/web-dev" className="skill-card reveal">
                        <i className="fas fa-code"></i>
                        <h4>Web Development</h4>
                        <p>Building responsive websites with HTML, CSS, JS & React.</p>
                    </Link>

                    <Link to="/qa" className="skill-card reveal">
                        <i className="fas fa-bug"></i>
                        <h4>QA Engineering</h4>
                        <p>Ensuring quality through robust testing methodologies.</p>
                    </Link>

                    <Link to="/graphic-design" className="skill-card reveal">
                        <i className="fas fa-pencil-alt"></i>
                        <h4>Graphic Design</h4>
                        <p>Creating visually stunning designs using Adobe tools.</p>
                    </Link>

                    <Link to="/video-editing" className="skill-card reveal">
                        <i className="fas fa-video"></i>
                        <h4>Video Editing</h4>
                        <p>Editing captivating videos that tell stories.</p>
                    </Link>

                    <Link to="/social-media" className="skill-card reveal">
                        <i className="fas fa-share-alt"></i>
                        <h4>Social Media</h4>
                        <p>Strategizing content to grow online presence.</p>
                    </Link>

                    <Link to="/djing" className="skill-card reveal">
                        <i className="fas fa-headphones"></i>
                        <h4>DJing & Mixing</h4>
                        <p>Crafting dynamic sets that blend genres seamlessly.</p>
                    </Link>

                </div>
            </div>
        </section>

        {/* --- Services / Timeline Section --- */}
        <section className="services section-bg" id="services">
            <div className="content-wrapper reveal">
                <h2 className="section-title"><span>My Journey</span></h2>
                
                <div className="timeline">

                    {/* Timeline Item 1 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">Early 2026</div>
                        <div className="timeline-content">
                            <h3>Clothing Brand Launch</h3>
                            <span className="company">Lyrical Deaf</span>
                            <p>Lyrical Deaf is a clothing brand born from the shared passion of me and my bestfriend for arts, music, and fashion. What began as a spark in 2023 was revisited and refined in 2025, leading to the launch of our first collection in early 2026. Our brand gives local artists and musicians a platform to bring their creativity beyond studios and stages, transforming it into wearable art that connects people through emotion and experience. The name Lyrical Deaf embodies our vision: even if the lyrics or sounds aren’t fully understood, the feeling transcends words. With the tagline feel the sound, our pieces are crafted to be experienced, understood, and felt, making Lyrical Deaf more than fashion, it’s expression, community, and culture stitched together.</p>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2025 - Present</div>
                        <div className="timeline-content">
                            <h3>Live DJ</h3>
                            <span className="company">Events & Cafes</span>
                            <p>I picked up DJing as a hobby after being inspired by artists like Siangyoo and DJ Cupcakes, but it quickly grew into a freelance profession when I began receiving bookings from mainstream cafés such as The Accents Café, Post Ceremony, and HausbyJuju. This momentum expanded further as pop-up event organizers like Cabana Club, OMG! Market, The Gathering Grounds, and The Love Club brought me in to perform, turning a simple passion into a steady creative career.</p>
                        </div>
                    </div>
                    
                    {/* Timeline Item 3 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2024 - Present</div>
                        <div className="timeline-content">
                            <h3>QA Engineer</h3>
                            <span className="company">AllCard Tech</span>
                            <p>Performed end-to-end QA testing for multiple web-based client consoles, secure card management systems, and card printing platforms. I write and maintain Playwright automation scripts using Page Object Model, Allure reporting, and monorepo code coverage, and I also develop CI/CD pipelines to streamline testing and deployment. I lead both internal and client-side UAT, collaborate closely with developers and project managers to resolve issues efficiently, and provide QA support for high-profile clients such as BDO Unibank, the City of Marikina (LGU), Saint Pedro Poveda College, and Ateneo de Manila University.</p>
                        </div>
                    </div>
                    
                    {/* Timeline Item 4 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2022 - 2024</div>
                        <div className="timeline-content">
                            <h3>QA Engineer I</h3>
                            <span className="company">Jupiter Systems, Inc.</span>
                            <p>Performed end-to-end testing for the company’s main ERP product, ERIC (Enterprise Resource Information and Control), ensuring dependable functionality across its core modules. I provided client support and worked closely with internal teams to investigate and resolve reported issues. I wrote and maintained automated test scripts using Cypress and Robot Framework, and created data-fix scripts to address production issues and maintain data integrity. I also participated in Scrum-based development sprints, contributing to timely and high-quality software releases.</p>
                        </div>
                    </div>
                    
                    {/* Timeline Item 5 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2021 - Present</div>
                        <div className="timeline-content">
                            <h3>Freelance Web Developer</h3>
                            <span className="company">Self-Employed</span>
                            <p>I create user-reactive freelance websites using HTML, CSS, and JavaScript, focusing on clean interfaces and smooth interactions. I also apply my QA background to design with accessibility in mind, ensuring every site is usable, intuitive, and inclusive for all types of users.</p>
                        </div>
                    </div>

                    {/* Timeline Item 6 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2020 - 2022</div>
                        <div className="timeline-content">
                            <h3>Freelance Graphic Designer</h3>
                            <span className="company">Freelance Virtual Assistant</span>
                            <p>I work as a freelance graphic designer specializing in real estate marketing materials for clients such as Coldwell Banker Realty and Lee & Associates. I create property posters, brochures, and a wide range of design documents used for property sales and lease, ensuring each piece is visually compelling, professionally crafted, and aligned with the client’s branding and marketing needs. Graphic design and the arts have remained a personal hobby for me, and I continue to apply my creative skills across different aspects of my life, whether in professional work, personal projects, or everyday problem-solving.</p>
                        </div>
                    </div>

                    {/* Timeline Item 7 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2022 - 2023</div>
                        <div className="timeline-content">
                            <h3>Test Automation Intern</h3>
                            <span class="company">FUTUREX, INC.</span>
                            <p>Supported automation tasks and testing of secure software solutions using Cypress Automation.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* --- Contact Section --- */}
        <section className="contact section-bg" id="contact">
            <div className="content-wrapper reveal">
                <h2 className="section-title"><span>Contact Me</span></h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>If you’d like to collaborate, discuss a project, or just say hi — feel free to reach out!</p>
                        <div className="contact-details">
                            <p><i className="fas fa-envelope"></i> austinrome09@gmail.com</p>
                            <p><i className="fas fa-map-marker-alt"></i> Manila, Philippines</p>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form">
                        {/* Note: Name attributes must match your EmailJS Template {{variables}} */}
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Home;