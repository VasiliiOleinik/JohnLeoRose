$(function() {
  // Remove top info block
  $("#close-header-info").on("click", function() {
    $("#header-info-block").remove();
  });

  // Remove cookies
  $("#hide-cookies-js").on("click", function() {
    $(".cookies").remove();
  });

  // Dinamics label
  $(".input-js").on("click", function() {
    $(this)
      .siblings(".dynamic-label")
      .css({
        transition: ".1s ease-in-out",
        top: "-7px",
        padding: "0px 10px",
        background: "#ffff",
        left: "15px",
        "font-size": "10px",
        "box-shadow": "0px 0px 3px 0px rgba(0,0,0,0.1)",
        "z-index": "15"
      });
  });
  $(".input-js").on("blur", function() {
    if ($(this).val().length == "") {
      $(this)
        .siblings(".dynamic-label")
        .css({
          transition: ".1s ease-in-out",
          top: "50%",
          padding: "0px",
          background: "transparent",
          left: "24px",
          "font-size": "15px",
          "box-shadow": "none",
          "z-index": "5"
        });
    }
  });

  // Validation
  $("#subscribe").validate({
    errorClass: "invalid",
    validClass: "success",
    rules: {
      email: {
        email: true,
        required: true
      }
    },
    messages: {
      email: {
        required: "Поле обязательно для заполнения",
        email: "Введите корректный email"
      }
    }
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

  lazyScroll($("#scroll-to-explore-js"), 500);
});

// Lazy scroll
function lazyScroll(anchor, speed) {
  anchor.on("click", function(e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var scrollRange = $(href).offset().top;
    $("html, body").animate({ scrollTop: scrollRange }, speed);
  });
}
