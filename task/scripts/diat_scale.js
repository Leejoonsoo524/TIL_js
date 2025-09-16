const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')
const resultBtn = document.querySelector('#result');
const textNormal = document.querySelector('#normal');
const textOver = document.querySelector('#over');

resultBtn.addEventListener('click',function(){
    const height = Number(inputHeight.value);
    const weight = Number(inputWeight.value);

    const appropriateWeight = ((height - 100) * 0.9);   //적정체중
    console.log(`적정 체중은${appropriateWeight}kg 이고`);

    const excessWeight = weight - appropriateWeight;    //초과체중
    console.log(`초과 체중은${excessWeight}kg 이다`);


    textNormal.textContent = `적정체중: ${appropriateWeight.toFixed(1)}kg 이고`;
    textOver.textContent = `초과체중: ${excessWeight.toFixed(1)}kg 이다`;
});