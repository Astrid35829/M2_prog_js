export class Letters{
    tekenH(g,x,y){
        //h
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x,y);
        g.lineTo(x, y+50);
        g.lineTo(x+10, y+50);
        g.lineTo(x+10, y+30);
        g.lineTo(x+20, y+30);
        g.lineTo(x+20, y+50);
        g.lineTo(x+30, y+50);
        g.lineTo(x+30, y);
        g.lineTo(x+20,y);
        g.lineTo(x+20, y+20);
        g.lineTo(x+10, y+20);
        g.lineTo(x+10,y);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenA(g, x, y, b){
        //a
        g.beginPath()
        g.fillStyle = "orange";
        g.moveTo(x+5,y);
        g.lineTo(x,y+20);
        g.lineTo(x,y+50);
        g.lineTo(x+10, y+50);
        g.lineTo(x+10, y+30);
        g.lineTo(x+20, y+30);
        g.lineTo(x+20, y+50);
        g.lineTo(x+30, y+50);
        g.lineTo(x+30, y+20);
        g.lineTo(x+25, y);
        g.closePath();
        g.stroke();
        g.fill();

        // a-hole
        g.beginPath()
        g.fillStyle = b;
        g.beginPath();
        g.moveTo(x+10, y+10);
        g.lineTo(x+10,y+20);
        g.lineTo(x+20, y+20);
        g.lineTo(x+20, y+10);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenP(g,x,y,b,c){
        //p
        g.beginPath();
        g.fillStyle = c;
        g.moveTo(x,y);
        g.lineTo(x,y+50);
        g.lineTo(x+10,y+50);
        g.lineTo(x+10,y+30);
        g.lineTo(x+30,y+30);
        g.lineTo(x+30,y);
        g.closePath();
        g.stroke();
        g.fill();

        //p-hole
        g.beginPath()
        g.fillStyle = b;
        g.beginPath();
        g.moveTo(x+10, y+10);
        g.lineTo(x+10,y+20);
        g.lineTo(x+20, y+20);
        g.lineTo(x+20, y+10);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenY(g,x,y){
        //y
        g.beginPath()
        g.fillStyle = "lightblue";
        g.moveTo(x,y);
        g.lineTo(x,y+20);
        g.lineTo(x+10, y+30);
        g.lineTo(x+10,y+50);
        g.lineTo(x+20,y+50);
        g.lineTo(x+20, y+30);
        g.lineTo(x+30,y+20);
        g.lineTo(x+30, y);
        g.lineTo(x+20, y);
        g.lineTo(x+20, y+20);
        g.lineTo(x+10, y+20);
        g.lineTo(x+10, y);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

export class Nummers
{
    teken2(g,x,y,c){
        // 2
        g.beginPath()
        g.fillStyle = c;
        g.moveTo(x,y);
        g.lineTo(x,y+10);
        g.lineTo(x+20,y+10);
        g.lineTo(x+20, y+20);
        g.lineTo(x,y+20);
        g.lineTo(x, y+50);
        g.lineTo(x+30, y+50);
        g.lineTo(x+30, y+40);
        g.lineTo(x+10, y+40);
        g.lineTo(x+10, y+30);
        g.lineTo(x+30, y+30);
        g.lineTo(x+30, y);
        g.closePath();
        g.stroke();
        g.fill();
    }

    teken0(g,x,y,b){
        //0
        g.beginPath()
        g.fillStyle = "purple";
        g.moveTo(x,y);
        g.lineTo(x,y+50);
        g.lineTo(x+30, y+50);
        g.lineTo(x+30, y);
        g.closePath();
        g.stroke();
        g.fill();

        //0-hole
        g.beginPath()
        g.fillStyle = b;
        g.moveTo(x+10, y+10);
        g.lineTo(x+10, y+40);
        g.lineTo(x+20, y+40);
        g.lineTo(x+20, y+10);
        g.closePath();
        g.stroke();
        g.fill();
    }

    teken3(g,x,y){
        g.beginPath()
        g.fillStyle = "#F48FB1";
        g.moveTo(x,y);
        g.lineTo(x, y+10);
        g.lineTo(x+20, y+10);
        g.lineTo(x+20,y+20);
        g.lineTo(x,y+20);
        g.lineTo(x,y+30);
        g.lineTo(x+20, y+30);
        g.lineTo(x+20,y+40);
        g.lineTo(x, y+40);
        g.lineTo(x,y+50);
        g.lineTo(x+30, y+50);
        g.lineTo(x+30, y);
        g.closePath();
        g.stroke();
        g.fill();
    }
}
