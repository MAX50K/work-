const listEl = document.querySelector(".list")
const linkList = document.querySelectorAll(".list__item__link")

console.log(listEl);
// console.log(linkEl);

document.body.style.backgroundColor = "black";
listEl.style.color = "red";
// 


linkList.forEach((link) => {link.style.color = "yellow"});



const btn = document.querySelector(".btn")

btn.addEventListener("click")

function onBtnClick () {
    console.log("click");
}