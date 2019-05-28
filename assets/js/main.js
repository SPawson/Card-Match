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
                let stop = this.stopMusic()
                let start = this.startMusic()

                soundBtn.on('click', () => {
                        if (soundBtn.hasClass('fa-volume-up')) {
                                soundBtn.removeClass('fa-volume-up');
                                soundBtn.addClass('fa-volume-mute');
                                this.stopMusic()
                        }
                        else {
                                soundBtn.removeClass('fa-volume-mute');
                                soundBtn.addClass('fa-volume-up');
                                this.startMusic()
                        }
                });


        }

}

class ScoreController {
        constructor() {
                this.failTitle = 'Fail';
                this.failMessage = 'That was a disaster';
                this.oneStar = 'You can do better than that';
                this.twoStar = 'Keep trying';
                this.threeStar = 'Not a bad attempt'
                this.fourStar = 'Well done, thats a great effort'
                this.fiveStar = 'Excellent the knights of the realm will be thrilled with you!'

                this.scoreTitle = $('#scoreTitle');
                this.scoreMessage = $('#endGameMessage')
        }
        fail = function() {
                this.scoreTitle.html(this.failTitle);
                this.scoreMessage.html(this.failMessage);
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

                this.audioController = new AudioController();
                this.score = new ScoreController();
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

        startGame = function() {
                /*let audioBgMusic = this.audioController.startMusic();
                let shuffle = this.shuffleCards(this.cardArray);
                let timeRemaining = this.timeRemaining;
                let busy = this.busy;
                let countdown = this.countdown;
                let countdownFunc = this.startCountdown();
                */

                this.cardToBeChecked = null;
                this.totalClicks = 0;
                this.timeRemaining = this.totalTime;
                this.matchedCards = [];
                this.busy = true;
                this.audioController.muteMusic();
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
                $('#scoreModal').modal('show')
        }


        cardFlip = function(card) {
                if (this.canCardFlip(card)) {
                        this.audioController.flip();
                        this.totalClicks++;
                        this.turns = this.turns.text(this.totalClicks);
                        $(card).addClass('visible');
                }

                if (this.cardToBeChecked) {
                        this.checkCardMatch(card);
                }
                else {
                        this.cardToBeChecked = card;
                }
        }

        checkCardMatch = function(card) {

                if (this.getCardType(card) === this.getCardType(this.cardToBeChecked)) {
                        //Match
                }

                else {
                        //mis Match
                }

        }

        getCardType = function(card) {
                let cardType = $('.card-front img').attr('src');
                return cardType;
        }

        canCardFlip = function(card) {
                return true;
        }
}


$(document).ready(function() {
        $("#startModal").modal('show');

        let cards = $('.card');
        let game = new CardMatch(100, cards);
        let start = $('#start-btn')
        let playAgain = $('#play-again')



        start.on('click', function() {
                game.startGame();
                console.log(name);

                setName(name);

        });

        playAgain.on('click', function() {
                game.startGame();

        });

        cards.on('click', function() {
                game.cardFlip(this);
        });




});
