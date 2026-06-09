(function() {
    var menuButton = document.querySelector('[data-menu-button]');
    var mobileNav = document.querySelector('[data-mobile-nav]');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('is-open');
        });
    }

    var slides = Array.prototype.slice.call(document.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('[data-hero-dot]'));
    var activeIndex = 0;
    var timer = null;

    function showSlide(index) {
        if (!slides.length) {
            return;
        }
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach(function(slide, i) {
            slide.classList.toggle('is-active', i === activeIndex);
        });
        dots.forEach(function(dot, i) {
            dot.classList.toggle('is-active', i === activeIndex);
        });
    }

    function startHero() {
        if (slides.length <= 1) {
            return;
        }
        timer = window.setInterval(function() {
            showSlide(activeIndex + 1);
        }, 5200);
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            if (timer) {
                window.clearInterval(timer);
            }
            showSlide(index);
            startHero();
        });
    });

    showSlide(0);
    startHero();

    var filterInput = document.querySelector('[data-filter-input]');
    var list = document.querySelector('[data-card-list]');

    if (filterInput && list) {
        var cards = Array.prototype.slice.call(list.querySelectorAll('[data-card]'));
        filterInput.addEventListener('input', function() {
            var value = filterInput.value.trim().toLowerCase();
            cards.forEach(function(card) {
                var text = (card.getAttribute('data-search') || '').toLowerCase();
                card.hidden = value && text.indexOf(value) === -1;
            });
        });
    }
}());
