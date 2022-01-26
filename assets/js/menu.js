const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');



hamburguer.addEventListener('click', ()=> {
    menu.classList.toggle("spread")
    hamburguer.style.opacity = '0'
})

window.addEventListener('click', (e)=>{
    if(menu.classList.contains('spread') && e.target !== menu && e.target !== hamburguer){
        menu.classList.toggle("spread")
        hamburguer.style.opacity = '1'

    }
})