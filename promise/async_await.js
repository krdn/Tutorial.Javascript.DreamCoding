'use strict';

// 생활코딩 async & await

function timer(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve(ms), ms));
}

// timer(1000).then((time) => console.log('timer: ' + time));



// console.log('시작');
// timer(1000).then((time) => {
//     console.log('timer: ' + time);
//     return timer(time + 1000);
// }).then((time) => {
//     console.log('timer: ' + time);
//     return timer(time + 1000);
// }).then((time) => {
//     console.log('timer: ' + time);
//     console.log('끝');
// });


async function run(ms) {
    console.log('시작');
    const time = await timer(ms);
    console.log('timer: ' + time);
    const time2 = await timer(time + 1000);
    console.log('timer: ' + time2);
    const time3 = await timer(time2 + 1000);
    console.log('timer: ' + time3);
    console.log('끝');
}
run(1000); 
