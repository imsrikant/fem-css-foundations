const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
    menu.classList.toggle("menu--hide");
    close.classList.toggle("close--show");
    body.classList.toggle("body--no-scroll");
});

close.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
    menu.classList.toggle("menu--hide");
    close.classList.toggle("close--show");
    body.classList.toggle("body--no-scroll");
});
