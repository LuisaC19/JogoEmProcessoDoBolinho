class Game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
        this.leaderBoard = createElement("h2");
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
        this.carMove = false;
        this.leftButtonDown = false;
        this.store = false;
        this.scene = 1;
    }
    history(){
        console.log("Historinha acontecendo...")
    }
    start(){
         player = new Player();
         chicken = new Animals('assets/imgGalinha.png');
         cow = new Animals('assets/imgVaquinha.png');
        // form = new Form();
        // form.display();
    }
    handleElements(){
        // form.hide();
        // form.titleImg.position(40,50);
        // form.titleImg.class("gameTitleAfterEffect");
        // this.resetTitle.html("Reiniciar Jogo");
        // this.resetTitle.class("resetText");
        // this.resetTitle.position(width/2 +200, 40);
        // this.resetButton.class("resetButton");
        // this.resetButton.position(width/2 +230, 100);
    }
    play(){
        if(this.store){
            console.log("Entrei na loja");
            //image(store1Img, 0, 0, width, height);
            this.handleStoreControle();
            switch (this.scene) {
                case 1:
                    background(store1Img);
                    break;
            
                case 2:
                    background(store2Img);
                    break;

                default:
                    //background(backgroundImg);
                    this.store = false;
                    this.scene = 1;
                    player.body.y += 10;
                    break;
            }
            
        }
        else{
        // this.handleElements();
        // this.handleMousePressed();
         image(backgroundImg, -width, -height, width*2, height*2);
         if(player.body.x < width/2 && player.body.x > -width/2){
            camera.x = player.body.x;
         }
         if(player.body.y < height/2 && player.body.y > -height/2){
            camera.y = player.body.y;
         }
           //console.log("x:"+ player.body.x);
           //console.log("y:"+ player.body.y);
         drawSprites();
         this.handleControls();
         this.handleStores();
        }
    }
    handleControls(){
        if(keyDown(87)&& player.body.y>-height){
            player.body.y -= 6;
        }
        if(keyDown(83)&& player.body.y<height){
            player.body.y += 6;
        }
        if(keyDown(68) && player.body.x<width){
            player.body.x += 6;
        }
        if(keyDown(65)&& player.body.x>-width){
            player.body.x -= 6;
        }
    }
    handleStoreControle(){
        if(keyDown(32)){
            this.scene += 1;
        }
    }
    handleStores(){
        if(player.body.x < -370 && player.body.x > -562 &&
            player.body.y < 32 && player.body.y > -70  ){
                this.store = true;
            }
        if(player.body.x < -394 && player.body.x > -604 &&
            player.body.y < 740 && player.body.y > 482  ){
                this.store = true;
            }
    }
    showCake() {
        // swal({
        //   //title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
        //   title: `Incrível!${"\n"}${player.rank}º lugar`,
        //   text: "Você alcançou a linha de chegada com sucesso!",
        //   imageUrl:
        //     "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
        //   imageSize: "100x100",
        //   confirmButtonText: "Ok"
        // });
      }
      showIngredients() 
      {
        // push();
        // image(lifeImage, width / 2 - 130,player.positionY - height/2 + 10, 20, 20);
        // fill("white");
        // rect(width / 2 - 100,player.positionY - height/2 + 10, 185, 20);
        // fill("#f50057");
        // rect(width / 2 - 100, player.positionY - height/2 + 10, player.life, 20);
        // noStroke();
        // pop();
      }
     
    handleMousePressed() {
        // this.resetButton.mousePressed(() => {
        //     database.ref("/").update({
        //         'carsAtEnd': 0,
        //         'gameState': 0,
        //         'playerCount': 0,
        //         'players': {}
        //     });
        //     window.location.reload();
        // });
      }
      handleCows(index){
        // cars[index].overlap(goldCoin,function(collector,collected){
        //     player.score += 10;
        //     collected.remove();
        //     player.update();
        // })
      }
      handleChickens(index){
    //     cars[index].overlap(fuel,function(collector,collected){
    //         player.fuel = 200;
    //         collected.remove();
    //     })
    //     if (this.carMove && player.fuel > 0){
    //         player.fuel -= 0.3;
    //     }
    //     if (player.fuel < 0){
    //         gameState = this.gameOver();
    //     }
    //   }
    //   addSprites(spriteGroup,spriteCount,images,scale,positions=[])
    //   {
    //     for(var i = 0; i < spriteCount; i += 1){
    //         var x,y;
    //         if(positions.length==0){
    //             x = random(width/2 + 150,width/2 - 150);
    //             y = random(-height*4.5,height-400);
    //         }
    //         else{
    //             x = positions[i].x;
    //             y = positions[i].y;
    //             images = positions[i].image;
    //         }
    //         var sprite = createSprite(x,y)
    //         sprite.addImage(images);
    //         sprite.scale = scale;
    //         spriteGroup.add(sprite);
    //     }
    
      }
    
}
