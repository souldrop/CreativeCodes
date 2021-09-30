const myImage = new Image();
myImage.src = 'data:image/png;base64,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'

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 706;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    

    let particlesArray = [];
    const numberofParticles = 5000;

    let mappedImage = [];
    for(let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[(y * 4 * pixels.width + (x * 4))];
            const red = pixels.data[(y * 4 * pixels.width + (x * 4 + 1))];
            const red = pixels.data[(y * 4 * pixels.width + (x * 4 + 2))];
            const Brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }

    function calculateRelativeBrightness() {
        return Math.sqrt(
            (red *red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }

    class Particle {
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
});

