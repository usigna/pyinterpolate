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

function changeLanguage() {
  const select = document.getElementById('languages-select');

  select.addEventListener('change', function() {
    let value = select.options[select.selectedIndex].value;

    // console.log(value)
    // console.log(window. location. href )
  })
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

function setImageMaxSize() {
  const images = document.querySelectorAll('.image img');
  const mobile = window.matchMedia("screen and (min-width: 400px)");

  if (mobile.matches) {
    images.forEach(function(img) {
      img.style.maxWidth = img.naturalWidth + 'px';
    });
  }

  mobile.addListener(function(mobile) {
    if (mobile.matches) {
      images.forEach(function(img) {
        img.style.maxWidth = img.naturalWidth + 'px';
      });
    }
  });
}

function copiedToClipboard() {
  const pre = document.querySelectorAll('.pre');

  for (let i = 0; i < pre.length; i++) {
    let code = pre[i].querySelector('.code');
    let btn = pre[i].querySelector('.btn--copy');
    btn.addEventListener('click', function() {
      navigator.clipboard.writeText(code.textContent);
      this.textContent = 'Copied!';

      if (this.textContent == 'Copied!') {
        setTimeout(function() {
          btn.textContent = 'Copy';
        }, 2500);
      }
    })
  }
}

const init = function () {
  showHamburgerMenu();
  // changeLanguage();
  useParallax();
  setImageMaxSize();
  copiedToClipboard();
};

document.addEventListener('DOMContentLoaded', init);