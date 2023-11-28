// if (FROM.value.trim() === "") {
//     document.getElementById("leavingerror").innerHTML = "Enter the field";
//     document.getElementById("leavingerror").style.color = "red";
//     return false;
// } else {
//     document.getElementById("leavingerror").innerHTML = "";
// }
// if (TO.value.trim() === "") {
//     document.getElementById("goingerror").innerHTML = "Enter the field";
//     document.getElementById("goingerror").style.color = "red";
//     return false;
// } else {
//     document.getElementById("goingerror").innerHTML = "";
// }
// if (FROM.value == TO.value) {
//     alert("Same fields are not allowed");
//     return false;
// }

let busroute = [
    { from: "CHANDIGARH", to: "SUJANPUR H.P", Timings: "06:15AM", Type: "AC", Price: 435 },
    { from: "SUJANPUR H.P", to: "CHANDIGARH", Timings: "01:00PM", Type: "AC", Price: 435 },
    { from: "CHANDIGARH", to: "SUJANPUR H.P", Timings: "08:30AM", Type: "ORD", Price: 385 },
    { from: "SUJANPUR H.P", to: "CHANDIGARH", Timings: "03:00PM", Type: "ORD", Price: 385 },
    { from: "CHANDIGARH", to: "MANALI", Timings: "09:30AM", Type: "ORD", Price: 470 },
    { from: "MANALI", to: "CHANDIGARH", Timings: "09:00AM", Type: "ORD", Price: 470 },
    { from: "CHANDIGARH", to: "MANALI", Timings: "08:00PM", Type: "AC", Price: 540 },
    { from: "MANALI", to: "CHANDIGARH", Timings: "10:30AM", Type: "AC", Price: 470 },
    { from: "CHANDIGARH", to: "MANALI", Timings: "08:00PM", Type: "ORD", Price: 470},
    { from: "MANALI", to: "CHANDIGARH", Timings: "04:00P,", Type: "ORD", Price: 470 },
    { from: "CHANDIGARH", to: "HAMIRPUR", Timings: "06:40AM", Type: "AC", Price: 420 },
    { from: "CHANDIGARH", to: "DEHLI", Timings: "05:00PM", Type: "AC", Price: 400 },
    { from: "CHANDIGARH", to: "DEHLI", Timings: "09:00PM", Type: "AC", Price: 400 },
    { from: "CHANDIGARH", to: "DEHLI", Timings: "11:30PM", Type: "ORD", Price: 375 },
    { from: "CHANDIGARH", to: "UNA", Timings: "04:00AM", Type: "AC", Price: 220 },
    { from: "CHANDIGARH", to: "UNA", Timings: "10:00AM", Type: "ORD", Price: 170 },
    { from: "CHANDIGARH", to: "UNA", Timings: "01:00PM", Type: "ORD", Price: 170 },
    { from: "CHANDIGARH", to: "BAIZNATH", Timings: "07:22AM", Type: "AC", Price: 430 },
    { from: "CHANDIGARH", to: "BAIZNATH", Timings: "11:30AM", Type: "AC", Price: 430 },
    { from: "CHANDIGARH", to: "BAIZNATH", Timings: "02:00PM", Type: "ORD", Price: 395 },
    { from: "CHANDIGARH", to: "BAIZNATH", Timings: "08:30PM", Type: "AC", Price: 430 },
];


let button = document.getElementById('btn7');
button.addEventListener("click", function () {
    let start = document.getElementById('From').value;
    let destination = document.getElementById('To').value;

    if (start === "" && destination === "") {
        alert("Enter the first destination and last destination ");
    }
    else if (start === destination) {
        alert("Same fields are not allowed please select different fields");
    }
    let tableHTML = `
    <table class="table table-striped">
        <thead>
            <tr>
                <th>FROM</th>
                <th>TO</th>
                <th>TIMINGS</th>
                <th>TYPE</th>
                <th>PRICE</th>
                <th>BOOK</th>
                <th>CANCEL</th>
            </tr>
        </thead>
        <tbody>
`;
    for (let i = 0; i < busroute.length; i++) {
        if (busroute[i].from === start && busroute[i].to === destination) {
            document.getElementById('storebusesdetails').innerHTML = //busroute[i].from + ' ' +'to' + busroute[i].to + busroute[i].Timings+"<br>";
                tableHTML += `
            <tr>
                <td>${busroute[i].from}</td>
                <td>${busroute[i].to}</td>
                <td>${busroute[i].Timings}</td>
                <td>${busroute[i].Type}</td>
                <td>${busroute[i].Price}</td>
                <td><a href="assets/busseats.html" button type="submit"class="btn btn-info">BOOK</a></button></td>
                <td><a href="#" button type="submit"class="btn btn-danger">CANCEL</a></button></td>    
            </tr>
        `;
        }
    }
});




// function submitform() {
//     var leavingFrom = document.getElementById("Leaving").value;
//     if (leavingFrom.trim() == "") {
//         document.getElementById("leavingerror").innerHTML = "Please select Leaving From";
//         document.getElementById('leavingerror').style.color="red";
//         return false;
//     } else {
//         document.getElementById("leavingerror").innerHTML = "";
//     }

//     var goingTo = document.getElementById("Going").value;
//     if (goingTo.trim() == "") {
//         document.getElementById("goingerror").innerHTML = "Please select Going to";
//         document.getElementById('goingerror').style.color="red";
//         return false;
//     }
//     return true;
// }
