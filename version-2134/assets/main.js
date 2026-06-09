(function () {
    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function setupMenu() {
        var button = document.querySelector(".menu-toggle");
        var panel = document.querySelector(".mobile-panel");
        if (!button || !panel) {
            return;
        }
        button.addEventListener("click", function () {
            var expanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!expanded));
            panel.hidden = expanded;
        });
    }

    function setupHero() {
        var root = document.querySelector("[data-hero-root]");
        if (!root) {
            return;
        }
        var slides = Array.prototype.slice.call(root.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(root.querySelectorAll("[data-hero-dot]"));
        var prev = root.querySelector("[data-hero-prev]");
        var next = root.querySelector("[data-hero-next]");
        var current = 0;
        var timer = null;

        function show(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, offset) {
                slide.classList.toggle("active", offset === current);
            });
            dots.forEach(function (dot, offset) {
                dot.classList.toggle("active", offset === current);
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
            prev.addEventListener("click", function () {
                show(current - 1);
                restart();
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                show(current + 1);
                restart();
            });
        }
        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                show(Number(dot.getAttribute("data-hero-dot")) || 0);
                restart();
            });
        });
        show(0);
        restart();
    }

    function setupFilters() {
        var roots = Array.prototype.slice.call(document.querySelectorAll("[data-filter-root]"));
        roots.forEach(function (root) {
            var keyword = root.querySelector("[data-filter-keyword]");
            var region = root.querySelector("[data-filter-region]");
            var genre = root.querySelector("[data-filter-genre]");
            var clear = root.querySelector("[data-filter-clear]");
            var list = document.querySelector("[data-card-list]");
            var empty = document.querySelector("[data-empty-state]");
            var params = new URLSearchParams(window.location.search);
            var initial = params.get("q") || "";
            if (keyword && initial) {
                keyword.value = initial;
            }

            function valueOf(element) {
                return element ? element.value.trim().toLowerCase() : "";
            }

            function apply() {
                if (!list) {
                    return;
                }
                var q = valueOf(keyword);
                var r = valueOf(region);
                var g = valueOf(genre);
                var cards = Array.prototype.slice.call(list.querySelectorAll("[data-card]"));
                var visible = 0;
                cards.forEach(function (card) {
                    var haystack = [
                        card.getAttribute("data-title") || "",
                        card.getAttribute("data-region") || "",
                        card.getAttribute("data-genre") || "",
                        card.getAttribute("data-year") || "",
                        card.getAttribute("data-type") || "",
                        card.textContent || ""
                    ].join(" ").toLowerCase();
                    var ok = true;
                    if (q && haystack.indexOf(q) === -1) {
                        ok = false;
                    }
                    if (r && (card.getAttribute("data-region") || "").toLowerCase() !== r) {
                        ok = false;
                    }
                    if (g && (card.getAttribute("data-genre") || "").toLowerCase().indexOf(g) === -1) {
                        ok = false;
                    }
                    card.hidden = !ok;
                    if (ok) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.hidden = visible !== 0;
                }
            }

            [keyword, region, genre].forEach(function (element) {
                if (element) {
                    element.addEventListener("input", apply);
                    element.addEventListener("change", apply);
                }
            });
            if (clear) {
                clear.addEventListener("click", function () {
                    if (keyword) {
                        keyword.value = "";
                    }
                    if (region) {
                        region.value = "";
                    }
                    if (genre) {
                        genre.value = "";
                    }
                    apply();
                });
            }
            apply();
        });
    }

    ready(function () {
        setupMenu();
        setupHero();
        setupFilters();
    });
})();

function initMoviePlayer(streamUrl) {
    var video = document.getElementById("movie-player");
    var cover = document.querySelector("[data-player-cover]");
    var started = false;
    var hlsReady = false;
    var hlsPlayer = null;

    if (!video || !streamUrl) {
        return;
    }

    function markCover(hidden) {
        if (cover) {
            cover.classList.toggle("is-hidden", hidden);
        }
    }

    function safePlay() {
        var promise = video.play();
        if (promise && typeof promise.catch === "function") {
            promise.catch(function () {
                markCover(false);
            });
        }
    }

    function prepare() {
        if (started) {
            return;
        }
        started = true;
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = streamUrl;
            hlsReady = true;
            return;
        }
        if (window.Hls && window.Hls.isSupported()) {
            hlsPlayer = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hlsPlayer.loadSource(streamUrl);
            hlsPlayer.attachMedia(video);
            hlsPlayer.on(window.Hls.Events.MANIFEST_PARSED, function () {
                hlsReady = true;
                safePlay();
            });
            return;
        }
        video.src = streamUrl;
        hlsReady = true;
    }

    function begin() {
        markCover(true);
        prepare();
        if (hlsReady || !hlsPlayer) {
            safePlay();
        }
    }

    if (cover) {
        cover.addEventListener("click", begin);
    }
    video.addEventListener("click", function () {
        if (video.paused) {
            begin();
        }
    });
}
