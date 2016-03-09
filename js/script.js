$(document).ready(function() {
    var questions = [
        "Does your type have enough variation?",
        "Is your design clear?",
        "Could your idea be pushed further?",
        "Is your hierachy clear?",
        "Is your intented feeling being conveyed?",
        "Is your craftsmenship clean?",
        "Is your type legible and appropriately sized?",
        "Is your design process evident?",
        "Does your color palette enhance the design?",
        "Does your project demonstrate levels of development and refinement?"
    ]
    
    var startIndex = Math.floor(Math.random() * questions.length);
    var currentIndex = startIndex;
    var yesCount = 0;
    
    function nextQuestion() {
        var question = questions[currentIndex];
        
        $("#question").text(question);
        
        currentIndex = currentIndex + 1;
        if (currentIndex == startIndex) {
            if (yesCount > questions.length / 2) {
                $("#question").text("Your design is out of this world!");
            }
            else {
                $("#question").text("Try exploring more design options.");
            }
            
            $("#question").css("font-size", "30px");
            $("#answers").hide();  
        }
        else if (currentIndex >= questions.length) {
            currentIndex = 0;
        }
    }
    
    nextQuestion();
    
    $("div.yes").click(function() {
        nextQuestion();
        yesCount = yesCount + 1;
    });
    
    $("div.no").click(nextQuestion);
    
     var audio1 = document.createElement('audio');
        audio1.setAttribute('src', 'sounds/adriantnt_texture_scratch.mp3');
    
    // Event when mouse hovers over element
	$("div.yes").mouseenter(function () {
        // Get position of div.yes element
        var position = $(this).position();
        audio1.play();
        
        $("div.yes-line").animate({
            // Animate width of line to touch left
            // corner of div.yes element
            width: position.left
        }, 400);
    });
    
    // Event when mouse leaves element
    $("div.yes").mouseout(function () {
        // Animate width of line back to 0
        $("div.yes-line").animate({
            width: 0
        }, 400);
    });
    
    $("div.no").mouseenter(function () {
        var divNo = $(this);
        var position = divNo.position();
        audio1.play();
   
        $("div.no-line").animate({
            width: window.innerWidth - (position.left + divNo.width()) + 1
        }, 400); 
    });
    
    $("div.no").mouseout(function () {
        $("div.no-line").animate({
            width: 0
        }, 400);
    });
    
});
   