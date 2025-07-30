//Given a deck of cards

const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

export let deck = shuffleArray(suits.flatMap(suit =>
  values.map(value => ({ value, suit }))
));

const hairColors = ['brown', 'blonde', 'red', 'white'];
const eyeColors = ['blue', 'brown', 'green', 'hazel'];
const firstNames = ['Jim', 'John', 'Jane', 'Jenny', 'Eric', 'Sam'];
const lastNames = ['Smith', 'Doe', 'French', 'Wiess', 'Donnely', 'Jem'];

export const users = Array.from({ length: 100 }, () => ({
  name: `${lastNames[Math.floor(Math.random() * lastNames.length)]}, ${firstNames[Math.floor(Math.random() * firstNames.length)]}`,
  eyeColor: eyeColors[Math.floor(Math.random() * eyeColors.length)],
  hairColor: hairColors[Math.floor(Math.random() * hairColors.length)],
}));