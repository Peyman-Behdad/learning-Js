export const taskForm = document.querySelector("#task-form");
export const taskInput = document.querySelector("#task-input");
export const taskList = document.querySelector("#task-list");
export const taskError = document.querySelector("#task-error");

export function renderTasks(tasks) {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className =
      "mb-3 rounded-lg bg-white p-4 shadow-sm flex justify-between items-center text-lg";
    taskElement.innerHTML = `
    <span>${task.title}</span>
    ${task.completed ? "<span><i class='fa-solid fa-check text-green-600 text-xl'></i></span>" : "<i class='fa-solid fa-xmark text-red-600 text-xl'></i></span>"}`;

    taskList.append(taskElement);
  });
}
