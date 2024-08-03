const choices = ["rock", "paper", "scissors"];
const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result");

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceText.textContent = `You chose: ${capitalize(userChoice)}`;
        computerChoiceText.textContent = `Computer chose: ${capitalize(computerChoice)}`;
        resultText.textContent = `Result: ${result}`;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
