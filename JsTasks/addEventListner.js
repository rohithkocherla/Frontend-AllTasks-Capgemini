let numInput = document.getElementById("numInp");

numInput.addEventListener("input", (ele) => {
    let inputvalue = Number(ele.target.value);

    if (inputvalue>0 && inputvalue<=20) {
        document.body.style.backgroundColor = "red";
    } else if (inputvalue>20 && inputvalue<40) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
});