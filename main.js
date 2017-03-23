//------------------Playing Cards---------------------
// - Create a constructor that builds objects representing generic playing cards. A playing card should keep track of its SUIT and VALUE
//   - Ace, 2, 3, Jack, Queen, King
// suit: spades, hearts, diamonds, clubs

function Cards(cardSuit, val){
  'use strict';
  this.suit = cardSuit;
  this.value = val;
  this.cardName = val + " of " + cardSuit;
}

var card1 = new Cards('hearts', 5);
var card2 = new Cards('diamonds', 5);
var card3 = new Cards('clubs', 'King');
var card4 = new Cards('spades', 'Ace');
var cardBonus = new Cards('Spade', 'David');



//------------Six Sided Dice---------------
// Create a constructor that builds objects representing six sided dice. A die should keep track of the current VALUE (what side is up, a number between 1-6) and have a ROLL method that will simulate rolling the die. Rolling the die should change the current value of the die.



// function roll(){
//   return Math.ceil(Math.random()*6);
// }

function SixSidedDice(){
    'use strict';
    this.roll = function(){
      var randomValue = Math.ceil(Math.random()*6);
      this.side = randomValue;
      return this.side;
    }
}

var diceRoll = new SixSidedDice();
var diceRoll2 = new SixSidedDice();
//diceRoll.roll(); should give me a diff num each times

//------------Get Probabilities------------
// Create a function called getProbabilities, that does not live on the constructor, that will simulate rolling two dice 1000 times. The function should return an array that shows the number of times the sum of the two die added up to 2,3,4,...12



var result = function getProbabilities(){
  function diceSum(){
    var sum = diceRoll.roll() + diceRoll2.roll();
    return sum;
  };
  var trackSum = [];
  for (var i = 1; i <= 1000; i++) {
    trackSum.push(diceSum());
  };
  var countedSum = trackSum.reduce(function(emptyObj, sum, i, arr){
      if (sum in emptyObj){
        emptyObj[sum]++
      } else {
        emptyObj[sum] = 1
      }
      return emptyObj;
    }, {});
  // return countedSum;
  return Object.values(countedSum);
};

//---------------Adventurer Mode------------
// create a constructor that represents an entire deck of cards. a Deck should contain exactly one of each possible card in a standard 52 deck, and should have a shuffle method that randomly re-arranges the order of the cards in the deck. It should also have a draw method that removes the card at the top of the deck and returns it.

var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
// function Cards(cardSuit, val){
//   'use strict';
//   this.suit = cardSuit;
//   this.value = val;
//   this.cardName = val + " of " + cardSuit;
// }

function Deck (){
  'use strict';
  var deckArray = []
  suits.forEach(function(suitItem, i, arr){
      values.forEach(function(valItem, i, arr){
        var singleCard = valItem + " of " +suitItem  ;
        deckArray.push(singleCard);
      })
    })
  this.deckOfCards = deckArray;
  this.shuffle = function(){
    var mapIt = deckArray.map(function(card, i, arr){
      var newIndex =  Math.ceil(Math.random()*51);
      return arr[newIndex];
    })
    return mapIt;
    // var reduceIt = deckArray.reduce(function(emptyArr, card, i, arr){
    //   var newIndex =  Math.ceil(Math.random()*52);
    //   var shuffledArr = arr[newIndex];
    //   emptyArr.push(shuffledArr);
    // },[] )
    // return reduceIt;

  }
  this.draw = function() {
    var newIndex =  Math.ceil(Math.random()*51);
    return deckArray[newIndex]
  }
}


var newDeck = new Deck();
