
function validation() {
        let storedname=localStorage.getItem('uname');
        let storedpassword=localStorage.getItem('pwd');
        let username=document.getElementById('username');
        let userpassword=document.getElementById('password');


         if(username.value == "" &&  userpassword.value == "") {
            document.getElementById('usererror').innerHTML = "*Please enter a Username"; 
            document.getElementById('Passworderror').innerHTML = "Please enter a password";
            document.getElementById('Passworderror').style.color = "red";
            document.getElementById('usererror').style.color = "red";
            document.getElementById('Success-message').innerHTML="";
        }
        
        else if(username.value == storedname && userpassword.value == storedpassword){
            document.getElementById('Success-message').innerHTML='Login Successfully';
            window.location ="Home.html";
            document.getElementById('Success-message').style.color='green';
    }
   else{
        document.getElementById('usererror').innerHTML = "";
        document.getElementById('Passworderror').innerHTML = "";
    document.getElementById('Success-message').innerHTML="Invalid Credentials";
    document.getElementById('Success-message').style.color='red';
   }
    
    return false;

}








