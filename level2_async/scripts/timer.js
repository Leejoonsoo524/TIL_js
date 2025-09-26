// setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function (){
    console.log('test' + num1);
    num1++;
}, 500); */

// 0 ~ 6 반복타이머
// 123456 0123456 0123456

/* let num2 = 0;
const timer2 = setInterval(function (){
    num2++;
    if(num2 == 7 ) num2 = 0;    
    console.log(num2);    
}, 500); */

// 3 ~ 0 반복타이머
// 3210 3210 3210

/* let num3 = 3;
const timer3 = setInterval(function (){
    console.log(num3);    
    num3--;
    if(num3 < 0 ) num3 = 3;    
}, 500); */
/**********************************************************************************/
// 이미지 슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide');
const gentleCurrentNum = document.querySelector('.page_number .current');
const gentleTotalNum = document.querySelector('.page_number .total');
let slide = 0;

// 슬라이드 총 번호 표시
gentleTotalNum.textContent = gentleSlide.length;
gentleCurrentNum.textContent = slide + 1;
console.log(gentleSlide);


for(let i of gentleSlide){i.style.transition = 'opacity 0.5s'; }
const timer = setInterval(function (){
    slide++;
    if(slide == gentleSlide.length) slide = 0;        
    for(let i of gentleSlide) {
        i.style.visibility = 'hidden';
        i.style.opacity = '0';
    }
    gentleSlide[slide].style.visibility = 'visible';
    gentleSlide[slide].style.opacity = '1';
    gentleCurrentNum.textContent = slide + 1;
    console.log(slide);    
}, 3000);

/**********************************************************************************/
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide');
for(let i of gentleSlide2){i.style.transition = 'opacity 0.5s'; }

let slide2 = gentleSlide2.length - 1;
const timer2 = setInterval(function (){
    slide2--;
    if(slide2 < 0) slide2 = gentleSlide2.length - 1;    
    for(let i of gentleSlide2) {
        i.style.visibility = 'hidden';
        i.style.opacity = '0';
    }
    gentleSlide2[slide2].style.visibility = 'visible';
    gentleSlide2[slide2].style.opacity = '1';
    console.log(slide2);    
}, 3000);