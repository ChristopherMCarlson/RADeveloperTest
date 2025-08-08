import { deck, users } from "./setup.js";
function drawCards(deck, num) {
  if (num < 0) {
    throw new Error("Cannot draw a negative number of cards");
  }
  if (num > deck.length) {
    throw new Error("Not enough cards in the deck.");
  }
  let hand = [];
  let remainingDeck = [...deck];

  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * remainingDeck.length);
    let card = remainingDeck.splice(randomIndex, 1)[0];
    hand.push(card);
  }
  let remainingSuits = {};
  let remainingValues = {};
  remainingDeck.forEach((card) => {
    let { suit, value } = card;
    remainingSuits[suit] = (remainingSuits[suit] || 0) + 1;
    remainingValues[value] = (remainingValues[value] || 0) + 1;
  });
  return {
    hand,
    remainingSuits,
    remainingValues,
  };
}
console.log("DrawingCards Returned Output example:");
console.log(drawCards(deck, 5));

function deduplicateUsers(users) {
  let uniquekey = new Set();
  let uniqueelements = [];
  let dupeCount = 0;
  users.forEach((user) => {
    const key = JSON.stringify(user);
    if (!uniquekey.has(key)) {
      uniquekey.add(key);
      uniqueelements.push(key);
    } else {
      dupeCount++;
    }
  });
  return {
    returnUsers: uniqueelements.map((user) => JSON.parse(user)),
    dupeCount,
  };
}
console.log("Deduplicate Users Returned Output example:");
console.log(deduplicateUsers(users));

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// --------NON CODING CHALLENGE--------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

//Given a system that will allow users to create events that will be stored in a database
//And given that the database only allows searching by a single field
//And given that not all fields need to be viewable by a user
//How would you design a record object to allow you to search for events by multiple fields
//Given that you can control the object schema
//And given that all user editable fields are limited to numbers and letters
//NOTE: This question does not have a correct answer, it is a design question to see how you think about the problem

/*
Answer: Since the database can only search a single field, I’d create a search_key property that combines all visible, 
searchable fields into one string, for example event_name, location, and date into a single search_key field. 
Sensitive or hidden fields like description wouldn’t be included. 
This way, users can search across multiple criteria while I still query just one field.
Here is the example I refer to where the search_key is there:
  let event = {
    event_id: "12345", // hidden
    event_name: "Tech Conference", //shown and searchable
    location: "Idaho", //shown and searchable
    date: "2025-10-08", //shown and searchable
    description: "A conference about the latest in tech.", // hidden
    search_key: "Tech Conference Idaho 2025-10-08"
  };
*/
