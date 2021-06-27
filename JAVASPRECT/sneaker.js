import {collection, path} from "./productData.js";
import {createBox} from "./method.js";

var sneakerContainer = document.getElementById("sneakerContainer");
let category = collection.shoes;
let pCount = 0;

category.forEach(pDetail => {
    let productBox = createBox(2, pDetail, pCount);
    sneakerContainer.appendChild(productBox);
    pCount++;
});