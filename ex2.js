// fonction ajouter une tache
let taches = [];
function ajouterTache(nouvelleTache){
    taches.push(nouvelleTache);
}

// fonction pour enlever une tache

function supprimerTache(index){
    taches.splice(index,1);
}

// fonction pour les afficher les taches
function afficheTaches(){
    console.log('liste des tâches');
    taches.forEach((tache,index) => {
        console.log(`${index+1}, ${tache}`);
        
    });
}

//exemples d'utilisation
ajouterTache('Aller faire les courses.');
ajouterTache('Aller à la cuisine.');
afficheTaches();
//on va supprimer la premiere tache
supprimerTache(0);
afficheTaches();