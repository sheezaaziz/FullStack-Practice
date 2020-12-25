const p1 = {
  score: 0,
  btn: document.querySelector('#p1-btn'),
  display: document.querySelector('#p1-s')
};

const p2 = {
  score: 0,
  btn: document.querySelector('#p2-btn'),
  display: document.querySelector('#p2-s')
};

const winningScoreSelect = document.querySelector('#winning-score');
const resetBtn = document.querySelector('#reset-btn');

let winningScore = 3;
let gameOver = false;

updateScore = (player) => {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      gameOver = true;
    }
    player.display.innerText = player.score;
  }
}

p1.btn.addEventListener('click', () => {
  updateScore(p1);
});

p2.btn.addEventListener('click', () => {
  updateScore(p2);
});

resetBtn.addEventListener('click', () => {
  reset();
});

// bc arrow fcns do not bind to 'this' keyword.
winningScoreSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset();
});

reset = () => {
  gameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = p1.score;
  p2.display.innerText = p2.score;
};
