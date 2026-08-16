export const taskForm = document.querySelector("#task-form");
export const taskInput = document.querySelector("#task-input");
export const taskList = document.querySelector("#task-list");
export const taskError = document.querySelector("#task-error");

export function renderTasks(tasks) {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "mb-3 rounded-lg bg-white p-4 shadow-sm";
    taskElement.textContent = task.title;

    taskList.append(taskElement);
  });
}
