class AudioController {
        constructor() {
                this.backgroundMusic = new Audio('assets/audio/bg-music/bg-music.mp3');
                this.flipSound = new Audio('assets/audio/game-sounds/flip.wav');
                this.matchSound = new Audio('assets/audio/game-sounds/match.mp3');
                this.succesSound = new Audio('assets/audio/game-sounds/success.mp3');
                this.failSound = new Audio('assets/audio/game-sounds/fail.mp3');

                this.backgroundMusic.volume = 0.1;
                this.backgroundMusic.loop = true;

                this.soundBtn = $('#sound');
        }

        startMusic() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.backgroundMusic.play();
                }
        }

        stopMusic() {
                this.backgroundMusic.pause();
                this.backgroundMusic.currentTime = 0;
        }

        flip() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.flipSound.play();
                }
        }

        match() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.matchSound.play();
                }
        }

        success() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.stopMusic();
                        this.succesSound.play();
                }

        }
        fail() {
                if (this.soundBtn.hasClass('fa-volume-up')) {
                        this.stopMusic();
                        this.failSound.play();
                }
        }

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
        resetScore() {
                $('#star1').removeClass('star-gold');
                $('#star2').removeClass('star-gold');
                $('#star3').removeClass('star-gold');
                $('#star4').removeClass('star-gold');
                $('#star5').removeClass('star-gold');
        }

        fail() {
                this.resetScore();
                this.scoreTitle.html(this.failTitle);
                this.scoreMessage.html(this.failMessage);
        }

        oneStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.oneStar);
                $('#star1').addClass('star-gold');
        }

        twoStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.twoStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
        }

        threeStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.threeStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
        }

        fourStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.fourStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
                $('#star4').addClass('star-gold');
        }

        fiveStarMessage() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.fiveStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
                $('#star4').addClass('star-gold');
                $('#star5').addClass('star-gold');
        }

        scoreCalculator(timeRemaining, totalTime, turns) {
                this.resetScore();
                this.score = this.timeCalculator(timeRemaining, totalTime) + this.turnsCalculator(turns);

                if (this.score >= 90) {
                        this.fiveStarMessage();
                }
                else if (this.score >= 70) {
                        this.fourStarMessage();
                }
                else if (this.score >= 50) {
                        this.threeStarMessage();
                }
                else if (this.score >= 30) {
                        this.twoStarMessage();
                }
                else if (this.score >= 20) {
                        this.oneStarMessage();
                }
        }

        timeCalculator(timeRemaining, totalTime) {
                this.percentages = totalTime / 5;
                this.oneStarTime = this.percentages * 0.5;
                this.twoStarTime = this.percentages * 1.5;
                this.threeStarTime = this.percentages * 2.5;
                this.fourStarTime = this.percentages * 3.5;
                this.fiveStarTime = this.percentages * 4.5;

                //Calculate a score based on the amount of time remaining

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

        turnsCalculator(turns) {
                this.oneStarTurns = this.numberOfCards * 3;
                this.twoStarTurns = this.numberOfCards * 2.5;
                this.threeStarTurns = this.numberOfCards * 2.1;
                this.fourStarTurns = this.numberOfCards * 1.8;
                this.fiveStarTurns = this.numberOfCards * 1.5;

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

        matchDisplay(matches, pairs) {
                let matchesEl = $('#matches');
                let amountEl = $('#amount');

                matchesEl.html(matches);
                amountEl.html(pairs);

        }

}

class ModeSelection {
        constructor() {
                this.easyBtn = $('#easy-mode');
                this.mediumBtn = $('#medium-mode');
                this.hardBtn = $('#hard-mode');
        }
        //applies the active class depending upon the button selected
        easyMode() {
                this.easyBtn.on('click', () => {
                        this.easyBtn.addClass('btn-active');
                        this.mediumBtn.removeClass('btn-active');
                        this.hardBtn.removeClass('btn-active');

                        $('.card-med').addClass('remove');
                        $('.card-hard').addClass('remove');
                });
        }

        medMode() {
                this.mediumBtn.on('click', () => {
                        this.mediumBtn.addClass('btn-active');
                        this.easyBtn.removeClass('btn-active');
                        this.hardBtn.removeClass('btn-active');

                        $('.card-med').removeClass('remove');
                        $('.card-hard').addClass('remove');
                });
        }
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

        hideCard() {
                $(this.cardArray).each(function() {
                        $(this).removeClass('visible');
                });
        }

        setName() {
                var playerName = $('#name').val();

                $('#scoreName').html(playerName);
        }

        configureTimeOut(audio, shuffle, timeR, busy, countdown, countdownFunc) {
                setTimeout(() => {

                        this.audioController.startMusic();
                        this.shuffleCards(this.cardArray);
                        this.busy = false;
                        this.countDown = this.startCountdown();

                }, 500);
        }

        stopGame() {
                clearInterval(this.countDown);
                this.audioController.stopMusic();
        }

        resetGame() {
                clearInterval(this.countDown);
                this.score.matchDisplay(0, this.pairs);

        }

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

        startCountdown() {
                return setInterval(() => {
                        this.timeRemaining--;
                        this.timer = this.timer.text(this.timeRemaining);
                        if (this.timeRemaining === 0) {
                                this.gameOver();
                        }

                }, 1000);


        }

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


        cardFlip(card) {
                if (this.canCardFlip(card)) {
                        this.audioController.flip();
                        this.totalClicks++;
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

        cardNotMatch(card1, card2) {
                this.busy = true;
                console.log('Mismatch');



                setTimeout(() => {

                        $(card1[1]).removeClass('visible');
                        $(card2[1]).removeClass('visible');

                        this.busy = false;

                }, 1000);

                console.log('hello');
        }


        cardMatched(card1, card2) {

                this.busy = true;
                this.audioController.match();
                setTimeout(() => {
                        this.busy = false;
                }, 1500);

                this.matchedCards.push(card1[0]);
                this.matchedCards.push(card2[0]);
                this.numMatches++;
                this.score.matchDisplay(this.numMatches);

                if (this.matchedCards.length === this.cardArray.length) {
                        this.victory();
                }

        }

        getCardType(card) {
                let cardType = card.getElementsByClassName('card-value')[0].src;
                return cardType;
        }

        canCardFlip(card) {

                let cardValue = this.getCardType(card);
                if (!this.busy && !this.matchedCards.includes(cardValue) && card !== this.cardToBeChecked) {
                        return true;

                }

        }
}


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
        let cards = $('.card');
        let mode = new ModeSelection();
        let game = new CardMatch(100, cards);
        let start = $('#start-btn');
        let playAgain = $('#play-again');
        let sidePlayAgain = $('#side-playAgain');
        let mute = $('#sound');
        let rules = $('#rules');
        let menu = $('#menu');

        console.log('hello');


        easyBtn.on('click', () => {
                mode.easyMode();
                gameTime = 30;
                game.totalTime = gameTime;
                cards = $('.card-easy');
                game.cardArray = cards;
                game.pairs = 4;
        });

        mediumBtn.on('click', () => {
                mode.medMode();
                gameTime = 60;
                game.totalTime = gameTime;
                cards = $.merge($('.card-easy'), $('.card-med'));
                game.cardArray = cards;
                game.pairs = 6;
        });

        hardBtn.on('click', () => {
                mode.hardMode();
                gameTime = 100;
                game.totalTime = gameTime;
                cards = $('.card');
                game.cardArray = cards;
                game.pairs = 8;
        });


        //sets difficulty based on btn pressed

        //opens rules section
        rules.on('click', function() {
                $('.mode-select').toggle('slow');
                $('#rules-text').toggle('slow');

        });

        //initialises card game
        start.on('click', function() {

                if ($('#name').val() === '' || $('#name').val() === undefined) {
                        alert('Please enter your name');

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
        //Allows game to be re
        playAgain.on('click', function() {

                $("#startModal").modal('show');

                // game.startGame();

        });

        menu.on('click', function() {
                game.stopGame();
                $("#startModal").modal('show');
        });

        sidePlayAgain.on('click', function() {
                game.startGame();

        });

        cards.on('click', function() {
                game.cardFlip(this);
        });




});