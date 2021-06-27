import {data} from "./mock_data.js";

var animating = false;

function loginCheck(email, pass)
{
    let alertBox = document.getElementById("alertBox");
    if(email == data.adminEmail && pass == data.adminPassword)
    {
        window.localStorage.setItem('email', JSON.stringify(email));
        window.localStorage.setItem('password', JSON.stringify(pass));
        window.location = "logindetail.html";
    }
    else {
        if(!animating)
        {
            alertBox.style.animation = "animateAlert 2.5s"; animating = true;
            setTimeout(function(){
                alertBox.style.animation = ""; animating = false;
            },2500);
        }
        
    }
}
document.body.onload = function(){
    let url = location.href;
    let params = (new URL(url)).searchParams;
    if(params.has("submit"))
    {
        if(params.get("submit") == "LogIn")
        {
            loginCheck(params.get("email"), params.get("password"));
        }
    }
}