window.onload = function() {
  const menu = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".mobile-nav");
  const close = document.querySelector(".close-menu");
  const images = document.querySelectorAll(".carousel-logos img");
  const btn_prev = document.querySelector(".btn-prev");
  const btn_next = document.querySelector(".btn-next");

  menu.addEventListener("click", e => {
    e.preventDefault();
    nav.classList.toggle("visible");
  });

  // Mobile Slider
  let i = 0;
  btn_prev.addEventListener("click", e => {
    e.preventDefault();
    images[i].style.opacity = "0";
    i--;
    if (i < 0) {
      i = images.length - 1;
    }
    images[i].style.opacity = "1";
  });

  btn_next.addEventListener("click", e => {
    e.preventDefault();
    images[i].style.opacity = "0";
    i++;
    if (i >= images.length) {
      i = 0;
    }
    images[i].style.opacity = "1";
  });

  // Scroll to top
  const top = document.querySelector("#top");
  const btnToTop = document.querySelector("#btnToTop");

  document.addEventListener("scroll", function() {
    if (window.pageYOffset > 400 || this.documentElement.scrollTop > 400) {
      btnToTop.style.opacity = "1";
    } else {
      btnToTop.style.opacity = "0";
    }
  });

  btnToTop.addEventListener("click", () => {
    top.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};
