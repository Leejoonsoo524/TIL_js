// basic.js
// var 변수명 //변수생성
// var 변수명 = 대입값; //변수생성과 대입
// 변수명 = 대입값; //변수대입(이미 생성된 변수)

// 변수연습

// 객체.속성;
// 객체.함수();
var a;
console.log(a);  // 콘솔 이라는 객체에 a라는 log를 남기겠다
var b = 10;
a = 20;
console.log(a);
var c1;
c1 = 30;
c1 = 40;
// 데이터 타입 구분합수 typeof()
// 콘솔에 로그를 출력하는 객체와 함수 console.log()
/********************************************************************************/
console.log(typeof(a));
// a의 데이터 타입은 number다 출력
console.log('a의 데이터 타입은',typeof(a),'다.');
/********************************************************************************/
// a+b 더한 결과는 30이고 타입은 number이다 출력
console.log('a와b를 더한 결과는', (a+b), '이고 데이터 타입은', typeof(a+b),'다.');
/********************************************************************************/
// a+b 더한 결과는 25이고 타입은 number이다 출력
/* a = 15; */
console.log('a와b를 더한 결과는', (a+b), '이고 데이터 타입은', typeof(a+b),'다.');
/********************************************************************************/
// a+b 더한 결과는 201이고 타입은 string이다 출력
b = '1';
console.log('a와b를 더한 결과는', (a+b), '이고 데이터 타입은 ', typeof(a+b),'다.');
/********************************************************************************/
// 사용자 정보 변수
// 김가을/10/130/인천
var userName = "김가을";
var userAge = 10;
var userHeight = 130;
var userArea = "인천";
const plus = 1;
console.log(userName,userAge,userHeight,userArea);
/********************************************************************************/
// 김가을은 내년에 11살 입니다.
console.log(userName,'은 내년에',(userAge+=plus),'살 입니다.');
/********************************************************************************/
// 김가을은 내년에 12살 입니다. 그냥 해봄//
console.log(userName,'은 내년에',(userAge+plus),'살 입니다.');
/********************************************************************************/
// 현재는 인천에 살지만 
// 다음 달 서울로 이사갑니다.
console.log('현재는', userArea, '에 살지만');
userArea = "서울";
console.log(`다음 달 ${userArea}로 이사갑니다.`);
/********************************************************************************/
// 장바구니 변수
let cart = '';      // 장바구니 초기상태
cart = "사과";       // 사과 추가
console.log(cart);
cart += "바나나";    //사과 유지 바나나추가
console.log(cart);
cart = null;        // 장바구니 비움
console.log(cart);
/********************************************************************************/
// ES6 변수
var webStudy = "html";
var webStudy = webStudy + "css";                //var은 중복을 잡지못함
/* var webStudy += "css"; 오류임*/
console.log(webStudy)

let webStudy2 = "sass";
/* let webStudy2 = webStudy2 + "javascript"; */ //let은 중복을 구분함
webStudy2 = webStudy2 + "javascript";
/* webStudy2 += "javascript"; */
console.log(webStudy2)

/* const webStudy3;                             //undefined
webStudy3 = "figma";                            //undefined -> figma */
const webStudy3 = "figma";                      //생성&대입 동시처리
console.log(webStudy3)
/********************************************************************************/
// 자바스크립트 기초함수
// 1. log();        기록 실행 함수
// 2. typeof();     데이터타입 실행 함수
// 3. print();      인쇄 실행 함수(실제 인쇄 기능 실행 함수)
// 4. prompt();     질문 답변 실행 함수
// 5. confirm();    확인,취소창 실행 함수

/* const que1 = Number(prompt("1+1은?"));
console.log(que1);
console.log(typeof(que1)); */  //string
//confirm(que1);
/********************************************************************************/
/* const kurly_order_num = prompt('주문수량은?'); */
/* let orderNum = Number(kurly_order_num); */

/* const kurly_order_num = Number(prompt('주문수량은?'));
const kurly_price = 10000;
const kurly_total = kurly_price * kurly_order_num;

console.log(`주문수량은 ${kurly_order_num}, 총 주문가는 ${kurly_total}원 입니다.`);  */
/********************************************************************************/
//구구단
const dan = Number(prompt('구구단 몇단이 궁금해요?'));
/* console.log(`${dan}x1=${dan*1}`);
console.log(`${dan}x2=${dan*2}`);
console.log(`${dan}x3=${dan*3}`);
console.log(`${dan}x4=${dan*4}`);
console.log(`${dan}x5=${dan*5}`);
console.log(`${dan}x6=${dan*6}`);
console.log(`${dan}x7=${dan*7}`);
console.log(`${dan}x8=${dan*8}`);
console.log(`${dan}x9=${dan*9}`); */

for (let index = 1; index <= 9; index++) {
    const element = index;    
    console.log(`${dan} x ${element} = ${dan*element}`);
}