document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Typing Effect (SAFE VERSION) ---
    // Only run this if the element exists on the current page
    const typingElement = document.getElementById("dynamic-text");
    
    if (typingElement) {
        const words = ["Software QA Engineer", "Web Developer", "DJ & Mixer", "Graphic Designer", "Video Editor"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                charIndex--;
                typingElement.textContent = currentWord.substring(0, charIndex);
            } else {
                charIndex++;
                typingElement.textContent = currentWord.substring(0, charIndex);
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 100 : 200);
            }
        }
        typeEffect();
    }


    // --- 2. Scroll Animation (Reveal on Scroll) ---
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                // Optional: Remove else block if you want items to stay visible once revealed
                reveals[i].classList.remove('active');
            }
        }
    }
    // Trigger immediately to show elements already in view
    reveal();


    // --- 3. Mobile Menu Toggle ---
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            const icon = menuToggle.querySelector('i');
            if(icon) icon.classList.toggle('fa-times');
        });

        document.querySelectorAll("nav a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                const icon = menuToggle.querySelector('i');
                if(icon) icon.classList.remove('fa-times');
            });
        });
    }


    // --- 4. Header Hide/Show on Scroll ---
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    
    if (header) {
        window.addEventListener("scroll", function () {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > lastScrollTop) {
                header.style.top = "-100px"; // Hide
            } else {
                header.style.top = "0"; // Show
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }


    // --- 5. Contact Form (EmailJS) ---
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Sending...";

            // Make sure emailjs is defined before using it
            if (typeof emailjs !== 'undefined') {
                emailjs.sendForm("service_p4pi7r5", "template_1fvswrk", this)
                    .then(() => {
                        alert("Message sent successfully!");
                        contactForm.reset();
                        btn.innerText = originalText;
                    })
                    .catch((err) => {
                        console.error("Failed", err);
                        alert("Failed to send.");
                        btn.innerText = originalText;
                    });
            } else {
                console.error("EmailJS not loaded");
                alert("Email service not available.");
                btn.innerText = originalText;
            }
        });
    }

    // --- 6. Home Section Exit Animation ---
    const homeSection = document.querySelector('.home');
    if (homeSection) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                homeSection.classList.add('scrolled-out');
            } else {
                homeSection.classList.remove('scrolled-out');
            }
        });
    }

});