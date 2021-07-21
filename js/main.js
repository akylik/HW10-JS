let audio;

function playSound(e) {
  if (audio) audio.pause();

  card = document.querySelector(`.card[data-letter="${e.code}"]`);
  card.classList.add("active");

  audio = document.querySelector(`audio[data-letter="${e.code}"]`);

  //   if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  audio.addEventListener("ended", () => {
    card.classList.remove("active");
  });

}

function playSoundOnClick(e) {
  if (audio) audio.pause();
  let key = e.currentTarget;

  key.classList.add("active");
  audio = document.getElementById(key.dataset.letter);
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
  audio.addEventListener("pause", () => {
    key.classList.remove("active");
  });
}

window.addEventListener("keydown", playSound);

let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", playSoundOnClick);
});
