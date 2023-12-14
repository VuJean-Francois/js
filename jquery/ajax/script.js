$(document).ready(function(){
    $('#submit').on('click',function(e){
        e.preventdefault();

        let recherche = new FormData($('#recherche')[0]);
        $.ajax({
        url: 'recherche.php',
        method: 'GET',
        type: 'POST',
        data: recherche,
        processData: false,
        contentType: false,
        success: function(response){
            $('.retour').html(response);
        },
        error: function(xhr,status,error){
            $('retour').html('Erreur');
        }
        
        });

    });
   
});