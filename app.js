var express=require('express');
var app=express();
var formidable=require('formidable');

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
res.redirect('Form.html')
})

app.post('/ContactService',function(request,response){
var form=new formidable.IncomingForm();
form.parse(request,function(err,fields){

var ln=fields.ln,fn=fields.fn,e=fields.e,ct=fields.ct,
ta = fields.ta,p=fields.p,
result="Thank you "+fn+' '+ln+' from '+ct+'<br>'+
'We will contact you either at '+e+' or call you at '+p+'<br>'+
'Your message is: '+ta+'<br>';

response.writeHead(200,{'Content-Type':"application/json"});
response.end('{"result":"' +result+ '"}')
console.log('Handled request for '+fn+' '+ln);

})

})

var port=8080;
app.listen(port);
console.log('Server listeninig at: http://localhost:'+port);