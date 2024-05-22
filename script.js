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
