(function (window, $) {
    function Keyboard() {
        throw "Keyboard cannot be instantiated.";
    };

    Keyboard.pressed = {};

    Keyboard.setTarget = function (target) {
        $(target).bind("keydown", Keyboard.onKeyDown);
        $(target).bind("keyup", Keyboard.onKeyUp);
        $(target).bind("blur", Keyboard.clear);
    };
    Keyboard.onKeyDown = function (e) {
        console.log("keydown: " + e.which);
        Keyboard.pressed[e.which] = true;
        e.preventDefault();
    };
    Keyboard.onKeyUp = function (e) {
        console.log("keyup: " + e.which);
        Keyboard.pressed[e.which] = false;
        e.preventDefault();
    };
    Keyboard.clear = function () {
        Keyboard.pressed = {};
    };
    Keyboard.isPressed = function (key) {
        if (Keyboard.pressed[key])
            return true;
        return false;
    };

    window.Keyboard = Keyboard;
}(window, $));