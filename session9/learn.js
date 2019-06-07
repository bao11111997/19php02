function changeContent(color, kickthuocchu){
	document.getElementById('demo1').innerHTML = 'Ok1';
	document.getElementById('demo2').innerHTML = 'Ok2';
	document.getElementById('demo2').style.color = color;
	document.getElementById('demo2').style.fontSize = kickthuocchu;
}
function image1() {
	document.getElementById('img5').src = '0.jpg';
	document.getElementById('text').innerHTML = 'Quang Hai';
	document.getElementById('img1').style.border = '10px solid red';
	document.getElementById('img2').style.border = 'none';
	document.getElementById('img3').style.border = 'none';
	document.getElementById('img4').style.border = 'none';
	
}
function image2() {
	document.getElementById('img5').src = '1.jpg';
	document.getElementById('text').innerHTML = 'Neymar';
	document.getElementById('img2').style.border = '10px solid red';
	document.getElementById('img1').style.border = 'none';
	document.getElementById('img3').style.border = 'none';
	document.getElementById('img4').style.border = 'none';
}
function image3() {
	document.getElementById('img5').src = '2.jpg';
	document.getElementById('text').innerHTML = 'Cr7';
	document.getElementById('img3').style.border = '10px solid red';
	document.getElementById('img2').style.border = 'none';
	document.getElementById('img1').style.border = 'none';
	document.getElementById('img4').style.border = 'none';
}
function image4() {
	document.getElementById('img5').src = '3.jpg';
	document.getElementById('text').innerHTML = 'Larm';
	document.getElementById('img4').style.border = '10px solid red';
	document.getElementById('img2').style.border = 'none';
	document.getElementById('img3').style.border = 'none';
	document.getElementById('img1').style.border = 'none';
}