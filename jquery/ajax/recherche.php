<?php
$recherche = array('PHP','Javascript','HTML','Jquery','CSS');
$key = array_search($_POST['input'],$recherche);
if($key){
    echo 'Le mot '.strip_tags($_POST['input']).' a été trouvé';
}else{
    echo 'Aucun mot ne correspond à votre recherche';
}
?>