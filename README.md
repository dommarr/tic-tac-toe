[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic Tac Toe

A SPA of the classic game, built by `Dom Marrone`.

## Technologies

1. `JavaScript`
2. `HTML`
3. `CSS`
4. `SaSS`
5. `Bootstrap`
5. `jQuery`
6. `AJAX`

## Planning

### Project Requirements

#### Deployment

Be deployed online, where the rest of the world can access it.

[x] Deploy on your public Github page, not Github Enterprise.
[x] Present a working browser game, built by you, hosted and deployed on GitHub Pages.

#### Version Control

Demonstrate using version control by:

[x] Sharing your work through a git repository hosted on Github.
[x] Making frequent, cohesive commits dating back to the **first day**
of the project week.

#### Documentation

Produce documentation in the form of a **README**, which must:

[x] Pin your repository on GitHub as a Popular Repository
[x] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
[x] List technologies used
[x] Document your planning and tell a story about your development process and problem-solving strategy.
[x] List unsolved problems which would be fixed in future iterations.
[x] Link to wireframes and user stories.

#### Technical Specifications

[x] Use a custom game engine written by you.
[x] Be a single-page application, no browser refresh.
[x] Render a game board in the browser.
[x] Switch turns between X and O (or whichever markers you select).
[x] Visually display which side won if a player gets three in a row or show a draw if neither wins.
[x] Support playing multiple games, one at a time.
[x] Use jQuery for DOM manipulation and event handling.
[x] Use AJAX for interacting with a provided API.

#### API Specifications

[x] Create new games on the server. (CREATE)
[x] Update a game by storing new moves. (UPDATE)
[x] Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
[x] Give feedback to the user after each action.

#### Auth Specifications

[x] Signup with email, password, and password confirmation.
[x] Login with email and password.
[x] Logout when logged in.
[x] Change password with current and new password.
[x] Signup and Signin must only be available to not signed in users.
[x] Logout and Change password must only be available to signed in users.
[x] Give feedback to the user after each action's success or failure.
[x] All forms must clear after submit success or failure

#### DO NOT!!

[x] Delete your repository at any time or start over.
[x] Rely on refreshing the page for any functionality.
[x] Have any user-facing bugs.
    -  [x] Display non-functional buttons, nor buttons that do not successfully complete a task.
    -  [x] Show actions at inappropriate times (example: sign out button when not signed in).
    -  [x] Forms not clearing at appropriate times (example: sign up form not clearing after success).
[x] Allow the same game to be played after a player has won or tied.
[x] Allow players to move in the same square more than once.
[x] Change players when an invalid move is made.
[x] Use alerts for anythalt texting.
[x] Display errors or warnings in the console.
[x] Display debugging messages in the console.

### Game Rules
1. The first player to play, `player 1`, will be randomly assigned.
2. `player 1` picks a square to lay down an `X`.
3. `player 2` picks a square to lay down an `O`.
  1. `player 2` cannot select an already filled square.
  2. If `player 2` selects an unavailable square, throw an error and ask them the try again.
4. `player 1` goes again and picks an available square to lay down an `X`.
  1. The player is attempting to secure three squares in a row.
5. Steps 2-4 will repeat until 3 squares in a row have either an `X` or `O`.
6. When a player has three squares in a row, stop the game, declare the winner and have an animation celebrating their win.


## Development Process
1. I started with user authentication (sign up, sign in, sign out, and change password).
2. I then developed the game board and the game engine, as that was expected to take the most time.
3. Once the game engine was complete, I connected to the API to record games and retrieve records.
4. Finally, I focused on styling the game, which still deserves additional work.

## User Stories

  - As a new user, I want to sign up to have an account so I can login next time.
  - As an existing user, I want to be able to sign in.
  - As an existing user, I want to be able to see the result of my last game and my overall record.
  - As a winning user, I want to be rewarded, so I am compelled to play again.
  - As a playing user, I want to keep a record of the games within the session..

## Wireframes

![Wireframe 1](https://i.imgur.com/D4oKI0M.png)

![Wireframe 2](https://i.imgur.com/rqPH7DS.png)

![Wireframe 3](https://i.imgur.com/DONB4T3.png)

## Unsolved Issues / Future Features
Unsolved Issues:
1. The styling of the game needs additional work and time.
2. I prefer to have the game board visible after a player wins, but frozen so no further moves can be played. Planning to update.

For a future version I would like to...
1. Record the number of wins, so the player can see their overall record.
2. Have players enter their names and have the game state the person's turn by name.
3. Play an animation when someone wins.
