const myCheckBox = document.getElementById("myCheckBox");
const bdoBtn = document.getElementById("bdoBtn");
const bpiBtn = document.getElementById("bpiBtn");
const gcashBtn = document.getElementById("gcashBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


/*
const myCheckBox = document.getElementById("myCheckBox");
const bdoBtn = document.getElementbyId("bdoBtn");
const bpiBtn = document.getElementbyId("bpiBtn");
const gcashBtn = document.getElementbyId("gcashBtn");
const mySubmit = document.getElementbyId("mySubmit");
const subResult = document.getElementbyId("subResult");
const paymentResult = document.getElementbyId("paymentResult");

its the fccking by -> BY
*/

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
    else{
        paymentResult.textContent = "You are not using BDO" ;
    }

    if(bpiBtn.checked){
        paymentResult.textContent = "You are using BPI" ;
    }
    else{
        payment.textContent = "You are not using BPI" ;
    }

    if(gcashBtnBtn.checked){
        paymentResult.textContent = "You are using GCASH" ;
    }
    else{
        payment.textContent = "You are not using GCASH" ;
    }

}



