const firstPlayerName = document.getElementById('player1');
const secondPlayerName = document.getElementById('player2');
const firstInput = document.getElementById('player-1');
const secondInput = document.getElementById('player-2');
const sectionB = document.querySelector('.section-B');
const messageTurn = document.getElementById('message');

let activePlayerOne = true;
let activePlayerTwo = false;

firstPlayerName.textContent = 'Max';
secondPlayerName.textContent = 'Manu';

function switchPlayer() {
  activePlayerOne = !activePlayerOne;
  activePlayerTwo = !activePlayerTwo;
}

function activePlayer(id) {
  if (activePlayerOne) {
    document.getElementById(id).value = 'X';
    messageTurn.textContent = `It's your turn ${secondInput.value}!`;
  }

  if (activePlayerTwo) {
    document.getElementById(id).value = 'O';
    messageTurn.textContent = `It's your turn ${firstInput.value}!`;
  }

  if (Number(id) === Number(sectionB.children[id].id)) {
    sectionB.children[id].classList.add('selected');
  }
  switchPlayer();
}

function playerInput_3() {
  activePlayer('0');
}

function playerInput_4() {
  activePlayer('1');
}

function playerInput_5() {
  activePlayer('2');
}

function playerInput_6() {
  activePlayer('3');
}

function playerInput_7() {
  activePlayer('4');
}

function playerInput_8() {
  activePlayer('5');
}

function playerInput_9() {
  activePlayer('6');
}

function playerInput_10() {
  activePlayer('7');
}

function playerInput_11() {
  activePlayer('8');
}

function playerChoice() {
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById('0').value;
  b2 = document.getElementById('1').value;
  b3 = document.getElementById('2').value;
  b4 = document.getElementById('3').value;
  b5 = document.getElementById('4').value;
  b6 = document.getElementById('5').value;
  b7 = document.getElementById('6').value;
  b8 = document.getElementById('7').value;
  b9 = document.getElementById('8').value;

  winCombinations(b1, b2, b3);
  winCombinations(b4, b5, b6);
  winCombinations(b7, b8, b9);
  winCombinations(b1, b4, b7);
  winCombinations(b2, b5, b8);
  winCombinations(b3, b6, b9);
  winCombinations(b1, b5, b9);
  winCombinations(b3, b5, b7);

  if (
    (b1 === 'O' || b1 === 'X') &&
    (b2 === 'O' || b2 === 'X') &&
    (b3 === 'O' || b3 === 'X') &&
    (b4 === 'O' || b4 === 'X') &&
    (b5 === 'O' || b5 === 'X') &&
    (b6 === 'O' || b6 === 'X') &&
    (b7 === 'O' || b7 === 'X') &&
    (b8 === 'O' || b8 === 'X') &&
    (b9 === 'O' || b9 === 'X')
  ) {
    setTimeout(() => {
      alert('Tie');
    });
  }
}

function winCombinations(a, b, c) {
  if (a === 'X' && b === 'X' && c === 'X') {
    messageTurn.textContent = `You Won ${firstInput.value}!`;
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  if (a === 'O' && b === 'O' && c === 'O') {
    messageTurn.textContent = `You Won ${secondInput.value}!`;
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}

firstInput.addEventListener('input', (e) => {
  e.preventDefault();
  firstPlayerName.textContent = e.target.value;
});

secondInput.addEventListener('input', (e) => {
  e.preventDefault();
  secondPlayerName.textContent = e.target.value;
});
