function Snake() {
    this.x = scl;
    this.y = scl;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.antDir = '';

    this.dire = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.death = function() {
        for(var i = 0; i < this.tail.length; i++) {
            if (typeof this.tail[i] !== 'undefined') {
                var pos = this.tail[i];
                var d = dist(this.x, this.y, pos.x, pos.y);

                if (d < 10) {
                    this.total = 0;
                    this.tail = [];
                }
            }
        }
    }

    this.update = function () {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);

        if (this.x >= width - scl) {
            this.x = scl;
        }
        if (this.y >= height - scl) {
            this.y = scl;
        }
        if (this.x <= 0) {
            this.x = width - scl;
        }
        if (this.y <= 0) {
            this.y = height - scl;
        }
    }

    this.show = function () {
        fill(255);
        for (var i = 0; i < this.total; i++) {
            if (typeof this.tail[i] !== 'undefined') {
                rect(this.tail[i].x, this.tail[i].y, scl, scl);
            }
        }

        rect(this.x, this.y, scl, scl);
    }

    this.eat = function (food) {
        var d = dist(this.x, this.y, food.x, food.y);

        if (d < scl) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }
}