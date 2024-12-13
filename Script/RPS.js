

const rps = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay"); 
const computerDisplay = document.getElementById("computerDisplay"); 
const resultDisplay = document.getElementById("resultDisplay"); 

function playGame(playerChoice){
    const computerChoice = rps[Math.floor(Math.random() * 3)];
    let result="";

    if(playerChoice === computerChoice){
        result ="IT's A TIE";
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissor":
                result = (computerChoice === "paper") ?"YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = "PLAYER: " + playerChoice;
    computerDisplay.textContent = "COMPUTER: " + computerChoice;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("gt", "rt")

    switch(result){
        case "YOU WIN" :
            resultDisplay.classList.add("gt");
            break;
        case "YOU LOSE" :
            resultDisplay.classList.add("rt");
            break;
    }
}














































// const rps = ["rock", "paper", "scissor"];
// const playerDisplay = document.getElementsByClassName("playerDisplay");
// const computerDisplay = document.getElementsByClassName("computerDisplay");
// const resultDisplay = document.getElementsByClassName("resultDisplay");


// function playGame(playerChoice){
//     const computerChoice = rps[Math.floor(Math.random() * 3)];
//     let result="";

//     if(playerChoice === computerChoice){
//         result ="IT's A TIE";
//     }
//     else
//     {
//         switch(playerChoice){
//             case "rock":
//                 result = (computerChoice === "scissor") ? "YOU WIN" : "YOU LOSE";
//                 break;
//             case "paper":
//                 result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
//                 break;
//             case "scissor":
//                 result = (computerChoice === "paper") ?"YOU WIN" : "YOU LOSE";
//                 break;
//         }
//     }

// }

// playerDisplay.textcontent = `PLAYER: ${playerChoice}`;
// computerDisplay.textcontent = `computer: ${computerChoice}`;
// resultDisplay.textcontent =  result;
