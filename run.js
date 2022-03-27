const open = document.getElementById('open');
const modal_con = document.getElementById('modal_con');
const close = document.getElementById('close');

open.addEventListener('click', ()=>{
    modal_con.classList.add('show');
   
    
});

close.addEventListener('click', ()=>{
    modal_con.classList.remove('show');
    
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }}