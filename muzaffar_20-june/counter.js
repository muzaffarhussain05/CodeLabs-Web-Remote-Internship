let counter = 0;

const count = document.getElementById("count");
count.innerHTML = counter;
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");

increaseButton.addEventListener("click", () => {
  counter = counter + 1;
  count.innerHTML = counter;
});
decreaseButton.addEventListener("click", () => {
  counter = counter - 1;
  count.innerHTML = counter;
});

const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    mode.textContent = "Light Mode";
  } else {
    mode.textContent = "Dark Mode";
  }
});
