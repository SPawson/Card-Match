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

$(document).ready(function() {

        $("#startModal").modal('show');

        let cards = $('.card');

        //cards.each(card => {
        //       card.addEventListener('click', () => {
        //             game.flipCard(card);
        //   } )
        //});

     




});
