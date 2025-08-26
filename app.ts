function playSound(e: MouseEvent) {
  const idAudio = (e.target as HTMLElement).dataset.key;
  const audio = document.getElementById(`${idAudio}`) as HTMLAudioElement;

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("click", playSound);
