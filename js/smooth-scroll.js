const navHeight = $('nav').innerHeight();

$('a[href*="#"]').not('[href="#"]').on("mouseover click", function(e){
    e.preventDefault();
    $("nav li").removeClass("active");
    $(this).parent().addClass("active");
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top-navHeight
      }, 700);
    
})

$(window).on("scroll", function(){
  if($(window).scrollTop()> $('nav').height()){
    $('nav').css("border-bottom", "1px solid rgba(0,0,0,0.1)");
  }else{
    $('nav').css("border-bottom", "none");
  }
})
