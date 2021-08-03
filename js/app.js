function changeTitle() {
  const message = 'Wróć na stronę!';
  let original;

  window.addEventListener('focus', function () {
    if (original) {
      document.title = original;
    }
  })

  window.addEventListener('blur', function () {
    const title = document.title;
    if (title != message) {
      original = title;
    }
    document.title = message;
  })
}

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

const init = function () {
  changeTitle();
  showHamburgerMenu();
};

document.addEventListener('DOMContentLoaded', init);