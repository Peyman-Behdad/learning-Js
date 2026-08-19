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
}

export function toggleTask(taskId) {
  const task = state.tasks.find((task) => task.id === taskId);
  if (!task) return;
  task.completed = !task.completed;
}
