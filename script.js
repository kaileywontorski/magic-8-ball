$(document).ready(function() {
  var magic8Ball = {};
  magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

  magic8Ball.askQuestion = function(a) {
    // var randomNumber = Math.random();
    // var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    // var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[Math.floor(Math.random() * this.listOfAnswers.length)];

    $("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    $("#answer").text(answer);
    $("#answer").fadeIn(4000);

    console.log(a);
    console.log(answer);
  };

  console.log(magic8Ball);

  var onClick = function() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    setTimeout(function() {
      var question = prompt("ASK A YES/NO QUESTION!");
      magic8Ball.askQuestion("Hello?");
    }, 500);
  };

  $("#answer").hide();

  $("#questionButton").click(onClick);
});
