class App
{
    runApplication()
    {
        this.marioFunction();
        this.laughFunction();
        this.countFunction();
        this.meFunction();
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
app.marioFunction();
app.laughFunction();
app.countFunction();
app.meFunction();