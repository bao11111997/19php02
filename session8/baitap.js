var binhBook = 27;
var minhBook = binhBook/3;
var soLanChuyen = 0;
while (binhBook != minhBook*2) {
	binhBook--;
	minhBook++;
	soLanChuyen++;
}
document.write('Bai 1 :<br>So quyen sach Binh chuyen cho Minh :' + soLanChuyen)
document.write('<br>')
var money = 2000;
var candy = 0;
var candyYo = 0;
while (money > 0) {
	money -= 200;//money = money -200
	candy++;
	candyYo++;
	//doi vo keo
	while (candyYo >= 2) {
		candyYo -= 2;
		candy++;
		candyYo++;
	}
}
document.write('Bai 2 :<br>So keo mua duoc la: '+ candy)
document.write('<br>')
var keo = 0;
var usd = 0;
var eu = 0;
while (keo < 50) {
	usd -= 5;
	eu += 3;
	keo++;
	while(eu > 0) {
		eu -= 2;
		usd +=3;
		keo++;
	}
}
document.write('Bai 3 :<br>So USD mua keo:' + usd + ' usd')
document.write('<br>')


document.write('<br>')
var soTienGui = 2000000;
var laiSuat = 0.1;
var tienThuDuoc = 0;
for (var i = 1; i <= 30; i++) {
	soTienGui * laiSuat + soTienGui = tienThuDuoc;

}
document.write(tienThuDuoc)