/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backPack = []

// Now, let's add some of his stuff to that backpack. Add 3 strings to the array, "sword", "shield", and "food".

backPack.push('sword', 'shield', 'food')

console.log(backPack)

// Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

let belt = backPack.splice(0,1)

console.log(belt)

// Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.

let furCoat = 'fur coat'

backPack.unshift(furCoat)

console.log(backPack)

// Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.

backPack.shift()

console.log(backPack)

// Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack.

let itemCount = backPack.length

console.log(itemCount)

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backPack.push("flint", "blanket", "knife", "toothbrush")

console.log(backPack)

// Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2

let backPack2 = backPack.splice(2,4)

console.log(backPack2)

// Using bracket syntax, console.log the first tiem in backpack2
console.log(backPack2[0])

// LOOPS

// Let's see the contents of Jon's backpacks. Use a for loop on each backpack to console.log each item.

for(let i = 0; i < backPack.length;i++){
    console.log(backPack[i])
}

for(let i = 0; i < backPack2.length;i++){
    console.log(backPack2[i])
}

console.log('Jon this is getting ridiculous.')

for (let i = 0;i<3;i++){
    console.log(i, '------------',backPack2[i])
}

// console.log(i,"----------",backPack2[i])