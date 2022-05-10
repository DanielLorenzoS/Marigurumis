let arrow = document.querySelector(".img-arrow");
let header = document.querySelector(".header");

arrow.addEventListener("click", () => {
  arrow.style.animation = "none";
});

let btnMenu = document.querySelector(".img-menu");
let nav = document.querySelector(".nav-res");
let saw = false;
let navMenu = document.querySelector(".nav-menu");
let navMenu2 = document.querySelector(".nav-menu2");
let navMenu3 = document.querySelector(".nav-menu3");

btnMenu.addEventListener("click", () => {
  if (saw == false) {
    nav.style.marginTop = "8vh";
    saw = true;
  } else {
    nav.style.marginTop = "-500px";
    saw = false;
  }
});

navMenu.addEventListener("click", () => {
  nav.style.marginTop = "-500px";
  saw = false;
});
navMenu2.addEventListener("click", () => {
  nav.style.marginTop = "-500px";
  saw = false;
});
navMenu3.addEventListener("click", () => {
  nav.style.marginTop = "-500px";
  saw = false;
});

let float = document.querySelector(".float");
let iPhone = document.querySelector(".fast-phone");
let iWhats = document.querySelector(".fast-whats");
let iMail = document.querySelector(".fast-mail");

float.addEventListener("click", () => {
  if (float.innerHTML == "+") {
    iPhone.style.bottom = "50px";
    iWhats.style.bottom = "110px";
    iMail.style.bottom = "170px";
    iPhone.style.opacity = "1";
    iWhats.style.opacity = "1";
    iMail.style.opacity = "1";
    float.innerHTML = "^";
    float.style.transform = "rotate(180deg)";
  } else if (float.innerHTML == "^") {
    iPhone.style.bottom = "-10px";
    iWhats.style.bottom = "-10px";
    iMail.style.bottom = "-10px";
    iPhone.style.opacity = "0";
    iWhats.style.opacity = "0";
    iMail.style.opacity = "0";
    float.innerHTML = "+";
    float.style.transform = "rotate(0deg)";
  }
});
