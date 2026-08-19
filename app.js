let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//Generate computer choice//
const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];

}
const drawGame = () => {
    console.log("The game is draw");
    msg.innerText = "Game DRAW";
    msg.style.backgroundColor = " #081b31";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore ++ ;
        userScorePara.innerText = userScore;
        msg.innerText = "You WIN!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore ++ ;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lost";
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice=", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"  ? false: true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});