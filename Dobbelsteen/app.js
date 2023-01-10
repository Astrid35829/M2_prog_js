

class App
{

    runApplication()
    {
        this.rollCharacter();
        let button = document.getElementById("rerollButton");
        button.addEventListener('click', ()=> {
            this.rollCharacter();
        })
            
        console.log("Hello World");
        
    }
    rollCharacter(){
        this.randomGetal();
            //mine
            let d = this.randomGetal();
            console.log(d);

            
            let classs = this.rollClass();
            console.log(classs);
            let head1 = document.getElementById("claass");
            head1.innerHTML = classs;

            //1
            let dexterity = "Dexterity" + "=" + this.rollBabarian();
            console.log(dexterity);
            let header1 = document.getElementById("s1");
            header1.innerHTML = dexterity;

            //2
            let strength = "Strength" + "=" + this.rollBabarian();
            console.log(strength);
            let header2 = document.getElementById("s2");
            header2.innerHTML = strength;

            //3
            let intelect = "Intelect" + "=" + this.rollBabarian();
            console.log(intelect);
            let header3 = document.getElementById("s3");
            header3.innerHTML = intelect;

            //4
            let wisdom = "Wisdom" + "=" + this.rollBabarian();
            console.log(wisdom);
            let header4 = document.getElementById("s4");
            header4.innerHTML = wisdom;

            //5
            let charisma = "Charisma" + "=" + this.rollBabarian();
            console.log(charisma);
            let header5 = document.getElementById("s5");
            header5.innerHTML = charisma;

            //6
            let constitution = "Constitution" + "=" + this.rollBabarian();
            console.log(constitution);
            let header6 = document.getElementById("s6");
            header6.innerHTML = constitution;
    }
    randomGetal()
    {
        let random = Math.floor(Math.random()*6)+1;

        //mine
        //console.log(random);
        return random
    }

    rollBabarian()
    {
        let d1 = this.randomGetal();
        let d2 = this.randomGetal();
        let d3 = this.randomGetal();
        let d4 = this.randomGetal();

        let diceArr = [d1, d2, d3 ,d4];
        console.log(diceArr);
        diceArr.sort();
        console.log(diceArr);
        let som = diceArr[1] + diceArr[2] + diceArr[3];
        return som;
    }


    // own idea added
    rollClass()
    {
        let class1 = this.randomGetal();

        if(class1 == 1){
            class1 = "Rogue";
        }
        else if(class1 == 2){
            class1 = "Druid";
        }
        else if(class1 == 3){
            class1 = "Babarian";
        }
        else if(class1 == 4){
            class1 = "Wizard";
        }
        else if(class1 == 5){
            class1 = "Cleric";
        }
        else if(class1 == 6){
            class1= "Warlock";
        }

        return class1;
        
    }
}

let app = new App();
app.runApplication();