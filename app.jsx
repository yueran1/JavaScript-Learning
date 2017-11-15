var main=function(){
    "use strict"
    window.alert("Fuck you! Haha")

    //In this version, we create a function named addComment in order to resue it
    //in click and keypress listener
    var addComment=function(){
        if ($(".comment-input input").val() !=""){
            var $new_comment= $("<p>");
            var $text_comment = $(".comment-input input").val();
            $new_comment.text($text_comment);
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");

        } else{
            window.alert("Fuck you, dont leave empty comment!")
        }

    }

    //In this function, We listening on the Click(button)  
    $(".comment-input button").on("click", function (event){
        addComment();

    });
    

    //In this function we listening on the keypress(key board enter--"input")
    $(".comment-input input").on("keypress", function (event){

        if (event.keyCode===13){
            addComment();
        }

    });

   
    //This a 5 second countdown
    var counter = 5;
    var interval = setInterval(function() {
        
        // Display 'counter' wherever you want to display it.
        $(".timer").text(counter);
        if (counter == 0) {
            // Display a login box
            $(".timer").text(counter);
            clearInterval(interval);
            window.alert("Fuck you, there is 5 second pass out");
            
        }
        counter--;
        
    }, 1000);

    setInterval();
};

$(document).ready(main);




