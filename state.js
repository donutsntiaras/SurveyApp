class state{
    constructor(){}
    getState(){
        var re = database.ref("State");
        re.on("value",function(data){
            State = data.val();
        });
    }
    update(Stat){
        database.ref("/").update({
            State: stat
        });
    }
    async start(){
        if(aState === 0){
            Voter = new voter();
            
            Form = new form();
            Form.display();
        }
    }
}