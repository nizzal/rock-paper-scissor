function game() {
    for (let i = 1; i <= 5; i++) {
        function playRound(playerSelection, computerSelection) {
            if ( playerSelection == "rock" && computerSelection == "rock") {
                // console.log("Draw!")
                return "Draw"
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                // console.log("You Lose! Paper beats Rock")
                return "You Lose! Paper beats Rock"
            } else if (playerSelection == "rock" && computerSelection == "scissor") {
                // console.log("You Win! Paper beats Rock")
                return "You Win! Paper beats Rock";
            } 
        }
        function computerPlay() {
            var items = ['rock', 'paper', 'scissor']
            return items[Math.floor(Math.random()*items.length)];
        }
    
        // const playerSelection = prompt("Enter your plays!");
        const playerSelection = "rock";
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log( "Player chose: " +playerSelection, "and Computer chose: " + computerSelection)
        console.log("----------------------------------------------------------")
        playRound();
    }
    

    
}


game();



// function playRound(playerSelection, computerSelection) {
//     if ( playerSelection == "rock" && computerSelection == "rock") {
//         // console.log("Draw!")
//         return "Draw"
//     } else if (playerSelection == "rock" && computerSelection == "paper") {
//         // console.log("You Lose! Paper beats Rock")
//         return "You Lose! Paper beats Rock"
//     } else if (playerSelection == "rock" && computerSelection == "scissor") {
//         // console.log("You Win! Paper beats Rock")
//         return "You Win! Paper beats Rock";
//     } 
// }
