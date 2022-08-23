var usrname = document.getElementById("name")
var pass = document.getElementById("password")
var statustxt = document.getElementById("statustxt")
var solutionname = "dGhhdHNteW5hbWU=";
var solutionpass = "dGhhdHNteXBhc3N3b3Jk";

function login() {
    if (usrname.value === atob(solutionname)) {
        if (pass.value === atob(solutionpass)) {
        statustxt.innerText = "status : succes"
        alert("cracked");
        }
    }else {
        statustxt.innerText = "status : error"
    }
    console.log(usrname.value);
    console.log(pass.value);
}