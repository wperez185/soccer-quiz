var soccerQuiz = {
    quiz: [{
            question: "What national team does Lionel Messi play for?",
            answer: "Argentina",
            possibleAnswers: ["Brazil", "USA", "Spain", "Argentina"]
        },
        {
            question: "How many World Cups has Brazil won?",
            answer: 5,
            possibleAnswers: [0, 5, 3, 1]
        },
        {
            question: "Who hosted the 2014 World Cup?",
            answer: "Brazil",
            possibleAnswers: ["Brazil", "USA", "England", "France"]
        },
        {
            question: "How many teams participate in the World Cup?",
            answer: 32,
            possibleAnswers: [10, 20, 32, 16]
        },
        {
            question: "What national team does Cristiano Ronaldo play for?",
            answer: "Portugal",
            possibleAnswers: ["Portugal", "Mexico", "Germany", "Italy"]
        },
        {
            question: "Who has NOT played for the USMNT?",
            answer: "David Beckham",
            possibleAnswers: ["Landon Donovan", "Tim Howard", "David Beckham", "Clint Dempsey"]
        },
        {
            question: "Who won the first World Cup in 1930?",
            answer: "Uruguay",
            possibleAnswers: ["Brazil", "Uruguay", "Italy", "Germany"]
        },
        {
            question: "What is the best finish the USMNT has had in World Cup history?",
            answer: "Third place",
            possibleAnswers: ["Champion", "Second place", "Third place", "Last place"]
        },
        {
            question: "Which player has the most World Cups in history?",
            answer: "Pele(Brazil)",
            possibleAnswers: ["Pele(Brazil)", "Diego Maradona(Argentina)", "Zinedine Zidane(France)", "Gianluigi Buffon(Italy)"]
        },
        {
            question: "How many times has El Salvador participated in the World Cup?",
            answer: 2,
            possibleAnswers: [0, 1, 3, 2]
        },
    ],
    currentQuestion: 0,
    score: 0

};

// console.log(Object.keys(soccerQuiz.quiz[0]));

$(document).ready(function() {
    $(".start-button").click(function() {
        $(".quiz-start").addClass("hide");
        $(".quiz, .number-questions").removeClass("hide");
        loadQuestion(soccerQuiz.currentQuestion);
    });
    $(".next").click(function() {
        soccerQuiz.currentQuestion++;
        loadQuestion(soccerQuiz.currentQuestion);
        $(".message-container, .next").addClass("hide");
    });

    $("ul").on('click', 'li', function(event) {
        // console.log($(event.currentTarget)[0].innerHTML);
    });
});

function loadQuestion(currentQuestion) {
    var possibleAnswer = soccerQuiz.quiz[currentQuestion].possibleAnswers;
    var correctAnswer = soccerQuiz.quiz[currentQuestion].answer;
    var numberOfQuestions = currentQuestion + 1;
    var list = "";
    var result = "Your final score is " + soccerQuiz.score + '<button class="start-button retry button">Try Again</button>';
    var wrongAnswer = "Your answer is incorrect. " + correctAnswer + " is the correct answer.";
    var rightAnswer = "Your answer is correct.";
    for (var i = 0; i < possibleAnswer.length; i++) {
        list += "<li class =>" + possibleAnswer[i] + "</li>";
    }
    // for (var j = 0; j < correctAnswer.length; j++) {
    // }
    $(".number-questions").text(numberOfQuestions + "/10");
    $("ul").html(list);
    $(".question").html(soccerQuiz.quiz[currentQuestion].question);
    $("ul").on('click', 'li', function(event) {
        $(".message-container, .next").removeClass("hide");
        if (numberOfQuestions == 10) {
                $(".final-results").removeClass("hide").addClass("animated rollIn");
                $(".quiz, .number-questions").addClass("hide");
                // $(".final-results").text(result);
                $(".final-results").html(result);
                $(".retry").click(function() {
                    location.reload();
                });
            return false;
        }
        if ($(event.currentTarget).text() == correctAnswer) {
            $(".message").html(rightAnswer);
            soccerQuiz.score++;
            $(event.currentTarget).css("background-color", "green");
        } else {
            $(".message").html(wrongAnswer);
            $(event.currentTarget).css("background-color", "red");
        }
        // $(".score").removeClass("hide");
        $(".score").removeClass("hide").text("score: " + soccerQuiz.score + " right answer out of 10").addClass('animated fadeInDownBig');
    });

}
// console.log(soccerQuiz.quiz[currentQuestion].answer);
