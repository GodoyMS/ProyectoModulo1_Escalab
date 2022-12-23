
import {  cartSingleProduct,buyEverything } from "../../utils/nodes.js";

//AUTO CARD TEMPLATE


const createSingleProductCart=()=>{
  const cartProductsName=JSON.parse(localStorage.getItem('cardName'));
  const cartProductsPrice=JSON.parse(localStorage.getItem('cardPrice'));
  const cartProductsImg=JSON.parse(localStorage.getItem('cardImg'));


  for (let index = 0; index < cartProductsName.length; index++) {
    const name = cartProductsName[index];
    const price = cartProductsPrice[index];
    const img = cartProductsImg[index];

    const listItem=document.createElement('div');
    listItem.setAttribute('class','list__item');
    listItem.innerHTML=`<figure>
    <img
      class="img__item"
      src='public/imgProducts/autos/${img}'
      alt=""
    />
  </figure>
  <div>
    <h3 class="title__item">${name}</h3>
    <p class="parrafo__item">S/.${price}</p>
    <svg id="eraseItem${name}" style="width:20px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>

  </div>`;
  cartSingleProduct.appendChild(listItem);


  const eraseItem=document.getElementById(`eraseItem${name}`);
  eraseItem.addEventListener('click',()=>{
    cartProductsImg.splice(cartProductsImg.indexOf(img), 1);
    
    localStorage.setItem("cardImg", JSON.stringify(cartProductsImg));       

    cartProductsName.splice(cartProductsName.indexOf(name), 1);
    localStorage.setItem("cardName", JSON.stringify(cartProductsName));       

    cartProductsPrice.splice(cartProductsPrice.indexOf(price), 1);
    localStorage.setItem("cardPrice", JSON.stringify(cartProductsPrice));       
    console.log(cartProductsImg);

    console.log(index);
    console.log(cartProductsName);
    window.alert('Item borrado');
    
    location.reload();
    



  })



    
  };




}


const createSingleProductCartVan=()=>{
  const cartProductsNameVan=JSON.parse(localStorage.getItem('cardNameVan'));
  const cartProductsPriceVan=JSON.parse(localStorage.getItem('cardPriceVan'));
  const cartProductsImgVan=JSON.parse(localStorage.getItem('cardImgVan'));


  for (let i = 0; i  < cartProductsNameVan.length; i ++) {
    const nameVan = cartProductsNameVan[i ];
    const priceVan = cartProductsPriceVan[i ];
    const imgVan = cartProductsImgVan[i ];

    const listItemVan=document.createElement('div');
    listItemVan.setAttribute('class','list__item');
    listItemVan.innerHTML=`<figure>
    <img
      class="img__item"
      src='public/imgProducts/vans/${imgVan}'
      alt=""
    />
  </figure>
  <div>
    <h3 class="title__item">${nameVan}</h3>
    <p class="parrafo__item">S/.${priceVan}</p>
    <svg id="eraseItem${nameVan}" style="width:20px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>

  </div>`;
  cartSingleProduct.appendChild(listItemVan);


  const eraseItemVan=document.getElementById(`eraseItem${nameVan}`);
  eraseItemVan.addEventListener('click',()=>{
    cartProductsImgVan.splice(cartProductsImgVan.indexOf(imgVan ), 1);
    
    localStorage.setItem("cardImgVan", JSON.stringify(cartProductsImgVan));       

    cartProductsNameVan.splice(cartProductsNameVan.indexOf(nameVan ), 1);
    localStorage.setItem("cardNameVan", JSON.stringify(cartProductsNameVan));       

    cartProductsPriceVan.splice(cartProductsPriceVan.indexOf(priceVan ), 1);
    localStorage.setItem("cardPriceVan", JSON.stringify(cartProductsPriceVan));       
    window.alert('Item borrado');
    location.reload();
    



  })



    
  };




}

//ERASE ALL PRODUCTS WHEN CLICK BUY PRODUCTS
const buyEverythingFunction=()=>{
  buyEverything.addEventListener('click',()=>{
    localStorage.removeItem('cardImg');
    localStorage.removeItem('cardPrice');
    localStorage.removeItem('cardName');
    localStorage.removeItem('cardImgVan');
    localStorage.removeItem('cardPriceVan');
    localStorage.removeItem('cardNameVan');
  })

}

const onloadCartCars=()=>{  
  createSingleProductCart(); 
  buyEverythingFunction();
}
const onloadCartVans=()=>{  
  createSingleProductCartVan();
  buyEverythingFunction();
}
window.addEventListener("load",()=>onloadCartCars());
window.addEventListener("load",()=>onloadCartVans());


