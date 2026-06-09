(function() {
    function onReady(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function normalize(value) {
        return String(value || "").trim().toLowerCase();
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function renderMovie(movie) {
        var tags = (movie.tags || []).slice(0, 3).map(function(tag) {
            return "<span>" + escapeHtml(tag) + "</span>";
        }).join("");

        return [
            "<article class=\"movie-card\">",
            "<a href=\"" + escapeHtml(movie.url) + "\" title=\"" + escapeHtml(movie.title) + " 在线观看\">",
            "<div class=\"poster-wrap\">",
            "<img src=\"" + escapeHtml(movie.cover) + "\" alt=\"" + escapeHtml(movie.title) + "\" loading=\"lazy\">",
            "<span class=\"poster-badge\">" + escapeHtml(movie.type) + "</span>",
            "</div>",
            "<div class=\"movie-card-body\">",
            "<h3>" + escapeHtml(movie.title) + "</h3>",
            "<p class=\"card-meta\">" + escapeHtml(movie.year) + " · " + escapeHtml(movie.region) + " · " + escapeHtml(movie.genre) + "</p>",
            "<p class=\"card-line\">" + escapeHtml(movie.oneLine) + "</p>",
            "<div class=\"tag-row\">" + tags + "</div>",
            "</div>",
            "</a>",
            "</article>"
        ].join("");
    }

    onReady(function() {
        var yearNode = document.querySelector("[data-current-year]");
        if (yearNode) {
            yearNode.textContent = new Date().getFullYear();
        }

        var menuToggle = document.querySelector("[data-menu-toggle]");
        var mobilePanel = document.querySelector("[data-mobile-panel]");
        if (menuToggle && mobilePanel) {
            menuToggle.addEventListener("click", function() {
                mobilePanel.classList.toggle("is-open");
            });
        }

        document.querySelectorAll("[data-site-search]").forEach(function(form) {
            form.addEventListener("submit", function(event) {
                var input = form.querySelector("input[name='q']");
                if (!input || !input.value.trim()) {
                    event.preventDefault();
                    if (input) {
                        input.focus();
                    }
                }
            });
        });

        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
        var activeIndex = 0;

        function activateSlide(nextIndex) {
            if (!slides.length) {
                return;
            }
            activeIndex = (nextIndex + slides.length) % slides.length;
            slides.forEach(function(slide, index) {
                slide.classList.toggle("is-active", index === activeIndex);
            });
            dots.forEach(function(dot, index) {
                dot.classList.toggle("is-active", index === activeIndex);
            });
        }

        dots.forEach(function(dot, index) {
            dot.addEventListener("click", function() {
                activateSlide(index);
            });
        });

        if (slides.length > 1) {
            window.setInterval(function() {
                activateSlide(activeIndex + 1);
            }, 5200);
        }

        var filterInput = document.querySelector("[data-card-filter]");
        var filterCards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
        var emptyNode = document.querySelector("[data-filter-empty]");
        if (filterInput && filterCards.length) {
            filterInput.addEventListener("input", function() {
                var query = normalize(filterInput.value);
                var visibleCount = 0;
                filterCards.forEach(function(card) {
                    var haystack = normalize((card.getAttribute("data-title") || "") + " " + (card.getAttribute("data-meta") || ""));
                    var visible = !query || haystack.indexOf(query) !== -1;
                    card.hidden = !visible;
                    if (visible) {
                        visibleCount += 1;
                    }
                });
                if (emptyNode) {
                    emptyNode.hidden = visibleCount !== 0;
                }
            });
        }

        var searchPage = document.querySelector("[data-search-page]");
        var searchInput = document.querySelector("[data-search-input]");
        var searchResults = document.querySelector("[data-search-results]");
        var searchTitle = document.querySelector("[data-search-title]");
        if (searchPage && searchInput && searchResults && typeof MOVIES !== "undefined") {
            var params = new URLSearchParams(window.location.search);
            var initialQuery = params.get("q") || "";
            searchInput.value = initialQuery;

            function runSearch(query) {
                var normalized = normalize(query);
                if (!normalized) {
                    searchTitle.textContent = "推荐影片";
                    return;
                }
                var matches = MOVIES.filter(function(movie) {
                    var haystack = normalize([
                        movie.title,
                        movie.year,
                        movie.region,
                        movie.type,
                        movie.genre,
                        movie.category,
                        (movie.tags || []).join(" "),
                        movie.oneLine
                    ].join(" "));
                    return haystack.indexOf(normalized) !== -1;
                }).slice(0, 120);
                searchTitle.textContent = "搜索结果：" + query;
                if (!matches.length) {
                    searchResults.innerHTML = "<p class=\"no-result\">没有匹配的影片</p>";
                    return;
                }
                searchResults.innerHTML = matches.map(renderMovie).join("");
            }

            runSearch(initialQuery);
            var pageForm = document.querySelector("[data-search-page-form]");
            if (pageForm) {
                pageForm.addEventListener("submit", function(event) {
                    event.preventDefault();
                    var query = searchInput.value.trim();
                    var nextUrl = query ? "?q=" + encodeURIComponent(query) : window.location.pathname;
                    window.history.replaceState(null, "", nextUrl);
                    runSearch(query);
                });
            }
        }
    });
})();
