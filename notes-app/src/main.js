const notesContainer = document.querySelector(".main-box");
const notesBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

notesBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className =
    "relative w-full max-w-125 min-h-37.5 bg-white text-gray-700 px-5 py-2 mt-10 outline-none rounded-lg ";
  img.className = "w-7 absolute bottom-2 right-3 cursor-pointer";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "src/assets/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});
