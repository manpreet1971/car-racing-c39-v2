class Game {
    constructor() { }
    //1 creating sprites


    getState() {
        var gameStateRef = database.ref('gamestate')
        gameStateRef.on("value",
            function (data) {
                GAMESTATE = data.val()
            })
    }

    async start() {
        if (GAMESTATE == 0) {
            player = new Player();
            var playerCountRef = await database.ref('playercount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                console.log(playerCount);
                player.getCount();
            }
            form = new Form();
            form.display();

        }
        car1 = createSprite(100, 200);
        car1.addImage(car1Img);
        car2 = createSprite(300, 200);
        car2.addImage(car2Img);
        car3 = createSprite(500, 200);
        car3.addImage(car3Img);
        car4 = createSprite(700, 200);
        car4.addImage(car4Img);
        cars = [car1, car2, car3, car4];

    }

    updateState(GAMESTATE) {
        database.ref('/').update({
            gamestate: GAMESTATE
        })
    }

    play() {
        form.hide_details();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        Player.getCarsAtEnd();
        //2
        if (allPlayers !== undefined) {
            background("brown");
            image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            console.log(displayHeight)
            console.log(displayWidth);
            var index = 0; //refering to all the four cars in an array
            var x = 170;    //x position of car
            var y;    //y position of car


            for (var plr in allPlayers) {
                index++;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance; //y == distance travelled by the player - height of dispaly device 
                cars[index - 1].x = x;  //x incremented by 200 and assigned to car's x position
                cars[index - 1].y = y; //y value aasigned to the car's y value fetched from the cars array

                if (index === player.index) {       //if index value equals individual player index(player.index is derived from playercount)
                    fill("red");
                    ellipse(x, y, 60, 60);

                    cars[index - 1].shapeColor = "red"; //cuurently active player car will be red color
                    camera.position.x = displayWidth / 2; //camera's x position  will be in the center of the width
                    camera.position.y = cars[index - 1].y; //camera's y position  will be car's y value
                }
            }
        }
        
        // press UP_Arrow to play the game....so distance will be incremented
        if (keyDown(UP_ARROW) && player.index !== null) {
            console.log("kvfdjvn")
            player.distance += 50;
            player.update_nm_d(); //uodate the distance in the database
        }
        if (player.distance >2000) {
            GAMESTATE=2;
            console.log("GAMESTATE")
            console.log(GAMESTATE);
            
         
            
            player.rank++;
            console.log(player.rank);
            playerRank=player.rank;
            Player.updateCarsAtEnd(player.rank)

         }
        drawSprites(); //for car sprites

    }
    end() {
       
        console.log("Game End called ");
        
        //p=createElement("h1",playerRank);
       // p.position(displayWidth/2+100,300);
    }

}
