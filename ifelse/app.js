class App
{
    runApplication()
    {
        let title = document.getElementById("newstitle");
        

        let randomGetal = Math.random();

        if(randomGetal == 0)
        {
            title.style.backgroundColor = "#3498DB";
            
        }
        else if(randomGetal < 0.2)
        {
            title.style.backgroundColor = "#8E44AD";
            
        }
        else if(randomGetal >= 0.2 && randomGetal <= 0.6)
        {
            title.style.backgroundColor = "#48C9B0";
            
        }
        else if(randomGetal > 0.6)
        {
            title.style.backgroundColor = "#F48FB1";
            
        }
        else
        {
            title.style.backgroundColor = "#C0392B";
        }

        randomGetal
        
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        
        console.log(canvas)
        
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

        // Groot dak vlak
        g.beginPath()
        g.fillStyle = "#cc0000";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()
        
        // Driehoek dak vlak
        g.beginPath()
        g.fillStyle = "#990033";
        g.moveTo(700,200);
        g.lineTo(600,400);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill()

        // Groot muur vlak
        g.beginPath()
        g.fillStyle = "#ffcc99";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

         // raam
         g.beginPath()
         if(randomGetal == 0)
         {
             g.fillStyle = "#3498DB";
             
         }
         else if(randomGetal < 0.2)
         {
             g.fillStyle = "#8E44AD";
             
         }
         else if(randomGetal >= 0.2 && randomGetal <= 0.6)
         {
             g.fillStyle = "#48C9B0";
             
         }
         else if(randomGetal > 0.6)
         {
             g.fillStyle = "#F48FB1";
             
         }
         else
         {
             g.fillStyle = "#C0392B";
         }
         g.moveTo(250,340);
         g.lineTo(250,420);
         g.lineTo(350,445);
         g.lineTo(350,365);
         g.closePath();
         g.stroke();
         g.fill()
 
        // Klein muur vlak
        g.beginPath()
        g.fillStyle = "#ffb366"
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill()
    }
}

let app = new App();
app.runApplication();