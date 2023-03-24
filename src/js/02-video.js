import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player');
const saveTimeToStorage = throttle(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem('videoplayer-current-time', time);
  });
}, 1000);

player.on('timeupdate', saveTimeToStorage);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}



