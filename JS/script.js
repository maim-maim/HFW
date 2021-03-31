ScrollOut({
  cssProps: {
    viewportY: true,
    visibleY: true,
  },
});
// loading
$(window).on("load", function () {
  $(".loading").fadeOut();
  $(".main-content").fadeIn();
});

$(function () {
  // disable right click
  $("body").bind("contextmenu", function () {
    return false;
  });
  $("body").mousedown(function () {
    return false;
  });

  // scroll
  $(".logo-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(".page-link").click(function () {
    let id = $(this).attr("href");
    let position = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      500
    );

    return false;
  });

  // current nav
  const set = 300;
  let topTop = 0;
  let worksTop;
  let aboutTop;
  let contactTop;
  $(window).on("resize load", function () {
    worksTop = Math.round($("#works").offset().top);
    aboutTop = Math.round($("#about").offset().top);
    contactTop = Math.round($("#contact").offset().top);
  });
  $(window).on("scroll resize", function () {
    let scrollTop = $(window).scrollTop() + set;
    if (topTop <= scrollTop && scrollTop < worksTop) {
      $(".to-top").addClass("current").siblings("li").removeClass("current");
    } else if (worksTop <= scrollTop && scrollTop < aboutTop) {
      $(".to-works").addClass("current").siblings("li").removeClass("current");
    } else if (aboutTop <= scrollTop && scrollTop < contactTop) {
      $(".to-about").addClass("current").siblings("li").removeClass("current");
    } else if (contactTop <= scrollTop) {
      $(".to-contact")
        .addClass("current")
        .siblings("li")
        .removeClass("current");
    }
  });

  $(window).on("resize load", function () {
    imgTwoTop = Math.round($(".wrapper").offset().top) + 900;
    imgThreeTop = Math.round($(".wrapper").offset().top) + 2100;
  });
  $(window).on("scroll resize", function () {
    let scrollTop = $(window).scrollTop() + 1;
    if (0 <= scrollTop && scrollTop <= imgTwoTop) {
      $(".image1").addClass("active").siblings("li").removeClass("active");
    } else if (imgTwoTop < scrollTop && scrollTop <= imgThreeTop) {
      $(".image2").addClass("active").siblings("li").removeClass("active");
    } else if (imgThreeTop < scrollTop) {
      $(".image3").addClass("active").siblings("li").removeClass("active");
    }
  });

  // video placeholder & scroll effect
  let imgTwoTop;
  let imgThreeTop;
  let videoGalleryTop;
  let noScrollEffect;
  $(window).on("resize load", function () {
    imgTwoTop = Math.round($(".photo-gallery").offset().top) + 900;
    imgThreeTop = Math.round($(".photo-gallery").offset().top) + 2100;
    videoGalleryTop = Math.round($(".video-gallery").offset().top);
    noScrollEffect = Math.round($(".contact").offset().top);
  });

  $(window).on("scroll resize load", function () {
    let scrollTop = $(window).scrollTop() + 1;
    if (0 <= scrollTop && scrollTop <= imgTwoTop) {
      $(".image1").addClass("active").siblings("li").removeClass("active");
    } else if (imgTwoTop < scrollTop && scrollTop <= imgThreeTop) {
      $(".image2").addClass("active").siblings("li").removeClass("active");
    } else if (imgThreeTop < scrollTop) {
      $(".image3").addClass("active").siblings("li").removeClass("active");
    }

    let distance = $(this).scrollTop();
    if (videoGalleryTop <= distance) {
      $(".left-placeholder").addClass("fade-out");
      $(".right-placeholder").addClass("fade-out");
    } else {
      $(".left-placeholder").removeClass("fade-out");
      $(".right-placeholder").removeClass("fade-out");
    }
    if (noScrollEffect <= distance) {
      $(".scroll-effect").addClass("no-scroll-effect");
    } else {
      $(".scroll-effect").removeClass("no-scroll-effect");
    }
  });

  // polyfill
  const imageFit = $(".cover-video, .gallery-img, .sticky-video, .profile-img");
  objectFitImages(imageFit);

  const elements = $(".sticky-image, .sticky-video, .sticky-texts");
  Stickyfill.add(elements);
});
