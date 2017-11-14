var main=function(){
    "use strict"
    window.alert("Fuck you! Haha")

    $(".comment-input button").on("click", function (event){
        //console.log("hello world!");
        //window.alert("fuck you again!!");
        $(".comments").append("Fuck you baby!!");

    });
};

$(document).ready(main);

