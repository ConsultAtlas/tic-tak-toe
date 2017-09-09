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
	console.log("***************************")
}



function setValueAtPosition(rowIndex, columnIndex) {
	//checks to see whose trun it is and then changes
	//the value of the game at the given index to that
	//players symbol.
	if (isplayerXTurn) {
		board[rowIndex][columnIndex] = 'X';
	} else {
		board[rowIndex][columnIndex] = 'O';
	}
	showTheBoard();
	isplayerXTurn = !isplayerXTurn;
}

function userInput()	{
	var rowChoice = prompt('Enter a row');
	var columnChoice = prompt('Enter a Column');

	if (valueAtPosition(rowChoice,columnChoice) == "") {
		setValueAtPosition(rowChoice,columnChoice);
	} else {
		alert('Invalid Choice, some one already took that.');
	}

	
}

function hasSomeoneWon() {

}

while ( !hasSomeoneWon() ) {
	userInput();
}




