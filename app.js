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

  farm()

});

// function drawBoard(){
//   for (var i=0; i<30; i++){
//     var span = $('span').index(i);
//     span = veggies[i];
//   }
// }
//
// drawBoard();
//
// });
//
//
//

//
// buildHTML: function(){
// 			var frag = '';
// 			this.$cards.each(function(k, v){
// 				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
// 				<div class="front"><img src="'+ v.img +'"\
// 				alt="'+ v.name +'" /></div>\
// 				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
// 				alt="Codepen" /></div></div>\
// 				</div>';
// 			});
// 			return frag;
// 		}
// 	};
//
// 	var cards = [
// 		{
// 			name: "php",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
// 			id: 1,
// 		},
// 		{
// 			name: "css3",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
// 			id: 2
// 		},
// 		{
// 			name: "html5",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
// 			id: 3
// 		},
// 		{
// 			name: "jquery",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
// 			id: 4
// 		},
// 		{
// 			name: "javascript",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
// 			id: 5
// 		},
// 		{
// 			name: "node",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
// 			id: 6
// 		},
// 		{
// 			name: "photoshop",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
// 			id: 7
// 		},
// 		{
// 			name: "python",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
// 			id: 8
// 		},
// 		{
// 			name: "rails",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
// 			id: 9
// 		},
// 		{
// 			name: "sass",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
// 			id: 10
// 		},
// 		{
// 			name: "sublime",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
// 			id: 11
// 		},
// 		{
// 			name: "wordpress",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
// 			id: 12
// 		},
// 	];
//
// 	Memory.init(cards);
