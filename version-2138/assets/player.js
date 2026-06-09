(function () {
  var scriptUrl = document.currentScript ? document.currentScript.src : '';
  var hlsModuleUrl = scriptUrl ? new URL('hls.js', scriptUrl).href : './assets/hls.js';
  var video = document.getElementById('movie-video');
  var button = document.getElementById('player-start');
  var configNode = document.getElementById('movie-player-config');
  var initialized = false;
  var hlsClass = null;

  if (!video || !button || !configNode) {
    return;
  }

  function readConfig() {
    try {
      return JSON.parse(configNode.textContent || '{}');
    } catch (error) {
      return {};
    }
  }

  function loadLocalHls() {
    if (window.Hls) {
      return Promise.resolve(window.Hls);
    }

    if (hlsClass) {
      return Promise.resolve(hlsClass);
    }

    return import(hlsModuleUrl).then(function (module) {
      hlsClass = module.H;
      return hlsClass;
    }).catch(function () {
      return null;
    });
  }

  function startPlayback() {
    if (initialized) {
      video.play().catch(function () {});
      return;
    }

    var config = readConfig();
    var src = config.src || '';

    if (!src) {
      return;
    }

    initialized = true;
    button.classList.add('player-overlay-hidden');

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.play().catch(function () {});
      return;
    }

    loadLocalHls().then(function (HlsClass) {
      if (HlsClass && HlsClass.isSupported()) {
        var hls = new HlsClass({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(HlsClass.Events.MANIFEST_PARSED, function () {
          video.play().catch(function () {});
        });
      } else {
        video.src = src;
        video.play().catch(function () {});
      }
    });
  }

  button.addEventListener('click', startPlayback);
  video.addEventListener('click', function () {
    if (!initialized || video.paused) {
      startPlayback();
    }
  });
})();
