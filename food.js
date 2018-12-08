function Food() {
    this.cols = floor(width/scl);
    this.rows = floor(height/scl);

    this.pos = createVector(floor(random(this.cols)), floor(random(this.rows)));

    this.pos.mult(scl);

    this.colorR = random(255);
    this.colorG = random(255);
    this.colorB = random(255);

   this.cambia = () => {
        this.cols = floor(width/scl);
        this.rows = floor(height/scl);
    
        this.pos = createVector(floor(random(this.cols)), floor(random(this.rows)));
    
        this.pos.mult(scl);

        this.colorR = random(255);
        this.colorG = random(255);
        this.colorB = random(255);
   }
}