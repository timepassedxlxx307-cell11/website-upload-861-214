(function () {
  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function text(value) {
    return String(value || "").toLowerCase().trim();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function runSearchForms() {
    qsa("[data-search-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = qs("input[name='q']", form);
        var query = input ? input.value.trim() : "";
        if (query) {
          window.location.href = "./search.html?q=" + encodeURIComponent(query);
        }
      });
    });
  }

  function runMenu() {
    var button = qs("[data-menu-button]");
    var menu = qs("[data-mobile-menu]");
    if (!button || !menu) {
      return;
    }
    button.addEventListener("click", function () {
      menu.classList.toggle("is-open");
    });
  }

  function runHero() {
    var hero = qs("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = qsa("[data-hero-slide]", hero);
    var dots = qsa("[data-hero-dot]", hero);
    var previous = qs("[data-hero-prev]", hero);
    var next = qs("[data-hero-next]", hero);
    var current = 0;
    var timer;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        show(current + 1);
      }, 6500);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        restart();
      });
    });

    if (previous) {
      previous.addEventListener("click", function () {
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

    if (slides.length > 1) {
      restart();
    }
  }

  function runFilters() {
    var panel = qs("[data-filter-panel]");
    if (!panel) {
      return;
    }
    var cards = qsa("[data-card]");
    var empty = qs("[data-filter-empty]");
    var textInput = qs("[data-filter-text]", panel);
    var yearSelect = qs("[data-filter-year]", panel);
    var regionSelect = qs("[data-filter-region]", panel);

    function apply() {
      var keyword = text(textInput && textInput.value);
      var year = yearSelect ? yearSelect.value : "";
      var region = regionSelect ? regionSelect.value : "";
      var visible = 0;
      cards.forEach(function (card) {
        var haystack = text([
          card.dataset.title,
          card.dataset.region,
          card.dataset.year,
          card.dataset.tags
        ].join(" "));
        var matched = true;
        if (keyword && haystack.indexOf(keyword) === -1) {
          matched = false;
        }
        if (year && card.dataset.year !== year) {
          matched = false;
        }
        if (region && card.dataset.region !== region) {
          matched = false;
        }
        card.style.display = matched ? "" : "none";
        if (matched) {
          visible += 1;
        }
      });
      if (empty) {
        empty.classList.toggle("is-visible", visible === 0);
      }
    }

    [textInput, yearSelect, regionSelect].forEach(function (control) {
      if (control) {
        control.addEventListener("input", apply);
        control.addEventListener("change", apply);
      }
    });
  }

  function cardTemplate(movie) {
    return [
      '<article class="movie-card movie-card--default">',
      '<a class="card-cover" href="./' + escapeHtml(movie.url) + '" aria-label="' + escapeHtml(movie.title) + '">',
      '<img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '<span class="card-shade"></span>',
      '<span class="play-dot">▶</span>',
      '<span class="year-pill">' + escapeHtml(movie.year) + '</span>',
      '</a>',
      '<div class="card-body">',
      '<div class="card-meta"><a href="./' + escapeHtml(movie.categoryUrl) + '">' + escapeHtml(movie.category) + '</a><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.type) + '</span></div>',
      '<h3><a href="./' + escapeHtml(movie.url) + '">' + escapeHtml(movie.title) + '</a></h3>',
      '<p>' + escapeHtml(movie.oneLine) + '</p>',
      '<div class="tag-row">' + movie.tags.slice(0, 3).map(function (tag) { return '<span>' + escapeHtml(tag) + '</span>'; }).join('') + '</div>',
      '</div>',
      '</article>'
    ].join('');
  }

  function runSearchPage() {
    var page = qs("[data-search-page]");
    if (!page || !window.SEARCH_INDEX) {
      return;
    }
    var form = qs("[data-search-page-form]", page);
    var input = qs("[data-search-page-input]", page);
    var results = qs("[data-search-results]", page);
    var empty = qs("[data-search-empty]", page);
    var title = qs("[data-search-title]", page);
    var params = new URLSearchParams(window.location.search);
    var initial = params.get("q") || "";
    if (input) {
      input.value = initial;
    }

    function apply(query) {
      var keyword = text(query);
      var list = window.SEARCH_INDEX.filter(function (movie) {
        var haystack = text([
          movie.title,
          movie.oneLine,
          movie.region,
          movie.type,
          movie.year,
          movie.genre,
          movie.tags.join(" "),
          movie.category
        ].join(" "));
        return !keyword || haystack.indexOf(keyword) !== -1;
      }).slice(0, 120);

      if (title) {
        title.textContent = keyword ? "搜索结果" : "全部内容";
      }
      if (results) {
        results.innerHTML = list.map(cardTemplate).join("");
      }
      if (empty) {
        empty.classList.toggle("is-visible", list.length === 0);
      }
    }

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var query = input ? input.value.trim() : "";
        var url = query ? "./search.html?q=" + encodeURIComponent(query) : "./search.html";
        window.history.replaceState(null, "", url);
        apply(query);
      });
    }

    if (input) {
      input.addEventListener("input", function () {
        apply(input.value);
      });
    }

    apply(initial);
  }

  runMenu();
  runSearchForms();
  runHero();
  runFilters();
  runSearchPage();
}());
