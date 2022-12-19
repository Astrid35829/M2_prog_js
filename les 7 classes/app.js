class Dino
{
    constructor(naam, vleeseter, leeftijd, leeft)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }

    eetDino(meep)
    {
        Dino.leeft = false;
        
    }
}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
        this.leeft = true;
        this.honger = true;
    }
}

class App
{
    runApplication()
    {
        let trex = new Dino("Trex", true,10);
        console.log(trex);

        let meep = new Dino("Meep", false, 2);
        console.log(meep);

        let anne = new Dino("Anne", true, 14);
        console.log(anne);
    }
    
}

let app = new App();
app.runApplication();