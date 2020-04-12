function settings(){
	var nodes = [];


	// Button back
	var button = new ImgButton("img/back.png", 30, 30, 50, 50)
	button.action = function() {
		console.log("back button");
		app.nodes = mainMenu();
		if(app.audioZapnute)
            app.zvukButton.play(); 
	};
	nodes.push(button);
	
	// smiley
	var img = new Obrazok("img/bonus2.png", 60, 200, 300, 300)
	nodes.push(img);

	
	// nadpis
	var img = new Obrazok("img/textSettings.png", 50, 0, 350, 100)
	nodes.push(img);

	return nodes;
}