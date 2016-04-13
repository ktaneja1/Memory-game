'use strict';

var score;
$(document).ready(function() { //wait for the document to load 
fully

if (localStorage.getItem("score") != null){
	score= localStorage.getItem("score");
}
	else{
		score=0;
	}
	$('.score').text(score);
	
  $('.card').click(function() { //when any card is clicked
    if($(this).data('flipped') == true) { //if the card is face 
up
      
$(this).attr('src','https://filletfamilyblog.files.wordpres
s.com/2013/02/d0490860-0-large.jpg'); //show the back
      $(this).data('flipped',false); //tell the card it's not 
flipped anymore
    }
    else { //if the card is face down
      $(this).attr('src',$(this).data('card')); //show what 
card is stored in "card" data variable
      $(this).data('flipped',true); //tell the card it is flipped
    var numFlipped = $('.card').filter(function() {
					return $(this).data('flipped');
			}).length;
			
			if(numFlipped == 2) {
				//if exactly two cards are flipped
				alert('two cards flipped over');
				/*
					the above code is an alert, and it's use is 
to show a dialog box to a
					user that they must press ok to before 
continuing
					We'll be using this a bit more next week, 
but for now it shows how the
					game can work.
				*/
				
				/*
					we will be doing some additional work in 
here to see if they match
					but we can cover that next week!  If you 
want to see if you can figure
					out how we might do that!
				*/

				//turn all our cards back over
				$('.card').data('flipped',false);
				
$('.card').attr('src','https://filletfamilyblog.f
iles.wordpress.com/2013/02/d0490860-0-large.jpg')
;
			}
	}
  });

  var AceOfSpades = new Image();
  
AceOfSpades.src="http://cs.nyu.edu/courses/spring15/CSCI-UA.006
1-001/newcards/images/Ace%20of%20Spades.jpg";
  var Mario= new Image();
  
Mario.src="http://vignette1.wikia.nocookie.net/mario/images/1/1
5/MarioNSMB2.png/revision/latest?cb=20120816162009";
  var yoshi= new Image();
  
yoshi.src="https://upload.wikimedia.org/wikipedia/en/3/39/Yoshi
MarioParty9.png";
  var laptop= new Image ();
  
laptop.src="http://www.cs.technion.ac.il/~cs234326/cgi-bin/irit
ALL/laptop.jpg";
  var Maryland= new Image();
  
Maryland.src="https://collegediabetesnetwork.org/sites/default/
files/MFlag.png";
  var terps= new Image();
  
terps.src="http://ih.constantcontact.com/fs169/1113840988973/im
g/44.jpg?a=1116001867584";
  var monster_truck= new Image();
  
monster_truck.src="http://media.hamptonroads.com/cache/files/im
ages/1020581000.jpg";
  var star= new Image();
  
star.src="http://vignette4.wikia.nocookie.net/fantendo/images/2
/26/Star.PNG/revision/20090803173255";
  var clashofclans= new Image();
  
clashofclans.src="http://www.onehackup.com/wp-content/uploads/2
015/02/clash-of-clans-logo.jpg";
  var Nemo= new Image();
  
Nemo.src="http://vignette2.wikia.nocookie.net/pixar/images/8/82
/Nemo.png/revision/latest?cb=20110504131029";
  var kitten= new Image();
  kitten.src= 
"https://s-media-cache-ak0.pinimg.com/236x/12/f3/fd/12f3fdcc116
58741787fd5c839ca8705.jpg";
  var colorwheel= new Image();
  
colorwheel.src="http://www.clker.com/cliparts/x/m/R/a/7/o/rainb
ow-of-colors.svg";
  
  var cards = new Array();
  cards[0] = 
"http://www.clker.com/cliparts/x/m/R/a/7/o/rainbow-of-colors.sv
g"; //color wheel
  cards[1] = 
"http://www.clker.com/cliparts/x/m/R/a/7/o/rainbow-of-colors.sv
g";
  cards[2] = 
"https://s-media-cache-ak0.pinimg.com/236x/12/f3/fd/12f3fdcc116
58741787fd5c839ca8705.jpg"; //mario
  cards[3] = 
"https://s-media-cache-ak0.pinimg.com/236x/12/f3/fd/12f3fdcc116
58741787fd5c839ca8705.jpg";
  cards[4]= 
"http://www.onehackup.com/wp-content/uploads/2015/02/clash-of-c
lans-logo.jpg"; //clash of clans
  cards[5]= 
"http://www.onehackup.com/wp-content/uploads/2015/02/clash-of-c
lans-logo.jpg";
  cards[6]= 
"http://cs.nyu.edu/courses/spring15/CSCI-UA.0061-001/newcards/i
mages/Ace%20of%20Spades.jpg"; //ace
  cards[7]= 
"http://cs.nyu.edu/courses/spring15/CSCI-UA.0061-001/newcards/i
mages/Ace%20of%20Spades.jpg";
  cards[8]= 
"http://vignette1.wikia.nocookie.net/mario/images/1/15/MarioNSM
B2.png/revision/latest?cb=20120816162009"; //mario
  cards[9]= 
"http://vignette1.wikia.nocookie.net/mario/images/1/15/MarioNSM
B2.png/revision/latest?cb=20120816162009";
  
cards[10]="https://upload.wikimedia.org/wikipedia/en/3/39/Yoshi
MarioParty9.png"; //yoshi
  
cards[11]="https://upload.wikimedia.org/wikipedia/en/3/39/Yoshi
MarioParty9.png";
  
cards[12]="http://www.cs.technion.ac.il/~cs234326/cgi-bin/iritA
LL/laptop.jpg"; //laptop
  
cards[13]="http://www.cs.technion.ac.il/~cs234326/cgi-bin/iritA
LL/laptop.jpg";
  
cards[14]="https://collegediabetesnetwork.org/sites/default/fil
es/MFlag.png"; //maryland
  
cards[15]="https://collegediabetesnetwork.org/sites/default/fil
es/MFlag.png";
  
cards[16]="http://ih.constantcontact.com/fs169/1113840988973/im
g/44.jpg?a=1116001867584"; //terps
  
cards[17]="http://ih.constantcontact.com/fs169/1113840988973/im
g/44.jpg?a=1116001867584";
  
cards[18]="http://media.hamptonroads.com/cache/files/images/102
0581000.jpg"; //monster truck
  cards[19]= 
"http://media.hamptonroads.com/cache/files/images/1020581000.jp
g";
  cards[20]= 
"http://vignette4.wikia.nocookie.net/fantendo/images/2/26/Star.
PNG/revision/20090803173255"; //star
  
cards[21]="http://vignette4.wikia.nocookie.net/fantendo/images/
2/26/Star.PNG/revision/20090803173255";
  
cards[22]="http://vignette2.wikia.nocookie.net/pixar/images/8/8
2/Nemo.png/revision/latest?cb=20110504131029"; //nemo
  
cards[23]="http://vignette2.wikia.nocookie.net/pixar/images/8/8
2/Nemo.png/revision/latest?cb=20110504131029";
  
cards[24]="https://s-media-cache-ak0.pinimg.com/236x/12/f3/fd/1
2f3fdcc11658741787fd5c839ca8705.jpg"; //kitten
  
cards[25]="https://s-media-cache-ak0.pinimg.com/236x/12/f3/fd/1
2f3fdcc11658741787fd5c839ca8705.jpg";
  
  
  
  cards = shuffle(cards);

  $('.card').each(function(index) {
		/*
			ok so this is a little strange looking I bet! so 
let's go through it.

			we know that jquery uses selectors that look like 
css to figure out
			what elements you want to work with.  .each is a 
helper function in
			jquery and lets us go through each item in the 
selector indivdually
			so in our case we can go through each card on the 
field one by one to
			tell it which card in our array it represents!

			in the above function we've used a variable called 
index to record
			the number of the card we are currently on.  We'll 
use that number to
			select our item from the array.
		*/
		$(this).data('card',cards[index]);
  		/*
			as you can see above we are using the index to 
select our card from
			our cards array. So the code above in plain english 
is
			assign the card with position x on the field the 
value from cards where
			the key is also x to the data value card.

			if you are having some trouble understanding the 
above let me know and
			I can make a few examples for you!
		*/
	});
});

$(.'card').click(function(){
	$("#instructions").text("Select a card by clicking on it!");
	if ($(this).data ('flipped')== true){
		
$(this).attr('src','https://filletfamilyblog.files.wordpr
ess.com/2013/02/d0490860-0-large.jpg');
		
		$(this).data('flipped', false);
	}
	else{
		$(this).data('flipped', true);
		
		var flippedCards= $('.card').filter(function(){
			return $(this).data('flipped');  //if it is flipped 
over
			
		});
		var numFlipped= flippedCards.length;
		
		if (numFlipped==1){
			$("#instructions").text("Now choose one more card");
		}
		
		if (numFlipped==2){
			$("#instructions").text("Select a card by clicking 
on it");
			
			var lastCard= ""; //containter holds value from 
last card
			var match= false; //will hold whether the cards 
match or not
			flippedCards.each(function(index){
				if (index ==0){
					lastCard= $(this).data('card');
				}
				else{
					if(lastCard == $(this).data('card')){
						match=true;
					}
				}
				});
				
				if (match){
					flippedCards.addClass('match');
					setTimeout(function(){
						
						flippedCards.remove();
						checkWin();
					}, 600); //what is this for?
				}
				else {
					flippedCards.addClass('fail');
					
					setTimeout(function(){
						//flips cards back over
						$('.card).data('flipped', false);
						$('.card').attr('src', ''https://filletfamilyblog.files.wordpress.com/2013/02/d0490860-0-large.jpg');
						
						//remove outline
						$('.card').removeClass('fail');
					
					}.600);
				}
		}
				
			}
		}
	}
	}
}

/**
	this function sorts an array randomly and then returns it 
to us.
	for our purposes you can think of it like shuffling our 
deck of cards.

	This code was taken from 
<http://stackoverflow.com/questions/2450954/how-to-randomize-
shuffle-a-javascript-array>
	and was not generated by me.

	don't worry to much about understanding it as this is a 
little more advanced
	stuff but we can use it freely to accomplish what we need to!
**/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
fuction checkWin(){
	if ($('card').length==0){
		score++;
		localStorage.setItem("score",score); //saves new score
		$('.score').text(score); //updates score
		if (confirm ('You won! Play again?')){
			location.reload();
		}
	}
}