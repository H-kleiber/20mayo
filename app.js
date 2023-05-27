
const btn=document.querySelector('.btn');
const section=document.getElementById('listaDatos');

function agregar(){
    const datos=document.getElementById('datos').value;

    lista=document.createElement('div')
    imprimirdato=document.createElement('div')
    imprimirdato.innerHTML=`${datos}`
    
    btnDelete=document.createElement('button')

    lista.classList.add("contenedorsection")
    btnDelete.classList.add("btnDelete")
    imprimirdato.classList.add("imprimirdato")

    btnDelete.textContent="eliminar"

    lista.appendChild(imprimirdato);
    lista.appendChild(btnDelete);
    section.appendChild(lista);
    
    // imprimirdato.appendChild(btnDelete)
    // section.appendChild(imprimirdato);

    console.log(section.childNodes)

    btnDelete.addEventListener("click", function(e) {
        e.preventDefault()
        let el = e.target;
        console.log(el)
        let elListItem= el.parentNode;
        console.log(elListItem)
        elFullList = elListItem.parentNode;
        console.log(elFullList)
        elFullList.removeChild(elListItem);
      
        // const me=e.target;
        // me.parentNode;
        // console.log(me)
        // for(i=0;i<=section.children.length;i++){
        //     console.log(section.children[i])
            
        // }
        // console.log(imprimirdato)
        // console.log(imprimirdato.childNodes)
        // imprimirdato.remove([3]);
      
    
      });
    
}


btn.addEventListener("click", function(e) {
        e.preventDefault()
        agregar()
    
      });

    
      

/*--------------------------------------------------------------------------------------*/
let button = document.querySelectorAll("button");

let pantalla = document.getElementById("pantalla");

button.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        console.log(btn.id)
        if(btn.id === '='){
            pantalla.value = eval(pantalla.value);

        }else if(btn.id === 'ac'){
            pantalla.value = '';

        }else{
            pantalla.value = pantalla.value + btn.id;
        }
    })
} )


