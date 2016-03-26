$(document).ready(function() {

  $('.card').click(function() {
    if($(this).data('flipped') == true) {
      $(this).attr('src','https://filletfamilyblog.files.wordpress.com/2013/02/d0490860-0-large.jpg');
      $(this).data('flipped',false);
    }
    else {
      $(this).attr('src','http://cs.nyu.edu/courses/spring15/CSCI-UA.0061-001/newcards/images/Ace%20of%20Spades.jpg')
      $(this).data('flipped',true);
    }
  });

  var AceOfSpades= new Image();
  AceOfSpades.src="http://cs.nyu.edu/courses/spring15/CSCI-UA.0061-001/newcards/images/Ace%20of%20Spades.jpg";
  var Mario= new Image();
  Mario.src="http://vignette1.wikia.nocookie.net/mario/images/1/15/MarioNSMB2.png/revision/latest?cb=20120816162009"
  var yoshi= new Image();
  yoshi.src="https://upload.wikimedia.org/wikipedia/en/3/39/YoshiMarioParty9.png"
  var laptop= new Image ();
  laptop.src="http://www.cs.technion.ac.il/~cs234326/cgi-bin/iritALL/laptop.jpg"
  var Maryland= new Image();
  Maryland.src="https://collegediabetesnetwork.org/sites/default/files/MFlag.png"
  var terps= new Image();
  terps.src="http://ih.constantcontact.com/fs169/1113840988973/img/44.jpg?a=1116001867584"
  var monster_truck= new Image();
  monster_truck.src="http://media.hamptonroads.com/cache/files/images/1020581000.jpg"
  var star= new Image();
  star.src="http://vignette4.wikia.nocookie.net/fantendo/images/2/26/Star.PNG/revision/20090803173255"
  var clashofclans= new Image();
  clashofclans.src="http://www.onehackup.com/wp-content/uploads/2015/02/clash-of-clans-logo.jpg"
  var Nemo= new Image();
  Nemo.src="http://vignette2.wikia.nocookie.net/pixar/images/8/82/Nemo.png/revision/latest?cb=20110504131029"
  var kitten= new Image();
  kitten.src= "https://s-media-cache-ak0.pinimg.com/236x/12/f3/fd/12f3fdcc11658741787fd5c839ca8705.jpg"
  var colorwheel= new Image();
  colorwheel.src="http://www.clker.com/cliparts/x/m/R/a/7/o/rainbow-of-colors.svg"
});
