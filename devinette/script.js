// Génération d'un nombre aleatoire
const random = Math.floor(Math.random()*100)+1;
// fonction pr vérifier le nombre saisi par l'utilisateur
function checkNombre(){
    const nombre = parseInt(document.getElementById('nombre').value);
    const message = document.getElementById('message');

    if(isNaN(nombre) || nombre < 1 || nombre > 100){
        message.textContent = 'Veuillez entrer un nombre valide.';
        return;
    }
    if(nombre === random){
        message.textContent ='Félécitations ! Vous avez trouvé le bon numéro';
    }
    else if(nombre < random){
        message.textContent = 'Le nombre est trop petit. Try again!';
    }
    else{
        message.textContent = 'Le nombre est trop grand. Try again!'
    }
}