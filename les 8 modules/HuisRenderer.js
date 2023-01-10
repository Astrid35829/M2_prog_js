export class huisRenderer
{   
    
    tekenHuis(g, x, y)
    {
        // Groot dak vlak
        g.beginPath()
        g.fillStyle = "#cc0000";
        g.moveTo(x,y);
        g.lineTo(x - 10,y + 20);
        g.lineTo(x + 30, y + 30);
        g.lineTo(x + 40,y + 10);
        g.closePath();
        g.stroke();
        g.fill()
        
        // Driehoek dak vlak
        g.beginPath()
        g.fillStyle = "#990033";
        g.moveTo(x + 40, y + 10);
        g.lineTo(x + 30, y + 30);
        g.lineTo(x + 50,y + 20);
        g.closePath();
        g.stroke();
        g.fill()

        // Groot muur vlak
        g.beginPath()
        g.fillStyle = "#ffcc99";
        g.moveTo(x - 10, y + 20);
        g.lineTo(x + -10, y + 40); 
        g.lineTo(x + 30, y + 50);
        g.lineTo(x + 30, y + 30);
        g.closePath();
        g.stroke();
        g.fill()

        // raam
        g.beginPath()
        g.fillStyle = "#FDD835";
        g.moveTo(x - 5, y + 24);
        g.lineTo(x - 5, y + 32);
        g.lineTo(x + 5, y + 34.5);
        g.lineTo(x + 5, y + 26.5);
        g.closePath();
        g.stroke();
        g.fill()
 
        // Klein muur vlak
        g.beginPath()
        g.fillStyle = "#ffb366"
        g.moveTo(x + 30, y + 30);
        g.lineTo(x + 30, y + 50);
        g.lineTo(x + 50, y + 40);
        g.lineTo(x + 50, y + 20);
        g.closePath();
        g.stroke();
        g.fill()
    }
}