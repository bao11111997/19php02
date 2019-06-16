//Tạo form đăng ký gồm:
//Tên (input text)
//Email (input text)
//Gioi tính (input radio)
//Ngày sinh (input date)
//Quên quán ((input select option)
//2. Validate các trường không được để trống
//3. Nếu các trường validate OK thì thông báo đã đăng ký thành công
function checkForm() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	if (name == '') {
		document.getElementById('errName').innerHTML = 'Please input your name';
	}else if (email == '') {
		document.getElementById('errEmail').innerHTML = 'Please input your Email';
	}else {
		alert('Dang ky thanh cong');
	}
	if (male || female) {
		document.getElementById('errSex').innerHTML = ' ';
	} else {
		document.getElementById('errSex').innerHTML = 'Please input your Email';
	}
}
