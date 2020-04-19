//Smallship Prefab
class Smallship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        //add object to the existing scene
        scene.add.existing(this);
        this.points = pointValue;

    }


    update() {
        if(keyA.isDown &&  game.settings.isMultiplayer)
        {
            this.x -= game.settings.smallshipSpeed +3; //move spaceship left
        }
        else if(keyD.isDown &&  game.settings.isMultiplayer)
        {
            this.x -= game.settings.smallshipSpeed - 3;
        }
        else{
            this.x -= game.settings.smallshipSpeed;
        }

        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }

    }
    reset() {
        this.x = game.config.width + 250;
    }
}