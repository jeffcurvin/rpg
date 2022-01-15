const readlineSync = require ("readline-sync");
const name = readlineSync.question("What is your name? ");

console.log (`${name} welcome to the role playing game!`)

const badGuys = ['shadow', 'death', 'demon spawn'];
const treasure = ['dagger', 'medkit', 'gun'];
var prize = [];
let userHealth = 50;
const options = ['walk', 'exit', 'print'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];




function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor( Math.random() * badGuys.length)];
    let badGuysHealth = 50;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 +2) + 5);

    const index = readlineSync.keyInSelect(options, 'what is your next move? ')

    if(options[index]=='exit'){
        return userHealth = 0;}


    else if (options[index]=='print'){
        console.log(name + '\n' + userHealth + '\nTreasure: ' + pickUp);
    }
    else if(options[index]=='walk'){
        let key = Math.random();
        if (key<=.3){
            console.log(" walking");
        }
        else if (key>=.3){
            console.log (badGuy + " showed up");
        

            while (badGuysHealth>0 && userHealth>0){
                const user= readlineSync.question(' what do you want to do? enter r for run and a to attack ');

                switch (user){

                    case 'r':
                        const run=Math.random();

                        if (run<.5){
                            console.log(" before you could run enemy attacked you with " + badGuysPower)
                        }
                        else {
                            console.log (' you ran away!');
                            break;
                        }
                
                
                    case 'a':
                        badGuysHealth -= attackPower;
                        console.log ('you attacked ' + badGuy +  " with " + attackPower + " attack power ")
                        userHealth -= badGuysPower
                        console.log ( "enemy just hit you with " + badGuysPower + " attack power")}
                
                        if (badGuysHealth<=0){
                            console.log (" you defeated enemy " + '\n' + badGuy + ' left' + pickUp);
                        
                        let loot = Math.random();
                        if (loot<=.3){
                            prize.push(pickUp);
                        }}
                        else if (userHealth<=0){
                            console.log ("you have been defeated please try again!!")
                        }
        
            }
        }
    }}
    while (userHealth > 0){
      function hp(){
           playerLiving=true;
           userHealth=50
      } 
       hp();
      game();
    }

