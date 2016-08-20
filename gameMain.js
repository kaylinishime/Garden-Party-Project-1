console.log("jqeury connected");
// $(document).ready(function(){


var level;
//Clock countdown
var timer;
var minutes;
var seconds;
var interval;

//randomizes veggetables on farmland
var apple = "http://i.imgur.com/xuboL0V.jpg";
var avocado = "http://i.imgur.com/q6fYImz.jpg";
var strawberry = "http://i.imgur.com/u7GvQkK.jpg";
var snail = "http://i.imgur.com/XI5oAX7.jpg";
var watermelon = "http://i.imgur.com/d3BVON7.jpg";
var objs = [apple, avocado, strawberry, watermelon, snail];
var test = [];

//randomize veggies and place them in an empty array which makes the new land

function farm() {
  for (var i = 0; i <= 100; i++) {
    test.push(objs[Math.ceil(Math.random() * 10) % 5]);
  };
  $('.image').each(function(i) {
    $(this).append('<img src=' + test[i] + ' class="veggies" />');
  });
};

//empties the array to create a new shuffle after every level or lose
function resetLand() {
  $('.image').each(function(i) {
    $(this).text("");
  });
};


//score points assigned to each vegetable
var score = 0;
$('#land').on("click", "span", function(evt) {
  if (evt.target.src === apple) {
    score = score + 1;
  } else if (evt.target.src === snail) {
    score = score - 2;
  } else if (evt.target.src === strawberry) {
    score = score + 4;
  } else if (evt.target.src === avocado) {
    score = score + 7;
  } else if (evt.target.src === watermelon) {
    score = score + 6;
  } else {
    console.log('no match');
  };

  $(evt.target).hide(500, function() {
    $(evt.target).remove();
    console.log(score);
    console.log($('#scorePoints').text(score)); //displays the current score
  });
});

var targetScore = {
  levelOne: 104,
  levelTwo: 168,
  levelThree: 201,
  levelFour: 142,
  levelFive: 179,
  levelSix: 195,
  levelSeven: 209,
};




function clearAllIntervals() {
  var lastId = setInterval(null, 5000)
  for (var i = 0; i <= lastId; i++) {
    clearInterval(i)
  }
};

function startTimer(duration, display) {
  clearAllIntervals()
  timer = duration, minutes, seconds;

  var interval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.text(minutes + ":" + seconds);

    if (score === 104 && level === "one") {
      clearInterval(interval);
      console.log(clearInterval);
      winLevelOne();
    } else if (score > 104 && level === "one") {
      clearInterval(interval);
      console.log(clearInterval);
      youLose();
    }
    if (score === 168 && level === "two") {
      winLevelTwo();
    } else if (score > 168 && level === "two") {
      youLose();
    }
    if (score === 201 && level === "three") {
      winLevelThree();
    } else if (score > 201 && level === "three") {
      youLose();
    }
    if (score === 142 && level === "four") {
      winLevelFour();
    } else if (score > 142 && level === "four") {
      youLose();
    }
    if (score === 179 && level === "five") {
      winLevelFive();
    } else if (score > 179 && level === "five") {
      youLose();
    }
    if (score === 195 && level === "six") {
      winLevelSix();
    } else if (score > 195 && level === "six") {
      youLose();
    }
    if (score === 209 && level === "seven") {
      winLevelSeven();
    } else if (score > 209 && level === "seven") {
      youLose();
    };

    if (--timer < 0) {
      timer = 0;
      if (score === targetScore.levelOne && level === "one") {
        winLevelOne();
      } else if (score !== targetScore.levelOne && level === "one") {
        youLose();
      }
      if (score === targetScore.levelTwo && level === "two") {
        winLevelTwo();
      } else if (score !== targetScore.levelTwo && level === "two") {
        youLose();
      }
      if (score === targetScore.levelThree && level === "three") {
        winLevelThree();
      } else if (score !== targetScore.levelThree && level === "three") {
        youLose();
      }
      if (score === targetScore.levelFour && level === "four") {
        winLevelFour();
      } else if (score !== targetScore.levelFour && level === "four") {
        youLose();
      }
      if (score === targetScore.levelFive && level === "five") {
        winLevelFive();
      } else if (score !== targetScore.levelFive && level === "five") {
        youLose();
      }
      if (score === targetScore.levelSix && level === "six") {
        winLevelSix();
      } else if (score !== targetScore.levelSix && level === "six") {
        youLose();
      }
      if (score === targetScore.levelSeven && level === "seven") {
        winLevelSeven();
      } else if (score !== targetScore.levelSeven && level === "seven") {
        youLose();
      };
    };
  }, 1000);
};

display = $('.timer');

// instructions window
$('#zero').click(function() {
  $('#instructions').hide();
  levelOne();
});

//popup level 1
function levelOne() {
  $('#popupOne').show();
  $('#first').click(function() {
    $('#popupOne').hide();
    $('#scoreOne').show();
    test = [];
    resetLand();
    level = "one";
    score = 0;
    farm();
    startTimer(60, display);
  });
};

//When player loses, must restart to Level 1!
function youLose() {
  $('.restartOne').show();
  $('#restart').click(function() {
    $('#scoreOne').hide();
    $('#scoreTwo').hide();
    $('#scoreThree').hide();
    $('#scoreFour').hide();
    $('#scoreSix').hide();
    $('#scoreSeven').hide();
    $('.restartOne').hide();
    score = 0;
    levelOne();
  });
};

//popup window - level 2
function winLevelOne() {
  timer = 0;
  $('#popupTwo').show();
  $('#second').click(function() {
    $('#popupTwo').hide();
    $('#scoreOne').hide();
    $('#scoreTwo').show();
    startTimer(60, display);
    test = [];
    resetLand();
    level = "two";
    score = 0;
    farm();
  });
};

function winLevelTwo() {
  timer = 0;
  $('#popupThree').show();
  $('#third').click(function() {
    $('#popupThree').hide();
    $('#scoreTwo').hide();
    $('#scoreThree').show();
    startTimer(50, display);
    test = [];
    resetLand();
    level = "three";
    score = 0;
    farm();
  });
};

function winLevelThree() {
  timer = 0;
  $('#popupFour').show();
  $('#four').click(function() {
    $('#popupFour').hide();
    $('#scoreThree').hide();
    $('#scoreFour').show();
    startTimer(40, display);
    test = [];
    resetLand();
    level = "four";
    score = 0;
    farm();
  });
};

function winLevelFour() {
  timer = 0;
  $('#popupFive').show();
  $('#five').click(function() {
    $('#popupFive').hide();
    $('#scoreFour').hide();
    $('#scoreFive').show();
    startTimer(30, display);
    test = [];
    resetLand();
    level = "five";
    score = 0;
    farm();
  });
};

function winLevelFive() {
  timer = 0;
  $('#popupSix').show();
  $('#six').click(function() {
    $('#popupSix').hide();
    $('#scoreFive').hide();
    $('#scoreSix').show();
    startTimer(25, display);
    test = [];
    resetLand();
    level = "six";
    score = 0;
    farm();
  });
};

function winLevelSix() {
  timer = 0;
  $('#popupSeven').show();
  $('#seven').click(function() {
    $('#popupSeven').hide();
    $('#scoreSix').hide();
    $('#scoreSeven').show();
    startTimer(20, display);
    test = [];
    resetLand();
    level = "seven";
    score = 0;
    farm();
  });
};

function winLevelSeven() {
  timer = 0;
  $('#popupWin').show();
  $('#win').click(function() {
    $('#scoreSeven').hide();
    $('#popupWin').hide();
    levelOne();
    test = [];
    resetLand();
    score = 0;
    farm();
  });
};





// });
