function RPS(){
	
	choices = ["rock", "paper", "scissors"];
	
	var input = prompt("Enter either rock, paper, or scissors:");
	var computer = Math.floor((Math.random() * 3));
	var keepGoing = true;
	var theSpan = document.getElementById("output");

	while (keepGoing == true) {
		if ((input == "rock") || (input == "Rock")) {
			var user=0;
		}
		else if ((input == "paper") || (input == "Paper")) {
			var user=1;
		}
		else if ((input == "scissors") || (input == "Scissors")) {
			var user=2;
		}
		else {
			console.log("Your user input code is broken");
		}
		//Using buttons makes a lot more sense. You don't have to deal with cases.
	
		if (user == computer) {
			output.innerHTML = ("Tie Game. Try Again");
		}
		else if ((user == 0) && (computer == 1)) {
			output.innerHTML = ("Paper covers rock. Computer wins.");
		}
		else if ((user == 0) && (computer == 2)) {
			output.innerHTML = ("Rock beats scissors. User Wins");
		}
		else if ((user == 1) && (computer == 0)) {
			output.innerHTML = ("Paper covers rock. User Wins");
		}
		else if ((user == 1) && (computer == 2)) {
			output.innerHTML = ("Scissors cut paper. Computer wins.");
		}
		else if ((user == 2) && (computer == 0)) {
			output.innerHTML = ("Rock beats scissors. Computer wins");
		}
		else if ((user == 2) && (computer == 1)) {
			output.innerHTML = ("Scissors cut paper. User Wins");
		}
		else {
			output.innerHTML = ("Your game code is broken, or you didn't follow the input rules.");
		}
		keepGoing = false;
	}

}
