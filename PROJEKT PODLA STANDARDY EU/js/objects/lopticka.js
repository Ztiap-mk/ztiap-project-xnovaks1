class Lopticka extends GameObject {
    constructor( x, y, width, height) {
        super(x, y, width, height);
        this.dx =2.5;
        this.dy = 2;
    }
    
    move() {

        if (this.x >= app.canvas.width - this.width/2 || this.x <= this.width/2) {
            this.dx *= -1;
            if(app.audioZapnute)
                app.zvukKolizia.play();
        }

        if (this.y <= 118 + this.width/2) {
            this.dy *= -1;
            if(app.audioZapnute)
                app.zvukKolizia.play();
        }
/*
         if (this.y >= 560) {  // ball loop  PRE TESTOVANIE
          this.dy *= -1;
          if(app.audioZapnute)
                app.zvukKolizia.play();
         }
*/
        if (this.y >= 580) {  // tuto je podmienka, ked sa vypisat Game over
            this.dy *= 0;
            this.dx *= 0;
            this.y -= 1;
            app.nodes = gameOver();
            if(app.audioZapnute)
                app.zvukGameOver.play();
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    }



    ondraw(context) {
      var img = new Image();
      img.src = "img/lopta.png";
      context.drawImage(img, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    }
  
 
  }
