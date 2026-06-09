(function () {
  var menuButton = document.querySelector('.mobile-menu-button');
  var menu = document.querySelector('.mobile-menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      var opened = menu.classList.toggle('mobile-menu-open');
      menuButton.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
  var index = 0;

  function setSlide(nextIndex) {
    if (!slides.length) {
      return;
    }

    index = nextIndex % slides.length;
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle('hero-slide-active', slideIndex === index);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle('hero-dot-active', dotIndex === index);
    });
  }

  dots.forEach(function (dot, dotIndex) {
    dot.addEventListener('click', function () {
      setSlide(dotIndex);
    });
  });

  if (slides.length > 1) {
    window.setInterval(function () {
      setSlide(index + 1);
    }, 5200);
  }

  var localFilter = document.querySelector('.local-filter');
  if (localFilter) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('.searchable-card'));
    localFilter.addEventListener('input', function () {
      var query = localFilter.value.trim().toLowerCase();
      cards.forEach(function (card) {
        var text = ((card.getAttribute('data-title') || '') + ' ' + (card.getAttribute('data-meta') || '')).toLowerCase();
        card.style.display = !query || text.indexOf(query) !== -1 ? '' : 'none';
      });
    });
  }
})();
