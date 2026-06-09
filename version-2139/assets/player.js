(function () {
  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
      return;
    }
    document.addEventListener("DOMContentLoaded", callback);
  }

  function initPlayer(root) {
    var video = root.querySelector("video");
    var overlay = root.querySelector("[data-play-overlay]");
    var buttons = Array.prototype.slice.call(root.querySelectorAll("[data-play-button], [data-play-overlay]"));
    if (!video) {
      return;
    }
    var stream = video.getAttribute("data-stream");
    var attached = false;
    var hls = null;

    function attach() {
      if (attached || !stream) {
        return;
      }
      attached = true;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = stream;
        return;
      }
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hls.loadSource(stream);
        hls.attachMedia(video);
        if (window.Hls.Events && window.Hls.Events.MANIFEST_PARSED) {
          hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
            if (root.classList.contains("is-playing")) {
              video.play().catch(function () {});
            }
          });
        }
        return;
      }
      video.src = stream;
    }

    function start(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      attach();
      root.classList.add("is-playing");
      if (overlay) {
        overlay.setAttribute("aria-hidden", "true");
      }
      video.play().catch(function () {});
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", start);
    });

    video.addEventListener("click", function () {
      if (video.paused) {
        start();
      }
    });

    video.addEventListener("play", function () {
      root.classList.add("is-playing");
    });

    video.addEventListener("pause", function () {
      if (!video.ended) {
        root.classList.remove("is-playing");
        if (overlay) {
          overlay.removeAttribute("aria-hidden");
        }
      }
    });

    video.addEventListener("ended", function () {
      root.classList.remove("is-playing");
      if (overlay) {
        overlay.removeAttribute("aria-hidden");
      }
    });

    window.addEventListener("beforeunload", function () {
      if (hls && typeof hls.destroy === "function") {
        hls.destroy();
      }
    });
  }

  ready(function () {
    Array.prototype.slice.call(document.querySelectorAll("[data-player]")).forEach(initPlayer);
  });
})();
