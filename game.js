

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


var level = 0;
var  started = false;

function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}



function nextSequence() {
  userClickedPattern=[]
  var randomChosenColour = buttonColours[Math.floor(Math.random() * buttonColours.length)];
  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


 level ++;
 $("h1").text("Level " + level); 
  
}

 




$(document).ready(function() {

$(document).keypress(function () {
  if (!started) {
  
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
  }
  
});




$(".btn").click(function (){
  var userChosenColour =$(this).attr("id");

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
 
})





function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}


function checkAnswer(currentLevel) {
  // Check if the most recent user input matches the corresponding game pattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("successful");

    // If the user has completed the sequence for the current level
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); // Generate the next step in the game
      }, 1000);
    }

  } else {
    // Handle the case when the user clicks the wrong button
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver(); // Restart the game
  }
}








function startOver(){
  level = 0;             // Reset the game level to 0
    gamePattern = [];      // Clear the sequence pattern
    started = false;
}











});



  


// // Define the game variables
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var level = 0;
// var started = false;

// // Function to play sound
// function playSound(name) {
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();
// }

// // Function to animate button press
// function animatePress(currentColour) {
//     $("#" + currentColour).addClass("pressed");
//     setTimeout(function () {
//         $("#" + currentColour).removeClass("pressed");
//     }, 100);
// }

// // Function to generate the next sequence
// function nextSequence() {
//     userClickedPattern = []; // Reset user's input for the current level
//     var randomChosenColour = buttonColours[Math.floor(Math.random() * buttonColours.length)];
//     gamePattern.push(randomChosenColour);

//     // Animate the randomly chosen button
//     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomChosenColour);

//     // Update the level
//     level++;
//     $("h1").text("Level " + level);
// }

// // Function to check the user's answer
// function checkAnswer(currentLevel) {
//     if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
//         console.log("successful");

//         // Check if user completed the current sequence
//         if (userClickedPattern.length === gamePattern.length) {
//             setTimeout(function () {
//                 nextSequence(); // Generate the next sequence
//             }, 1000);
//         }
//     } else {
//         console.log("wrong");

//         // Play "wrong" sound and show Game Over effect
//         playSound("wrong");
//         $("body").addClass("game-over");
//         $("h1").text("Game Over, Press Any Key to Restart");

//         setTimeout(function () {
//             $("body").removeClass("game-over");
//         }, 200);

//         startOver(); // Reset the game
//     }
// }

// // Function to reset the game
// function startOver() {
//     level = 0;
//     gamePattern = [];
//     started = false;
// }

// // Event listener for keypress to start the game
// $(document).keypress(function () {
//     if (!started) {
//         $("h1").text("Level " + level);
//         nextSequence();
//         started = true;
//     }
// });

// // Event listener for button clicks
// $(".btn").click(function () {
//     var userChosenColour = $(this).attr("id");
//     userClickedPattern.push(userChosenColour);

//     playSound(userChosenColour);
//     animatePress(userChosenColour);

//     // Check the user's answer after each click
//     checkAnswer(userClickedPattern.length - 1);
// });
