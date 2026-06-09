(function () {
    const menuButton = document.querySelector('[data-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });
    }

    const sliders = document.querySelectorAll('[data-feature-slider]');

    sliders.forEach(function (slider) {
        const slides = Array.from(slider.querySelectorAll('[data-slide]'));
        const dots = Array.from(slider.querySelectorAll('[data-dot]'));
        const prev = slider.querySelector('[data-prev]');
        const next = slider.querySelector('[data-next]');
        let current = 0;
        let timer = null;

        function show(index) {
            if (!slides.length) {
                return;
            }

            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, itemIndex) {
                slide.classList.toggle('active', itemIndex === current);
            });
            dots.forEach(function (dot, itemIndex) {
                dot.classList.toggle('active', itemIndex === current);
            });
        }

        function restart() {
            if (timer) {
                window.clearInterval(timer);
            }
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5200);
        }

        if (prev) {
            prev.addEventListener('click', function () {
                show(current - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(current + 1);
                restart();
            });
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                show(index);
                restart();
            });
        });

        show(0);
        restart();
    });

    const forms = document.querySelectorAll('[data-filter-form]');

    forms.forEach(function (form) {
        const scope = document.querySelector(form.getAttribute('data-filter-form')) || document;
        const cards = Array.from(scope.querySelectorAll('[data-movie-card]'));
        const empty = document.querySelector(form.getAttribute('data-empty-target'));

        function textOf(name) {
            const field = form.querySelector('[name="' + name + '"]');
            return field ? field.value.trim().toLowerCase() : '';
        }

        function apply() {
            const query = textOf('q');
            const type = textOf('type');
            const year = textOf('year');
            const region = textOf('region');
            let visible = 0;

            cards.forEach(function (card) {
                const joined = [
                    card.dataset.title,
                    card.dataset.type,
                    card.dataset.year,
                    card.dataset.region,
                    card.dataset.genre,
                    card.dataset.tags
                ].join(' ').toLowerCase();

                const okQuery = !query || joined.indexOf(query) !== -1;
                const okType = !type || (card.dataset.type || '').toLowerCase() === type;
                const okYear = !year || (card.dataset.year || '').toLowerCase() === year;
                const okRegion = !region || (card.dataset.region || '').toLowerCase() === region;
                const matched = okQuery && okType && okYear && okRegion;
                card.style.display = matched ? '' : 'none';
                if (matched) {
                    visible += 1;
                }
            });

            if (empty) {
                empty.style.display = visible ? 'none' : 'block';
            }
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            apply();
        });

        form.addEventListener('input', apply);
        form.addEventListener('change', apply);
        apply();
    });
})();
