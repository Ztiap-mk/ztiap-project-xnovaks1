function hlavnaHra(){
	var nodes = [];


	// Button menu back
	var button = new ImgButton("img/menu.png", 15, 15, 40, 80)
	button.action = function() {
		console.log("back menu button");
		app.nodes = mainMenu();
		if(app.audioZapnute)
            app.zvukButton.play(); 
	};
	nodes.push(button);
	
	// nadpis funguje ako refresh button
	var img = new Obrazok("img/nazov.png", 70, 15, 320, 80)
	nodes.push(img);

	// odelenie hracej plochy
	var img = new Obrazok("img/grayLine.png", 0, 110, 420, 8)
	nodes.push(img);

	var lopticka = new Lopticka(200, 200, 25, 25);
	nodes.push(lopticka);

	return nodes;
}