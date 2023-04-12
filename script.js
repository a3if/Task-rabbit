$(".banner").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slideToShow: 1,
  adaptiveHeight: true,
  drag: true,
  prevArrow:'<button class="banner-arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow:'<button class="banner-arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});

$(".testimonial-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slideToShow: 1,
  adaptiveHeight: true,
  drag: true,
  prevArrow:'<button class="buttom-arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow:'<button class="buttom-arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});


const menu_btn = document.querySelector(".footer-btn");

menu_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");


  if (!menu_btn.classList.contains("is-active")) {
    document.body.classList.remove("no-scroll");
  }


  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");

  
    if (menu_btn.classList.contains("is-active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  mobile_menu.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    document.body.classList.remove("no-scroll");
  });
};



const slider = $(".testimonial-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1, // updated property name from slideToShow to slidesToShow
  adaptiveHeight: true,
  draggable: true,
  prevArrow:'<button class="banner-arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow:'<button class="banner-arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});

const hamburgerButton = document.querySelector(".hamburger");

function disableSliderArrows() {
  $(".testimonial-slider .banner-arrow-left, .testimonial-slider .banner-arrow-right").css("display", "none");
}

function enableSliderArrows() {
  $(".testimonial-slider .banner-arrow-left, .testimonial-slider .banner-arrow-right").css("display", "block");
}

function checkSliderArrows() {
  if (hamburgerButton.classList.contains("is-active")) {
    disableSliderArrows(); // Disable slider arrows when hamburger button is active
  } else {
    enableSliderArrows(); // Enable slider arrows when hamburger button is not active
  }
}

hamburgerButton.addEventListener("click", function () {
  checkSliderArrows(); // Check and update slider arrows when hamburger button is clicked
});
