//Spaceship Prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        //add object to the existing scene
        scene.add.existing(this);
        this.points = pointValue;

    }


    update() {
        this.x -= game.settings.spaceshipSpeed; //move spaceship left

        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }

    }
    reset() {
        this.x = game.config.width;
    }
}