var css_background = "blue";
var css_border = "black";
var css_width = "50px";
var css_height = "30px";
var css_BR = "1px";
     function css_func() {
          css_tag = ".result{background-color:"+css_background+";width:"+css_width+" ;height: "+css_height+";border: "+css_border+" solid 2px;border-radius:"+css_BR+";}";
     
          $("style").replaceWith("<style>"+css_tag+"</style>");
          $("#css_coding").text(css_tag);
     }

$(document).ready(function(){
    css_func() ;

    $("#inner").change(function(){
          css_background = $(this).val();
          css_func();
    });
   //width-changer
   $("#width-changer").slider(
        {
             range: "min",
             value:50,
             min:50,
             max:100,
             slide: function(event,ui){
                  css_width= ui.value+"px";
                  css_func();
             }

        });
   //height changer
   $("#height-changer").slider(
     {
          range: "min",
          value:30,
          min:20,
          max:50,
          slide: function(event,ui){
               css_height= ui.value+"px";
               css_func();
          }

     });

     //border color
     $("#border").change(function(){
          css_border = $(this).val();
          css_func();
    });

    //Border radius changer
    $("#BR-changer").slider(
     {
          range: "min",
          value:0,
          min:0,
          max:20,
          slide: function(event,ui){
               css_BR= ui.value+"px";
               css_func();
          }

     });
     //getting css in the dialouge box
     $("#get_css").click(function(){
          $("#css_coding").dialog({
               "title":"The style"
          })
     });
});

