document.addEventListener('DOMContentLoaded', function(){
    const card = document.querySelector('scratch-card');
    const overlay = document.querySelector('scratch-overlay');
    let isScratching = false;
    //Detection de la touche souris
    overlay.addEventListener('mousedown',function(){
        isScratching = true;
    });

    //relache de la touche de la souris
    overlay.addEventListener('mouseup', function(){
        isScratching = false;
    });

    //On va detecter le mouvement de la souris
    overlay.addEventListener('mousemove',function(e){
        //on verifie si on peut gratter
        if(isScratching){
            const percentScratched = getPercentScratched(e.offsetX,e.offsetY);
            if(percentScratched > 80){
                // si la partie à gratter est supérieur à 80%
                afficherLot();
            }
        }
    });
    //fonction qui va enlever les pixels
    function removeOverlay(x,y){
        const radius = 15; // rayon du pointeur
        const diametre = radius*2;
        overlay.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
        overlay.style.webkitClipPath = `circle(${radius}px at${x}px ${y}px)`;
    }
    //fonction qui va retourner la valeur en %
    function getPercentScratched(x,y){
        const totalArea = card.offsetWitdh*card.offsetHeight;
        const scratchedArea = x*y;
        return(scratchedArea/totalArea)*100;
    }
    //fonction pour afficher le lot
    function afficherLot(){
        alert("Qu'avez-vous gagné?")
    }
})