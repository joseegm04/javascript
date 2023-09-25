const WelcomeTextBlue = "Welcome to the application!";
const InfoTextGreen = "This is an informational message.";
const WarnText = "This is a warning. Be cautious.";
const ErrorText = "Error! Something went wrong.";

let nombre1 = "John";
let edad1 = 30;
let ciudad1 = "New York";
let nombre2 = "Jane";
let edad2 = 25;
let ciudad2 = "San Francisco";
let nombre3 = "Bob";
let edad3 = 40;
let ciudad3 = "Chicago";

console.log("%c " + WelcomeTextBlue, 'font-size: 18; color: blue; font-style: bold');
console.log("%c" + InfoTextGreen, 'color: green; font-size: 16;');
console.warn(WarnText);
console.error(ErrorText);
console.table([
    {name: nombre1, age: edad1, city: ciudad1},
    {name: nombre2, age: edad2, city: ciudad2},
    {name: nombre3, age: edad3, city: ciudad3}
]);