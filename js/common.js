$(function(){
  var winW = $(window).outerWidth();

  if(767 < winW){
    pcEvent();
  }else if(winW < 768){
    mobileEvent();
  }

  // PC
  function pcEvent(){
    $(".boxWallet").on("mouseleave", function(){
      $(".boxWallet").fadeOut(500);
    });

    if($(".boxGnb_mo").css("display") == "block"){
      $(".boxGnb_mo").css("display","none");
    }

    if($(".boxWallet").css("display") == "block"){
      $(".boxWallet").css("display","none");
    }
  }

  //Mobile
  function mobileEvent(){
    if($(".boxWallet").css("display") == "none"){
      $(".boxWallet").css("display","block");
    }
  }

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

  $(".btnGnb_mo").click(function(e){
    e.preventDefault();
    $("body").css("overflow", "hidden");
    $(".boxGnb_mo").fadeIn(300);
  });

  $(".boxGnb_mo .close").click(function(e){
    e.preventDefault();
    $("body").css("overflow", "auto");
    $(".boxGnb_mo").fadeOut(300);
  });

  $(window).resize(function(){
    winW = $(window).outerWidth();

    if(767 < winW){
      pcEvent();
    }else if(winW < 768){
      mobileEvent();
    }
  });

  $(".popup--open").click(function(e){
    e.preventDefault();
    var target = $(this).attr("data-pop");
    $("#"+target).fadeIn(300);

    dim_open();
  });

  $(".popBasic .close").click(function(e){
    e.preventDefault();
    $(this).parent().fadeOut(300);

    dim_close();
  });

  function dim_open(){
    $("#dim").fadeIn(300);
    $("body").css("overflow", "hidden");
  }

  function dim_close(){
    $("#dim").fadeOut(300);
    $("body").css("overflow", "auto");
  }
});
