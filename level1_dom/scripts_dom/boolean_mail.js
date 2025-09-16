window.addEventListener('load', function(){
    let loginSts = localStorage.getItem('isLogin2');
    console.log(loginSts);

    // DOM 변수
    const mailLogin = document.querySelector('#login');
    const mailLogout = document.querySelector('#logout');

    console.log(typeof(loginSts),Boolean(loginSts));
    
    if(loginSts == on)
    {
        console.log('로그인확인');
        mailLogout.style.display = 'none';
        mailLogin.style.display = 'block';
    }
    else   
    {
        console.log('로그아웃');
        mailLogin.style.display = 'none';
        mailLogout.style.display = 'block';
    }
})