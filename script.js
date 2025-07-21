 let userScore = 0;
 let comscore = 0;

 const choise = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor="#2ba998";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!")
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        comscore++;
        compScorePara.innerText = comscore;
        console.log("you Lose");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice)=>{
    console.log("user choise =",userChoice);
    //Generate computer choise -> modular
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
 
    if(userChoice === compChoice){
        //draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock"){
            //scissors, paper
            userWin = compChoice === "Paper"  ? false : true;
        }else if(userChoice === "Paper"){
            //rock , scissors
            userWin = compChoice === "Scissor" ? false :true;
        }else{
            // paper rock
            userWin = compChoice ==="Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

 choise.forEach((choise)=>{
    choise.addEventListener("click",()=>{
     const userChoice = choise.getAttribute("id");
     playGame(userChoice);
    });
 });