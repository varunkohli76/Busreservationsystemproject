
function validate() {
    let username = document.getElementById('uname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
    let uppercase = /[A-Z]/g;
    let specialcharacters = /[@,$,%,&,*,]/g;
    let lowercase = /[a-z]/g;
    let numbers = /[0-9]/g;
    let str = /^[a-zA-Z0-9]+$/;

    // var usercheck = /^[a-z][A-Z][0-9][_]{3,15}$/;
    // var emailcheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // var passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (username == "" && !username.match(str)) {
        document.getElementById('usererror').innerHTML = " Enter the Username";
        document.getElementById('usererror').style.color = "red";
        return false;
    }
    else if (username.trim() !== username) {
        document.getElementById('usererror').innerHTML = "Username cannot start or end with a space";
        document.getElementById('usererror').style.color = "red";
        return false;
    }
    else if (!username.match(str)) {
        document.getElementById('usererror').innerHTML = "Only alpha-numeric characters are allowed";
        document.getElementById('usererror').style.color = "red";
        return false;
    }
    else {
        document.getElementById('usererror').innerHTML = "";
    }
    if (email == "") {
        document.getElementById('emailerror').innerHTML = " Enter the Email";
        document.getElementById('emailerror').style.color = "red";
        return false;
    }
    else if (email.trim() === email) {
        document.getElementById('emailerror').innerHTML = "email cannot start or end with a space";
        document.getElementById('emailerror').style.color = "red";
        return false;
    }
    else {
        document.getElementById('emailerror').innerHTML = "";
    }
    if (password == ""){
        document.getElementById('Passworderror').innerHTML = " Enter the password";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    }
    else if (!password.match(uppercase)) {
        document.getElementById('Passworderror').innerHTML = "Password must contain UpperCase(A-Z)";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    }
    else if (!password.match(lowercase)) {
        document.getElementById('Passworderror').innerHTML = "Password must contain Lowercase(a-z)";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    }
    else if (!password.match(specialcharacters)) {
        document.getElementById('Passworderror').innerHTML = "Password must contain Special Characters(@,$,%,&,*)";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    }
    else if (!password.match(numbers)) {
        document.getElementById('Passworderror').innerHTML = "Password must contain number 0-9";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    }
    else {
        let userdetails = {
            username: username,
            email: email,
            password: password,
        };

        let details = [];

        let storedDetails = localStorage.getItem('details');
        if (storedDetails) {
            details = JSON.parse(storedDetails);
        }

        details.push(userdetails);

        localStorage.setItem('details', JSON.stringify(details));

        alert("User Account created successfully");
    }
}






