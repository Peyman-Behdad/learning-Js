const inputBox = document.querySelector(".input-box");
const taskBtn = document.querySelector(".task-btn");
const listContainer = document.querySelector(".list-container");
const taskError = document.querySelector(".error");
const icon = document.querySelector(".icon");

function addTask() {
  if (inputBox.value == "") {
    taskError.classList.remove("hidden");
    taskError.classList.add("block");
  } else {
    let div = document.createElement("div");
    listContainer.appendChild(div);
    div.className = "flex justify-between items-center";
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.className =
      "flex flex-1 items-center select-none cursor-pointer text-lg py-3 px-10 before:content-[''] before:absolute before:size-7 before:rounded-full before:bg-cover before:bg-center before:top-3 before:left-2 before:bg-[url(/src/assets/images/uncheked.png)] relative";
    div.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className =
      "text-xl hover:bg-gray-200 pb-0.5 duration-150 rounded-full size-7 flex items-center justify-center cursor-pointer";
    div.appendChild(span);

    taskError.classList.remove("block");
    taskError.classList.add("hidden");
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
