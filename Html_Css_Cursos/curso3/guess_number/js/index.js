const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

verif = false;

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    if (verif == false) {
        attempt.innerHTML = 'Tentativa: ' + value
    }
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor!')
        return;
    } else if(verif == true) {
        alert('VC venceu, clique em "Jogar de novo!"')
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if (numberDrawn == kick && verif == false) {
        playAgain();
        status.innerHTML = 'You Win!!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = 'green';
        result.style.color = 'white';
        status.style.color = 'white';
        verif = true;
        clear();
    } else if(numberDrawn > kick && verif == false) {
        status.innerHTML = 'O valor é maior!';
        status.style.color = 'red';
        clear();
    } else if(numberDrawn < kick && verif == false) {
        status.innerHTML = 'O valor é menor!';
        status.style.color = 'red';
        clear();
    }
};

function playAgain() {
    document.getElementById('btnRestart'). style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};