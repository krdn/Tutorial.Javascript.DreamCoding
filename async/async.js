'use strict';

// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs....
//         resolve('ellie');
//     });
// }

// 위의 코드를 async를 사용하여 아래와 같이 바꿀 수 있다.
async function fetchUser() {
    // // do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
// async가 붙은 함수 안에서만 사용 가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// 위의 코드를 async를 사용하여 아래와 같이 바꿀 수 있다.
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

// 위의 코드를 아래와 같이 바꿀 수 있다.(병렬 처리) - Promise API를 사용
// async function pickFruits() {
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`;
// }

// 병렬처리 2초, 동기시간 3초
pickFruits().then(console.log);

// 3. useful Promise APIs ✨
// Promise.all() - 병렬처리
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// 먼저 따지는 과일만 받아오고 싶을 때
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);







