class form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("name");
        this.input1 = createInput("email id");   
        this.button = createButton("Submit");
    }

    display(){
        textSize(100);
        this.title.html("Survey to Bring a Change");
        this.title.position(800,displayHeight/6);

        this.input.position(800,displayHeight/4);
        this.input1.position(800,displayHeight/2);
        this.button.position(800,1000);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.input1.hide();
            this.button.hide();

            Voter.name = this.input.value();
            Voter.emailid = this.input1.value();

            VoterCount+=1;
            Voter.index = VoterCount;
            Voter.updateIndex();
            Voter.updateCount();

            State = new state();
            State.getState();
            State.update(1);
        })
    }
}