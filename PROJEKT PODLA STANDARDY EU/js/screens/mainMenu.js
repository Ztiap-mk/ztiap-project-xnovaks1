function mainMenu(){
	var nodes = [];
	
	// nadpis funguje ako refresh button
	var button = new ImgButton("img/nazov.png", app.canvas.width/2 - 175, 60, 350, 100);
	button.action = function() {
		location.reload();
		if(app.audioZapnute)
            app.zvukButton.play(); 
	};
	nodes.push(button);

	// Button start
	var button = new ImgButton("img/startGame.png", app.canvas.width/2 - 125, 200, 250, 120);
	button.action = function() {
		console.log("start button");
		app.nodes = hlavnaHra();
		if(app.audioZapnute)
            app.zvukButton.play(); 
	};
	nodes.push(button);
	
	// Button settings
	var button = new ImgButton("img/settings.png", app.canvas.width/2 - 55, 340, 110, 50);
	button.action = function() {
		console.log("settings button");
		app.nodes = settings(); 
		if(app.audioZapnute)
            app.zvukButton.play(); 
	};
	nodes.push(button);

	// Button instrutions
	var button = new ImgButton("img/instr.png", app.canvas.width/2 -100, 410, 200, 60);
	button.action = function() {
		console.log("instrutions button");
		app.nodes = instructions(); 
		if(app.audioZapnute)
            app.zvukButton.play(); 
	};
	nodes.push(button);


		var srcObrAudio
		if(app.audioZapnute)
			srcObrAudio = "img/audioON.png"
		else
		srcObrAudio = "img/audioOFF.png"
		var button = new ImgButton(srcObrAudio, 185, 480, 50, 50);
		button.action = function() {
			if(app.audioZapnute)
			{
				this.src = "img/audioOFF.png";
				console.log("hudba  off");
				app.audioZapnute = false;
				app.myMusic.stop();
			}
			else	
			{
				this.src = "img/audioON.png";
				console.log("hudba  on");
				app.audioZapnute = true;
				app.myMusic.play();
			}
			if(app.audioZapnute)
            app.zvukButton.play(); 
		};

	nodes.push(button);
	
	// zapnut hudbu
    
	
	return nodes;
}