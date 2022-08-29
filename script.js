// JavaScript source code

//variable declarator

var operator, partial, operator, result;
operator = null;


/*update the display of the calculator. If zero is displayed when clicked, display the clicked value,
if it is not zero, concatenate the clicked value to the display and save the partial result to be
used later*/


function updateDisplay(clicked) {

    if (document.getElementById("display").value == "0") {

     document.getElementById("display").value = clicked;
     partial = document.getElementById("display").value;

    } else if (document.getElementById("display").value != "0") {
       
   	 document.getElementById("display").value = document.getElementById("display").value.concat(clicked);
	 partial = document.getElementById("display").value;
   
	}
}

/*function to clear the screen*/

function clearScreen(){

	document.getElementById("display").value = "0";
	partial = null;

}

/* function dedicated to evaluate the result by using the values
stored in the partial variable.*/

function doTheMath () {

	if(document.getElementById("display").value != "0") {
	result = eval(partial);
	console.log(partial);
	document.getElementById("display").value = result;
	
	}

}



