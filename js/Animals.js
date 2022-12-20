class Animals {
    constructor(ImageName)
    {
        this.name = null;
        this.body = createSprite(160,50,44,44);
        this.image = loadImage(ImageName);
        this.body.addImage(this.image);
        this.body.velocityX = 3;
        this.body.velocityY = 4;
        //this.body.scale = 0.5;
        }
    
}