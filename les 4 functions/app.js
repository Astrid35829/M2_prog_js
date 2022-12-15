class App
{
    runApplication()
    {
        this.marioFunction();
        let laugh2 = this.laughFunction();
        let count2 = this.countFunction();
        this.meFunction();

        console.log(laugh2);
        console.log(count2);
    }
    
    marioFunction()
    {
        let mario = "MARIO!!";
        console.log(mario);
    }

    laughFunction()
    {
        let laugh = "BWAHAHA";
        return laugh;

    }

    countFunction()
    {
        let num1 = 4;
        let num2 = 4;
        let count = num1 + num2;
        return count;

    }
        
    meFunction()
    {
        let me = 6 * 6;
        console.log(me);
    }
        
}


let app = new App();
app.runApplication();
