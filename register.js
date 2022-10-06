function validateRegister(){
	var username= document.getElementById("uname");
	var password= document.getElementById("pword");
	var name= document.getElementById("ne");
	var surname= document.getElementById("srname");
	var email= document.getElementById("el");
	var mobilenum= document.getElementById("mbno");
	var pincode= document.getElementById("pcode");
	var check= document.getElementById("ch");
	if(username.value.trim()==""||password.value==""||name.value==""||surname.value==""||email.value==""||mobilenum.value==""||pincode.value==""||check.checked==false){
		alert("Please fill full form");
		return false;
	}
	else
	{ 
		

		document.writeln("username :"+username.value);
		document.writeln("</br></br>name :"+name.value);
		document.writeln("</br></br>surname :"+surname.value);
		document.writeln("</br></br>email :"+email.value);
		document.writeln("</br></br>mobilenum :"+mobilenum.value);
		document.writeln("</br></br>pincode :"+pincode.value); 

        
		let obj={
			name:username.value,password:password.value
		}
		localStorage.setItem("user",JSON.stringify(obj));
		window.location.href="login.html"
		return true;

	}
}

function goRegister()
{
	location.replace("register.html")
}

function validateLogin()
{
	var username= document.getElementById("uname");
	var password= document.getElementById("pword");
	
	
	let a=JSON.parse(localStorage.getItem("user"))
     if (username.value==a.name && password.value==a.password){
		alert(`${username.value} you are successfully login`)
		window.location.href="homepage.html"
		return true;
	 }
	 else{
		window.alert("Please fill the correct full form"); 
		return false;
	 }

	

}

function goLogin()
{
	location.replace("Login.html")
}