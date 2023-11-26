function submitform() {
    var leavingFrom = document.getElementById("Leaving").value;
    if (leavingFrom.trim() == "") {
        document.getElementById("leavingerror").innerHTML = "Please select Leaving From";
        document.getElementById('leavingerror').style.color="red";
        return false;
    } else {
        document.getElementById("leavingerror").innerHTML = "";
    }

    var goingTo = document.getElementById("Going").value;
    if (goingTo.trim() == "") {
        document.getElementById("goingerror").innerHTML = "Please select Going to";
        document.getElementById('goingerror').style.color="red";
        return false;
    }
    return true;
}


document.getElementById("searchBtn").addEventListener("click", submitform);