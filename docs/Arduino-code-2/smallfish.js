class SmallFish {
    constructor(dx, dy, size) {
      /*this.x = random(width);
      this.y = random(height);*/
        this.x = dx;
        this.y = dy;
        this.velocity = createVector(random(-2,2),random(-2.2))
      this.size = size; 
      this.speed = 2; 
    }
  
    move() {
      this.x += this.velocity.x;
        this.y += this.velocity.y;
        
        if (this.x <= 0 || this.x >= width) {
            this.velocity.x *= -1; 
          }
          if (this.y <= 0 || this.y >= height) {
            this.velocity.y *= -1; 
          }
    }
  
    show() {
      fill(0, 0, 255); 
      ellipse(this.x, this.y, this.size, this.size); // 绘制小鱼
    }
  }
  