class Form {
  constructor() {
    this.input = createInput('Name');
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }

  hide_details() {
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
    this.title.hide();
  }

  display() {
    var title = createElement('h2');
    this.title.html("CAR RACING GAME");
    this.title.position(displayWidth / 2 - 50, 0);
    this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
    this.button.position(displayWidth / 2 + 30, displayHeight / 2);

    this.reset.position(displayWidth - 300, 50);
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update_nm_d();
      player.updateCount(playerCount);
      this.greeting.html("HELLO" + player.name);
      this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
      console.log("jkcccj")
    })
    // function reset to reset the database to gamestate 0 and playercount =0
    // now we can enter new data 
    this.reset.mouseClicked(() => {
      console.log("reset called");
      game.updateState(0);
      player.updateCount(0);
    })
  }
}