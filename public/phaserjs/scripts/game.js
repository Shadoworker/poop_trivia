  




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

window.xMarginPercent = 0.15;
window.yMarginPercent = 0.15;
window.itemScaleRatio = 1.45;
window.scoreGroupYRatio = 0.12;


var body = document.body;
var ctnr = document.getElementById("container");
var gameBox = document.getElementById("game");

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 600px)')

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function handleTabletChange(e) {
  // Check if the media query is true
  // if (e.matches) {
  if (mobileCheck()) { // Mobile
    // Then log the following message to the console
    screenW = window.innerWidth;
    screenH = window.innerHeight;

    ctnr.style.width = screenW + 'px';
    ctnr.style.height = screenH + 'px';
    ctnr.style.alignItems = 'normal';
    ctnr.style.justifyContent = 'normal';


    gameBox.style.width = '100%';
    gameBox.style.height = '100%';
    var t_x = screenW * 0.405;
    var t_y = screenH * 0.22;
    // ctnr.style.transform = 'rotate(90deg)';
    // ctnr.style.top = 1 * t_y + 'px';
    // ctnr.style.left = -1 * t_x + 'px';
    // ctnr.style.transform = 'rotate(90deg) translate('+t_x+'px , '+t_y+'px)';
    
    // body.style.transform = 'rotate(90deg) translate('+t_x+'px , '+t_y+'px)';

    gameBox.style.backgroundColor = 'gainsboro';


    
    window.xMarginPercent = 0.0;
    window.yMarginPercent = 0.0;
    window.itemScaleRatio = 1.0;
    window.scoreGroupYRatio = 0.0;

    // var temp = screenW;
    // screenW = screenH;
    // screenH = temp;


    // Scale
    // window.x_scale = screenW / 650 + 0.25;
    // window.y_scale = screenH / 380 + 0.25;

    var hscale = (screenH) / 380;


    window.x_scale = hscale + 0.0;
    window.y_scale = hscale + 0.0
  
    var bgWidth = (650 + (650 * window.x_scale));
    window.bgMarginLeft = screenW - bgWidth / 2;
    // window.backgroundAnchors = [hscale,hscale];

    // console.log(hscale);


  }
  else
  {
    screenW = baseW;
    screenH = baseH;

    ctnr.style.marginTop = '5%';
    ctnr.style.alignItems = 'center';
    ctnr.style.justifyContent = 'center';

    window.playerPositions = [0.27, 0.38, 0.50, 0.62, 0.74]; // For Pc
    window.backgroundAnchors = [0.0,0.0];


  }
}



window.onload = function() {
 
    // Register event listener
    mediaQuery.addListener(handleTabletChange)

    // Initial check
    handleTabletChange(mediaQuery)

    // console.log(screenW + " --- " + screenH)

	
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
     
        scene: [ splashScene, gameScene, quizScene, gameoverScene],
    };

    window.m_currentScene = "splashScene";
    // window.m_currentScene = "quizScene";
    // window.m_currentScene = "gameoverScene";

    if(window.ptGame)
        window.ptGame.cache.destroy();

    window.ptGame = new Phaser.Game(config);


    // var canvas = document.querySelector('canvas');
    // var ctx = canvas.getContext('2d');

    // ctx.rotate(45 * Math.PI / 180);

    // Start the scene
    ptGame.scene.start(m_currentScene);
    // game.scene.start('gameScene');

    // setTimeout(() => {
    //     swicthScene("gameScene");
    // }, 1500);




    function swicthScene(newScene)
    {
        ptGame.scene.start(newScene);
        ptGame.scene.bringToTop(newScene);
        ptGame.scene.stop(m_currentScene);
        m_currentScene = newScene;
    }

};