
    // getTotalprice///

function totalCharge(product,isInrese){

 if(isInrese){
    const bestPrice=document.getElementById(product+'-price').innerText=0;
 }
 else{
    const bestPrice=document.getElementById(product+'-price').innerText=180;
 }
     getTotalprice();
};

function getTotalprice(){
    const bestPrice=document.getElementById('best-price').innerText;
    const ramPrice=document.getElementById('ram-price').innerText;
    const storagePrice=document.getElementById('storage-price').innerText;
 const deliverycharge=document.getElementById('delivery-price').innerText;
    const tottalPrice=document.getElementById('total');
 let priceWithPRomo=document.getElementById('totalWith-promo');
    const totalPrice=parseInt(bestPrice)+parseInt(ramPrice)+parseInt(storagePrice)+parseInt(deliverycharge);
    tottalPrice.innerText=totalPrice;
    priceWithPRomo.innerText=totalPrice;

    return totalPrice;
}

document.getElementById('promo-btn').addEventListener('click',function(){


})
//   GET PROMOCODE //

// function getPromoCode(){
    
//    const promoCode=document.getElementById("promo").value;
//    console.log(promoCode);
//    return promoCode;
// };


    //   8GB RAM BUTTON //
document.getElementById('ram-btn-1').addEventListener('click',function(){
 
    totalCharge('ram' ,true);
});
    //    16 GB RAM BUTTON //
document.getElementById('ram-btn-2').addEventListener('click',function(){
 
    totalCharge('ram' ,false);
});

//   256 GB STOTAGE BUTTON //

document.getElementById('storage-btn-1').addEventListener('click',function(){
 
    totalCharge('storage' ,true);
});

//   512 GB STORAGE BUTTON //

document.getElementById('storage-btn-2').addEventListener('click',function(){
 
 const storageprice= document.getElementById('storage-price').innerText=100;
 getTotalprice();
});

//   1TB STORAGE BUTTON //

document.getElementById('storage-btn-3').addEventListener('click',function(){
 
    totalCharge('storage' ,false);
});
        //   FREE DELIVERY BUTTON //

document.getElementById('delivery-btn-1').addEventListener('click',function(){
 
    const storageprice= document.getElementById('delivery-price').innerText=0;
    getTotalprice();
   });
    
//    20$ DELIVERY BUTTON //

document.getElementById('delivery-btn-2').addEventListener('click',function(){
 
    const storageprice= document.getElementById('delivery-price').innerText=20;
    getTotalprice();
   });

//    PROMO CODE BUTTON //


