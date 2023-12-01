'use strict';

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
// 배열의 index는 0부터 시작한다.
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
// 배열의 마지막 index를 찾는 방법
console.log(fruits[fruits.length - 1]); // 🍌

// 3. Looping over an array
// print all fruits
// a. for
// fruits의 길이만큼 반복한다.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
// fruits의 value들을 받아와서 출력한다.
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
// forEach는 callback함수를 받아온다.
// fruits의 value들을 받아와서 출력한다.
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
// fruits의 끝에 '🍓'를 추가한다.
fruits.push('🍓', '🍑');
console.log(fruits);
// pop: remove an item from the end
// fruits의 끝에 있는 item을 삭제한다.
fruits.pop();
console.log(fruits);
// unshift: add an item to the beginning
// fruits의 앞에 '🍓'를 추가한다.
fruits.unshift('🍓', '🍋');
console.log(fruits);
// shift: remove an item from the beginning
// fruits의 앞에 있는 item을 삭제한다.
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// shift와 unshift는 pop과 push보다 느리다.
// splice: remove an item by index position
// fruits의 index 1부터 1개를 삭제한다.
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

// fruits의 index 1부터 1개를 삭제하고 '🍏'를 추가한다.
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// combine two arrays
// fruits와 fruits2를 합친다.
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// fruits에서 '🍎'의 index를 찾는다.
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));

// fruits에 '🍉'가 있는지 확인한다.
console.log(fruits.indexOf('🍉'));

// includes
// fruits에 '🍉'가 있는지 확인한다.
console.log(fruits.includes('🍉'));

// lastIndexOf
// fruits에서 '🍎'의 index를 찾는다.
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));





