// 거짓으로 평가되는 값
// false, null, nudefined, NaN, 0, ""
// 위 제외 모든 값 참으로 평가됨 [], {} 포함

// 논리연산자 &&, ||, !
/*console.log("A"&& null);
console.log("A"&& "B");
console.log("A"&& 0);

// 조건문
console.log("조건문======");
let x = [];
let y = 0;

if (x) {console.log('x는 참이다.1');}
else   {console.log('y는 참이다.');}
if (x == true) {console.log('x는 참이다.2');}
if (x != true) {console.log('x는 참이다.3');}
if (x && y) {console.log('x는 참이다.4');}
if (x || y) {console.log('x는 참이다.5');}
x = 7;
y = 2;
if (x>y && x==y) {console.log('x는 참이다.6');}
if (x>y || x==y) {console.log('x는 참이다.7');}
/*********************************************/
/*if(!x) {console.log('참일때 실행되는 문구1');}
if(y || !x) {console.log('참일때 실행되는 문구2');}
if(!y || x) {console.log('참일때 실행되는 문구3');}*/

/*********************************************/
//나이 입력 후 버튼 클릭 시 10살 이하면 '탑승불가' 메세지 출력

const ageNum = document.querySelector('.everland #age')
const ageBtn = document.querySelector('.everland #age_btn')
const ageResult = document.querySelector('.everland .result')

function ageCheck()
{
    const standardAge = 10;

    if (ageNum.value <= standardAge) {
        ageResult.textContent = '탑승불가'
    }
    else ageResult.textContent = '탑승가능'
    console.log(ageNum.value);
    
}

ageBtn.addEventListener('click',ageCheck);
/*********************************************/

const prtBtn = document.querySelector('.print #print_btn')

function printCheck()
{
    if(confirm('인쇄 하시겠습니까?')){print();}    
}
prtBtn.addEventListener('click',printCheck);
/*********************************************/

//const userId = prompt('아이디');

const inputID = document.querySelector('.login #user_id');
const inputPW = document.querySelector('.login #user_pw');
const loginBtn = document.querySelector('.login #login_btn');
const statusMs = document.querySelector('.login .error');

console.log(inputID,inputPW,loginBtn,statusMs);

function loginTest()
{
    if (inputID.value == userDB[0].id) {
        if (inputPW.value == userDB[0].pw) {
            //location.href = "../index.html";
            /* console.log('로그인 성공');
            isLogin = on; */
            // 로컬 환경에서 확인가능한 브라우저 데이터 저장법
            //localStorage.setItem('속성', '값');// 값을 저장하는 함수
            //localStorage.getItem('가져오는 속성');// 값을 불러오는 함수
            localStorage.setItem('isLogin2', on);// 값을 저장하는 함수         
        }
        else 
        {
            statusMs.textContent = '아이디 또는 비밀번호가 잘못 되었습니다.'
            localStorage.setItem('isLogin2', off);
        }
    }
    else
    {
        statusMs.textContent = '아이디 또는 전화번호를 입력해 주세요'
        localStorage.setItem('isLogin2', off);
    } 
}

loginBtn.addEventListener('click',loginTest);
