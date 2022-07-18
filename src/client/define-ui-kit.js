import { defineCustomElements } from '@dytesdk/ui-kit/loader';

defineCustomElements();

function onLoad() {
  if (typeof window === 'undefined') return;

  const play = window.HTMLAudioElement.prototype.play;

  // override play() to avoid autoplay modal
  window.HTMLAudioElement.prototype.play = function () {
    try {
      play.call(this);
    } catch (err) {
      // pass
    }
  };
}

onLoad();
