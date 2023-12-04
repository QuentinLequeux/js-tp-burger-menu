document.documentElement.classList.add("js-enabled");

const button = document.querySelector(".nav-button");
const menu = document.querySelector(".main");

button.addEventListener("click", () => {
    menu.classList.toggle("is-opened");
});