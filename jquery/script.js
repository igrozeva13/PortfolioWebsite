$(document).ready(function(){
        $("#floating-box").fadeIn(2000);
});

$(document).ready(function(){
        $("#floating-box-interior").fadeIn(1000);

        $("#dropdown-work").click(function(){
            $(".dropdown-sub").slideToggle(750);
        });
});
