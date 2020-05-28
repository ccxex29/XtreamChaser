function navMenu() {
	var inv;
	var slidingmenu = [
		'Home',
		'Gallery',
		'Characters',
		'Lore',
		'Pre-Registration'
	];
	if (inv)
		clearInterval(inv);
	if(!$('.slidingmenu').hasClass('slidden')){
		$('.slidingmenu').addClass('slidden');
		var i = 0
		inv = setInterval(
			function (){
				$('.slidingmenu .slidingmenu-content[aria-label='+slidingmenu[i]+']').addClass('slidingmenu-content-active');
				i++;
				if (i === slidingmenu.length)
					clearInterval(inv);
			}
		, 50);
	}
	else {
		$('.slidingmenu').removeClass('slidden');
		var i = (slidingmenu.length)-1
		inv = setInterval(
			function (){
				$('.slidingmenu .slidingmenu-content[aria-label='+slidingmenu[i]+']').removeClass('slidingmenu-content-active');
				i--;
				if (i < 0) 
					clearInterval(inv);
			}
		, 50);
	}
}

$(window).click(function (event) {
	if(!$(event.target).is('.slidingmenu') && 
		!$(event.target).is('div.header-wrapper') &&
		!$(event.target).is('div.playnow-header-text') &&
		!$(event.target).is('span.material-icons.btn-play-left') &&
		!$(event.target).is('span.material-icons.btn-play-right') &&
		!$(event.target).is('span.hmenu-1') && 
		!$(event.target).is('span.hmenu-2') && 
		!$(event.target).is('span.hmenu-3') && 
		!$(event.target).is('div.hamburger-wrapper') && 
		!$(event.target).is('div.hamburger-menu') && 
		!$(event.target).is('div.leftHeader') && 
		!$(event.target).is('div.rightHeader') && 
		$('.slidingmenu').hasClass('slidden')) {
		function triggerNav(){
			if ($('.hamburger-menu').hasClass('hamburger-menu-active')) {
				$('.hamburger-menu').removeClass('hamburger-menu-active');
			}
			else {
				$('.hamburger-menu').addClass('hamburger-menu-active');
			}
			navMenu();
		}
		triggerNav();
	}
	console.log(event.target);
});