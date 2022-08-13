var randomInt1 = Math.floor(Math.random() * 6) + 1;
var randomInt2 = Math.floor(Math.random() * 6) + 1;

function rollDice(num, player) {
    if (num === 1) {
        document.querySelectorAll("img")[player].setAttribute("src", "images/dice1.png");
    }
    else if (num === 2) {
        document.querySelectorAll("img")[player].setAttribute("src", "images/dice2.png");
        
    }
    else if (num === 3) {
        document.querySelectorAll("img")[player].setAttribute("src", "images/dice3.png");
        
    }
    else if (num === 4) {
        document.querySelectorAll("img")[player].setAttribute("src", "images/dice4.png");
        
    }
    else if (num === 5) {
        document.querySelectorAll("img")[player].setAttribute("src", "images/dice5.png");
        
    }
    else if (num === 6) {
        document.querySelectorAll("img")[player].setAttribute("src", "images/dice6.png");
        
    }
    
}


// Player One
rollDice(randomInt1, 0);

// Player Two
rollDice(randomInt2, 1);

if (randomInt1 > randomInt2) {
    document.querySelector("h1").innerHTML = "🏆 Player One Wins!"
}
else if (randomInt2 > randomInt1) {
    document.querySelector("h1").innerHTML = "Player Two Wins! 🏆"
}
else {
    document.querySelector("h1").innerHTML = "Its a Tie! Refresh Again!"
}