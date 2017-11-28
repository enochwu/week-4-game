Homework Pseudocode

Elements (by div)
  1. HTML Jumbo
      - <h1> Gem Gamble
  2. Instruction dropdown
      - <h2> How to play
      - <p> You are given a random budget to spend on gems.
      Below is a selection of gems you can buy, each with a randomly assigned price that is hidden.
      Click on a gem to reveal the cost and add it to your basket.
      As you continue to click on gems, the price of your basket will increase.
      Use all of the money to fill up your basket,
      but beware, going over budget will result in buyers remorse!
  3. Budget
  4. Win/Loss counter
  5. 4 Gems
  6. Basket

Pseudo code
  1. Document loaded
  2. Random budget loads as a value
      - var Budget = mathRandom stuff
  3. Random prices load for gems.
      - Gems are objects
      - Value not displayed, but placed in a value (price), a property of the object.
  3. User selects a gem, selects an object which is the gem.
  4. Value of gem is added to the sum in the basket.
      - var Basket = object(this).price + object(this).price?
  5. Game restarts.
      - Randomly generate new var Budget
      - Randomly generate new values for price properties of gem objects.

      - Reset var Basket

  -------------------------------------

  To Do list:
  1. Adjust layout at different window sizes.
  2. Fine tune look of game.
  3. Check on a why the last sum is not loading before reset.
