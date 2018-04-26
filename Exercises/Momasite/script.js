$(document).ready(function(){
	
$('#L3').click(function(){
    $('lightflavin').toggleClass('L4');
    $('.circle3').toggleClass('yellowcircle3');
    $('.circle4').toggleClass('orangecircle4');
    $('.circle5').toggleClass('redcircle5');    
});

$('.circle5').click(function(){
    $('.circle2').toggleClass('greencircle2');
    $('.circle3').toggleClass('yellowcircle3');
    $('.circle4').toggleClass('orangecircle4');
    $('.circle5').toggleClass('redcircle5');
});

$('.circle2').click(function(){
    $('.circle2').toggleClass('greencircle2');
});

$('.circle3').click(function(){
    $('.circle3').toggleClass('yellowcircle3');
});

$('.circle4').click(function(){
  $('.circle4').toggleClass('orangecircle4');
  });

});