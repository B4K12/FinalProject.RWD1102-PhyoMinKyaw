import {collection, path} from "./productData.js";

function calculateForSetRandom(categoryIndex, category, categoryPath, imgElement, nameElement, priceElement, iconElement)
{
    let ran = Math.random();
    let n = category.length - 1;
    let index = Math.round(ran*(n));
    let path = categoryPath+"/"+category[index][0];
    imgElement.setAttribute("src",path);
    nameElement.innerHTML = category[index][1];
    priceElement.innerHTML = category[index][2];

    let iconHref = "./productdetail/product_detail.html?catIndex="+categoryIndex+"&pIndex="+index;
    iconElement.setAttribute("href",iconHref);
}
function setRandom(categoryIndex, category, categoryPath, imgElement, nameElement, priceElement, iconElement, time)
{
    calculateForSetRandom(categoryIndex, category, categoryPath, imgElement, nameElement, priceElement, iconElement);

    setInterval(function(){
        calculateForSetRandom(categoryIndex, category, categoryPath, imgElement, nameElement, priceElement, iconElement);
    },time);
}

function createBox(categoryIndex, productArray, productIndex)
{
    let productName = productArray[1];
    let productPrice = productArray[2];
    let productImagePath = "../"+path[categoryIndex]+"/"+productArray[0];

    let article = document.createElement("article");
    article.className = "card";

    let d_img = document.createElement("div");
    d_img.className = "card__img";
    let img = document.createElement("img");
    img.setAttribute("src",productImagePath);

    let d_name = document.createElement("div");
    d_name.className = "card__name";
    let name = document.createElement("p");
    let noteName = document.createTextNode(productName);
    let d_precis = document.createElement("div");
    d_precis.className = "card__precis";
    let d = document.createElement("div");
    let a = document.createElement("a");
    
    let link = "../productdetail/product_detail.html?catIndex="+categoryIndex+"&pIndex="+productIndex;
    a.setAttribute("href",link);
    
    a.className = "card__icon";
    let price = document.createElement("span");
    price.className = "card__preci card__preci--now";
    let notePrice = document.createTextNode(productPrice);
    let icon = document.createElement("ion-icon");
    icon.setAttribute("name","cart-outline");

    article.appendChild(d_img);
    article.appendChild(d_name);
    article.appendChild(d_precis);
    d_img.appendChild(img);
    d_name.appendChild(name);
    name.appendChild(noteName);
    d_precis.appendChild(d);
    d_precis.appendChild(a);
    d.appendChild(price);
    price.appendChild(notePrice);
    a.appendChild(icon);

    return article;
}

export {setRandom, createBox};