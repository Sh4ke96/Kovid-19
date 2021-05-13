const hamburger_btn = document.querySelector(".hamburger");
const menu_list = document.querySelector(".header__menu");
const body = document.querySelector("body");
const navbar = document.querySelector(".header__navbar");
const cases = document.querySelector("#cases");
const deaths = document.querySelector("#deaths");
const recovered = document.querySelector("#recovered");

hamburger_btn.addEventListener('click', function () {
  menu_list.classList.toggle('show');
  hamburger_btn.classList.toggle('is-active');
  body.classList.toggle('blocked');
})

document.querySelectorAll('.header__link')
.forEach(header__link => header__link.addEventListener('click', function () {
  menu_list.classList.remove('show');
  hamburger_btn.classList.toggle('is-active');
  body.classList.remove('blocked');
}));

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
})

window.onload = function() {
  const casesUp = new countUp.CountUp(cases, 152899453);
  const deathsUp = new countUp.CountUp(deaths, 3217969);
  const recoveredUp = new countUp.CountUp(recovered, 131613458);
  casesUp.start();
  deathsUp.start();
  recoveredUp.start();
}

const hidden_faq = document.querySelector(".answers__hidden");
const hidden_icon = document.querySelector(".answers__icon");

hidden_icon.addEventListener("click", function () {
  hidden_faq.classList.toggle(".visible");
});