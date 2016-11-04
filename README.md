Link to your hosted game in the URL section of your Github repo.
  -https://callmelife.github.io/tic-tac-toe/

List technologies used.
  -API
  -javascript
  -css
  -SCSS
  -JQuery
  -ajax
  -HTML
  -github
  -command line
  -grunt serve


Document your planning and tell a story about your development process and problem-solving strategy.
  -From the beginning I intended on using nested arrays. This type of object made the most sense to me
  because of the way that the tic-tac-toe boxes were divided into 3 seperate rows.

  Once I had the array's format established, I decided to create the function required to check for winners because I was still formulating
  the game's logic for placing values in the boxes and changing the value of the related array.
  Creating the checkForWinner function wasnt too difficult once I drew out the arrays on paper
  and figured out what combination of squares would result in a win.

  As I mentioned, I had a harder time figuring out how to  display each player's respective symbol and change the value of the array.
  With JQuery I was able to target each box, check to see if it still had it's default value of 'box', and if it did, I then knew that
  that box hadnt been clicked yet. After determining that the box hadnt been clicked yet, I used a counter variable and the % operator
  to determine which player should be assocaited with the odd / even clicks.

  At this point I was able to click through the game and see if either player won. After it was determined that a player had won, I
  used a css event-pointer to prevent the user from being able to change any box's values or continue playing after a winner had been declared.

  Next, I created a reset button to remove the text that displayed which player had won, remove the current value being displayed in each box, and
  reset the array's value back to the default so that users could play more games after clicking the reset button.

  Story about development: When constructing the API portion of the website I was having a lot of difficulties. Jason was able to push me in the right direction by instructing me to look in assets/scripts/auth/ui.js for what was missing. After looking through this page and the pages associated with it multiple times, I realized that the reason my API wasnt working was because I  didnt have all the code from class! I thought that the code I had
  wrote prior was impacting the API but in reality I just had to take a step back, evaluate the code that I did have, check to see what was missing
  and then move forwards from there by creating the 'signInSuccess', 'signOutSuccess', 'changePasswordSuccess', etc constants.


List unsolved problems which would be fixed in future iterations.
  -How to display more Ajax info such as the order of the moves in which they were makde.
  -How many games the user won, not how many were played
  -Playing with two users (what is this called? Jonathan was trying to implement it.
  -Adding media queries to dynamically change the website based on screen size.


Link to wireframes and user stories.
  - User storys: https://github.com/callmelife/game-project-scope-study/blob/response/study.md
  - Wireframe: http://imgur.com/8RCO5Yr
