$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listofAnswers = ["What the heck are you thinking?", "Yes that may happen.", "Why'd you even ask that?", "Ask again.", "Without a doubt."];

magic8Ball.askQuestion = function(a){
	//var randomNumber = Math.random();
	//var randomNumberAnswers = randomNumber * this.listofAnswers.length;
	//var randomIndex = Math.floor(randomNumberAnswers);
	var answer = this.listofAnswers[Math.floor(Math.random() * this.listofAnswers.length)];

	$("#8ball").effect("shake");
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").text( answer );
	$("#answer").fadeIn( 4000 );

	console.log(a);
	console.log(answer);
};

console.log(magic8Ball);

var onClick = function() {
	$("#answer").hide();	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
setTimeout(function() {
    var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.askQuestion("Hello?");
}, 500);

};
	$("#answer").hide();
	$("#questionButton").click( onClick );
});
