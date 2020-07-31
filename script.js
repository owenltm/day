function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setLight(){
    document.getElementById("timetxt").style.color = "#212121";
    document.getElementById("greettxt").style.color = "#212121";
    document.body.style.backgroundColor = "#f5f5f5";
}

function setDark(){
    document.getElementById("timetxt").style.color = "white";
    document.getElementById("greettxt").style.color = "white";
    document.body.style.backgroundColor = "#212121";

}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('timetxt').innerHTML = h + ":" + m + ":" + s;

    if(h >= 6 && h < 17){
        setLight();
    } else {
        setDark();
    }

    if(h > 5 && h < 12){
        document.getElementById("greettxt").innerHTML = "Pagiii, semoga harimu menyenangkan :)";
    } else if(h >= 12 && h < 17){
        document.getElementById("greettxt").innerHTML = "Siangg, sudah makan belomm ??";
    } else if (h >=17 && h < 19){
        document.getElementById("greettxt").innerHTML = "Soreee, inget mandi yaaaa wkwkwk";
    } else {
        document.getElementById("greettxt").innerHTML = "Selamat malam, tidur yang nyenyakk";
    }

    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

const particles = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

    const particleAmount = Math.floor(window.innerWidth / 30);

    for(let i = 0; i < particleAmount; i++){
        particles.push(new Particle());
    }
}

function draw(){
    var today = new Date();
    var h = today.getHours();

    if(h >= 19 || h < 6){
        background("#212121");
        particles.forEach((p, index) => {
            p.update();
            p.draw();
        })
    }
}

class Particle {
    constructor() {
        //position
        this.pos = createVector(random(width), random(height));
        //velocity
        this.vel = createVector(random(-50, 50), random(-50, 50));
        //size
        this.size = 10;
        //opacity
        this.opacity = random(1);
        this.glowing = 0.01;
    }

    //move by add velocity
    update() {
        if(this.opacity < 0.05){
            this.pos.add(createVector(random(-200, 200), random(-200, 200)));
        }
        this.opacity += this.glowing;
        this.edges();
        this.glow();
    }

    draw(){
        noStroke();
        fill('rgba(255,255,255,' + this.opacity + ')');
        circle(this.pos.x, this.pos.y, this.size);
    }

    edges(){
        if(this.pos.x < 0 || this.pos.x > width){
            this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > height){
            this.vel.y *= -1;
        }
    }

    glow(){
        if(this.opacity > 0.95){
            this.glowing *= -1;
        } else if (this.opacity < 0.05){
            this.glowing *= -1;
        }
    }
}