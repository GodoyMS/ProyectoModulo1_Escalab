//CREATING  THE MODAL BEGINS//
  // Get the button that opens the modal
  export function createModal(modalInfo) {
    var modal = document.getElementById(`myModal${modalInfo.codigo}`);
  
  // Get the button that opens the modal
  var btn = document.getElementById(`myBtn${modalInfo.codigo}`);
  
  console.log(modal)
  // Get the <span> element that closes the modal
  var span = document.getElementById(`close${modalInfo.codigo}`);
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
    
  }
  
  
  
  //CREATING THE MODAL FINISHES//