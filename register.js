function validate(){
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var address = document.getElementById('address').value;
	var nationality = document.getElementById('nationality').value;
	var temp_gender = document.getElementsByName('gender');
	var checkBox = document.getElementById("checkbox");
	var gender;

	if(name=="" || phone=="" || address=="" || nationality=="" || !temp_gender[0].checked && !temp_gender[1].checked){
		alert("All field must be filled!");
		return false;
	}
	else if(name.length<2 || name>30){
		alert("Name must be between 2-30 characters");
		return false;
	}
	else if(phone.length<10 || phone.length>13){
		alert("Phone length must be between 10-13 numbers");
		return false;
	}
	else if(isNaN(phone)){
		alert("Phone must be in number");
		return false;
	}
	else if(address.endsWith("Street")){
		alert("Address must ends with Street");
		return false;
	}
	else if(!checkBox.checked){
		alert("You must agree to the terms first.")
		return false;
	}
	else{
		if(temp_gender[0].checked)
			gender= "Male";
		else
			gender="Female";

		alert("Register Success \n" + name + "\n" + phone + "\n" + address + "\n" + nationality +"\n"+ gender);
	
		return true;
	}

}
