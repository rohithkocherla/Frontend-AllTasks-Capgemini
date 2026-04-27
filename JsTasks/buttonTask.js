let value = 0;

let counting=document.getElementById("count");

document.getElementById("btn1").addEventListener("click",()=>{
    value++;
    counting.innerHTML=value;
})
document.getElementById("btn2").addEventListener("click",()=>{
    value--;
    counting.innerHTML=value;
})