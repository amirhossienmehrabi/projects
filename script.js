const hambergurIcon = document.querySelector("#hamberger-icon")
const hambergurMenu= document.querySelector("#hamburger-menu")
const crossIcon= document.querySelector("#cross-icon")
const showProduct = document.querySelector("#show-product-menu")
const showMenu = document.querySelector("#show-more-menu")
hambergurIcon.addEventListener("click",() =>{
    hambergurMenu.classList.add("show-hamburger-menu")
})
crossIcon.addEventListener("click",()=>{
    hambergurMenu.classList.remove("show-hamburger-menu")
})
showProduct.addEventListener("mouseenter",(e)=>{
    const temp = e.target.childNodes[5]
    temp.style.animation = "showUp 0.35s 1";
    temp.style.display = "block"

})
showProduct.addEventListener("mouseleave",(e)=>{
    const temp = e.target.childNodes[5]
    temp.style.display = "none"

})
showMenu.addEventListener("mouseenter",(e)=>{
    const temp = e.target.childNodes[5]
    temp.style.animation = "showUp 0.35s 1";
    temp.style.display = "block"})
showMenu.addEventListener("mouseleave",(e)=>{
        const temp = e.target.childNodes[5]
        temp.style.display = "none"
    
    })