let bt1 = document.getElementById('rock');
let bt2 = document.getElementById('paper');
let bt3 = document.getElementById('scissor');
let res = document.getElementById('result');
let cs = document.getElementById('c-score');
let ps = document.getElementById('p-score');

pScore = 0;
cScore = 0;

var comp = document.getElementById('c-select');
var pl = document.getElementById('p-select');


bt1.onclick = function() {
    playerSelection = selection[0];
    play();
};

bt2.onclick = function() {
    playerSelection = selection[1];
    play();
};


let playerSelection;

bt3.addEventListener('click', function() {
    playerSelection = selection[2];
    play();
})

var selection = ["rock", "paper", "scissor"];


function play() {
    let computerSelection;
    computerSelection = computerPlay();
    

    function computerPlay() {
        var items = ['rock', 'paper', 'scissor']
        return items[Math.floor(Math.random()*items.length)];
    };
    function playRound(playerSelection, computerSelection) {
        if ( playerSelection === "rock" && computerSelection === "rock") {
            res.innerText = "Draw!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            res.innerText = "You Lose! Paper beats Rock";
            cs.innerText = cScore ++;
        } else if (playerSelection === "rock" && computerSelection === "scissor") {
            res.innerText = "You Win! Paper beats Rock";
            ps.innerText = pScore ++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            res.innerText = "You Lose! Paper beats Rock";
            ps.innerText = pScore ++;
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            res.innerText = "Draw";
        }else if (playerSelection === "paper" && computerSelection === "scissor") {
            res.innerText = "Scissor beats paper";
            cs.innerText = cScore ++;
        } else if (playerSelection === "scissor" && computerSelection === "rock") {
            res.innerText = "Rock beats scissor";
            cs.innerText = cScore ++;
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            res.innerText = "Scissor beats paper";
            ps.innerText = pScore ++;
        } else if (playerSelection === "scissor" && computerSelection === "scissor") {
            res.innerText = "Draw";
        }
        comp.innerText = computerSelection;
        pl.innerText = playerSelection;
        if (pScore > 5 && cScore < 5) {
            alert("Hurray you won the match!");
            location.reload();
        } else if (cScore > 5 && pScore < 5){
            alert("Try again next time!");
            location.reload();
        }
    }
    playRound(playerSelection, computerSelection)
}
