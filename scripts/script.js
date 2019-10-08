window.onload = function() {
  new WOW({ offset: 50 }).init();

  const toggleMobileNav = document.querySelector(".toggle-mobile-nav");
  const mobileNav = document.querySelector(".mobile-nav");
  const images = document.querySelectorAll(".carousel-logos img");
  const btn_prev = document.querySelector(".btn-prev");
  const btn_next = document.querySelector(".btn-next");

  // Mobile burger menu
  const icon = toggleMobileNav.querySelector("i.fa");
  toggleMobileNav.addEventListener("click", function(e) {
    e.preventDefault();
    if (icon.classList.contains("fa-bars")) {
      icon.className = "fa fa-close";
      mobileNav.classList.add("visible");
    } else {
      icon.className = "fa fa-bars";
      mobileNav.classList.remove("visible");
    }
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

  // to top
  const top = document.querySelector("#top");
  const btnToTop = document.querySelector("#btnToTop");

  // Display button when scroll
  document.addEventListener("scroll", function() {
    if (window.pageYOffset > 400 || this.documentElement.scrollTop > 400) {
      btnToTop.classList.add("visible");
    } else {
      btnToTop.classList.remove("visible");
    }
  });
  // Scroll to top
  btnToTop.addEventListener("click", () => {
    top.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};
