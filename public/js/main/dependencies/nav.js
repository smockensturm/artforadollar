
	$('div[data-open-modal]').click(function(e){
			e.preventDefault();

			$(this).toggleClass('is-active')

			 if ( $('body').attr('data-modal') ) {
				 $('body').removeAttr('data-modal');
			 } else {
				 $('body').attr('data-modal', $(this).attr('data-open-modal'));
			 }

	});

	$('div[data-open-modal="navigation-modal"]').click(function(){
		$('.navigation-modal div[data-close-modal="navigation-modal"]').first().focus();
	});


