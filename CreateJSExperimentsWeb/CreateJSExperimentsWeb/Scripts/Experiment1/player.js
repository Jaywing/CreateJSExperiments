(function (window) {
    function Player(stage) {
        this.stage = stage;

        this.sprite = new createjs.BitmapAnimation(
            new createjs.SpriteSheet({
                "animations": {
                    "idle": [0],
                    "south": [0, 3, "south", 4],
                    "west": [4, 7, "west", 4],
                    "east": [8, 11, "east", 4],
                    "north": [12, 15, "north", 4]
                },
                "images": ["../Content/assets/pirate_m2.png"],
                "frames": {
                    "width": 32,
                    "height": 48,
                    "count": 16
                }
            }));
        this.sprite.x = 0;
        this.sprite.y = 0;
        this.sprite.gotoAndPlay("idle");

        this.stage.addChild(this.sprite);

        this.direction = new createjs.Point(0, 0);

        return this;
    };

    Player.prototype = {
        update: function () {
            var movement = new createjs.Point(0, 0);
            movement.x = (window.Keyboard.isPressed(39)) ? 1 : ((window.Keyboard.isPressed(37)) ? -1 : 0);
            movement.y = (window.Keyboard.isPressed(38)) ? -1 : ((window.Keyboard.isPressed(40)) ? 1 : 0);

            if (this.direction.x != movement.x || this.direction.y != movement.y) {
                if (movement.x === 0 && movement.y === 0)
                    this.sprite.gotoAndPlay("idle");
                else if (movement.x > 0)
                    this.sprite.gotoAndPlay("east");
                else if (movement.x < 0)
                    this.sprite.gotoAndPlay("west");
                else if (movement.y < 0)
                    this.sprite.gotoAndPlay("north");
                else
                    this.sprite.gotoAndPlay("south");
                this.direction = movement;
            }

            this.sprite.x += movement.x;
            this.sprite.y += movement.y;
        }
    };

    window.Player = Player;
}(window));