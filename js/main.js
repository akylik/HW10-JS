let audio;
function playSound(e) {
    if(audio) audio.pause();
    audio = document.querySelector(`audio[data-letter="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener("keydown", playSound);
