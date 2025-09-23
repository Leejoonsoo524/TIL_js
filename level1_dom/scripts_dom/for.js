// 반복문
// 초기값 시작 0
// 출력) JS 1일차 JS 2일차 JS 3일차
for (let index = 0; index < 3; index++) {
    console.log(`JS ${index + 1} 일차`)    
}
/****************************************************/
// 2단 구구단
const dan2 = document.querySelector(".dan2");
for (let i = 1; i <= 9; i++) {
dan2.innerHTML += `<li>2 x ${i} = ${2 * i}</li>`;
}
/****************************************************/
const array = ['photoshop', 'illustrator', 'figma', 'html', 'css'];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);    
}

for (let index = array.length -1 ; index >= 0; index--) {
    console.log(array[index]);    
}
/****************************************************/

const flower = [
    {
        month:1,
        flower:'수선화',        
    },
    {
        month:2,
        flower:'제비꽃',        
    },
    {
        month:3,
        flower:'수선화',        
    }
]

for (let index = 0; index < flower.length; index++) {
    console.log(`${flower[index].month}월 탄생화 ${flower[index].flower}`);    
    
}
/****************************************************/
for (let index = 1; index < 11; index++) {
    if(index%2 == 1) {console.log(index);}    
}
/****************************************************/
console.log(`**********************************`); 
// 5~20까지 짝수만 
for (let index = 5; index <= 20; index++) {
    if(index%2 == 0) {console.log(index);}    
}
/****************************************************/
console.log(`**********************************`); 
//0~10까지 역순 홀수만
for (let index = 10; index >= 0; index--) {
    if(index%2 == 1) {console.log(index);}    
}
/****************************************************/
console.log(`**********************************`); 
const dan2Li = dan2.querySelectorAll('li');
console.log(dan2Li);
//홀수 li 노랑 짝수 li 파랑

/* for (let index = 0; index < dan2Li.length; index++) {
    let even, odd = '';
    even = index % 2;
    odd = index % 2;
    if(even == 0)   {dan2Li[index].style.backgroundColor = 'blue';}
    else            {dan2Li[index].style.backgroundColor = 'yellow';}
}     */

/****************************************************/
// 홀수 li w50 h20 bg노랑 color파랑
// 짝수 li w50 h20 bg파랑 color노랑

for (let index = 0; index < dan2Li.length; index++) {        
    dan2Li[index].classList.add('size');
    if(index % 2 == 0)      {dan2Li[index].classList.add('color_even');}
    else                    {dan2Li[index].classList.add('color_odd');}
}    
/****************************************************/
/* let cssQ = prompt('ox퀴즈 : 1은0보다 작다');
while(cssQ != 'x'){
    cssQ = prompt('ox퀴즈 : 1은0보다 작다');
}
alert('정답입니다.'); */

/* while(true){
    const qa = prompt('자바스크립트는 동적언어이다(O/X)');
    if(qa != 'o'){alert('정답입니다.'); break;}
    
} */
/****************************************************/
// 2~9단 구구단
/* const dan99 = document.querySelector(".dan99");
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++)
    {
        dan99.innerHTML += `<li>${i} x ${j} = ${i * j}</li>`;
    }    
} */
/****************************************************/

const menuA = document.querySelectorAll(".menu a");
for(let i in menuA)
{
    console.log(i);
}

for(let i of menuA)
{
    console.log(i);
    i.addEventListener('click',()=>{console.log(i);})
}