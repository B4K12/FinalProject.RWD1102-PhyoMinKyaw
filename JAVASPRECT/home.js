import {collection, path} from "./productData.js";
import {setRandom} from "./method.js";

let categoryNames = Object.getOwnPropertyNames(collection);
let numberOfCategory = categoryNames.length;
var rbImgs = document.querySelectorAll("#randBoxContainer .card__img > img");
var rbNames = document.querySelectorAll("#randBoxContainer .card__name p");
var rbPrices = document.querySelectorAll("#randBoxContainer .card__precis span");
var rbIcon = document.querySelectorAll("#randBoxContainer .card__icon");
var countCategory = 0;

for(let i=0; i<8; i++)
{    
    setRandom(
        countCategory,
        collection[categoryNames[countCategory]],
        path[countCategory],
        rbImgs[i],
        rbNames[i],
        rbPrices[i],
        rbIcon[i],
        3000
    );

    if(countCategory == numberOfCategory-1){ countCategory = 0; }
    else{ countCategory++; }
}