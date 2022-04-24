$(document).ready(function() {
    
     $("#sign").on("click", function() {
        if(!$("#chk_1").is(':checked')) {
            alert ("약관에 동의해 주세요.");
            return false;
        } 
    });
    
    function check_input()
            {
                if(!document.login.id.value){
                    alert("아이디를 입력하세요");
                    document.login_form.id.focus();
                    return;
                }
                if(!document.login.pass.value){
                    alert("비밀번호를 입력하세요");
                    document.login.pass.focus();
                    return;
                }
                document.login.submit();
            }
    
    
    $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })
});