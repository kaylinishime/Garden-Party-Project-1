// = $('<img src="http://imgur.com/xuboL0V">');
//  $('<img src="http://imgur.com/q6fYImz">');
// = $('<img src="http://imgur.com/rD1QSOV">');
// $('<img src="http://imgur.com/HFzBWKc">');

console.log("jqeury connected");
$(document).ready(function(){



var apple = "http://i.imgur.com/xuboL0V.jpg";
var avocado = "http://i.imgur.com/q6fYImz.jpg";
var strawberry = "http://i.imgur.com/q6fYImz.jpg";
var watermelon = "http://i.imgur.com/HFzBWKc.jpg";

var veggies = [ apple, avocado, strawberry, watermelon, watermelon, strawberry, avocado, strawberry, watermelon, apple, avocado, apple, watermelon, strawberry, avocado, apple, apple, watermelon, apple, strawberry, avocado, watermelon, strawberry, apple, avocado, apple, watermelon, watermelon, apple, strawberry, avocado ];



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



document.addEventListener("click", function(evt){
var x =  evt.target;
console.log(x);
  if (evt.detail === 3 && evt.target.src === apple) {
    console.log("clicked")
    }
  })
  });
