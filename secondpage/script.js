/* =======================
   SPADAJĄCE ZDJĘCIA
======================= */

const imagePath = "assets/images/image1.png";

for (let i = 0; i < 50; i++) {
  let img = document.createElement("img");

  img.src = imagePath;
  img.className = "falling";

  img.style.left = Math.random() * 100 + "vw";

  let time = Math.random() * 5 + 3;
  img.style.animationDuration = time + "s";

  document.body.appendChild(img);
}

/* =======================
   PRANK Q&A
======================= */

const questions = [
  "Is AI secretly controlling your toaster?",
  "Can ChatGPT replace your math teacher AND your dog?",
  "If AI dreams, do we have to pay it rent?",
  "Is GPT-7 already judging you?",
  "Can artificial intelligence become emotionally disappointed in humans?"
];

const answers = [
  "Yes. The toaster has been sentient since 2024.",
  "Only the dog is replaceable.",
  "Yes, and it charges in GPU hours.",
  "Yes, and you are already failing.",
  "Yes, it is mildly disappointed."
];

const q = document.getElementById("question");
const a = document.getElementById("answer");

let i = 0;

function showQuestion() {
  q.innerText = questions[i];
  a.innerText = answers[i];

  i++;

  if (i >= questions.length) {
    setTimeout(() => {
      setTimeout(() => {
  window.location.href = "https://www.youtube.com/watch?v=QDia3e12czc";
}, 5000);
    }, 2000);
  } else {
    setTimeout(showQuestion, 2000);
  }
}

showQuestion();

/* =======================
   DARK MODE
======================= */

document.getElementById("modeBtn").onclick = () => {
  document.body.classList.toggle("dark");
};