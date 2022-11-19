//menu
const menu=document.querySelector("#menu")
const menuButton=document.querySelector("#menu-btn")
menuButton.addEventListener('click',()=>{
    menu.classList.toggle("invisible")
    menuButton.classList.toggle("text-white")
})

