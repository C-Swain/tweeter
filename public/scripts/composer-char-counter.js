$(document).ready(function() {
 const maxlen= 140;

 $('#tweet-text').keyup(function(e) {

  const tweetL = $(this).val().length;
  const rem = maxlen - tweetL;
console.log("keyup",tweetL,rem);
if (rem < 0) {
  $(".counter").css('color', 'red');
}
$(".counter").text(rem);
 });

});