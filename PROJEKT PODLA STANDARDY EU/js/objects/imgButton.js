class ImgButton extends GameObject {
  constructor(src, x, y, width, height) {
    // Construct a Widget
    super(x, y, width, height);
	
	this.src = src;
  }

  // Redefine ondraw function
  ondraw(context) {
	var button = this;

	var img = new Image();
	img.src = button.src;
	
	context.drawImage(img, button.x, button.y, button.width, button.height);
  }

  // Redefine onclick function
  onclick(event) {
    if (this.action) return this.action();
  }

  // By default do nothing
  action() {};
}