// make navbar fixed in all site:
window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// toggle between mens and admin  icon
let menu = document.querySelector("#menu-btnn");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// show login section and hide it when ckicking in login btn :
let loginBtn = document.querySelector("#login-btnn");
let lognContainer = document.querySelector(".login-form-container");
loginBtn.onclick = () => {
  lognContainer.classList.toggle("active");
};

// close login page :
let closeBtn = document.querySelector("#close-login-form");
closeBtn.onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

// make move animation on section with mosemove :
let home = document.querySelector(".home");
let itemsMove = document.querySelectorAll(".home-parallax"); // iteams will move in thst section take that class:
// make moves in x direction :

home.onmousemove = (e) => {
  itemsMove.forEach((elm) => {
    let speed = elm.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};
// make moves in y direction :
home.onmouseleave = (e) => {
  itemsMove.forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 5,
    autoplayTimeout: 1080,
    autoplayHoverPause: true,
    center: true,
    dotsData: true,

    items: 3,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
});

var typed = new Typed(".element", {
  strings: ["created by eng-sa3eed"],
  typeSpeed: 10,
  backSpeed: 30,
  loop: true,
  showCursor: false,
});
/********************************* */