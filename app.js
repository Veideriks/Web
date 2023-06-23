function login() {
    var name = document.getElementById ("name").value;
    alert ("Привет " + name);
}
function chat(){
    var name = document.getElementById ("name").value;
    var message = document.getElementById ("message").value;
    console.log(name + ":" + message);
    document.getElementById("result").innerHTML = name + ":" + message;
}