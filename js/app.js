//Create a list that holds all of your cards
 
let cardList = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
let openedCard = [];
var moves = 0;
$("#moves").text(moves.toString());
let starRating = "3";
let timeCount = 0;
let timerPtr;
let corectPairs = 0;

//shuffle the list of cards using the provided "shuffle" method below  */
shuffle(cardList);

function again(){
$(".card").find("i").each(function( index ) {
  $(this).removeClass(cardList).addClass(cardList[index]);
});
};
again();
console.log(cardList);
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Remove classes at the begginig or when clicking reset
function removeAll(){
    $(".card").each(function() {
    $(this).removeClass("show match open marked");
    });
    
    }
removeAll();

//clicking the reset button
$(".restart").click(function(){
    allReset();
});

function allReset(){
    removeAll();
    shuffle(cardList);
    again();
    restartMoves();
    timeCount = 0;
}

//set up the event listener for a card. If a card is clicked:
 $(".card").click(function(){
     updateMoves();
     let card = $(this);
     let cardClass = card.find("i").attr("class");
     showCard(card);
     pushCard(cardClass);
     let markedCard = $(this).addClass("marked");
     
     if (openedCard.length === 2){
         if (openedCard[0] === openedCard[1]){
                $(".marked").each(function(){
                    $(this).addClass("match");
                    $(this).removeClass("show open marked");
        
            });
                openedCard = [];
                corectPairs ++;
                if (corectPairs === 8){
                    playerWin();
                }
             
                }
         else { 
                setTimeout(wrongPair,500);
                openedCard = [];}
         
     }
    
 });
//fnction when the cards do not match
function wrongPair() {
             $(".marked").each(function(){
                $(this).removeClass("show open marked");
             });
}

//display the card's symbol (put this functionality in another function that you call from this one
function showCard(x) {
     x.addClass("show open");
}
//add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)


function pushCard(y) {
        openedCard.push(y);
}

function updateMoves(){
    
    moves++;
    $("#moves").text(moves.toString());
    
    if (moves > 0 && moves < 16) {
    starRating = starRating;
  } else if (moves >= 16 && moves <= 20) {
    $("#starOne").removeClass("fa-star");
    starRating = "2";
  } else if (moves > 25) {
    $("#starTwo").removeClass("fa-star");
    starRating = "1";
  }
    
}

function restartMoves(){
    moves = 0;
    starRating = "3";
    $("#starOne").addClass("fa-star");
    $("#starTwo").addClass("fa-star");
    $("#moves").text(moves.toString());
    corectPairs = 0;
    
}
// starts the timer
function startTimer(){
    timeCount += 1;
    $("#timer").html(timeCount);
    timerPtr = setTimeout(startTimer, 1000);
}

startTimer();
//When correct pairs no. = 8, call function PlayerWin();
if (corectPairs === 8){
    playerWin();
}


//Function when the player win
function playerWin(){
    clearTimeout(timerPtr);
    winnerPopUp();
}


// Open popup when game is complete source: www.w3schools.com
function winnerPopUp() {

    var modal = document.getElementById('win-popup');
    var span = document.getElementsByClassName("close")[0];

    $("#total-moves").text(moves);
    $("#total-stars").text(starRating);
    $("#second-time").text(timeCount);
    modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

   $("#play-again-btn").on("click", function() {
       allReset();
       startTimer();
       modal.style.display = "none";
       
       
   });

   clearInterval(timer);
}
