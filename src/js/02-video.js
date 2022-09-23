import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

launchPlayer();
player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

function launchPlayer() {
  const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));

  if (time) {
    player.setCurrentTime(time);
  }
}
