let message 

let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let dealer = document.getElementById("dealerMsg")

function startNewGame(){
    
    if(sum < 21){
        isAlive = true
        message = "Draw new card?"
    }
    else if(sum === 21){
        hasBlackJack = true
        message = "BLACKJACK!"
    }
    else{
        isAlive = false 
        message = "BUST!"
    }
    
    
   dealer.textContent = message
    
}



