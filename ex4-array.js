let numbers = [1, 3, 5, 7, 9];
for(let i=0; i<numbers.length; i++)
    console.log("array["+i+"]="+numbers[i]+" === " + ( numbers[i]+1));

console.log('---------------------------------------------');
const fruits = ['apple', 'banana', 'cherry'];
const icon = '🌳';
const new_fruits = fruits.map(i=>i+icon);
console.log(new_fruits);