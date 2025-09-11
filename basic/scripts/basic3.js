// 함수
// 함수대기
function func1()
{
    console.log('반복 실행 내용');
}
func1();

// 함수의 매개변수 활용
function storyFunc(data)
{
    //헨젤, 그레텔 준비
    const person = ['헨젤','그레텔'];
    //조약돌 준비
    const src = '조약돌';
    //집 돌아간다 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아 갔습니다.
    alert(`${person[0]}과${person[1]}이${src}을 이용해서 집을 찾아갔습니다.`);
}
function storyFunc2(day,data)
{
    //헨젤, 그레텔 준비
    const person = ['헨젤','그레텔'];
    //조약돌 준비
    const src = data;
    //집 돌아간다 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아 갔습니다.
    console.log(`${day}일차 ${person[0]}과 ${person[1]} 이 ${data}을(를) 이용해서 집을 찾아갔습니다.`);
}
storyFunc2(1,'조약돌');
storyFunc2(2,'빵부스러기');
storyFunc2(3,'쌀');

function recipe(coffee,water,shot)
{
    console.log(`${coffee} 레시피 ${water}컵 물을 채운다 ${shot}샷 에스프레소를 넣는다`);
}
recipe('아메리카노',2,1);
recipe('에스프레소',0,1);
console.log('======================================');
function kiosk(coffee,order,hot)
{
    let temp = ['따뜻한','차가운']
    console.log(`${temp[hot]} ${coffee} ${order}잔 주문완료되었습니다.`);
}
kiosk('카페라떼',2,0);
kiosk('아메리카노',1,1);
kiosk('녹차라떼',2,0);
kiosk('아메리카노',1,1);
console.log('======================================');
function kiosk2(product,order,hot)
{
    let info = {        
        temp: ['따뜻한','차가운'],
        coffee: ['아메리카노','카페라떼','녹차라떼']       
    }    
    console.log(`${info.temp[hot]} ${info.coffee[product]} ${order}잔 주문완료되었습니다.`);
}
kiosk2(1,2,0);
kiosk2(0,1,1);
kiosk2(2,2,0);
kiosk2(0,1,1);
console.log('===================================리턴');
function plusFunc1(n1,n2)
{ 
    let calc = `${n1} * ${n2} = ${n1*n2}, `;
    calc += `${n1} + ${n2} = ${n1+n2}`;   
    return calc
}

/* function plusFunc2(n1,n2)
{    
    alert(`${n1} + ${n2} = ${n1+n2}`);
} */

console.log(plusFunc1(1,2));
//alert(plusFunc1(2,4)); 
console.log('==================================구구단');
function danFunc(dan)
{
    let view = '';    
    for (let index = 1; index <= 9; index++) {
        view += `${dan} * ${index} = ${dan * index}\n`
    }
    return view
}
console.log(danFunc(4));
console.log('==================================할인율');
function cardFunc(index)
{
    //할인율 계산기 
    //국민 5% 할인가 ?원
    //현대 10% 할인가 ?원
    //삼성 20% 할인가 ?원
    let card = {
        name:['국민','현대','삼성'],
        calc:[0.95,0.9,0.8],
        total:0
    }
    const price = 1051000;

    card.total = price * card.calc[index];
    return`${card.name[index]}카드 ${card.calc[index]}% 할인적용가 ${card.total.toLocaleString('ko-kr')}원`
}

console.log(cardFunc(0))
console.log(cardFunc(1))
console.log(cardFunc(2))
/********************************************************/
// 익명함수 + 화살표함수(ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user)=>{
    return console.log('hello'+user);
}
hello3('lee');