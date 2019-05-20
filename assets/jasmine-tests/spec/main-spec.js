describe('Check javascript has loaded correctly',function(){
    
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
    })
    
    it()
    
})

describe('Check game initialises correctly' , function() {
    
    beforeEach(() => {
        setFixtures(`
           <div class="modal fade" id="startModal" tabindex="-1" role="dialog" aria-labelledby="startModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="startModalCenterTitle">Welcome To Westeros</h5>
                    <span aria-hidden="true">&times;</span>
                </div>
                <div class="modal-body">
                    <form>
                        <h3>What is your name traveller?</h3>
                        <div class="form-group">
                            <input type="text" class="form-control" id="name" placeholder="Name" aria-label="Name input" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="start-btn">Start</button>
                    <button type="button" class="btn btn-primary">Rules</button>
                </div>
            </div>
        </div>
    </div>
        `)
    });
    
    it('Modal should be loaded into the DOM' , function(){
        expect($('#startModal')[0]).toBeInDOM()
    })
})