
$(document).ready(main);

var contador = 0;

function main(){
	$('.btn').click(function(){
		// $('nav').toggle();

		if(contador == 1){
			$('.menu_bar').animate({
				left: '-100%'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.menu_bar').animate({
				left: '0'
			});
		}

	});



};
