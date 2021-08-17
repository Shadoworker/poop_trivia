  
var assetsObj = {
    "sprites": {
        "assets/glitch_walker.png": {
            tile: 104,
            tileh: 114,
            map: {
                walker_start: [0, 0],
                walker_middle: [7, 0],
                walker_end: [7, 1]
            }
        }
    }
};



// var screenW = window.innerWidth;
// var screenH = window.innerHeight;

var baseW = 820;
var baseH = 586;

var playerPositions = [0.14, 0.28, 0.42, 0.56, 0.70]; // Mobile pos

var ctnr = document.getElementById("container");
var gameBox = document.getElementById("game");

// Create a condition that targets viewports at least 600px wide
const mediaQuery = window.matchMedia('(max-width: 600px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    screenW = window.innerWidth;
    screenH = window.innerHeight;

    ctnr.style.width = screenH + 'px';
    ctnr.style.height = screenW + 'px';
    var t_x = screenW * 0.425;
    var t_y = screenH * 0.21;
    ctnr.style.transform = 'rotate(90deg)';
    // ctnr.style.transform = 'rotate(90deg) translate('+t_x+'px , '+t_y+'px)';
    
    ctnr.style.top = 1 * t_y + 'px';
    ctnr.style.left = -1 * t_x + 'px';

    gameBox.style.backgroundColor = 'gainsboro';


    var temp = screenW;
    screenW = screenH;
    screenH = temp;
  }
  else
  {
    screenW = baseW;
    screenH = baseH;

    playerPositions = [0.21, 0.32, 0.44, 0.56, 0.68]; // For Pc

  }
}



window.onload = function() {
 
    // Register event listener
    mediaQuery.addListener(handleTabletChange)

    // Initial check
    handleTabletChange(mediaQuery)

    var gameScene = Crafty.defineScene("gameScene", function() {
   
        Crafty.init(screenW, screenH, document.getElementById('game'));
        Crafty.load(assetsObj, go);
        Crafty.multitouch(true);

        function go() {

                    
            Crafty.background('#FFFFFF url(assets/screen_base.png) no-repeat center center');

            var player1 = Crafty.e('2D, DOM, walker_start, SpriteAnimation')
                .reel("walking", 1000, [
                    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
                    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]
                ])
                .attr({x : screenW * playerPositions[0] , y: Crafty.viewport._height*0.40})
                .animate("walking", -1);


            var player2 = Crafty.e('2D, DOM, walker_start, SpriteAnimation')
            .reel("walking", 1000, [
                [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
                [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]
            ])
            .attr({x : screenW * playerPositions[1] , y: Crafty.viewport._height*0.40})
            .animate("walking", -1);


            var player3 = Crafty.e('2D, DOM, walker_start, SpriteAnimation')
            .reel("walking", 1000, [
                [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
                [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]
            ])
            .attr({x : screenW * playerPositions[2] , y: Crafty.viewport._height*0.40})
            .animate("walking", -1);


            var player4 = Crafty.e('2D, DOM, walker_start, SpriteAnimation')
            .reel("walking", 1000, [
                [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
                [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]
            ])
            .attr({x : screenW * playerPositions[3] , y: Crafty.viewport._height*0.40})
            .animate("walking", -1);


            var player5 = Crafty.e('2D, DOM, walker_start, SpriteAnimation')
            .reel("walking", 1000, [
                [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
                [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]
            ])
            .attr({x : screenW * playerPositions[4] , y: Crafty.viewport._height*0.40})
            .animate("walking", -1);




            var myEntity1 = Crafty.e('2D, DOM, Image, Color, Touch')
            .image("assets/button_slot.png")
            .attr({x: 100, y: 100, w:200, h:200, z:1 })
            // .color('black')
            .bind('TouchStart',function(e){ console.log('big black box was touched', e); });










            } // Go End

    });


	



    // Enter Scene

    Crafty.enterScene("gameScene");


};