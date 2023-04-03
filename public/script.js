const btn = document.getElementById("btn");
const jokeList = document.getElementById("joke-list");
let jokes = [];

async function generateJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();

  jokes.push(data.value);
  renderJokes();
}

function renderJokes() {
  jokeList.innerHTML = "";
  jokes.forEach((joke) => {
    const li = document.createElement("li");
    li.innerHTML = joke;
    li.classList.add("joke-item");
    jokeList.appendChild(li);
  });
}

btn.addEventListener("click", generateJoke);
