class App
{
    runApplication()
    {
        
        console.log("Hello World!");
        //code gaat hier!
        let appNaam = "Les 1";
        let versienummer = 0.9;
        let versiedatum =  "22/11/2022";
        let autheur = "Astrid Prins";
        let copyright = "copyright";
        let distributeur = "Meep Meep";
        let darkmode = true;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();