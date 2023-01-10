import {BoomRenderer, BoomVariantRenderer} from "./BoomRenderer.js";
import {huisRenderer} from "./HuisRenderer.js";

class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);

        this.tekenAchtergrond(g);
        
        let huis = new huisRenderer();
        console.log(huis);
        
        let boom = new BoomRenderer();
        console.log(boom);
        
        let boom2 = new BoomVariantRenderer();
        console.log(boom2);
        
        for(let i = 0; i < 200; i++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            huis.tekenHuis(g, x, y);
        }

        for(let j = 0; j < 100; j++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            boom.tekenKerstboom(g, x, y);
        }

        for(let k = 0; k < 100; k++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            boom2.tekenBoom(g, x, y);
        }
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

}

let app = new App();
app.runApplication();