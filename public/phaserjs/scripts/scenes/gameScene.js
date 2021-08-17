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
        
        this.load.image('btn_bg', './assets/button.png');

        this.load.spritesheet('player', './assets/glitch_walker.png', { frameWidth: 104, frameHeight: 114 });
        this.load.image('podium', './assets/podium.png');


        // Players
        this.load.image('player1', './assets/perso1.png');
        this.load.image('player2', './assets/perso2.png');
        this.load.image('player3', './assets/perso3.png');
        this.load.image('player4', './assets/perso4.png');
        this.load.image('player5', './assets/perso5.png');


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
    
     
 
    
        // Animation set
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ] }),
            // frameRate: 8,
            repeat: -1
        });


        // Players

        var player1 = this.add.image(screenW * window.playerPositions[0] , screenH * 0.55, 'player1' );
        player1.setScale(0.045);
    
        var player2 = this.add.image(screenW * window.playerPositions[1] , screenH * 0.56, 'player2' );
        player2.setScale(0.045);
    
        var player3 = this.add.image(screenW * window.playerPositions[2] , screenH * 0.56, 'player3' );
        player3.setScale(0.045);
    
        var player4 = this.add.image(screenW * window.playerPositions[3] , screenH * 0.56, 'player4' );
        player4.setScale(0.045);
    
        var player5 = this.add.image(screenW * window.playerPositions[4] , screenH * 0.56, 'player5' );
        player5.setScale(0.045);
    
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




        //Btn Play
        var playGroup1 = this.add.group();
        playBox1 = this.add.image(screenW * 0.53, screenH * 0.63, 'btn_bg' );
        playBox1.setScale(0.35, 0.450).setInteractive();;
        playText1 = this.add.text(
            0, 0, "JOUER" , {fontSize: 24, color: "black",fontStyle: "bolder", fontFamily: "Helvetica" }
        ).setOrigin(0.5, 0.65);

        playGroup1.addMultiple([playBox1, playText1])
        playGroup1.setXY(screenW * 0.53, screenH * 0.90)
        playBox1.on('pointerdown', ()=>{
            // ...
            swicthScene('quizScene');

        },this);


        var _self = this;
    
        function swicthScene(newScene)
        {
            _self.scene.start(newScene);
            _self.scene.bringToTop(newScene);
            _self.scene.stop(m_currentScene);
            window.m_currentScene = newScene;
        }


    },
    
    update: function() {}
});



 
 