
const btn=document.querySelector('.btn');
const section=document.getElementById('listaDatos');

function agregar(){
    const datos=document.getElementById('datos').value;

    lista=document.createElement('div')
    imprimirdato=document.createElement('div')
    
    btnDelete=document.createElement('button')
    imprimirdato.innerHTML=`${datos}`

    lista.classList.add("contenedorsection")
    btnDelete.classList.add("btnDelete")
    imprimirdato.classList.add("imprimirdato")

    btnDelete.innerHTML="Eliminar"

    lista.appendChild(imprimirdato);
    lista.appendChild(btnDelete)
    section.appendChild(lista);

    btnDelete.addEventListener("click", function(e) {
        e.preventDefault()
        deleteitem()
    
      });
    
}
function deleteitem(e){
const item = e.target.parentElement;
console.log(item)

lista.removechild(item)

}

    btn.addEventListener("click", function(e) {
        e.preventDefault()
        agregar()
    
      });

    
      

/*--------------------------------------------------------------------------------------*/

function resolver(){
  
}