class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);


        this.tekenAchtergrond(g);
        this.tekenWeg(g);
        this.tekenHuis(g,250,260)
    }

    tekenAchtergrond(g)
    {
        //achtergrond
        g.beginPath()
        g.fillStyle = "#F48FB1";
        g.moveTo(0,0);
        g.lineTo(0,700);
        g.lineTo(700,700);
        g.lineTo(700,0);
        g.closePath();
        g.stroke();
        g.fill();

        //snow
        g.beginPath()
        g.fillStyle = "#E9FFFF";
        g.moveTo(220,220);
        g.lineTo(220,480);
        g.lineTo(480,480);
        g.lineTo(480,220);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenWeg(g)
    {
        g.beginPath()
        g.fillStyle = "#A6AEAE";
        g.moveTo(260,280);
        g.lineTo(260,300);
        g.lineTo(340,300);
        g.lineTo(340,360);
        g.lineTo(260,360);
        g.lineTo(260,440);
        g.lineTo(440,440);
        g.lineTo(440,360);
        g.lineTo(360,360);
        g.lineTo(360,300);
        g.lineTo(440,300);
        g.lineTo(440,280);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenHuis(g,y,x)
    {
        //dak
        g.beginPath()
        g.fillStyle = "#E8827A";
        g.moveTo(x,y);
        g.lineTo(x-10,y+20);
        g.lineTo(x+20,y+20);
        g.closePath();
        g.stroke();
        g.fill();
    }

}

let app = new App();
app.runApplication();