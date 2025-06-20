// document.querySelector("h1").innerHTML="abfhbrebardncrdmf";

$(".a").css("color","purple");

$(".b").on("click",function(){
    $(".b").css("color","red");
    setTimeout(()=>{$(".b").css("color","black");},500);
    
});

$(document).on("keypress",function(event){
    $(".c").html(event.key);
    setTimeout(()=>{$(".c").html("Good Morning!");},1000);
    
});

$(".d").on("mouseenter",function(){
    $(".d").css("color","white");
});
$(".d").on("mouseleave",function(){
    $(".d").css("color","black");
});