(function () {
  var form = document.querySelector('[data-search-form]');
  var input = document.querySelector('[data-search-input]');
  var results = document.querySelector('[data-search-results]');
  var empty = document.querySelector('[data-empty-result]');
  var movies = window.MOVIE_SEARCH_INDEX || [];

  function params() {
    return new URLSearchParams(window.location.search);
  }

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  function card(movie) {
    var tags = movie.tags.slice(0, 2).map(function (tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');

    return [
      '<article class="movie-card compact">',
      '  <a class="poster" href="' + movie.url + '" aria-label="' + escapeHtml(movie.title) + '">',
      '    <img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '    <span class="poster-play">▶</span>',
      '  </a>',
      '  <div class="card-body">',
      '    <div class="card-meta"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.region) + '</span></div>',
      '    <h3><a href="' + movie.url + '">' + escapeHtml(movie.title) + '</a></h3>',
      '    <p>' + escapeHtml(movie.desc) + '</p>',
      '    <div class="card-tags">' + tags + '</div>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function search() {
    var keyword = normalize(input && input.value);
    var matched = movies.filter(function (movie) {
      if (!keyword) {
        return true;
      }
      return normalize(movie.title + ' ' + movie.year + ' ' + movie.region + ' ' + movie.genre + ' ' + movie.desc + ' ' + movie.tags.join(' ')).indexOf(keyword) !== -1;
    }).slice(0, 80);

    if (results) {
      results.innerHTML = matched.map(card).join('');
    }

    if (empty) {
      empty.classList.toggle('is-visible', matched.length === 0);
    }
  }

  if (input) {
    input.value = params().get('q') || '';
    input.addEventListener('input', search);
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      search();
    });
  }

  search();
})();
