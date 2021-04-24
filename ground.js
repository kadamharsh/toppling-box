class Ground{
    constructor(){

        this.body =Bodies.rectangle(200,390,200,20,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,400,20);


    }
}







