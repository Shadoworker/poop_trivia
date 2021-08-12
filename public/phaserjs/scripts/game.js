  




var screenW = 0;
var screenH = 0;

// var baseW = 820;
// var baseH = 586;

var baseW = 975;
var baseH = 570;

window.x_scale = 1.5;
window.y_scale = 1.5;

window.playerPositions = [0.20, 0.35, 0.50, 0.64, 0.78]; // Mobile pos
// window.backgroundAnchors = [0.10,0.25];
window.backgroundAnchors = [0.0,0.0];

window.bgMarginLeft = 0;

var ctnr = document.getElementById("container");
var gameBox = document.getElementById("game");

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 600px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    screenW = window.innerWidth;
    screenH = window.innerHeight;

    ctnr.style.width = screenH + 'px';
    ctnr.style.height = screenW + 'px';
    var t_x = screenW * 0.405;
    var t_y = screenH * 0.22;
    ctnr.style.transform = 'rotate(90deg)';
    ctnr.style.top = 1 * t_y + 'px';
    ctnr.style.left = -1 * t_x + 'px';
    // ctnr.style.transform = 'rotate(90deg) translate('+t_x+'px , '+t_y+'px)';
    
    gameBox.style.backgroundColor = 'gainsboro';


    var temp = screenW;
    screenW = screenH;
    screenH = temp;


    // Scale
    // window.x_scale = screenW / 650 + 0.25;
    // window.y_scale = screenH / 380 + 0.25;

    var hscale = (window.innerWidth) / 380;


    window.x_scale = hscale + 0.0;
    window.y_scale = hscale + 0.0
  
    var bgWidth = (650 + (650 * window.x_scale));
    window.bgMarginLeft = screenW - bgWidth / 2;
    // window.backgroundAnchors = [hscale,hscale];

    console.log(hscale);


  }
  else
  {
    screenW = baseW;
    screenH = baseH;

    window.playerPositions = [0.27, 0.38, 0.50, 0.62, 0.74]; // For Pc
    window.backgroundAnchors = [0.0,0.0];


  }
}



window.onload = function() {
 
    // Register event listener
    mediaQuery.addListener(handleTabletChange)

    // Initial check
    handleTabletChange(mediaQuery)

	
    var config = {
        type: Phaser.CANVAS,
        width: screenW,
        height: screenH,
        parent : 'game',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: [ splashScene, gameScene, quizScene],
    };

    // window.m_currentScene = "splashScene";
    window.m_currentScene = "quizScene";

    if(window.ptGame)
        window.ptGame.cache.destroy();

    window.ptGame = new Phaser.Game(config);




    // Start the scene
    ptGame.scene.start(m_currentScene);
    // game.scene.start('gameScene');

    // setTimeout(() => {
    //     swicthScene("gameScene");
    // }, 1500);




    // function swicthScene(newScene)
    // {
    //     ptGame.scene.start(newScene);
    //     ptGame.scene.bringToTop(newScene);
    //     ptGame.scene.stop(m_currentScene);
    //     m_currentScene = newScene;
    // }

};