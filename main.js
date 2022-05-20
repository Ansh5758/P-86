var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
backgroundIMG = '';

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        backgroundIMG = Img;
        backgroundIMG.scaleToWidth(700);
        backgroundIMG.scaleToHeight(600);
        backgroundIMG.set({
            top:0,
            left:0
        })
        canvas.add(backgroundIMG);
    })
}
new_image();
function playSound(){
	x.play();
}
