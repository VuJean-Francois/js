//on va demander le nbr à l'utilisateur
    let number = parseInt(prompt("Saisissez un chiffre"));
    
    //condition pour vérifier si c'est bien un nombre
    if(Number.isInteger(number)){
        if(number >= 1 && number <= 50){

        
            let table = document.getElementById('table');
            for(let i=1; i<=10;i++){
            //console.log(i*number);
             //je sélectionne mon document dans le DOM
        
            // je vais afficher dans le dom l'opération et le résultat
            table.innerHTML += '<tr><td>'+number+'*'+i+'</td><td>'+number*i+'</td></tr>';
            }
        }else{
            alert('Veuillez entrer un nombre entre 1 et 50');
        }
    }else{
        alert('Veuillez entrer un nombre');
    }
    //affichage des tables de multiplication
    for(let l=0; l <= 10; l++){
        console.log('table de multiplication pour '+ l);
        //on fait les mutiplications
        for(let j=0; j<=10; j++){
            console.log(l+"*"+j+" ="+l*j);
        }
    }

/*for(let k=0; k<=4; k++){
    if(k==0){
        console.log("*");
    } if(k==1){
        console.log("**");
    } if(k==2){
        console.log("***");
    } if(k==3){
        console.log("****");
    } if(k==4){
        console.log("*****");
    }
}*/
let star ='';
for(let s=0; s<5; s++){
    star+= '*';
    console.log(star);
}


for(let r=10; r>=1; r--){
    console.log(r);
}