import './style.css'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

const gay = getRandomInt(0, 10);
console.log(gay);
let aespa = false;
let attempts = [];

function check(userInput) {
  if (userInput === gay) {
    attempts.push(userInput);
    console.log(`You win! 🎉 It took you ${attempts.length} times to guess the number`);
    console.log('Your attempts: ' + attempts.join(', '));
    aespa = true;
  }  else if (userInput <= gay) {
    attempts.push(userInput);
    console.log('Too low! 📉 Try again!');
  } else if (userInput >= gay) {
    attempts.push(userInput);
    console.log('Too high! 📈 Try again!');
  } else {
    console.log('Invalid input! ❌ Please enter a number between 0 and 10.');
  }
    
}
while (aespa !== true) {
  const userInput = parseInt(prompt('Guess a number between 0 and 10:'));//try to understand this code. Parseint is like significant numbers. 0770 = 770 and decimals are tossed or truncated or some bs. prompt - ts needs to be studied .\_/.
  check(userInput);
}