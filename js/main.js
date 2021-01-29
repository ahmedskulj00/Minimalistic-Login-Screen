var userLogin = document.getElementById("user-box")
var passLogin = document.getElementById("pass-box")
var button = document.getElementsByClassName("btn")[0]
var loginBox = document.getElementById("login-box")
var welcomeText = document.getElementById("welcome-text")

function checkLogin(){
    var userValue = userLogin.value 
    var passValue = passLogin.value
    if (userValue== "User" || userValue=="user" && passValue == "Pass" || passValue=="pass"){
        hide()
        var success = document.createElement("div")
        success.classList.add("success-text")
        success.innerHTML = "You have successfully logged-in!"
        loginBox.appendChild(success)
    }
   else{
       userLogin.style.borderColor = "red"
       passLogin.style.borderColor = "red"
   }
}

button.addEventListener("click", checkLogin)

function hide(){
   userLogin.style.display = "none"
   passLogin.style.display = "none"
   button.style.display = "none"
   welcomeText.style.display = "none"
}



