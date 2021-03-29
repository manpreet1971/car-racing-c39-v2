class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }

    getCount() {
        var playerCountRef = database.ref('playercount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    update_nm_d() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }
    updateCount(playerCount) {
        database.ref('/').update({
            playercount: playerCount
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
            console.log("allPlayers inside players")
            console.log(allPlayers)
        })
    }
    static getCarsAtEnd() {
        database.ref("carsatend").on("value", (data) => {
            this.rank = data.val();

        })
    }
    static updateCarsAtEnd(rank1) {
        database.ref('/').update({
            carsatend: rank1
        })
    }

}