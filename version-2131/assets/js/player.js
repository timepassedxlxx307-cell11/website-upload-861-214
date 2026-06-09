(function () {
  window.initHlsPlayer = function (settings) {
    var video = document.getElementById(settings.videoId);
    var button = document.querySelector(settings.buttonSelector);
    var hlsInstance = null;
    var attached = false;

    if (!video || !settings.url) {
      return;
    }

    function attach() {
      if (attached) {
        return;
      }
      attached = true;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = settings.url;
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: false
        });
        hlsInstance.loadSource(settings.url);
        hlsInstance.attachMedia(video);
      } else {
        video.src = settings.url;
      }
    }

    function start() {
      attach();
      if (button) {
        button.classList.add("is-hidden");
      }
      var attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(function () {});
      }
    }

    if (button) {
      button.addEventListener("click", start);
    }

    video.addEventListener("click", function () {
      if (video.paused) {
        start();
      }
    });

    video.addEventListener("play", function () {
      if (button) {
        button.classList.add("is-hidden");
      }
    });

    window.addEventListener("beforeunload", function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  };
}());
