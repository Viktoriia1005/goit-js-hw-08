import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const savedTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(savedTime);

player.on('timeupdate', function (data) {
  // data is an object containing properties specific to that event
});
