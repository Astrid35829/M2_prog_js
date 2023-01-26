import { Star1Renderer, Star2Renderer} from "./StarRenderer.js";
import {Boom, Kerstboom} from "./BoomRenderer.js";
import {Snowman} from "./SnowmanRenderer.js";
import {Huis} from "./HuisRenderer.js";
import {Letters, Nummers} from "./LetterRenderer.js";
import {Color} from "./LightRandom.js";
// DONT FORGET THE .js WHILE IMPORTING STUFF CUZ VSCODE AUTOCOMPLETES IT WITHOUUUUUUUT... Was stuck for a while on it...
class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);

        let b = "#062575";

        this.tekenAchtergrond(g,0, 0, b);

        let star1 = new Star1Renderer();
        let star2 = new Star2Renderer();
        
        for(let i = 0; i < 300; i++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            star1.tekenStar1(g, x, y);
        }

        for(let i = 0; i < 150; i++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            star2.tekenStar2(g, x, y);
        }

        this.tekenSnow(g, 120,220);

        this.tekenWeg(g,160,280);

        let huis = new Huis();

        huis.tekenHuis(g,140,280);
        huis.tekenHuis(g,200,260);
        huis.tekenHuis(g,240,260);
        huis.tekenHuis(g,280,260);
        huis.tekenHuis(g,340,280);
        huis.tekenHuis(g,220,320);
        huis.tekenHuis(g,260,320);

        huis.tekenRaam(g,140,280, "#333");
        huis.tekenRaam(g,200,260, "#333");
        huis.tekenRaam(g,240,260, "#333");
        huis.tekenRaam(g,280,260, "#333");
        huis.tekenRaam(g,340,280, "#333");
        huis.tekenRaam(g,220,320, "#333");
        huis.tekenRaam(g,260,320, "#333");

        let knop = document.getElementById("js--sparkle");
        knop.addEventListener('click', ()=>{
        let light = new Color().rollNumber();
            huis.tekenRaam(g,140,280, light);
            huis.tekenRaam(g,200,260, light);
            huis.tekenRaam(g,240,260, light);
            huis.tekenRaam(g,280,260, light);
            huis.tekenRaam(g,340,280, light);
            huis.tekenRaam(g,220,320, light);
            huis.tekenRaam(g,260,320, light);
        });
        
        let boom = new Boom();

        boom.tekenBoom(g, 155, 340);
        boom.tekenBoom(g, 155, 380);
        boom.tekenBoom(g, 155, 420);
        boom.tekenBoom(g, 190, 420);
        boom.tekenBoom(g, 230, 420);
        boom.tekenBoom(g, 270, 420);
        boom.tekenBoom(g, 310, 420);
        boom.tekenBoom(g, 345, 420);
        boom.tekenBoom(g, 345, 380);
        boom.tekenBoom(g, 345, 340);
        boom.tekenBoom(g, 190, 340);
        boom.tekenBoom(g, 230, 340);
        boom.tekenBoom(g, 270, 340);
        boom.tekenBoom(g, 310, 340);
        boom.tekenBoom(g, 180, 260);
        boom.tekenBoom(g, 320, 260);
        boom.tekenBoom(g, 190, 280);
        boom.tekenBoom(g, 230, 280);
        boom.tekenBoom(g, 270, 280);
        boom.tekenBoom(g, 310, 280);

        let snowman = new Snowman();

        snowman.tekenSnowman(g, 190, 400);
        snowman.tekenSnowman(g, 310, 400);

        let kerstboom = new Kerstboom();

        kerstboom.tekenKerstboom(g,250,370);

        let letter = new Letters();

        letter.tekenH(g, 135, 100);

        letter.tekenA(g,185,100,b);

        letter.tekenP(g,235,100, b, 'yellow');
        letter.tekenP(g,285,100, b, 'lightgreen');

        letter.tekenY(g, 335, 100);

        let nummer = new Nummers();

        nummer.teken2(g, 160, 550, 'blue');
        nummer.teken2(g, 260, 550, 'magenta');

        nummer.teken0(g, 210, 550,b);

        nummer.teken3(g,310,550);
    }

    tekenAchtergrond(g, x, y, b)
    {
        //achtergrond
        g.beginPath()
        g.fillStyle = b;
        g.moveTo(x,y);
        g.lineTo(x,y+700);
        g.lineTo(x+500,y+700);
        g.lineTo(x+500,y);
        g.closePath();
        g.stroke();
        g.fill();
    }
       
    tekenSnow(g,x,y){

        //snow
        g.beginPath()
        g.fillStyle = "#E9FFFF";
        g.moveTo(x,y);
        g.lineTo(x,y+260);
        g.lineTo(x+260, y+260);
        g.lineTo(x+260,y);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenWeg(g,x,y)
    {
        g.beginPath()
        g.fillStyle = "#d8c090";
        g.moveTo(x, y);
        g.lineTo(x, y+20);
        g.lineTo(x+80, y+20);
        g.lineTo(x+80, y+80);
        g.lineTo(x, y+80);
        g.lineTo(x, y+160);
        g.lineTo(x+180, y+160);
        g.lineTo(x+180, y+80);
        g.lineTo(x+100, y+80);
        g.lineTo(x+100, y+20);
        g.lineTo(x+180, y+20);
        g.lineTo(x+180, y);
        g.closePath();
        g.stroke();
        g.fill();
    } 
    
}

let app = new App();
app.runApplication();