class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('a_key','./assets/A.png')
        this.load.image('f_key','./assets/F.png')
        this.load.image('d_key','./assets/D.png')
        this.load.image('left_key','./assets/left.png')
        this.load.image('right_key','./assets/right.png')
        this.load.image('up_key','./assets/up.png')
        this.load.image('textbox','./assets/textbox.png')
    }
    create() {

        
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '18px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let centerX = game.config.width/2;
        let centerY = game.config.height/2; 
        let textSpacer = 64;

        this.title = this.add.sprite(115,0,'textbox').setOrigin(0,0);
        this.A_image = this.add.sprite(500,340, 'a_key').setOrigin(0,0);
        this.D_image = this.add.sprite(500,380, 'd_key').setOrigin(0,0);
        this.up_image = this.add.sprite(200, 350, 'up_key').setOrigin(0,0);
        this.left_image = this.add.sprite(200, 390, 'left_key').setOrigin(0,0);
        this.right_image = this.add.sprite(200, 430, 'right_key').setOrigin(0,0);
        


        this.add.text(100, 360, 'Player 1 Fire', menuConfig).setOrigin(0.5);
        this.add.text(100,400, 'Player 1 Left', menuConfig).setOrigin(0.5);
        this.add.text(100,440, 'Player 1 Right', menuConfig).setOrigin(0.5);
        this.add.text(400,360, 'Player 2 Speedup', menuConfig).setOrigin(0.5);
        this.add.text(400,400, 'Player 2 Slowdown', menuConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY-10,'', menuConfig)
        menuConfig.backgrounColor = '#FF4500';
        menuConfig.color = '#FF4500';
        this.add.text(centerX, centerY-10, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+20, 'Press ↑ for Multiplayer', menuConfig).setOrigin(0.5);



        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);



        // launch the next scene
        //this.scene.start("playScene");
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000,
            smallshipSpeed: 5,
            isMultiplayer: false,
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");   
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000,
            smallshipSpeed: 7,
            isMultiplayer: false,
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");  

        }
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 60000,
            smallshipSpeed: 7,
            isMultiplayer: true,
          
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");  
        }


   
      }
}