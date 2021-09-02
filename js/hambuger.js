let hamburger = document.querySelector(".hamburger--spin");

let menu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("open");
})