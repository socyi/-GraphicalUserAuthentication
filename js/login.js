var selectedImages=0;
var images=[];
var email=sessionStorage.getItem("email");


function onClickLogin(){
	 if (selectedImages!==5){
    	alert("Please select exactly 5 images");
    	return;
  	}

  	let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
    	if (xhr.readyState !==4) return;
    	if (xhr.status===200){
        
      		let answer=xhr.responseText;
      		answer = answer.replace(/\s/g, '');
      		

        	if (answer==="false"){
	        	console.log("HTTP 404 NOT FOUND");

	          
	          	msgC=document.getElementById("msg");
	          
		        msgC.className='';
		        while (msgC.hasChildNodes()) {  
		              msgC.removeChild(msgC.firstChild);
	        	}

	          	let msg=document.createElement("strong");
	          	msg.innerHTML="Incorrect password";
	          	msgC.classList.add("alert");
	          	msgC.classList.add("alert-danger");
	          	msgC.appendChild(msg);

          
       		}

       		else{

        	console.log("HTTP 200 OK");
    		msgC=document.getElementById("msg");
          
	        msgC.className='';
	        while (msgC.hasChildNodes()) {  
	              msgC.removeChild(msgC.firstChild);
        	}

          	window.location.href='welcome.html';

          }

        } 
        else{
        	console.log('error',xhr);

        }
    }
   	images=[];
	const listItems = document.querySelector('#sortable').children;
	const listArray = Array.from(listItems);
	listArray.forEach((item) => {images.push(parseInt(item.id.substr(1)))});
	let password=images.toString();

    xhr.open('GET','loginCheck.php?email='+email+'&password='+password);
	xhr.send(); 


	
}

function onClickSelect(id) {
  if ((selectedImages+1)===6){
  	alert("You cannot add more images!");
  	return;
  }
  else{
  	selectedImages++;
    images.push(id);


  	let	img=document.getElementById(id);
  	img.removeAttribute("onclick");
  	let cln=img.cloneNode(true);

    let wrapper=document.createElement("div");
    wrapper.setAttribute("class","wrapper");
    document.getElementById("sortable").appendChild(wrapper);


    let x= document.createElement("button");
    x.innerHTML="X";
    x.setAttribute("class","X");
    let xid="x"+id;
    wrapper.setAttribute("id",xid);
    x.setAttribute("onclick","onClickX(this.parentNode.id)");

    wrapper.appendChild(cln);
    wrapper.appendChild(x);

   
  }
  
}


  function onClickX(xid){

    let ex=document.getElementById(xid);
    ex.remove();

    selectedImages--;
   
    let index=images.indexOf(parseInt(xid.substr(1)));
   
    if (index > -1) {
     images.splice(index, 1);
    }
    
    let img=document.getElementById(xid.substr(1));
    img.setAttribute("onclick","onClickSelect(this.id)");


  }






const login=document.getElementById("login2");
login.addEventListener('click',onClickLogin);