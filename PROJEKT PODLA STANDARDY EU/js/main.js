var app
function lauchGame(){
	app.update()
	requestAnimationFrame(lauchGame)
}


// Initialization
window.onload = function(){
	app = new App("canvas")
	app.start()

	requestAnimationFrame(lauchGame)
}