//Now im lost...

class Dino
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

    eetDino()
    {
        Dino.leeft = false;
        console.log("Trex eet de dino Ankylosaurus");
    }

    eetPlant()
    {
        this.plant = plant;
        
        let plant = "gras"
        console.log("Ankylosaurus eet de plant" + plant);
    }
}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}

class App
{
    runApplication()
    {
        let trex = new Dino("Trex", true, 10);
        console.log(trex);

        let meep = new Dino("Ankylosaurus", false, 2);
        console.log(meep);

        let anne = new Dino("Spinosaurus", true, 14);
        console.log(anne);

        
        meep.eetPlant();
        trex.eetDino();
    }
    
}

let app = new App();
app.runApplication();