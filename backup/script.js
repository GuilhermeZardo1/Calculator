// JavaScript source code

var operador, parcialum, parcialdois, operador, resultado;
operador = null;
parcialdois = null;

function atualizaDisplay(clicado) {

   

    if ((document.getElementById("display").value == "0") && (operador==null)) {

     document.getElementById("display").value = clicado;
     parcialum = document.getElementById("display").value;

    } else if ((document.getElementById("display").value != "0") && (operador==null)) {
       
   	 document.getElementById("display").value = document.getElementById("display").value.concat(clicado);
   	 parcialum = document.getElementById("display").value;
	 console.log("hello");

    }
	else if ((document.getElementById("display").value != "0") && (operador!=null) && (parcialdois==null)) {

		document.getElementById("display").value = clicado;
     	parcialdois = document.getElementById("display").value;



	 	

	 

	}
   
}

function clearScreen(){

	document.getElementById("display").value = "0";

}

function doTheMath () {

	if(document.getElementById("display").value != "0") {
	parcialdois = document.getElementById("display").value;
	document.getElementById("display").value = "0";  
	resultado = eval("1 + 2");
	console.log(parcialum);
	console.log(operador);
	console.log(parcialdois);
	document.getElementById("display").value = resultado;
	operador = null;
	
	}

}

function modificaOperador(operador) {

	operador = operador;
	document.getElementById("display").value = document.getElementById("display").value.concat(operador);
	
}
	

