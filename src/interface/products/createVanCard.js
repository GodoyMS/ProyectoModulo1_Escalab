import { vans_Section } from "../../utils/nodes.js";

export function createVancard(cardInfo) {
    console.log(cardInfo)
  //Creating a card for each product
  const card=document.createElement('div');
  card.setAttribute('class','single-product-card');
  const containImg=document.createElement('figure');
  containImg.setAttribute('class','containImg');
  const imgCard=document.createElement('img');
  imgCard.setAttribute('class','imgCard');
  imgCard.setAttribute('src',`public/imgProducts/vans/${cardInfo.url}`);
  imgCard.setAttribute('id',`myBtn${cardInfo.codigo}`);
  imgCard.style.cursor="pointer";
  containImg.appendChild(imgCard);  
  card.appendChild(containImg);
  const containerCardDetails=document.createElement('div');
  containerCardDetails.setAttribute('class','container-card-details'); 
  const nameProduct=document.createElement('h2');
  nameProduct.setAttribute('class','nameProduct');
  nameProduct.innerHTML=`${cardInfo.name}`;
  containerCardDetails.appendChild(nameProduct);
  const singleProductCardDetails=document.createElement('div');
  singleProductCardDetails.setAttribute('class','single-product-card-details');

  containerCardDetails.appendChild(singleProductCardDetails);

  const price=document.createElement('p');
  price.setAttribute('class','price');
  price.innerHTML=`S/.${cardInfo.price}`;
  singleProductCardDetails.appendChild(price);

  const buy=document.createElement('button');
  buy.setAttribute('class','buy');
  buy.setAttribute('class',`cartModalButton${cardInfo.codigo} buy`)
  buy.innerHTML=`<svg class="w-6 h-6" style="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>`;
  
  singleProductCardDetails.appendChild(buy);
  //Creating a card finishes
 


  //Creating a modal for each product
  const myModal=document.createElement('div');
  myModal.setAttribute('class','modalBig');
  myModal.setAttribute('id',`myModal${cardInfo.codigo}`);
  card.appendChild(myModal);  
  const modalContent=document.createElement('div');
  modalContent.setAttribute('class','modal-content');
  myModal.appendChild(modalContent);
  const closeButton=document.createElement('span')
  closeButton.setAttribute('class','close');
  closeButton.setAttribute('id',`close${cardInfo.codigo}`);
  closeButton.innerHTML="&times;";
  modalContent.appendChild(closeButton);
  const figureModal=document.createElement('figure');
  figureModal.setAttribute('class','containImgModal')
  figureModal.innerHTML=`<img class="imgModal" src='public/imgProducts/vans/${cardInfo.url}'/ >`;
  modalContent.appendChild(figureModal);
  const textModal=document.createElement('div');
  textModal.setAttribute('class','textModal');
  textModal.innerHTML=`<div class="nameModal"><h2>${cardInfo.name}</h2></div><div class="priceModal"><h2>Precio</h2><p>S/.${cardInfo.price}</p> </div><div class="descripcionModal"><h2>Descripcion</h2><p>${cardInfo.descripcion}</p> </div><div class="buttonsModal"><a  href="thankYou.html"><button style="cursor:pointer" id="buyModalButton" type="button">Comprar</button></a><button style="cursor:pointer"class="cartModalButton${cardInfo.codigo}">Carrito</button></div>`;
  modalContent.appendChild(textModal); 
  //creating modal finishes

  card.appendChild(containerCardDetails);
  vans_Section.appendChild(card);

    
  }