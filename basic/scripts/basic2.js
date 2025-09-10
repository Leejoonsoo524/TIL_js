// 1일차 복습
// 커피 1500원
// 도시락 6000원
// 대중교통 3000원
// 결과) 오늘 총 지출액은 0000원 입니다.
/* let coffee = 1500;
let pack = 6000;
let bus = 1500;
let total = coffee + pack + bus;
console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')} 원 입니다.`);
console.log(`오늘 총 지출액은 ${(coffee + pack + bus).toLocaleString('ko-kr')} 원 입니다.`); */
// 숫자에 3자리 간격 콤마(,) 표시하기
// 10000 숫자
// 10,000 문자(최종 결과 처리)
// 위 기능 함수 : 객체.함수(); 변환객체.toLocaleString();
/********************************************************************************************/

// 문자 데이터 연습
// 리뷰 작성 기준 50자 이상
// 콘솔 출력) 현재 작성 리뷰 글자 수는 000자 입니다.
// 글자 수 체크 속성 length
/* let review = prompt("리뷰를 작성하세요");
let totalReview = review.length;

console.log(`현재 작성 글자 수는 ${totalReview}자 입니다.`) */

/********************************************************************************************/
// 오브젝트형 데이터 - 객체
// 변수생성키워드 변수명 = {키:값, 키:값, 키:값, ...}
/*
let rectagle = {
    width:300,
    height:200,
    x:0,
    y:-100,
}
console.log(rectagle.width, rectagle.height, rectagle.x, rectagle.y);
console.log(`${rectagle.width}px, ${rectagle.height}px`);

let user_info = {
    //회원정보
    name:'가을',
    age:3,
    gender:'female',
    area:'서울',
}

let product = {
    //상품저장
    name:'마스크',
    price:1000,
    quantity:999,
    color:'white',
}

let movie = {
    //영화자리
    name:'VIP',
    color:'f1',
    price:45000,   
}

console.log(`상품명 : ${product.name}(${product.color})`);
console.log(`상품가 : ${product.price.toLocaleString('ko-kr')}원`);
console.log(`수량 : ${product.quantity}개`);
*/
/********************************************************************************************/
// 오브젝트형 데이터 타입 배열
// 변수생성키워드 변수명 = [배열값,값2,값3]
// 변수생성키워드 변수명 = new Array(값,값,값)
// 변수생성키워드 변수명 = new Array(자리값)
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil);
// 오늘은 수요일
console.log(`오늘은 ${yoil[2]}요일`);

const en = new Array('a','b','c','d','e','f');
console.log(en);

const year = new Array(4);
year[0] = 2025;
year[1] = 2024;
year[2] = 2023;
year[3] = 2022;
console.log(year);

//좋아하는 색상 6개를 배열로 저장하고 그 중 가장 좋아하는 색을 2개 출력
const color = new Array('빨','주','노','초','파','남');
console.log(color[0],color[4]);
//좋아하는 과일 5개를 배열로 저장하고 역순으로 모두 출력
const food = new Array('사과','딸기','포도','수박','배');
console.log(food[4],food[3],food[2],food[1],food[0]);
//요일 날씨 정보 출력
const weather = ['맑음','흐림','비'];
console.log(`${yoil[0]} - ${weather[0]}`);
console.log(`${yoil[1]} - ${weather[2]}`);
console.log(`${yoil[2]} - ${weather[1]}`);
console.log(`${yoil[3]} - ${weather[0]}`);
console.log(`${yoil[4]} - ${weather[0]}`);
console.log(`${yoil[5]} - ${weather[2]}`);
console.log(`${yoil[6]} - ${weather[1]}`);

const megabox = new Array(8);
megabox[0] = 'A1';
megabox[1] = 'A2';

megabox[0] = null;
megabox[1] = null;

/********************************************************************************************/
// cgv 좌석 예매와 취소
/*
const cgv = [];     //빈 배열 준비
const price = 11000;
console.log(cgv.length)
// 좌석 A1 선택
cgv.push('A1');
console.log(cgv);
cgv.push('A2');
console.log(cgv);
cgv.pop();
console.log(cgv);
cgv.unshift('A3');
console.log(cgv);
cgv.push('A4');
console.log(cgv);
cgv.shift();
console.log(cgv);

let cgv_length = cgv.length;
let cgv_total = (cgv.length * price).toLocaleString('ko-kr');
console.log(cgv_length);
console.log(cgv_total);
*/
/********************************************************************************************/
// 연산자 연습
// 더하기(+) 를 제외한 곱하기 나누기 빼기 는 Number 함수 없이 사용가능
/* const firstNum = Number(prompt('첫번째 수'));
const lastNum = Number(prompt('두번째 수')); */
/*
const firstNum = prompt('첫번째 수');
const lastNum = prompt('두번째 수');
console.log(firstNum, lastNum);
console.log(firstNum * lastNum);
*/
/********************************************************************************************/
// 증감 연산자
/*
let x = 5;
let y = 0;
console.log(x,y);
y = x++;
console.log(x,y);
x = ++y;
console.log(x,y);
x++;
console.log(x,y);

let a = 10;
let b = 20;
let c = 30;
let d = 40;
// a=10 b=20 c=30 d=40
a++;
b--;
c++;
d--;
// a=11 b=19 c=31 d=39
console.log(a,b,c,d);

a = ++b;
b = a++;
// a=11->21 b=20 c=31 d=39
console.log(a,b,c,d);

c = a+b;
d = ++c;
// a=21 b=20 c=42 d=42
console.log(a,b,c,d);

a = ++c + 10;
b = --d + 1;
// a=53 b=42 c=42 d=42
console.log(a,b,c,d);
*/
/********************************************************************************************/
// 복합대입연산자
let number = 10;
number += 5;
console.log(number);
number *= 5;
console.log(number);
number /= 2;
console.log(number);
number %= 2;
console.log(number);






