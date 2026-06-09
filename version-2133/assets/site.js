
(function () {
    function qs(selector, root) {
        return (root || document).querySelector(selector);
    }

    function qsa(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function initMobileMenu() {
        var toggle = qs('[data-menu-toggle]');
        var panel = qs('[data-mobile-panel]');
        if (!toggle || !panel) {
            return;
        }
        toggle.addEventListener('click', function () {
            panel.classList.toggle('is-open');
        });
    }

    function initSearchForms() {
        qsa('[data-search-form]').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                var input = qs('input[name="q"]', form);
                var query = input ? input.value.trim() : '';
                var target = './search.html';
                if (query) {
                    target += '?q=' + encodeURIComponent(query);
                }
                window.location.href = target;
            });
        });
    }

    function initHero() {
        var hero = qs('[data-hero]');
        if (!hero) {
            return;
        }
        var slides = qsa('[data-hero-slide]', hero);
        var dots = qsa('[data-hero-dot]', hero);
        if (!slides.length) {
            return;
        }
        var activeIndex = 0;
        function show(index) {
            activeIndex = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === activeIndex);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === activeIndex);
            });
        }
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                show(Number(dot.getAttribute('data-hero-dot')) || 0);
            });
        });
        window.setInterval(function () {
            show(activeIndex + 1);
        }, 5200);
    }

    function initCardFilters() {
        qsa('[data-filter-scope]').forEach(function (scope) {
            var toolbar = qs('[data-card-filter]', scope);
            if (!toolbar) {
                return;
            }
            var keywordInput = qs('[data-filter-keyword]', toolbar);
            var regionSelect = qs('[data-filter-region]', toolbar);
            var typeSelect = qs('[data-filter-type]', toolbar);
            var yearSelect = qs('[data-filter-year]', toolbar);
            var categorySelect = qs('[data-filter-category]', toolbar);
            var resetButton = qs('[data-filter-reset]', toolbar);
            var cards = qsa('[data-movie-card]', scope);
            var empty = qs('[data-filter-empty]', scope);

            function apply() {
                var keyword = normalize(keywordInput && keywordInput.value);
                var region = normalize(regionSelect && regionSelect.value);
                var type = normalize(typeSelect && typeSelect.value);
                var year = normalize(yearSelect && yearSelect.value);
                var category = normalize(categorySelect && categorySelect.value);
                var visible = 0;
                cards.forEach(function (card) {
                    var text = normalize(card.getAttribute('data-search'));
                    var cardRegion = normalize(card.getAttribute('data-region'));
                    var cardType = normalize(card.getAttribute('data-type'));
                    var cardYear = normalize(card.getAttribute('data-year'));
                    var cardCategory = normalize(card.getAttribute('data-category'));
                    var match = true;
                    if (keyword && text.indexOf(keyword) === -1) {
                        match = false;
                    }
                    if (region && cardRegion.indexOf(region) === -1) {
                        match = false;
                    }
                    if (type && cardType.indexOf(type) === -1) {
                        match = false;
                    }
                    if (year && cardYear !== year) {
                        match = false;
                    }
                    if (category && cardCategory !== category) {
                        match = false;
                    }
                    card.hidden = !match;
                    if (match) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.hidden = visible !== 0;
                }
            }

            [keywordInput, regionSelect, typeSelect, yearSelect, categorySelect].forEach(function (control) {
                if (control) {
                    control.addEventListener('input', apply);
                    control.addEventListener('change', apply);
                }
            });
            if (resetButton) {
                resetButton.addEventListener('click', function () {
                    [keywordInput, regionSelect, typeSelect, yearSelect, categorySelect].forEach(function (control) {
                        if (control) {
                            control.value = '';
                        }
                    });
                    apply();
                });
            }
            apply();
        });
    }

    function initPlayers() {
        qsa('.player-shell').forEach(function (shell) {
            var video = qs('video[data-src]', shell);
            var trigger = qs('.play-trigger', shell);
            if (!video || !trigger) {
                return;
            }
            function attachSource() {
                var src = video.getAttribute('data-src');
                if (!src || video.getAttribute('data-loaded') === 'true') {
                    return;
                }
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = src;
                } else if (window.Hls && window.Hls.isSupported()) {
                    var hls = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(src);
                    hls.attachMedia(video);
                    video._hlsInstance = hls;
                } else {
                    video.src = src;
                }
                video.setAttribute('data-loaded', 'true');
            }
            function playVideo() {
                attachSource();
                shell.classList.add('is-playing');
                var promise = video.play();
                if (promise && typeof promise.catch === 'function') {
                    promise.catch(function () {
                        shell.classList.remove('is-playing');
                    });
                }
            }
            trigger.addEventListener('click', playVideo);
            video.addEventListener('click', function () {
                if (video.paused) {
                    playVideo();
                }
            });
            video.addEventListener('play', function () {
                shell.classList.add('is-playing');
            });
            video.addEventListener('pause', function () {
                if (!video.ended) {
                    shell.classList.remove('is-playing');
                }
            });
            video.addEventListener('ended', function () {
                shell.classList.remove('is-playing');
            });
        });
    }

    function movieCardHtml(movie) {
        var tags = String(movie.tags || movie.genre || '')
            .split(/[，,\/、|]+/)
            .filter(Boolean)
            .slice(0, 3)
            .map(function (tag) {
                return '<span>' + escapeHtml(tag) + '</span>';
            })
            .join('');
        return [
            '<a class="movie-card" href="' + escapeHtml(movie.url) + '">',
            '    <figure class="poster-box">',
            '        <img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
            '        <span class="year-pill">' + escapeHtml(movie.year) + '</span>',
            '        <span class="play-badge" aria-hidden="true">▶</span>',
            '    </figure>',
            '    <div class="card-body">',
            '        <h3>' + escapeHtml(movie.title) + '</h3>',
            '        <p>' + escapeHtml(movie.oneLine) + '</p>',
            '        <div class="card-meta"><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.type) + '</span></div>',
            '        <div class="card-tags">' + tags + '</div>',
            '    </div>',
            '</a>'
        ].join('');
    }

    function initSearchPage() {
        var results = qs('[data-search-results]');
        if (!results || !window.MOVIE_INDEX) {
            return;
        }
        var params = new URLSearchParams(window.location.search);
        var query = params.get('q') || '';
        var input = qs('[data-page-search-input]');
        var empty = qs('[data-search-empty]');
        if (input) {
            input.value = query;
        }
        qsa('[data-page-search-form]').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                var value = input ? input.value.trim() : '';
                window.location.href = value ? './search.html?q=' + encodeURIComponent(value) : './search.html';
            });
        });
        var normalized = normalize(query);
        var source = window.MOVIE_INDEX.slice();
        var matched = normalized ? source.filter(function (movie) {
            var text = normalize([
                movie.title,
                movie.region,
                movie.type,
                movie.year,
                movie.genre,
                movie.tags,
                movie.oneLine,
                movie.categoryName
            ].join(' '));
            return text.indexOf(normalized) !== -1;
        }) : source.slice(0, 72);
        results.innerHTML = matched.map(movieCardHtml).join('');
        if (empty) {
            empty.hidden = matched.length !== 0;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initMobileMenu();
        initSearchForms();
        initHero();
        initCardFilters();
        initPlayers();
        initSearchPage();
    });
})();
