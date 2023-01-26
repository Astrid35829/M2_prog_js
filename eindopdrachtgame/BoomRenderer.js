export class Boom{
    tekenBoom(g, x, y){
        //blad
        g.beginPath()
        g.fillStyle = "#1a6249";
        g.moveTo(x,y);
        g.lineTo(x-5, y+15);
        g.lineTo(x+5, y+15);
        g.closePath();
        g.stroke();
        g.fill();

        //stam
        g.beginPath()
        g.fillStyle = "#6e4c1b";
        g.moveTo(x-2, y+15);
        g.lineTo(x-2, y+20);
        g.lineTo(x+2, y+20);
        g.lineTo(x+2, y+15);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

export class Kerstboom{
    tekenKerstboom(g, x, y){
        //stump
        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x-5, y+30);
        g.lineTo(x-5, y+40);
        g.lineTo(x+5, y+40);
        g.lineTo(x+5, y+30);
        g.closePath();
        g.stroke();
        g.fill();

        //naalden
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(x, y);
        g.lineTo(x-15, y +30);
        g.lineTo(x+15, y+30);
        g.closePath();
        g.stroke();
        g.fill();

        //ball
        g.beginPath();
        g.fillStyle = "yellow";
        g.arc(x, y, 4,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 2
        g.beginPath();
        g.fillStyle = "red";
        g.arc(x-4, y+18, 2,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 3
        g.beginPath();
        g.fillStyle = "pink";
        g.arc(x+4, y+28, 2,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        // ball 4
        g.beginPath();
        g.fillStyle = "purple";
        g.arc(x-13, y+28, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 5
        g.beginPath();
        g.fillStyle = "cyan";
        g.arc(x+8, y+18, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 6
        g.beginPath();
        g.fillStyle = "blue";
        g.arc(x+3, y+10, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
}