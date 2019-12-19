/*var Password = document.getElementById ("Pass");
var Ganerate = document.getElementById ("submit");
var Clipboard = document.getElementById("Copy");
var Characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM0123456789!@#$%^&*()_+<>?/;'";
var Password ="";

function randomPassword (){
    for (var i=0, i<=Characters; i++) {
        var x = Math.floor(Math.random()*Characters.length<8);
        Password = Characters[x].length;

        return Password;

    }
    
   

    // pick letters at random from Characters and store into a var


    // Then display that var into the password field 



    // var Password = Password + randomPassword;
    // randomPassword = randomPassword+Math.floor(Math.random("Password"+length)+1);

    // return randomPassword;
}*/

function randomPassword(length){
    var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM0123456789!@#$%^&*()_+<>?/";
    var pass = "";
    for (var x=0; x < length; x++) {
        var i= Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generatepassword() {
    mypassform.pass1.value = randomPassword(mypassform.length.value);
}