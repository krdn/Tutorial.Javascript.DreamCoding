'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
// object를 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// JavaScript는 동적으로 타입이 runtime때 결정되는 언어이기 때문에
// 나중에 추가도 가능하다.
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
// 나중에 추가도 가능하다.
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
// 삭제도 가능하다.
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
// 실시간으로 원하는 값을 받아오고 싶을 때 사용한다.
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 실시간으로 원하는 값을 받아오고 싶을 때 사용한다.
// key는 항상 string type으로 지정해야 한다.
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
// object를 만드는 방법
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
// object를 함수에 전달하는 방법
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
// object를 만드는 방법
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// 5. in operator: property existence check (key in obj)
// 해당하는 object안에 key가 있는지 확인하는 방법
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
// undefined
console.log(ellie.random);


// 6. for..in vs for..of
// for (key in obj)
// ellie의 key들을 받아와서 출력한다.
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
// ellie의 value들을 받아와서 출력한다.
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
// object를 복사하는 방법
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
// user2를 user로 복사하는 방법
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// user4를 user로 복사하는 방법
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// new way
// user5를 user로 복사하는 방법
const user5 = Object.assign({}, user);
console.log(user5);

// another example
// user6를 user로 복사하는 방법
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
// 뒤에 있는 값이 앞에 있는 값을 덮어쓴다.
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);


















