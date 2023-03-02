const roundNumber = document.querySelector('.round-number');
const startButton = document.querySelector('.start');
const nextButton = document.querySelector('.next');

let letterButtons = document.querySelectorAll('.button');
const noteImage = document.querySelector('.note-images');
// noteImage.src = randomNote(arrayOfNotes);

const buttonA = document.querySelector('#a');
const buttonB = document.querySelector('#b');
const buttonC = document.querySelector('#c');
const buttonD = document.querySelector('#d');
const buttonE = document.querySelector('#e');
const buttonF = document.querySelector('#f');
const buttonG = document.querySelector('#g');

const currentScore = document.querySelector('.score');
const answerResponse = document.querySelector('.answer');

let arrayOfNotes = [];
arrayOfNotes.push('https://i.imgur.com/qfvIYj2.jpg', 'https://i.imgur.com/36HTzZP.jpg', 'https://i.imgur.com/spOtQVI.jpg', 'https://i.imgur.com/o6ipQUI.jpg', 'https://i.imgur.com/VF6Kc7i.jpg', 'https://i.imgur.com/vW8lh5l.jpg', 'https://i.imgur.com/23ZBz50.jpg', 'https://i.imgur.com/60DSSB1.jpg', 'https://i.imgur.com/YT4t0F9.jpg', 'https://i.imgur.com/In8nmPM.jpg', 'https://i.imgur.com/xeKCCvw.jpg', 'https://i.imgur.com/9llqpfY.jpg', 'https://i.imgur.com/zjzqsGF.jpg');

function randomNote(arrayOfNotes) {
    return arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)];
};
// console.log(randomNote(arrayOfNotes));

// document.getElementById("imageid").src="function output here";

function changeNoteImage() {
    document.getElementById("note-images").src=randomNote(arrayOfNotes);
    // return noteImage.src;
}

const answerA = (arrayOfNotes[5], arrayOfNotes[12]);
const answerB = arrayOfNotes[6];
const answerC = (arrayOfNotes[0], arrayOfNotes[7]);
const answerD = (arrayOfNotes[1], arrayOfNotes[8]);
const answerE = (arrayOfNotes[2], arrayOfNotes[9]);
const answerF = (arrayOfNotes[3], arrayOfNotes[10]);
const answerG = (arrayOfNotes[4], arrayOfNotes[11]);

let correctAnswers = 0;
function checkAnswer() {
    if(buttonA == answerA) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonB == answerB) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonC == answerC) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonD == answerD) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonE == answerE) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonF == answerF) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonG == answerG) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    } 
    else {
        answerResponse.innerHTML = "Rats! Missed it this time!"
    }
    changeNoteImage();
};

    
let rounds = 0;
function startNewGame() {
    rounds = 1;
    roundNumber.innerHTML = `Round ${rounds}`;
    currentScore.innerHTML = "Current Score 0 out of 10";
    answerResponse.innerHTML = "";
    changeNoteImage();
};

function startNewRound() {
    rounds++;
    roundNumber.innerHTML = `Round ${rounds}`;
    currentScore.innerHTML = "Current Score 0 out of 10";
    answerResponse.innerHTML = "";
    changeNoteImage();
}

startButton.addEventListener('click', startNewGame);
nextButton.addEventListener('click', startNewRound);
buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);
buttonD.addEventListener('click', checkAnswer);
buttonE.addEventListener('click', checkAnswer);
buttonF.addEventListener('click', checkAnswer);
buttonG.addEventListener('click', checkAnswer);

// on click of letter button, the answer should register Correct or Incorrect, the score should update, and the image should change to another random note image.

// console.log(arrayOfNotes);
// console.log(arrayOfNotes[0], arrayOfNotes[6]);

// let answerA = (arrayOfNotes[5] || arrayOfNotes[12]);
// console.log(answerA);