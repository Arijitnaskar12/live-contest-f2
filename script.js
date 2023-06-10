const keys = document.querySelectorAll('.key');

let prevAudio;


window.addEventListener("keydown", playSound);

function playSound(event) {
  const code = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if (!audio) return;
  if(prevAudio) prevAudio.pause();
  audio.currenTime = 0;
  audio.play();
  prevAudio = audio;
}
