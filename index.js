var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var userChosencolor ;

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $(".head").text("Level" +" "+ level);
    nextSequence();
    started = true;
  }
});
var randomChosenColour;
function nextSequence() {
  userClickedPattern = [];
  level++;
  $(".head").text("level"+level);
  var randomNumber= Math.random()*4 ;
  var randomNumber1=Math.floor(randomNumber);
  randomChosenColour = buttonColours[randomNumber1];
  
  var classColor=randomChosenColour;
  
  console.log($("."+classColor).text());
  $("."+classColor).addClass("blink");
  setTimeout(function () {
    $("."+classColor).removeClass("blink")
  },200);
  gamePattern.push(randomChosenColour);
}

console.log(gamePattern);


$(".btn").click(function(){
  var color=this.innerText;
  userChosencolor=color;
  userClickedPattern.push(userChosencolor);
  var sound= new Audio("./sounds/"+color+".mp3");
  sound.play();

  console.log($("."+color).text());
$("."+color).addClass("blink");
setTimeout(function () {
  $("."+color).removeClass("blink")
},200);
checkAnswer(userClickedPattern.length-1);
})



function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var sound1= new Audio("./sounds/"+"wrong"+".mp3");
  sound1.play();
  $("body").addClass("error");
  setTimeout(function () { $("body").removeClass("error")},300);
    $(".head").text("Wrong! Refresh to restart");
  }
}

