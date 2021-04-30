const hamburger_btn = document.querySelector(".hamburger");
const menu_list = document.querySelector(".header__menu");
const body = document.querySelector("body");
const navbar = document.querySelector(".header__navbar");

hamburger_btn.addEventListener('click', function () {
    menu_list.classList.toggle('show');
    hamburger_btn.classList.toggle('is-active');
    body.classList.toggle('blocked');
})

window.addEventListener("scroll", function (){
    navbar.classList.toggle("sticky", window.scrollY > 0);
})