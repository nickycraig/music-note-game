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

// const buttonA = document.getElementById('a').src=('https://i.imgur.com/vW8lh5l.jpg', 'https://i.imgur.com/zjzqsGF.jpg');
// const buttonB = document.getElementById('b').src='https://i.imgur.com/23ZBz50.jpg'
// const buttonC = document.getElementById('c').src=('https://i.imgur.com/qfvIYj2.jpg', 'https://i.imgur.com/60DSSB1.jpg');
// const buttonD = document.getElementById('d').src=('https://i.imgur.com/36HTzZP.jpg', 'https://i.imgur.com/YT4t0F9.jpg');
// const buttonE = document.getElementById('e').src=('https://i.imgur.com/spOtQVI.jpg', 'https://i.imgur.com/In8nmPM.jpg');
// const buttonF = document.getElementById('f').src=('https://i.imgur.com/o6ipQUI.jpg', 'https://i.imgur.com/xeKCCvw.jpg');
// const buttonG = document.getElementById('g').src=('https://i.imgur.com/VF6Kc7i.jpg', 'https://i.imgur.com/9llqpfY.jpg');

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
};

const answerA = [arrayOfNotes[5], arrayOfNotes[12]];
const answerB = [arrayOfNotes[6]];
const answerC = [arrayOfNotes[0], arrayOfNotes[7]];
const answerD = [arrayOfNotes[1], arrayOfNotes[8]];
const answerE = [arrayOfNotes[2], arrayOfNotes[9]];
const answerF = [arrayOfNotes[3], arrayOfNotes[10]];
const answerG = [arrayOfNotes[4], arrayOfNotes[11]];

let correctAnswers = 0;
function checkAnswer() {
    const selectedNote = this.innerText;
    // console.log(selectedNote);
    if(selectedNote === "A") {
        // console.log(document.getElementById("note-images").src);
        // console.log(answerA.includes(document.getElementById("note-images").src));
        if(answerA.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "B") {
        if(answerB.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "C") {
        if(answerC.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "D") {
        if(answerD.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if (selectedNote === "E") {
        if(answerE.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "F") {
        if(answerF.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
            answerResponse.innerHTML = "Rats! Missed it this time!"
        }
    }
    if(selectedNote === "G") {
        if(answerG.includes(document.getElementById("note-images").src)) {
            correctAnswers++;
            currentScore.innerHTML = `Current Score: ${correctAnswers} out of 10`;
            answerResponse.innerHTML = "Answer: Correct!"
        } 
        else {
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

// I need to add something that makes the round end at 10 slides. Create a scoreboard or something to log the score of each round and the slide changes to 

// console.log(arrayOfNotes);
// console.log(arrayOfNotes[0], arrayOfNotes[6]);

// let answerA = (arrayOfNotes[5] || arrayOfNotes[12]);
// console.log(answerA);