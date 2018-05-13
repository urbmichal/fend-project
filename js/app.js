/*
 * Create a list that holds all of your cards
 */
/*
   * List of cards (total of 16)
   */

var moves_taken = 0;
var first = 0;
var second = 1;
var total_moves_per_turn = 2;

   var card_deck = [
    "fa fa-diamond",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-anchor",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-diamond",
    "fa fa-bomb",
    "fa fa-leaf",
    "fa fa-bomb",
    "fa fa-bolt",
    "fa fa-bicycle",
    "fa fa-paper-plane-o",
    "fa fa-cube"];

let opened_card = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

shuffle(card_deck);
let shuffled = shuffle(card_deck);
        $('#card_0').removeClass().addClass(shuffled[0]);
        $('#card_1').removeClass().addClass(shuffled[1]);
        $('#card_2').removeClass().addClass(shuffled[2]);
        $('#card_3').removeClass().addClass(shuffled[3]);
        $('#card_4').removeClass().addClass(shuffled[4]);
        $('#card_5').removeClass().addClass(shuffled[5]);
        $('#card_6').removeClass().addClass(shuffled[6]);
        $('#card_7').removeClass().addClass(shuffled[7]);
        $('#card_8').removeClass().addClass(shuffled[8]);
        $('#card_9').removeClass().addClass(shuffled[9]);
        $('#card_10').removeClass().addClass(shuffled[10]);
        $('#card_11').removeClass().addClass(shuffled[11]);
        $('#card_12').removeClass().addClass(shuffled[12]);
        $('#card_13').removeClass().addClass(shuffled[13]);
        $('#card_14').removeClass().addClass(shuffled[14]);
        $('#card_15').removeClass().addClass(shuffled[15]);


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
shuffle(card_deck);
 
$(".card").on('click', function(){
$(this).addClass("open show");
opened_card.push($(this).find("i").attr("class"));
console.log(opened_card);
    
});



//RESTART
$('.restart').click(function(){
   again(); 
});


function again() {
        $('.card').removeClass('show open match');
        $('.moves').text("0");
       
        /** Star rating */
      $('#first-star').removeClass('fa-star').addClass('fa-star-o');
      $('#second-star').removeClass('fa-star').addClass('fa-star-o');
      $('#third-star').removeClass('fa-star').addClass('fa-star-o');
    let shuffled = shuffle(card_deck);
        $('#card_0').removeClass().addClass(shuffled[0]);
        $('#card_1').removeClass().addClass(shuffled[1]);
        $('#card_2').removeClass().addClass(shuffled[2]);
        $('#card_3').removeClass().addClass(shuffled[3]);
        $('#card_4').removeClass().addClass(shuffled[4]);
        $('#card_5').removeClass().addClass(shuffled[5]);
        $('#card_6').removeClass().addClass(shuffled[6]);
        $('#card_7').removeClass().addClass(shuffled[7]);
        $('#card_8').removeClass().addClass(shuffled[8]);
        $('#card_9').removeClass().addClass(shuffled[9]);
        $('#card_10').removeClass().addClass(shuffled[10]);
        $('#card_11').removeClass().addClass(shuffled[11]);
        $('#card_12').removeClass().addClass(shuffled[12]);
        $('#card_13').removeClass().addClass(shuffled[13]);
        $('#card_14').removeClass().addClass(shuffled[14]);
        $('#card_15').removeClass().addClass(shuffled[15]);

    
    
};
again();
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
