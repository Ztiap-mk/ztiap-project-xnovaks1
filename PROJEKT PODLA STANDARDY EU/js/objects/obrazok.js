class Obrazok extends GameObject {
    constructor(src, x, y, width, height) {
      // Construct a Node
      super(x,y, width, height);
  
    this.src = src;
    }
  

    ondraw(context) {
        var img = new Image();
        img.src = this.src;
        context.drawImage(img, this.x, this.y, this.width, this.height);
    };
  }