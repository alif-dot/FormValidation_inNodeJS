var form=$('#mF');
var fn=$('#fn');
var ln=$('#ln');
var p=$('#p');
var e=$('#e');
var ct=$('#ct');
var ta=$('#ta');
var fe=$('#fnE');
var le=$('#lnE');
var pe=$('#pE');
var ee=$('#eE');
var ce=$('#ctE');
var te=$('#taE');

$(document).ready(function(){

form.on('submit',validate)


function validate(ev){

ev.preventDefault();
var isValid=true;


if (ta.val().trim() === '') {
  te.text("You have to write something!!");
  isValid = false;
ta.focus();
}

if(ct.val().trim()===''){

ce.text("Country name is Required!!")
isValid=false;
ct.focus();

}

if(e.val().trim()===''){

ee.text("Email Address is Required!!")
isValid=false;
e.focus();

}

if(p.val().trim()===''){

pe.text("Phone No is Required!!")
isValid=false;
p.focus();

}

if(ln.val().trim()===''){

le.text("Last Name is Required!!")
isValid=false;
ln.focus();

}

if(fn.val().trim()===''){

fe.text("First Name is Required!!")
isValid=false;
fn.focus();

}


if(isValid){

var data=form.serialize();
$.post('/ContactService',data,function(rO){
$('#r').html(rO.result);
},'json');


form.trigger("reset");
}
}

});