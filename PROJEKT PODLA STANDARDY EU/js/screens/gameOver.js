
function gameOver(){
	var nodes = [];
	console.log("game over");


	var img = new Obrazok("img/gameOver.png", 35, 110, 350, 100)
	nodes.push(img);
	
	// Button start
	var button = new ImgButton("img/startAgain.png", 110, 250, 200, 100);
	button.action = function() {
		console.log("start button");
		app.nodes = hlavnaHra(); 
		if(app.audioZapnute)
            app.zvukButton.play(); 
	};
	nodes.push(button);


		// Button menu back
		var button = new ImgButton("img/menuland.png",  170, 400, 80, 40)
		button.action = function() {
			console.log("back menu button");
			app.nodes = mainMenu();
			if(app.audioZapnute)
            	app.zvukButton.play(); 
		};
		nodes.push(button);

	return nodes;
}