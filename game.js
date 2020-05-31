// In real life scenario, we would probably create a class that would describe
// single card and operations that we can perform over it. In order to keep
// this simple, let's just outline a JSON structure that will be used to 
// describe every such card.
let exampleCard = {
    "id": 0,
    "type": "text", // Could be also "image" - for image cards
    "content": "random text",
    "face": "down", // ("up" when it is revealed by a player)
    "collected": false, // changes to true, when a player finds it
}

// Similarly, create a JSON describing a player.
let examplePlayer = {
    "id": 0,
    "name": "Player 1",
    "moves": 0,
    "collected": [], // an array of IDs that player has collected.
}

// An array of cards that are to be rendered into the page.
let cards = ["a","b","c"];

// An array of players that are playing the game
let players = [];
let currentPlayer = 0;


// TODO: Create a function to shuffle the card deck
let listIds=[];

function createIds(cards.length)
{
  for (let i = 0; i < cards.length*2; i++) {
  listIds.push(i);
  return(listIds);
    };

{
  function shuffle(listIds) {
    listIds.sort(() => Math.random() - 0.5);
    return(listIds);
  }


}

// TODO: Take imagelist and create card set based of that

function createCardSet(cards.length) {
  let cardSet = [];

  for (let j = 0; j < 2; j++) {   // Ensure PAIRS of cards are created
      for (let i = 0; i < cards.length; i++) {
          let idOffset = j == 0 ? 0 : cards.length;
          cardSet.push({
              "id": listIds[i] + idOffset,    // Quiz question: Why is there an ID offset?
              "type": "image",
              "content": cards[i],
              "face": "down",
              "collected": false
          });
      }
  }

  return cardSet;
}










// Optional TODO: Figure out how to represent player's turn 
//  Two approaches
//  - Keep a state of cards being turned in a turn by the player, or
//  - Iterate over the whole cards array and check for turned cards (but there's a catch!)
// Optional TODO: Follow-up with code for "game flow" based on player's turn outcome



function createPlayer(name) {
    return {
        "id": players.length,
        "name": name,
        "moves": 0,
        "collected": []
    }
}

function turnCard(card) {
    if (card.face == "down") {
        card.face = "up";
    } else {
        card.face = "down";
    }
}

function turnCardById(id) {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].id == id) {
            turnCard(cards[i]);
        }
    }
}

function collectCard(card) {
    // Search for a pair of cards with same content and collect both of them
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].content == card.content) {
            cards[i].collected = true;
        }
    }
    card.collected = true;
}

function nextTurn() {
    if (currentPlayer == players.length-1) {
        currentPlayer = players[0].id;
    } else {
        currentPlayer = currentPlayer+1;
    }
}
