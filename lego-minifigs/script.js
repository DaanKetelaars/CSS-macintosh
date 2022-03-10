// change heads
const btnHeadOne = document.querySelector(".headOne");
const headOne = document.querySelector(".minifig-one .standard > div:nth-child(1)");
btnHeadOne.addEventListener("click", () => {
    headOne.classList.toggle("display");
})

const btnHeadTwo = document.querySelector(".headTwo");
const headTwo = document.querySelector(".minifig-two .sanne > div:nth-child(1)");
btnHeadTwo.addEventListener("click", () => {
    headTwo.classList.toggle("display");
})

const btnHeadThree = document.querySelector(".headThree");
const headThree = document.querySelector(".minifig-three .vasilis > div:nth-child(1)");
btnHeadThree.addEventListener("click", () => {
    headThree.classList.toggle("display");
})




// change bodies
const btnBodyOne = document.querySelector(".bodyOne");
const bodyOne = document.querySelector(".minifig-one .standard > div:nth-child(2)");
btnBodyOne.addEventListener("click", () => {
    bodyOne.classList.toggle("display");
})

const btnBodyTwo = document.querySelector(".bodyTwo");
const bodyTwo = document.querySelector(".minifig-two .sanne > div:nth-child(2)");
btnBodyTwo.addEventListener("click", () => {
    bodyTwo.classList.toggle("display");
})

const btnBodyThree = document.querySelector(".bodyThree");
const bodyThree = document.querySelector(".minifig-three .vasilis > div:nth-child(2)");
btnBodyThree.addEventListener("click", () => {
    bodyThree.classList.toggle("display");
})



// change legs
const btnLegsOne = document.querySelector(".legsOne");
const legsOne = document.querySelector(".minifig-one .standard > div:nth-child(3)");
btnLegsOne.addEventListener("click", () => {
    legsOne.classList.toggle("display");
})

const btnLegsTwo = document.querySelector(".legsTwo");
const legsTwo = document.querySelector(".minifig-two .sanne > div:nth-child(3)");
btnLegsTwo.addEventListener("click", () => {
    legsTwo.classList.toggle("display");
})

const btnLegsThree = document.querySelector(".legsThree");
const legsThree = document.querySelector(".minifig-three .vasilis > div:nth-child(3)");
btnLegsThree.addEventListener("click", () => {
    legsThree.classList.toggle("display");
})