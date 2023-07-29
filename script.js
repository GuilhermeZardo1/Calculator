let n1, oper, n2;
partial=0;
flag=false;
/*
n1=5;
n2=7;
*/
/*
function operatorFunction(op){
	op=op;
	if (flag==false){
		n1=partial;
		flag=true;
		document.getElementById("display").value = "0";
	}
	else{
		n2=partial;
		flag=false;
		document.getElementById("display").value = doTheMath(op, n1, n2);
	}
}*/

function add(n1,n2){
	n1=Number(n1);
	n2=Number(n2);
	let res= n1+n2
	res = +res.toFixed(6);
	return res.toString();
}

function multiply(n1,n2){
	n1=Number(n1);
	n2=Number(n2);
	let res= n1*n2
	res = +res.toFixed(6);
	return res.toString();
}

function subtract(n1,n2){
	n1=Number(n1);
	n2=Number(n2);
	let res= n1-n2
	res = +res.toFixed(6);
	return res.toString();
}

function divide(n1,n2){
	n1=Number(n1);
	n2=Number(n2);	
	if (n2==0){
		return "CANT DIVIDE BY ZERO";
	}
	let res= n1/n2
	res = +res.toFixed(6);
	return res.toString();
}

function doTheMath(op, n1, n2){
	

	switch (op) {
		case '+':
			return add(n1,n2);
		case '-':
			return subtract(n1,n2);
		case '*':
			return multiply(n1,n2);
		case '/':
			return divide(n1,n2);
		default:
		  return "ERROR";
	  }
}

function updateDisplay(clicked) {

		if(flag==true){
			document.getElementById("display").value = clicked;
			flag=false;
			return;
		}
	
		if (document.getElementById("display").value == "0") {
			document.getElementById("display").value = clicked;
		}
	
		else  {
			document.getElementById("display").value = "" + 
			document.getElementById("display").value + clicked;
		}
	}
	
function operatorFunction(op){
		oper=op;
		n1=document.getElementById("display").value;
		flag=true;
}

function result(){
	n2=document.getElementById("display").value;
	document.getElementById("display").value = doTheMath(oper,n1,n2);
}

function clearScreen(){
	document.getElementById("display").value = '0';
	n1=0;
	n2=0
	op=0;
	flag=false;
}

/*n1=5;
n2=7;
let a=add(n1,n2);
console.log(a);
let b=subtract(n1,n2);
console.log(b);
let c=multiply(n1,n2);
console.log(c);
let d=divide(n1,n2);
console.log(d);*/





