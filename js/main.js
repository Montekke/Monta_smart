$('.single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: '<div class="prev carousel-btn d-flex align-items-center justify-content-center"><img src="../img/carousel_btn.png" alt=""></div>',
    nextArrow: '<div class="next carousel-btn d-flex align-items-center justify-content-center"><img src="../img/carousel_btn1.png" alt=""></div>',
  });

  $('.single2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: '<div class="prev carousel-btn d-flex align-items-center justify-content-center"><img src="../img/carousel_btn.png" alt=""></div>',
    nextArrow: '<div class="next carousel-btn d-flex align-items-center justify-content-center"><img src="../img/carousel_btn1.png" alt=""></div>',
  });

  $('.button-visible').click(function() {
    $('.reviews2').addClass('show');
    $('.button-visible').addClass('hide');
  });