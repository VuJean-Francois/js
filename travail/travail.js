const bouton = document.getElementById('bouton');
bouton.addEventListener('click',function(){
    let civilite = document.getElementById('civilite');
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    const message = document.getElementById('message');
    //on va vérifier si les informations sont saisies
    if(civilite.value != '' && prenom.value != '' && nom.value != ''){
        // on écrit dans le dom
        message.innerHTML = 'bonjour <strong>'+civilite.value+' '+prenom.value+' '+nom.value+'<strong>';
        civilite.value = '';
        prenom.value = '';
        nom.value = '';
    }
});

function chargeListe(tableau){
    
    let str = '';

    for(i=0; i<=tableau.length; i++){
        str += '<option value="' + tableau[i] + '">' + tableau[i] + '</option>';
    }
    return str;
}
const enfants = document.getElementById('enfants');
// on va charger la liste au click de la souris
enfants.addEventListener('mousedown', function(){
    let tranche = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let liste = chargeListe(tranche);
    enfants.innerHTML = liste;
});
const region = document.getElementById('regions');
region.addEventListener('mousedown', function(){
    let regions = ['Auvergne', 'Bretagne', 'Centre', 'Ile de France', 'Guyane', 'Vierzon']
    region.innerHTML = chargeListe(regions);
});
//fonction qui va compter le nombre de caractères
const texte = document.getElementById('texte');
texte.addEventListener('keyup', function(){
    let nb = document.getElementById('nb');
    let nb_texte = texte.value.length;
    nb.innerText = nb_texte;
    // on verifie si le nombre de caractère est suffisant pr valider le formulaire
    if(nb_texte >= 100){
        document.getElementById('bouton').removeAttribute('disabled', false);
        document.getElementById('bouton').style.backgroundColor = 'green';
        document.getElementById('bouton').style.color = 'white';
    } else{
        document.getElementById('bouton').setAttribute('disabled','disabled');
        document.getElementById('bouton').style.backgroundColor = 'red';
        document.getElementById('bouton').style.color = 'white';
    }
});
bouton.addEventListener('mouseover', function(){
    //on va generer une position aléatoire
    const largeur = screen.width;
    const hauteur = screen.height;
    let random = Math.floor(Math.random()*largeur);
    let random_h = Math.floor(Math.random()*hauteur);
    // on place notre bouton en css
    bouton.style.postion = 'absolute';
    bouton.style.top = random_h +'px';
    bouton.style.left = random +'px';
});