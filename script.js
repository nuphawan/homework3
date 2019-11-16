

var Password = document.getElementById("Password");
var submit = document.querySelector("#button");
var copy = document.querySelector("#button2");
var character ="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM0123456789!@#$%^&*()_+<>?/;'";
var Pass = "";

function generate() {
    for (var i=0; i <= character.length; i++) {
        var i = Math.floor(Math.random()*character.length);
        Passs = character[i];
  
        return Pass;
   }

}


function generate2() {
    let Password2 = Math.floor(Math.random()*character.length);
    console.log(Password2);
}
 
submit.addEventListener("click",generate2);
clipboard.addEventListener("click",generate);
