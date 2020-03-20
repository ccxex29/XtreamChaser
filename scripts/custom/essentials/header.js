
// Hamburger Menu Animation
$(
function () {
	$('.hamburger-menu').click(function(){
		if ($(this).hasClass('hamburger-menu-active')) {
			$(this).removeClass('hamburger-menu-active');
		}
		else {
			$(this).addClass('hamburger-menu-active');
		}
		navMenu();
	});
}
);
