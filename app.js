"use strict";
function playSound(e) {
    const idAudio = e.target.dataset.key;
    const audio = document.getElementById(`${idAudio}`);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener("click", playSound);
