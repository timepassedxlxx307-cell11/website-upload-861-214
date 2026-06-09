function initializeMoviePlayer(videoSource) {
    var video = document.getElementById("moviePlayer");
    var overlay = document.getElementById("playerOverlay");
    var startButton = document.getElementById("startPlayer");
    var hlsInstance = null;
    var isLoaded = false;

    if (!video || !overlay || !videoSource) {
        return;
    }

    function attachSource() {
        if (isLoaded) {
            return;
        }
        isLoaded = true;
        video.controls = true;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = videoSource;
            return;
        }

        if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
                enableWorker: true,
                lowLatencyMode: false
            });
            hlsInstance.loadSource(videoSource);
            hlsInstance.attachMedia(video);
            return;
        }

        video.src = videoSource;
    }

    function playVideo() {
        attachSource();
        overlay.classList.add("is-hidden");
        var playResult = video.play();
        if (playResult && typeof playResult.catch === "function") {
            playResult.catch(function() {
                video.controls = true;
            });
        }
    }

    overlay.addEventListener("click", playVideo);
    if (startButton) {
        startButton.addEventListener("click", function(event) {
            event.stopPropagation();
            playVideo();
        });
    }

    video.addEventListener("play", function() {
        overlay.classList.add("is-hidden");
    });

    window.addEventListener("pagehide", function() {
        if (hlsInstance) {
            hlsInstance.destroy();
            hlsInstance = null;
        }
    });
}
