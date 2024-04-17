function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");

  navBtn.onclick = function() {
    const close = document.querySelector("#closeBtn");

    nav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
    navBtn.classList.toggle("mobile-nav-btn--close");

    close.onclick = function() {
      navBtn.classList.toggle("mobile-nav-btn--close");
      nav.classList.toggle("mobile-nav--open");
      document.body.classList.toggle("no-scroll");
    };
  };
}

export default mobileNav;
