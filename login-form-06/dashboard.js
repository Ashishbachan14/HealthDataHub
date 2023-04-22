const userName = document.querySelector('#user-name');
const userAge = document.querySelector('#user-age');
const userEmail = document.querySelector('#user-email');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const name = urlParams.get('name');
const age = urlParams.get('age');
const email = urlParams.get('email');

// You can use the retrieved values to update the content of your dashboard

/*

userName.innerText = urlParams.get('name');
userAge.innerText = urlParams.get('age');
userEmail.innerText = urlParams.get('email');
*/