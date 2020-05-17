function validateName() {//it validates the name input
	var Name = document.getElementById("Name").value;
	var rel = /^[a-zA-Z\s\'\-]{2,15}$/;

	if (rel.test(Name)) {
		document.getElementById("NamePrompt").style.color="green";
		document.getElementById("NamePrompt").innerHTML ="valid";
		return true;

	}
	else{
		document.getElementById("NamePrompt").style.color="red";
		document.getElementById("NamePrompt").innerHTML="Enter 2-15 characters";
		return false;
	}
}

function validateAge() {//it validates the age input
	var age = document.getElementById("Age").value;

	if (age=="") {
		document.getElementById("AgePrompt").style.color="red";
		document.getElementById("AgePrompt").innerHTML ="Enter your age";
		return false;

	}
	else{
		document.getElementById("AgePrompt").style.color="green";
		document.getElementById("AgePrompt").innerHTML="valid";
		return false;
	}
}


function validateUName() {//it validates the username input
	var UName = document.getElementById("UName").value;
	var re2 = /^[a-zA-Z\s\'\-]{2,15}$/;

	if (re2.test(UName)) {
		document.getElementById("UNamePrompt").style.color="green";
		document.getElementById("UNamePrompt").innerHTML ="valid";
		return true;

	}
	else{
		document.getElementById("UNamePrompt").style.color="red";
		document.getElementById("UNamePrompt").innerHTML="Enter 2-15 characters";
		return false;
	}
}



