$(function(){
  $("#t1").css("display","inline");
  $("#t2").css("display","none");
  $("#t3").css("display","none");

  $("#area").bind("click",check1);
  $("#perimetro").bind("click",check2);
  $("#volumen").bind("click",check3);
  
  
})

function check1(){
  $("#selarea").css("display","inline");
  $("#selperim").css("display","none");
  $("#selvolumen").css("display","none");
  $("#bt1").bind("click",calcArea);

  //limpiar entradas
  $("#d1").val('');
  $("#d2").val('');
  $("#d3").val('');
  $("#res").html("");
  $("#selarea").bind("click",mos1);
}

function check2(){
  $("#selarea").css("display","none");
  $("#selperim").css("display","inline");
  $("#selvolumen").css("display","none");
  $("#bt1").bind("click",calcPer);
  //limpiar entradas
  $("#d1").val('');
  $("#d2").val('');
  $("#d3").val('');
  $("#res").html("");
  $("#selperim").bind("click",mos2);
}

function check3(){
  $("#selarea").css("display","none");
  $("#selperim").css("display","none");
  $("#selvolumen").css("display","inline");
  $("#bt1").bind("click",calcVol);
  //limpiar entradas
  $("#d1").val('');
  $("#d2").val('');
  $("#d3").val('');
  $("#res").html("");
  $("#selvolumen").bind("click",mos3);
}

function mos1(){
  var opc=$("#selarea").val();

  if(opc=="cuadra"){
    $("#t2").css("display","none");
    $("#t3").css("display","none");
    $("#dato1").html("base");
  }else if(opc=="rect"){
    $("#t2").css("display","inline");
    $("#t3").css("display","none");
    $("#dato1").html("base");
    $("#dato2").html("altura");
  }else if(opc=="triang"){
    $("#t2").css("display","inline");
    $("#t3").css("display","none");
    $("#dato1").html("base");
    $("#dato2").html("altura");
  }else if(opc=="circ"){
    $("#t2").css("display","none");
    $("#t3").css("display","none");
    $("#dato1").html("radio");
  }else if(opc=="rom"){
    $("#t2").css("display","inline");
    $("#t3").css("display","none");
    $("#dato1").html("diametro mayor");
    $("#dato2").html("diametro menor");
  }else if(opc=="trap"){
    $("#t2").css("display","inline");
    $("#t3").css("display","inline");
    $("#dato1").html("base mayor");
    $("#dato2").html("base menor");
    $("#dato3").html("altura");
  }else if(opc=="elip"){
    $("#t2").css("display","inline");
    $("#t3").css("display","none");
    $("#dato1").html("radio mayor");
    $("#dato2").html("radio menor");
  }else if(opc=="pent"){
    $("#t2").css("display","inline");
    $("#t3").css("display","none");
    $("#dato1").html("lado");
    $("#dato2").html("apotema");
  }

  //limpiar entradas
  $("#d1").val('');
  $("#d2").val('');
  $("#d3").val('');
}

function mos2(){
  var opc2=$("#selperim").val();
 if(opc2=="cuadrap"){
  $("#t2").css("display","none");
  $("#t3").css("display","none");
  $("#dato1").html("lado");
 }else if(opc2=="rectp"){
  $("#t2").css("display","inline");
  $("#t3").css("display","none");
  $("#dato1").html("lado 1");
  $("#dato2").html("lado 2");
 }else if(opc2=="triangEp"){
  $("#t2").css("display","none");
  $("#t3").css("display","none");
  $("#dato1").html("lado");
 }else if(opc2=="triangIp"){
  $("#t2").css("display","inline");
  $("#t3").css("display","inline");
  $("#dato1").html("lado 1");
  $("#dato2").html("lado 2");
  $("#dato3").html("lado 3");
 }else if(opc2=="circp"){
  $("#t2").css("display","none");
  $("#t3").css("display","none");
  $("#dato1").html("diametro");
 }else if(opc2=="romp"){
  $("#t2").css("display","inline");
  $("#t3").css("display","none");
  $("#dato1").html("lado 1");
  $("#dato2").html("lado 2");
 }else if(opc2=="trapp"){
  $("#t2").css("display","inline");
  $("#t3").css("display","inline");
  $("#dato1").html("base mayor");
  $("#dato2").html("base menor");
  $("#dato3").html("diagonal");
 }else if(opc2=="pentp"){
  $("#t2").css("display","none");
  $("#t3").css("display","none");
  $("#dato1").html("lado");
 }

 //limpiar entradas
  $("#d1").val('');
  $("#d2").val('');
  $("#d3").val('');
}

function mos3(){
  var opc3=$("#selvolumen").val();
 if(opc3=="esf"){
  $("#t2").css("display","none");
  $("#t3").css("display","none");
  $("#dato1").html("radio");
 }else if(opc3=="cubo"){
  $("#t2").css("display","none");
  $("#t3").css("display","none");
  $("#dato1").html("lado");
 }else if(opc3=="cono"){
  $("#t2").css("display","inline");
  $("#t3").css("display","none");
  $("#dato1").html("radio");
  $("#dato2").html("altura");
 }else if(opc3=="pira"){
  $("#t2").css("display","inline");
  $("#t3").css("display","none");
  $("#dato1").html("lado base");
  $("#dato2").html("altura");
 }else if(opc3=="cil"){
  $("#t2").css("display","inline");
  $("#t3").css("display","none");
  $("#dato1").html("radio");
  $("#dato2").html("altura");
 }

 //limpiar entradas
  $("#d1").val('');
  $("#d2").val('');
  $("#d3").val('');
}

function calcArea(){
 var area=$("#selarea").val();
 var da1=parseFloat($("#d1").val());
 var da2=parseFloat($("#d2").val());
 var da3=parseFloat($("#d3").val());

var res=0;
 if(area=="cuadra"){
  if(!isNaN(da1)){
   res=da1*da1;
   $("#res").css("background-color","#00ff00");
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
   $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(area=="rect"){
  if(!isNaN(da1) && !isNaN(da2)){
  $("#res").css("background-color","#00ff00");
   res=da1*da2;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(area=="triang"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=da1*da2/2;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(area=="circ"){
  if(!isNaN(da1)){
    $("#res").css("background-color","#00ff00");
   res=(da1*da1)*Math.PI;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>"); 
  }
 }else if(area=="rom"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=da1*da2/2;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>"); 
  }
 }else if(area=="trap"){
  if(!isNaN(da1) && !isNaN(da2) && !isNaN(da3)){
    $("#res").css("background-color","#00ff00");
  res=(da1+da2)*da3/2;
  $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>"); 
  }
 }else if(area=="elip"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=da1*da2*Math.PI;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>");  
  }
 }else if(area=="pent"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=da1*da2*5/2;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>"); 
  }
 }

}

function calcPer(){
 var per=$("#selperim").val();
 var da1=parseFloat($("#d1").val());
 var da2=parseFloat($("#d2").val());
 var da3=parseFloat($("#d3").val());
var res=0;
 if(per=="cuadrap"){
  if(!isNaN(da1)){
    $("#res").css("background-color","#00ff00");
   res=da1*4;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(per=="rectp"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=(da1*2)+(da2*2);
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(per=="triangEp"){
  if(!isNaN(da1)){
    $("#res").css("background-color","#00ff00");
   res=da1*3;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(per=="triangIp"){
  if(!isNaN(da1) && !isNaN(da2) && !isNaN(da3)){
    $("#res").css("background-color","#00ff00");
   res=da1+da2+da3;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(per=="circp"){
  if(!isNaN(da1)){
    $("#res").css("background-color","#00ff00");
   res=da1*Math.PI;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(per=="romp"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=da1*da2*2;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(per=="trapp"){
  if(!isNaN(da1) && !isNaN(da2) && !isNaN(da3)){
    $("#res").css("background-color","#00ff00");
   res=da1+da2+(da3*2);
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }else if(per=="pentp"){
  if(!isNaN(da1)){
    $("#res").css("background-color","#00ff00");
   res=da1*5;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
    $("#res").html("<h3>Datos incorrectos</h3>");
  }
 }

}

function calcVol(){
 var volu=$("#selvolumen").val();
 var da1=parseFloat($("#d1").val());
 var da2=parseFloat($("#d2").val());
 var da3=parseFloat($("#d3").val());
 var res=0;
 if(volu=="esf"){
  if(!isNaN(da1)){
    $("#res").css("background-color","#00ff00");
   res=Math.PI*(3/4)*(da1*da1*da1);
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>");
  }
    
 }else if(volu=="cubo"){
  if(!isNaN(da1)){
    $("#res").css("background-color","#00ff00");
   res=da1*da1*da1;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
  $("#res").html("<h3>Datos incorrectos</h3>");   
  }

 }else if(volu=="cono"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=Math.PI*(da1*da1)*da2/3;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>");
  }

 }else if(volu=="pira"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
   res=(da1*da1)*da2/3;
   $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>");
  }

 }else if(volu=="cil"){
  if(!isNaN(da1) && !isNaN(da2)){
    $("#res").css("background-color","#00ff00");
  res=Math.PI*(da1*da1)*da2/3;
  $("#res").html("<h3>Resultado: "+res.toFixed(2)+"</h3>");
  }else{
    $("#res").css("background-color","#ff0000");
   $("#res").html("<h3>Datos incorrectos</h3>");
  }

 }
}