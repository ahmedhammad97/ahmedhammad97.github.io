//NAVBAR TOGGLE
$(window).scroll(event=>{
  if($(document).scrollTop() < 500){
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").addClass("navbar-light");
    $(".activeDark").addClass("activeLight");
    $(".activeDark").removeClass("activeDark");
    $(".navbar-toggler").css("backgroundColor","transparent");
  }
  else{
    $(".navbar").removeClass("navbar-light");
    $(".navbar").addClass("navbar-dark");
    $(".activeLight").addClass("activeDark");
    $(".activeLight").removeClass("activeLight");
    $(".navbar-toggler").css("backgroundColor","lightgrey");
    $(".navbar-toggler").css("borderRadius","20px");
    if($(window).width() < 1000){$(".navbar").css("backgroundColor","transparent");}
  }
});


$(".nav-item").click(event=>{
  if($(document).scrollTop() < 500){
    $(".activeLight").removeClass("activeLight");
    $(event.target).addClass("activeLight");
  }
  else{
    $(".activeDark").removeClass("activeDark");
    $(event.target).addClass("activeDark");
  }
});
//END NAVBAR TOGGLE
