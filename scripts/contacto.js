$(Document).ready(function(){
    $('#btn-send').click(function(){
        var errores='';
        if($('#nombre').val()==''){
            errores+= '<p><span class="bi bi-bookmark-x-fill"></span> Escriba su(s) nombre(s)</p>';
            $('#nombre').css("border-bottom-color","#F14B4B")
        }else{
            $('#nombre').css("border-bottom-color","#D1D1D1")
        }
        if($('#apellido').val()==''){
            errores+= '<p><span class="bi bi-bookmark-x-fill"></span> Escriba su(s) apellido(s)</p>';
            $('#apellido').css("border-bottom-color","#F14B4B")
        }else{
            $('#apellido').css("border-bottom-color","#D1D1D1")
        }
        if($('#e-mail').val()==''){
            errores+= '<p><span class="bi bi-bookmark-x-fill"></span> Escriba su e-mail</p>';
            $('#e-mail').css("border-bottom-color","#F14B4B")
        }else{
            $('#e-mail').css("border-bottom-color","#D1D1D1")
        }
        if($('#mensaje').val()==''){
            errores+= '<p><span class="bi bi-bookmark-x-fill"></span> Escriba su mensaje</p>';
            $('#mensaje').css("border-bottom-color","#F14B4B")
        }else{
            $('#mensaje').css("border-bottom-color","#D1D1D1")
        }
        
        if(errores=='' == false){
            var mensajamodal='<div class="modal_wrap">'+
                                '<div class="mensaje">'+
                                    '<h3>Informacion Incompleta</h3>'+
                                        errores+
                                    '<span id="btnclose">Cerrar</span>'+
                                '</div>'+
                                '</div>';
            $('body').append(mensajamodal);
        }
        $('#btnclose').click(function(){
            $('.modal_wrap').remove();
        });

        
    });
});