
    var canvas;
    var ctx;
    var tick = 0;
    var img = new Image();


        var dot = 
        {
            x: 50,
            y: 50,
            dx: 10,
            dy: 4,


            move: function() 
            {

                if (this.x >= canvas.width || this.x <= 0){
                  this.dx *= -1;
                }

                if (this.y >= canvas.height || this.y <= 0){
                  this.dy *= -1;
                }

 
                this.x = this.x + this.dx;
                this.y = this.y + this.dy;
            }

        }



        
        function drawDot() {

            ctx.fillStyle = "orange";
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 10, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();

        }


        function setText() {
            text.innerHTML = "Tick: " + tick;
          }


      function pozadie() {
            img.src = "pozadie.jpg";
            img.onload = function () {
                  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              }

      }


        function step() {
              tick++;
              dot.move();
              drawDot();
              setText();
              pozadie();
              requestAnimationFrame(step);
        }


        window.onload = function()
            { 
              button = document.getElementById("button");
              text = document.getElementById("text");
              canvas = document.getElementById("canvas");
              ctx = canvas.getContext("2d");
              step();
              
            }

            function stop() {
                document.querySelector(".autoPolisna").style.animationPlayState = "paused";
  
                const initialWidth = document.body.clientWidth;
                pos = document.querySelector(".").offsetLeft;
                val = Math.round((pos * 100)/initialWidth);
          }
  
          function play() {
            document.querySelector(".autoPolisna").style.animationPlayState = "running";
          }