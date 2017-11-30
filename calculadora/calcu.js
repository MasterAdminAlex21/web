document.getElementById("area").onclick=function(){check1()};
document.getElementById("perimetro").onclick=function(){check2()};
document.getElementById("volumen").onclick=function(){check3()};


function check1(){
	document.getElementById("selarea").style.display='inline';
		document.getElementById("selperim").style.display='none';
		document.getElementById("selvolumen").style.display='none';
	}

function check2(){
	document.getElementById
	document.getElementById("selperim").style.display='inline';
		document.getElementById("selarea").style.display='none';
		document.getElementById("selvolumen").style.display='none';
	}

function check3(){
	document.getElementById("selvolumen").style.display='inline';
		document.getElementById("selperim").style.display='none';
		document.getElementById("selarea").style.display='none';
	}

