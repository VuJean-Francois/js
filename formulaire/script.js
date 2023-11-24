function verifCivilite(){
    const valeur = document.getElementById('civilite').value;
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    prenom.value = '';
    nom.value = '';
    document.getElementById('body').style.backgroundColor = 'brown';
    if(valeur == 'Non-binaire'){
        document.getElementById('nom').value = "Alaphilippe";
        document.getElementById('prenom').value = "Jean-Marie";
    } else if(valeur == 'Mme'){
        document.getElementById('body').style.backgroundColor= 'pink';
    } else if(valeur == 'Mr'){
        document.getElementById('body').style.backgroundColor = 'blue';
    } else{
        return false;
    }
}
function verifEmail(){
    const email = document.getElementById('email');
    /* Regex en attente */
    //const regex = "^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$";
    if(email.value != ''){
        email.className = 'valide';
        return true;
    }else{
        email.className = 'error';
        return false;
    }
}
function verifPassword(){
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('password2');
    // Si les 2 mots de passe ne sont pas vide
    if(password1.value != '' && password2.value != ''){
        // On vérifie si les mdp sont identique
        if(password1.value === password2.value){
            // On va vérifier la longueur
            if(password1.value.length >= 10){
                password1.className = 'valide';
                return true;
            } else{
                password1.className = 'error';
            }
        }else{
            password1.className = 'error';
        }
    } else{
        password1.className = 'error';
    }
    return false;
}
function verifAge(){
    const age = document.getElementById('age');
    if(age.value < 18){
        age.className = 'error';
    } else if(age.value > 60){
        age.className = 'error';
    }else{
        age.className = 'valide';
        return true;
    }
    return false;
}
function validForm(){
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const age = document.getElementById('age');
    const message = document.getElementById('message');

    if(!verifCivilite()){
        document.getElementById('civilite').className = 'error';
        message.innerHTML = '<span class="error">Veuillez saisir une civilité !!</span>';
        
    }  if(prenom.value == ''){
        prenom.className = 'error';
    }  if(nom.value == ''){
        nom.className = 'error';
    }  if(!verifEmail()){
        email.className = 'error';
    }   if(!verifPassword()){
        password1.className = 'error';
        password2.className = 'error';

    }  if(!verifAge()){
        age.className = 'error';
    } else {
        return true;
    }
    return false;
}