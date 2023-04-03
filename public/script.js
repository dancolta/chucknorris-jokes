const jokeEl = document.getElementById("joke");
const jokeContainer = document.querySelector(".joke-container");
const btn = document.getElementById("btn");

async function generateJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();

  jokeContainer.classList.remove("show");
  jokeContainer.classList.add("hide");
  setTimeout(() => {
    jokeEl.innerHTML = data.value;
    jokeContainer.classList.remove("hide");
    jokeContainer.classList.add("show");
  }, 300);
}

btn.addEventListener("click", generateJoke);
