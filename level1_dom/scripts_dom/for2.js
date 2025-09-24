let ul = '';
let li = '';

for (let i = 0; i < 2; i++) {
    li = '';
    for (let j = 0; j < 5; j++) {
        li += `<li>menu${j + 1}</li>`        
    }
    ul += `<ul>${li}</ul>`
}
console.log(ul,li);

// 고객 리뷰 초기 상태
// 상품 문의 클릭 시 문의내용 보이기
// 고객 리뷰 클릭 시 리뷰내용 보이기
const tabTitle = document.querySelectorAll('.title a');
const tabContent = document.querySelectorAll('.contents .con');
console.log(tabTitle,tabContent);

tabContent[1].style.display = 'none';

tabTitle[0].addEventListener('click',()=>{
    contentsHide();
    tabContent[0].style.display = 'block';
});

tabTitle[1].addEventListener('click',()=>{
    contentsHide();
    tabContent[1].style.display = 'block';
});

/* for(let i of tabContent) {
    // 객체정보만 가지고 있어서 인덱스 연결이 불가능
    i.addEventListener('click', ()=>{
        contentsHide();
        i.style.display = 'none';
    })    
} */

tabTitle.forEach(function(  obj,//오브젝트  -> tabTitle 대용
                            ind,//인덱스    -> tabTitle[해당부분] 대용
                            arr,//배열정보  -> 사용 유무에 따라 작성 오브젝트,인덱스,배열 순서는 지켜야 할것
                            ){
    console.log(obj, ind, arr.length);
    obj.addEventListener('click', ()=>{    
        contentsHide();
        console.log(ind);
        tabContent[ind].style.display = 'block';
        obj.style.backgroundColor = 'red';
    })
});

function contentsHide(){
    /* tabContent[0].style.display = 'none';
    tabContent[1].style.display = 'none'; */
    for(let i of tabContent) {i.style.display = 'none';}
}