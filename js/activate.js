function onClickActivateAccount(){
	let check=validate();
	if (check){
		validateCode();
	}
}

function validate(){
	let email=document.getElementById("email").value;
	let code=document.getElementById("code").value;
	let check1,check2=false;
	if (email===""){
		document.getElementById("error1").classList.remove('d-none');
		check1=false;
	}
	else{
		document.getElementById("error1").classList.add('d-none');
		check1=true;
	}

	if (code===""){
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

function validateCode(){
	
	let xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if (xhr.readyState !==4) return;
			if (xhr.status===200){
				
				let answer=xhr.responseText;
				

				if (answer==="false"){
					console.log("HTTP 404 NOT FOUND");

					
					msgC=document.getElementById("msg");
					
					msgC.className='';
					while (msgC.hasChildNodes()) {  
		  				msgC.removeChild(msgC.firstChild);
					}

					let msg=document.createElement("strong");
					msg.innerHTML="Provided credentials are wrong";
					msgC.classList.add("alert");
					msgC.classList.add("alert-danger");
					msgC.appendChild(msg);

					
				}

				else{

					console.log("HTTP 200 OK");

					let answer=xhr.responseText;


					msgC=document.getElementById("msg");
					
					msgC.className='';
					while (msgC.hasChildNodes()) {  
		  				msgC.removeChild(msgC.firstChild);
					}

					let msg=document.createElement("strong");
					msg.innerHTML="Account has been activated";
					msgC.classList.add("alert");
					msgC.classList.add("alert-info");
					msgC.appendChild(msg);

					
					
				}
			
			}
			else{
				console.log('error',xhr);
			}
		}
		let email=document.getElementById("email").value;
		let code=document.getElementById("code").value;

		xhr.open('GET','activate.php?email='+email+'&code='+code);
		xhr.send(); 
}




function onClickCreatePass(){
	sessionStorage.setItem("email", document.getElementById("email").value);
    window.location.href='password.php';
}






const activateAcc=document.getElementById("activateAcc");
activateAcc.addEventListener('click',onClickActivateAccount);

const createPass=document.getElementById("createPass");
createPass.addEventListener('click',onClickCreatePass);