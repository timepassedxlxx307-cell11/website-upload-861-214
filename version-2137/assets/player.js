(function () {
    const panels = document.querySelectorAll('[data-player]');

    function loadHlsLibrary(done) {
        if (window.Hls) {
            done();
            return;
        }

        const existing = document.querySelector('script[data-hls-loader]');
        if (existing) {
            existing.addEventListener('load', done, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
        script.async = true;
        script.setAttribute('data-hls-loader', 'true');
        script.addEventListener('load', done, { once: true });
        document.head.appendChild(script);
    }

    panels.forEach(function (panel) {
        const video = panel.querySelector('video');
        const button = panel.querySelector('[data-play-button]');
        if (!video || !button) {
            return;
        }

        const streamUrl = video.getAttribute('data-play-url');
        let attached = false;
        let hlsInstance = null;

        function attachThenPlay() {
            if (!streamUrl) {
                return;
            }

            function runPlay() {
                const promise = video.play();
                panel.classList.add('playing');
                if (promise && typeof promise.catch === 'function') {
                    promise.catch(function () {});
                }
            }

            if (attached) {
                runPlay();
                return;
            }

            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = streamUrl;
                attached = true;
                runPlay();
                return;
            }

            loadHlsLibrary(function () {
                if (window.Hls && window.Hls.isSupported()) {
                    hlsInstance = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hlsInstance.loadSource(streamUrl);
                    hlsInstance.attachMedia(video);
                    attached = true;
                    hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, runPlay);
                } else {
                    video.src = streamUrl;
                    attached = true;
                    runPlay();
                }
            });
        }

        button.addEventListener('click', attachThenPlay);
        video.addEventListener('click', function () {
            if (video.paused) {
                attachThenPlay();
            }
        });
        window.addEventListener('beforeunload', function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    });
})();
