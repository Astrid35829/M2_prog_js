class App
{
    runApplication()
    {
        // code gaat hier
        let knop = document.getElementById("myButton");
        
        knop.addEventListener('click', ()=>{
            const para = document.createElement("p");
            const node = document.createTextNode("Well done, you clicked on a button.");
            para.appendChild(node);
            const element = document.getElementById("div1");
            element.appendChild(para);
        });
    }
}

let app = new App();
app.runApplication();