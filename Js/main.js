
    // getTotalprice///

function totalCharge(product,isInrese){

        //  CHECK IF BUTTON1 CLICKED //
 if(isInrese){
    //   SET INNERTEXT 0//
    const productPrice=document.getElementById(product+'-price').innerText=0;
 }

    // CHECK IF BUTTON2 CLICKED//
 else{
            //   SET INNERTEXT 180//
    const productPrice=document.getElementById(product+'-price').innerText=180;
 }   
    // CALL getTotalprice Function//
     getTotalprice();
};

            //  Function getTotalprice//
function getTotalprice(){
    const bestPrice=document.getElementById('best-price').innerText;
    const ramPrice=document.getElementById('ram-price').innerText;
    const storagePrice=document.getElementById('storage-price').innerText;
 const deliverycharge=document.getElementById('delivery-price').innerText;
    const tottalPrice=document.getElementById('total');
 let priceWithPRomo=document.getElementById('totalWith-promo');

        // CALCULATE TOTAL PRICEWITHOUT PROMO //
    const totalPrice=parseInt(bestPrice)+parseInt(ramPrice)+parseInt(storagePrice)+parseInt(deliverycharge);

    //  SET TOTALPRICE INNERTEXT //
    tottalPrice.innerText=totalPrice;

    // SET TOTAL PRICE WITHPROMO //
    priceWithPRomo.innerText=totalPrice;
    
    // RETURNS TOTAL PRICE FOR USE //
    return totalPrice;
}
   
//    GET PROMOCODE //

 function getPromoCode(){
    const PromoField=document.getElementById('promo');

        //   GETS VALUE FROM INPUT FIELD //
        const promoText=PromoField.value;
        // EMPTY PROMO FIELD //
        PromoField.value='';
        // RETURNS PROMOCODE FR USE //
   return promoText;

 };


    //   8GB RAM BUTTON //
document.getElementById('ram-btn-1').addEventListener('click',function(){
    //  Call Function/
    totalCharge('ram' ,true);
});
    //    16 GB RAM BUTTON //
document.getElementById('ram-btn-2').addEventListener('click',function(){
//  CALL function//
    totalCharge('ram' ,false);
});

//   256 GB STOTAGE BUTTON //

document.getElementById('storage-btn-1').addEventListener('click',function(){
//   CALL function //
    totalCharge('storage' ,true);
});

//   512 GB STORAGE BUTTON //

document.getElementById('storage-btn-2').addEventListener('click',function(){
//   SETS PRICE FOR 512 GB //
 const storageprice= document.getElementById('storage-price').innerText=100;
//  Call function//
 getTotalprice();
});

//   1TB STORAGE BUTTON //

document.getElementById('storage-btn-3').addEventListener('click',function(){
//  call function//
    totalCharge('storage' ,false);
});
        //   FREE DELIVERY BUTTON //

document.getElementById('delivery-btn-1').addEventListener('click',function(){
//    SETS VALUE FOR FREE DELIVERY //
    const storageprice= document.getElementById('delivery-price').innerText=0;
    // CALL TOTAL PRICE FUNCTION 
    getTotalprice();
   });
    
//    20$ DELIVERY BUTTON //

document.getElementById('delivery-btn-2').addEventListener('click',function(){
//   SETS VALUE FOR FAST DELIVERY //
    const storageprice= document.getElementById('delivery-price').innerText=20;

    // CALL TOTAL PRICE FUNCTION //
    getTotalprice();
   });

//    PROMO CODE BUTTON CLICKED //
 document.getElementById('promo-btn').addEventListener('click',function(){
     // PROMO CODE BUTTON CLICKED //

    //  Count PROMOCODE //
    const promoCode=getPromoCode();

    //  CHECK IF CODE IS "stevekaku"//
     if(promoCode=="stevekaku"){
         const currentprice=document.getElementById('totalWith-promo')
      const totalWithoutpromoCode=getTotalprice();
    //    CALCULATE 20% DISCOUNT //
        const discount=parseInt(totalWithoutpromoCode)*20/100;
        // SET FINAL VALUE ON THE HTML //
         currentprice.innerText= totalWithoutpromoCode-discount;
         
     }
})

                       //   END OF JAVASCRIPT ///



