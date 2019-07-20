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
});

$(document).ready(function(){
    $("#three1").mouseover(function(){
        $("#work1").show();
    }).mouseout(function(){
        $("#work1").hide();
    });

    $("#three2").mouseover(function(){
        $("#work2").show();
    }).mouseout(function(){
        $("#work2").hide();
    });

    $("#three3").mouseover(function(){
        $("#work3").show();
    }).mouseout(function(){
        $("#work3").hide();
    });

    $("#three4").mouseover(function(){
        $("#work4").show();
    }).mouseout(function(){
        $("#work4").hide();
    });

    $("#three5").mouseover(function(){
        $("#work5").show();
    }).mouseout(function(){
        $("#work5").hide();
    });

    $("#three6").mouseover(function(){
        $("#work6").show();
    }).mouseout(function(){
        $("#work6").hide();
    });

    $("#three7").mouseover(function(){
        $("#work7").show();
    }).mouseout(function(){
        $("#work7").hide();
    });

    $("#three8").mouseover(function(){
        $("#work8").show();
    }).mouseout(function(){
        $("#work8").hide();
    });
})