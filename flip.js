$(document).ready(function() {

  var AceOfSpades= new Image();
  AceOfSpades.src="http://cs.nyu.edu/courses/spring15/CSCI-UA.0061-001/newcards/images/Ace%20of%20Spades.jpg";

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
});
