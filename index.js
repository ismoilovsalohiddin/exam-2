const elBtn1 = document.querySelector(".header__right-button1")
const elBtn2 = document.querySelector(".header__right-button2")
const elModal = document.querySelector(".modal")

elBtn1.addEventListener("click", function(){
    elModal.classList.toggle("js--open")
    elBtn2.classList.toggle("js--close-btn")
    elBtn1.classList.toggle("js--open-btn")
})
elBtn2.addEventListener("click", function(){
    elModal.classList.toggle("js--open")
    elBtn2.classList.toggle("js--close-btn")
    elBtn1.classList.toggle("js--open-btn")
})


