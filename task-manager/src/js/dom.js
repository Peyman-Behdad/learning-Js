export const taskForm = document.querySelector("#task-form");
export const taskInput = document.querySelector("#task-input");
export const taskList = document.querySelector("#task-list");
export const taskError = document.querySelector("#task-error");
import { state, toggleTask } from "./state";

export function renderTasks(tasks) {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");

    taskElement.className =
      "mb-3 rounded-lg bg-white p-4 shadow-sm flex justify-between items-center text-lg";

    taskElement.dataset.taskId = task.id;

    taskElement.addEventListener("click", () => {
      toggleTask(task.id);
      renderTasks(state.tasks);
    });
    const titleElement = document.createElement("span");

    titleElement.textContent = task.title;

    taskElement.append(titleElement);

    const completedElement = document.createElement("span");

    if (task.completed) {
      completedElement.innerHTML =
        "<i class='fa-solid fa-check text-green-600 text-xl'></i>";
      taskElement.append(completedElement);
    } else {
      completedElement.innerHTML =
        "<i class='fa-solid fa-xmark text-red-600 text-xl'></i>";
      taskElement.append(completedElement);
    }

    taskList.append(taskElement);
  });
}
