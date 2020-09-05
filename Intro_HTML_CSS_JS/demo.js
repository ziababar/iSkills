function validInput() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}


function showAlert() {
}
    
function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
function checkRegistration(){
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