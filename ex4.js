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

//appel fonction
let motAléatoire1 = genererMotAleatoire(12);
console.log('Mot Aléatoire 1 :' ,motAléatoire1);
let motAléatoire2 = genererMotAleatoire(7);
console.log('Mot Aléatoire 2 :', motAléatoire2);
let motAléatoire3 = genererMotAleatoire();
console.log('Mot Aléatoire 3 :' , motAléatoire3)