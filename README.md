## Weekend Project 4
### Explorer Mode
- Create a constructor that builds objects representing generic playing cards. A playing card should keep track of its SUIT and VALUE
  - Ace, 2, 3, Jack, Queen, King

- Create a constructor that builds objects representing six sided dice. A die should keep track of the current VALUE (what side is up, a number between 1-6) and have a ROLL method that will simulate rolling the die. Rolling the die should change the current value of the die.

- Create a function called `getProbabilities`, that does not live on the constructor, that will simulate rolling two dice 1000 times. The function should return an array that shows the number of times the sum of the two die added up to 2,3,4,...12

```js
var result = getProbabilities();
console.log(result);
[
  30,
  55,
  80,
  110,
  140,
  170,
  140,
  110,
  80,
  55,
  30
]
```

- The results show that the number two (least possible sum) was rolled 30 times, the number 3 was rolled 55 times, the number 4 was rolled 80 times, etc

### Adventurer Mode
- create a constructor that represents an entire deck of cards. a `Deck` should contain exactly one of each possible card in a standard 52 deck, and should have a `shuffle` method that randomly re-arranges the order of the cards in the deck. It should also have a `draw` method that removes the card at the top of the deck and returns it.
