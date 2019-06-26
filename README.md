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
```markdown
#### Deployment

Be deployed online, where the rest of the world can access it.

1.  [ ] Deploy on your public Github page, not Github Enterprise.
1.  [ ] Present a working browser game, built by you, hosted and deployed on GitHub Pages.

#### Version Control

Demonstrate using version control by:

1.  [x] Sharing your work through a git repository hosted on Github.
1.  [ ] Making frequent, cohesive commits dating back to the **first day**
of the project week.

#### Documentation

Produce documentation in the form of a **README**, which must:

1.  [x] Pin your repository on GitHub as a Popular Repository
1.  [ ] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
1.  [ ] List technologies used
1.  [ ] Document your planning and tell a story about your development process and problem-solving strategy.
1.  [ ] List unsolved problems which would be fixed in future iterations.
1.  [ ] Link to wireframes and user stories.

#### Technical Specifications

1.  [ ] Use a custom game engine written by you.
1.  [ ] Be a single-page application, no browser refresh.
1.  [ ] Render a game board in the browser.
1.  [ ] Switch turns between X and O (or whichever markers you select).  Tip:  Assume player X is the first player to start the game.
1.  [ ] Visually display which side won if a player gets three in a row or show a draw if neither wins.
1.  [ ] Support playing multiple games, one at a time.
1.  [ ] Use jQuery for DOM manipulation and event handling.
1.  [ ] Use AJAX for interacting with a provided API.

#### API Specifications

1.  [ ] Create new games on the server. (CREATE)
1.  [ ] Update a game by storing new moves. (UPDATE)
1.  [ ] Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
1.  [ ] Give feedback to the user after each action.

#### Auth Specifications

1.  [ ] Signup with email, password, and password confirmation.
1.  [ ] Login with email and password.
1.  [ ] Logout when logged in.
1.  [ ] Change password with current and new password.
1.  [ ] Signup and Signin must only be available to not signed in users.
1.  [ ] Logout and Change password must only be available to signed in users.
1.  [ ] Give feedback to the user after each action's success or failure.
1.  [ ] All forms must clear after submit success or failure

#### DO NOT!!

1.  [ ] Delete your repository at any time or start over.
1.  [ ] Rely on refreshing the page for any functionality.
1.  [ ] Have any user-facing bugs.
    -  [ ] Display non-functional buttons, nor buttons that do not successfully complete a task.
    -  [ ] Show actions at inappropriate times (example: sign out button when not signed in).
    -  [ ] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1.  [ ] Allow the same game to be played after a player has won or tied.
1.  [ ] Allow players to move in the same square more than once.
1.  [ ] Change players when an invalid move is made.
1.  [ ] Use alerts for anything.
1.  [ ] Display errors or warnings in the console.
1.  [ ] Display debugging messages in the console.
```

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

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

## User Stories

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

## Wireframes

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

## Unsolved Issues / Future Features

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.





## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
