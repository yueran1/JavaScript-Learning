var main=function(){
    "use strict"
    window.alert("Fuck you! Haha")

    $(".comment-input button").on("click", function (event){
        //console.log("hello world!");
        //window.alert("fuck you again!!");
        var $new_comment= $("<p>");
        var $text_comment = $(".comment-input input").val();
        $new_comment.text($text_comment);

        $(".comments").append($new_comment);

    });
};

$(document).ready(main);

