const hamburger_btn = document.querySelector(".hamburger");
const menu_list = document.querySelector(".header__menu");

hamburger_btn.addEventListener('click', function () {
    menu_list.classList.toggle('show');
    hamburger_btn.classList.toggle('is-active');
})