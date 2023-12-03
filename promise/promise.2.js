'use strict';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        console.log('첫번째:', response);
        return response.json();
    })
    .then(function(myJson) {
        console.log('두번째:', myJson);
        console.log(JSON.stringify(myJson));
    })
    .catch(error => console.log('오류:', error));

