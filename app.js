
console.log("jqeury connected");
$(document).ready(function(){



var apple = "http://i.imgur.com/xuboL0V.jpg";
var avocado = "http://i.imgur.com/q6fYImz.jpg";
var strawberry = "http://i.imgur.com/q6fYImz.jpg";
var watermelon = "http://i.imgur.com/HFzBWKc.jpg";
var snail = "http://i.imgur.com/XI5oAX7.jpg";

var veggies = [ apple, avocado, strawberry, watermelon, watermelon, snail, strawberry, avocado, strawberry, watermelon, snail, apple, avocado, snail, apple, watermelon, strawberry, snail, avocado, apple, apple, watermelon, apple, strawberry, avocado, snail, watermelon, strawberry, apple, avocado, apple, snail, watermelon, watermelon, apple, strawberry, avocado ];



  var shuffle = function(veggies) {
    var currentIndex = veggies.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = veggies[currentIndex];
      veggies[currentIndex] = veggies[randomIndex];
      veggies[randomIndex] = temporaryValue;
    }

    return veggies;
  }

  console.log(shuffle(veggies));

  function farm() {


      $('.image').each(function (i) {
          $(this).append('<img src=' + veggies[i % veggies.length] + ' class="veggies" />');
      });
  }

  farm();

  var score = 0;



document.addEventListener("click", function(evt){
  if (evt.detail === 1 && evt.target.src === apple) {
     $( evt.target ).hide( 500, function() {
     $( evt.target ).remove();
     score = score + 1;
     console.log(score);
     $('#scorePoints').text(score);
   })
   }
  else if (evt.detail === 1 && evt.target.src === snail){
    $( evt.target ).hide( 500, function() {
    $( evt.target ).remove();
    score = score - 2;
    console.log(score);
    $('#scorePoints').text(score);
  })
  }
  else if (evt.detail === 2 && evt.target.src === strawberry) {
      $( evt.target ).hide( 500, function() {
      $( evt.target ).remove();
      score = score + 2;
      console.log(score);
      $('#scorePoints').text(score);
    })
  }
  else if (evt.detail === 3 && evt.target.src === avocado) {
      $( evt.target ).hide( 500, function() {
      $( evt.target ).remove();
      score = score + 3;
      console.log(score);
      $('#scorePoints').text(score);
      })
    }
 else if (evt.detail === 4 && evt.target.src === watermelon) {
      $( evt.target ).hide( 500, function() {
      $( evt.target ).remove();
      score = score + 4;
      console.log(score);
      $('#scorePoints').text(score);
     })
    }
  });
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var oneMinute = 60 * 1,
        display = $('.timer');
    startTimer(oneMinute, display);
});
