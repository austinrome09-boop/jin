let lastScrollTop = 0;
const header = document.querySelector("header");
const words = [
    "Software QA Engineer",
    "Software Developer",
    "Social Media Manager",
    "Video Editor",
    "Graphic Designer",
    "Private DJ",
];

const typingElement = document.getElementById("dynamic-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 1500;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingElement.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords);
            return;
        }
    } else {
        typingElement.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Hide header on scroll down and show it on scroll up
window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Active Navigation Link Logic
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

const observerOptions = {
    threshold: 0.5,
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

// Select the 'About Me' section
const aboutSection = document.querySelector(".about");

if (aboutSection) {
    const aboutObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Show the 'About Me' section when it's in view
                    aboutSection.classList.add("visible");
                } else {
                    // Hide the 'About Me' section when it's out of view
                    aboutSection.classList.remove("visible");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe the 'About Me' section
    aboutObserver.observe(aboutSection);
} else {
    console.error("About section not found!");
}

// Select the home image
const homeImage = document.querySelector(".home-img img");

if (homeImage) {
    const imageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add scaling effect when in view
                    homeImage.classList.add("scaling");
                } else {
                    // Remove scaling effect when out of view
                    homeImage.classList.remove("scaling");
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of the image is visible
    );

    // Observe the home image
    imageObserver.observe(homeImage);
} else {
    console.error("Home image not found!");
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active"); // Show/hide navigation
    menuToggle.classList.toggle("open"); // Optional: Add a class for styling the toggle button
});

// Close the menu when clicking on a link
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active"); // Close the menu
    });
});

const slides = document.querySelectorAll('.slide');
let current = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'next', 'prev');
  });

  slides[current].classList.add('active');
  slides[(current + 1) % slides.length].classList.add('next');
  slides[(current - 1 + slides.length) % slides.length].classList.add('prev');
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlides();
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
});

updateSlides();
