
console.log("jqeury connected");
$(document).ready(function(){



//randomizes veggetables on farmland

  var apple = "http://i.imgur.com/xuboL0V.jpg";
  var avocado = "http://i.imgur.com/q6fYImz.jpg";
  var strawberry = "http://i.imgur.com/u7GvQkK.jpg";
  var snail = "http://i.imgur.com/XI5oAX7.jpg";
  var watermelon = "http://i.imgur.com/d3BVON7.jpg";

  var objs = [apple,avocado,strawberry,watermelon,snail];
  var test = [];

  for(var i = 0; i<= 80; i++){
    test.push(objs[Math.ceil(Math.random()*10) % 5]);
  }

  function farm() {
    $('.image').each(function (i) {
      $(this).append('<img src=' + test[i] + ' class="veggies" />');
      });
    }
  farm();


//Score point logic, how many points per crop clicked
var score = 0;
// TODO use jquery

$('#land').on("click", "span", function(evt){
  // console.log(evt.detail); // doesn't work with jquery
  if (evt.target.src === apple) {
    score = score + 1;
  } else if (evt.target.src === snail) {
    console.log(snail,evt);
    score = score + 2;
  } else if (evt.target.src === strawberry) {
    score = score + 2;
  } else if (evt.target.src === avocado) {
    score = score + 3;
  } else if (evt.target.src === watermelon) {
   score = score + 4;
 } else {
   console.log('no match');
 }
 $( evt.target ).hide( 500, function() {
   $( evt.target ).remove();
   console.log(score);
   $('#scorePoints').text(score);
 });
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
          timer = 0;
        }
      }, 1000);
}

var oneMinute = 60 * 1,
display = $('.timer');

$('i').on("click", function() {
    startTimer(oneMinute, display);

});

});


//When time stops, player should not be able to click on any items for points
// function stopTime(){
//
// }

//additional things to add:
//when item is clicked, show quick popup of points earned or lost (1, 2, 3, 4, or -1)
//start window/alert window "Player 1 ready?" and can click to start (move to main window)
//restart game, window for "Player 2 ready?
//third window, displays player 1 & player 2 points, declares winner
//need to write instructions/click values on the bottom, &start window
