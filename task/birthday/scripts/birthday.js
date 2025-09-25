const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const btn = document.querySelector('.check-btn');
const mean = document.querySelector('.mean');
const mainImg = document.querySelector('#flower-img');
const birthday_flower = [
    { month:1,  flower:'수선화',      content:'자기애, 자존심, 외로움', src:'https://i.namu.wiki/i/aTDcbN0kS7_lac8MGfDaGEqhPSPBWXDJf_BOqIH56A1NLx31fIUtQP25WR3chGTgVCMGxoW0-IvAfANSQBTsMbpuy5yCmYSU5OS7L1sURywhmMlpFaOBwXJn4D8wsai5nbW9BLTRjHYWsD4V80CJ0Q.webp'},
    { month:2,  flower:'제비꽃',      content:'겸손, 양보', src:'https://i.namu.wiki/i/2JsKofoCfhhd97HM6vyz4K34gLWz2AISQjnNqK_AS9WPVsrvknKNlzHsAXZByNz88_FHBhxgInj60af4IBxYJxjOEPxzrxwqzGF2N8kRIDB--XVUf2Y4TxOQTAauthaTrzlB55KTGEX_vgnY5saT1g.webp'},
    { month:3,  flower:'수선화',      content:'자기애, 자존심, 외로움', src:'https://i.namu.wiki/i/aTDcbN0kS7_lac8MGfDaGEqhPSPBWXDJf_BOqIH56A1NLx31fIUtQP25WR3chGTgVCMGxoW0-IvAfANSQBTsMbpuy5yCmYSU5OS7L1sURywhmMlpFaOBwXJn4D8wsai5nbW9BLTRjHYWsD4V80CJ0Q.webp'},
    { month:4,  flower:'스위트피',    content:'추억, 즐거움', src:'https://i.namu.wiki/i/3mIKaRGE0pYl5EzecEyga3Bm5D-B4RC-vW7hJZZfKR8-PVR7JcO7ffeV8k_l-YEgMHGn1Uj1K8PXlUkXseROXUJwEnuTcgPAl9tMCMNem2bvfKoJ3r7Cj7cycsZDb0xuNWdGWb_jseIW9NmgKT75gw.webp'},
    { month:5,  flower:'은방울꽃',    content:'희망, 섬세함', src:'https://i.namu.wiki/i/PnfadaZdN8QqcFgbtC-L7K_Sc4j7I9BcCdqe7rd6CWAPM68E0Wzq3u_HsTrMrU8MxvKNnuYuQvuQJ75LW2l5U__NillYsmh6nxaxeQA1IQVTK_pAeTTf4epN8q9leKMfUKDlp9Bcm-6gPU-JLwMiSA.webp'},
    { month:6,  flower:'백합',        content:'순결', src:'https://i.namu.wiki/i/_HAZCbviXuTc-4ah2J9PO7VAdlCztjIrbtyvxT8N0Zg1XnnCREwsiYxT1ygWgR047JhHRG98yAPXOUPRms0QMIDwy1JwKfUmldEgmQP7X0wVNVFsiotF7hbnEWWhPbRtf3htoDtDlMoFf6hik-93KA.webp'},
    { month:7,  flower:'미나리아재비', content:'아름다움, 인격', src:'https://i.namu.wiki/i/TTeA8CcrsUv-MZ1cmiarY7es_N_dAs9klv76Yp7tNCRDiq6-TsBewYVtM88pPPs46IdeSO8AMw_UJRa7_Zks783AdAX5SqtSq5Wp2ESTXXVSd1A69iG-shGds7oeMh6mvpLDfSqRFntkyRr6M1Nm1A.webp'},
    { month:8,  flower:'글라디올러스', content:'비밀, 상상, 견고함', src:'https://i.namu.wiki/i/O4XVdAzoy2OQ0Iuh-5QWRBYDxuM168hGYZoBIDeWLHslC0g-rh-bPYh9vvFSpFZXoyblOSuXe7CRAcj25WyrNsfPYtgBkSCJfNigCEruwhhRBrHsIYzLi7sBwC6019kilHBeEJg95lkauDAxMO-MYQ.webp'},
    { month:9,  flower:'물망초',      content:'진실한 사랑', src:'https://i.namu.wiki/i/zMrGVpUEf0tLiA1_i39rCeJyU16mWDv9EB2GELZPFwJ1eVv-lcdlyKEE5qXnheJuCS2gyv9eCrPglqknu_xAup5m5a0EHnyBt33YMqNsYZWvmsATJvctAeJP-ndTjvGdJz2Y7dhX7E1dPrRstPKnFQ.webp'},
    { month:10, flower:'금잔화',      content:'실망, 비애', src:'https://i.namu.wiki/i/H9QJGC_SAZkp9TBPHl2qCnbgbMg4h3yMFM3FVe1-QDblkaPnG_6IrPb2y9LUk0yWu5G0TcrXVoGB_OKZyejdBcXaqT6_GykykSjQi3uqs0FhfixmfT4PmCs_SCcbOukKWSQdzsPVtDudfZGKSwhSUw.webp'},
    { month:11, flower:'국화',        content:'성실, 진실', src:'https://i.namu.wiki/i/VqBN7Lm55oPqLLon-cUEd_26yIf1ClicARUV2zXF2NIXzBdQLP0ie2anKyROw-pS0e7ddddKVbsuyYpgebmO95LB96QcRWLFlss0mYMtWASonbhfTRvxlnUS6_bkLHelUQQdwJsnOzeSuW1JVTZe_w.webp'},
    { month:12, flower:'포인세티아',   content:'축하, 감사', src:'https://cdn.latimes.kr/news/photo/202312/51495_63421_161.jpg'}
]

function birthday(){
    let monIn = Number(month.value);
    if((monIn == 0) ||(monIn > birthday_flower.length))
    {
        alert('입력 값을 확인하세요');
        mean.textContent = '생일을 잘못 입력 하셨습니다.'
    }
    mainImg.src = birthday_flower[monIn - 1].src
    mean.textContent = `${monIn}월의 탄생화는 ${birthday_flower[monIn - 1].flower}, 꽃말은 ${birthday_flower[monIn - 1].content}입니다`;
    month.value = '';
}

btn.addEventListener('click',birthday);
