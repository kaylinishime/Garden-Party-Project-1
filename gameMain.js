
console.log("jqeury connected");
$(document).ready(function(){


var level;

//randomizes veggetables on farmland
var apple = "http://i.imgur.com/xuboL0V.jpg";
var avocado = "http://i.imgur.com/q6fYImz.jpg";
var strawberry = "http://i.imgur.com/u7GvQkK.jpg";
var snail = "http://i.imgur.com/XI5oAX7.jpg";
var watermelon = "http://i.imgur.com/d3BVON7.jpg";
var objs = [apple,avocado,strawberry,watermelon,snail];
var test = [];

//randomize veggies and place them in an empty array which makes the new land

function farm() {
  for (var i = 0; i<= 80; i++) {
    test.push(objs[Math.ceil(Math.random()*10) % 5]);
  };
  $('.image').each(function (i) {
    $(this).append('<img src=' + test[i] + ' class="veggies" />');
  });
};

function resetLand(){
  $('.image').each(function (i) {
    $(this).text("");
  });
};


//score points assigned to each vegetable
var score = 0;
$('#land').on("click", "span", function(evt){
  if (evt.target.src === apple) {
    score = score + 1;
  } else if (evt.target.src === snail) {
    score = score + 2;
  } else if (evt.target.src === strawberry) {
    score = score + 5;
  } else if (evt.target.src === avocado) {
    score = score + 3;
  } else if (evt.target.src === watermelon) {
   score = score + 4;
 } else {
   console.log('no match');
 };

$( evt.target ).hide( 500, function() {
  $( evt.target ).remove();
  console.log(score);
  console.log($('#scorePoints').text(score)); //displays the current score
 });
});

//Clock countdown
var timer;
var minutes;
var seconds;
var interval;

function startTimer(duration, display) {
   timer = duration, minutes, seconds;

   var interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);
        if (score === 100 && level === "one"){
          clearInterval(interval);
          winLevelOne();
        }
        else if (score > 100 && level === "one"){
          clearInterval(interval);
          youLose();
        }

        if (score === 200 && level === "two"){
          clearInterval(interval);
          winLevelTwo();
        }
        else if (score > 200 && level === "two"){
          clearInterval(interval);
          youLose();
        }
        else if (score === 268 && level === "two"){
          console.log("You win!");
          winLevelThree();
        }
        //
        // else if (score === 5) {
        //   console.log("You win!");
        //   timer = 0;
        //   clearInterval(interval);
        //   winLevelTwo();
        // }


      if (--timer < 0) {
        timer = 0;
        if (score === targetScore.levelOne && level === "one"){
          console.log("You win!");
        } else if (score !== targetScore.levelOne && level === "one"){
          youLose();
          };
        }
      }, 1000);
};

var oneMinute = 60,
display = $('.timer');



//popup window before game starts - level 1

$('#first').click(function() {
  $('#popupOne').hide();
  startTimer(60, display);
  level = "one";
  farm();
});

//popup window - level 2
function winLevelOne() {
  timer = 0;
$('#popupTwo').show();
$('#second').click(function() {
  $('#popupTwo').hide();
  startTimer(60, display);
  test = [];
  resetLand();
  level = "two";
  score = 0;
  farm();
});
}

function winLevelTwo() {
  timer = 0;
$('#popupThree').show();
$('#third').click(function() {
  $('#popupThree').hide();
  startTimer(60, display);
  test = [];
  resetLand();
  level = "three";
  score = 0;
  farm();
});
}

function winLevelThree() {
  timer = 0;

$('#popupThree').show();
$('#third').click(function() {
  $('#popupThree').hide();
  startTimer(60, display);
});
}

//When player loses, must restart to Level 1!
function youLose(){
  score = 0;
$('.restartOne').show();
$('#restart').click(function(){
  $('.restartOne').hide();
  test =[];
  resetLand();
  farm();
  startTimer(60, display);
  console.log(startTimer);
})
}


var targetScore = {
  levelOne: 100,
  levelTwo: 5,
  levelThree: 300
}


});
