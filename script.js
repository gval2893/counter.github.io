var counter = 0;
var counterElement = document.getElementById("counter");
var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("decrement");
var resetBtn = document.getElementById("reset");

function increment() {
  counter = counter + 1;
  setElementText();
}

function decrement() {
  if (counter === 0) {
    return;
  } else {
    counter = counter - 1;
    setElementText();
  }
}

function reset() {
  counter = 0;
  setElementText();
}

function setElementText() {
  counterElement.innerText = counter;
}

setElementText();
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
