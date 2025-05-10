import { App } from "./app.js";

window.handleAdd = function() {
  const input = document.getElementById("input").value;
  const resultEl = document.getElementById("result");
  try {
    const sum = App.add(input);
    resultEl.textContent = `Sum: ${sum}`;
  } catch (err) {
    resultEl.textContent = err.message;
  }
};
