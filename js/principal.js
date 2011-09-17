window.onload = function(){
 /*
	CarregaPaginaPrinipal();
 
	CarregaMapes();
	*/
       Login();
};

function CarregaPaginaPrinipal(){
/*
	var PantallaWidth = screen.width;
	var PantallaHeight = screen.height;
	var TopPrinicpal = (PantallaHeight - 890) / 2;
	
	document.getElementById('PaginaPrincipal').style.height = (PantallaHeight * 0.8) + 'px';
	document.getElementById('Div_maps').style.height = (((PantallaHeight * 0.8) * 0.85) - 10) + 'px';
	//document.getElementById('Div_maps').style.height = ((PantallaHeight * 0.8) - 163 ) + 'px';
	
*/
}
function Identificacio(){
/*
	//var alcadaDiv = parseInt(document.getElementById('Div_Identificacio').style.height);
	
	document.getElementById('Div_Identificacio').style.visibility = '';
	document.getElementById('Div_Identificacio').style.height = '100px';
	
	
	document.getElementById('Identificacio').style.visibility = 'hidden';
	document.getElementById('Tanca_identificacio').style.visibility = '';
        */
}

function Tanca_identificacio(){
	/*var alcadaDiv = parseInt(document.getElementById('Div_Identificacio').style.height);

	if (parseInt(document.getElementById('Div_Identificacio').style.height) > 1){
		document.getElementById('Div_Identificacio').style.height = (alcadaDiv - 7) + 'px';
		setTimeout("Tanca_Identificacio()", 0.5);
	}*/
    /*
	document.getElementById('Identificacio').style.visibility = '';
	document.getElementById('Tanca_identificacio').style.visibility = 'hidden';
	document.getElementById('Div_Identificacio').style.visibility = 'hidden';
	document.getElementById('TB_psw').value = '';
	document.getElementById('TB_usr').value = '';*/
}

function Login(){
	$(".Identificacio").show();
	$("#Div_Identificacio").hide();
	//document.getElementById('Identificacio').style.visibility = '';
	//document.getElementById('Div_Identificacio').style.visibility = 'hidden';
}