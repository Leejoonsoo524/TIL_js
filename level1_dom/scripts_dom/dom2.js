const sectionTag = document.querySelectorAll('section');
console.log(sectionTag);
const linkCls = document.querySelectorAll('section .link');
console.log(linkCls);
const btnCls = document.querySelectorAll('section .btn');
console.log(btnCls);

// 이벤트와 함수, 속성
// 초기값
sectionTag[0].style.backgroundColor = '#ff0';
sectionTag[1].style.backgroundColor = '#0cf';
// 이벤트
// a2 클릭 시 section[1] 배경색 변경
// a태그에 클릭, 터치 이벤트 적용 시 href 속성 때문에 스크롤이 위로 올라가는 문제 발생
// a의 기본속성기능 해제 (preventDefalut)

/*function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#00f';
}
linkCls[1].addEventListener('click', bgFunc); */

linkCls[1].addEventListener('click', function (e) {
    console.log(e);
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#00f';
}); 

btnCls[0].addEventListener('click', ()=>{
    window.location.href = './dom1.html';
});

function test(address)
{
    return function (){window.location.href = address;}
}

btnCls[1].addEventListener('click', test('../index.html'));

/************************************************************************/
// 쇼핑몰 수량 변수
const inputNum = document.querySelector('#num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const priceCls = document.querySelector('#numfrm .price em');
console.log(inputNum,plusBtn,minusBtn,priceCls);

//수량이 1로 시작해서 + 클릭하면 수량 증가, - 클릭하면 수량 감소
//1개당 가격은 12900원
// 초기값
let count = 1;
inputNum.value = count;
const priceOne = 12900; 
let priceTotal = priceOne;

// 이벤트, 함수
function numAdd()
{
    count++;
    inputNum.value = Number(count);
    priceTotal = inputNum.value * priceOne;    
    return priceCls.textContent = priceTotal.toLocaleString('ko-kr');
}

function numMinus()
{
    count--;    
    inputNum.value = Number(count);    
    priceTotal = inputNum.value * priceOne;
    return priceCls.textContent = priceTotal.toLocaleString('ko-kr');
}

plusBtn.addEventListener('click',numAdd);
minusBtn.addEventListener('click',numMinus);

priceCls.textContent = priceOne.toLocaleString('ko-kr');
