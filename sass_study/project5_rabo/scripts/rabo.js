const upBtn = document.querySelector('#plus');
const dwBtn = document.querySelector('#minus');
const inputQty = document.querySelector('#qty');
const priceCls = document.querySelector('.price strong');
const countCls = document.querySelector('.total-price .price span');

let count = 1;
let priceTotal = '';
const priceOne = 44900;

inputQty.value = count;

upBtn.addEventListener('click', ()=>{
    count++;
    inputQty.value = count;
    priceTotal = inputQty.value * priceOne;   

    countCls.textContent = `(${inputQty.value}개)`;
    priceCls.textContent = `${priceTotal.toLocaleString('ko-kr')}원`;
});

dwBtn.addEventListener('click', ()=>{
    if(count > 1){
        count--;
        inputQty.value = count;
        priceTotal = inputQty.value * priceOne;   

        countCls.textContent = `(${inputQty.value}개)`;
        priceCls.textContent = `${priceTotal.toLocaleString('ko-kr')}원`;
    }
});


// 이벤트, 함수
function qtyAdd()
{
    
}

function qtyMinus()
{
    count--;    
    inputNum.value = Number(count);    
    priceTotal = inputNum.value * priceOne;
    return priceCls.textContent = priceTotal.toLocaleString('ko-kr');
}

