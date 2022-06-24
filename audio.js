//set new Audio file
const song = new Audio(
  'https://file-examples.com/storage/fe88505b6162b2538a045ce/2017/11/file_example_MP3_5MG.mp3'
);

//Play the song
document.getElementById('play').addEventListener('click', () => {
  song.play();
});

//Update the time and the progress bar
//https: developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
song.addEventListener('timeupdate', () => {
  //Update the current Time value (span id="current-time")
  document.getElementById('current-time').innerHTML = timeFormat(song.currentTime);

  //update the progress bar Value
  document.getElementById('bar').value = (song.currentTime / song.duration) * 100;
});

//Pause the song
document.getElementById('pause').addEventListener('click', () => {
  song.pause();
});

//check the loading state
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event
song.addEventListener('loadeddata', function () {
  //if song is loaded
  if (song.readyState >= 1) {
    //update once the duration (span id="duration")
    document.getElementById('duration').innerHTML = timeFormat(song.duration);
  }
});

//helper function to convert seconds in mm:ss
const timeFormat = (time) => {
  let min = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');

  let sec = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');

  return `${min}:${sec}`;
};
