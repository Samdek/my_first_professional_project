const menu  = document.querySelector(".nav_toggle");
const navLinks  = document.querySelectorAll(".nav_link");

menu.addEventListener('click', () => {
    document.body.classList.toggle("nav_open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav_open");
    })
})