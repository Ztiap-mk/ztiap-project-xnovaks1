function instructions(){
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
	
	// text
	var img = new Obrazok("img/textinstr.png", 20, 130, 380, 380)
	nodes.push(img);

	
	// nadpis
	var img = new Obrazok("img/instr.png", 50, 8, 350, 100)
	nodes.push(img);

	return nodes;
}