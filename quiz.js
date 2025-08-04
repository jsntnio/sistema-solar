const quizData = [{
    question: "Qual é o planeta mais próximo do Sol?",
    answers: ["Mercúrio", "Vênus", "Terra", "Marte"],
    correct: 0
  },
  {
    question: "Qual planeta é conhecido como Planeta Vermelho?",
    answers: ["Saturno", "Marte", "Júpiter", "Netuno"],
    correct: 1
  },
  {
    question: "Quantos planetas existem no Sistema Solar?",
    answers: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    question: "Qual planeta é conhecido por seus anéis?",
    answers: ["Urano", "Júpiter", "Saturno", "Netuno"],
    correct: 2
  },
  {
    question: "Qual planeta tem o maior número de luas conhecidas?",
    answers: ["Saturno", "Júpiter", "Urano", "Netuno"],
    correct: 1
  },
  {
    question: "Qual planeta gira de lado em relação aos outros?",
    answers: ["Urano", "Marte", "Mercúrio", "Plutão"],
    correct: 0
  },
  {
    question: "Qual é o maior planeta do Sistema Solar?",
    answers: ["Júpiter", "Saturno", "Netuno", "Terra"],
    correct: 0
  },
  {
    question: "Qual planeta possui o dia mais curto do Sistema Solar?",
    answers: ["Terra", "Júpiter", "Marte", "Saturno"],
    correct: 1
  },
  {
    question: "Qual planeta tem a atmosfera mais densa?",
    answers: ["Terra", "Vênus", "Netuno", "Urano"],
    correct: 1
  },
  {
    question: "Qual planeta é conhecido por ter ventos supersônicos?",
    answers: ["Marte", "Netuno", "Urano", "Saturno"],
    correct: 1
  }
];

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const questionCounter = document.getElementById("question-counter");
const quizTitle = document.getElementById("quiz-title");

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;

  questionCounter.innerText = currentQuestion + 1;
  questionCounter.style.display = "flex";
  questionCounter.style.animation = "none";
  void questionCounter.offsetWidth;
  questionCounter.style.animation = "zoomIn 0.5s ease";

  quizContainer.innerHTML = `
    <div class="question">${quizData[currentQuestion].question}</div>
    <div class="answers">
      ${quizData[currentQuestion].answers.map((answer, index) => 
        `<button onclick="selectAnswer(${index})">${answer}</button>`
      ).join("")}
    </div>
  `;
  nextBtn.classList.add("hidden");
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const buttons = quizContainer.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    if (i === quizData[currentQuestion].correct) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (index === quizData[currentQuestion].correct) {
    score++;
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  quizContainer.innerHTML = "";
  nextBtn.classList.add("hidden");

  questionCounter.style.display = "none";

  let message = "";
  if (score <= 5) {
    message = "Continue tentando! Você pode aprender ainda mais";
  } else if (score <= 9) {
    message = "Muito bem! Você mandou super bem";
  } else {
    message = "Uau! Você é um verdadeiro gênio do Sistema Solar";
  }

  quizTitle.innerText = message;

  scoreContainer.classList.remove("hidden");
  scoreContainer.innerHTML = `
    <p>Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas!</p>
    <div class="final-buttons">
      <button onclick="restartQuiz()">Jogar Novamente</button>
      <button onclick="window.location.href='index.html'">Voltar ao Início</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizTitle.innerText = "Quiz do Sistema Solar";
  scoreContainer.classList.add("hidden");

  questionCounter.style.display = "flex";

  loadQuestion();
}

loadQuestion();