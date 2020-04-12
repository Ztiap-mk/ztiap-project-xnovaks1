class App extends GameObject {
  constructor(element) {
    var canvas = window.document.getElementById(element);
    var context = canvas.getContext("2d");
    
    

	
    super(0, 0, canvas.width, canvas.height);
    this.canvas = canvas;
    this.context = context;
    this.keys = [];
    this.audioZapnute = true;
    this.myMusic = new Sound("sound/hudba.mp3");
    this.myMusic.sound.loop = true;
    this.zvukKolizia = new Sound("sound/kolizia.wav")
    this.zvukGameOver = new Sound("sound/gameOver.wav")
    this.zvukButton = new Sound("sound/button.wav")

  }


  ondraw(context) {
    var app = this;
      
    // TODO background here
    var backgroundImg = new Image();
    backgroundImg.src = "img/pozadieOriginal.jpg";

    context.drawImage(backgroundImg, 0, 0, app.canvas.width, app.canvas.height);
  }

  move(context){
    this.notify("move", context);
    
  }

  update() {
    this.draw(this.context);
    this.keyCheck(0);
    this.move(this.context);
  }


  start() {
    var app = this;

    // Mouse click handler
    window.onclick = function (event) {
      var point = {
        x: event.layerX,
        y: event.layerY,
      };
      // Send click message to all observers
      app.click(point);
    };

    // Key down handler
    window.onkeydown = function (event) {

	  app.keys[event.key] = true;

      return false;
    };
	
	// Key up handler
    window.onkeyup = function (event) {

	  app.keys[event.key] = false;

      return false;
    };
	
	
	app.nodes = mainMenu();
	
    if(app.audioZapnute)
      app.myMusic.play();
  }



}


