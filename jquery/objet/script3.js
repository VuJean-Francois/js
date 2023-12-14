class Personne {
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }

    presentation(){
        return `Je suis ${this.nom} et j'ai ${this.age} ans.`;
    }
}

let individu = new Personne('Alice', 30);
console.log(individu.presentation());