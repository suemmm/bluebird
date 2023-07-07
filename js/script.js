//quick
function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}

//commnunity
$("#community_board li a").click(function(){
  $(this).parent().addClass("community_on").siblings().removeClass("community_on");
});

//page
$(".page").children("li:first-child").addClass("page_on");
$(".page> li").click(function(){
  $(this).addClass("page_on").siblings().removeClass("page_on");
});

//link
$(function(){
  $("#button1").click(function(){
      $(".link1").fadeIn().siblings().fadeOut();
  });	
  $("#button2").click(function(){
      $(".link2").fadeIn().siblings().fadeOut();
  });	
  $("#button3").click(function(){
      $(".link3").fadeIn().siblings().fadeOut();
  });	
  $("#button4").click(function(){
      $(".link4").fadeIn().siblings().fadeOut();
  });	
  $("#button5").click(function(){
      $(".link5").fadeIn().siblings().fadeOut();
  });	
});

//personalized_wrap
$(function(){
  $("#btn1").click(function(){
      $(".healing_bg").fadeIn().siblings().fadeOut();
      $(".healing_slide").fadeIn().siblings().fadeOut();
  });	
  $("#btn2").click(function(){
      $(".activity_bg").fadeIn().siblings().fadeOut();
      $(".activity_slide").fadeIn().siblings().fadeOut();
  });	
  $("#btn3").click(function(){
      $(".food_bg").fadeIn().siblings().fadeOut();
      $(".food_slide").fadeIn().siblings().fadeOut();
  });	
});