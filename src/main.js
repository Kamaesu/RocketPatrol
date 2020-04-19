/*

POINT BREAKDOWN
==================================================
Track a high score that persists across scenes and display it in the UI (10)
Add your own (copyright-free) background music to the Play scene (10)
Create a new scrolling tile sprite for the background (10)
Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (25)
Implement a simultaneous two-player mode (50)
Create a new title screen (15) 
Allow the player to control the Rocket after it's fired (10)


*/



let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);

let keyF, keyLEFT, keyRIGHT, keyA, keyD, keyUP;

game.settings = {
    spaceshipSpeed: 3,
    spaceshipSpeed_default: 3,
    gameTimer: 60000, 
    smallshipSpeed: 5,
    smallshipSpeed_default: 5,

    isMultiplayer: false,



}
game.persist = {
    highScore: 0,

}