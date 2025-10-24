let h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.color = "blue";
});

//change color when mouse over
let div = document.getElementById("myDiv");
div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "grey";
});

//change color when mouse out
div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "red";
});

let inputField = document.getElementById("inputField");
inputField.addEventListener("keydown", (event) => {
  if (event.key < "0" || event.key > "9") {
    alert("You pressed wrong number!");
    event.preventDefault();
  }
});

inputField.addEventListener("keyup", (event) => {
  console.log(`Key "${event.key}" released  [event: keyup]`);
});

inputField.addEventListener("keypress", (event) => {
  console.log(`Key "${event.key}" pressed and held down  [event: keypress]`);
});

inputField.addEventListener("focus", (event) => {