<?php
if(!empty($_POST['email']) && !empty($_POST['password']))
{
    if(($_POST['email'] == 'florian.mancieri@campuscci18.fr') && ($_POST['password'] == '123456'))
    {
        echo 'Vous êtes connecté';
    }
    else
    {
        echo 'Login et/ou mot de passe incorrect !';
    }
}
else
{
    echo 'tricheur !';
}
?>