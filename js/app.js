function showHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  const handleClick = function () {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
    })
  }

  hamburger.addEventListener('click', handleClick);
}

function useParallax() {
  let parallaxWrapper = document.querySelector('.parallax');

  function parallax(e) {
      this.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed');
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      })
  }

  parallaxWrapper.addEventListener('mousemove', parallax);
}

const init = function () {
  showHamburgerMenu();
  useParallax();
};

document.addEventListener('DOMContentLoaded', init);