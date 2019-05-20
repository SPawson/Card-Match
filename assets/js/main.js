class AudioController {
        constructor() {
                this.backgroundMusic = new Audio('assets/audio/bg-music/bg-music.mp3');
                this.flipSound = new Audio('assets/audio/game-sounds/flip.wav');
                this.matchSound = new Audio('assets/audio/game-sounds/match.mp3');
                this.succesSound = new Audio('assets/audio/game-sounds/success.mp3');

                this.backgroundMusic.volume = 0.2;
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

}

function startMusic() {
        let audio = new AudioController();
        audio.startMusic();
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

        startGame = function() {
                this.cardToBeChecked = null;
                this.totalClicks = 0;
                this.timeRemaining = this.totalTime;
                this.matchedCards = [];
                this.busy = true;

                this.shuffleCards(this.cardArray);
        }



        cardFlip = function(card) {
                if (this.canCardFlip(card)) {
                        this.audioController.flip();
                        this.totalClicks++;
                        this.turns = this.turns.text(this.totalClicks);
                        $(card).addClass('visible');
                }
        }

        canCardFlip = function(card) {
                return true;
        }
}

$(function() {
        $("#startModal").modal('show');

        let cards = $('.card');
        let game = new CardMatch(100, cards);
        let start = $('#start-btn')

        start.on('click', function() {
                game.startGame();

        });

        cards.on('click', function() {
                game.cardFlip(this);
        });


});
