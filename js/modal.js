// get modal
var modal = document.getElementById('myModal');
// get img
var img = document.getElementById('myImg');
// get modal img
var modalImg = document.getElementById('img01');

// display img onclick
img.onclick = function () {
	modal.style.display = "block";
	modalImg.src = this.src;
}

// get closing cross 
var span = document.getElementByClassName('close')[0];

//close window cross onclick
span.onclick = function() {
	modal.style.display = "none";
}