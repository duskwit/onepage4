function openNav() {
	// get side nav, set width
	document.getElementById('mySidenav').style.width = "330px";
	// move page
	document.getElementById('main').style.marginLeft = "330px";
	// give opacity
	// document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	// get icon and move
	document.getElementById('openIcon').style.display = "none";
}

/* Open the sidenav */
function openNavMobile() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById('openIconMobile').style.display = "none";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('openIconMobile').style.display = "block";
    document.getElementById('mySidenav').style.width = "0";
    // move page back
    document.getElementById('main').style.marginLeft = "0";
    // give backgroundColor 
    document.body.style.backgroundColor = "white";
    // get icon and move
    document.getElementById('openIcon').style.display = "block";
}