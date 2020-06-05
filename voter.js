class voter{
    constructor(){
        this.name = null;
        this.emailid = null; 
        this.index = null;
    }
    getCount(){
        var vCount = database.ref("voterCount");
        vCount.on("value",(data)=>{
            VoterCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            votercount: count
        });
    }
    updateIndex(){
        var vindex = "voters/voter" + this.index;
        database.ref(vindex).set({
            name: this.name,
            emailid: this.emailid
        });
    }
}