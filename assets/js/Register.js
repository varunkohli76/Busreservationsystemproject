function validate() {
    let username = document.getElementById('uname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;

    var usercheck = /^[a-z][A-Z][0-9][_]{3,15}$/;
    var emailcheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (username == "") {
        document.getElementById('usererror').innerHTML = " Enter the Username";
        document.getElementById('usererror').style.color = "red";
        return false;
    }
    else {
        document.getElementById('usererror').innerHTML = "Success";
        document.getElementById('usererror').style.color = "lightgreen";
    }


    if (email == "") {
        document.getElementById('emailerror').innerHTML = " Enter the Email";
        document.getElementById('emailerror').style.color = "red";
        return false;
    }
    else{
        document.getElementById('emailerror').innerHTML = "Success";
        document.getElementById('emailerror').style.color = "lightgreen";
    }


    if (password== "") {
        document.getElementById('Passworderror').innerHTML = " Enter the password";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    }
    else{
        document.getElementById('Passworderror').innerHTML = "";
        document.getElementById('Passworderror').style.color = "";
    }
}

   

