import "./style.css";

function logToDiv(message) {
  console.log(message);
  const selectDiv = document.getElementById("select");
  if (selectDiv) {
    selectDiv.innerHTML += message + "<br>";
  }
}
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

const rndm = getRandomInt(0, 10);

let attempts = [];

function check(userInput) {
  if (userInput === rndm) {
    attempts.push(userInput);
    logToDiv(
      `You win! 🎉 It took you ${attempts.length} times to guess the number`,
    );
    logToDiv("Your attempts: " + attempts.join(", "));
    return true;
  } else if (userInput < rndm) {
    attempts.push(userInput);
    logToDiv("Too low! 📉 Try again!");
  } else if (userInput > rndm) {
    attempts.push(userInput);
    logToDiv("Too high! 📈 Try again!");
  } else {
    logToDiv("Invalid input! ❌ Please enter a number between 0 and 10.");
  }
  return false;
}

function ask() {
  const raw = prompt("Guess a number between 0 and 10:");

  const userInput = raw === null ? NaN : parseInt(raw, 10);
  const won = check(userInput);
  if (!won) {
    setTimeout(ask, 0);
  }
}

setTimeout(ask, 0);
