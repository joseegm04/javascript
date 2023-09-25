let alertText = "This is an alert message, click to move on!!!";
let confirmText = "Show me an alert if you clicked on ok or false";
let promptText = "Show me in an alert message typed";

alert(alertText);

let b_confirm = confirm(confirmText);

alert("You clicked on " + b_confirm + " click me to move on!!!");

let promptResponse = prompt(promptText);
alert("You typed " + promptResponse + " click me to move on!!!")