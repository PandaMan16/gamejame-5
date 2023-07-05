import { panda } from "./pandalib.js";

const convagen = { //image ratio 9.375 (150/16) 225 / 169 chario+panda
    canvas: document.querySelector('#canvagame'),
    val: {line:1},
    baseimg: () => {
        const canvas = document.getElementById('canvagame');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'black';
        canvas.width = 400;
        canvas.height = window.innerHeight;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.strokeStyle = 'white';
        context.beginPath();
        context.moveTo(canvas.width/2-2, 0);
        context.lineTo(canvas.width/2-2, canvas.height);
        context.stroke();

        context.beginPath();
        context.moveTo(75, 0);
        context.lineTo(75, canvas.height);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width-75, 0);
        context.lineTo(canvas.width-75, canvas.height);
        context.stroke();
    },
    init: () => {
        // convagen.val.line = 1;
        const canvas = document.getElementById('canvagame');
        const context = canvas.getContext('2d');
        convagen.baseimg();

        const image = new Image();
        image.src = './assets/img/Animation150PX.png';
        image.onload = function() {
            // Draw the image on the canvas
            context.drawImage(image, (canvas.width/2)-75, canvas.height/2);
            // context.drawImage(image, 0, canvas.height/2);
            // context.drawImage(image, canvas.width-150, canvas.height/2);
        };
    },
    left: () => {
        if (convagen.val.line != 0){
            convagen.val.line = convagen.val.line - 1;
            const canvas = document.getElementById('canvagame');
            const context = canvas.getContext('2d');
            convagen.baseimg();
            const image = new Image();
            image.src = './assets/img/Animation150PX.png';
            image.onload = function() {
                switch (convagen.val.line) {
                    case 0:
                        context.drawImage(image, 0, canvas.height/2);
                        break;
                    case 1:
                        context.drawImage(image, (canvas.width/2)-75, canvas.height/2);
                        break;
                    case 2:
                        context.drawImage(image, canvas.width-150, canvas.height/2);
                        break;
                }
                // Draw the image on the canvas
                // context.drawImage(image, (canvas.width/2)-75, canvas.height/2);
                // context.drawImage(image, 0, canvas.height/2);
                // context.drawImage(image, canvas.width-150, canvas.height/2);
            };
        }
    },
    right: () => {
        if (convagen.val.line != 2){
            convagen.val.line = convagen.val.line + 1;
            const canvas = document.getElementById('canvagame');
            const context = canvas.getContext('2d');
            convagen.baseimg();
            const image = new Image();
            image.src = './assets/img/Animation150PX.png';
            image.onload = function() {
                switch (convagen.val.line) {
                    case 0:
                        context.drawImage(image, 0, canvas.height/2);
                        break;
                    case 1:
                        context.drawImage(image, (canvas.width/2)-75, canvas.height/2);
                        break;
                    case 2:
                        context.drawImage(image, canvas.width-150, canvas.height/2);
                        break;
                }
            }
        }
    }
}

convagen.init();

// add event listener key left right and espace
window.addEventListener('keydown', (e) => {
    panda.util.log(e.key,"orange");
    switch (e.key) {
            case "ArrowLeft":
                convagen.left();
                break;
            case "ArrowRight":
                convagen.right();
                break;
            case "Space":
                convagen.space();
                break;
            default:
                break;
        }
});