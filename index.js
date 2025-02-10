const myCheckBox = document.getElementById("myCheckBox");
const bdoBtn = document.getElementById("bdoBtn");
const bpiBtn = document.getElementById("bpiBtn");
const gcashBtn = document.getElementById("gcashBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed" ;
    }
    else{
        subResult.textContent = "You are not subscribed" ;
    }

    if(bdoBtn.checked){
        paymentResult.textContent = "You are using BDO" ;
    }
    else if(bpiBtn.checked){
        paymentResult.textContent = "You are using BPI" ;
    }
    else if(gcashBtn.checked){
        paymentResult.textContent = "You are using GCASH";
    }
    else{
        paymentResult.textContent = "You are not using any payment method"
    }
}



