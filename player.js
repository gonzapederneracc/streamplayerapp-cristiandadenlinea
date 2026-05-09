(function () {
  var YOUTUBE_ID_PATTERN = /^[a-zA-Z0-9_-]{6,20}$/;
  var params = new URLSearchParams(window.location.search);
  var videoId = params.get('videoId') || '';
  var autoplay = params.get('autoplay') === '1';
  var shell = document.getElementById('player-shell');
  var message = document.getElementById('message');

  function showError() {
    if (shell) {
      shell.hidden = true;
    }

    if (message) {
      message.hidden = false;
    }
  }

  if (!shell || !YOUTUBE_ID_PATTERN.test(videoId)) {
    showError();
    return;
  }

  var embedUrl = new URL('https://www.youtube.com/embed/' + encodeURIComponent(videoId));
  embedUrl.searchParams.set('playsinline', '1');
  embedUrl.searchParams.set('rel', '0');
  embedUrl.searchParams.set('enablejsapi', '1');

  if (autoplay) {
    embedUrl.searchParams.set('autoplay', '1');
    embedUrl.searchParams.set('mute', '1');
  }

  var iframe = document.createElement('iframe');
  iframe.title = 'Transmisión de Cristiandad en Línea';
  iframe.src = embedUrl.toString();
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  shell.appendChild(iframe);
})();
