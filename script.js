let lives = 6;
let guessedLetter = '';
let letterBoxes = document.getElementById('hold');
let words = [
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape",
  "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya",
  "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "watermelon"
];
let word = words[Math.floor(Math.random() * words.length)];

function initializeLetterBoxes(word) {
  letterBoxes.innerHTML = ''; 
  for (let i = 0; i < word.length; i++) { 
    let span = document.createElement('span');
    span.className = 'letter-box';
    span.textContent = '_';
    letterBoxes.appendChild(span);
  }
}

function createLetterBoxes() {
  let boxes = document.querySelectorAll('.letter-box');
  boxes.forEach((box, index) => {
    if (word[index] === guessedLetter) {
      box.textContent = guessedLetter;
    }
  });
}

document.getElementById('reset').addEventListener('click', function() {
  lives = 6;
  word = words[Math.floor(Math.random() * words.length)];
  document.getElementById('lives').textContent = `Lives: ${lives}`;
  document.querySelector('input').value = '';
  initializeLetterBoxes(word);
});

document.getElementById('solve').addEventListener('click', function() {
  let userAnswer = prompt("Enter your guess:");
  if (userAnswer && userAnswer.toLocaleLowerCase() === word){
    alert("Congratulations! You guesses correctly!");
  let boxes = document.querySelectorAll('.letter-box');
  boxes.forEach((box, index) => {
    box.textContent = word[index]; // Reveal the complete word in the boxes
  });
  } else {
    alert("Incorrect guess.Try again!");
  }
});
  //alert(`The word was: ${word}!`);
  document.getElementById('submit').addEventListener('click', function() {
  guessedLetter = document.querySelector('input').value.toLocaleLowerCase();
  if (!word.includes(guessedLetter)) {
    lives--;
    document.getElementById('lives').textContent = `Lives: ${lives}`;
    if (lives === 0) {
      alert('Game Over!');
    }
  } else {
    createLetterBoxes();
  }
  document.querySelector('input').value = '';
});

initializeLetterBoxes(word);