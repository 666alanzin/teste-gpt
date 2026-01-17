const balloon = document.getElementById("balloon");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts");

const HEART_COUNT = 18;

const createHeart = () => {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const left = Math.random() * 100;
  const delay = Math.random() * 0.6;
  const size = 16 + Math.random() * 14;
  const duration = 2.6 + Math.random() * 1.4;

  heart.style.left = `${left}%`;
  heart.style.bottom = `${10 + Math.random() * 30}%`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  heart.addEventListener("animationend", () => {
    heart.remove();
  });

  heartsContainer.appendChild(heart);
};

const releaseHearts = () => {
  for (let i = 0; i < HEART_COUNT; i += 1) {
    setTimeout(createHeart, i * 120);
  }
};

const revealMessage = () => {
  message.classList.add("visible");
  releaseHearts();
};

balloon.addEventListener("animationend", () => {
  setTimeout(revealMessage, 300);
});
