jQuery(function ($) {
  'use strict';


  $(".scrollUp").click(function () {
    $("html ,body").animate({
      scrollTop: 0
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 160) {
      $('.scrollUp').fadeIn();
    } else {
      $('.scrollUp').fadeOut();
    }
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.main-menu').addClass('sticky');
    } else {
      $('.main-menu').removeClass('sticky');
    }
  })

  // team-item owl-carousel js start //
  $('.index-team').owlCarousel({
    loop: true,
    margin: 28,
    navText: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      767: {
        items: 2,
        nav: true
      },
      992: {
        items: 3,
        nav: true
      },
      1200: {
        items: 3,
        nav: true
      },
    }
  })

  $('.index-two-team').owlCarousel({
    loop: true,
    center:true,
    margin: 28,
    navText: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      767: {
        items: 2,
        nav: true
      },
      992: {
        items: 3,
        nav: true
      },
      1200: {
        items: 3,
        nav: true
      },
    }
  })

  // team-item owl-carousel js end///
  // :::::: wow js :::::::
  new WOW().init();
  //::::: preloder js::::::
  $(window).on("load", function () {
    $('.preloder').fadeOut();
  });

  // video-application js end //
  $('.video-btn').magnificPopup({
    type: 'iframe'
  });
  $('#clock').countdown('2022/12/27', function(event) {
    $(this).html(event.strftime('<span class="coundown-wrapper"><span class="single-coundown-item">%D <br><span>Days</span></span><span class="single-coundown-item">%H <br><span>Hours</span></span><span class="single-coundown-item">%M <br><span>Minutes</span></span><span class="single-coundown-item">%S <br><span>Seconds</span></span></span>'));
  });;
  // range-slider js start
  const range = document.getElementById('range'),
    tooltip = document.getElementById('tooltip'),
    setValue = () => {
      const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 16 - (newValue * 0.32);
      tooltip.innerHTML = `<output>${range.value}</output>`;
      tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
      document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);
  // range-slider js end //
  // counter js start////
    $('.counter').counterUp({
      time: 1000
  });
  // counter js end /////

}(jQuery));