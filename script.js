let n1, operator, n2;

function add(n1,n2){
	return n1+n2;
}

function multiply(n1,n2){
	return n1*n2;
}

function subtract(n1,n2){
	return n1-n2;
}

function divide(n1,n2){
	return n1/n2;
}

function operate(op, n1, n2){

	switch (op) {

		case 'add':
			return add(n1,n2);
		case 'subtract':
			return subtract(n1,n2);
		case 'multiply':
			return subtract(n1,n2);
		case 'divide':
			return divide(n1,n2);
		default:
		  return "ERROR";
	  }

}







