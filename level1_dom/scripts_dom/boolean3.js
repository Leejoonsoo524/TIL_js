// 상.하.좌.우 버튼 클릭 시 캐릭터 10px 이동
// input 입력창에 영어로 이동방향 작성했을 때 캐릭터 10px 이동
// 이동방향) left, right, top, bottom

const moveBtn = document.querySelectorAll('#control .btn');
const character = document.querySelector('#map img');
console.log(moveBtn,character);
let moveY = 0;

//상
function clickMove(){
    console.log("line13");
    moveY += 10;
    console.log(moveY);
    character.style.transform = `translateY(-${moveY}px) rotate(90deg)`;
}
moveBtn[0].addEventListener('click',clickMove);

//하

//좌

//우

// input 입력창에 영어로 이동방향 작성 했을 때 캐릭터 10px 이동
// 이동방향 left, right, top, bottom
const moveInput = document.querySelector('#control #txt');
console.log(moveInput);
let moveX = 0;

function textMove(e){
    console.log("line32");    
    console.log(moveY);
    console.log(moveX);
    if(e.key == 'Enter')
    {
        if(moveInput.value == 'left')
        {
            console.log('left');
            moveX -= 10;
            character.style.transform = `translateX(${moveX}px)`;
        }
        else if(moveInput.value == 'right')
        {
            console.log('light');
            moveX += 10;
            character.style.transform = `translateX(${moveX}px) rotate(-180deg)`;
        }
        else if(moveInput.value == 'top')
        {
            console.log('top');
            moveY -= 10;
            character.style.transform = `translateY(${moveY}px) rotate(90deg)`;
        }
        else if(moveInput.value == 'bottom')
        {
            console.log('bottom');
            moveY += 10;
            character.style.transform = `translateY(${moveY}px) rotate(-90deg)`;
        }
        moveInput.value = '';
    }
}
moveInput.addEventListener('keyup',textMove)
/********************************************************/

// 학점에 따라 A~F 등급 나오는 프로그래밍
// 90~A
// 80~B
// 70~C
// 60~D
// 0 ~ F
function grade()
{
    const score = Number(prompt('학점을 입력하세요'));

    console.log(score,typeof(score));   
    
        if(score <= 100 && score >= 90){alert('A 등급');}
        else if(score <= 89 && score >= 80){alert('B 등급');}
        else if(score <= 79 && score >= 70){alert('C 등급');}
        else if(score <= 69 && score >= 60){alert('D 등급');}
        else if(score <= 59){alert('F 등급');}
        else{alert('점수를 확인하세요');}       
}
//grade();
/********************************************************/

function search(){
    const fruit = prompt('검색어를 입력하세요');
    console.log(fruit);
    switch (fruit) 
    {
        case '딸기': console.log('1000원'); break;
        case '사과': console.log('2000원'); break;
        default: console.log('검색결과가 존재하지 않습니다.'); break;
    }
}
//search();

function call(){
    const num = Number(prompt('단축키 입력'));
    console.log(num);
    switch (num) 
    {
        case 1: console.log('엄마'); break;
        case 2: console.log('아빠'); break;
        default: console.log('잘못입력하셨습니다'); break;
    }
}
//call();

// 쇼핑몰 수량 + 가격 알고리즘
// -버튼 클릭 시 수량감소+가격감소 (1일때 - 누르면 경고)

const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const numInput = document.querySelector('#num');
const priceP = document.querySelector('.price');

console.log(minusBtn,plusBtn,numInput,priceP);
let numVal = 1;
const sellPrice = 900;
function addFunc()
{
    numInput.value = numVal;
    priceP.textContent = `${sellPrice * numInput.value}원`;
}
addFunc();

minusBtn.addEventListener('click', ()=>{
    numVal == 1 ? console.log('최소 주문 수량') : numVal--;
    addFunc();
});

plusBtn.addEventListener('click', ()=>{
    console.log(numVal);
    numVal <= 10 ? numVal++ : console.log('최대 주문 수량입니다.');
    addFunc();
});

