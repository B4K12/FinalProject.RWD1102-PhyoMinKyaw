import {data} from "./mock_data.js";

document.body.onload = function(){
    document.getElementById("user").innerText = data.userName;
    document.getElementById("email").innerText = data.adminEmail;
    document.getElementById("phone").innerText = data.phone;
    document.getElementById("userName").innerText = data.userName;
    document.getElementById("address").innerText = data.address;
    document.getElementById("userImage").setAttribute("src",data.userImage);
}