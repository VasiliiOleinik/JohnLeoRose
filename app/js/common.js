$(function(){
  
  // Remove top info block
  $('#close-header-info').on('click', function(){
    $('#header-info-block').remove();
  });

  // Main slider
  $(".mens-told__slider.owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});