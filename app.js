
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

    btnDelete.textContent="eliminar"

    lista.appendChild(imprimirdato);
    lista.appendChild(btnDelete)
    section.appendChild(lista);

    btnDelete.addEventListener("click", function(e) {
        e.preventDefault()
        console.log(e)
        const item = e.target.parentElement;
        console.log(item)
        console.log(lista)
        lista.parentNode.remove(item)
    
      });
    
}


btn.addEventListener("click", function(e) {
        e.preventDefault()
        agregar()
    
      });

    
      

/*--------------------------------------------------------------------------------------*/
const pantalla=document.getElementById("pantalla");
const btncal=document.querySelectorAll("button")



btncal.forEach(element => {
  
});


uno.addEventListener("click",()=>{
  const uno =document.getElementById("uno").value = 1;
});

function resultado(){
  
}
