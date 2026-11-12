console.log("Welcome to My Portfolio!");

window.addEventListener("scroll", function() {
    console.log("Portfolio scrolling...");
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .project-card, .skill-card")
.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});
const roles = [
    "ECE Student",
    "Embedded Systems Enthusiast",
    "IoT Developer",
    "Web Developer",
    "Python Learner"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;
            typeEffect();
        }, 1500);
    }
}

typeEffect();
document.querySelectorAll(".progress-bar").forEach((bar) => {
    const width = bar.getAttribute("data-width");

    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display =
        window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });
    });
}