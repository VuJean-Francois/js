let personne = {
    nom: 'David',
    age: 30,
    adresse: {
        rue: '123 Rue Principale',
        ville:'Nevers'
    },
    parler: function(){
        return 'Bonjour, je suis '+ this.nom + '!';
    }
};
let voiture = {
    marque: 'Toyota',
    vitesseActuelle: 0,
    degats: 20,
    accident: function(choc){
        let retour = '';
        this.degats += choc;
        if(this.degats >= 80){
            
            retour += 'La voiture est bonne pour la casse!';
        }
        retour += ' La voiture est endommagé à '+ this.degats+ ' %.';
        return retour;
    },
    accelerer: function(acceleration){
        this.vitesseActuelle += acceleration;
        return 'La voiture accélère à ' + this.vitesseActuelle + ' km/h.';
    }
};

function Personne(nom, age){
    this.nom = nom;
    this.age = age;
    this.presentation = function(){
        return 'Je suis '+ this.nom + ' et j\ai ' + this.age + ' ans.';
    };
}



console.log(personne.nom);
console.log(personne.adresse.rue,personne.adresse.ville);
console.log(personne.parler());

console.log(voiture.accelerer(50));
console.log(voiture.accident(30));
delete voiture.marque;
voiture.marque = 'Lexus';
console.log(voiture.marque);

let personne1 = new Personne('Marvyn', 23);
let personne2 = new Personne('Denis', 30);

console.log(personne1.presentation());
console.log(personne2.presentation());
