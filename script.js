// script.js

// 1. Configuration du nom autorisé
const allowedUsers = [
  "Manon Lavoine",
  "Allison Colombier",
];

// 2. Sélection des éléments HTML
const welcomeDiv = document.getElementById("welcome");
const userInput = document.getElementById("userInput");
const startBtn = document.getElementById("startBtn");
const welcomeError = document.getElementById("welcome-error");

const quizDiv = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const validateBtn = document.getElementById("validate");
const illustrationEl = document.getElementById("illustration");

let currentQuestion = 0;
let score = 0;
let selectedAnswerIndex = null;

// 3. Accueil : vérifier prénom/nom
startBtn.addEventListener("click", () => {
  const userValue = userInput.value.trim();

const match = allowedUsers.some(name => name.toLowerCase() === userValue.toLowerCase());

if (match) {
  welcomeDiv.style.display = "none";
  quizDiv.style.display = "block";
  showQuestion();
} else {
  welcomeError.textContent = "Nom ou prénom incorrect ! 🚫";
}

// 4. Afficher une question
function showQuestion() {
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";
  illustrationEl.innerHTML = "";
  validateBtn.style.display = "none";
  nextBtn.style.display = "none";
  selectedAnswerIndex = null;

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  // Illustration image si question de type texte
  if (q.type === "text" && q.image) {
    const img = document.createElement("img");
    img.src = q.image;
    img.alt = "Illustration";
    img.className = "illustration";
    illustrationEl.appendChild(img);
  }

  // Réponses texte ou image
  if (q.type === "text") {
    answersEl.classList.remove("image-mode");
    q.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => selectAnswer(index);
      answersEl.appendChild(btn);
    });
  } else if (q.type === "image") {
    answersEl.classList.add("image-mode");
    q.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      const img = document.createElement("img");
      img.src = answer.image;
      img.alt = answer.label;
      img.className = "option-image";
      btn.appendChild(img);
      btn.onclick = () => selectAnswer(index);
      answersEl.appendChild(btn);
    });
  }
}

// 5. Sélection d'une réponse
function selectAnswer(index) {
  selectedAnswerIndex = index;

  // Reset visuel
  Array.from(answersEl.children).forEach((btn, idx) => {
    btn.classList.remove("selected");
    if (btn.querySelector('img')) {
      btn.querySelector('img').style.border = "2px solid #f0c674";
    }
    btn.style.background = "rgba(240, 198, 116, 0.2)";
    btn.style.color = "white";
  });

  // Appliquer style sélectionné
  const selectedButton = answersEl.children[index];
  selectedButton.classList.add("selected");

  if (selectedButton.querySelector('img')) {
    selectedButton.querySelector('img').style.border = "2px solid white";
  } else {
    selectedButton.style.background = "#f0c674";
    selectedButton.style.color = "black";
  }

  validateBtn.style.display = "block";
}

// 6. Valider la réponse
validateBtn.addEventListener("click", () => {
  if (selectedAnswerIndex === null) return;

  const q = questions[currentQuestion];

  Array.from(answersEl.children).forEach(btn => btn.disabled = true);

  if (selectedAnswerIndex === q.correct) {
    feedbackEl.textContent = "Bonne réponse ! 🎉";
    score++;
  } else {
    feedbackEl.textContent = "On est obligé de regarder de nouveau ensemble...";
  }

  validateBtn.style.display = "none";
  nextBtn.style.display = "block";
});

// 7. Passer à la question suivante
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

// 8. Afficher le score final
function showScore() {
  questionEl.textContent = "Quiz terminé ! 🎉";
  answersEl.innerHTML = `<div style="color: white;">Tu as obtenu ${score} bonne(s) réponse(s) sur ${questions.length}.</div>`;
  illustrationEl.innerHTML = "";
  feedbackEl.textContent = "";
  validateBtn.style.display = "none";
  nextBtn.style.display = "none";
}
