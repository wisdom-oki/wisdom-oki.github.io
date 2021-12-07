//form javascript
var name // the page will now ask for your name before filling more info
name = prompt(" Welcome. Please enter your name");
alert("Hi " + name + "\n This page is to sign up for the next open day happening here. please fill in the valid information into the form and once everything is valid it will automaticaly send an email to you");

function validate() {
    var userName = document.getElementById("nameData").value;
    if (userName.length < 2) {
        alert("Invalid name entered please try again") // check for valid name W.O
    } else {
        document.getElementById("feedback2").innerHTML = "Valid name" // if correct W.O
    }
    var userSurname = document.getElementById("nameData2").value;
    if (userSurname.length < 2) {
        alert("Invalid surname entered please try again") // check for valid surname W.O 
    } else {
        document.getElementById("feedback5").innerHTML = "Valid surname" // if correct W.O
    }
    //check for number


    //code learned from w3Schools W.O
    //date 11/30/2021
    //source: https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript
    let x = document.getElementById("numberData").value;
    // If x is Not a Number or less than 1 it will fail
    let text;
    if (isNaN(x) || x < 1 || x > 100000000000000000000000) {
        alert("Invalid number entered please try agian")
    } else {
        document.getElementById("feedback4").innerHTML = "Valid number" // if correct W.O
    }

    //code learned from java point W.O
    //date 11/30/2021
    //source: https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript
    if (document.getElementById("Male").checked == true) {
        document.getElementById("feedback").innerHTML = "Male selected"
    }
    if (document.getElementById("Female").checked == true) {
        document.getElementById("feedback").innerHTML = "Female selected"
    } //will show text of what gender the user picked below submit W.O

    var userEmail = document.getElementById("emailData").value;
    var symbol = userEmail.indexOf("@"); // will look for  a @ in email W.O
    if (symbol < 1) {
        alert("Invalid email entered please try again") // check for valid email W.O
    } else {
        document.getElementById("feedback3").innerHTML = "Valid email" // if correct W.O
    }
}