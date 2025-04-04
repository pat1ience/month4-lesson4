// 1) homeWork
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

gmailButton.onclick = () => {
  const resExp = /^[\D][\w]*@gmail.com$/;

  if (resExp.test(gmailInput.value)) {
    gmailResult.innerText = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "ERROR";
    gmailResult.style.color = "red";
  }
};

// 2) homeWork
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const maxWidth = parentBlock.clientWidth - childBlock.clientWidth;
const maxHeight = parentBlock.clientHeight - childBlock.clientHeight;

const moveBlock = () => {
  if (positionX < maxWidth && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(moveBlock);
  } else if (positionX >= maxWidth && positionY < maxHeight) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
    requestAnimationFrame(moveBlock);
  } else if (positionY >= maxHeight && positionX >= 0) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(moveBlock);
  } else if (positionX <= 0 && positionY >= 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`;
    requestAnimationFrame(moveBlock);
  } else {
    requestAnimationFrame(moveBlock);
  }
};

moveBlock();

// 3) homeWork
const counterElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let intervalId;
let count = 0;

function startCount() {
  intervalId = setInterval(() => {
    count++;
    updateCount();
  }, 1000);
}

function stopCount() {
  clearInterval(intervalId);
}

function resetCount() {
  stopCount(g)
  count = 0
  updateCount();
}

const updateCount = () => {
  counterElement.innerText = count;
};
updateCount();

startButton.addEventListener("click", startCount);
stopButton.addEventListener("click", stopCount);
resetButton.addEventListener("click", resetCount);
