const foods = ['pizza', 'cheeseburger'];
foods.unshift('taco');
let favfood = foods[1];
foods.splice(1, 0, 'tofu');
foods.splice(2, 1, 'sushi', 'cupcake');
const yummy = foods.slice(2, 4);
const sayIdx = foods.indexOf('tofu');
const allfood = foods.join(' -> ')
const hasSoup = foods.includes('soup');
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let odds = [];
nums.forEach(num => {
    if (num % 2 !== 0) {
        odds.push(num);
    }
});
let fizz = [];
let buzz = [];
let fizzbuzz = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0) {
        fizz.push(nums[i]);
    }
    if (nums[i] % 5 === 0) {
        buzz.push(nums[i]);
    }
    if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
        fizzbuzz.push(nums[i]);
    }
}

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];
const numList = numArrays[numArrays.length - 1];
const num = numArrays[2][1];
let total = 0;
numArrays.forEach(array => {
    array.forEach(num => {
        total += num;
    });
});
console.log('Exercise 2 result:', foods);
console.log('Exercise 4 result:', favfood);
console.log('Exercise 7 result:', yummy);
console.log('Exercise 8 result:', sayIdx);
console.log('Exercise 9 result:', allfood);
console.log('Exercise 10 result:', hasSoup);
console.log('Exercise 11 result:', odds);
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
console.log('Exercise 13 result:', numList);
console.log('Exercise 14 result:', num);
console.log('Exercise 15 result:\n', total);











console.log('Exercise 13 result:', num);
console.log('Exercise 15 result:\n', total);
