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
    let actualLang = window.location.href;

    console.log(actualLang);

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
  const html = document.querySelector('html');
  const htmlLang = html.getAttribute('lang');
  const pre = document.querySelectorAll('.pre');

  for (let i = 0; i < pre.length; i++) {
    let code = pre[i].querySelector('.code');
    let btn = pre[i].querySelector('.btn--copy');
    btn.addEventListener('click', function() {
      navigator.clipboard.writeText(code.textContent);

      if(htmlLang === 'en') {
        this.textContent = 'Copied!';
      } else if(htmlLang === 'pl') {
        this.textContent = 'Skopiowano!';
      }

      if (this.textContent == 'Copied!') {
        setTimeout(function() {
          btn.textContent = 'Copy';
        }, 2500);
      }

      if (this.textContent == 'Skopiowano!') {
        setTimeout(function() {
          btn.textContent = 'Kopiuj';
        }, 2500);
      }
    })
  }
}

function useGallery() {
  function handler(e) {
    e.preventDefault();
    largeimage.setAttribute("src", this.getAttribute("href"));
    largeimage.setAttribute("alt", this.querySelector("img").getAttribute("alt"));
    largeimage.animate([
      { opacity: '0'},
      { opacity: '1'}
    ], {
      duration: 500
    });
  }

  const gallery = document.querySelector('.gallery');
  const largeimagecontainer = document.querySelector('.fullimagecontainer');
  const links = gallery.getElementsByTagName('a');
  const largeimage = document.createElement("img");

  largeimage.setAttribute("id", "fullimage");
  largeimagecontainer.appendChild(largeimage);
      
  for (var i=0; i<links.length; i++) {
    links[i].onclick = handler;
  }
      
  links[0].focus();
  links[0].click();
}

const init = function () {
  showHamburgerMenu();
  // changeLanguage();
  useParallax();
  setImageMaxSize();
  copiedToClipboard();
  useGallery();
};

document.addEventListener('DOMContentLoaded', init);