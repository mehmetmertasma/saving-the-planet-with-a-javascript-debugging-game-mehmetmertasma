const prompt = require("prompt-sync")(); // Used for player input in console

console.log('Welcome to the Climate Change Awareness Game!\n');

let score = 0;

// This function runs a decision scenario in the game
function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    // FIX: The loop should go through ALL options, not just the first one
    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }

    let playerAnswer = parseInt(prompt("Enter your choice (number): ")) - 1;

    // FIX: Logic was reversed — "!== correctAnswerIndex" was marked as correct
    if (playerAnswer === correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++; // FIX: increase score, not decrease
    } else {
        console.log(`Incorrect. The better choice would be: ${options[correctAnswerIndex]}`);
    }

    console.log(); // Add a blank line for better spacing
}

// Game Scenarios
decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1
);

decisionScenario(
    'You are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2
);

decisionScenario(
    'You want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    2
);

// OPTIONAL: You had duplicate questions with 4 options — remove or adjust if needed
decisionScenario(
    'How do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cook at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    3
);

console.log(`Game Over! Your total score is: ${score}. Thank you for playing.\n`);

