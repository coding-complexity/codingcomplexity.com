$(document).ready(function(){
	$( '#topheader .navbar-nav a' ).on( 'click', function () {
		$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );

	});
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 1050 && scroll < 1810){
			$('.headerLinks.active').removeClass('active');
			$("#productLink").addClass('active')
		}else if (scroll > 1810){
			$('.headerLinks.active').removeClass('active');
			$("#benefitLink").addClass('active')
		}else{
			$('.headerLinks.active').removeClass('active');
			$(".homepageLink").addClass('active')
		}
	});
});
