$(document).ready(function(){
    $("#design").click(function(){
        $("#design").hide();
        $("#designdescription").show();
    });
    $("#designdescription").click(function(){
        $("#designdescription").hide();
        $("#design").show();
    });
    $("#development").click(function(){
        $("#development").hide();
        $("#developmentdescription").show();
    });
    $("#developmentdescription").click(function(){
        $("#developmentdescription").hide();
        $("#development").show();
    });
    $("#product").click(function(){
        $("#product").hide();
        $("#productdescription").show();
    });
    $("#productdescription").click(function(){
        $("#productdescription").hide();
        $("#product").show();
    });
});