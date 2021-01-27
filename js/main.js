const userLogin = document.getElementById("user-box")
const passLogin = document.getElementById("pass-box")
var button = document.getElementsByClassName("btn")[0]

function checkLogin(){
    var userValue = userLogin.value 
    var passValue = passLogin.value
    if (userValue== "User" || userValue=="user" && passValue == "Pass" || passValue=="pass"){
        alert("Yaay")
    }
   
}

button.addEventListener("click", checkLogin)
