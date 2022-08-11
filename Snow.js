class Snow{
    constructor(bodyA, pointB);
    var options = {
        bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
    }
    this.snow1 = loadImage('sprites/snow4.webp');
    this.snow2 = loadImage('sprites/snow5.webp');
    this.pointB = pointB
        this.snow = Constraint.create(options);
        World.add(world, this.snow);
}
attach(body){
    this.snow.bodyA = body;
}
fly(){
    this.snow.bodyA = null;
    display(){
        image(this.snow,200,20);






}