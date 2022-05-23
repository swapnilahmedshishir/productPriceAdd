//  pluse event handlder 


//  iphone event handler
 const plusBtn = document.getElementById("plus_btn");
 plusBtn.addEventListener('click', function(){
    // peoduct incress value handlar
    const  inputVlaue = document.getElementById("input_value").value;
     let inputVlaueNumber = parseInt(inputVlaue);
     let product = inputVlaueNumber + 1 ;
     document.getElementById("input_value").value = product;
     
    //  price increases handles
   const iPhonePrice =  document.getElementById("iphone_price").innerText;
   let iPhonePriceNUmber = parseInt(iPhonePrice);
   let itemPrice = iPhonePriceNUmber + 1219;
   document.getElementById("iphone_price").innerHTML = itemPrice;
   updateProductPrice(itemPrice);
 })

//  back pot event handler
const backPotPlusBtn = document.getElementById("backPot_plus");
backPotPlusBtn.addEventListener('click',function(){
    //    backpot input value 
    const backPotValue = document.getElementById("backPot_value").value;
    let backPotValueNumber = parseInt(backPotValue);
     let backPot = backPotValueNumber + 1 ;
     document.getElementById("backPot_value").value =backPot;

    //  backpot price 
    const backPotPrice = document.getElementById("backPot_price").innerText;
    let backPotPriceNumber = parseInt(backPotPrice);
     let backPotprice = backPotPriceNumber + 59 ;
     document.getElementById("backPot_price").innerHTML = backPotprice ;
     updateProductPrice(backPotprice );

 })


// minues event handler 

// minus i phone price 
let minusBtn = document.getElementById("minus_btn");
minusBtn.addEventListener("click", function(){
    // peoduct decress value handlar
    const  inputVlaue = document.getElementById("input_value").value;
     let inputVlaueNumber = parseInt(inputVlaue);
     let product = inputVlaueNumber - 1 ;
     document.getElementById("input_value").value = product;

     //  price decreases handles
   const iPhonePrice =  document.getElementById("iphone_price").innerText;
   let iPhonePriceNUmber = parseInt(iPhonePrice);
   let itemPrice = iPhonePriceNUmber - 1219;
   document.getElementById("iphone_price").innerHTML = itemPrice;

})

// minus back Pot price 

const minusBackPotBtn = document.getElementById("backPot_minus_btn");
minusBackPotBtn.addEventListener("click",function(){
     //    backpot input value 
     const backPotValue = document.getElementById("backPot_value").value;
     let backPotValueNumber = parseInt(backPotValue);
      let backPot = backPotValueNumber - 1 ;
      document.getElementById("backPot_value").value =backPot;
 
     //  backpot price 
     const backPotPrice = document.getElementById("backPot_price").innerText;
     let backPotPriceNumber = parseInt(backPotPrice);
      let backPotprice = backPotPriceNumber - 59 ;
      document.getElementById("backPot_price").innerHTML = backPotprice ;
 
 
})

// subtoal value 

