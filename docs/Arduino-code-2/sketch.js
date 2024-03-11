let gameOver = false;
let smallFishes = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  bigFish = new BigFish(); 
  

  for (let i = 0; i < 20; i++) { 
    smallFishes.push(new SmallFish(random(width), random(height),random(10,50)));
  }
}

function draw() {
  background(220);
  if (!gameOver) {
    bigFish.move();
    bigFish.show();


    smallFishes.forEach(fish => {
      fish.move();
      fish.show();
    });

    for (let i = smallFishes.length - 1; i >= 0; i--) {
      let s = smallFishes[i];
      s.move();
      s.show();

      // 如果大鱼和小鱼相撞
      if (dist(bigFish.x, bigFish.y, s.x, s.y) < (bigFish.size / 2 + s.size / 2)) {
        if (bigFish.size < s.size) { // 如果大鱼比小鱼小，则游戏结束
          gameOver = true;
          break;
        } else { // 否则，小鱼被吃掉
          smallFishes.splice(i, 1);
          smallFishes.push(new SmallFish(random(10, 50))); // 生成新的小鱼，大小随机
        }
      }
    }
  } else {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}

