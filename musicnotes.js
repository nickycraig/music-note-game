const roundNumber = document.querySelector('.round-number');
const startButton = document.querySelector('.start');
const nextButton = document.querySelector('.next');
const previousScore = document.querySelector('.previous-round');

const letterButtons = document.querySelectorAll('.button');
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

function changeNoteImage() {
    document.getElementById("note-images").src=randomNote(arrayOfNotes);
};

const answerA = [arrayOfNotes[5], arrayOfNotes[12]];
const answerB = [arrayOfNotes[6]];
const answerC = [arrayOfNotes[0], arrayOfNotes[7]];
const answerD = [arrayOfNotes[1], arrayOfNotes[8]];
const answerE = [arrayOfNotes[2], arrayOfNotes[9]];
const answerF = [arrayOfNotes[3], arrayOfNotes[10]];
const answerG = [arrayOfNotes[4], arrayOfNotes[11]];

// let turns = 0;
// let correctAnswers = 0;
// function checkAnswer() {
//     checkAnswer();
//     turns++;

//     // if(turns < 10) {
//     //     // checkAnswer();
//     //     // turns++;
//     //     noteCounter.innerHTML = `Mystery Note ${turns}`;
//     // }
//     // if(turns >= 10) {
//     //     // checkAnswer();
//     //     noteCounter.innerHTML = `Mystery Note ${turns}`;
//     //     roundNumber.innerHTML = `End of Round ${rounds}!`;
//     //     appendScoreTotals();
//     // }
//     changeNoteImage();
// };

let turns = 0;
let correctAnswers = 0;
function checkAnswer() {
    const selectedNote = this.innerText;
    // console.log(selectedNote);
    if(selectedNote === "A") {
        // console.log(document.getElementById("note-images").src);
        // console.log(answerA.includes(document.getElementById("note-images").src));
        if(answerA.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns - 1}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "B") {
        if(answerB.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns - 1}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "C") {
        if(answerC.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "D") {
        if(answerD.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if (selectedNote === "E") {
        if(answerE.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "F") {
        if(answerF.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "G") {
        if(answerG.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            turns++;
            noteCounter.innerHTML = `Mystery Note ${turns}`;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of ${turns - 1}`;
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
    turns = 1;
    noteCounter.innerHTML = "Mystery Note 1";
    roundNumber.innerHTML = `Round ${rounds}`;
    currentScore.innerHTML = "Current Score";
    answerResponse.innerHTML = "";
    changeNoteImage();
    correctAnswers = 0;
};

function startNewRound() {
    let previousScoreTotal = document.createElement('li');
    previousScoreTotal.innerHTML = `Round ${rounds}: ${correctAnswers} out of ${turns - 1}`;
    previousScoreTotal.classList.add('previous-round');
    listOfTotals.appendChild(previousScoreTotal);
    // previousScore.innerHTML = `Round ${rounds}: ${correctAnswers} out of ${turns - 1}`;
    rounds++;
    turns = 1;
    noteCounter.innerHTML = "Mystery Note 1";
    roundNumber.innerHTML = `Round ${rounds}`;
    currentScore.innerHTML = "Current Score";
    answerResponse.innerHTML = "";
    changeNoteImage();
    correctAnswers = 0;
}

// function appendScoreTotals() {
//     let newTotalLi = document.createElement('li');
//     // console.log(newTotalLi);
//     newTotalLi.innerHTML = `Round ${rounds}: ${correctAnswers} out of ${turns}`;
//     newTotalLi.classList.add('new-total');
//     listOfTotals.appendChild(newTotalLi);
// };

startButton.addEventListener('click', startNewGame);
nextButton.addEventListener('click', startNewRound);
buttonA.addEventListener('click', checkAnswer);
buttonB.addEventListener('click', checkAnswer);
buttonC.addEventListener('click', checkAnswer);
buttonD.addEventListener('click', checkAnswer);
buttonE.addEventListener('click', checkAnswer);
buttonF.addEventListener('click', checkAnswer);
buttonG.addEventListener('click', checkAnswer);


