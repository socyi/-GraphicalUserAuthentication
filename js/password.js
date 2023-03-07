
var email=sessionStorage.getItem("email");
var selectedImages=0;
var   numbers= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23,24,25,26,27];
var images=[];
var decoy=[];
var i,j;

const create=document.getElementById("create");
create.addEventListener('click',onClickCreate);

const login=document.getElementById("login");
login.addEventListener('click',onClickLogin);

function onClickLogin(){
  sessionStorage.setItem("email",email);
  window.location.href='login.php';
}

function onClickCreate(){
 
  if (selectedImages!==5){
    alert("Please select exactly 5 images");
    return;
  }



  if (isEmpty(email)){

    msgC=document.getElementById("msg");
      
    msgC.className='';
    while (msgC.hasChildNodes()) {  
        msgC.removeChild(msgC.firstChild);
    }

    let msg=document.createElement("strong");
    msg.innerHTML="Please go through the email activation first";
    msgC.classList.add("alert");
    msgC.classList.add("alert-danger");
    msgC.appendChild(msg);

  }
  else{

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
          msg.innerHTML="Email account is not activated";
          msgC.classList.add("alert");
          msgC.classList.add("alert-danger");
          msgC.appendChild(msg);

          
        }

        else{

          console.log("HTTP 200 OK");
          shuffle(numbers);
          for (i=0;i<12;i++)
            numbers.pop();
         

          images=[];
       

          const listItems = document.querySelector('#sortable').children;
          const listArray = Array.from(listItems);
          listArray.forEach((item) => {images.push(parseInt(item.id.substr(1)))});

          let xhr2=new XMLHttpRequest();
          xhr2.onreadystatechange=function(){
            if (xhr2.readyState !==4) return;
            if (xhr2.status===200){

            }
            else{
              console.log('error',xhr2);
            }


          }

          xhr2.open('POST','checkActivation.php');
          xhr2.setRequestHeader("Content-Type","application/json");
          const data={};
          data.email=email;
          data.password=images.toString();
          data.decoy=numbers.toString();
          xhr2.send(JSON.stringify(data));





          msgC=document.getElementById("msg");
          
          msgC.className='';
          while (msgC.hasChildNodes()) {  
              msgC.removeChild(msgC.firstChild);
          }

          let msg=document.createElement("strong");
          msg.innerHTML="Password successfully created";
          msgC.classList.add("alert");
          msgC.classList.add("alert-info");
          msgC.appendChild(msg);
        
          document.getElementById("create").disabled="disabled";
          document.getElementById("login").style.visibility="visible";
          
          
        }
      
      }
      else{
        console.log('error',xhr);
      }
    }
  

    xhr.open('GET','checkActivation.php?email='+email);
    xhr.send(); 
  }
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function onClickSelect(id) {
  if ((selectedImages+1)===6){
  	alert("You cannot add more images!");
  	return;
  }
  else{
  	selectedImages++;
    images.push(id);

    let index=numbers.indexOf(id);
   
    if (index > -1) {
     numbers.splice(index, 1);
    }

  	let	img=document.getElementById(id);
  	img.removeAttribute("onclick");
  	let cln=img.cloneNode(true);

    let wrapper=document.createElement("div");
    wrapper.setAttribute("draggable","true");
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
    numbers.push(parseInt(xid.substr(1)));

    let img=document.getElementById(xid.substr(1));
    img.setAttribute("onclick","onClickSelect(this.id)");


  }

  $(function() {
    var oldIndex;
    
    $("#sortable").sortable({
        start: function(event, ui) {
            oldIndex = ui.item.index();
        },
        stop: function(event, ui) {
            var newIndex = ui.item.index();
            var movingForward = newIndex > oldIndex;            
            var nextIndex = newIndex + (movingForward ? -1 : 1);

            var items = $('#sortable > div');
            var itemToMove = items.get(nextIndex);
            if (itemToMove) {
    
                var newLocation = $(items.get(oldIndex));

                if (movingForward) {
                    $(itemToMove).insertBefore(newLocation);
                } else {
                    $(itemToMove).insertAfter(newLocation);
                }
            }
        }
    });
    
  $("#sortable").disableSelection();
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;


    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}