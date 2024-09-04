let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (!song.paused) {
    song.pause();
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
  } else {
    song.play();
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
  }
}

song.addEventListener("timeupdate", function () {
  progress.value = song.currentTime;
});

progress.oninput = function () {
  song.currentTime = progress.value;
  if (song.paused) {
    song.play();
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
  }
};

function forwardSong() {
  // Add logic for forwarding the song (e.g., increase currentTime)
  // You can adjust the forward duration based on your preference
  song.currentTime += 5; // Forward by 5 seconds (adjust as needed)
}

function backwardSong() {
  // Add logic for backwarding the song (e.g., decrease currentTime)
  // You can adjust the backward duration based on your preference
  song.currentTime -= 5; // Backward by 5 seconds (adjust as needed)
}
