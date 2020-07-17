var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        var circles;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        var circles = [ ];
        
        function randomNumberBetween(min, max) {
            var difference = max - min;
            var randomValue = Math.random() * difference;
            return min + randomValue;
        }
        
        for (var i = 1; i <= 100; i++) {
            var circleX = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            view.addChild(circleX);
            circleX.velocityX = randomNumberBetween(-1, 1);
            circleX.velocityY = randomNumberBetween(-1, 1);
            circles.push(circleX);
        }; 
    
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        
        function update() {
            for (var i = 0; i <= circles.length - 1; i++) {
                circles[i].x = circles[i].x + circles[i].velocityX;
                circles[i].y = circles[i].y + circles[i].velocityY;
            
                game.checkCirclePosition(circles[i]);
            }
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x - circle.radius >= canvas.width ) {
                circle.x = 0 - circle.radius;
            }
            
            if (circle.y - circle.radius >= canvas.height ) {
                circle.y = 0 - circle.radius;
            }
            
            if (circle.x + circle.radius < 0 ) {
                circle.x = canvas.width + circle.radius;
            }
            
            if (circle.y + circle.radius < 0 ) {
                circle.y = canvas.height + circle.radius;
            }
           
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circles = circles;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
