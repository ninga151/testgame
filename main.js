import { Player, Enemy, Base, Supply } from './modules.js'
let main = document.getElementById("main")
let ctx;

let player = new Player();
console.log(player.getLevel());
let middlex = (main.clientWidth) / 2
let middley = (main.clientHeight) / 2
window.onload = function() {
    ctx = main.getContext("2d");
    requestAnimationFrame(game)
}

function game() {
    ctx.clearRect(0, 0, main.width, main.height);
    if (ctx == null) { document.getElementById("main").replaceWith("Unable to load Canvas, please redownload site or search for internet.") }
    player.draw(ctx);
    console.log("yes")
    requestAnimationFrame(game)
}