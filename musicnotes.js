const roundNumber = document.querySelector('.round-number');
const startButton = document.querySelector('.start');
const nextButton = document.querySelector('.next');

let letterButtons = document.querySelectorAll('.button');
let arrayOfNotes[i] = document.querySelector('.note-images');

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
    return arrayOfNotes[Math.floor(Math.random()*arrayOfNotes.length)];
};
// console.log(randomNote(arrayOfNotes));


let answerA = (arrayOfNotes[5], arrayOfNotes[12]);
let answerB = arrayOfNotes[6];
let answerC = (arrayOfNotes[0], arrayOfNotes[7]);
let answerD = (arrayOfNotes[1], arrayOfNotes[8]);
let answerE = (arrayOfNotes[2], arrayOfNotes[9]);
let answerF = (arrayOfNotes[3], arrayOfNotes[10]);
let answerG = (arrayOfNotes[4], arrayOfNotes[11]);

let correctAnswers = 0;
function checkAnswer() {
    if(buttonA === answerA) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonB === answerB) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonC === answerC) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonD === answerD) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonE === answerE) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonF === answerF) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    }
    if(buttonG === answerG) {
        correctAnswers++;
        currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
        answerResponse.innerHTML = "Answer: Correct!"
    } 
    else {
        answerResponse.innerHTML = "Rats! Missed it this time!"
    }
    randomNote(arrayOfNotes);
};

function startNewGame() {
    currentScore.innerHTML = "Current Score 0 out of 10";
    answerResponse.innerHTML = "";
    randomNote(arrayOfNotes);
};



// on click of letter button, the answer should register Correct or Incorrect, the score should update, and the image should change to another random note image.

// console.log(arrayOfNotes);
// console.log(arrayOfNotes[0], arrayOfNotes[6]);

// let answerA = (arrayOfNotes[5] || arrayOfNotes[12]);
// console.log(answerA);