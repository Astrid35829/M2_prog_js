export class Snowman{
    tekenSnowman(g, x, y){
        //base
        g.beginPath();
        g.fillStyle = "#E9FFFF";
        g.arc(x, y, 5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //head
        g.beginPath();
        g.fillStyle = "#E9FFFF";
        g.arc(x, y-8, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //button 1
        g.beginPath();
        g.fillStyle = "black";
        g.arc(x, y+2, 1,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //button 2
        g.beginPath();
        g.fillStyle = "black";
        g.arc(x, y-2, 1,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //carrot
        g.beginPath()
        g.fillStyle = "orange";
        g.moveTo(x-2, y-8);
        g.lineTo(x, y-5);
        g.lineTo(x+2, y-8);
        g.closePath();
        g.stroke();
        g.fill();

        //hat
        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(x-3, y-15);
        g.lineTo(x-3, y-10);
        g.lineTo(x-5, y-10);
        g.lineTo(x-5, y-9);
        g.lineTo(x+5, y-9);
        g.lineTo(x+5, y-10);
        g.lineTo(x+3, y-10);
        g.lineTo(x+3, y-15);
        g.closePath();
        g.stroke();
        g.fill();

    } 
}