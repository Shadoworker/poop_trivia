// Our scene

var gameScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "gameScene" });
    },
    init: function(data) {

        this.message = data.message;

    },
    preload: function() {
 
        this.load.image('screen_bg', './assets/screen_base.png');
        // this.load.image('logo', './assets/phaser3-logo.png');
        // this.load.image('red', './assets/red.png');
        this.load.spritesheet('player', './assets/glitch_walker.png', { frameWidth: 104, frameHeight: 114 });
        this.load.image('podium', './assets/podium.png');


    },
    create: function() {
        
        this.cameras.main.setBackgroundColor('#000000')
 
        var bg = this.add.image(window.bgMarginLeft, 0, 'screen_bg');
        bg.setScale(window.x_scale, window.y_scale)
        bg.setOrigin(window.backgroundAnchors[0], window.backgroundAnchors[1]);
    
        var text = this.add.text(
            640, 
            360, 
            this.message, 
            {
                fontSize: 50,
                color: "#000000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);
    
     

        // var particles = this.add.particles('red');
    
        // var emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // });
    
        // var logo = this.physics.add.image(400, 100, 'logo');
    
        // this.add.image(0, 0, 'player').setOrigin(0, 0);
    
        // Animation set
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] }),
            // frameRate: 8,
            repeat: -1
        });


        // Players

        var player1 = this.add.sprite(screenW * window.playerPositions[0] , screenH * 0.50 );
        player1.play('idle');
    
        var player2 = this.add.sprite(screenW * window.playerPositions[1] , screenH * 0.50 );
        player2.play('idle');
    
        var player3 = this.add.sprite(screenW * window.playerPositions[2] , screenH * 0.50 );
        player3.play('idle');
    
        var player4 = this.add.sprite(screenW * window.playerPositions[3] , screenH * 0.50 );
        player4.play('idle');
    
        var player5 = this.add.sprite(screenW * window.playerPositions[4] , screenH * 0.50 );
        player5.play('idle');
    
        //Podiums

        var podium1 = this.add.image(screenW * window.playerPositions[0] , screenH * 0.63, 'podium' );
        podium1.setScale(0.50, 0.50);
    
        var podium2 = this.add.image(screenW * window.playerPositions[1] , screenH * 0.63, 'podium' );
        podium2.setScale(0.50, 0.50);
    
        var podium3 = this.add.image(screenW * window.playerPositions[2] , screenH * 0.63, 'podium' );
        podium3.setScale(0.50, 0.50);
    
        var podium4 = this.add.image(screenW * window.playerPositions[3] , screenH * 0.63, 'podium' );
        podium4.setScale(0.50, 0.50);
    
        var podium5 = this.add.image(screenW * window.playerPositions[4] , screenH * 0.63, 'podium' );
        podium5.setScale(0.50, 0.50);


    
    
        // logo.setVelocity(100, 200);
        // logo.setBounce(1, 1);
        // logo.setCollideWorldBounds(true);
    
        // emitter.startFollow(logo);
    
    },
    
    update: function() {}
});



 
 