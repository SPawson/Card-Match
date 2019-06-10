$(document).ready(function() {
        $('#startModal').modal({
                backdrop: 'static',
                keyboard: false
        });
        $("#startModal").modal('show');
        // if statement for differernt modes

        let easyBtn = $('#easy-mode');
        let mediumBtn = $('#medium-mode');
        let hardBtn = $('#hard-mode');
        let gameTime;
        //Selects the array of cardsbased on class card
        let cards = $('.card');
        let mode = new ModeSelection();
        let game = new CardMatch(60, cards);
        let start = $('#start-btn');
        let returnMenu = $('#return-menu');
        let sidePlayAgain = $('#side-playAgain');
        let mute = $('#sound');
        let rules = $('#rules');
        let menu = $('#menu');

        //sets medium mode as default by hiding cards on load 
        $('.card-med').removeClass('remove');
        $('.card-hard').addClass('remove');
        game.cardArray = $.merge($('.card-easy'), $('.card-med'));

        //cards = $.merge($('.card-easy'), $('.card-med'));


        //sets difficulty based on btn pressed
        //Selects easy mode and applies correct card array and styles
        easyBtn.on('click', () => {
                mode.easyMode();
                gameTime = 30;
                game.totalTime = gameTime;
                cards = $('.card-easy');
                game.cardArray = cards;
                game.pairs = 4;
        });

        //Selects medium mode and applies correct card array and styles
        mediumBtn.on('click', () => {
                mode.medMode();
                gameTime = 60;
                game.totalTime = gameTime;
                cards = $.merge($('.card-easy'), $('.card-med'));
                game.cardArray = cards;
                game.pairs = 6;
        });

        //Selects hard mode and applies correct card array and styles
        hardBtn.on('click', () => {
                mode.hardMode();
                gameTime = 100;
                game.totalTime = gameTime;
                cards = $('.card');
                game.cardArray = cards;
                game.pairs = 8;
        });




        //opens rules section
        rules.on('click', function() {
                $('.mode-select').toggle('slow');
                $('#rules-text').toggle('slow');

        });

        //initialises card game
        start.on('click', function() {
                let value = $('#name').val();

                if (value === '') {
                        alert('Please enter your name');

                }
                else if(value.length >= 15){
                        alert('Please enter a name with less than 15 characters');
                }
                else {
                        $('#startModal').modal('hide');
                        game.startGame();
                }
        });
        //mutes music
        mute.on('click', function() {
                game.audioController.muteMusic();
        });
        //Opens start menu
        returnMenu.on('click', function() {

                $("#startModal").modal('show');


        });

        //Stops game & opens start menu
        menu.on('click', function() {
                game.stopGame();
                $("#startModal").modal('show');
        });

        //Restarts the current game
        sidePlayAgain.on('click', function() {

                game.startGame();


        });

        //Event listener for card clicks, calls cardflip method
        cards.on('click', function() {
                game.cardFlip(this);
        });




});

//Class created to control all audio elements/functions
class AudioController {
        constructor() {
                //Sound files for audio
                this.backgroundMusic = new Audio('assets/audio/bg-music/bg-music.mp3');
                this.flipSound = new Audio('assets/audio/game-sounds/flip.wav');
                this.matchSound = new Audio('assets/audio/game-sounds/match.mp3');
                this.succesSound = new Audio('assets/audio/game-sounds/success.mp3');
                this.failSound = new Audio('assets/audio/game-sounds/fail.mp3');

                this.backgroundMusic.volume = 0.1;
                this.backgroundMusic.loop = true;

                this.soundBtn = $('#sound');
        }

        //starts the background music
        startMusic() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.backgroundMusic.play();
                }
        }

        //stops the music and resets to the start of the track
        stopMusic() {
                this.backgroundMusic.pause();
                this.backgroundMusic.currentTime = 0;
        }

        //plays card flip sound
        flip() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.flipSound.play();
                }
        }

        //plays the card match sound
        match() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.matchSound.play();
                }
        }

        //plays the end of game success sound
        success() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.stopMusic();
                        this.succesSound.play();
                }

        }

        //plays the end of game fail sound
        fail() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.stopMusic();
                        this.failSound.play();
                }
        }

        //controls whether music is played depending upon the class applied
        muteMusic() {

                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.soundBtn.removeClass('fa-volume-up');
                        this.soundBtn.addClass('fa-volume-mute');
                        this.stopMusic();
                }
                else {
                        this.soundBtn.removeClass('fa-volume-mute');
                        this.soundBtn.addClass('fa-volume-up');
                        this.startMusic();
                }

        }

}

//Class to determine the score based on the users performance
class ScoreController {
        constructor(cardsArray) {
                this.failTitle = 'Fail';
                this.failMessage = 'That was a disaster';
                this.successTitle = 'Completed';
                this.oneStar = 'You can do better than that';
                this.twoStar = 'Keep trying';
                this.threeStar = 'Not a bad attempt';
                this.fourStar = 'Well done, thats a great effort';
                this.fiveStar = 'Excellent the knights of the realm will be thrilled with you!';

                this.cards = cardsArray;
                this.numberOfCards = this.cards.length;

                this.scoreTitle = $('#scoreTitle');
                this.scoreMessage = $('#endGameMessage');
        }
        //resets the star score system
        resetScore() {
                $('#star1').removeClass('star-gold');
                $('#star2').removeClass('star-gold');
                $('#star3').removeClass('star-gold');
                $('#star4').removeClass('star-gold');
                $('#star5').removeClass('star-gold');
        }

        //applies the score fail screen
        fail() {
                this.resetScore();
                this.scoreTitle.html(this.failTitle);
                this.scoreMessage.html(this.failMessage);
        }

        //applies the one star message and score to user
        oneStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.oneStar);
                $('#star1').addClass('star-gold');
        }

        //applies the two star message and score to user
        twoStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.twoStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
        }

        //applies the three star message and score to user
        threeStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.threeStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
        }

        //applies the four star message and score to user
        fourStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.fourStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
                $('#star4').addClass('star-gold');
        }

        //applies the five star message and score to user
        fiveStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.fiveStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
                $('#star4').addClass('star-gold');
                $('#star5').addClass('star-gold');
        }

        //calculates the overall score for the users game
        scoreCalculator(timeRemaining, totalTime, turns) {
                this.resetScore();
                this.score = this.timeCalculator(timeRemaining, totalTime) + this.turnsCalculator(turns);

                if (this.score >= 80) {
                        this.fiveStarMessage();
                }
                else if (this.score >= 70) {
                        this.fourStarMessage();
                }
                else if (this.score >= 50) {
                        this.threeStarMessage();
                }
                else if (this.score >= 40) {
                        this.twoStarMessage();
                }
                else if (this.score >= 30) {
                        this.oneStarMessage();
                }
        }

        //calculates a score for the user based on the amount of time left
        timeCalculator(timeRemaining, totalTime) {
                this.percentages = totalTime / 5;
                this.oneStarTime = this.percentages * 0.5;
                this.twoStarTime = this.percentages * 1.5;
                this.threeStarTime = this.percentages * 2.5;
                this.fourStarTime = this.percentages * 3.5;
                this.fiveStarTime = this.percentages * 4.0;

                //Calculates a score based on the amount of time remaining

                if (timeRemaining >= this.fiveStarTime) {
                        return 50;
                }
                else if (timeRemaining < this.fiveStarTime && timeRemaining >= this.fourStarTime) {
                        return 40;
                }
                else if (timeRemaining < this.fourStarTime && timeRemaining >= this.threeStarTime) {
                        return 30;
                }
                else if (timeRemaining < this.threeStarTime && timeRemaining >= this.twoStarTime) {
                        return 20;
                }
                else if (timeRemaining < this.twoStarTime) {
                        return 10;
                }




        }

        //Calculates a score based on the amount of turns taken
        turnsCalculator(turns) {
                this.oneStarTurns = this.numberOfCards * 2.5;
                this.twoStarTurns = this.numberOfCards * 2.0;
                this.threeStarTurns = this.numberOfCards * 1.8;
                this.fourStarTurns = this.numberOfCards * 1.2;
                this.fiveStarTurns = this.numberOfCards * 0.8;

                if (turns <= this.fiveStarTurns) {
                        return 50;
                }
                else if (turns > this.fiveStarTurns && turns <= this.fourStarTurns) {
                        return 40;
                }
                else if (turns > this.fourStarTurns && turns <= this.threeStarTurns) {
                        return 30;
                }
                else if (turns > this.threeStarTurns && turns <= this.twoStarTurns) {
                        return 20;
                }
                else if (turns > this.oneStarTurns) {
                        return 10;
                }
        }

        //sets the number of matches in the player dashboard
        matchDisplay(matches, pairs) {
                let matchesEl = $('#matches');
                let amountEl = $('#amount');

                matchesEl.html(matches);
                amountEl.html(pairs);

        }

}

//Class which controls the difficulty selection
class ModeSelection {
        constructor() {
                this.easyBtn = $('#easy-mode');
                this.mediumBtn = $('#medium-mode');
                this.hardBtn = $('#hard-mode');
        }
        //applies the active class depending upon the button selected
        //applies the classes necessary to play the game in easy mode
        easyMode() {
                this.easyBtn.on('click', () => {
                        this.easyBtn.addClass('btn-active');
                        this.mediumBtn.removeClass('btn-active');
                        this.hardBtn.removeClass('btn-active');

                        $('.card-med').addClass('remove');
                        $('.card-hard').addClass('remove');
                });
        }

        //applies the classes necessary to play the game in medium mode
        medMode() {
                this.mediumBtn.on('click', () => {
                        this.mediumBtn.addClass('btn-active');
                        this.easyBtn.removeClass('btn-active');
                        this.hardBtn.removeClass('btn-active');

                        $('.card-med').removeClass('remove');
                        $('.card-hard').addClass('remove');
                });
        }

        //applies the classes necessary to play the game in hard mode
        hardMode() {
                this.hardBtn.on('click', () => {
                        this.hardBtn.addClass('btn-active');
                        this.mediumBtn.removeClass('btn-active');
                        this.easyBtn.removeClass('btn-active');

                        $('.card-med').removeClass('remove');
                        $('.card-hard').removeClass('remove');
                });
        }

}


//Class which controls the card matching elements of the application
class CardMatch {
        constructor(totalTime, cards) {
                this.cardArray = cards;
                this.totalTime = totalTime;
                this.timeRemaining = totalTime;
                this.timer = $('#time-remaining');
                this.turns = $('#turns-count');
                this.totalClicks = 0;
                this.numMatches;
                this.pairs;

                //instantiates the objects required for the gameplay
                this.audioController = new AudioController();
                this.score = new ScoreController(this.cardArray);
        }

        //Randomises the card layout by shuffling the grid order
        shuffleCards(cards) {
                let randomIndex = 0;

                for (let i = this.cardArray.length - 1; i > 0; i--) {
                        randomIndex = Math.floor(Math.random() * (i + 1));



                        $(this.cardArray[randomIndex]).css('order', i);
                        $(this.cardArray[i]).css('order', randomIndex);
                }
        }

        //hides the cards by removing the vissible class
        hideCard() {
                $(this.cardArray).each(function() {
                        $(this).removeClass('visible');
                });
        }

        //sets the users name in the player dashboard
        setName() {
                var playerName = $('#name').val();

                $('#scoreName').html(playerName);
        }

        //stops the music and clears the time interval
        stopGame() {
                clearInterval(this.countDown);
                this.audioController.stopMusic();
        }

        //resets the UI and clears the time interval for the current game
        resetGame() {
                clearInterval(this.countDown);
                this.timer = this.timer.text(this.timeRemaining);
                this.score.matchDisplay(0, this.pairs);

        }

        //initialises the game upon start
        startGame() {
                //call mode selection here

                this.resetGame();
                this.cardToBeChecked = null;
                this.totalClicks = 0;
                this.timeRemaining = this.totalTime;
                this.matchedCards = [];
                this.numMatches = 0;

                this.busy = true;

                this.setName();

                //shuffles cards and begins countdown of the timer
                setTimeout(() => {

                        this.audioController.startMusic();
                        this.shuffleCards(this.cardArray);
                        this.busy = false;
                        this.countDown = this.startCountdown();

                }, 500);

                this.timer = this.timer.text(this.timeRemaining);
                this.turns = this.turns.text(this.totalClicks);

                this.hideCard();

        }

        //controls the timing of the game
        startCountdown() {
                let counter = () => {
                        this.timeRemaining--;
                        this.timer = this.timer.text(this.timeRemaining);
                        if (this.timeRemaining === 0) {
                                this.gameOver();
                        }
                }

                return setInterval(counter, 1000);


        }

        //shows fail modal and stops game/plays fail audio
        gameOver() {
                clearInterval(this.countDown);
                this.audioController.fail();
                this.score.fail();
                $('#scoreModal').modal({
                        backdrop: 'static',
                        keyboard: false
                });
                $('#scoreModal').modal('show');
        }

        //shows the victory screen and plays the succes audio, along with generating user score
        victory() {
                clearInterval(this.countDown);
                this.audioController.success();
                this.score.scoreCalculator(this.timeRemaining, this.totalTime, this.totalClicks);
                $('#scoreModal').modal({
                        backdrop: 'static',
                        keyboard: false
                });
                $('#scoreModal').modal('show');

        }

        //determines if card can be flipped and applies visible class if it can
        cardFlip(card) {
                if (this.canCardFlip(card)) {
                        this.audioController.flip();

                        this.turns = this.turns.text(this.totalClicks);
                        $(card).addClass('visible');

                        if (this.cardToBeChecked) {
                                this.checkCardMatch(card);

                        }
                        else {
                                this.cardToBeChecked = card;
                        }
                }


        }

        //checks for match between two cards based on the img source
        checkCardMatch(card) {

                var currentCard = [this.getCardType(card), card];
                var checkCard = [this.getCardType(this.cardToBeChecked), this.cardToBeChecked];



                if (currentCard[0] === checkCard[0]) {
                        //Match
                        this.cardMatched(currentCard, checkCard);
                        this.cardToBeChecked = null;

                }

                else {
                        //mis Match
                        this.cardNotMatch(currentCard, checkCard);
                        this.cardToBeChecked = null;
                }


        }

        //called when cards dont match, removes visibility for user
        cardNotMatch(card1, card2) {
                this.busy = true;



                setTimeout(() => {

                        $(card1[1]).removeClass('visible');
                        $(card2[1]).removeClass('visible');

                        this.busy = false;

                }, 1000);

                this.totalClicks++;

        }

        //called when cards match, adds cards to matched array
        cardMatched(card1, card2) {

                this.busy = true;
                this.audioController.match();
                setTimeout(() => {
                        this.busy = false;
                }, 1000);

                this.matchedCards.push(card1[0]);
                this.matchedCards.push(card2[0]);
                this.numMatches++;
                this.score.matchDisplay(this.numMatches);
                this.totalClicks++;

                if (this.matchedCards.length === this.cardArray.length) {
                        this.victory();
                }

        }

        //retireves the image source from the card, so the items can be compared
        getCardType(card) {
                let cardType = card.getElementsByClassName('card-value')[0].src;
                return cardType;
        }

        //determines if the card can be flipped
        canCardFlip(card) {

                let cardValue = this.getCardType(card);
                if (!this.busy && !this.matchedCards.includes(cardValue) && card !== this.cardToBeChecked) {
                        return true;

                }

        }
}
