// header start here
document.querySelector(".bargar-menu").addEventListener("click", () => {
  document.querySelector("header nav .nav-bottom").classList.add("navactive");
});
document.querySelector(".close").addEventListener("click", () => {
  document
    .querySelector("header nav .nav-bottom")
    .classList.remove("navactive");
});
// header end here

// fleet section start here
$(".fleet-carousel").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left-long'></i>",
    "<i class='fa-solid fa-arrow-right-long'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

// faq section
// faq accordion start here
$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});

//  hover effect

const items = document.querySelectorAll(".item");
const buttons = document.querySelectorAll(".commonbtn");
const routecards = document.querySelectorAll(".route-card");
const citycards = document.querySelectorAll(".city-card");
const cards = document.querySelectorAll(".card-card");

items.forEach((element) => {
  $(element).tilt({
    scale: 0.98,
    glare: true,
    maxGlare: 0.5,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 400,
  });
});
buttons.forEach((element) => {
  $(element).tilt({
    scale: 1.05,
    glare: true,
    maxGlare: 0.5,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 400,
  });
});
routecards.forEach((element) => {
  $(element).tilt({
    scale: 1,
    glare: true,
    maxGlare: 0.5,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 400,
  });
});
citycards.forEach((element) => {
  $(element).tilt({
    scale: 1,
    glare: true,
    maxGlare: 0.5,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 400,
  });
});
cards.forEach((element) => {
  $(element).tilt({
    scale: 0.9,
    glare: true,
    maxGlare: 0.5,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 400,
  });
});

// testimonial section start here
$(".testimonial-carousel").owlCarousel({
  loop: false,
  nav: true,
  dots: false,
  autoplay:true,
  navText: [
    "<i class='fa-solid fa-arrow-left-long'></i>",
    "<i class='fa-solid fa-arrow-right-long'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },
    800: {
      items: 2,
      margin: 80,
    },
  },
});

// services section start here
$(".service-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  autoplay:true,
  navText: [
    "<i class='fa-solid fa-arrow-left-long'></i>",
    "<i class='fa-solid fa-arrow-right-long'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },
    800: {
      items: 2,
      margin: 50,
    },
    1000: {
      items: 3.2,
      margin: 50,
    },
  },
});
