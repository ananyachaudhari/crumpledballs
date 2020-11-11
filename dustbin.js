class Dustbin 
{
     constructor()
      {
           var options = { isStatic:true } 
           this.body1 = Bodies.rectangle(600,520,20,100, options);
            this.body2 = Bodies.rectangle(700,520,20,100, options);
             this.body3 = Bodies.rectangle(650,560,100,20, options);
              World.add(world, this.body1); World.add(world, this.body2); 
              World.add(world, this.body3);
 }
 display()
 {
      var pos =this.body1.position; 
      var angle =this.body1.angle;
       push();
    translate(pos.x,pos.y);
    rotate(angle); 
 rectMode(CENTER);
fill("green");
    rect(0,0, 20, 100);
pop();
    var pos =this.body2.position;
var angle =this.body2.angle;
     push();
translate(pos.x,pos.y);
     rotate(angle); 
rectMode(CENTER);
    fill("green"); 
     rect(0,0, 20, 100);
     pop();
    var pos =this.body3.position;
 var angle =this.body3.angle; 
     push();
 translate(pos.x,pos.y);
 rotate(angle);
 fill("green")
 rectMode(CENTER);
  rect(0,0, 100, 20);
  pop(); 
}
 }