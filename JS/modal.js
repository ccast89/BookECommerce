const cartIcon = document.getElementById('cart-icon');
const modal = document.getElementById('cart-modal');
const closeButton = document.getElementsByClassName('close')[0];

cartIcon.addEventListener('click', function() {
    modal.style.display = "block";
});

closeButton.addEventListener('click',  function() {
    modal.style.display = "none";
})

window.addEventListener('click', (event)=>{
    if(event.target === modal){
        modal.style.display = "none";
    }
})