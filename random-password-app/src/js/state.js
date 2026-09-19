import { passwordInput } from "./dom";

const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~}{|/><:;=-[]";

const allChars = upperCase + lowerCase + number + symbol;

export function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordInput.value = password;
}

export async function copy() {
  try {
    await navigator.clipboard.writeText(passwordInput.value);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
