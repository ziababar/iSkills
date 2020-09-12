// Generate a number from 1 to 100
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
// Check if the registration is correct
function checkRegistration() {
    var regNumber = randomInteger(1, 100);
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    if ((firstName === "") || (lastName === "")) {
        alert('Please provide a valid first name and last name');
        return;
    }

    if (regNumber <= 40) {
      alert('Thank you for early registration, ' + firstName + ' ' + lastName);
    } else {
        alert('Sorry, registration is now closed');
    }   
}

function onClick_StyleButton(s) {
	document.getElementById("toggleableStyle").href = "styles/styles" + s + ".css";
}