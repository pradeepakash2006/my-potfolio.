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