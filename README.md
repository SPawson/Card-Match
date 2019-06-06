<h1>Match Them All | Code Institute Second Milestone Project</h1>

<p>This project is an interactive frontend project which has been designed for fans of the hit fantasy epic Game Of Thrones. The web application is a fun and engaging memory matching game, which requires a good memory and observation skills in order to achieve a high score. </p>

The application includes a number of features such as multiple difficulty settings which allow the user to add and remove cards to set a challenge, they feel comfortable with. The application also includes features such as a fully functional sound system which audibly notifies users of certain events within the game and a dynamic score system.

<p>The web application can be viewed on Github Live pages via the following address:
<a target="_blank" href="https://spawson.github.io/Card-Match/
">https://spawson.github.io/sallys-school-of-motoring/</a></p>
</hr>
<h2>UX</h2>

<h3>Overview</h3>
<p>The main focus of this application is to allow fans of Game of thrones to enjoy a themed card game which will allow the user to enjoy the shows content in alternative ways. This therefore means that the whole design of the application is to further enhance the users experience to ensure they have a good experience when using the application. </p>
<h3>Wireframes</h3>
<p> During the development stage of my project I generated some wireframes for both the mobile and desktop approaches using Balsamiq. Throughout the course of developing the website, I have deviated from the wireframes in certain sections. This is mainly due to me discovering a better design during the development, or issues with implementing the feature. </p>
<p>The wireframes have been uploaded with the rest of my project and can be viewed <a target="_blank" href="documents/Wireframes">here.</a></p>

<h3>User Stories</h3>
<p>In the development stage of the project, I generated a number of user stories which heavily influenced the design decisions taken throughout the development of the application. They are as follows:</p>

<ul>
<li>As a player, I would like an intuitive user interface which will allow me to utilise the various features of the game easily. </li>
<li>As a player, I would like to be able to enter my name in order to make the experience feel more personalised. </li>
<li>As a player, I would like clear feedback on the actions I have taken within the game to prevent confusion when playing. </li>



<li>As a player, I would like to see feedback on my performance when completing the game to see how I did. </li>
<li>As a player, I would like to be able to change elements of the game such as the difficulty to keep the game challenging. </li>

<li>As a player, I would like to see Game Of Thrones related content to enhance my enjoyment of the application. </li>
</ul>
</hr>
<h2>Features</h2>

<h3>Existing Features</h3>

<h4>Feature 1 – Start Modal</h4>
<p> When the user arrives on the page, they are presented with the start modal. This greets the player and asks for the user’s name, to make the game more personalised. The modal’s default setting of being closed when a click is registered outside the modal has been disabled. This is to ensure the user can only close the modal by starting the game. This was implemented to prevent issues with the game not being initialised correctly</p>

<h4>Feature 2 – Difficulty Selection</h4>
<p>The difficulty selection operates by using three separate buttons on the start screen. This feature was implemented in this way to allow the user to intuitively select the difficulty level they wish to play on. Visual feedback is provided to the user to illustrate which difficulty is selected using the yellow outline to prevent confusion. Furthermore, this feature was implemented on the start modal to reduce any issue when loading the correct card set. </p>

<h4>Feature 3 – Rules section</h4>
<p>A rules section can be activated by the user, when they click the rules button on the start modal. This shows a small section to explain the basic rules of the game to user. The user is then able to remove this by clicking the rules button again. This was implemented to provide clarity to the user on how to play the game. </p>

<h4>Feature 4 – Game Dashboard</h4>
<p>When the users have started the game, they will be presented with the game dashboard. From here the user is able to see all information in regards to the game they are currently playing, along with action buttons to take the user to the start screen, mute the audio and reset the current game. This decision was taken to provide all the information and functionality on the same screen to ensure the user finds the information they need quickly. </p>
<h4>Feature 5 – Player information</h4>
<p>The players name is featured within the player information section in order to provide a more personalised experience. Furthermore, useful information such as the number of matches is also displayed, which provides an additional means for the user to monitor their progress whilst completing the game. </p>
<h4>Feature 6 – Menu button</h4>
<p>The menu button allows the user to stop the game they are currently playing and access the start menu. This will enable them to start a new game with altered game settings. The burger icon is used within the action button to identify the purpose of the button and as this is a recognisable symbol, it should assist with user interaction. </p>

<h4>Feature 7 – Mute button</h4>
<p>The mute button allows the user to toggle the music and sound effects on and off. This is useful as it grants the user control as to whether they want to play the game with the sound effects or not. This will prevent the user from having to mute the game in other ways such as by turning the volume down on their phone/pc. </p>

<h4>Feature 8 – Reset button</h4>
<p>The reset button allows the user to be able to reset the current game they are playing, by restoring the time to the full amount and removing all the users turns along with their matches. This provides an alternative option for playing the game as some users may wish to quickly start the same game mode after making an error. </p>

<h4>Feature 9 – Time Remaining</h4>
<p>The time remaining text allows the user to clearly see how much time the user has left to finish the game. This is another feature which is implemented for clarity for the user, in order to allow them to judge progress and challenge. </p>
<h4>Feature 10 – Turns Counter</h4>
<p>The turns counter allow the user to see the amount of turns they have currently taken within the game. This is another example of a feature which has been added to aid player clarity and provide them with a clear way to judge progress. </p>
<h4>Feature 11 – Game Container</h4>
<p>The game container holds all the cards that have been loaded into the game. Within this container, the user can interact with all of the cards within the game. Each card can be clicked and a CSS animation is applied along with sound effects to enhance the user experience. When cards are matched, the cards will remain turned towards the user to demonstrate that they are matched. The card size is altered depending on the size of the screen viewing the game, in order to allow the game to be responsive and mobile friendly. </p>


<h4>Feature 12 – Score modal</h4>
<p>When game finishes the score modal will be displayed to the user to inform them of their performance. Depending upon the circumstances of the game when it finished, this will then influence what the user sees on the score screen. The user is measured on the amount of time and turns taken to complete the game and this will then visually show them a score out of five stars. If the user is to fail the game, this will show the fail version of the score modal, where the user will receive no stars and a fail message. </p>
<h4>Feature 13 – Return to menu Button</h4>
<p>The return to menu button allows the user to return to the main start screen when the game is over. This means that they are then able to easily select a new game with the game parameters they want in a convenient manner. This prevents confusion and guides the user to starting a new game. </p>

<h3>Features left to implement</h3>

<p>The following features are things I would like to include in the future. Currently a limit in time or lack of understanding has prevented me from implementing these features in the current build. However, I will look to add these going forward. </p>
<h4>Feature 1 – Alternate sets of playing cards</h4>
<p>One feature I would like to add to the game going forward would be to add additional sets of playing cards that could be selected by the user. I believe this will allow the user to customise the game and make it more personalised to their preferences. </p>

<h4>Feature 2 – Time Attack Game Mode</h4>
<p>Another feature that I would like to add to the game going forward would be to introduce an additional playing mode for the user. The basic idea behind this feature would be for the user to complete sets of cards in as fast a time as possible. Upon successful completion of a set of cards, an amount of time would be added back onto the time remaining and the user would try to achieve as many matched sets within the time as possible. I believe this will add further functionality to the game and provide the user with options how they wish to use the application. </p>

<h4>Feature 3 – User high score system</h4>
<p>Based upon the implementation of alternate game modes. Another feature that I would like to add in future is a global high score system, for players to be able to compare their score with other users of the application. This feature would require an understanding of server technology and therefore would not be able to be implemented until I develop my skills further. </p>


<hr>

<h2>Technologies Used</h2>

<h3>HTML, CSS & JavaScript</h3>
<p>Used as the base languages in this project:</p>
<ul>
<li>HTML: <a target="_blank" href="https://www.w3.org/html/">https://www.w3.org/html/</a></li>
<li>CSS: <a target="_blank" href="https://www.w3.org/Style/CSS/">https://www.w3.org/Style/CSS/</a></li>
<li>JavaScript: <a target="_blank" href="https://www.w3.org/standards/webdesign/script">https://www.w3.org/standards/webdesign/script</a></li>
</ul>

<h3>Bootstrap</h3>
<p>
The project uses Bootstrap 4.3.1 framework and a variety of imported classes in order assist with implementing the structure, navigation, carousel and modal features seen on the site.
</p>
<a target="_blank" href="https://getbootstrap.com/">https://getbootstrap.com/</a>

<h3>JQuery</h3>
<p>The project uses JQuery to help execute certain Bootstrap and JavaScript features such as with DOM manipulation and modal functionality .</p>
<a target="_blank" href="https://jquery.com/">https://jquery.com/</a>

<h3>Google Fonts</h3>
<p>The project uses Google Fonts to provide the ‘Cinzel’ font that is used as the websites main font.</p>
<a target="_blank" href="https://fonts.google.com/">https://fonts.google.com/</a>

<h3>Font Awesome</h3>
<p>Used in order to provide a variety of Icons such as the ones used in the social section in the footer.</p>
<a target="_blank" href="https://fontawesome.com/">https://fontawesome.com/</a>

<h3>Cloud9</h3>
<p>Cloud9 has been used throughout the project as my IDE. </p>
<a target="_blank" href="https://aws.amazon.com/cloud9/?origin=c9io">https://aws.amazon.com/cloud9/?origin=c9io</a>

<h3>Git & GitHub</h3>
<p>Git and GitHub have been used throughout the project as a way to manage version control of the web application and its code. </p>
<a target="_blank" href="https://github.com/">https://github.com/</a>

<hr>

<h2>Resources</h2>

<p>Throughout the course of the project I also used the following resources to assist me in creating the website:</p>

<ul>
<li><a target="_blank" href="https://www.w3schools.com/">https://www.w3schools.com/</a></li>
<li><a target="_blank" href="https://stackoverflow.com">https://stackoverflow.com</a></li>
<li><a target="_blank" href="https://tinypng.com/">https://tinypng.com/</a></li>
<li><a target="_blank" href="https://developer.mozilla.org/en-US/">https://developer.mozilla.org/en-US/</a></li>
<li><a target="_blank" href="https://www.quora.com/">https://www.quora.com</a></li>
<li><a target="_blank" href="https://www.google.com/">https://www.google.com</a></li>
</ul>

<hr>
