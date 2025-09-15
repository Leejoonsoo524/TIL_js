const inputTag = document.querySelectorAll('input')
console.log(inputTag);
console.log(inputTag[0]);
console.log(inputTag[1]);
console.log(inputTag.length);
/***************************************************************/
/* const buttonTag = document.querySelectorAll('button')
console.log(buttonTag);
console.log(buttonTag[0]);
console.log(buttonTag[1]);
console.log(buttonTag.length); */
/***************************************************************/
const searchInput = document.querySelector('#s')
console.log(searchInput);

const textInput = document.querySelector('#n')
console.log(textInput);

const searchBtn = document.querySelector('#search_btn')
console.log(searchBtn);

const cartBtn = document.querySelector('#cart_btn')
console.log(cartBtn);
/***************************************************************/
//태그 속성, 함수테스트
/* console.log(searchInput.type, searchInput.placeholder);
searchInput.placeholder = '테스트';
console.log(searchInput.placeholder);

searchInput.value = 'test'; // 속성 읽기(input에 값을 읽는다)
let checkValue = searchInput.value; // 속성 읽기(input에 값을 읽는다)
console.log(checkValue);

let checkValue2 = textInput.value;
checkValue2 = Number(textInput.value) + 1;
console.log(`주문수량 : ${checkValue2}`); */
/***************************************************************/

searchInput.style.backgroundColor = 'red';
searchInput.style.textAlign = 'center';

textInput.style.backgroundColor = 'orange';
textInput.style.textAlign = 'center';

searchBtn.style.backgroundColor = 'yellow';
searchBtn.style.textAlign = 'center';
searchBtn.style.width = '250px';

cartBtn.style.backgroundColor = 'green';
cartBtn.style.textAlign = 'center';
cartBtn.style.width = '250px';

/***************************************************************/

// 이벤트 활용 콜백함수 호출
// 이벤트 문법
// 객체.addEventListener('이벤트종류', 콜백함수)
const orderBtn = document.querySelector('#order');
const cart_Btn = document.querySelector('#cart');

console.log(orderBtn);
// 주문 버튼 클릭 시 '상품을 선택하세요' 경고창 출력
// 이벤트 뒤 함수 작성방식 : 콜백함수호출(추천), 익명함수
/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요');
})//익명함수 사용 */

/***************************************************************/
// 주문하기 클릭시
// 장바구니 클릭시
function orderFunc(value)
{    
    alert(value+ ' 담으세요');
}
/* orderBtn.addEventListener('click', () => orderFunc('장바구니에'));
cart_Btn.addEventListener('click', () => orderFunc('상품을')); */

/***************************************************************/
function orderFunc_v2(value)
{    
    return function()       //클로져 방식의 함수
    {
        //내부 함수는 외부 함수의 매개변수를 기억한다.
        alert(value+ ' 담으세요');
    }
}
orderBtn.addEventListener('click', orderFunc_v2('장바구니'));
cart_Btn.addEventListener('click', orderFunc_v2('상품을'));
/***************************************************************/
// 아이디, 비밀번호 중복확인 클릭시 
// 아이디가 중복되었습니다.
// 비밀번호가 중복되었습니다.
const idBtn = document.querySelector('#id');
const pwBtn = document.querySelector('#pw');

function checkFunc(value)
{    
    return function() 
    {        
        alert(value + ' 가 중복되었습니다.');
    }
}
idBtn.addEventListener('click', checkFunc('아이디'));
pwBtn.addEventListener('click', checkFunc('비밀번호'));
/***************************************************************/
// 이벤트 콜백 함수 연습
// textarea 값을 입력했을 때 콘솔창에 50자 이상 입력하세요 출력
const textArea = document.querySelector('#review');
function areaFunc(value)
{    
    return function() 
    {        
        alert('50자 이상 입력하세요');
    }
}
// textarea 활성화시 테두리 빨간색
textArea.addEventListener("focus", function () {
    textArea.style.border = "3px solid red";    
});

// textarea 비활성화시 테두리 회색
textArea.addEventListener("blur", function () {
    textArea.style.border = "3px solid gray";    
});
/***************************************************************/
// 배경버튼 클릭 시 부모 article 배경색 변경하기
const articleTag = document.querySelector('article');
const bgBtn = articleTag.querySelectorAll('button');
const bgP = articleTag.querySelector('p');
console.log(bgBtn, bgP);

function bgChange(value)
{
    return function ()
    {        
        articleTag.style.backgroundColor = value;
        bgP.textContent = `현재 배경 색상 : ${value}`; //HTML에 태그를 추가할수 있는 속성 사용
    }
    
}
function bgDefault()
{
    articleTag.style.width = '430px';
    articleTag.style.height = '430px';
    articleTag.style.backgroundColor = '#eee';
    bgP.textContent = `현재 배경 색상 : #eee`;
}


bgDefault();
bgBtn[0].addEventListener("mouseover", bgChange('red'));
bgBtn[0].addEventListener("mouseout", bgDefault);
bgBtn[1].addEventListener("mouseover", bgChange('orange'));
bgBtn[1].addEventListener("mouseout", bgDefault);
bgBtn[2].addEventListener("mouseover", bgChange('yellow'));
bgBtn[2].addEventListener("mouseout", bgDefault);

/* bgP.innerHTML = '<input type="text">'; //HTML에 태그를 추가할수 있는 속성 사용
bgP.innerText = '<input type="text">'; //코드를 Text로 표시하는 속성 */