function loginBtn() {
    // loginSuccessHandler & loginFailureHandler 구현하기
    // 
    if ($("#userId").val() === '') {
        alert("Enter your ID.");
        $("#userId").focus();
    }else if ($("#userPwd").val() === '') {
        alert("Enter your password.");
        $("#userPwd").focus();
    }else{
        // 로그인 완료 후, main page로 이동
    }
}

function signupBtn(){
    // 회원가입 화면으로 이동
}