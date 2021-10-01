const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const image1 = new Image ();
image1.src = '';
 
image1.onload = function initialize() {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image1,0,0);
}

class AsciiEffect {
    #imageCellArray = [];
    #symbols = [];
    #pixels = [];
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.#ctx.drawImage(image1, 0, 0, this.#width,this.#height);
    }
}

let effect;
image1.onload = function initialize() {
    canvas.width = image1.width;
    canvas.height = image1.height;
    
}














/*class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
    }
    update(){
        this.y++;
        if (this.y >= canvas.height){
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.sixe, 0, Math.PI * 2);
        ctx.fill();
    }
}
function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particles.Array.push(new Particles);
    }
}
init();
function animate() {
    ctx.globalAlpha = 0.05;
    ctx.fillstyle = `rgb(0, 0, 0)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i <particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();
*/