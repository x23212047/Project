//Array to store game statistics
let gameList = [];
let wins = 0; //track of users wins
let gamesPlayed = 0; //track the games played
let userGuesses = []; //rray to store user guesses

//Function to add a game to the list
function addGame(event) {
    event.preventDefault();

    let gameName = document.getElementById('gameName').value;
    let gameDuration = document.getElementById('gameDuration').value;

    let game = {
        name: gameName,
        duration: gameDuration,
    };

    gameList.push(game);

    console.log(gameList);
}

//Event listener for the form submission
document.getElementById('addGameForm').addEventListener('submit', addGame);

//Function to view game statistics
function viewStats() {
    let statsList = document.getElementById('statsList');

    statsList.innerHTML = '';

    for (let i = 0; i < gameList.length; i++) {
        let game = gameList[i];

        let gameDiv = document.createElement('div');
        gameDiv.textContent = `${game.name}: ${game.duration} minutes`;

        statsList.appendChild(gameDiv);
    }
}

//Event listener for viewing game statistics
document.getElementById('viewStatsLink').addEventListener('click', viewStats);

//Function to view player statistics
function viewPlayerStats() {
    let playerStatsList = document.getElementById('playerStatsList');

    playerStatsList.innerHTML = '';

    //Assuming you have a playerList array with player data
    for (let i = 0; i < playerList.length; i++) {
        let player = playerList[i];

        let playerDiv = document.createElement('div');
        playerDiv.textContent = `Player: ${player.name}, Score: ${player.score}`;

        playerStatsList.appendChild(playerDiv);
    }
}

//Event listener for viewing player statistics
document.getElementById('viewPlayerStatsLink').addEventListener('click', viewPlayerStats);

//Function for the Rock, Paper, Scissors game
function playGame(choice) {
    if (wins === 3) {
        //ogical operator to check if the user has won three times
        document.getElementById("result").textContent = "You've won three times in a row!";
        //exit the function to stop the game
        return;
    }

    const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    const result = getGameResult(choice, computerChoice);

    //User guesses
    userGuesses.push(`You chose ${choice}, the computer chose ${computerChoice}. ${result}`);

    //Check if the player has won three times in a row
    if (result === "You win!") {
        wins++;
    } else {
        wins = 0;
    }

    //Go up in ones for games to be played
    gamesPlayed++;

    //Game result to the user
    document.getElementById("result").textContent = `You chose ${choice}, the computer chose ${computerChoice}. ${result}`;

    //Check if game has been played 5 times
    if (gamesPlayed === 5) {
        displayUserGuesses();
    }
}

//Display user guesses when the game is played 5 times
function displayUserGuesses() {
    //Set the HTML element
    document.getElementById("result").textContent = "You've played 5 times. Here are your guesses:\n" + userGuesses.join("\n");
}

//Calculate the game result based on choices
function getGameResult(playerChoice, computerChoice) {
    //Check if player and computer choice is the same
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        //Check if player wins according to game rules
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        //If none of the conditions are met computer wins
        return "Computer wins!";
    }
}

//Event listener for playing the Rock, Paper, Scissors game
document.getElementById('playGameButton').addEventListener('click', function () {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    if (choice) {
        playGame(choice.toLowerCase());
    }
});

//DOM manipulation on load
document.addEventListener('DOMContentLoaded', function () {
    //Example of manipulating DOM
    document.querySelector('h1').style.color = '#ffcc00';
});
