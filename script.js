const heartsContainer = document.querySelector(".hearts");

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💞",
    "💓",
    "💘"
];

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    // Random position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    const size = Math.random() * 20 + 15;

    heart.style.fontSize = size + "px";

    // Random animation duration
    const duration = Math.random() * 5 + 5;

    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create hearts continuously
setInterval(createHeart, 500);


// Create some hearts immediately
for (let i = 0; i < 8; i++) {

    setTimeout(() => {
        createHeart();
    }, i * 300);

}
