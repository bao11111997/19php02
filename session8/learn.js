//alert('Hello 19PHP02');
document.getElementById('demo').innerHTML = '<h3>Hello World</h3>';
document.write('<h1>Hello document</h1>');
console.log('Hello test');
var x = 5;
x = x + 9;
console.log(x);
var varName;
var varName1 = 'PHP02';
var varName2, varName3;
var userName;

var x = 8;
var y = 9;
document.write(x + y);
document.write('<br>');
document.write(x - y);
document.write('<br>');
document.write(x * y);
document.write('<br>');
document.write(x / y);
document.write('<br>');
document.write(x % y);
document.write('<br>');
function nameFuntion()
{
	document.write('My Function');
}
nameFuntion();
document.write('<br>');

function sumNumber(a, b)
{
	return a + b;
}
document.write(sumNumber(7, 8));
var c = sumNumber(5, 8);
console.log(c);

var d = sumNumber();
console.log(d);
//if else
//if (dieu kien) {
	// Thuc hien cau lenh neu dieu kien dung
//}

//if (dieu kien) {
	//Thuc hien cau lenh neu dieu kien dung
//} else {
	//Thuc hien cau lenh neu dieu kien sai
//}

//if (dieu kien 1) {
	//Thuc hien cau lenh neu dieu kien 1 dung
//} elseif (dieu kien 2) {
	//Thuc hien cau lenh neu dieu kien 2 dung
//} else {
	//Thuc hien cau lenh neu dieu kien 1 va dieu kien 2 sai
//}
document.write('<br>');
var n = 10;
if (n % 2 == 0) {
	document.write('chan');
} else {
	document.write('le');
}
document.write('<br>');
var a = 5;
var b = 2;
var c = 1;
if (c > a, c > b) {
	document.write('c lon nhat');
}else if (a > b, a > c){
	document.write('a lon nhat')
}else {
	document.write('b lon nhat')
}
document.write('<br>');

for (var i = 0; i < 10; i++) {
	document.write('Number' + i + '<br>');
}
document.write('<br>');

for (var i = 0; i <= 100; i++) {
	if (i % 15 ==0) {
		document.write('So ' + i + ' chia het cho 15 <br>');
	}else if(i % 3 == 0) {
		document.write('So ' + i + ' chia het cho 3 <br>');
	}else if (i % 5 == 0) {
		document.write('So ' + i + ' chia het cho 5 <br>');
	}else if (i % 3 == 0, i % 5 ==0) {
		document.write('So ' +i+ 'chia het cho 3, So' +i+ ' chia het cho 5')
	}
}
document.write('<br>');

var m = 5;
do {
	document.write('Number ' + m + '<br>');
	m++;
}while (m < 10);