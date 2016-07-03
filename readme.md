# Garden Friend



Concept:

-pick crops from a plot of land (the screen) by clicking on the crop
-each type of crop will be assigned a certain number of clicks (1-4) in order to be cleared
-objective is to clear as many crops as you can before the time runs out (1 min)

-each crop has its own value when cleared:
  -avocado: 1 click - 1 pt
  -cabbage: 2 click - 2 pts
  -carrot:  3 click - 3 pts
  -potato: 4 click - 4 pts

- if you pick a vegetable and a Gopher appears, -2 pts.
- player 1 goes first, next game switches to player 2
- player with the highest score wins

Design:

-one plot of land (background)
-10 rows, 10 colums of randomized vegetables
-when veggie is clicked, object fades
-start button: initializes clock, and countsdown 1 minute
-score board: displays total number of points as veggies are cleared
