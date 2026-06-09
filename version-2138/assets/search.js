(function () {
  var params = new URLSearchParams(window.location.search);
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var query = params.get('q') || '';

  if (input) {
    input.value = query;
  }

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  function movieCard(movie) {
    var tags = Array.isArray(movie.tags) && movie.tags.length ? movie.tags[0] : movie.type;
    return [
      '<article class="movie-card">',
      '  <a class="movie-cover" href="./' + movie.url + '">',
      '    <img src="./' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '    <span class="movie-type">' + escapeHtml(movie.type) + '</span>',
      '  </a>',
      '  <div class="movie-card-body">',
      '    <a class="movie-title" href="./' + movie.url + '">' + escapeHtml(movie.title) + '</a>',
      '    <p class="movie-one-line">' + escapeHtml(movie.oneLine) + '</p>',
      '    <div class="movie-meta"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(tags) + '</span></div>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[char];
    });
  }

  function render() {
    if (!results) {
      return;
    }

    var q = normalize(query);
    var movies = window.SITE_MOVIES || [];
    var matched = q ? movies.filter(function (movie) {
      return normalize(movie.title + ' ' + movie.text).indexOf(q) !== -1;
    }) : movies.slice(0, 36);

    if (!matched.length) {
      results.innerHTML = '<div class="no-results">未找到匹配内容，可以更换关键词继续搜索。</div>';
      return;
    }

    results.innerHTML = matched.slice(0, 120).map(movieCard).join('');
  }

  render();
})();
