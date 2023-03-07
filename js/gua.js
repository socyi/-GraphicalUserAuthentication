
function postData(){
	let code=makeCode(8);
	let xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState !==4) return;
		if (xhr.status===200){
			
			let answer=xhr.responseText;	
			msgC=document.getElementById("msg");
			
			msgC.className='';
			while (msgC.hasChildNodes()) {  
  				msgC.removeChild(msgC.firstChild);
			}

			let msg=document.createElement("strong");
			msg.innerHTML="Verification code has been sent to your email";
			msgC.classList.add("alert");
			msgC.classList.add("alert-info");
			msgC.appendChild(msg);

		}
		else{
			console.log('error',xhr);
		}
	}
	
	xhr.open('POST','gua.php');
	xhr.setRequestHeader("Content-Type","application/json");
	const data={};
	data.email=document.getElementById("email").value;
	data.age=document.getElementById("age").value;
	data.gender=document.getElementById("gender").value;
	data.code=code;
	xhr.send(JSON.stringify(data));
}



function validateEmail(){
	
	let xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if (xhr.readyState !==4) return;
			if (xhr.status===200){
				
				let answer=xhr.responseText;
				

				if (answer==="false"){
					console.log("HTTP 409 CONFLICT");

					let answer=xhr.responseText;
					console.log(answer);	
					msgC=document.getElementById("msg");
					
					msgC.className='';
					while (msgC.hasChildNodes()) {  
		  				msgC.removeChild(msgC.firstChild);
					}

					let msg=document.createElement("strong");
					msg.innerHTML="Error: Email already in use";
					msgC.classList.add("alert");
					msgC.classList.add("alert-danger");
					msgC.appendChild(msg);
				}

				else{
					postData();
				}
			
			}
			else{
				console.log('error',xhr);
			}
		}
		let email=document.getElementById("email").value;
		xhr.open('GET','gua.php?email='+email);
		xhr.send(); 
}



function onClickSubmit(){
	let check=validate();
	if (check){
		validateEmail();
	}
}

function validate(){
	let email=document.getElementById("email").value;
	let age=document.getElementById("age").value;
	let check1,check2=false;
	if (email===""){
		document.getElementById("error1").classList.remove('d-none');
		check1=false;
	}
	else{
		document.getElementById("error1").classList.add('d-none');
		check1=true;
	}

	if (age===""){
		document.getElementById("error2").classList.remove('d-none');
		check2=false;
	}
	else{
		document.getElementById("error2").classList.add('d-none');
		check2=true;
	}

	if (check1===true && check2===true)
		return true;

	return false;

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

function onClickActivateAccount(){
	window.location.href="activate.html";
}

function onClickRequestReset(){
	window.location.href="requestReset.html";
}


const submit=document.getElementById("submit");
submit.addEventListener('click',onClickSubmit);

const activateAcc=document.getElementById("activateAcc");
activateAcc.addEventListener('click',onClickActivateAccount);

const requestReset=document.getElementById("requestReset");
requestReset.addEventListener('click',onClickRequestReset);


