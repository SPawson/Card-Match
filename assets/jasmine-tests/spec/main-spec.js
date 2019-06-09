describe('Check javascript classes have loaded correctly', function() {

    it('Audio Controller is defined', function() {
        //arrange

        //act

        //assert
        expect(AudioController).toBeDefined();
    })

    it('Class CardMatch is defined', function() {
        //arrange

        //act

        //assert
        expect(CardMatch).toBeDefined();
    });

    it('Class ModeSelection is defined', function() {
        //arrange

        //act

        //assert
        expect(ModeSelection).toBeDefined();
    });

    it('Class ScoreController is defined', function() {

        expect(ScoreController).toBeDefined();
    });


})

describe('Check Start Modal functions work correctly', function() {


    beforeEach(function() {
        setFixtures(`
     <div class="modal fade" id="startModal" tabindex="-1" role="dialog" aria-labelledby="startModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content text-center modal-color">
                <div class="modal-header modal-border-color ">
                    <h2 class="modal-title text-center" id="startModalCenterTitle">Welcome To Westeros</h5>
                    <span aria-hidden="true">&times;</span>
                </div>
                <div class="modal-body">
                    <form>
                        <h4>What is your name traveller?</h4>
                        <div class="form-group">
                            <input type="text" class="form-control modal-txtbox text-center" id="name" placeholder="Name" aria-label="Name input" required>
                        </div>
                    </form>
                    
                    <div class="mode-select row">
                        <div class="col-sm-12 mode-header">
                           <h4>Select your difficulty</h4> 
                        </div>
                        
                        <div class="col-xs-12 col-sm-4">
                            <button id="easy-mode" class="btn btn-mode btn-easy">Easy</button>
                        </div>
                         <div class="col-xs-12 col-sm-4">
                            <button id="medium-mode" class="btn btn-mode btn-med">Medium</button>
                        </div>
                         <div class="col-xs-12 col-sm-4">
                            <button id="hard-mode" class="btn btn-mode btn-hard btn-active">Hard</button>
                        </div>
                    </div>
                    
                    <div id="rules-text" class="rules-section">
                        <h2>The Rules:</h2>
                        <p> The aim of the game is too match all of the cards within the given amount of time. </p>
                        <p>Try to complete the game as quickly as possible to earn a higher score.</p>
                    </div>
                </div>
                <div class="modal-footer modal-border-color">
                    <button type="button" class="btn btn-primary btn-drkred" id="start-btn">Start</button>
                    <button type="button" id="rules" class="btn btn-primary btn-drkred">Rules</button>
                </div>
            </div>
        </div>
    </div>
        `)
    });



    describe('Check easy mode functions', function() {
        beforeEach(function() {
            this.mode = new ModeSelection();

        });

        it('easyButton can be clicked', function() {
            var spyEvent = spyOnEvent($('#easy-mode'), 'click');
            $('#easy-mode').trigger("click");
            expect('click').toHaveBeenTriggeredOn($('#easy-mode'));
            expect(spyEvent).toHaveBeenTriggered();
        })


        it('easyMode() should be called', function() {

            var spy = spyOn(this.mode, 'easyMode')

            this.mode.easyMode();

            expect(spy).toHaveBeenCalled()
        });

        it('btn-active to be applied when easy function activated', function() {

            var spy = spyOn(this.mode, 'easyMode').and.callThrough();


            expect($('#easy-mode')).toHaveClass('btn-active')
        });

    });

    describe('Check medium mode functions correctly', function() {
        beforeEach(function() {
            mode = new ModeSelection;

        });

        it('mediumButton can be clicked', function() {
            var spyEvent = spyOnEvent($('#medium-mode'), 'click');
            $('#medium-mode').trigger("click");
            expect('click').toHaveBeenTriggeredOn($('#medium-mode'));
            expect(spyEvent).toHaveBeenTriggered();
        })


        it('medMode() should be called', function() {

            var spy = spyOn(mode, 'medMode')

            mode.medMode();

            expect(spy).toHaveBeenCalled()
        });

    });

    describe('Check hard mode functions', function() {
        beforeEach(function() {
            mode = new ModeSelection;

        });

        it('mediumButton can be clicked', function() {
            var spyEvent = spyOnEvent($('#hard-mode'), 'click');
            $('#hard-mode').trigger("click");
            expect('click').toHaveBeenTriggeredOn($('#hard-mode'));
            expect(spyEvent).toHaveBeenTriggered();
        })


        it('hardMode() should be called', function() {

            var spy = spyOn(mode, 'hardMode')

            mode.hardMode();

            expect(spy).toHaveBeenCalled()
        });

        it('hardmode should load with the .btn-active class', function() {

            let hardBtn = $('#hard-mode');

            expect(hardBtn).toHaveClass('btn-active')
        });

    });



    describe('Check rules function', function() {


        it('mediumButton can be clicked', function() {
            var spyEvent = spyOnEvent($('#rules'), 'click');
            $('#rules').trigger("click");
            expect('click').toHaveBeenTriggeredOn($('#rules'));
            expect(spyEvent).toHaveBeenTriggered();
        })

    });

    describe('Check start button function', function() {
        beforeEach(function() {
            var cards = ['Danny', 'Jon', 'Arya', 'Tyrion', 'mel', 'White', 'Jaime', 'Bran'];

            this.game = new CardMatch(100, cards);

            this.score = new ScoreController(cards);

        });

        it('start button can be clicked', function() {
            var spyEvent = spyOnEvent($('#start-btn'), 'click');
            $('#start-btn').trigger("click");
            expect('click').toHaveBeenTriggeredOn($('#start-btn'));
            expect(spyEvent).toHaveBeenTriggered();
        })


        it('startGame() should be called', function() {

            var spy = spyOn(this.game, 'startGame')

            this.game.startGame();

            expect(spy).toHaveBeenCalled()
        });

    });
});

describe('Player control dashboard functionality', function() {


    beforeEach(function() {
        setFixtures(`
        
        <div class="row icons-container">
                        <div class="col-4 icon-container">
                            <div class="background-icon">
                                <i id="menu" class="fas fa-bars icon"></i>
                            </div>
                        </div>
                        <div  class="col-4 icon-container">
                            <div class="background-icon ">
                                <i id="sound" class="fas fa-volume-up icon"></i>
                            </div>
                        </div>
                        <div class="col-4 icon-container">
                            <div class="background-icon">
                                <i id="side-playAgain" class="fas fa-redo-alt icon"></i>
                            </div>
                        </div>
                        
        `)
    });
    
     beforeEach(function() {
        setFixtures(`
        
        <div class="row icons-container">
                        <div class="col-4 icon-container">
                            <div class="background-icon">
                                <i id="menu" class="fas fa-bars icon"></i>
                            </div>
                        </div>
                        <div  class="col-4 icon-container">
                            <div class="background-icon ">
                                <i id="sound" class="fas fa-volume-up icon"></i>
                            </div>
                        </div>
                        <div class="col-4 icon-container">
                            <div class="background-icon">
                                <i id="side-playAgain" class="fas fa-redo-alt icon"></i>
                            </div>
                        </div>
                        
        `)
    });
    
    beforeEach(function() {
    this.game
    });


    it('Menu button can be clicked', function() {
      var spyEvent = spyOnEvent($('#menu'), 'click');
            $('#menu').trigger("click");
            expect('click').toHaveBeenTriggeredOn($('#menu'));
            expect(spyEvent).toHaveBeenTriggered();
    });
    
     it('Sound button can be clicked', function() {
      var spyEvent = spyOnEvent($('#sound'), 'click');
            $('#sound').trigger("click");
            expect('click').toHaveBeenTriggeredOn($('#sound'));
            expect(spyEvent).toHaveBeenTriggered();
    });
        
})

