$(document).ready(function(){
    $("#btnGerar").click(function(){
        if($("#iDisciplina").val().trim != "" && $("#iData").val() != ""){
            $("#modalTitle").text($("#iDisciplina").val());
            $("#modalText").text($("#iData").val());
            $('#modalQR').modal('show');
        }else{
            alert("Os campos não podem estar vazios.");
        }
    });
});