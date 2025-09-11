function naverLink()
{
    return window.open('https://naver.com','_blank')
}
//naverLink(); 

const writeFunc = function()
{
    return window.location.href('https://google.com')
}
//writeFunc();

//DOM

// JS - HTML, CSS
// DOM.style.color; // 읽기
// DOM.style.color = 값; // 수정

const btn = document.getElementsByTagName('button') //모든 버튼을 잡는다
console.log(btn);

/* btn[0].style.color = 'red';
btn[0].style.backgroundColor = 'yellow';
btn[0].style.border = '1px solid red'; */
// 주석으로 막은 이유는 모든버튼중 첫번째 버튼을 디자인 한다는 의미인데 
// html에서 연습할땐 첫 버튼이지만 89줄 버튼이 html에서 첫 버튼이라 디자인 지우려고 막음

const div = document.getElementsByTagName('div')
console.log(div);

div[1].style.transform = 'rotate(-5deg)'


const slide = document.getElementsByClassName('slide')
console.log(slide);
slide[0].style.backgroundColor = '#ff0'
slide[1].style.backgroundColor = 'rgba(0,0,0,0.1)'


const slideWrap = document.getElementsByClassName('slide_wrap')
console.log(slideWrap);
slideWrap[0].style.border = '5px solid purple'
// 태그와 클래스 DOM은 반드시 인덱스 붙여서 사용하기


// 아이디 DOM
const container = document.getElementById('slide_container')
console.log(container);
container.style.backgroundColor = 'pink';
container.style.margin = '0 auto'
// 아이디는 단 하나의 요소로 인덱스를 붙이지 않고 작성한다.
slide_container.style.filter = 'invert(1)';

// ES6 querySelector
// HTML에서 가장 처음에 나오는 태그들을 반환한다.
/* const tag_es6 = document.querySelector('div')
const cls_es6 = document.querySelector('.slide')
const id_es6 = document.querySelector('#slide_container')
console.log(tag_es6, cls_es6, id_es6); */

// ES6 querySelectorAll
// HTML에서 모든 태그들을 반환한다.
const tag_es6 = document.querySelectorAll('div')
const cls_es6 = document.querySelectorAll('.slide')
const id_es6 = document.querySelectorAll('#slide_container')
console.log(tag_es6, cls_es6, id_es6);
/*************************************************************************/

const id_main = document.querySelector('#main');
console.log(id_main);
id_main.style.backgroundColor = 'red';

const cls_gnb = document.querySelector('.gnb'); 
console.log(cls_gnb);
cls_gnb.style.border = '5px solid orange';

const tag_li = document.querySelectorAll('.gnb > li');
const tag_li2 = cls_gnb.querySelectorAll('li');

console.log(tag_li,tag_li2);

tag_li[0].style.backgroundColor = 'yellow';

const tag_a = document.querySelectorAll('.gnb > li > a');
const tag_a2 = tag_li2[0].querySelectorAll('a');
console.log(tag_a);
tag_a[0].style.color = 'green';

// 로그인 알고리즘
// 버튼 클릭 시 사용자가 입력한 아이디, 이름, 비밀번호 확인 알고리즘
const loginBtn = document.querySelector('#loginFrm button')
console.log(loginBtn);

const loginId = document.querySelector('#loginFrm #id')
console.log(loginId);

const loginName = document.querySelector('#loginFrm #name')
console.log(loginName);

const loginPw = document.querySelector('#loginFrm #pw')
console.log(loginPw);

// 자바스크립트에서 html input id 쪽 타입을 password로 속성을 변경하는 코드 
//loginId.type = 'password';

function userinfo() {
    let dataName = loginName.value;
    let dataId = loginId.value;
    let dataPw = loginPw.value;

    return console.log(dataName,dataId,dataPw);
}
