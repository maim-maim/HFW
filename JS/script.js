ScrollOut({
  cssProps: {
    viewportY: true,
    visibleY: true,
  },
});

$(function () {
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
  let worksTop = Math.round($("#works").offset().top);
  let aboutTop = Math.round($("#about").offset().top);
  let contactTop = Math.round($("#contact").offset().top);

  $(window).on("scroll", function () {
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
  let videoGalleryTop = $(".video-gallery").offset().top;
  let noScrollEffect = $(".contact").offset().top;
  let distance = 0;
  $(document).scroll(function () {
    distance = $(this).scrollTop();
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