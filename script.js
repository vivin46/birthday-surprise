const text = "Hey Keerthi! 💕 HBD It's for you, scroll through your memories 🎂";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

function reveal(card) {
  card.classList.add("revealed");
}

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  type();

  // Music trigger
  const music = document.getElementById("bg-music");
  document.addEventListener("click", function playOnce() {
    music.play();
    document.removeEventListener("click", playOnce);
  });

  // Slide logic
  const cards = document.querySelectorAll(".card");
  let current = 0;
  cards[current].classList.add("active");

  document.getElementById("nextBtn").addEventListener("click", () => {
    cards[current].classList.remove("active");
    current = (current + 1) % cards.length;
    cards[current].classList.add("active");
  });
});
