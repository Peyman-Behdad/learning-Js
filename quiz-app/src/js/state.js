import { nextBtn, questionElement, answerBtn, nextBtnParent } from "./dom";

export const question = [
  {
    question: "Which is larget animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answer: [
      { text: "Vatican", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

export function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.className = `bg-white font-medium w-full border border-gray-300 p-2 my-2 rounded-lg text-left cursor-pointer text-gray-600 hover:bg-gray-900 disabled:cursor-no-drop hover:text-white duration-150`;
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtnParent.classList.add("hidden");
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.className = `bg-green-700/90  font-medium w-full border border-gray-300 p-2 my-2 rounded-lg text-left cursor-pointer text-white hover:bg-gray-900 hover:text-white duration-150 disabled:cursor-no-drop`;
  } else {
    selectedBtn.className = `bg-red-700/90 font-medium w-full border border-gray-300 p-2 my-2 rounded-lg text-left cursor-pointer text-white hover:bg-gray-900 hover:text-white duration-150 disabled:cursor-no-drop`;
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.className = `bg-green-700/90  font-medium w-full border border-gray-300 p-2 my-2 rounded-lg text-left cursor-pointer text-white hover:bg-gray-900 hover:text-white duration-150 disabled:cursor-no-drop`;
    }
    button.disabled = true;
  });
  nextBtnParent.classList.remove("hidden");
  nextBtnParent.classList.add("flex");
}
