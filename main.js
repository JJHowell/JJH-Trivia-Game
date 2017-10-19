    function MyTimer(callback, val) {
        val = val || 20; 
        var timer=setInterval(function() { 
            callback(val);
            if(val-- <= 0) { 
                clearInterval(timer); 
            } 
        }, 1000);
    }
    new MyTimer(function(val) {
        var timerMsg = "TIME REMAINING: 00:" + (val >= 10 ? val : "0" + val);
        document.getElementById("timer").textContent = timerMsg;

	setTimeout(function(){
  alert("YOU RAN OUT OF TIME! TRY AGAIN!");
	}, 1000*21);
    });

    //I'm still working on getting the timer to give a message by utilizing timerMsg
    
    //I was thinking something like this might work. (See below)

    //var el = document.getElementById(element);
        // if the time is 0 then end the counter
        //if(time == 0) {
            //el.innerHTML = "Move on to next date...";
            //clearInterval(interval);
            //setTimeout(function() {
                //countdown('clock', 3, 0);
            //}, 2000);
        //}

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Leda Atomica") {
		correct++;
}
	if (question2 == "Malaga") {
		correct++;
}	
	if (question3 == "Magritte") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/kinda.gif", "img/lose.gif"];
	var messages = ["PERFECTO!", "Mas O Menos.", "Que malo."];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
