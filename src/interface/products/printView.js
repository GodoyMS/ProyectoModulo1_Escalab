// import { products } from "../utils/data.js";
// import { containProducts } from "../js/nodes.js";

import { autos } from "../../utils/data.js";
import { vans } from "../../utils/data.js";
import { createModal } from "./createModal.js";
import { createAutoCard } from "./createAutoCard.js";
import { createVancard } from "./createVanCard.js";
//AUTO CARD TEMPLATE


export const autoTemplateCard=()=>{


  const carNamesArray1=JSON.parse(localStorage.getItem('cardName'));
  const carNamesArray=carNamesArray1 ? carNamesArray1 :[];
  const carPriceArray1=JSON.parse(localStorage.getItem('cardPrice'));
  const carPriceArray=carPriceArray1? carPriceArray1 :[];
  const carImgArray1=JSON.parse(localStorage.getItem('cardImg'));
  const carImgArray=carImgArray1? carImgArray1 :[];

  //CREATING CARDS FOR AUTOS BEGINS
  autos.map(element => {
    createAutoCard(element);

  //CREATING MODAL FOR EACH CARD
  createModal(element);
  
  
  
  //LINKING THE MODAL//
  const buyModalButton=document.getElementsByClassName(`cartModalButton${element.codigo}`);
  buyModalButton[0].addEventListener('click',()=>{
    //STORAGE PRODUCT IN ARRAY, IF IT ALREADY EXISTS,  THROW A MESSAGE 
    if (!carNamesArray.includes(element.name)){
    carNamesArray.push(`${element.name}`);
    carPriceArray.push(`${element.price}`);
    carImgArray.push(`${element.url}`);
    console.log(carNamesArray);
    localStorage.setItem('cardName',JSON.stringify(carNamesArray));
    localStorage.setItem('cardPrice',JSON.stringify(carPriceArray));
    localStorage.setItem('cardImg',JSON.stringify(carImgArray));
    window.alert('Vehículo agregado');
    location.reload();

    }else{
      window.alert('Este vehículo ya esta en tu carrito de compras')
    }
    

  });

  buyModalButton[1].addEventListener('click',()=>{
    //STORAGE PRODUCT IN ARRAY, IF IT ALREADY EXISTS,  THROW A MESSAGE 
    if (!carNamesArray.includes(element.name)){
    carNamesArray.push(`${element.name}`);
    carPriceArray.push(`${element.price}`);
    carImgArray.push(`${element.url}`);
    console.log(carNamesArray);
    localStorage.setItem('cardName',JSON.stringify(carNamesArray));
    localStorage.setItem('cardPrice',JSON.stringify(carPriceArray));
    localStorage.setItem('cardImg',JSON.stringify(carImgArray));
    window.alert('Vehículo agregado');
    location.reload();

    }else{
      window.alert('Este vehículo ya esta en tu carrito de compras')
    }
    

  });
 // localStorage.setItem('cardName',`${carNamesArray}`);
 



 
}

)
}

export const vanTemplateCard=()=>{


  const carNamesArrayVan1=JSON.parse(localStorage.getItem('cardNameVan'));
  const carNamesArrayVan=carNamesArrayVan1 ? carNamesArrayVan1 :[];

  const carPriceArrayVan1=JSON.parse(localStorage.getItem('cardPriceVan'));
  const carPriceArrayVan=carPriceArrayVan1? carPriceArrayVan1 :[];

  const carImgArrayVan1=JSON.parse(localStorage.getItem('cardImgVan'));
  const carImgArrayVan=carImgArrayVan1? carImgArrayVan1 :[];

  //CREATING CARDS FOR AUTOS BEGINS
  vans.map(element => {
    createVancard(element);

  //CREATING MODAL FOR EACH CARD
  createModal(element);
  
  
  
  //LINKING THE MODAL//
  const buyModalButtonVan=document.getElementsByClassName(`cartModalButton${element.codigo}`);


  buyModalButtonVan[0].addEventListener('click',()=>{
    //STORAGE PRODUCT IN ARRAY, IF IT ALREADY EXISTS,  THROW A MESSAGE 
    if (!carNamesArrayVan.includes(element.name)){
    carNamesArrayVan.push(`${element.name}`);
    carPriceArrayVan.push(`${element.price}`);
    carImgArrayVan.push(`${element.url}`);
    console.log(carNamesArrayVan);
    localStorage.setItem('cardNameVan',JSON.stringify(carNamesArrayVan));
    localStorage.setItem('cardPriceVan',JSON.stringify(carPriceArrayVan));
    localStorage.setItem('cardImgVan',JSON.stringify(carImgArrayVan));
    window.alert('Vehículo agregado');
    location.reload();

    }else{
      window.alert('Este vehículo ya esta en tu carrito de compras')
    }
    

  });
  buyModalButtonVan[1].addEventListener('click',()=>{
    //STORAGE PRODUCT IN ARRAY, IF IT ALREADY EXISTS,  THROW A MESSAGE 
    if (!carNamesArrayVan.includes(element.name)){
    carNamesArrayVan.push(`${element.name}`);
    carPriceArrayVan.push(`${element.price}`);
    carImgArrayVan.push(`${element.url}`);
    console.log(carNamesArrayVan);
    localStorage.setItem('cardNameVan',JSON.stringify(carNamesArrayVan));
    localStorage.setItem('cardPriceVan',JSON.stringify(carPriceArrayVan));
    localStorage.setItem('cardImgVan',JSON.stringify(carImgArrayVan));
    window.alert('Vehículo agregado');
    location.reload();

    }else{
      window.alert('Este vehículo ya esta en tu carrito de compras')
    }
    

  });
 // localStorage.setItem('cardName',`${carNamesArray}`);
 



 
}

)
}












