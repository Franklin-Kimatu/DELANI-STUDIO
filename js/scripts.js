$(document).ready(function(){
    $("#design").click(function(){
        $("#design").hide(300);
        $("#designdescription").show(300);
    });
    $("#designdescription").click(function(){
        $("#designdescription").hide(300);
        $("#design").show(300)
    });
    $("#development").click(function(){
        $("#development").hide(300);
        $("#developmentdescription").show(300);
    });
    $("#developmentdescription").click(function(){
        $("#developmentdescription").hide(300);
        $("#development").show(300);
    });
    $("#product").click(function(){
        $("#product").hide(300);
        $("#productdescription").show(300);
    });
    $("#productdescription").click(function(){
        $("#productdescription").hide(300);
        $("#product").show(300);
    });
    $(".w-100").hover(function(){
        $(".w-100").fadeIn();
    });
});