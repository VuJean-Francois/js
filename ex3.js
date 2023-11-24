//je déclare un tableau
let donnees = [12,5,8,18,10,13,69];
// Fonction pourcalculer la somme
function calculerSomme(tab){
    //identique a reduce
    /*let somme = 0;
    for(i=0; i<=tab.length; i++){
        somme += tab[i];
    }*/
    return tab.reduce((acc,valeur) => acc+valeur, 0);
}
//fonction pour calculer la moyenne
function calculMoyenne(tab){
    let somme = calculerSomme(tab);
    return somme/tab.length;
}
//fonction pour trouver le maximum de vitesse
function trouverMax(tab){
    return Math.max(...tab);
}

// exemple d'utilisation
let somme = calculerSomme(donnees);
console.log('Somme des données :', somme);
let moyenne = calculMoyenne(donnees);
console.log('Moyenne des données :', moyenne);
let maximum = trouverMax(donnees);
console.log('Valeur maximale des données :', maximum);