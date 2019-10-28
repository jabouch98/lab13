//script to calculate the subtotal

function calcSub(){
	var unpopped = document.getElementById("unpopped");
	var caramel = document.getElementById("caramel");
	var carNut = document.getElementById("carNut");
	var toffey = document.getElementById("toffey");
	var total = 0;
	total = total + (unpopped * 3.00) + (caramel * 3.50) + (carNut * 4.50) + (toffey * 5.00);
	document.getElementById("output").value = total;
}