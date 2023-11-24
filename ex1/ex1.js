function sommeTab(){
    let tableau = [5,8,17,21,23,92];
    for(let i=0; i<=tableau.length; i++){
        let somme = tableau[i]+tableau[i+1];
        let resultat = somme;
    }
    return resultat;
}

function trouveMot(){
    let liste = ["a","b","c","d"];
    let mot = prompt("saisissez une lettre entre a et d");
    for(let j=0; j<=liste.length;j++){

        if(mot === liste[j]){
            return true;
        } else{
            return false;
        }
        
    }
    console.log(mot);
}

function doubleElem(){
    let tab = [1,2,3,4,5];
    let double = [];

    for(let k=0; k<=tab.length; k++){
        double[k] = tab[k]*2;
    }
    console.log(double);
}

function concatenerTab() {
    let tab1 = [1,2,3,4];
    let tab2 = [5,6,7,8];
    let nTab = [];

    for(let m=0; m<= tab1.length && tab2.length; m++) {
        nTab[m] = tab1[m] + tab2[m];
    }
    return nTab;
    
}

sommeTab();
trouveMot();
doubleElem();
concatenerTab();