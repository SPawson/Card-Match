<h1>Match Them All | Code Institute Second Milestone Project</h1>

<p>This project is an interactive frontend application which has been designed for fans of the hit fantasy epic Game Of Thrones. The web application is a fun and engaging memory matching game, which requires a good memory and observation skills in order to achieve a high score. </p>

<p>The application includes a number of features such as multiple difficulty settings which allow the user to add and remove cards to set a challenge, they feel comfortable with. The application also includes features such as a fully functional sound system which audibly notifies users of certain events within the game and a dynamic score system.</p>

<p>The web application can be viewed on Github Live pages via the following address:
<a target="_blank" href="https://spawson.github.io/Card-Match/">https://spawson.github.io/sallys-school-of-motoring/</a></p>
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
The project uses Bootstrap 4.3.1 framework and a variety of imported classes in order assist with implementing the structure and modal features seen on the site.
</p>
<a target="_blank" href="https://getbootstrap.com/">https://getbootstrap.com/</a>

<h3>JQuery</h3>
<p>The project uses JQuery to help execute certain Bootstrap and JavaScript features such as with DOM manipulation and modal functionality .</p>
<a target="_blank" href="https://jquery.com/">https://jquery.com/</a>

<h3>Google Fonts</h3>
<p>The project uses Google Fonts to provide the ‘Cinzel’ font that is used as the applications main font.</p>
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

<p>Throughout the course of the project I also used the following resources to assist me in creating the application:</p>

<ul>
<li><a target="_blank" href="https://www.w3schools.com/">https://www.w3schools.com/</a></li>
<li><a target="_blank" href="https://stackoverflow.com">https://stackoverflow.com</a></li>
<li><a target="_blank" href="https://tinypng.com/">https://tinypng.com/</a></li>
<li><a target="_blank" href="https://developer.mozilla.org/en-US/">https://developer.mozilla.org/en-US/</a></li>
<li><a target="_blank" href="https://www.quora.com/">https://www.quora.com</a></li>
<li><a target="_blank" href="https://www.google.com/">https://www.google.com</a></li>
</ul>

<hr>

<h2>Testing</h2>
<p>All testing that I have completed in regards to the user story can be viewed on a separate document <a target="_blank" href="assets/documents/testing/Testing.md">here</a></p>

<h3>Issues Encountered</h3>
<p>Throughout the course of my testing, I discovered a few bugs which I have detailed below:</p>
<ul>
<li>I encountered an issue where upon trying to start the game in Firefox and Safari, where the game would not initialise and would just stay on the game container screen. This prevented the user from interacting with the application any further. </li>
<li>I encountered an issue early in development where the check card function would get the image source attribute, but the function was unable to compare the cards and check for a match or not. </li>
<li>I encountered an issue where the audio would start to play again when the game was finished and reset. This then had to be pressed again in order to activate the mute function. </li>
<li>I encountered an issue where the difficulty buttons would not change the number of cards being used or the amount of time and would display a console error. </li>
<li>I encountered an issue where the start modal on Internet explorer would not load and therefore would prevent the user from being able to play the game. </li>


</ul>

<h3>Steps taken to resolve issues</h3>
<ul>

<li>I found when I entered my code into JSHint that I was getting errors for the majority of my class functions. This was down to me writing them as class properties which isn’t supported yet in certain browsers. As a result, I changed my class properties to constructor methods and this then cured the issues I was seeing with certain browsers such as Firefox.</li>
<li>I found when viewing the data being passed into the compare function, that it was passing the DOM elements of the cards into the check function and not the image source value. As a result, I needed to keep the DOM element information as well, so I created two arrays and merged them into a common card array. In order to compare the image source, I then just needed to retrieve the nested array value of the image. </li>
<li>I found that I had placed all of the controls for audio system inside of the CardMatch.startGame() function. As a result, everytime this function was called due to the game being reset. I was restarting the music despite the mute button being pressed on the previous game. In order to resolve this, I had to place the click functionality outside of the startGame function, so that it would not reset this when the game was restarted. </li>

<li>I found initially that when I tried to change the difficulty. I was applying the changes to two global variables, which were being used to create the instance of the CardMatch class. However, I had not realised that these values were not taking effect as the instance of the class had already been created when the difficulty functions were being activated. Therefore, to resolve this, I changed the difficulty functions so that they would apply the changes in value to the class properties. </li>

<h3>Unsolved Bugs</h3>
<li>I need to carry out further testing and functionality checks with Internet explorer. This is due a few features not working correctly as a result of me using ES6 Javascript and certain CSS properties which are not fully supported by the browser. The kinds of issues I am seeing is with the grid property and the classes I have used within my Javascript. My goal is to carry out resolving certain issues until I can get the application running as intended in IE, however I cannot complete these fully as I haven’t found an effective solution. </li>

<li>When testing on Safari, I have encountered a few known bugs in regard to playing audio files. This means that certain audio files do not always play at the correct times. I have also seen issues with the amount of audio files being played at one time. I have not yet been able to find an effective solution. </li>

</ul>

<h2>Deployment</h2>

<p>I have deployed this project using Github live pages and this can be found <a target="_blank" href="https://spawson.github.io/Card-Match/"> here.</a></p>
<hr>

<h2>Credits</h2>

<h3>Images</h3>
<h4>Disclaimer</h4>
<p>Please note this project is for educational purposes only and </p>

<ul>

<li>Images of the Game Of Thrones characters were taken from <a href=”https://awoiaf.westeros.org/index.php/A_Song_of_Ice_and_Fire” target=”_blank”>The Official A Song Of Ice And Fire Wikipedia page</a></li>

<li>Knight for the back of the card image was taken from Google images</li>

</ul>

<h3>Audio</h3>
<ul>

<li>Audio sound effects including the card flip, match success and fail sounds were all taken from <a href=”https://freesound.org/“ target=”_blank”>Free Sound</a></li>

<li>The game music was taken from the Youtube Channel <a href=”https://www.youtube.com/watch?v=eZ_r1H9vHkI“ target=”_blank”>Always Music</a> </li>
</ul>






<h3>Acknowledgements</h3>
<p>The game idea was inspired by other projects featured on Youtube such as by Traversy Media</p>

<p>Thank you to members of the Slack community and my mentor Tony Montaro for assistance when I was encountering issues during the development and to my family friends for assisting with the testing of this application.</p>

