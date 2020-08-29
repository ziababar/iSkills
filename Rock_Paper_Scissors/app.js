const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementbyId("r");
const paper_div = document.getElementbyId("p");
const scissors_div = document.getElementbyId("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);    
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    document.getElementbyId(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementbyId(userChoice).classList.remove('green-glow')});
}

function lose(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose!`;
    document.getElementbyId(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementbyId(userChoice).classList.remove('red-glow')});
}

function draw(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws ${convertToWord(computerChoice)}${smallCompWord}. Draw!`;
    document.getElementbyId(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementbyId(userChoice).classList.remove('gray-glow')});
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice => " + userChoice);
    console.log("computer choice => " + computerChoice);
    
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
            
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventLister('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();