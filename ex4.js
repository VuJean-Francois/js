const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// fonction qui va générer un mot de passe aléatoire
function genererMotAleatoire(longueurMot = 8){
    let mot = '';
    for(let i=0; i< longueurMot; i++){
        let indexAleatoire = Math.floor(Math.random() * alphabet.length);
        mot += alphabet[indexAleatoire];
    } 
    return mot;
}

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
  
//appel fonction
let motAléatoire1 = genererMotAleatoire(12);
console.log('Mot Aléatoire 1 :' ,motAléatoire1);
let motAléatoire2 = genererMotAleatoire(7);
console.log('Mot Aléatoire 2 :', motAléatoire2);
let motAléatoire3 = genererMotAleatoire();
console.log('Mot Aléatoire 3 :' , motAléatoire3)