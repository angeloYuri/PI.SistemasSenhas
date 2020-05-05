$(document).ready(function(){

    $("#btnAcessar").click(function(){
        console.log($("#iLogin").val());
        if($("#iLogin").val().trim() != "" && $("#iSenha").val().trim() != ""){
            if($("#iLogin").val().trim() == "123" && $("#iSenha").val().trim() == "123" ){
                window.location.href = "gerador.html";
            }else{
                window.location.href = "erroLogin.html";
            }
            
        }else{
            alert("Os campos não podem estar vazios!");
        }
    });

});