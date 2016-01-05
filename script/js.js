$(document).ready(function(){
      $("div.circle").click(
        function()
        {  
            var width = parseInt($(this).css("height"));        
            $(this).animate(
                {
         	      "height":(String(width*0.9)+"px"),
                  "width":(String(width*0.9)+"px"),
         	      "border-width":"10px"
                },200).
                animate(
                {
                "height": (String(width)+"px"),
                "width": (String(width)+"px"),
                "border-width":"12px"
                },400);
        });


        $("#skill2 ul li").mouseover(
        function()
        {
        $(this).animate(
        {
            "width":"50%"
        },600)
        });
      $("#skill2 ul li").mouseout(
        function()
        {
        $(this).delay(600).animate(
        {
            "width":"98%"
        },600)
        });  
});

