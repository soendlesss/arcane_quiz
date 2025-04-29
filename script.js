// script.js

// Variables globales
let currentQuestion = 0;
let score = 0;
let selectedAnswerIndex = null;

let welcomeDiv, userInput, startBtn, welcomeError, quizDiv;
let questionEl, answersEl, feedbackEl, nextBtn, validateBtn, illustrationEl;

window.onload = () => {
  const allowedUsers = [
    "Manon Lavoine",
    "Allison Colombier",
    "Ethan Langlois",
    "Camille Leclercq"
  ];

  // Sélection des éléments HTML
  welcomeDiv = document.getElementById("welcome");
  userInput = document.getElementById("userInput");
  startBtn = document.getElementById("startBtn");
  welcomeError = document.getElementById("welcome-error");
  quizDiv = document.getElementById("quiz");

  questionEl = document.getElementById("question");
  answersEl = document.getElementById("answers");
  feedbackEl = document.getElementById("feedback");
  nextBtn = document.getElementById("next");
  validateBtn = document.getElementById("validate");
  illustrationEl = document.getElementById("illustration");

  // Bouton "Valider" (accueil)
  startBtn.addEventListener("click", () => {
    const inputValue = userInput.value.trim().toLowerCase();
    const isAllowed = allowedUsers.some(name => name.toLowerCase() === inputValue);

    if (isAllowed) {
      welcomeDiv.style.display = "none";
      quizDiv.style.display = "block";
      console.log("✅ Accès autorisé !");
      showQuestion();
    } else {
      welcomeError.textContent = "Nom ou prénom incorrect ! 🚫";
    }
  });

  // Bouton "Valider la réponse"
  validateBtn.addEventListener("click", () => {
    if (selectedAnswerIndex === null) return;

    const q = questions[currentQuestion];

    Array.from(answersEl.children).forEach(btn => btn.disabled = true);

    if (selectedAnswerIndex === q.correct) {
      feedbackEl.textContent = "Bonne réponse ! 🎉";
      score++;
    } else {
      feedbackEl.textContent = "Mauvaise réponse...";
    }

    validateBtn.style.display = "none";
    nextBtn.style.display = "block";
  });

  // Bouton "Question suivante"
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
};

// Affiche une question
function showQuestion() {
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";
  illustrationEl.innerHTML = "";
  validateBtn.style.display = "none";
  nextBtn.style.display = "none";
  selectedAnswerIndex = null;

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  // Image au-dessus de la question
  if (q.type === "text" && q.image) {
    const img = document.createElement("img");
    img.src = q.image;
    img.alt = "Illustration";
    img.className = "illustration";
    illustrationEl.appendChild(img);
  }

  // Réponses texte
  if (q.type === "text") {
    answersEl.classList.remove("image-mode");
    q.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => selectAnswer(index);
      answersEl.appendChild(btn);
    });
  }
  // Réponses image
  else if (q.type === "image") {
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

// Sélection d'une réponse
function selectAnswer(index) {
  selectedAnswerIndex = index;

  Array.from(answersEl.children).forEach((btn, idx) => {
    btn.classList.remove("selected");
    if (btn.querySelector('img')) {
      btn.querySelector('img').style.border = "2px solid #f0c674";
    }
    btn.style.background = "rgba(240, 198, 116, 0.2)";
    btn.style.color = "white";
  });

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

// Affiche le score final
function showScore() {
  questionEl.textContent = "Quiz terminé ! 🎉";
  answersEl.innerHTML = `<div style="color: white;">Tu as obtenu ${score} bonne(s) réponse(s) sur ${questions.length}.</div>`;
  illustrationEl.innerHTML = "";
  feedbackEl.textContent = "";
  validateBtn.style.display = "none";
  nextBtn.style.display = "none";
}
