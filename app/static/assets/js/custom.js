$(document).ready(function(){
	$( '#topheader .navbar-nav a' ).on( 'click', function () {
		$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );

	});
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 550 && scroll < 1310){
			$('.headerLinks.active').removeClass('active');
			$("#productLink").addClass('active')
		}else if (scroll > 1310){
			$('.headerLinks.active').removeClass('active');
			$("#benefitLink").addClass('active')
		}else{
			$('.headerLinks.active').removeClass('active');
			$(".homepageLink").addClass('active')
		}
	});
});
