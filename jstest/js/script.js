// Variables
const message = document.getElementById("message");
const button = document.getElementById("colorButton");
const colors = ["#f2efe6", "#bde0fe", "#ffd6a5", "#caffbf", "#ffc6ff", "#fdffb6"];
let clickCount = 0;

// Function: change the background color and the text
function changeColor() {
  clickCount++;
  const newColor = colors[clickCount % colors.length];
  document.body.style.backgroundColor = newColor;
  message.textContent = "You clicked " + clickCount + (clickCount === 1 ? " time!" : " times!");
}

// Event listener: runs the function when the button is clicked
button.addEventListener("click", changeColor);
