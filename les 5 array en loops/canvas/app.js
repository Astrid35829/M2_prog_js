class App
{
    runApplication()
    {
        console.log("Hello World!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
       
        for(let i = 0; i < 200; i++){
            let x = Math.random()*1000;
            let y = Math.random()*700;
            this.tekenCirkel(g, x, y);
        }
    }

    tekenCirkel(g, x, y)
    {
        //circle
        g.beginPath();
        g.fillStyle = "green";
        g.arc(x,y,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
}

let app = new App();
app.runApplication();