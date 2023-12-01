'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
// then: promise가 정상적으로 수행되어서 resolve 콜백함수로 전달된 값이 value로 전달됨
// catch: promise가 정상적으로 수행되지 않아서 reject 콜백함수로 전달된 값이 error로 전달됨
// finally: 성공하든 실패하든 마지막에 무조건 실행됨
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log('finally'));

// 3. Promise chaining
// then은 값을 바로 전달할 수도 있고, Promise를 전달할 수도 있다.
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});


fetchNumber
    .then(num => num * 2) // 1
    .then(num => num * 3) // 2
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000); // 3
        });
    })
    .then(num => console.log(num)); // 4

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()
//     .then(hen => getEgg(hen))
//     // .then(egg => cook(egg))
//     .then(cook)
//     .then(meal => console.log(meal))
//     .catch(error => console.log(error));

getHen()
    .then(getEgg)
    .catch(error => {
        return '🍞';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

// 5. Callback Hell example



