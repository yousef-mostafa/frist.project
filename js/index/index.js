//resize window
$('.header').height($(window).height());
$(window).resize(function(){
   });


// trigger BX slider
  $(document).ready(function(){
    $('.slider').bxSlider({
     speed:1000
     
        });
   });

$('.bx-wrapper').each(function(){
    
   $(this).css('padingTop',($(window.height() - $('.navbar').height())/2));
               
});

$('.navbar li a').click(function(){
    
    $(this).addClass('active').siblings().removeClass('active');
    
  });
