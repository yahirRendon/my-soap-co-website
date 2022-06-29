/**
 * scripts for toggling navigation and image change
 */
var showMenu = true; //Track if nav bar will show or collapse on small screens
var imgDisplay = 1; //determines which image to display
var charImage;

//Toggle between showing or collapsing nav bar onClick
function showHideNav() {
	if(showMenu) {
    	document.getElementsByClassName("dropdown-main-content")[0].style.display = "block";
    	showMenu = false;
	} else {
		document.getElementsByClassName("dropdown-main-content")[0].style.display = "none";
		showMenu = true;
	}
}

//Reset dropdown content in nav bar when screen is > 800
function resetNav() {
	if(screen.width > 800) {
		document.getElementsByClassName("dropdown-main-content")[0].style.display = "inline";
	}
}

//Change Charcoal Soap Image onClick
function charImageChanger() {
	//Update URL path depending on imgDisplay value and prep 
	//imgDisplay value for next click
	switch(imgDisplay) {
		case 1:
			charImage = 'url(img/soaps/char_bars2.jpg)';
			imgDisplay = 2;
			break;
		case 2:
			charImage = 'url(img/soaps/char_bars3.jpg)';
			imgDisplay = 0;
			break;
		default:
			charImage = 'url(img/soaps/char_bars.jpg)';
			imgDisplay = 1;
			break;
	}
	//Display appropriate image
	document.getElementsByClassName("charcoal-product-img")[0].style.backgroundImage = charImage;
}