// Our scene

var m_currentQuizIndex = 0;
var answerBox1;
var quizScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "quizScene" });
    },
    init: function(data) {

        this.message = "Gurup";
        this.score = 0;

    },
    preload: function() {
 
        this.load.image('quiz_bg', './assets/quiz_bg.png');
        // Later set a spritesheet and definr the suitable player
        this.load.image('player', './assets/Perso1.png');
        this.load.image('quiz_box', './assets/box1.png');
        this.load.image('answer_box', './assets/button.png');

        this.load.image('quiz_header_paper', './assets/quiz_header_paper.png');
        this.load.image('quiz_header_correct', './assets/quiz_header_correct.png');
        this.load.image('quiz_header_false', './assets/quiz_header_false.png');


        this.load.image('podium', './assets/podium.png');


    },
    create: function() {
        

        this.input.addPointer(1);

        this.cameras.main.setBackgroundColor('#000000')
 
        var bg = this.add.image(0, 0, 'quiz_bg');
        bg.setScale(window.x_scale + 0.1, window.y_scale + 0.1).setInteractive();
        bg.setOrigin(window.backgroundAnchors[0], window.backgroundAnchors[1]);
        bg.on('pointerdown', ()=>{
            // ...
            // getAnswer();
            console.log("Next")
            if(m_currentQuizIndex < 4)
            {
                m_currentQuizIndex++;
                initQuiz();
            }
        },this);

        // Player
        var player = this.add.image(screenW * 0.15, screenH * 0.85, 'player' );
        player.setScale(0.150, 0.150)

        
     
        // Quiz Box
        var quizBox = this.add.image(screenW * 0.65, screenH * 0.55, 'quiz_box' );
        quizBox.setScale(0.450, 0.450);
        

        
        // Quiz items

        var quizHeader = this.add.text(
            screenW * 0.64, 
            screenH * 0.30, 
            "QUESTION", 
            {
                fontSize: 45,
                color: "red",
                fontStyle: "bolder",
                fontFamily: "Arial"
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
            if(answerBox1)
            {
                quizQuestion.destroy(true);

                answerBox1.destroy(true);
                answerBox2.destroy(true);
                answerBox3.destroy(true);
                answerBox4.destroy(true);

                answer1.destroy(true);
                answer2.destroy(true);
                answer3.destroy(true);
                answer4.destroy(true);

                // Simulate score here
                _self.score += 10;
            }

            quizQuestion = _self.add.text(
                screenW * 0.65, 
                screenH * 0.45, 
                quiz.quiz, 
                {
                    fontSize: 18,
                    color: "black",
                    fontStyle: "bolder",
                    fontFamily: "Helvetica",
                    
                }
            ).setOrigin(0.5);

        
            // Answer Block
            var answerGroup1 = _self.add.group();
            answerBox1 = _self.add.image(screenW * 0.53, screenH * 0.63, 'answer_box' );
            answerBox1.setScale(0.35, 0.450);
            answer1 = _self.add.text(
                0, 0, quiz.answers[0].value , {fontSize: 24, color: "black",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);

             answerGroup1.addMultiple([answerBox1, answer1])
             answerGroup1.setXY(screenW * 0.53, screenH * 0.63)
            
            
    
            // Answer Block
            var answerGroup2 = _self.add.group();
            answerBox2 = _self.add.image(0, 0, 'answer_box' );
            answerBox2.setScale(0.35, 0.450);
            answer2 = _self.add.text(
                0, 0, quiz.answers[1].value, {fontSize: 24, color: "black",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);
            answerGroup2.addMultiple([answerBox2, answer2])
            answerGroup2.setXY(screenW * 0.78, screenH * 0.63);
    

            // Answer Block
            var answerGroup3 = _self.add.group();
            answerBox3 = _self.add.image(0, 0, 'answer_box' );
            answerBox3.setScale(0.35, 0.450);
            answer3 = _self.add.text(
                0, 0, quiz.answers[2].value, {fontSize: 24, color: "black",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);
            answerGroup3.addMultiple([answerBox3, answer3])
            answerGroup3.setXY(screenW * 0.53, screenH * 0.80);
    
                    
            answer3.on('pointerdown', ()=>{
                // ...
                // getAnswer();
                console.log("Ans 3")

            },this);
            // Answer Block
            var answerGroup4 = _self.add.group();
            answerBox4 = _self.add.image(0, 0, 'answer_box' );
            answerBox4.setScale(0.35, 0.450)
            answer4 = _self.add.text(
                0, 0, quiz.answers[3].value, {fontSize: 24, color: "black",fontStyle: "bolder", fontFamily: "Helvetica" }
            ).setOrigin(0.5, 0.65);
            answerGroup4.addMultiple([answerBox4, answer4])
            answerGroup4.setXY(screenW * 0.78, screenH * 0.80);



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
            0, 0, "30", {fontSize: 18, color: "white",fontStyle: "bold", fontFamily: "Helvetica" }
        ).setOrigin(0.5);
        headerGroupPaper.addMultiple([headerBgPaper, headerTextPaper])
        headerGroupPaper.setXY(screenW * 0.12, screenH * 0.10);  
        headerGroupPaper.propertyValueSet("x", screenW * 0.14, 0 ,1 , 1)
        headerGroupPaper.propertyValueSet("y", screenH * 0.09, 0 ,1 , 1)
          
        // Header Block - CORRECT
        var headerGroupCorrect = this.add.group();
        var headerBgCorrect = this.add.image(0, 0, 'quiz_header_correct' );
        headerBgCorrect.setScale(0.450, 0.450);
        var headerTextCorrect = this.add.text(
            0, 0, "40", {fontSize: 18, color: "white",fontStyle: "bold", fontFamily: "Helvetica" }
        ).setOrigin(0.5);
        headerGroupCorrect.addMultiple([headerBgCorrect, headerTextCorrect])
        headerGroupCorrect.setXY(screenW * 0.28, screenH * 0.08);  
        headerGroupCorrect.propertyValueSet("x", screenW * 0.29, 0 ,1 , 1)
        headerGroupCorrect.propertyValueSet("y", screenH * 0.095, 0 ,1 , 1)
        
        
        // Header Block - FALSE
        var headerGroupFalse = this.add.group();
        var headerBgFalse = this.add.image(0, 0, 'quiz_header_false' );
        headerBgFalse.setScale(0.450, 0.450);
        var headerTextFalse = this.add.text(
            0, 0, "10", {fontSize: 18, color: "white",fontStyle: "bold", fontFamily: "Helvetica" }
        ).setOrigin(0.5);
        headerGroupFalse.addMultiple([headerBgFalse, headerTextFalse])
        headerGroupFalse.setXY(screenW * 0.44, screenH * 0.08);  
        headerGroupFalse.propertyValueSet("x", screenW * 0.46, 0 ,1 , 1)
        headerGroupFalse.propertyValueSet("y", screenH * 0.085, 0 ,1 , 1)
        


            
        //Podium

        var podium = this.add.image(0 , 0, 'podium' );
        podium.setScale(2.0, 2.0);

        // SCORE
        this.podiumScore = this.add.text(
            0, 
            0,
            this.score.toString(), 
            {
                fontSize: 45,
                color: "white",
                fontStyle: "bolder",
                fontFamily: "Impact"
            }
        ).setOrigin(0.15);

        var scoreGroup = this.add.group();

        scoreGroup.addMultiple([podium, this.podiumScore])
        scoreGroup.setXY(screenW * 0.15, screenH * 1.05);
        scoreGroup.propertyValueSet("y", screenH * 0.85, 0 ,1 , 1)
    


 
    },
    
    update: function() {

        this.podiumScore.setText(this.score.toString());
    },

    render: function() {

         // Display
        this.debug.spriteBounds(answerBox1);
        this.debug.spriteCorners(answerBox1, true, true);
    }
});


function getAnswer()
{
    console.log("Clicked !!!");
}



 
 