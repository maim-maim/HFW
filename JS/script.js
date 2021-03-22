ScrollOut({
  cssProps: {
    viewportY: true,
    visibleY: true,
  },
});

$(function () {
  // loading
  $(window).on('load',function(){
//   var loading = function(){
    $('.loading').fadeOut('fast');
    $('.content').fadeIn('slow');
//   };
//   setTimeout(loading,2000);
});

  // scroll
  $(".logo-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".page-link").click(function () {
    let id = $(this).attr("href");
    let position = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      1000
    );
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

  // video placeholder & scroll effect
  let videoGalleryTop;
  let noScrollEffect;
  $(window).on("resize load", function () {
    videoGalleryTop = Math.round($(".video-gallery").offset().top);
    noScrollEffect = Math.round($(".contact").offset().top);
  });
  $(window).on("scroll resize", function () {
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

  const elements = $(".sticky-texts, .sticky-video, .gallery-img");
  Stickyfill.add(elements);
});
