class Particles {
    constructor() {
      this.particles = [];
      for (let i = particlesNum; i--; )
        this.particles.push(Particle(i % typesNum));
    }
  
    interact() {
      for (let current of this.particles) {
        for (let other of this.particles) {
          let delta = p5.Vector.sub(current.pos, other.pos);
          let dis = Math.hypot(delta.x, delta.y);
          if (dis < 1) {
            other.vel.sub(
              p5.Vector.sub(other.pos, createVector(width / 2, height / 2)).limit(
                0.1
              )
            );
          } else if (minEye < dis && dis < maxEye) {
            let force = delta.div(dis).mult(maxEye - dis);
            force.mult(loveHateMatrix[current.type][other.type]);
            current.acc.add(force);
          }
        }
      }
    }
    calc() {
      for (let p of this.particles) {
        p.vel.add(p.acc.mult(0.01));
        p.vel.limit(speedLimit);
        p.pos.add(p.vel);
        p.vel.mult(0.9);
        p.acc.mult(0);
      }
    }
    wrap() {
      for (let p of this.particles) {
        if (p.pos.x < 0) {
          p.pos.x = 0;
          p.vel.x = abs(p.vel.x);
        } else if (p.pos.x > width) {
          p.pos.x = width;
          p.vel.x = -abs(p.vel.x);
        }
        if (p.pos.y < 0) {
          p.pos.y = 0;
          p.vel.y = abs(p.vel.y);
        } else if (p.pos.y > height) {
          p.pos.y = height;
          p.vel.y = -abs(p.vel.y);
        }
      }
    }
    show() {
      for (let p of this.particles) {
        fill(pallete[p.type]);
        rect(p.pos.x, p.pos.y, 5);
      }
    }
  }