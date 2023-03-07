
var email;

function onClickResetCode(){
	let check=validate();
	if (check){
		validateEmail();
	}
}

function validate(){
	let email=document.getElementById("email").value;
	let check1=false;
	if (email===""){
		document.getElementById("error1").classList.remove('d-none');
		check1=false;
	}
	else{
		document.getElementById("error1").classList.add('d-none');
		check1=true;
	}


	if (check1===true)
		return true;

	return false;

}

function validateEmail(){
	
	let xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if (xhr.readyState !==4) return;
			if (xhr.status===200){
				
				let answer=xhr.responseText;
				

				if (answer==="false"){
					console.log("404 NOT FOUND");

					let answer=xhr.responseText;	
					msgC=document.getElementById("msg");
					
					msgC.className='';
					while (msgC.hasChildNodes()) {  
		  				msgC.removeChild(msgC.firstChild);
					}

					let msg=document.createElement("strong");
					msg.innerHTML="Provided email is wrong";
					msgC.classList.add("alert");
					msgC.classList.add("alert-danger");
					msgC.appendChild(msg);
				}

				else{
					getResetCode();
				}
			
			}
			else{
				console.log('error',xhr);
			}
		}
		let email=document.getElementById("email").value;
		xhr.open('GET','requestReset.php?email='+email);
		xhr.send(); 
}


function getResetCode(){
	
let code=makeCode(8);
	let xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState !==4) return;
		if (xhr.status===200){
			
			let answer=xhr.responseText;
			console.log(answer);	
			msgC=document.getElementById("msg");
			
			msgC.className='';
			while (msgC.hasChildNodes()) {  
  				msgC.removeChild(msgC.firstChild);
			}

			let msg=document.createElement("strong");
			msg.innerHTML="Reset code has been sent to your email";
			msgC.classList.add("alert");
			msgC.classList.add("alert-info");
			msgC.appendChild(msg);

		}
		else{
			console.log('error',xhr);
		}
	}
	
	xhr.open('POST','requestReset.php');
	xhr.setRequestHeader("Content-Type","application/json");
	const data={};
	data.email=document.getElementById("email").value;
	data.code=code;
	xhr.send(JSON.stringify(data));
}

function makeCode(length) {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function onClickResetPassword(){
    window.location.href='reset.html';
}


const resetCode=document.getElementById("resetCode");
resetCode.addEventListener('click',onClickResetCode);

const resetPassword=document.getElementById("resetPassword");
resetPassword.addEventListener('click',onClickResetPassword);