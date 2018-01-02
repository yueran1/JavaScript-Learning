/**
 * global window
 */

var main= function(){
    "use strict";
    window.alert("This is repractice of JS");

    var addComment=function(){
        //decalre two vairiable at beginning of function
        
        var $newcomment= $("<p>");
        var $comment_content = $(".comment-input input").val();
        if ($comment_content!==""){
            //add content of input box into <p> element
            $newcomment.text($comment_content);
            //add this <p> to .comment div
            $(".comments").append($newcomment);
            //new comment fadein
            $newcomment.fadeIn();
        } else{
            window.alert("Fuck you, dont leave input empty");
        }
       
    };

    //handle the button listener
    $(".comment-input button").on("click" ,function(){
        addComment();

    });

    $(".comment-input input").on("keypress", function(){
        if(event.keyCode===13){
            addComment();
        }
      

    });

    var countdown=5;
    var x=setInterval(function(){
        $(".timer").text(countdown)
        if (countdown===0)
        {
            //Stop the timer at here
            clearInterval(x);
        }

        countdown--;

    },1000);

    x();

}

//忘了应该用什么call ready function 了
$(document).ready(main);