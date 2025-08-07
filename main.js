// 6 postives intergers from 1-47 all should be random, no duplications, 2 unlucky numbers that connot get added to th array. 

const min = 1;
const max = 47;
let exclusions = [20,25];
const numbers = new Set();

function RandomNumber(min, max, exclusions) {

    // let logicalMax = max - exclusions.length;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i = 0; i < exclusions.length; i++) {
        console.log(exclusions[i], randomNumber); 
        if (randomNumber == exclusions[i]) {
            randomNumber++;
            console.log(numbers);
        }
    }
    console.log(randomNumber);
    return randomNumber;
}

while (numbers.size != 6) {
    numbers.add(RandomNumber(min,max,exclusions));
}

console.log(numbers);
