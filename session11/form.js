function checkForm() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	if (name == '') {
		alert('Please input your name');
		document.getElementById('errName').innerHTML = 'Pleaseinput your name';
	} else {
		document.getElementById('errName').innerHTML = '';
	}
	if (password == '') {
		alert('Please input your password');
		document.getElementById('errPassword').innerHTML = 'Pleaseinput your Password';
	}else {
		document.getElementById('errPassword').innerHTML = '';
	}
}
