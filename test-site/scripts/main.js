var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/young-rex.jpg') {
        myImage.setAttribute ('src', 'images/young-rascal.jpg');
    } else {
        myImage.setAttribute ('src', 'images/young-rex.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Dogs are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dogs are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}