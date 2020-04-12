//Rocket Prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to the existing scene
        scene.add.existing(this);
        this.isFiring = false;   // track rocket's firing status

    }


    update() {
        if(!this.isFiring)
        {
            if(keyLEFT.isDown && this.x >=47)
            {
                this.x -=2;
            }
            else if (keyRIGHT.isDown && this.x <=592)
            {
                this.x +=2;
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true;
        }

        if(this.isFiring && this.y >=108) {
            this.y -=2;
        }

        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }
}