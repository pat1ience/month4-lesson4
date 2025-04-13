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
  stopCount(g);
  count = 0;
  updateCount();
}

const updateCount = () => {
  counterElement.innerText = count;
};
updateCount();

startButton.addEventListener("click", startCount);
stopButton.addEventListener("click", stopCount);
resetButton.addEventListener("click", resetCount);

// 4) homeWork

const xhrActors = new XMLHttpRequest();
xhrActors.open("GET", "/data/actors.json");
xhrActors.setRequestHeader("Content-type", "application/json");
xhrActors.send();

xhrActors.onload = () => {
  const charactersList = document.querySelector(".characters-list");
  const data = JSON.parse(xhrActors.response);

  charactersList.innerHTML = `
    <div class="character-card">
      <img class="character-photo" src="${data[0].photo}"></img>
      <h4 class="character-name">${data[0].name}</h4>
      <p class="character-age">${data[0].age}</p>
    </div>

        <div class="character-card">
      <img class="character-photo" src="${data[1].photo}"></img>
      <h4 class="character-name">${data[1].name}</h4>
      <p class="character-age">${data[1].age}</p>
    </div>

        <div class="character-card">
      <img class="character-photo" src="${data[2].photo}"></img>
      <h4 class="character-name">${data[2].name}</h4>
      <p class="character-age">${data[2].age}</p>
    </div>
  `;
};

// 5)homeWork

const xhrAny = new XMLHttpRequest()
xhrAny.open('GET', '/data/any.json')
xhrAny.setRequestHeader('Content-type', 'application/json')
xhrAny.send()

xhrAny.onload = () => {
  const data = JSON.parse(xhrActors.response);
  console.log(data)
};