export class Player {
    constructor() {
        this._level = 1;
        this._stage = 1;
    }
    getLevel() {
        return this._level;
    };
    draw(ctx) {
        ctx.font = "30px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("Hello World", 10, 50);
        return "a"
    };
}
export class Enemy {

}
export class Supply {

}
export class Base {}