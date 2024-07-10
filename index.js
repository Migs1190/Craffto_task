const activePaginationBullet = document.querySelector(".swiper-pagination");
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, 0],
    },
    next: {
      translate: [1200, 0, 0],
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      activePaginationBullet.style.setProperty(
        "--progress",
        `${(1 - progress) * 105}%`
      );
      if (time <= 0.2) {
        activePaginationBullet.style.setProperty("--progress", "0");
      }
    },
    slideChangeTransitionEnd(sw) {
      const headings = sw.el.querySelectorAll(".heading-letters");
      const buttons = sw.el.querySelectorAll(".btn-group-wrapper button");
      for (const button of buttons)
        button.style.animation = "button-going-up 0.2s 0.4s forwards ease-out";
      for (const heading of headings)
        heading.style.animation = "heading-going-up 0.5s forwards ease-out";
    },
    slideChangeTransitionStart(sw) {
      const headings = sw.el.querySelectorAll(".heading-letters");
      const buttons = sw.el.querySelectorAll(".btn-group-wrapper button");
      for (const button of buttons) button.style.animation = "none";
      for (const heading of headings) {
        heading.style.animation = "none";
      }
    },
  },
});
