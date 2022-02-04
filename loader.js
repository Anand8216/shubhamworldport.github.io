var load = document.getElementById('loader');
var loada = document.getElementById('loader-overlay')
function loadfun()
{
    

    
        $("#loader-overlay").delay(500).fadeOut();
        $(".loader").delay(1000).fadeOut("slow");
        load.style.display = 'none';
        loada.style.display = 'none';
    

}

