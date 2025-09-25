console.log(Math);
console.log(Math.PI);
//Math.floor, round, random
console.log('=====Math.floor=====');
let num1 = Math.floor(3.7);
console.log(num1);
num1 = Math.floor(3.2); //소수점 버리고 정수 출력
console.log(num1);
console.log('=====Math.round=====');
num1 = Math.round(3.7); 
console.log(num1);
num1 = Math.round(3.2); 
console.log(num1);
console.log('=====Math.random=====');
num1 = Math.random(); //0~1 사이 소수점 숫자가 나타단다. 1이상은 안나온다.
console.log(num1);
num1 = Math.random() * 5; // 0~5 사이 소수점 숫자가 나타난다. 5이상은 안나온다
console.log(num1);
num1 = Math.floor(Math.random() * 10); // 0~10 사이 숫자(정수)가 나타난다.
console.log(num1);
num1 = Math.floor(Math.random() * 10) + 1; // 1~10 사이 숫자(정수)가 나타난다.
console.log(num1);
console.log('====================');
// 할인쿠폰 랜덤뽑기
const coupon = ['10%','20%','30%','40%','50%'];
const btn = document.querySelector('#coupon')

btn.addEventListener('click', ()=>{
    let value = '';
    value = Math.floor(Math.random() * 5); 
    console.log(value);
    alert(`당첨된 쿠폰은 ${coupon[value]} 할인 쿠폰 입니다.`)
});
/*********************************************************/
// 화면 접속 했을 때 광고 2개가 랜덤 표시
const adDB = [
    {name: '제주도 여행', link: 'https://naver.com', src:'https://blog.kakaocdn.net/dna/o1KIw/btqu9mflPY6/AAAAAAAAAAAAAAAAAAAAAKYnDeqdteeX2TOBibYcTJXClarWgPFAsYtZE_2oSitY/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1759244399&allow_ip=&allow_referer=&signature=azHQysxGvVzaB0PlnpJn%2F%2FplMFE%3D'},
    {name: '일본 여행',  link: 'https://google.com', src:'https://www.agoda.com/wp-content/uploads/2024/03/Featured-image-Hirano-jinja-Shrine-in-Kyoto-Japan-during-full-bloom-cherry-blossom-season-1244x700.jpg'},
]

const ad = document.querySelector('.ad a');
console.log(ad);
window.addEventListener('load',()=>{
    let point = Math.floor(Math.random() * 2);     
    ad.querySelector('img').src = adDB[point].src;
    ad.querySelector('img').alt = adDB[point].name;
    ad.href = adDB[point].link;
});
/*********************************************************/
// 더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원 수에 따라 계산결과 출력하기
// 금액이 소수점일 경우 소수점 값에 따라 반올림하기.

const payPrice = document.querySelector('#price');
const personPrice = document.querySelector('#person');
const btnPrice = document.querySelector('#total_btn');
const resPrice = document.querySelector('.result');

btnPrice.addEventListener('click', ()=>{
    let numprice = Number(payPrice.value);
    let perprice = Number(personPrice.value);
    resPrice.querySelector('em').textContent = Math.round(numprice / perprice).toLocaleString('ko-KR');;
})
/*********************************************************/
// 최저가 찾기
// ... << 해당 연산자를 사용해서 shopDB를 사용하면 쓸수있다
const shopDB = [
    {shop: '쿠팡'   , id: '하루견과', price:1000,},
    {shop: '네이버' , id: '하루견과', price:2000,},
    {shop: '마켓컬리', id: '하루견과', price:3000,},    
]
const btnMin = document.querySelector('#min');
const priceMin = document.querySelector('.min_price');
const ulMax = document.querySelector('#shop_max');
const pp = [1000,2000,3000,4000];//test


btnMin.addEventListener('click', ()=>{
    //1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
    const priceMap = shopDB.map( i => i.price );
    const minPrice = Math.min(...priceMap)
    //2. 추출한 가격에서 최저가 찾기
    console.log(Math.min(...pp));
    console.log(priceMap);
    console.log(Math.min(...priceMap));

    priceMin.textContent = `최저가는 ${minPrice} 원 입니다.`;

    const sort = [...shopDB].sort((a, b) => b.price - a.price);
    console.log(sort);

    for(let i of sort){
        const li = document.createElement('li'); // <li></li>
        li.innerHTML  = `<span> ${i.shop} </span>`;
        li.innerHTML += `<span> ${i.id} </span>`;
        li.innerHTML += `<span> ${i.price} </span>`;
        ulMax.appendChild(li);// li태그 추가할 위치
    }

})
/*********************************************************/
// 최저가 찾기
// 무료 배송 찾기

const priBtn = document.querySelector('#price_btn');
const dliBtn = document.querySelector('#delivery_btn');
const price1 = document.querySelector('.result1');
const price2 = document.querySelector('.result2');
const list   = document.querySelector('#shop_list');

const shopDB2 = [
    {shop: '쿠팡'  , id: '고구마', price:2000,  delivery: 2500},
    {shop: '네이버', id: '고구마', price:2900,  delivery: 0},
    {shop: '이마트', id: '고구마', price:4000, delivery: 1000},    
]

priBtn.addEventListener('click', ()=>{
    //최저가 JS
    const priMap = shopDB2.map( p => p.price );
    const minPrice = Math.min(...priMap);
    price1.textContent = `최저가 : ${minPrice} 원`;    
    
    //최저가 -> 최고가 오름차순 정렬하기 sort함수 사용 변수는 무조건 2개만 사용 
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price);
    console.log(sort);

    for(let i of sort){
        const li = document.createElement('li'); // <li></li>
        li.textContent = i.shop;
        list.appendChild(li);// li태그 추가할 위치
    }
})

dliBtn.addEventListener('click', ()=>{
    const dliMap = shopDB2.map( d => d.delivery );    
    const minDelivery = Math.min(...dliMap);    
    price2.textContent = `배송비 : ${minDelivery} 원`;
})