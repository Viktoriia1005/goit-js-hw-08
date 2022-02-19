import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// сохранение времени воспроизведения

const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
// обновление времени воспроизведения.
function playTime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds.toString());
}
player.on('timeupdate', throttle(playTime, 1000));
