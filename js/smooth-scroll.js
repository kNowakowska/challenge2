const navHeight = $('nav').innerHeight();

$('a[href*="#"]').not('[href="#"]').on("mouseover click", function(e){
    e.preventDefault();
    $("nav li").removeClass("active");
    $(this).parent().addClass("active");
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top-navHeight
      }, 700);
})

// $("#home-link").on("mousemove click",function(e){
//     console.log("move");
//     e.preventDefault();
//     $("nav li").removeClass("active");
//     $(this).parent().addClass("active");
//     $('body').animate({
//         scrollTop: ($($.attr(this, 'href')).offset().top+navHeight)
//     }, 800);
// })

// $("#about-link").on("mouseover click",function(e){
//     e.preventDefault();
//     $("nav li").removeClass("active");
//     $(this).parent().addClass("active");
//     $('body').animate({
//         scrollTop: ($($.attr(this, 'href')).offset().top+navHeight)
//     }, 800);
// })