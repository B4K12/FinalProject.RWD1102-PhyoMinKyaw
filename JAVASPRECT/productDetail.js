import {collection, path} from "./productData.js";

document.body.onload = function(){
    let url = location.href;
    let params = (new URL(url)).searchParams;
    
    if(params.has("catIndex"))
    {
        let categoryNames = Object.getOwnPropertyNames(collection);
        let catIndex = params.get("catIndex");
        let pIndex = params.get("pIndex");
        

        let pImgPath = document.getElementById("pImgPath");
        let pName = document.getElementById("pName");
        let pDetail = document.getElementById("pDetail");
        let pPrice = document.getElementById("pPrice");

        let pArray = collection[categoryNames[catIndex]][pIndex];
        let img = "../"+path[catIndex]+"/"+pArray[0];
        pImgPath.setAttribute("src",img);
        pName.innerHTML = pArray[1]+"<br>";
        pPrice.innerHTML = pArray[2];
        pDetail.innerText = pArray[3];
    }
    
}