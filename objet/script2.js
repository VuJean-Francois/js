function Produit(nom, prix, description){
    this.nom = nom;
    this.prix = prix;
    this.description = description;

    this.infosProduit = function(){
        return this.nom+' '+ this.prix+' '+ this.description;
    };
}
let aliment1 = new Produit('kinder', 2, 'noisette');
let aliment2 = new Produit('ferrero', 2, 'noisette');

console.log(aliment1.infosProduit());
console.log(aliment2.infosProduit());

function Etudiant(nom, age, niveau){
    this.nom = nom;
    this.age = age;
    this.niveau = niveau;

    this.presentation = function(){
        return 'Je suis '+ this.nom + ' et j\etudie en '+ this.niveau+'.';
    };
}

let etudiant1 = new Etudiant('Marvyn',23 , 'BTS');

console.log(etudiant1.presentation());