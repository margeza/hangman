password = password.toUpperCase();

var length = password.length;
var hiddenPassword = "";
var counter = 0;

for (var i = 0; i < password.length; i++) {
	if(password.charAt(i) == " ") hiddenPassword = hiddenPassword + " ";
	else hiddenPassword += "_";
}

function write_password(){
	document.getElementById("password").innerHTML = hiddenPassword;
}

window.onload = start;

function start(){

	var div_content = "";

	for (var i = 0; i <= 25; i++) {
		var number = 65 + i;
		var chr = String.fromCharCode(number);
		div_content += '<div class="letter default" onclick="check('+(number)+')" id="let'+number+'">'+chr+'</div>';
		if((i+1) % 13 == 0) div_content += '<div style="clear:both;"></div>';
	}

	document.getElementById("alphabet").innerHTML = div_content;

	write_password();
}

function check(number){
	var guessed = false;
	document.getElementById("let"+number).classList.remove('default');
	document.getElementById("let"+number).setAttribute("onclick", ";");

	for (var i = 0; i < password.length; i++) {
		if(password.charAt(i) == String.fromCharCode(number)){
			hiddenPassword = hiddenPassword.substr(0, i) + password.charAt(i) + hiddenPassword.substr(i+1);
			guessed = true;
		}
	}

	if (guessed) {
		document.getElementById("let"+number).classList.add('guessed');
		write_password();
	}else{
		document.getElementById("let"+number).classList.add('wrong');
		counter++;
		document.getElementById("hangman").innerHTML = '<img src="https://storage.googleapis.com/hangman_img/h'+counter+'.jpg">';
	}

	if(password == hiddenPassword){
		document.getElementById("alphabet").innerHTML = 'Goooood job!!! Do you want to play</br></br><span class="reset" onclick="location.reload()">AGAIN?</span>';
	}

	if(counter >= 10){
		document.getElementById("alphabet").innerHTML = 'Game Over!</br>Correct answer: '+password+'</br>Do you want to play</br></br><span class="reset" onclick="location.reload()">AGAIN?</span>';
	}
}