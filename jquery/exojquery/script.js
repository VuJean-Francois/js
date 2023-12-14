/*$(document).ready(function(){
    $('input').on("blur", function(){
        //let nom = $(this).val();
        if($(this)[0].value === ""){
            
                $(this)[0].css("border", "2px solid red")
           
        } else {
                $(this)[0].css("border", "2px solid green" )
            
        }
    });
    $('#prenom').on("blur", function(){
        let prenom = $(this).val();
        if(prenom === ""){
           
                $("#prenom").css("border", "2px solid red")
           
        } else {
                $("#prenom").css("border", "2px solid green" )
            
        }
    });
    $('#email').on("blur", function(){
        let email= $(this).val();
        if(email === ""){
           
                $("#email").css("border", "2px solid red")
           
        } else {
                $("#email").css("border", "2px solid green" )
            
        }
    });

        $('button[type="button"]').on("click",function(){
            const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?';
            let password = Math.random().toString(36).slice(-8);
            $('#password').val(password);
            $('#password2').val(password);
            
  })
});
*/
//événement permettant d'éxécuter le code des que le dom est chargé
$(document).ready(function(){
        // on sélectionne les champs sur lesquelles faire la vérification
        $('#nom, #prenom, #email, #password, #password2, #date').on('blur',function(){
                //ON récupère l'élément
                let element = $(this);
                //on vérifie s'il y a une valeur
                if(element.val() != ''){
                        //si le champ a une valeur je passe la bordure en vert
                        element.css('border','1px solid green');
                } else{
                        // Si l champ est vide je passe la bordure en rouge
                        element.css('border', '1px solid red');
                }
        });
        //Au clic sur le bouton generer un password
        $('#genererPassword').on('click', function(){
                //On définit le mot de passe dans une variable
                let chaine = 'jqueryetejavascript';
                $('#password, #password2').css('border', '1px solid green').val(chaine);
        });
        //Activation au bouton submit si l'ensemble des champs ont une valeur

        $('#submit').on("mouseover", function(){
            if(verifForm()){
                $('#message').addClass('succes').css('border', '2px solid blue').html('Formulaire valide').show();
            } else{
                // si un champ est vide
                $('#message').addClass('error').css('border', '2px solid red').html('Formulaire invalide').show();
            }
        });
          //Au clic sur le bouton submit
        $('#submit').on('click',function(e){
                e.preventDefault(); //empecher le comportement par defaut du bouton
                //on crée l'objet formulaire avec l'ensemble des données
                let formData = new FormData($('#jquery')[0]);
                //On va effectuer notre requete Ajax
                $.ajax({
                        url: 'traitement.php', //Url qui va traiter le formulaire
                        type: 'POST', //le type, GET ou POST
                        data: formData, // les données a envoyer
                        processData: false, //pour ne pas trainer les données
                        contentType: false, //pour laiseer le type de donnée par défault
                        //Gestion de la barre de progression
                        xhr: function(){
                                let xhr = new window.XMLHttpRequest(); //je crée un objet XMLHttpREquest
                                //Ecoute l'évenement progress sur l'envoie du fichier
                                xhr.upload.addEventListener('progress',function(e){
                                        if(e.lengthComputable){
                                                //Calculer le pourcentage de progression de l'envoi
                                                let pourcent = Math.round((e.loaded/e.total)*100);
                                                $('#barre').attr('value', pourcent); // je met a jour la value de la barre
                                                $('#status').text(pourcent+'%'); // on met a jour le span avec le pourcentage
                                        }
                                });
                                return xhr; // je retourne mon objet XMLHttpRequest modifié
                        },
                        success : function(response){
                                $('#message').addClass('success').html('Formulaire envoyé: '+response).show();
                        },
                        //si il ya une erreur
                        error : function(xhr,status,error){
                                $('#message').addClass('error').html('Une erreur est survenue :'+error).show();
                        },
                        //fonction à appeler avant l'envoie de la requète Ajax
                        beforeSend : function(){
                                $('#progression').show(); // on affiche la barre de progression
                        },
                        //Fonction à appeler une fois la requête terminée, peu importe si success ou error
                        complete : function(){
                               // $('#barre').hide(); // On masque la barre de progresse
                        }
                });
        });

        function verifForm(){
            let boolean = false;
            if($('#nom').val() != ''
                && $('#prenom').val() != ''
                && $('#email').val() != ''
                && $('#password').val() != ''
                && $('#password2').val() != ''
                && $('#date').val() != ''){
                boolean = true;
            $('#submit').removeAttr('disabled');
                } else{
                boolean = false;
            $('#submit').attr('disabled', 'disabled');
                }
                return boolean;
        }
       
});