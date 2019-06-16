//Cho 1 biến chứa họ tên đầy đủ. Ví dụ: Tran Van Tuan
var myName = prompt("My name", "Trinh Thanh Bao");
document.write(myName);
document.write('<br>');

//Kiểm tra xem họ tên hôm bao nhiêu ký tự?
function replaceSpace(replaceString) {
	var newreplaceString;
	while (replaceString.indexOf(' ') != -1) {
		newreplaceString = replaceString.replace(" ", "");
		replaceString = newreplaceString;	
	}
	return replaceString;
}
document.write('So ky tu:' + replaceSpace(myName).length);
document.write('<br>');

//Tách họ, tên đệm, tên ra?
function splitFirstName(name) {
	// cat ho ra la: cat trong ho va ten tinh tu dau
	//den khoang trong dau tien
	var firstSpace = name.indexOf(' ');
	var firstName = name.substring(0, firstSpace);
	return firstName;
}
document.write('Ho :' + splitFirstName(myName));
document.write('<br>');

function splitMiddleName(name) {
	// cat ten dem ra la: cat trong ho va ten tinh tu khoang trong
	//dau tien den khoang trong cuoi cung
	var firstSpace = name.indexOf(' ');
	var lastSpace = name.lastIndexOf(' ');
	var middleName = name.substring(firstSpace, lastSpace);
	return middleName;
}
document.write('Ten dem :' + splitMiddleName(myName));
document.write('<br>');

function splitLastName(name) {
	var lastSpace = name.lastIndexOf(' ');
	var lastName = name.substring(lastSpace, name.length);
	return lastName;
}
document.write('Ten :' + splitLastName(myName));
document.write('<br>');

//Viết họ tên đệm lên và in ra đầy đủ
var middleName = splitMiddleName(myName);
document.write('Viet hoa ten dem la:' + middleName.toUpperCase());
document.write('<br>');

//Kiểm tra tên có ký tự n không? có và không có phân biệt hoa thường
var lastName = splitLastName(myName);
function checkCharInName(checkChar, name) {
	if (name.indexOf(checkChar) != -1) {
		return true;
	}
	return false;
}
var yesNoInName = checkCharInName('n', lastName)?'Co':'Khong';
document.write(yesNoInName + ' ky tu n trong ten cua ban');

document.write('<br>');

//Thay thế tên bằng 19PHP02 và in ra đầy đủ
document.write('Thay the ten bang 19PHP02 la: ' + myName.replace(lastName, ' 19PHP02'));
document.write('<br>');

//Kiểm tra trong họ tên gồm bao nhiêu ký tự n?
function checkCharInFullName(checkChar, fullName) {
	var checkChar = checkChar.toLowerCase();
	var fullName = fullName.toLowerCase();
	var count = 0;
	var tmpName = ''; 
	while (fullName.indexOf(checkChar) != -1) {
		count++;
		tmpName = fullName.substring(fullName.indexOf(checkChar)
		 	+ checkChar.length, fullName.length);
		fullName = tmpName;
	}
	return count;
}
document.write('Co ' + checkCharInFullName('n', myName) + ' n trong ten cua ban');
document.write('<br>');

//Bôi vàng ký tự a trong tên nếu có?
function changeColorCharInName(checkChar, name) {
	var checkCharLower = checkChar.toLowerCase();
	var nameLower = name.toLowerCase();
	var newName = '';
	var newNameTmp = '';
	var lastPosition = 0;
	while (nameLower.indexOf(checkChar) != -1) {
		newNameTmp = nameLower.substring(0, nameLower.indexOf(checkChar))
		 + '<span>' + checkChar + '</span>';
		 nameLower = nameLower.substring(nameLower.indexOf(checkChar)
		  + 1, nameLower.length);
		 newName += newNameTmp;
	}
	if (name.lastIndexOf(checkChar) < name.length) {
		newName += name.substring(name.lastIndexOf(checkChar) + 1, name.length);
	}
	return newName;
}
document.write(changeColorCharInName('a' , lastName));

