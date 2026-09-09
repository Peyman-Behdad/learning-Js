import "../style.css";
import { nextBtn } from "./dom";
import {
  currentQuestionIndex,
  handleNextBtn,
  question,
  startQuiz,
} from "./state";

startQuiz();

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});
