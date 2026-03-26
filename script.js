// Scroll animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));
// Typing Animation
const textArray = [
    "Computer Engineering Student ",
    "Web Developer ",
    "Problem Solver ",
    "Tech Enthusiast "
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingSpeed = 150;
const deletingSpeed = 80;
const pauseTime = 1200;

function type() {
    currentText = textArray[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();