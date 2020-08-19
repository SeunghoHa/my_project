function joinBtn() {
    /**
     * else if 구문으로 추가해야 하는 내용
     * 1. password confirm
     * 2. 아이디 중복체크 실패 시 join 불가능하도록
     * 3. 비밀번호 확인 실패 시 join 불가능하도록
     * 4. 아이디 중복체크 버튼 클릭을 하지 않았을 경우 join 불가능하도록
      */
    // DB insert
    // ID 중복 확인 구현
    if ($("#userId").val() === '') {
        alert("Enter your ID.");
        $("#userId").focus();
    }else if ($("#userPwd").val() === '') {
        alert("Enter your password.");
        $("#userPwd").focus();
    }else if ($("#userName").val() === '') {
        alert("Enter your name.");
        $("#userName").focus();
    }else if ($("#userPhone").val() === '') {
        alert("Enter your phone number.");
        $("#userPhone").focus();
    }else if ($("#userEmail").val() === '') {
        alert("Enter your email address.");
        $("#userEmail").focus();
    }else if ($("#userAddress").val() === '') {
        alert("Enter your address.");
        $("#userAddress").focus();
    }else{
        // 회원가입 완료 후, login page로 이동
    }
}

function userIdCheckBtn(){
    // DB 조회
    // 중복된 아이디 체크
}

function cancelBtn(){
    // 로그인 화면으로 이동
}