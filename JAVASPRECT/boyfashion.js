import {collection, path} from "./productData.js";
import {createBox} from "./method.js";

var boyFashionContainer = document.getElementById("boyFashionContainer");
let category = collection.boyFashions;
let pCount = 0;

category.forEach(pDetail => {
    let productBox = createBox(0, pDetail, pCount);
    boyFashionContainer.appendChild(productBox);
    pCount++;
});