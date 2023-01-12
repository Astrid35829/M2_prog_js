"use strict";

class Room
{
    constructor(w,h)
    {
        this.w=w;
        this.h=h;
        this.tiles = [];
        for (let i = 0; i < this.h; i++) 
        {
            let row = [];
            for (let i2 = 0; i2 < this.w; i2++) 
            {
                let gfx ='.';
                if(i % 2 == i2 % 2)
                {
                    gfx ='#'; 
                }    
                row.push(gfx);                       
            }
            this.tiles.push(row);
        }
        
    }
}
class App
{
    constructor()
    {
        this.room = new Room(10,10);
    }
    runApplication()
    {
        this.printRoom(this.room);        
    }

    printRoom(room)
    {
        for (let i = 0; i < room.h; i++) 
        {
            let rowString = "";
            for (let i2 = 0; i2 < room.w; i2++) 
            {
                rowString += room.tiles[i][i2];                
            }
            console.log(rowString);
        }
    }
}

let app = new App();
app.runApplication();//put a breakpoint here and step into