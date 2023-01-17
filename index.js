const btn = document.getElementById("btn");
const text = document.getElementById("text");
const body = document.getElementById("body");

btn.addEventListener("click", (random) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  body.style.backgroundColor = randomColor;
  text.innerText = `Your random color is: ${randomColor} `;
});
