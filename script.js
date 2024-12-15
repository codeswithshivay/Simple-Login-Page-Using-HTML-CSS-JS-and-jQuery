$(document).ready(function () {


  $("input").focus(function () {
    $(this).css("outline", "none");
  });

  $("input[type=text]").focus(function () {
    $(this).css("outline", "none");
    $(this).css("transform", "translateY(10px)");
  });

  $("input[type=password]").focus(function () {
    $(this).css("outline", "none");
    $(this).css("transform", "translateY(-10px)");
  });

  $("input").blur(function () {
    $(this).css("outline", "");
    $(this).css("transform", "translateY(0px)");
  });

  $('#sumbit-btn').click(function(){
    alert('Form Didnt Save PHP NOT FOUND'); 
    window.open('http://127.0.0.1:5500/index.html','_parent')
    //  opened window to disappear the data written on fields
  });

  $('.social-icons a').eq(0).css('backgroundColor','#316FF6')
  $('.social-icons a').eq(1).css('backgroundColor','#000')
  $('.social-icons a').eq(2).css('backgroundColor','#ee2a7b')

  $('.social-icons a').mouseenter(function(){
    $('.social-icons a').eq(0).css('transform','rotate(360deg) translateX(200px)') 
    $('.social-icons a').eq(1).css('transform','rotate(360deg) translateX(-100px)')
    $('.social-icons a').eq(2).css('transform','rotate(360deg) translateX(-100px)')  
  })

  $('.social-icons a').mouseleave(function(){
    $('.social-icons a').eq(0).css('transform','rotate(360deg) translateX(-0px)') 
    $('.social-icons a').eq(1).css('transform','rotate(360deg) translateX(100px)')
    $('.social-icons a').eq(2).css('transform','rotate(360deg) translateX(-100px)')  
  })
});

