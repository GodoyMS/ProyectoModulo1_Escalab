import { cartItemsNumber } from "../../utils/nodes.js";

const carNamesArrayVan1=JSON.parse(localStorage.getItem('cardNameVan'));
const carNamesArrayVan=carNamesArrayVan1 ? carNamesArrayVan1 :[]; //IF ARRAY DOESN'T EXIST IN LOCALSTORAGE, CREATE EMPTY ARRAY

const carNamesArrayAuto1=JSON.parse(localStorage.getItem('cardName'));
const carNamesArrayAuto=carNamesArrayAuto1 ? carNamesArrayAuto1 :[]; //IF ARRAY DOESN'T EXIST IN LOCALSTORAGE, CREATE EMPTY ARRAY



const numberOfProducts=carNamesArrayAuto.length +carNamesArrayVan.length

export const getNumberOfItems=()=>{
    cartItemsNumber.innerHTML=`${numberOfProducts}`;     
}
