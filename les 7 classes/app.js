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

    eetDino(dino)
    {
        dino.leeft = false;
        console.log("Trex eet de dino Ankylosaurus");
    }

    eetPlant(plant)
    {
        this.plant1 = plant;
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

        let plant1 = new Plant("gras");
        console.log("Ankylosaurus eet de plant " , plant1.naam);

        meep.eetPlant(plant1);
        trex.eetDino(meep);
    }
    
}

let app = new App();
app.runApplication();