//**********************************
//*          Tic-Tac-Toe           *
//**********************************


var row1 = ["", "", ""];
var row2 = ["", "", ""];
var row3 = ["", "", ""];


var board = [
	row1,
	row2,
	row3,
];

var isplayerXTurn = true; // true is X's turn.



function valueAtPosition(rowIndex, columnIndex) {
	//row is a number between 0 and 2
	//column is a number between 0 and 2
	
	var row = board[rowIndex];

	var value = row[columnIndex];

	return value;
}

//console.log(valueAtPosition(0,2));

function showTheBoard() {
	//prints each line of the array. specificly prints each line 
	//so that the console doesnt colapse each line.
	console.log(board[0]);
	console.log(board[1]);
	console.log(board[2]);
}



function setValueAtPosition(rowIndex, columnIndex) {
	if (isplayerXTurn == true) {
		board[rowIndex][columnIndex] = 'X';
	} else {
		board[rowIndex][columnIndex] = 'O';
	}
}

showTheBoard();
setValueAtPosition(0,0);
showTheBoard();



