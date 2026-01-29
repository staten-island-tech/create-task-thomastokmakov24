import './style.css'

const gangGangDiv = document.getElementById('GangGang');

function logToDiv(message) {
  console.log(message);
  gangGangDiv.innerHTML += message + '<br>';
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

const gay = getRandomInt(0, 10);
logToDiv(gay);
let aespa = false;
let attempts = [];

function check(userInput) {
  if (userInput === gay) {
    attempts.push(userInput);
    logToDiv(`You win! 🎉 It took you ${attempts.length} times to guess the number`);
    logToDiv('Your attempts: ' + attempts.join(', '));
    aespa = true;
  }  else if (userInput <= gay) {
    attempts.push(userInput);
    logToDiv('Too low! 📉 Try again!');
  } else if (userInput >= gay) {
    attempts.push(userInput);
    logToDiv('Too high! 📈 Try again!');
  } else {
    logToDiv('Invalid input! ❌ Please enter a number between 0 and 10.');
  }
  //bs atarts here
  if (!aespa) {
    setTimeout(() => {
      const userInput = parseInt(prompt('Guess a number between 0 and 10:'));//try to understand this code. Parseint is like significant numbers. 0770 = 770 and decimals are tossed or truncated or some bs. prompt - ts needs to be studied .\_/.
      check(userInput);
    }, 0);
  }
}

const userInput = parseInt(prompt('Guess a number between 0 and 10:'));
check(userInput);
/* while (aespa !== true) {
  const userInput = parseInt(prompt('Guess a number between 0 and 10:'));//try to understand this code. Parseint is like significant numbers. 0770 = 770 and decimals are tossed or truncated or some bs. prompt - ts needs to be studied .\_/.
  check(userInput);
} */