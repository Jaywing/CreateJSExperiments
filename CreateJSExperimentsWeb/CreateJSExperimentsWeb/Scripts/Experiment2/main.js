(function (window) {
    function Main() {
    };

    Main.prototype = {
        player: null,
        run: function (canvas) {
            this.stage = new createjs.Stage(canvas);
            this.player = new Player(this);
            this.horseman = new Horseman(this);

            window.Keyboard.setTarget("body");

            createjs.Ticker.setFPS(60);
            createjs.Ticker.useRAF = true;
            createjs.Ticker.addListener(this);
        },
        tick: function (dt, paused) {
            this.player.update();
            this.horseman.update();
            this.stage.update();
        }
    };

    window.Main = Main;
}(window));

$(document).ready(function () {
    new Main().run($("#screen")[0]);
});