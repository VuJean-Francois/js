let joueur = "X";
let mouvement = 0;
const tableau = document.getElementById('tableau');
const cellule = document.querySelectorAll('.cellule');
const message = document.getElementById('message');
const combinaison = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let finJeu = false;
 
// Gestion des coups
function player(numero){
    if(finJeu || cellule[numero].textContent !== '') return;
 
    cellule[numero].textContent = joueur;
    mouvement++;
 
    if(checkGagnant(joueur)){
        message.textContent = `Le joueur ${joueur} a gagné`;
        finJeu = true;
    } else if(mouvement === 9){
        message.textContent = 'Match nul !';
        finJeu = true;
    } else{
        joueur = joueur === 'X' ? '0' : 'X' ;
    }
}
// On vérifie si il y a un gagnant
function checkGagnant(player){
    return combinaison.some(combination => {
        return combination.every(index => cellule[index].textContent == player);
    })
};