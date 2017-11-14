var main=function(){
    "use strict"
    window.alert("Fuck you! Haha")

    //In this function, We listening on the Click(button)
    
    
    $(".comment-input button").on("click", function (event){
      
        if ($(".comment-input input").val() !=""){
            var $new_comment= $("<p>");
            var $text_comment = $(".comment-input input").val();
            $new_comment.text($text_comment);
    
            $(".comments").append($new_comment);
            $(".comment-input input").val("");

        } else{
            window.alert("Fuck you, dont leave empty comment!")
        }
       

    });
    

    //In this function we listening on the keypress(key board enter--"input")
    $(".comment-input input").on("keypress", function (event){

        if (event.keyCode===13){
            if ($(".comment-input input").val() !=""){
                var $new_comment= $("<p>");
                var $text_comment = $(".comment-input input").val();
                $new_comment.text($text_comment);
                //Jquery fadein function, before fadein, you should use hide() function
                $new_comment.hide();
        
                $(".comments").append($new_comment);
                $new_comment.fadeIn();
                $(".comment-input input").val("");
    
            } else{
                window.alert("Fuck you, dont leave empty comment!");
            }

        }


    });
};

$(document).ready(main);

