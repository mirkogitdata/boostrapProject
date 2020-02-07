$(window).on('scroll', function() {
		
		if($(window).scrollTop()){
			
			$('nav').addClass('navScroll');
		}
		
		else {
			
			$('nav').removeClass('navScroll');
		}
        
      
	});