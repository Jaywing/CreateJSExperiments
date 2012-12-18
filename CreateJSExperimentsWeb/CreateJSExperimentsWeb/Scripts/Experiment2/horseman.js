(function (window) {
    function Horseman(main) {
        this.main = main;

        this.width = 80;
        this.height = 80;
        this.sprite = new createjs.BitmapAnimation(
            new createjs.SpriteSheet({
                "animations": {
                    "idle": [0],
                    "south": [0, 3, "south", 4],
                    "west": [4, 7, "west", 4],
                    "east": [8, 11, "east", 4],
                    "north": [12, 15, "north", 4]
                },
                "images": ["/Content/assets/odin.png"],
                "frames": {
                    "width": this.width,
                    "height": this.height,
                    "count": 16
                }
            }));
        this.sprite.x = this.main.stage.canvas.width - this.width;
        this.sprite.y = this.main.stage.canvas.height - this.height;
        this.sprite.gotoAndPlay("idle");

        this.main.stage.addChild(this.sprite);

        this.direction = new createjs.Point(0, 0);

        return this;
    };

    Horseman.prototype = {
        width: null,
        height: null,
        update: function () {
            var dx = this.main.player.sprite.x - this.sprite.x;
            var dy = this.main.player.sprite.y - this.sprite.y;
            
            var movement = new createjs.Point(0, 0);
            if (Math.abs(dx) > Math.abs(dy))
                movement.x = dx > 0 ? 1 : -1;
            else if (Math.abs(dx) < Math.abs(dy))
                movement.y = dy > 0 ? 1 : -1;

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

            if ((this.sprite.x + movement.x) > 0 && (this.sprite.x + movement.x + this.width) < this.main.stage.canvas.width)
                this.sprite.x += movement.x;
            if ((this.sprite.y + movement.y) > 0 && (this.sprite.y + movement.y + this.height) < this.main.stage.canvas.height)
                this.sprite.y += movement.y;
        }
    };

    window.Horseman = Horseman;
}(window));