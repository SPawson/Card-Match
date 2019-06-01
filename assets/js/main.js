class AudioController {
        constructor() {
                this.backgroundMusic = new Audio('assets/audio/bg-music/bg-music.mp3');
                this.flipSound = new Audio('assets/audio/game-sounds/flip.wav');
                this.matchSound = new Audio('assets/audio/game-sounds/match.mp3');
                this.succesSound = new Audio('assets/audio/game-sounds/success.mp3');
                this.failSound = new Audio('assets/audio/game-sounds/fail.mp3')

                this.backgroundMusic.volume = 0.1;
                this.backgroundMusic.loop = true;
        }

        startMusic = function() {
                this.backgroundMusic.play();
        }

        stopMusic = function() {
                this.backgroundMusic.pause();
                this.backgroundMusic.currentTime = 0;
        }

        flip = function() {
                this.flipSound.play();
        }

        match = function() {
                this.matchSound.play();
        }

        success = function() {
                this.stopMusic();
                this.succesSound.play();

        }
        fail = function() {
                this.stopMusic();
                this.failSound.play();
        }

        muteMusic = function() {
                let soundBtn = $('#sound');

                if (soundBtn.hasClass('fa-volume-up')) {
                        soundBtn.removeClass('fa-volume-up');
                        soundBtn.addClass('fa-volume-mute');
                        this.stopMusic();
                }
                else {
                        soundBtn.removeClass('fa-volume-mute');
                        soundBtn.addClass('fa-volume-up');
                        this.startMusic();
                }


        }

}

class ScoreController {
        constructor(cardsArray) {
                this.failTitle = 'Fail';
                this.failMessage = 'That was a disaster';
                this.successTitle = 'Completed'
                this.oneStar = 'You can do better than that';
                this.twoStar = 'Keep trying';
                this.threeStar = 'Not a bad attempt'
                this.fourStar = 'Well done, thats a great effort'
                this.fiveStar = 'Excellent the knights of the realm will be thrilled with you!'

                this.numberOfCards = cardsArray.length;

                this.scoreTitle = $('#scoreTitle');
                this.scoreMessage = $('#endGameMessage')
        }
        fail = function() {
                this.scoreTitle.html(this.failTitle);
                this.scoreMessage.html(this.failMessage);
        }

        oneStarMessage = function() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.oneStar);
                $('#star1').addClass('star-gold');
        }

        twoStarMessage = function() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.twoStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
        }

        threeStarMessage = function() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.threeStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
        }

        fourStarMessage = function() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.fourStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
                $('#star4').addClass('star-gold');
        }

        fiveStarMessage = function() {
                this.scoreTitle.html(this.successTitle);
                this.scoreMessage.html(this.fiveStar);
                $('#star1').addClass('star-gold');
                $('#star2').addClass('star-gold');
                $('#star3').addClass('star-gold');
                $('#star4').addClass('star-gold');
                $('#star5').addClass('star-gold');
        }

        scoreCalculator = function(timeRemaining, totalTime, turns) {
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

        timeCalculator = function(timeRemaining, totalTime) {
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

        turnsCalculator = function(turns) {
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

        matchDisplay = function(matches) {
                let matchesEl = $('#matches');
                let amountEl = $('amount');

                matchesEl.html(matches);
                amountEl.html(this.numberOfCards);

        }

}

class ModeSelection {
        constructor(){
                this.modeSelected;
                this.easyBtn = $('#easy-mode');
                this.mediumBtn = $('#medium-mode');
                this.hardBtn = $('#hard-mode');
        }
        //applies the active class depending upon the button selected
        btnSelection = function(){
                this.easyBtn.on('click', () => {
                        this.easyBtn.addClass('btn-active');
                        this.mediumBtn.removeClass('btn-active');
                        this.hardBtn.removeClass('btn-active');
                })
                
                this.mediumBtn.on('click', () => {
                        this.mediumBtn.addClass('btn-active');
                        this.easyBtn.removeClass('btn-active');
                        this.hardBtn.removeClass('btn-active');
                })
                
                this.hardBtn.on('click', () => {
                        this.hardBtn.addClass('btn-active');
                        this.mediumBtn.removeClass('btn-active');
                        this.easyBtn.removeClass('btn-active');
                })
        }
        //determines which mode is selected by the user
        modeSelected = function(){
                if(this.easyBtn.hasClass('btn-active')) {
                        this.modeSelected = 1;
                }
                else if(this.mediumBtn.hasClass('btn-active')) {
                        this.modeSelected = 2;
                }
                else if(this.hardBtn.hasClass('btn-active')) {
                        this.modeSelected = 3;
                }
                
        }
}

class CardMatch {
        constructor(totalTime, cards) {
                this.cardArray = cards;
                this.totalTime = totalTime;
                this.timeRemaining = totalTime;
                this.timer = $('#time-remaining');
                this.turns = $('#turns-count');
                this.totalClicks = 0
                this.numMatches

                this.audioController = new AudioController();
                this.score = new ScoreController(this.cardArray);
        }

        //Randomises the card layout by shuffling the grid order
        shuffleCards = function(cards) {
                let randomIndex = 0;
                let temp = 0;
                for (let i = this.cardArray.length - 1; i > 0; i--) {
                        randomIndex = Math.floor(Math.random() * (i + 1));



                        $(this.cardArray[randomIndex]).css('order', i);
                        $(this.cardArray[i]).css('order', randomIndex);
                }
        }

        hideCard = function() {
                $(this.cardArray).each(function() {
                        $(this).removeClass('visible')
                })
        }

        setName = function() {
                var playerName = $('#name').val();

                $('#scoreName').html(playerName);
        }

        configureTimeOut = function(audio, shuffle, timeR, busy, countdown, countdownFunc) {
                setTimeout(() => {
                        /*audio;
                        shuffle;
                        timeR = countdown;
                        busy = false;
                        countdown = countdownFunc;*/

                        this.audioController.startMusic();
                        this.shuffleCards(this.cardArray);
                        this.busy = false;
                        this.countDown = this.startCountdown();

                }, 500)
        }

        resetGame = function() {
                this.score.matchDisplay(0);
                clearInterval(this.countDown);
        }

        startGame = function() {
                //call mode selection here
                
                this.resetGame()
                this.cardToBeChecked = null;
                this.totalClicks = 0;
                this.timeRemaining = this.totalTime;
                this.matchedCards = [];
                this.numMatches = 0

                this.busy = true;

                this.setName();


                setTimeout(() => {
                        /*audio;
                        shuffle;
                        timeR = countdown;
                        busy = false;
                        countdown = countdownFunc;*/

                        this.audioController.startMusic();
                        this.shuffleCards(this.cardArray);
                        this.busy = false;
                        this.countDown = this.startCountdown();

                }, 500)

                this.timer = this.timer.text(this.timeRemaining)
                this.turns = this.turns.text(this.totalClicks);

                this.hideCard();

        }

        startCountdown = function() {
                return setInterval(() => {
                        this.timeRemaining--;
                        this.timer = this.timer.text(this.timeRemaining);
                        if (this.timeRemaining === 0) {
                                this.gameOver();
                        }

                }, 1000)


        }

        gameOver = function() {
                clearInterval(this.countDown);
                this.audioController.fail();
                this.score.fail();
                $('#scoreModal').modal({
                        backdrop: 'static',
                        keyboard: false
                })
                $('#scoreModal').modal('show')
        }

        victory = function() {
                clearInterval(this.countDown);
                this.audioController.success();
                this.score.scoreCalculator(this.timeRemaining, this.totalTime, this.totalClicks);
                $('#scoreModal').modal({
                        backdrop: 'static',
                        keyboard: false
                })
                $('#scoreModal').modal('show')

        }


        cardFlip = function(card) {
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

        checkCardMatch = function(card) {

                var currentCard = [this.getCardType(card), card];
                var checkCard = [this.getCardType(this.cardToBeChecked), this.cardToBeChecked];

                if (currentCard[0] === checkCard[0]) {
                        //Match
                        this.cardMatched(currentCard, checkCard);
                        this.cardToBeChecked = null

                }

                else {
                        //mis Match
                        this.cardNotMatch(currentCard, checkCard);
                        this.cardToBeChecked = null
                }


        }

        cardNotMatch = function(card1, card2) {
                this.busy = true;
                console.log('Mismatch')



                setTimeout(() => {

                        $(card1[1]).removeClass('visible');
                        $(card2[1]).removeClass('visible');

                        this.busy = false;

                }, 1000)
                
                console.log('hello');
        }


        cardMatched = function(card1, card2) {

                this.busy = true;
                this.audioController.match();
                setTimeout(() => {
                        this.busy = false;
                }, 1500)

                this.matchedCards.push(card1[0]);
                this.matchedCards.push(card2[0]);
                this.numMatches++;
                this.score.matchDisplay(this.numMatches);

                if (this.matchedCards.length === this.cardArray.length) {
                        this.victory();
                }

        }

        getCardType = function(card) {
                let cardType = card.getElementsByClassName('card-value')[0].src;
                //$(card).add('.card-value').attr('src');
                console.log(cardType)
                return cardType;
        }

        canCardFlip = function(card) {

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
        })
        $("#startModal").modal('show');
        // if statement for differernt modes
        let cards = $('.card');
        let mode = new ModeSelection
        let game = new CardMatch(100, cards);
        let start = $('#start-btn');
        let playAgain = $('#play-again');
        let sidePlayAgain = $('#side-playAgain');
        let mute = $('#sound');
        let rules = $('rules');


        mode.btnSelection();
        
        rules.on('click', function() {
                $("#rulesModal").modal('show');

        });

        start.on('click', function() {
                game.startGame();
        });

        mute.on('click', function() {
                game.audioController.muteMusic();
        });

        playAgain.on('click', function() {
                game.startGame();

        });

        sidePlayAgain.on('click', function() {
                game.startGame();

        });

        cards.on('click', function() {
                game.cardFlip(this);
        });




});
