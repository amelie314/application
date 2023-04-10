let btn = document.querySelector("#btn4");
console.log(btn);
let body = document.querySelector("body");
console.log(body);

btn.addEventListener("click",function(){
    body.classList.toggle("light-mode");
})