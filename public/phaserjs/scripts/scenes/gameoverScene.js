// Our scene

var gameoverScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "gameoverScene" });

    },
    init: function(data) {

        this.score = 0;
        
    },
    preload: function() {
 
        this.load.image('quiz_bg', './assets/quiz_bg.png');
        // Later set a spritesheet and definr the suitable player
        this.load.image('red_banner', './assets/red_banner.png');
        this.load.image('quiz_box', './assets/box1.png');
        this.load.image('answer_box', './assets/button.png');

        this.load.image('quiz_header_paper', './assets/quiz_header_paper.png');

        this.load.image('star_on', './assets/star_on.png');


    },
        

    create: function() {
        
        // this.scale.lockOrientation("landscape-primary")

        this.input.addPointer(1);

        this.cameras.main.setBackgroundColor('#000000')
 
        var bg = this.add.image(0, 0, 'quiz_bg');
        bg.setScale(window.x_scale + 0.6, window.y_scale + 0.1);
        bg.setOrigin(window.backgroundAnchors[0], window.backgroundAnchors[1]);
        
       
        // Quiz Box
        var gameoverBox = this.add.image(screenW * 0.45, screenH * 0.60, 'quiz_box' );
        gameoverBox.setScale((0.450 * window.itemScaleRatio), (0.450 * window.itemScaleRatio));
        

        // Quiz Box
        var redBanner = this.add.image(screenW * 0.45, screenH * 0.27, 'red_banner' );
        redBanner.setOrigin(0.5, 0.5).setScale((0.450), (0.450));
        

        // Stars
        var star1 = this.add.image(screenW * 0.37, screenH * 0.25, 'star_on' );
        star1.setScale((0.75), (0.75));
        
        var star2 = this.add.image(screenW * 0.45, screenH * 0.22, 'star_on' );
        star2.setScale((0.75), (0.75));

        var star3 = this.add.image(screenW * 0.53, screenH * 0.25, 'star_on' );
        star3.setScale((0.75), (0.75));
        
        // star3.setBlendMode(Phaser.BlendModes.COLOR)
        // Quiz items

        var quizHeader = this.add.text(
            screenW * 0.45, 
            screenH * 0.10, 
            "GAME OVER", 
            {
                fontSize: 42,
                color: "red",
                fontStyle: "bolder",
                fontFamily: "Impact"
            }
        ).setOrigin(0.5);



        var didUKnow = this.add.text(
            screenW * 0.45, 
            screenH * 0.35, 
            "LE SAVAIS-TU ? :", 
            {
                fontSize: 22,
                color: "red",
                fontFamily: "Impact"
            }
        ).setOrigin(0.5);
    

        var quizGroup = this.add.group();
        var quizQuestion, 
            answerBox1, answerBox2, answerBox3, answerBox4, 
            answer1, answer2, answer3, answer4;

        var _self = this;
        function initQuiz() {
            
            
            
            // Get QUIZ
            var quiz = window.quizes[m_currentQuizIndex];
            // Empty

            quizQuestion = _self.add.text(
                screenW * 0.45, 
                screenH * 0.45, 
                "Lorem ipsum dolore \nsit amet adiscipae \nvernum ceris ergo seneris", 
                {
                    fontSize: 18,
                    color: "black",
                    fontStyle: "bolder",
                    fontFamily: "Helvetica",
                    
                }
            ).setOrigin(0.5);

        
            // Answer Block
            var answerGroup1 = _self.add.group();
            answerBox1 = _self.add.image(screenW * 0.33, screenH * 0.63, 'answer_box' );
            answerBox1.setScale(0.40, 0.470).setInteractive();;
            answer1 = _self.add.text(
                0, 0, "ACHETER" , {fontSize: 26, color: "white",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);

            answerGroup1.addMultiple([answerBox1, answer1])
            answerGroup1.setXY(screenW * 0.33, screenH * 0.65)
            answerBox1.on('pointerdown', ()=>{
                // ...

            },this);

            // Answer Block
            var answerGroup2 = _self.add.group();
            answerBox2 = _self.add.image(0, 0, 'answer_box' );
            answerBox2.setScale(0.40, 0.470).setInteractive();;
            answer2 = _self.add.text(
                0, 0, "PROFIL", {fontSize: 26, color: "white",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);
            answerGroup2.addMultiple([answerBox2, answer2])
            answerGroup2.setXY(screenW * 0.58, screenH * 0.65);
            answerBox2.on('pointerdown', ()=>{
                // ...


            },this);

            // Answer Block
            var answerGroup3 = _self.add.group();
            answerBox3 = _self.add.image(0, 0, 'answer_box' );
            answerBox3.setScale(0.40, 0.470).setInteractive();
            answer3 = _self.add.text(
                0, 0, "REJOUER", {fontSize: 26, color: "white",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);
            answerGroup3.addMultiple([answerBox3, answer3])
            answerGroup3.setXY(screenW * 0.33, screenH * 0.80);
            answerBox3.on('pointerdown', ()=>{
                // ...
                swicthScene('splashScene');

            },this);
            // Answer Block
            var answerGroup4 = _self.add.group();
            answerBox4 = _self.add.image(0, 0, 'answer_box' );
            answerBox4.setScale(0.40, 0.470).setInteractive();
            answer4 = _self.add.text(
                0, 0, "QUITTER", {fontSize: 26, color: "white",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);
            answerGroup4.addMultiple([answerBox4, answer4])
            answerGroup4.setXY(screenW * 0.58, screenH * 0.80);
            answerBox4.on('pointerdown', ()=>{
                // ...

            },this);


            quizGroup.addMultiple([quizQuestion, answerGroup1, answerGroup2, answerGroup3, answerGroup4]);


        }


        // First Init
        initQuiz();


         // HEADERS

        // Header Block - PAPER
        var headerGroupPaper = this.add.group();
        var headerBgPaper = this.add.image(0, 0, 'quiz_header_paper' );
        headerBgPaper.setScale(0.450, 0.450);
        var headerTextPaper = this.add.text(
            0, 0, "0", {fontSize: 18, color: "white",fontStyle: "bold", fontFamily: "Helvetica" }
        ).setOrigin(0.5);
        headerGroupPaper.addMultiple([headerBgPaper, headerTextPaper])
        headerGroupPaper.setXY(screenW * 0.12, screenH * 0.10);  
        headerGroupPaper.propertyValueSet("x", screenW * 0.14, 0 ,1 , 1)
        headerGroupPaper.propertyValueSet("y", screenH * 0.09, 0 ,1 , 1)
          
     
            
        function getAnswer(isCorrect)
        {
            console.log("Clicked !!! "+ isCorrect);
 
        }

        var _self = this;
    
        function swicthScene(newScene)
        {
            _self.scene.start(newScene);
            _self.scene.bringToTop(newScene);
            _self.scene.stop(m_currentScene);
            window.m_currentScene = newScene;
        }
 
    },

    update: function() {

        // this.podiumScore.setText(this.score.toString());
    },

    render: function() {

         // Display
      
    }
});





 
 