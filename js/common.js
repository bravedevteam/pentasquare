$(function(){
  var winW = $(window).outerWidth();

  if(767 < winW){
    pcEvent();
  }else if(winW < 768){
    mobileEvent();
  }

  $("body").click(function(event){
    var target = $(event.target);
    if(!target.parents().hasClass("boxWallet") && !target.parents().hasClass("btnMypage") && !target.hasClass("back") && !target.parents().hasClass("boxSendNFT")){
      if(767 < winW && $(".boxWallet").css("display") == "block" || 767 < winW && $(".boxSendNFT").css("display") == "block"){
        $(".boxWallet").fadeOut(500);
        $(".boxSendNFT").fadeOut(500);
      }
    }
  });
  // PC
  function pcEvent(){
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

  $("#btnSendNFT").click(function(){
    $("#pageSendNFT").fadeOut(500);
    $("#pageNFTSend").fadeIn(500);
  });

  $(".tabArea a").click(function(e){
    e.preventDefault();
    var target = $(this).attr("data-tab");
    $(this).addClass("active").siblings().removeClass("active");
    $("#"+target).addClass("active").siblings().removeClass("active");
  });

  $(".inputTab").change(function(){
    var target = $(this).attr("data-tab");
    $("#"+target).addClass("active").siblings().removeClass("active");
  });

	$(".btnConnect").click(function(){
    $(".boxWallet").fadeIn(500);
  });

  $(".btnMypage").click(function(){
    if($(".boxWallet").css("display") == "block"){
      $(".boxWallet").fadeOut(500);
    }else{
      $(".boxWallet").fadeIn(500);
    }
    $(".userLink .listDepth").slideUp(0);
  });

  $("#btnNFTSend").click(function(){
    $(".boxWallet").fadeOut(500);
    $("#pageSendNFT").fadeIn(500);
  });

  $("#pageSendNFT .back").click(function(){
    $(".boxWallet").fadeIn(500);
    $("#pageSendNFT").fadeOut(500);
  });
  $("#pageNFTSend .close").click(function(){
    $("#pageNFTSend").fadeOut(500);
    $("#pageSendNFT").fadeIn(500);
  });

  $(".userLink .depth").click(function(){
    $(this).toggleClass("on");
    $(".userLink .listDepth").slideToggle(300);
  });

  $(".btnGnb_mo").click(function(e){
    e.preventDefault();
    $("body").css("overflow", "hidden");
    $(".boxGnb_mo").fadeIn(300);
    $(".boxWallet").css("display","block");
  });

  $(".open--sendNFT").click(function(){
    var target = $(this).attr("data-page");
    $(".boxWallet").fadeOut(300);
    if(target == "pageNFTSend_mo"){
      $(".boxSendNFT").fadeOut(300);
    }
    $("#"+target).fadeIn(300);
    $(".boxGnb_mo").scrollTop(0);
  });
  $(".close--sendNFT").click(function(){
    $(".boxSendNFT").fadeOut(300);
    $(".boxWallet").fadeIn(300);
    $(".boxGnb_mo").scrollTop(0);
  });

  $(".boxGnb_mo .close").click(function(e){
    e.preventDefault();
    $("body").css("overflow", "auto");
    $(".boxGnb_mo").fadeOut(300);
  });

  if(!$(".listHistory").hasClass("type--creation")){
    $(".listHistory>ul>li .sub").slideUp(0);
    $(".listHistory>ul>li.active .sub").slideDown(300);
    $(".listHistory .item").click(function(e){
      e.preventDefault();
      if($(this).parent().hasClass("active")){
        $(this).parent().removeClass("active");
        $(this).siblings(".sub").slideUp(300);
      }else{
        var list = $(".listHistory>ul>li");
        list.removeClass("active").find(".sub").slideUp(300);
        $(this).parent().addClass("active");
        $(this).siblings(".sub").slideDown(300);
      }
    });
  }

  function loadingAction(){
    var pos = $(this).scrollTop();
    var winH = $(window).outerHeight();
    var target = $("body").outerHeight();
    var footer = $("#footer").outerHeight();
    var footer_pos = (target - (winH + footer));

    if(footer_pos <= pos){
      var pos_t = pos - footer_pos;
      $("#confirmLoading").css("bottom", pos_t);
    }else{
      $("#confirmLoading").css("bottom", 0);
    }
  }
  loadingAction();

  $(window).scroll(function(){
    loadingAction();
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

  $(".walletCoin .trans").click(function(){
		if($(this).hasClass("eth")){
			$(this).removeClass("on");
			$(this).siblings(".weth").addClass("on");
		}else if($(this).hasClass("weth")){
			$(this).removeClass("on");
			$(this).siblings(".eth").addClass("on");
		}
	});

  $(".popBasic.type--preview").click(function(event){
    var target = event.target.id;
    if(target == 'popPreview'){
      $(this).fadeOut(300);
      dim_close();
    }
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
