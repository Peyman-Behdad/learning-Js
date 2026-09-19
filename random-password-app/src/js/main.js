import { passwordBtn, copyPassword, badge } from "./dom";
import { createPassword, copy } from "./state";

passwordBtn.addEventListener("click", () => {
  createPassword();
});

copyPassword.addEventListener("click", () => {
  copy();
  badge.classList.add("block");
  badge.classList.remove("hidden");
  setTimeout(() => {
    badge.classList.add("hidden");
  }, 1500);
});
