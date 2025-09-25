const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const btn = document.querySelector('.check-btn');
const mean = document.querySelector('.mean');
const mainImg = document.querySelector('#flower-img');
const birthday_flower = [
    { month:1,  flower:'수선화',      content:'자기애, 자존심, 외로움',},
    { month:2,  flower:'제비꽃',      content:'겸손, 양보',},
    { month:3,  flower:'수선화',      content:'자기애, 자존심, 외로움',},
    { month:4,  flower:'스위트피',    content:'추억, 즐거움'},
    { month:5,  flower:'은방울꽃',    content:'희망, 섬세함'},
    { month:6,  flower:'백합',        content:'순결'},
    { month:7,  flower:'미나리아재비', content:'아름다움, 인격'},
    { month:8,  flower:'글라디올러스', content:'비밀, 상상, 견고함'},
    { month:9,  flower:'물망초',      content:'진실한 사랑'},
    { month:10, flower:'금잔화',      content:'실망, 비애'},
    { month:11, flower:'국화',        content:'성실, 진실'},
    { month:12, flower:'포인세티아',   content:'축하, 감사'}
]

function birthday(){
    let monIn = Number(month.value);
    if((monIn == 0) ||(monIn > birthday_flower.length))
    {
        alert('입력 값을 확인하세요');
        mean.textContent = '생일을 잘못 입력 하셨습니다.'
    }
    mean.textContent = `${monIn}월의 탄생화는 ${birthday_flower[monIn - 1].flower}, 꽃말은 ${birthday_flower[monIn - 1].content}입니다`;
    month.value = '';
}

btn.addEventListener('click',birthday);