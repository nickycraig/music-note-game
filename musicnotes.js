const roundNumber = document.querySelector('.round-number');
const startButton = document.querySelector('.start');
const nextButton = document.querySelector('.next');

let letterButtons = document.querySelectorAll('.button');
const noteImage = document.querySelector('.note-images');

const buttonA = document.querySelector('#a');
const buttonB = document.querySelector('#b');
const buttonC = document.querySelector('#c');
const buttonD = document.querySelector('#d');
const buttonE = document.querySelector('#e');
const buttonF = document.querySelector('#f');
const buttonG = document.querySelector('#g');

const currentScore = document.querySelector('.score');
const answerResponse = document.querySelector('.answer');
const noteCounter = document.querySelector('.note-counter');
const listOfTotals = document.querySelector('.totals');

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
};

const answerA = [arrayOfNotes[5], arrayOfNotes[12]];
const answerB = [arrayOfNotes[6]];
const answerC = [arrayOfNotes[0], arrayOfNotes[7]];
const answerD = [arrayOfNotes[1], arrayOfNotes[8]];
const answerE = [arrayOfNotes[2], arrayOfNotes[9]];
const answerF = [arrayOfNotes[3], arrayOfNotes[10]];
const answerG = [arrayOfNotes[4], arrayOfNotes[11]];

let turns = 1;
let correctAnswers = 0;
function checkAnswer() {
    const selectedNote = this.innerText;
    // console.log(selectedNote);
    if(selectedNote === "A" && turns < 10) {
        // console.log(document.getElementById("note-images").src);
        // console.log(answerA.includes(document.getElementById("note-images").src));
        if(answerA.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "B" && turns < 10) {
        if(answerB.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "C" && turns < 10) {
        if(answerC.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "D" && turns < 10) {
        if(answerD.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if (selectedNote === "E" && turns < 10) {
        if(answerE.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "F" && turns < 10) {
        if(answerF.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "G" && turns < 10) {
        if(answerG.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    } 
    // else {
    //     answerResponse.innerHTML = "Rats! Missed it this time!"
    // }
    changeNoteImage();
};
    
let rounds = 0;
function startNewGame() {
    rounds = 1;
    noteCounter.innerHTML = "Mystery Note 1";
    roundNumber.innerHTML = `Round ${rounds}`;
    currentScore.innerHTML = "Current Score 0 out of 10";
    answerResponse.innerHTML = "";
    changeNoteImage();
    correctAnswers = 0;
};

function startNewRound() {
    rounds++;
    roundNumber.innerHTML = `Round ${rounds}`;
    currentScore.innerHTML = "Current Score 0 out of 10";
    answerResponse.innerHTML = "";
    changeNoteImage();
    correctAnswers = 0;
}

function appendScoreTotals() {
    let newTotalLi = document.createElement('li');
    console.log(newTotalLi);
    newTotalLi.innerHTML = `Round ${rounds}: ${correctAnswers}`;
    newTotalLi.classList.add('new-total');
    listOfTotals.appendChild(newTotalLi);
};

let gamePlay = true;
// let roundLength = 0; 
// while(gamePlay) {
//     if(roundLength === arrayOfNotes.length - 3)
//     roundLength = false
//     appendScoreTotals()
//     startNewRound()
// };

// let gamePlay = true;
// for(let i = 0; i < arrayOfNotes.length; i++) {
//     if(i >= 10) {
//         gamePlay = false;
//     } appendScoreTotals ();
//     startNewRound();

// }

startButton.addEventListener('click', startNewGame);
nextButton.addEventListener('click', startNewRound);
buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);
buttonD.addEventListener('click', checkAnswer);
buttonE.addEventListener('click', checkAnswer);
buttonF.addEventListener('click', checkAnswer);
buttonG.addEventListener('click', checkAnswer);

// I need to add something that makes the round end at 10 slides. Create a scoreboard or something to log the score of each round and the slide changes to 

// console.log(arrayOfNotes);
// console.log(arrayOfNotes[0], arrayOfNotes[6]);

// let answerA = (arrayOfNotes[5] || arrayOfNotes[12]);
// console.log(answerA);