export class Huis{
    tekenHuis(g,x,y)
    {
        // dak
        g.beginPath()
        g.fillStyle = "#E8827A";
        g.moveTo(x,y);
        g.lineTo(x+20,y);
        g.lineTo(x+10,y-20);
        g.closePath();
        g.stroke();
        g.fill();

        // huisblok
        g.beginPath()
        g.fillStyle = "#d6a17d";
        g.moveTo(x,y);
        g.lineTo(x, y+20);
        g.lineTo(x+20,y+20);
        g.lineTo(x+20,y);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenRaam(g,x,y,b)
    {
         //raam
         g.beginPath()
         g.fillStyle = b;
         g.moveTo(x+5, y+5);
         g.lineTo(x+5,y+15);
         g.lineTo(x+15, y+15);
         g.lineTo(x+15, y+5);
         g.closePath();
         g.stroke();
         g.fill();
    }
}