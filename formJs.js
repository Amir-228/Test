function submitForm(){
	console.log("hi");
	var userName = document.getElementsByTagName("input");
	var input = document.getElementsByClassName("input1");
	var user = document.getElementById("user");
	var pass = document.getElementById("pass");
	
	console.log(user);
	console.log(userName);
	
	for(i = 0; i < userName.length;i++){//using tag name
		console.log(userName[i].value);
	}
	j = 0;
	while(j < input.length){//using class name
		alert(userInfo[j].value);
		j++;
	}
	//using id 
	console.log(user.value);
	console.log(pass.value);
	
}