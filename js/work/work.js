$(function(){
    
    //make button active
$('.buttons button').click(function(){
   
    $(this).addClass('active').siblings().removeClass('active');
    
  });
    
    // filtered
     //display cars
 $(".buttons #cars").click(function(){
    
    $('.photo .game').hide();
    $('.photo .sport').hide();
    $('.photo .cars').show();
    
  });
     //display cars
 $(".buttons #sport").click(function(){
    
    $('.photo .game').hide();
    $('.photo .cars').hide();
    $('.photo .sport').show();
    
  });

 $(".buttons #game").click(function(){
    
    $('.photo .cars').hide();
    $('.photo .sport').hide();
    $('.photo .game').show();
    
  });
    
$(".buttons #all").click(function(){
    
    $('.photo .game').show();
    $('.photo .sport').show();
    $('.photo .cars').show();
    
  });

});

