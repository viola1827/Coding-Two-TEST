class BigFish {
    constructor() {
      this.x = mouseX;
      this.y = mouseY;
      this.size = 30;
    }
  
    move() {
      this.x = mouseX; 
      this.y = mouseY; 
    }
  
    show() {
      fill(255, 0, 0); 
      ellipse(this.x, this.y, this.size, this.size); // 绘制大鱼
    }
  }
  