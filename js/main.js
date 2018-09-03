 $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
$(function(){ 
     
   // 능력치 그래프  
   var yoffset = 300; // 스크로 보정값 
   var about_top = $('#about').offset().top - yoffset; 
  
 
   $(window).on('scroll', function(){ 
    var win_scroll_top = $(window).scrollTop(); 
   var point = [90, 90, 70, 60, 50, 60]; 
     
    // #skill 섹션에 도달하면 그래프 애니메이션 시작 
    if(win_scroll_top >= about_top){ 
     for(var i = 0; i < 6; i++){ 
      $('#about .skill_list span') 
       .eq(i) 
       .animate({width: point[i]+'%'}); 
     }  
    }  
   }); 
    
    
    
    
    
    
});
 