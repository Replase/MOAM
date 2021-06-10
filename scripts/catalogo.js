$(Document).ready(function(){
    var imagen='';
    $('#uno').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#dos').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#tres').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#cuatro').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#cinco').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#seis').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#siete').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#ocho').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#nueve').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#diez').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    $('#once').click(function(){
        imagen+='<img src="img/bichaleco.jpg">'
        alert(imagen)
    })
    if(imagen=='' == false){
        var mostrar='<div class="ala">'+
                        '<div class="imagen">'+
                            '<div class="contenedor">'+
                                imagen+
                            '</div>'+
                        '</div>'+
                        '<div class="iconocerrar">'+
                            '<i id="btn-close" class="bi bi-x-circle" style="font-size: 2rem; color: black;"></i>'+
                        '</div>'+
                   '</div>';
        $('body').append(mostrar);
    }
})
