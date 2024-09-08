// Selecting Inputs
const inputX = document.querySelector('#x');
const inputO = document.querySelector('#o');

//Selecting Labels
const labelX = document.querySelector('label[for="x"]');
const labelO = document.querySelector('label[for="o"]');

//Selecting container
const scoreCard = document.querySelector('#scoreCard');
const choice = document.querySelector('#Choice');

// Selecting Boxes
const boxes = document.querySelectorAll('#box');

//Selecting Boxes
const box1 = document.querySelector('#box[name="1"]')
const box2 = document.querySelector('#box[name="2"]')
const box3 = document.querySelector('#box[name="3"]')
const box4 = document.querySelector('#box[name="4"]')
const box5 = document.querySelector('#box[name="5"]')
const box6 = document.querySelector('#box[name="6"]')
const box7 = document.querySelector('#box[name="7"]')
const box8 = document.querySelector('#box[name="8"]')
const box9 = document.querySelector('#box[name="9"]')

// Selecting Buttons
const startBtn = document.querySelector('#startBtn');
const replayBtn = document.querySelector('#replayBtn');
const restartBtn = document.querySelector('#restartBtn');

// Selecting Score Element
const scoreX = document.querySelector('#scoreX');
const scoreO = document.querySelector('#scoreO');
const scoreMsg = document.querySelector('#scoreMsg');

//Creating own variables
const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
var player = 'X';
var computer = 'O';
var scoreXvalue = 0;
var scoreOvalue = 0;
let boxClicked = 0;
let turnO = true;

//Main logic code starts from line number - 

// Function to clear innerText of individual boxes
function clearBoxText() {
    for (let box of boxes) {
        box.innerText = '';
        box.style.opacity = '1';
    }
}

//Function to create boxDefaultSetting
function boxDefaultSetting() {
    box1.style.color = 'rgba(0, 0, 0, 1)';
    box1.innerText = 'X';
    box2.style.color = 'rgba(0, 0, 0,0.5)';
    box2.innerText = 'O';
    box3.style.color = 'rgba(0, 0, 0,0.5)';
    box3.innerText = 'O';
    box4.style.color = 'rgba(0, 0, 0,0.5)';
    box4.innerText = 'O';
    box5.style.color = 'rgba(0, 0, 0,1)';
    box5.innerText = 'X';
    box6.style.color = 'rgba(0, 0, 0,0.5)';
    box6.innerText = 'O';
    box7.style.color = 'rgba(0, 0, 0,0.5)';
    box7.innerText = 'X';
    box8.style.color = 'rgba(0, 0, 0,0.5)';
    box8.innerText = 'O';
    box9.style.color = 'rgba(0, 0, 0,1)';
    box9.innerText = 'X';
}

//Function to clear scoreMsg
function clearScoreMsg() {
    scoreMsg.style.opacity = '0';
}

//Initially Displaying none to scoreCard
scoreCard.style.display = 'none';


//All EventListener
//EventListener to labelX
labelX.addEventListener('click', () => {
    if (inputX.checked && !(inputO.checked)) {
        labelX.style.borderBottomColor = 'white';
        labelO.style.borderBottomColor = '';
        player = 'X';
        computer = 'O';
    }
})
//EventListner to labelO
labelO.addEventListener('click', () => {
    if (inputO.checked && !(inputX.checked)) {
        labelO.style.borderBottomColor = 'white';
        labelX.style.borderBottomColor = '';
        player = 'O';
        computer = 'X';
    }
})
//Eventlistner to startBtn
startBtn.addEventListener('click', () => {
    if (!(inputX.checked) && !(inputO.checked)) {
        alert('Please Select player');
    }
    else {
        console.log('player choose : ', player);
        console.log('computer choose : ', computer);
        scoreX.innerText = `score x : ${scoreXvalue}`;
        scoreO.innerText = `score o : ${scoreOvalue}`;
        choice.style.display = 'none';
        scoreCard.style.display = 'flex';
        scoreMsg.style.opacity = '0';
        boxes.forEach((box) => {
            box.style.color = 'rgba(0, 0, 0,1)';
        })
        clearBoxText();
        clearScoreMsg();
    }
})

//EventListener to replayBtn
replayBtn.addEventListener('click', () => {
    clearBoxText();
    clearScoreMsg();
    boxes.forEach((box) => {
        box.style.color = 'rgba(0, 0, 0,1)';
    })
    boxClicked = 0;
})

//EventListener to restartBtn
restartBtn.addEventListener('click', () => {
    scoreXvalue = 0;
    scoreOvalue = 0;
    inputO.checked = false;
    inputX.checked = false;
    scoreX.innerText = `score x : ${scoreXvalue}`;
    scoreO.innerText = `score o : ${scoreOvalue}`;
    labelX.style.borderBottomColor = '';
    labelO.style.borderBottomColor = '';
    scoreMsg.style.opacity = '0';
    choice.style.display = 'flex';
    scoreCard.style.display = 'none';
    boxClicked = 0;
    boxDefaultSetting();
})


//Main logic code

//display of the boxes when winner is anounced
function winDisplay(num1, num2, num3) {
    for (let box of boxes) {
        box.style.color = 'rgba(0, 0, 0,0.5)';
    }
    boxes[num1].style.color = 'rgba(0, 0, 0,1)';
    boxes[num2].style.color = 'rgba(0, 0, 0,1)';
    boxes[num3].style.color = 'rgba(0, 0, 0,1)';
}

//Check Winner
function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log(`winner is : ${pos1Val}`);
                if (pos1Val === 'X') {
                    scoreXvalue++;
                    scoreX.innerText = `score x : ${scoreXvalue}`;
                    scoreO.innerText = `score o : ${scoreOvalue}`;
                }
                if (pos1Val === 'O') {
                    scoreOvalue++;
                    scoreX.innerText = `score x : ${scoreXvalue}`;
                    scoreO.innerText = `score o : ${scoreOvalue}`;
                }
                scoreMsg.innerText = `${pos1Val} is winner`;
                scoreMsg.style.opacity = '1';
                boxClicked = 0;
                winDisplay(pattern[0], pattern[1], pattern[2]);
                return true;
            }
        }
    }
    return false;
}

//Draw Math
function draw() {
    scoreMsg.innerText = 'Math Draw';
    scoreMsg.style.opacity = '1';
    boxClicked = 0;
}
//Adding eventlistener to each boxes
boxes.forEach((box) => {
    box.addEventListener('click', () => {       //For each boxes adiing eventLisener
        if (choice.style.display == 'none') {   //Making box clickable only when startBtn is clicked
            let winner = checkWinner();         //Checking winner each time box is clicked
            if (!winner) {
                if (box.innerText == '') {          //Making box clickable only once

                    boxClicked++;                   //Increasing boxClicking frequency when box is clicked
                    if (boxClicked == 9 && !winner) {
                        draw();
                    }

                    if (turnO) {
                        box.innerText = 'O';
                        turnO = false;
                    }
                    else {
                        box.innerText = 'X';
                        turnO = true;
                    }

                }
            }

        }
    })
})