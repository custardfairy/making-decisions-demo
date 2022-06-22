/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

//Create a variable for Jon and Jamie's attack strengths
let jonSnowAttack = 25
let jamieLannisterAttack = 35

if(jonSnowAttack > jamieLannisterAttack){
    console.log(`Jon Snow has a better attack than Jamie`)
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log(`Jamie has a better attack than Jon.`)
} else {
    console.log(`Jon and Jamie have the same attack`)
}

let jonSnowHealth = 100
let jonSnowDefense = 0

// Jamie attacks! Use an if/else to determine if Jon Snow can survive the attack.

if (jonSnowHealth <= jamieLannisterAttack){
    console.log(`Jon Snow has been slain.`)
    } else {
        jonSnowHealth -= jamieLannisterAttack
        console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
    }

    jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log(`Jon Snow has been slain.`)
    } else {
        jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
        console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
    }

    if(jonSnowHealth + 50 >= 100){
        jonSnowHealth = 100
      } else {
        jonSnowHealth += 50
      }

      console.log(jonSnowHealth)

      let coinLandsHeads = false

if (coinLandsHeads === true){
  console.log(`The fight continues!`)
} else {
  console.log(`Jon is allowed to run away.`)
}

if(coinLandsHeads !== false){
    console.log(`The fight continues!`)
} else {
    console.log(`Jon is allowed to run away.`)
}

//for-loops
//Create a for-loop that will have Jamie attack Jon 5 times.  Console log JS health after each attack.

for(let i = 0;i < 5;i++){
    if(jonSnowHealth <= 0){
      console.log(`Jon has been slain.`)
    }
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log(`Jon Snow's health is ${jonSnowHealth}`)
  }

  while(jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
      console.log(`Jon's health is now ${jonSnowHealth}`)
      if(jonSnowHealth <= 0){
        console.log(`Jon has been slain.`)
      }
    }