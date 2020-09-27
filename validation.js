function validation(){
	var name = document.getElementById('name').value;
	var pass = document.getElementById('pass').value;

	if(name == ""){
				document.getElementById('name').innerHTML =" ** Please fill the Studentname field";
				return false;
			}
			if((name.length <= 2) || (nme.length > 40)) {
				document.getElementById('name').innerHTML =" ** Studentname lenght must be between 2 and 40";
				return false;	
			}
			if(!isNaN(name)){
				document.getElementById('name').innerHTML =" ** only characters are allowed";
				return false;
			}


}