const ul = document.querySelector('#list_wrap');
const inputList = document.querySelector('#list');
const addBtn = document.querySelector('#list_add');

addBtn.addEventListener('click',()=>{
    inputList.value == '' ? alert('할일을 입력하세요') : toDoFunc();
});

inputList.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        inputList.value == '' ? alert('할일을 입력하세요') : toDoFunc();
    }
});

function toDoFunc() {    
        ul.innerHTML += `<li>
                            <span>${inputList.value}</span> 
                            <button type="button" class="close">X</button>
                        </li>`;
        inputList.value = '';
    
        const deleteBtn = document.querySelectorAll('li .close');

        for (let i of deleteBtn) {
            i.addEventListener('click',()=>{
                i.parentNode.remove();
            })            
        }
    console.log('할일출력 테스트');
}
