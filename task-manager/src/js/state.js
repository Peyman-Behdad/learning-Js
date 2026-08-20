export const state = {
  tasks: [],
  filter: "all",
  searchQuery: "",
};

export function addTask(title) {
  const task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createAt: new Date().toISOString,
  };

  state.tasks.push(task);
  saveTasks();
}

export function toggleTask(taskId) {
  const task = state.tasks.find((task) => task.id === taskId);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
}

export function saveTasks() {
  localStorage.setItem("task", JSON.stringify(state.tasks));
}

export function readTasks() {
  const getTasks = localStorage.getItem("task");
  const getItem = JSON.parse(getTasks);

  if (getTasks === null) {
    getTasks = localStorage.setItem([]);
    return;
  }
  state.tasks = getItem;
}
