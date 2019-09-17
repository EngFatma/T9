const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_ul");
const links = document.querySelectorAll(".nav_ul li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});