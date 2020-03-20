function navMenu() {
	
	var slidingmenu = [
		'Home',
		'Gallery',
		'Characters',
		'Lore',
		'Pre-Registration'
	];
	if(!$('.slidingmenu').hasClass('slidden')){
		$('.slidingmenu').addClass('slidden');
		var i = 0
		var inv = setInterval(
			function (){
				$('.slidingmenu .slidingmenu-content[aria-label='+slidingmenu[i]+']').addClass('slidingmenu-content-active');
				i++;
				if (i == slidingmenu.length)
					clearInterval(inv);
			}
		, 100);
	}
	else {
		$('.slidingmenu').removeClass('slidden');
		var i = (slidingmenu.length)-1
		var inv = setInterval(
			function (){
				$('.slidingmenu .slidingmenu-content[aria-label='+slidingmenu[i]+']').removeClass('slidingmenu-content-active');
				i--;
				if (i < 0) 
					clearInterval(inv);
			}
		, 100);
	}
}

