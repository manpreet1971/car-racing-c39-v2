var canvas;
var GAMESTATE = 0, playerCount = 0, database,playerRank;
var form, player, game, allPlayers, p;
var car1, car2, car3, car4, cars,p;
function preload() {
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  track = loadImage("images/track.png");
}
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255, 255, 255);
  if (playerCount === 4) {
    game.updateState(1);
  }
  if (GAMESTATE === 1) {
    clear();
    game.play()
  }
  if (GAMESTATE === 2) {
    clear();
    game.end();
  }
}