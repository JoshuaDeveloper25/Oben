// PRODUCTOS DESTACADOS CAROUSEL
$(document).ready(function () {
  $(".productos-carousel").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// REVIEWS CAROUSEL
$(document).ready(function () {
  $(".oben-home__historias-reviews").slick({
    dots: true,
    arrows: true,
    speed: 250,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow:
      '<span class="priv_arrow"><img src="img/reviews-left-icon.svg" alt=""></span>',
    nextArrow:
      '<span class="next_arrow"><img src="img/reviews-right-icon.svg" alt=""></span>',
    responsive: [
      {
        breakpoint: 900 /* 900px */,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },

      {
        breakpoint: 738 /* 738px */,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  });
})