import "../style.css";
import { state, addTask, } from "./state.js";
import { taskForm, taskInput, taskError, renderTasks } from "./dom.js";

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (!title) {
    taskError.textContent = "Please enter a task";
    taskError.classList.remove("hidden");
    return;
  }

  taskError.textContent = "";
  taskError.classList.add("hidden");

  addTask(title);
  renderTasks(state.tasks);

  taskInput.value = "";
});