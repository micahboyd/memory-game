var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardFour === cardThree) {
// 	alert ("You found a match!")
// } else {alert ("Sorry try again.")
// }

// if (cardOne === cardTwo) {
// 	alert ("You found a match!")
// } else {alert ("Sorry try again.")
// }


var createBoard = function(){

	var boardDiv = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';
		cardDiv.setAttribute('data-card', cards[i]);
		boardDiv.appendChild(cardDiv);
		cardDiv.addEventListener('click', isTwoCards);		
	}
}


var isTwoCards = function() {

	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/King-Hearts.png' height = '200px' width = '150px' alt = 'King of Hearts'>"; 
	} else {
		this.innerHTML = "<img src='images/Queen-CLubs.png' height = '200px' width = '150px' alt ='Queen of Clubs'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(cards){

	if (cards[0] === cards[1]) {
		alert("You got a match!");
	}	else {
		alert("Sorry, try again.");
	}
		
}

createBoard();