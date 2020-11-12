class Paper {
    constructor (x, y, width, height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.Body=Bodies.circle(x,y,radius,[options],[maxSides])
    
      }
display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
    
}