$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 500 );
	});

	$('#button-6').click(function() {
		$(this).animate({
			opacity: 0.2,
			marginTop: '0.2in',
			borderWidth: '10px'
		}, 1000 );
	});

$('#button-34').click(function() {
		$(this).animate({
			
			marginTop: '4.5in',
			borderWidth: '10px'
		}, 200 );
	});
$('#button-35').click(function() {
		$(this).animate({
			
			marginTop: '1.5in',
			borderWidth: '10px'
		}, 200 );
	});
$('#button-36').click(function() {
		$(this).animate({
			
			marginRight: '3in',
			borderWidth: '100px'
		}, 200 );
	});
});