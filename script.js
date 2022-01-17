const firstPlayerName = document.getElementById('player1');
const secondPlayerName = document.getElementById('player2');
const firstInput = document.getElementById('player-1');
const secondInput = document.getElementById('player-2');
const hr = document.querySelector('hr');

let activePlayerOne = true;
let activePlayerTwo = false;

function switchPlayer() {
  activePlayerOne = !activePlayerOne;
  activePlayerTwo = !activePlayerTwo;
}

function myfunc_3() {
  //   if (sectionA.children[0].children[0].textContent === 'Player 1') {
  //     document.getElementById('b1').value = 'X';
  //   }
  //   if (sectionA.children[1].children[0].textContent === 'Player 2') {
  //     document.getElementById('b1').value = 'O';
  //   }

  if (activePlayerOne) {
    document.getElementById('b1').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b1').value = 'O';
  }
  switchPlayer();
}

function myfunc_4() {
  if (activePlayerOne) {
    document.getElementById('b2').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b2').value = 'O';
  }
  switchPlayer();
}

function myfunc_5() {
  if (activePlayerOne) {
    document.getElementById('b3').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b3').value = 'O';
  }
  switchPlayer();
}

function myfunc_6() {
  if (activePlayerOne) {
    document.getElementById('b4').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b4').value = 'O';
  }
  switchPlayer();
}

function myfunc_7() {
  if (activePlayerOne) {
    document.getElementById('b5').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b5').value = 'O';
  }
  switchPlayer();
}

function myfunc_8() {
  if (activePlayerOne) {
    document.getElementById('b6').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b6').value = 'O';
  }
  switchPlayer();
}

function myfunc_9() {
  if (activePlayerOne) {
    document.getElementById('b7').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b7').value = 'O';
  }
  switchPlayer();
}

function myfunc_10() {
  if (activePlayerOne) {
    document.getElementById('b8').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b8').value = 'O';
  }
  switchPlayer();
}

function myfunc_11() {
  if (activePlayerOne) {
    document.getElementById('b9').value = 'X';
  }

  if (activePlayerTwo) {
    document.getElementById('b9').value = 'O';
  }
  switchPlayer();
}

function myfunc() {
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById('b1').value;
  b2 = document.getElementById('b2').value;
  b3 = document.getElementById('b3').value;
  b4 = document.getElementById('b4').value;
  b5 = document.getElementById('b5').value;
  b6 = document.getElementById('b6').value;
  b7 = document.getElementById('b7').value;
  b8 = document.getElementById('b8').value;
  b9 = document.getElementById('b9').value;

  if (b1 === 'O' && b5 === 'O' && b9 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b1 === 'X' && b5 === 'X' && b9 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b1 === 'O' && b2 === 'O' && b3 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
    hr.style.display = 'block';
  }

  if (b1 === 'X' && b2 === 'X' && b3 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
    hr.style.display = 'block';
  }

  if (b1 === 'O' && b4 === 'O' && b7 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b1 === 'X' && b4 === 'X' && b7 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b7 === 'O' && b8 === 'O' && b9 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b7 === 'X' && b8 === 'X' && b9 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b4 === 'O' && b5 === 'O' && b6 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b4 === 'X' && b5 === 'X' && b6 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b2 === 'O' && b5 === 'O' && b8 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b2 === 'X' && b5 === 'X' && b8 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b3 === 'O' && b6 === 'O' && b9 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b3 === 'X' && b6 === 'X' && b9 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b3 === 'O' && b5 === 'O' && b7 === 'O') {
    setTimeout(() => {
      alert('Winner');
    });
  }

  if (b3 === 'X' && b5 === 'X' && b7 === 'X') {
    setTimeout(() => {
      alert('Winner');
    });
  }
}

const sectionA = document.querySelector('.section-A');
if (sectionA.children[0].children[0].textContent === 'Player 1') {
}

firstInput.addEventListener('input', (e) => {
  firstPlayerName.textContent = e.target.value;
});

secondInput.addEventListener('input', (e) => {
  secondPlayerName.textContent = e.target.value;
});
