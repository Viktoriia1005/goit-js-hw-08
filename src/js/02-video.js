import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');

const savedTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', function (data) {
  // data is an object containing properties specific to that event
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// player.on('play', function() {
//     console.log('played the video!');
// });
