import { viewAutoCard,viewVanCard } from "./printView.js";


window.addEventListener("load", viewAutoCard);
window.addEventListener("load", viewVanCard);

 async function show_products() {
            // Get the modal
          var modal_products = await document.getElementById("myModal");

          // Get the button that opens the modal
          var btn =  await document.getElementById("myBtn");

          // Get the <span> element that closes the modal
          var span =  document.getElementsByClassName("close")[0];

          // When the user clicks on the button, open the modal
          btn.onclick =  function() {
            modal_products.style.display = "block";
          }

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal_products.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modal) {
              modal_products.style.display = "none";
            }
          }
  
}
