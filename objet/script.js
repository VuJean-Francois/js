let voiture = {
    marque: '',
    annee: 2023,
    estNouvelle: true
}
let livre = {
    titre: 'Hunger Games vol.1',
    auteur: 'Suzanne Collins',
    pages: 410,
    information: function(){
        return 'Le titre du livre est : ' + this.titre + ', a été écris par ' +this.auteur+ ' et contient ' + this.pages+' pages.';
    }
};

console.log(livre.information());

let personne = {
    nom: 'Tom',
    age: 30,
    adresse: '2 rue Henri Moissan',
    anniversaire: function(){
        this.age++
        return 'joyeux '+ this.age+' ans.'
    }

}

console.log(personne.anniversaire());
console.log(personne.anniversaire());

let produit = {
    nom: 'Kinder Bueno',
    prix: 3.4,
    quantite: 100,
    achat: function(nbr){
        this.quantite -= nbr;
        return 'il reste ' + this.quantite+' '+this.nom+'.';
    }
}

console.log(produit.achat(10));

let cercle = {
    rayon: 5.5,
    circonference: '',
    surface: '',
    calcul1: function(){
        this.circonference += 2*Math.PI*this.rayon;
        return 'La circonférence du cercle est de: '+this.circonference+' m².';
    },
    calcul2: function(){
        this.surface += Math.PI*this.rayon*this.rayon;
        return 'La surface est de: '+ this.surface + ' m^3.';
    }
}

console.log(cercle.calcul1());
console.log(cercle.calcul2());