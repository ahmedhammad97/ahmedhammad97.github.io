//NAVBAR TOGGLE
$(window).scroll(event=>{
  if($(document).scrollTop() < 350){
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").addClass("navbar-light");
    $(".activeDark").addClass("activeLight");
    $(".activeDark").removeClass("activeDark");
    $(".navbar-toggler").removeClass("greyBack");
    $(".navbar-toggler").addClass("transBack");
  }
  else{
    $(".navbar").removeClass("navbar-light");
    $(".navbar").addClass("navbar-dark");
    $(".activeLight").addClass("activeDark");
    $(".activeLight").removeClass("activeLight");
    $(".navbar-toggler").addClass("greyBack");
    $(".navbar-toggler").css("borderRadius","20px");
    if($(window).width() < 990){$(".navbar").addClass("transBack");}
    else{$(".navbar").removeClass("transBack");}
  }
});


$(".nav-item").click(event=>{
  if($(document).scrollTop() < 350){
    $(".activeLight").removeClass("activeLight");
    $(event.target).addClass("activeLight");
  }
  else{
    $(".activeDark").removeClass("activeDark");
    $(event.target).addClass("activeDark");
  }
});
//END NAVBAR TOGGLE



//HOME SECTION
$(document).ready(()=>{
  let d = new Date();
  if(d.getHours() < 5 || d.getHours() >= 18){
    $(".homeText h2").html("<h2>Good Evening!&nbsp&nbsp;<i class=\"fas fa-moon\"></i></h2>");
  }else if(d.getHours() >= 5 && d.getHours() < 12){
    $(".homeText h2").html("<h2>Good Morning!&nbsp;&nbsp;<i class=\"fas fa-sun\"></i></h2>");
  }else{
    $(".homeText h2").html("<h2>Good Afternoon!&nbsp;&nbsp;<i class=\"fas fa-coffee\"></i></h2>");
  }

  let str = ['My name is Ahmed Hammad.','I am an undergraduate in Computer Engineering.','A full-stack developer.','And, a content creator.','Here, you can know all about me.','Come on, take a tour.                           '];
  //TxtType($(".homeText h3")[0],str,1500);
});


//CREDIT TO CSS TRICKS.
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period;
    this.txt = '';
    this.isDeleting = false;
    this.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerText = this.txt;

        var that = this;
        var delta = 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function(){that.tick();}, delta);
    };
    this.tick();
};
//END HOME SECTION
