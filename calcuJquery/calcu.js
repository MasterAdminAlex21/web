
var ar=document.getElementById("area");
 ar.onclick=function(){check1()};
var per=document.getElementById("perimetro");
 per.onclick=function(){check2()};
var vol=document.getElementById("volumen");
 vol.onclick=function(){check3()};
var calcular=document.getElementById("bt1");

var op=document.getElementById("selarea");
 op.onclick=function(){mos1()};
var op1=document.getElementById("selperim");
 op1.onclick=function(){mos2()};
var op2=document.getElementById("selvolumen");
 op2.onclick=function(){mos3()};

function mos1(){
 if(op.value=="cuadra"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="base";
 }else if(op.value=="rect"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="base";
  document.getElementById("dato2").innerHTML="altura";
 }else if(op.value=="triang"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="base";
  document.getElementById("dato2").innerHTML="altura";
 }else if(op.value=="circ"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="radio";
 }else if(op.value=="rom"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="diametro mayor";
  document.getElementById("dato2").innerHTML="diametro menor";
 }else if(op.value=="trap"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='inline';
  document.getElementById("dato1").innerHTML="base mayor";
  document.getElementById("dato2").innerHTML="base menor";
  document.getElementById("dato3").innerHTML="altura";
 }else if(op.value=="elip"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="radio mayor";
  document.getElementById("dato2").innerHTML="radio menor";
 }else if(op.value=="pent"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado";
  document.getElementById("dato2").innerHTML="apotema";
 }
}

function mos2(){
 if(op1.value=="cuadrap"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado";
 }else if(op1.value=="rectp"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado 1";
  document.getElementById("dato2").innerHTML="lado 2";
 }else if(op1.value=="triangEp"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado";
 }else if(op1.value=="triangIp"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='inline';
  document.getElementById("dato1").innerHTML="lado 1";
  document.getElementById("dato2").innerHTML="lado 2";
  document.getElementById("dato3").innerHTML="lado 3";
 }else if(op1.value=="circp"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="diametro";
 }else if(op1.value=="romp"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado 1";
  document.getElementById("dato2").innerHTML="lado 2";
 }else if(op1.value=="trapp"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='inline';
  document.getElementById("dato1").innerHTML="base mayor";
  document.getElementById("dato2").innerHTML="base menor";
  document.getElementById("dato3").innerHTML="diagonal";
 }else if(op1.value=="pentp"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado";
 }
}

function mos3(){
 if(op2.value=="esf"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="radio";
 }else if(op2.value=="cubo"){
  document.getElementById("t2").style.display='none';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado";
 }else if(op2.value=="cono"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="radio";
  document.getElementById("dato2").innerHTML="altura";
 }else if(op2.value=="pira"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="lado base";
  document.getElementById("dato2").innerHTML="altura";
 }else if(op2.value=="cil"){
  document.getElementById("t2").style.display='inline';
  document.getElementById("t3").style.display='none';
  document.getElementById("dato1").innerHTML="radio";
  document.getElementById("dato2").innerHTML="altura";
 }
}



function check1(){
	document.getElementById("selarea").style.display='inline';
		document.getElementById("selperim").style.display='none';
		document.getElementById("selvolumen").style.display='none';


		calcular.onclick=function(){calcArea()};
	}

function check2(){
		document.getElementById("selperim").style.display='inline';
		document.getElementById("selarea").style.display='none';
		document.getElementById("selvolumen").style.display='none';
		calcular.onclick=function(){calcPer()};
	}

function check3(){
	document.getElementById("selvolumen").style.display='inline';
		document.getElementById("selperim").style.display='none';
		document.getElementById("selarea").style.display='none';
    calcular.onclick=function(){calcVol()};
	}

function calcArea(){
 var area=document.getElementById("selarea");
 var da1=parseFloat(document.getElementById("d1").value);
 var da2=parseFloat(document.getElementById("d2").value);
 var da3=parseFloat(document.getElementById("d3").value);

var res=0;
 if(area.value=="cuadra"){
  if(!isNaN(da1)){
   res=da1*da1;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";}
  else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(area.value=="rect"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=da1*da2;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(area.value=="triang"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=da1*da2/2;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(area.value=="circ"){
  if(!isNaN(da1)){
   res=(da1*da1)*Math.PI;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>"; 
  }
 }else if(area.value=="rom"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=da1*da2/2;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>"; 
  }
 }else if(area.value=="trap"){
  if(!isNaN(da1) && !isNaN(da2) && !isNaN(da3)){
  res=(da1+da2)*da3/2;
  document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>"; 
  }
 }else if(area.value=="elip"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=da1*da2*Math.PI;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";  
  }
 }else if(area.value=="pent"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=da1*da2*5/2;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>"; 
  }
 }

}



function calcPer(){
 var per=document.getElementById("selperim");
 var da1=parseFloat(document.getElementById("d1").value);
 var da2=parseFloat(document.getElementById("d2").value);
 var da3=parseFloat(document.getElementById("d3").value);
var res=0;
 if(per.value=="cuadrap"){
  if(!isNaN(da1)){
   res=da1*4;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(per.value=="rectp"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=(da1*2)+(da2*2);
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(per.value=="triangEp"){
  if(!isNaN(da1)){
   res=da1*3;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(per.value=="triangIp"){
  if(!isNaN(da1) && !isNaN(da2) && !isNaN(da3)){
   res=da1+da2+da3;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(per.value=="circp"){
  if(!isNaN(da1)){
   res=da1*Math.PI;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(per.value=="romp"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=da1*da2*2;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(per.value=="trapp"){
  if(!isNaN(da1) && !isNaN(da2) && !isNaN(da3)){
   res=da1+da2+(da3*2);
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }else if(per.value=="pentp"){
  if(!isNaN(da1)){
   res=da1*5;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
    document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
 }

}

function calcVol(){
 var volu=document.getElementById("selvolumen");
 var da1=parseFloat(document.getElementById("d1").value);
 var da2=parseFloat(document.getElementById("d2").value);
 var da3=parseFloat(document.getElementById("d3").value);
 var res=0;
 if(volu.value=="esf"){
  if(!isNaN(da1)){
   res=Math.PI*(3/4)*(da1*da1*da1);
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }
    
 }else if(volu.value=="cubo"){
  if(!isNaN(da1)){
   res=da1*da1*da1;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
  document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";   
  }

 }else if(volu.value=="cono"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=Math.PI*(da1*da1)*da2/3;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }

 }else if(volu.value=="pira"){
  if(!isNaN(da1) && !isNaN(da2)){
   res=(da1*da1)*da2/3;
   document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }

 }else if(volu.value=="cil"){
  if(!isNaN(da1) && !isNaN(da2)){
  res=Math.PI*(da1*da1)*da2/3;
  document.getElementById("res").innerHTML="<h3>Resultado: "+res.toFixed(2)+"</h3>";
  }else{
   document.getElementById("res").innerHTML="<h3>Datos incorrectos</h3>";
  }

 }
}

