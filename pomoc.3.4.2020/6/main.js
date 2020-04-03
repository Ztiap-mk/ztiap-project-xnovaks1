
    var canvas;
    var ctx;
    var tick = 0;
    var img = new Image();

    
        var dot = 
        {
            x: 70,
            y: 76,
            dx: 10,
            dy: 4,


            move: function() 
            {

                if (this.x >= canvas.width - 10 || this.x <= 10){
                  this.dx *= -1;
                 
                }

                if ( this.y <= 75){
                  this.dy *= -1;
                 
                }

                if (this.y >= canvas.height - 15)
                {                                                   // tuto je podmienka, ked sa vypisat Game over
                  // this.dy *= 0;    
                  // this.dx *= 0;    
                  cancelAnimationFrame(id);
                  gameOver();
                }
                //if (this.y >= canvas.height - 30)
                {
                //  this.dy *= -1;
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


      function gameOver()
      {
        fungujIbarzTyKokos = 0;            // tato premenna je aby start tlacitko fungovalo iba raz
        document.addEventListener('click', stlacenyStart, false);   // start tlacitko

        img.src = "pozadieGO.png";
            img.onload = function () {
                  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              }
      }
          


      function hlavnyMenu()
      {
        img.src = "pozadieMenu.png";
            img.onload = function () {
                  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              }
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



    
      var misX = 0;
      var misY = 0;
      var fungujIbarzTyKokos = 0;

      function stlacenyStart(e)
      {   misX = e.pageX - canvas.offsetLeft;
          misY = e.pageY - canvas.offsetTop;


          if( fungujIbarzTyKokos == 0 && misX >= 60 && misX <= 220 && misY >= 140 && misY <= 200)
           {
            spustHru();
            fungujIbarzTyKokos = 1;
           } 

      }






        function step() 
        {  
              tick++;
              dot.move();
              drawDot();
              setText();
              
                            // plosina
                            ptlosinaTlacidla.move();
                            ptlosinaTlacidla.draw();
              pozadie();
              //requestAnimationFrame(step);
              var id = requestAnimationFrame(step);
             
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
          var poradieBlokuRiadok = 35;

          function Window() {
            // konstrukcia pohibujucich blokov
            this.x = 18 + poradieBlokuStlpec;
            this.y = poradieBlokuRiadok;
            this.width = 64;
            this.height = 28;
            this.image =new Image();
            if(farbaBlok == 1)
                this.image.src = "blockFialovy.png";

            if(farbaBlok == 2)
                this.image.src = "blockOranzovy.png";

            if(farbaBlok > 2)
                this.image.src = "blockZeleny.png";

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




          var keys = {};                      // PLOSINA

          var ptlosinaTlacidla = {
            x: 100,
            y: 370
          };
          
          // 
          ptlosinaTlacidla.draw = function() {
            this.image =new Image();                    
            this.image.src = "plosina.png";
            ctx.drawImage(this.image,ptlosinaTlacidla.x,ptlosinaTlacidla.y, 130, 15);
            ctx.closePath();
            ctx.fill();
          };

          ptlosinaTlacidla.move = function() 
          {
            if(ptlosinaTlacidla.x <= 5)         // stop na lavej strane
            { 
              if (keys[39]) ptlosinaTlacidla.x += 5;

            }
            else
              {
                  if(ptlosinaTlacidla.x >= 145)   // stop na pravej strane
                  {
                      if (keys[37]) ptlosinaTlacidla.x -= 5;
                  }
                  else
                  {
                    if (keys[39]) ptlosinaTlacidla.x += 5;
                    if (keys[37]) ptlosinaTlacidla.x -= 5;
                  }
              }


          };

          // Handle keyboard events
          window.onkeydown = function(event) {
            keys[event.keyCode] = true;
            console.log(keys);
          };
          window.onkeyup = function(event) {
            keys[event.keyCode] = false;
          };


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


var farbaBlok = 0;


function vykresliBloke()
{
   //  DOLEZITE ! povec kolko bloky chces do kolkoBlokyChcem 
   kolkoBlokyChcem = 9;

   for(i=0; i<kolkoBlokyChcem; i++)
   {
        if(i%3 == 0)
        {             
            poradieBlokuStlpec = 0;
            poradieBlokuRiadok += 50;
            farbaBlok ++;                                 
        }
                                        
        scene.push(new Window())
        poradieBlokuStlpec+= 90; 
  }
}



            // spustenie hry
          function spustHru()
          {
                step();
                // pre cv 7

                canvas.onmousedown = mousedown;
                canvas.onmouseup = mouseup;
                canvas.onmousemove = mousemove;

                vykresliBloke();
                

               
          }




          var kolkoBlokyChcem, i , j;
          
        window.onload = function()
            { 
              button = document.getElementById("button");
              text = document.getElementById("text");
              canvas = document.getElementById("canvas");
              ctx = canvas.getContext("2d");

             

              hlavnyMenu();
              document.addEventListener('click', stlacenyStart, false);
              
              
            }












