function computerPlay() {
    const random_num = Math.floor(Math.random()*100);
    if (random_num > 100*2/3) {
        return "rock";
    } else if (random_num > 100/3) {
        return "paper";
    } 
    return "scissor";
}

function checkOpinions($1, $2) {
    if ($1 == "paper" && $2 == "rock") {
        return "$1"; 
    } else if ($1 == "rock" && $2 == "scissor") {
        return "$1";
    } else if ($1 == "scissor" && $2 == "paper") {
        return "$1";
    } else if ($1 == $2) {
        return "tie";
    } else {
        return "$2";
    }
}

function playRound(playerSelection, computerSelection) {
    const player = checkOpinions(playerSelection,computerSelection);
    const computer = checkOpinions(computerSelection, playerSelection);
    if (player == computer) {
        return ["What!? Tie!? Oh... Okay...", "tie"];
    } if (player == "$1") {
        return [`Lucky! ${playerSelection} beats ${computerSelection}!`, "human"];
    }
    return [`Computer terminating your miserable choice, as everyone except! Ha! Don't you think your silly ${playerSelection} can beat the glorious ${computerSelection}, do you?`, "computer"];
}

function iWantToPlayAGame() {
    alert("You are not welcome!, Internet Traveller! You have trespassed my home and destroyed my serenity! I would destroy you. However, I'm not in a mood for exterminate humans. Thus, I want to play Rock-Scissor-Paper game! If thöü can beat me, I will make you free! (Anyway, sörry for my Türkish accent. Any delight?");
    let computerScore = 0;
    let humanScore = 0;
    while (computerScore < 5 && humanScore < 5)  {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Choice your weapon, hooman! P.S: You can use rock, paper or scissor if yöü want tö.");
        const round = playRound(playerSelection, computerSelection);

        if (round[1] == "human") {
            alert(round[0]);
            humanScore = humanScore += 1;
        } else if (round[1] == "computer") {
            alert(round[0]);
            computerScore = computerScore += 1;
        } else if (round[1] == "tie") {
            alert(round[0]);
        }

        alert(`Hooman: ${humanScore}\nComputer: ${computerScore}`);
    }
    if (computerScore >= 5) {
        alert("Ha! You're imprisioned! Wait... Is it a cat? Cat? Boncuk! Come over here, boncuk! (When computer distracted by cat, you run away.)");
    }
    if (humanScore >= 5) {
        alert("How? Can it be? Oha... Okay then... You're free! I would cry while eating my Urfa kebab.");
    }
}

iWantToPlayAGame();
