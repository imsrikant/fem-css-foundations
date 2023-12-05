
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
    menu.classList.toggle("menu--hide");
    close.classList.toggle("close--show");
});

close.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
    menu.classList.toggle("menu--hide");
    close.classList.toggle("close--show");
});
