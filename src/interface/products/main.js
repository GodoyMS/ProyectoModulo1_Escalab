
import { vanTemplateCard,autoTemplateCard } from "./printView.js";
import { createSingleProductCartAuto,createSingleProductCartVan,buyEverythingFunction } from "../carrito/carrito.js";
import { getNumberOfItems } from "../carrito/numberOfProducts.js";
//CARDS PRODUCTS
const onload=()=>{  
  autoTemplateCard();
  vanTemplateCard();
}
window.addEventListener("load",()=>onload());



//CART 
const onloadCartCars=()=>{  
  createSingleProductCartAuto(); 
  buyEverythingFunction();
}
const onloadCartVans=()=>{  
  createSingleProductCartVan();
  buyEverythingFunction();
}
window.addEventListener("load",()=>onloadCartCars());
window.addEventListener("load",()=>onloadCartVans());


const onloadCartNumber=()=>{
  getNumberOfItems();
}
window.addEventListener("load",()=>onloadCartNumber())