$(function(){
	$(".btnConnect").click(function(){
    $(".boxWallet").fadeIn(500);
  });

  $(".btnMypage").click(function(){
    $(".boxWallet").fadeIn(500);
    $(".userLink .listDepth").slideUp(0);
  });

  $(".userLink .depth").click(function(){
    $(this).toggleClass("on");
    $(".userLink .listDepth").slideToggle(300);
  });

  $(".boxWallet").on("mouseleave", function(){
    $(".boxWallet").fadeOut(500);
  });
});
