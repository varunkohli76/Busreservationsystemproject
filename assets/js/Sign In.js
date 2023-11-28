
function validation() {
    let username = document.getElementById('username').value;
    let Password = document.getElementById('password').value;




    // var usercheck = /^[a-zA-Z0-9_]{3,15}$/;
    // var passwordcheck = /^[a-zA-Z0-9_]{8,15}$/;

    if (username == "") {
        document.getElementById('usererror').innerHTML = "*Please enter a Username ";
        document.getElementById('usererror').style.color = "red";
        return false;
    }
    else if (!usercheck.test(username)) {
        document.getElementById('usererror').innerHTML = "*Username is invalid ";
        document.getElementById('usererror').style.color = "red";
        return false;
    }
    else {
        document.getElementById('usererror').innerHTML = "*Success";
        document.getElementById('usererror').style.color = "lightgreen";
    }

    if (Password == "") {
        document.getElementById('Passworderror').innerHTML = "*Please enter a Password";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    } else if (passwordcheck.test(Password)) {
        document.getElementById('Passworderror').innerHTML = "*Password is invalid";
        document.getElementById('Passworderror').style.color = "red";
        return false;
    }
    else {
        document.getElementById('Passworderror').innerHTML = "";


    }

    return true;

    
    var userfromlocalstorage = JSON.parse(localStorage.getItem(username));
    if (!userfromlocalstorage) {
        console.log('user doesnt exist');

    }
    if (userfromlocalstorage.Password !== Password) {
        console.log("wrong password");
    }
    else {
        console.log("logged successfully");
    }
}
   







