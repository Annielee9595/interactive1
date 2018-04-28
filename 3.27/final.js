// Change this to increase or slow typing speed
// The console will type each letter at a random interval between 0ms and `speed` ms.
$(document).scroll(function() {
  var st = $(this).scrollTop();
  $("#header").css({
    "background-position-y": (-st/20)
  })
  $("#headerc").css({
    "top": (-st/5),
    "bottom": (st/5)
  })
});



// Change this to increase or slow typing speed
// The console will type each letter at a random interval between 0ms and `speed` ms.
let speed = 150;
let cursorSpeed = 400;
let time = 0;
let prevTime = 0;

// Change this variable to change what gets typed
let text = 'Net neutrality is defined as internet providers allowing clients the same traffic speed, and not slowing any traffic to beat competitors. All companies should give the same same network speed to all buyers. They should not be allowed to block or slow down the speed of the internet just because some people pay more money for it. All people in all types of companies should provide the same internet speed.';

function writeWord(word) {
  for (let c in word.split('')) {
    time = Math.floor(Math.random() * speed);

    setTimeout(() => {
      $('#text').before(word[c]);
    }, (prevTime + time));

    prevTime += time;
  }
}

writeWord(text);

// blink cursor 
window.setInterval(() => {
  $('.cursor').toggleClass('hide');
}, cursorSpeed);


















// race

// Click function to start Race
$('#go').click(function(){
  
  //function check to see if race is complete
  function checkIfComplete(){
    if(isComplete == false){
      isComplete = true;
    } else{
      place = 'Loser';
    }
  }
  
  //gets width of cars  
  let carWidth = $('#car1').width();
  //gets width of racetrack
  let raceTrackWidth = $('#racetrack').width() - carWidth;
  
  //Generate rand Num
  let raceTime1 = Math.floor(Math.random() * 7000 + 1);
  let raceTime2 = Math.floor(Math.random() * 1000 + 1);
  let raceTime3 = Math.floor(Math.random() * 8000 + 1);
  let raceTime4 = Math.floor(Math.random() * 5000 + 1);
  let raceTime5 = Math.floor(Math.random() * 9000 + 1);
  let raceTime6 = Math.floor(Math.random() * 6000 + 1);

  
  //flag var
  let isComplete = false;
  
  let place = 'Winner';

  
  
  //animate cars
  $('#car1').animate({
    left: raceTrackWidth
  }, raceTime1, function(){
    //animation complete
    checkIfComplete();
    
    $('#raceInfo1 span').text( place );
  });
  
  $('#car2').animate({
    left: raceTrackWidth
  }, raceTime2, function(){
    //animation complete
    checkIfComplete();
    
    $('#raceInfo2 span').text( place );
  });

  $('#car3').animate({
    left: raceTrackWidth
  }, raceTime3, function(){
    //animation complete
    checkIfComplete();
    
    $('#raceInfo3 span').text( place );
  });
    $('#car4').animate({
    left: raceTrackWidth
  }, raceTime4, function(){
    //animation complete
    checkIfComplete();
    
    $('#raceInfo4 span').text( place );
  });
    $('#car5').animate({
    left: raceTrackWidth
  }, raceTime5, function(){
    //animation complete
    checkIfComplete();
    
    $('#raceInfo5 span').text( place );
  });
    $('#car6').animate({
    left: raceTrackWidth
  }, raceTime6, function(){
    //animation complete
    checkIfComplete();
    
    $('#raceInfo6 span').text( place );
  });
});


$('#reset').click(function(){
  $('.car').css('left', '0');
  $('.raceInfo span').text('');
});
