$(document).ready(function(){
    $('button[name="action1"]').click(function(){
        //je sélectionne le p dans dans la div ayant la classe toto
        $('.toto p').empty().text('Vive Titi!');
    });
    $('input[type="color"]').on('blur',function(){
        let couleur = $(this).val();
        if(couleur == '#000000'){
            $('body').addClass('dark');
        }else{
            $('body').removeClass('dark');
        }
        $('body').css('background-color',couleur);
    });
    $('.faq').click(function(){
        $('p',this).toggle();
    });
    $('button[name="action2"]').click(function(){
        let width = $('.rouge').css('width');
        let height = $('.rouge').css('height');
        $('.rouge').animate({
            width: "50%",
            height: "450px",
            opacity: 0.5,
        },2500, function(){
        $('.rouge').animate({
            width: width,
            height: height,
            opacity: 1,
        },3000);
    });
    });
    $('#slide').click(function(){
        $('.animation').slideToggle(2000);
    });
    $('#fade').click(function(){
        $('.animation').fadeOut('slow');
    });
    $('#btn-ajax').click(function(){
        $('#ajax').load('ajax.html');
    });
});