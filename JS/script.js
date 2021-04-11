ScrollOut({
  cssProps: {
    viewportY: true,
    visibleY: true,
  },
});

// loading page
$(window).on("load", function () {
  $(".loading").fadeOut();
  $(".main-content").fadeIn();
});

$(function () {
  // disable right click
  // $("body").bind("contextmenu", function () {
  //   return false;
  // });
  // $("body").mousedown(function () {
  //   return false;
  // });

  // smooth scroll
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

  $(window).on("scroll resize load", function () {
    // current nav
    const set = 300;
    let topTop = 0;
    let worksTop = Math.round($("#works").offset().top);
    let aboutTop = Math.round($("#about").offset().top);
    let contactTop = Math.round($("#contact").offset().top);
    let navScrollTop = $(window).scrollTop() + set;
    if (topTop <= navScrollTop && navScrollTop < worksTop) {
      $(".to-top").addClass("current").siblings("li").removeClass("current");
    } else if (worksTop <= navScrollTop && navScrollTop < aboutTop) {
      $(".to-works").addClass("current").siblings("li").removeClass("current");
    } else if (aboutTop <= navScrollTop && navScrollTop < contactTop) {
      $(".to-about").addClass("current").siblings("li").removeClass("current");
    } else if (contactTop <= navScrollTop) {
      $(".to-contact")
        .addClass("current")
        .siblings("li")
        .removeClass("current");
    }

    // photo slide
    let imgTwoTop = Math.round($(".photo-gallery").offset().top) + 900;
    let imgThreeTop = Math.round($(".photo-gallery").offset().top) + 2100;
    let videoGalleryTop = Math.round($(".video-gallery").offset().top);
    let noScrollEffect = Math.round($(".contact").offset().top);
    let slideScrollTop = $(window).scrollTop() + 1;
    if (0 <= slideScrollTop && slideScrollTop <= imgTwoTop) {
      $(".image1").addClass("active").siblings("li").removeClass("active");
    } else if (imgTwoTop < slideScrollTop && slideScrollTop <= imgThreeTop) {
      $(".image2").addClass("active").siblings("li").removeClass("active");
    } else if (imgThreeTop < slideScrollTop) {
      $(".image3").addClass("active").siblings("li").removeClass("active");
    }

    // video placeholder
    let distance = $(this).scrollTop();
    if (videoGalleryTop <= distance) {
      $(".left-placeholder").addClass("fade-out");
      $(".right-placeholder").addClass("fade-out");
    } else {
      $(".left-placeholder").removeClass("fade-out");
      $(".right-placeholder").removeClass("fade-out");
    }

    // scroll effect
    if (noScrollEffect <= distance) {
      $(".scroll-effect").addClass("no-scroll-effect");
    } else {
      $(".scroll-effect").removeClass("no-scroll-effect");
    }
  });

  // polyfill
  const imageFit = $(".slide-photo, .profile-img");
  objectFitImages(imageFit);

  const elements = $(".images, .sticky-video, .sticky-texts");
  Stickyfill.add(elements);
});
