function Personne(nom){
    this.nom = nom;
}
Personne.prototype.presentation = function(){
    return 'Je suis ' + this.nom;
}
function Etudiant(nom, niveau){
    Personne.call(this, nom);
    this.niveau = niveau;
}
Etudiant.prototype = Object.create(Personne.prototype);
Etudiant.prototype.constructor = Etudiant;

Etudiant.prototype.presentationEtendue = function(){
    return 'Je suis '+ this.nom + ' et je suis en '+ this.niveau + 'ème année.';
};

let etudiant1 = new Etudiant('Charlie', '2');
let etudiant2 = new Etudiant('Alice', 3);

console.log(etudiant1.presentationEtendue());
console.log(etudiant1.presentation());
console.log(etudiant2.presentationEtendue());
console.log(etudiant2.presentation());