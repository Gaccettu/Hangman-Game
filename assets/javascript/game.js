	var wins = 0;
	// Here we have the computer's choices
	var computerChoices = ["sammy","goat","rizzo","curse","bryant","wood"];
	
	var down = 7;

	// This is the computer's choice
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	// This parses the computer's guess into an array of letters
	var computerSplit = computerGuess.split("");

	//Setting my missed letters array
	var missedLetters = [];

	var remaining = computerGuess.length;

	//This turns the letters into dashes
	for(var i = 0; i < computerGuess.length; i++){
		computerSplit[i] = "-"
	};

	//This displays the letters of the computers guess	
	document.getElementById("Word").innerHTML = computerSplit.join(" ");

	document.getElementById("winimg").style.display = "none";

	document.getElementById("loseimg").style.display = "none";
	

	document.onkeyup = function (event){
		var userGuess = event.key;
		var letterfound = false;
		var letterused = false;


		if ((down > 0) && (remaining > 0) ){
			for (var n = 0; n < computerSplit.length; n++){
				if(computerSplit[n] === userGuess){
					letterused = true;
				}
			}
			for (var j = 0; j < computerGuess.length; j++){
				if ((computerGuess[j] === userGuess) && (letterused === false)){
				computerSplit[j] = userGuess;
				letterfound = true;
				remaining--;
				}
			}
			for (var k = 0; k < missedLetters.length; k++){
				if(missedLetters[k] === userGuess){
					letterused = true;
				}
			}
		}
		if ((letterfound === false) && (letterused === false)){
			//This lowers the counter
			down--;
			//this adds to the missed letters array
			missedLetters.push(userGuess)
			
		}
		if (remaining === 0) {
			alert("Homerun, You Win!");
			wins++;
			missedLetters=[];
			down = 7;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			computerSplit = computerGuess.split("");
			for(var l = 0; l < computerGuess.length; l++){computerSplit[l] = "-"};
			remaining = computerGuess.length;
			document.getElementById("winimg").style.display = "block";
			document.getElementById("loseimg").style.display = "none";
		}
		if (down === 0) {
			alert("Strike Three, You're Out!")
			missedLetters=[];
			down = 7;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			computerSplit = computerGuess.split("");
			for(var m = 0; m < computerGuess.length; m++){computerSplit[m] = "-"};
			remaining = computerGuess.length;
			document.getElementById("loseimg").style.display = "block";
			document.getElementById("winimg").style.display = "none";
		}
	
	document.getElementById("NumberGuess").innerHTML = down;

	//This adds to the missed letters
	document.getElementById("guessedLetter").innerHTML = missedLetters;

	document.getElementById("Word").innerHTML = computerSplit.join(" ");
	//This increases the win count
	document.getElementById("wincount").innerHTML = wins;
	}