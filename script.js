var introAnimation = true;

$('body').on('mousemove', function(e){
	
	if(!introAnimation){
		
		var x = e.pageX;
		var y = e.pageY;

		$('.screen').css('animation', 'none');
		
		$('.animation-inner').css({
			'animation': 'none',
			'transform': 'rotateY(' + x + 'deg) rotateX(' + y + 'deg)'
		});
	}
	
});

$('body').on('mousedown', function(){
	$('body').addClass('click');
});

$('body').on('mouseup mouseleave', function(){
	$('body').removeClass('click');
});

setTimeout(function(){
	introAnimation = false;
}, 5000);