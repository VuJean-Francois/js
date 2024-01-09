// Fonction pour générer un mot de passe aléatoire
function genererMotDePasse() {
    var longueur = 10;
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    var motDePasse = "";
  
    for (var i = 0; i < longueur; i++) {
      motDePasse += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    // Remplir les champs "mot de passe" et "répéter mot de passe"
    document.getElementById("motDePasse").value = motDePasse;
    document.getElementById("repeteMotDePasse").value = motDePasse;
  }
  
  // Appeler la fonction genererMotDePasse() lorsque l'événement 'click' se produit
  document.getElementById("boutonGenererMotDePasse").addEventListener("click", genererMotDePasse);

  function togglePassword() {
    var x = document.getElementById("passwordField");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  document.addEventListener("input", function() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var motDePasse = document.getElementById("motDePasse").value;
    var submitBtn = document.getElementById("submitBtn");
  
    if (nom !== '' && prenom !== '' && email !== '' && motDePasse !== '') {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });


function changeColor() {
      var selectedColor = document.getElementById("colorPicker").value;
      document.getElementById("colorDiv").style.backgroundColor = selectedColor;
}
$(document).ready(function(){
    $('#myForm').submit(function(e){
      e.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: 'votre_fichier_ajax.php',
        data: formData,
        success: function(response) {
          if (response === "Inscription OK") {
            $('#message').text(response).css('background-color', 'green');
          } else if (response === "Erreur mot de passe" || response === "Error") {
            $('#message').text(response).css('background-color', 'red');
          }
        },
        error: function() {
          $('#message').text('Une erreur s\'est produite').css('background-color', 'red');
        }
      });
    });
  });