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

describe('Check difficulty modes function correctly', function() {

    let mode;

    beforeEach(() => {
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
                            <input type="text" class="form-control modal-txtbox" id="name" placeholder="Name" aria-label="Name input" required>
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



    describe('Check easy mode functions correctly', function() {
        beforeEach(() => {
            mode = new ModeSelection;

            mode.easyMode();
        });

        it('Modal should be loaded into the DOM',() => {
            expect($('#startModal')[0]).toBeInDOM()
        });


        it('Easy button should be highlighted when pressed', () => {


            expect($('#easy-mode')).toHaveClass('btn-active')
        });

    });
});
