import {collection, path} from "./productData.js";
import {createBox} from "./method.js";

var girlFashionContainer = document.getElementById("girlFashionContainer");
let category = collection.girlFashions;
let pCount = 0;

category.forEach(pDetail => {
    let productBox = createBox(1, pDetail, pCount);
    girlFashionContainer.appendChild(productBox);
    pCount++;
});