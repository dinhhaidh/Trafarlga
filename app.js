window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const menuBg = document.querySelector(".menu-bg");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  menuToggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menuBg.classList.add("is-active");
    menu.classList.add("is-active");
    menuClose.classList.add("is-active");
  }
  menuClose.addEventListener("click", function () {
    menuBg.classList.remove("is-active");
    menu.classList.remove("is-active");
    this.classList.remove("is-active");
    // change
  });
});
$(".review-list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next slick-arrow'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.hero-content, .container-fluid`) 
sr.reveal(`.hero-image, .review-main`,{origin: 'bottom'})
sr.reveal(`.service-item,.article-item`,{interval: 100}) 
sr.reveal(`.feature-content`,{origin: 'right'})
sr.reveal(`.feature-image`,{origin: 'left'})
