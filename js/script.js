$('body').scrollspy({ target: '#nav1'});


// card boxes page about even colors

$('.about-boxes .card:even').addClass('bg-danger');
$('.about-boxes .card:odd').addClass('bg-dark');

let l=console.log;


//navbar is scrolled 

$(window).scroll(function(){
    if (scrollY>30){
     
      //  $('#nav1').css({background:"dark",opacity:"0.8"});
        $('#nav1').addClass('navdark');
    }else{
        $('#nav1').removeClass('navdark');
    }
    
})





/*************Modal galery****************/

//hide modal after close

$(".wrapper").click(function(e){
    l(e);
if (e.target.tagName=='SPAN' || e.target.className=="wrapper"){
    $(".wrapper").addClass('d-none');
}

});


//show modal galery after click

$('.galery img').click(function(e){
   // l($( window ).width());
    //l($( document ).width());
    if($( document ).width()>786){
    
    $(".wrapper").removeClass('d-none');


    $('.modalG-body img').attr('src',$(this).attr('src'));
}
});
