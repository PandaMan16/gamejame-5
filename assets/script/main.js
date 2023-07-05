const convagen = {
    canvas: document.querySelector('#canvagame'),
    init: () => {
        const canvas = document.getElementById('canvagame');
        const context = canvas.getContext('2d');
        context.fillStyle = 'black';
        canvas.width = 400;
        canvas.height = window.innerHeight;
        context.fillRect(0, 0, canvas.width, canvas.height);
        const image = new Image();
        image.src = './assets/img/Animation150PX.png';
        image.onload = function() {
            // Draw the image on the canvas
            context.drawImage(image, (canvas.width/2)-75, canvas.height/2);
            context.drawImage(image, 0, canvas.height/2);
            context.drawImage(image, canvas.width-150, canvas.height/2);
        };
    }
}
convagen.init(); 
