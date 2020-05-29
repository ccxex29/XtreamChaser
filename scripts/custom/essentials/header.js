
// Hamburger Menu Animation
$(
() => {
	$('.hamburger-menu').click(
		function triggerNav(){
			if ($(this).hasClass('hamburger-menu-active')) {
				$(this).removeClass('hamburger-menu-active');
			}
			else {
				$(this).addClass('hamburger-menu-active');
			}
		navMenu();
		}
	);
});
