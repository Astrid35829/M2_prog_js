export class BoomRenderer
{
    tekenKerstboom(g, x, y)
    {
        //naalden
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(x , y);
        g.lineTo(x - 40, y + 70);
        g.lineTo(x + 40, y + 70);
        g.closePath();
        g.stroke();
        g.fill()

        //stam
        g.beginPath()
        g.fillStyle = "#64411f";
        g.moveTo(x - 5, y + 70);
        g.lineTo(x - 5, y + 80);
        g.lineTo(x + 5, y + 80);
        g.lineTo(x + 5, y + 70);
        g.closePath();
        g.stroke();
        g.fill()

         //ster :|
        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(x, y);
        g.lineTo(x - 1.5, y + 5);
        g.lineTo(x - 6, y + 5);
        g.lineTo(x - 2, y + 7);
        g.lineTo(x - 4, y + 11);
        g.lineTo(x, y + 9);
        g.lineTo(x + 4, y + 11);
        g.lineTo(x + 2 , y + 7);
        g.lineTo(x + 6, y + 5);
        g.lineTo(x + 1.5, y + 5);
        g.closePath();
        g.stroke();
        g.fill();

        // bal1
        g.beginPath();
        g.fillStyle = "#456789";
        g.arc(x - 10, y + 20, 5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //bal2
        g.beginPath();
        g.fillStyle = "#234567";
        g.arc(x + 20, y + 40, 5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //bal 3
        g.beginPath();
        g.fillStyle = "#305f8d";
        g.arc(x + 10, y + 25, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //bal 4
        g.beginPath();
        g.fillStyle = "#4f8ac3";
        g.arc(x -5, y + 35, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //bal 5
        g.beginPath();
        g.fillStyle = "#3d79b3";
        g.arc(x - 20 , y + 45, 5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //bal 6
        g.beginPath();
        g.fillStyle = "#b22e7b";
        g.arc(x + 5 , y + 50, 5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        // bal 7
        g.beginPath();
        g.fillStyle = "#972768";
        g.arc(x - 10, y + 55, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        // bal 8
        g.beginPath();
        g.fillStyle = "#cb378d";
        g.arc(x + 25, y + 60, 5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        // bal 9
        g.beginPath();
        g.fillStyle = "#972768";
        g.arc(x - 25, y + 65, 5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        // ball 10
        g.beginPath();
        g.fillStyle = "#d2529d";
        g.arc(x + 10, y + 65, 3,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
}

export class BoomVariantRenderer
{
    tekenBoom(g, x, y)
    {
        //stam
        g.beginPath();
        g.fillStyle = "#64411f";
        g.moveTo(x - 5, y + 10);
        g.lineTo(x - 5, y + 60);
        g.lineTo(x + 5, y + 60);
        g.lineTo(x + 5, y + 10);
        g.stroke();
        g.fill();
        g.closePath();
        
        //blad
        g.beginPath();
        g.fillStyle = "green";
        g.arc(x, y, 30,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        
    }
}