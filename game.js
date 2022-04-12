let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");
let easyButton = document.querySelector("mode selected");

init();

function init() {
  colorDisplay.textContent = pickedColor;
  setUpModeBtns();
  setUpSquares();
  reset();
}
resetBtn.addEventListener("click", function () {
  reset();
});

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetBtn.textContent = "Play Again!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "rgba(0, 0, 0, 0)";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setUpModeBtns() {
  for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
      for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].classList.remove("selected");
      }
      this.classList.add("selected");
      if (this.textContent === "Facil") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }

      reset();
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
  resetBtn.textContent = "New Colors";
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = randomColor();
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
