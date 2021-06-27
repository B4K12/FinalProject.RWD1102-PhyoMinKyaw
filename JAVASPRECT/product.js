import {collection, path} from "./productData.js";
import {createBox} from "./method.js";

var allProductContainer = document.getElementById("allProductContainer");

let categoryNames = Object.getOwnPropertyNames(collection);
let catCount = 0;
categoryNames.forEach(catName => {
    let category = collection[catName];
    let pCount = 0;
    category.forEach(pDetail => {
        let productBox = createBox(catCount, pDetail, pCount);
        allProductContainer.appendChild(productBox);
        pCount++;
    });
    catCount++;
});