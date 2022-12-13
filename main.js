let menuEle = document.querySelector(".header-menu")
let listMenu = document.querySelector(".header-menu-list")

menuEle.addEventListener("click", () =>{
    listMenu.classList.toggle("header-menu-list-block")
})