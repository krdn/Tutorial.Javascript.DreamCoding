'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);  // true

json = JSON.stringify(['apple', 'banana']);
console.log(json);  // ["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),  // 자바스크립트에만 있는 특별한 데이터도 JSON에 포함되지 않음
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);  // {"name":"tori","color":"white","size":null,"birthDate":"2021-07-29T13:29:00.151Z"}
// 함수는 object에 있는 데이터가 아니기 때문에 제외됨
// symbol도 object에 있는 데이터가 아니기 때문에 제외됨

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);  // {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value;
}
);
console.log(json);  // {"name":"ellie","color":"white","size":null,"birthDate":"2021-07-29T13:33:51.259Z"}

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);



console.log(obj);  // {name: "tori", color: "white", size: null, birthDate: "2021-07-29T13:36:51.700Z"}

rabbit.jump();
// obj.jump();  // error
// 함수는 JSON에 포함되지 않았기 때문에 obj에도 포함되지 않음

console.log(rabbit.birthDate.getDate());  // 29 (오늘 날짜)
console.log(rabbit.birthDate);
// console.log(obj.birthDate.getDate());  // error
// birthDate는 string이기 때문에 getDate()를 사용할 수 없음

// parse(json, reviver)





