
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

              // vykreslenie pohibujucich blokov
              for (i in scene) {
                scene[i].draw()
              }

      }


        function step() {
              tick++;
              dot.move();
              drawDot();
              setText();
              pozadie();  // tiez v pozadi mam vykreslenie blkov ktore sa pohibuju kliknutim
              requestAnimationFrame(step);
         
        }





          // interakcie s misou
          function mousedown(event) {
            mouse.pressed = true
            for(i in scene) {
              var window = scene[i]
              if(window.x < mouse.x && window.x + window.width > mouse.x &&
                window.y < mouse.y && window.y + window.height > mouse.y) 
                {
                  mouse.selected = window
                  mouse.selected.color = "yellow"
                  break
                }
            }
          }


          var mouse = { x: 0, y: 0, pressed: false, selected: false}
          var scene = []
          var poradieBlokuStlpec = 0;
          var poradieBlokuRiadok = 20;

          function Window() {
            // konstrukcia pohibujucich blokov
            this.x = 18 + poradieBlokuStlpec;
            this.y = poradieBlokuRiadok;
            this.width = 64;
            this.height = 28;
            this.image =new Image();
            this.image.src = "blockFialovy.png";

          }
          
          Window.prototype = {
            // Draw self using a rectangle
            draw: function() {
              ctx.fillStyle = this.color
              ctx.beginPath()
              ctx.drawImage(this.image,this.x,this.y, this.width, this.height);
              ctx.closePath()
            },
            setPosition: function(x, y) {
              this.x = x
              this.y = y
            }
          }



          // Handle mouse movement
          function mousemove(event) {
              mouse.x = event.pageX - canvas.offsetLeft
              mouse.y = event.pageY - canvas.offsetTop
              if(mouse.selected) mouse.selected.setPosition(mouse.x, mouse.y)
          }

          // Handle mouse release
          function mouseup(event) {
            mouse.pressed = false
            if(mouse.selected) mouse.selected.color = "red"
            mouse.selected = false
          }

          var kolkoBlokyChcem, i , j;
          
        window.onload = function()
            { 
              button = document.getElementById("button");
              text = document.getElementById("text");
              canvas = document.getElementById("canvas");
              ctx = canvas.getContext("2d");
              step();
              // pre cv 7

              canvas.onmousedown = mousedown
              canvas.onmouseup = mouseup
              canvas.onmousemove = mousemove

              // ctx = canvas.getContext("2d")
              

                                              //  DOLEZITE ! povec kolko bloky chces do kolkoBlokyChcem 
                                            kolkoBlokyChcem = 6;

              for(i=0; i<kolkoBlokyChcem; i++)
              {
                if(i%3 == 0)
                  {             
                    poradieBlokuStlpec = 0;
                    poradieBlokuRiadok += 50;
                    
                    
                  }
              
                    scene.push(new Window())
                    poradieBlokuStlpec+= 90;
                  
              }




              // ak budem mat viac ako 3 (dalsi riadok) zvacim aj poradieBlokuRiadok



              
            }












