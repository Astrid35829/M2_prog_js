class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);

        this.tekenAchtergrond(g);
        
        
        for(let i = 0; i < 200; i++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            this.tekenHuis(g, x, y);
        }

        for(let j = 0; j < 100; j++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            this.tekenKerstboom(g, x, y);
        }
    }

    tekenKerstboom(g, x, y){
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

    tekenAchtergrond(g)
    {
        // Lucht 
        g.beginPath()
        g.fillStyle = "#99ccff";
        g.moveTo(0,0);
        g.lineTo(0,250);
        g.lineTo(1000,250);
        g.lineTo(1000,0);
        g.closePath();
        g.stroke();
        g.fill()

        // grass
        g.beginPath()
        g.fillStyle = "#00e600";
        g.moveTo(0,250);
        g.lineTo(0,700);
        g.lineTo(1000,700);
        g.lineTo(1000,250);
        g.closePath();
        g.stroke();
        g.fill()
    }

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

let app = new App();
app.runApplication();