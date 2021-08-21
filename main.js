//calculateCost
function calculateCost(costId, costPrice) {
    let costvlu = document.getElementById(costId);
    costvlu.innerText = costPrice;
    totalCost();
}

// totalCost
function totalCost() {
    let priceCost       = parseInt(document.getElementById('price-cost').innerText);
    let memoryCost      = parseInt(document.getElementById('memory-cost').innerText);
    let storageCost     = parseInt(document.getElementById('storage-cost').innerText);
    let deliveryCost    = parseInt(document.getElementById('delivery-cost').innerText);

    let total           = priceCost + memoryCost + storageCost + deliveryCost;
    let totalCost       = document.getElementById('total-cost');
    let footerCost      = document.getElementById('footer-total');
    
    totalCost.innerText = total;
    footerCost.innerText = total;
}

//pomo code
function pomoCode(totalPrice) {
    let footerCost      = document.getElementById('footer-total');
    let disPrice        = totalPrice;
    let promoId       = document.getElementById('pomo');
    let promoCode       = promoId.value;
    if(promoCode == 'stevekaku'){
        let lessPrice   = totalPrice * 0.2;
        disPrice        = totalPrice - lessPrice;
    }
    footerCost.innerText    = disPrice;
    promoId.value         = "";
}

//Extra Memory Cost
document.getElementById('memory-8').addEventListener('click',function () {
    calculateCost('memory-cost', 0);
})

document.getElementById('memory-16').addEventListener('click',function () {
    calculateCost('memory-cost', 180);
})

//Extra Storage Cost
document.getElementById('storage-256').addEventListener('click',function () {
    calculateCost('storage-cost', 0);
})

document.getElementById('storage-512').addEventListener('click',function () {
    calculateCost('storage-cost', 100);
})

document.getElementById('storage-1').addEventListener('click',function () {
    calculateCost('storage-cost', 180);
})

//Delivery charge
document.getElementById('delivery-free').addEventListener('click',function () {
    calculateCost('delivery-cost', 0);
})

document.getElementById('delivery-20').addEventListener('click',function () {
    calculateCost('delivery-cost', 20);
})

//pomo code
document.getElementById('apply-btn').addEventListener('click',function () {
    let totalCost       = parseInt(document.getElementById('total-cost').innerText);
    pomoCode(totalCost);
})