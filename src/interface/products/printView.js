// import { products } from "../utils/data.js";
// import { containProducts } from "../js/nodes.js";

import { autos } from "../../utils/data.js";
import { containAutos } from "../../utils/nodes.js";

import { vans } from "../../utils/data.js";
import { containVans } from "../../utils/nodes.js";

import { createModal } from "./createModal.js";
import { createAutoCard } from "./createAutoCard.js";
import { createVancard } from "./createVanCard.js";
//AUTO CARD TEMPLATE


const autoTemplateCard=()=>{


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

const vanTemplateCard=()=>{


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


const onload=()=>{  
  autoTemplateCard();
  vanTemplateCard();

}
window.addEventListener("load",()=>onload());








const templateCardAuto = (auto) => {
  console.log(auto);
  return `
        <div class="single-product-card">
                <figure  class="containImg">
                    <img src="public/imgProducts/autos/${auto.url}" alt="" class="imgCard">
                </figure>
                <div class="container-card-details">
                <h2 class="nameProduct">${auto.name}</h2>
                <div class="single-product-card-details">
                    <p class="price">S/.${auto.price}</p>
                    <button  class=" buy"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></button>
                </div>
                </div>

                <button id="myBtn">Open Modal</button>

                <!-- The Modal -->
                <div id="myModal" class="modal_products">

                  <!-- Modal content -->
                  <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                  </div>

                </div>

              




        </div>
        
        
    `;
};







const viewAutoCard = () => {
  const viewAutos = autos.map((auto) => templateCardAuto(auto));
  containAutos.innerHTML = viewAutos.join(" ");
};

//VAN CARD TEMPLATE
const templateCardVan = (van) => {
  console.log(van);
  return `
        <div class="single-product-card">
                <figure class="containImg">
                    <img src="public/imgProducts/vans/${van.url}" alt="" class="imgCard">
                </figure>
                <div class="container-card-details">
                <h2 class="nameProduct">${van.name}</h2>
                <div class="single-product-card-details" >
                    <p class="price">S/.${van.price}</p>
                    <button class="buy"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></button>
                </div>
                </div>
        </div>
    `;
};

const viewVanCard = () => {
  const viewVans = vans.map((van) => templateCardVan(van));
  containVans.innerHTML = viewVans.join(" ");
};

export { viewAutoCard };
export { viewVanCard };
