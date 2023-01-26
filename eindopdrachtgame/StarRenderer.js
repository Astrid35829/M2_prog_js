export class Star1Renderer{
    tekenStar1(g,x,y)
    {
        g.beginPath();
        g.fillStyle = "#f0ee97";
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
    }
}

export class Star2Renderer
{
    tekenStar2(g,x,y)
    {
        g.beginPath();
        g.fillStyle = "#f0ee97";
        g.moveTo(x, y);
        g.lineTo(x - 3, y + 10);
        g.lineTo(x - 12, y + 10);
        g.lineTo(x - 4, y + 14);
        g.lineTo(x - 8, y + 22);
        g.lineTo(x, y + 18);
        g.lineTo(x + 8, y + 22);
        g.lineTo(x + 4 , y + 14);
        g.lineTo(x + 12, y + 10);
        g.lineTo(x + 3, y + 10);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

 


    
