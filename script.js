const firstname = prompt ("scrivi il tuo nome");
const surname = prompt ("scrivi il tuo cognome");
const color = prompt ("scrivi il tuo colore preferito");

const password = firstname + surname + color + "23";

console.log(password);

const passwordEl = document.getElementById('password');

passwordEl.innerHTML= password;