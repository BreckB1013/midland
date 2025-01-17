const player = {};

player.name = prompt("Welcome to the adventure! What is your name?");
alert(`Greetings, ${player.name}! Your journey begins now.`);

let validClass = false;

while (!validClass) {
  player.class = prompt("Choose your class: 🥷Warrior or Rogue😈").toLowerCase();

  if (player.class === "warrior" || player.class === "rogue") {
    validClass = true;
  } else {
    alert("Invalid entry. Please choose either Warrior or Rogue.");
  }
}
alert(`Excellent choice, ${player.name} the ${player.class}!`);

const riverChoice = prompt(`${player.name} the ${player.class}, you come across a river.🏞️ Would you like to 🏊🏼"swim" across or 💵"pay" for a ferry?`).toLowerCase();
player.riverChoice = riverChoice;

const forestChoice = prompt(`${player.name} the ${player.class}, you enter a dark forest. Do you 🥷"sneak" through the shadows or 🤺"fight" the monsters?`).toLowerCase();
player.forestChoice = forestChoice;

const chestChoice = prompt(`${player.name} the ${player.class}, you find a treasure chest.🏴‍☠️ Do you "open" it or "ignore" it?`).toLowerCase();
player.chestChoice = chestChoice;

const dragonChoice = prompt(`${player.name} the ${player.class}, you encounter a fearsome dragon.🐉 Do you "fight" the dragon or "run" away?`).toLowerCase();
player.dragonChoice = dragonChoice;

const portalChoice = prompt(`${player.name} the ${player.class}, you find a magical portal.🪄 Do you "enter" it or "avoid" it?`).toLowerCase();
player.portalChoice = portalChoice;

alert(`Your adventure, ${player.name} the ${player.class}, has come to an end! Here’s your story:
1. At the river, you chose to ${player.riverChoice}.
2. In the dark forest, you chose to ${player.forestChoice}.
3. When you found the treasure chest, you chose to ${player.chestChoice}.
4. When facing the dragon, you chose to ${player.dragonChoice}.
5. At the magical portal, you chose to ${player.portalChoice}.
Thank you for playing!`);