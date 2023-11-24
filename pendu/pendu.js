const mot = ["Assigny", "petanque", "boule", "pain", "gateaux", "javasxript", "voiture"];
let selection = mot[Math.floor(Math.random()*mot.length)];
let utile = document.getElementById("utile");
let displayMot = [];
let incorrectMot = 0;
const partie = 6;

//on initialise le mot caché()
function initialiseMot(){
    for(let i=0; i < selection.length; i++){
        displayMot.push("_");
    }
    document.getElementById("motadeviner").textContent = displayMot.join(" ");
}

// on verifie la lettre saisie par l'utilisateur
function checkLettre(){
    const lettre = document.getElementById("lettre").value.toLowerCase();
    const message = document.getElementById("message");
    document.getElementById("lettre").value = "";

    if(lettre.length !== 1 || !lettre.match(/[a-z]/)){
        message.textContent = 'Veuillez entrer une lettre valide';
        return false;
    }
    
    if(selection.includes(lettre)){
        for(let i=0; i<selection.length; i++){
            if(selection[i] == lettre){
                displayMot[i] = lettre;
            }
        }
        document.getElementById("motadeviner").textContent = displayMot.join("");
        // si toute les lettres sont trouvés
        if (!displayMot.includes("_")){
            message.textContent = "Félicitations! vous avez gagné!";
        }
    } else{
        incorrectMot++;
        if(incorrectMot >= partie){
            message.textContent = 'tu es claqué au sol! Le mot était :'+ selection;
            document.getElementById('lettre').setAttribute('disabled', 'disabled');
            document.getElementById('bouton').setAttribute('disabled', 'disabled');
            const relance = document.getElementById('relance');
            relance.style.display = "block";
            relance.addEventListener ("click", function(){
                //on charge la page
                alert("Vous allez etre sattelisé");
                location.reload();
            });
            
        } else{
            if(utile.value != ''){
                utile.value += lettre;
            } else{
                utile.value = lettre;
            }
            message.textContent = `la lettre "${lettre}" n'est pas dans le mot. Il vous reste ${partie-incorrectMot}"essais`;
        }
    }
}
    initialiseMot();
