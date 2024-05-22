function sayHello(event) {
    alert('Hello ' + event.target.className);
}

// Get all elements with class 'btn'
var btnElements = document.getElementsByClassName('btn');

// Iterate over the HTMLCollection and add event listener to each element
for (var i = 0; i < btnElements.length; i++) {
    btnElements[i].addEventListener("click", sayHello);
}

// For adding an event listener to a single element by ID
// document.getElementById('someId').addEventListener('click', sayHello); --> No loop needed 


//document.getElementById("mainFormBtn").onclick = mainFormLogInput();
//causes the function to run immediately when the script is loaded, and the return value of the function (which is undefined) is assigned as the event handler.
//To fix this, you need to pass a reference to the mainFormLogInput function without invoking it. Additionally, to prevent the form from submitting and refreshing the page when the button is clicked, you should use event.preventDefault().


function mainFormLogInput(){
    let form = document.forms["mainForm"];
    let email = form["email"].value;
    alert(email);
}

document.getElementById("mainFormBtn").onclick = function(event) {
    event.preventDefault();
    mainFormLogInput();
};
