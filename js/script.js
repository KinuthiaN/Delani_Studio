$("document").ready(function() {
    $("div.image1,#p1").click(function() { 
        $("#p1").toggle();
        // $('.image1').toggle();
    });
});

$("document").ready(function() {
    $("div.image2,#p2").click(function() { 
        $("#p2").toggle();
        // $('.image2').toggle();
    });
});

$("document").ready(function() {
    $("div.image3,#p3").click(function() { 
        $("#p3").toggle();
        // $('.image3').toggle();
    });
});

$(".second-image").hover(function() {
    $(".overlay2").show();
    $(".second-image").mouseleave(function(){
        $(".overlay2").hide();
    });
});

$(".first-image").hover(function() {
    $(".overlay1").show();
    $(".first-image").mouseleave(function(){
        $(".overlay1").hide();
    });
});

$(".third-image").hover(function() {
    $(".overlay3").show();
    $(".third-image").mouseleave(function(){
        $(".overlay3").hide();
    });
});

$(".fourth-image").hover(function() {
    $(".overlay4").show();
    $(".fourth-image").mouseleave(function(){
        $(".overlay4").hide();
    });
});

$(".fifth-image").hover(function() {
    $(".overlay5").show();
    $(".fifth-image").mouseleave(function(){
        $(".overlay5").hide();
    });
});

$(".sixth-image").hover(function() {
    $(".overlay6").show();
    $(".sixth-image").mouseleave(function(){
        $(".overlay6").hide();
    });
});

$(".seventh-image").hover(function() {
    $(".overlay7").show();
    $(".seventh-image").mouseleave(function(){
        $(".overlay7").hide();
    });
});

$(".eighth-image").hover(function() {
    $(".overlay8").show();
    $(".eighth-image").mouseleave(function(){
        $(".overlay8").hide();
    });
});
$("form").submit(function(event){
    var name=$("#NAME").val();
    alert("Thank you " + name + " for your feedback");
});