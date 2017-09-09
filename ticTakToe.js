//**********************************
//*          Tic-Tac-Toe           *
//**********************************


var row1 = ["X", "O", "X"];
var row2 = ["O", "X", "O"];
var row3 = ["X", "O", "X"];


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
	console.log(board);
}

showTheBoard();