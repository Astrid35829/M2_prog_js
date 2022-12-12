class App
{
    runApplication()
    {
        console.log("Hello World!");
        //code gaat hier!
        let artists = ["Imagine Dragons", "The Score", "All Good Things", "Citizen Soldier", "Linkin Park"]
        let headers = document.getElementsByClassName("bandName");
        for(let i = 0; i < headers.length; i++){
            headers[i].innerHTML = artists[i];
        }
    }

}

let app = new App();
app.runApplication();