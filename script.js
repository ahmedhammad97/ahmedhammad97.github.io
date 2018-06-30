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

  let str = ['It\'s so nice of you to come and visit!' ,'My name is Ahmed Hammad.','Here, you can know all about me.','Come on, take a tour.                           '];
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



//SKILLS SECTION

let techSkillsHeight = $(".tech-skills:first").offset().top - ($(window).height()*0.8);
let persSkillsHeight = $(".pers-skills:first").offset().top - ($(window).height()*0.8);
let setR=false,setB=false;

$(window).scroll(event=>{


  if($(document).scrollTop() > techSkillsHeight){progressRadialOn();}

  if($(window).scrollTop() > persSkillsHeight){ProgressBarOn();}
});

function progressRadialOn(){
  if(!setR){$(".c100").each((i,el)=>{setTimeout(updateCircle($(el)),100)});}
  setR=true;
}

function updateCircle(el){
  displayProgress($(el).attr("progress"),el);
}

function displayProgress(p,el){
  $(el).removeClass("p0");
  $(el).addClass("p"+p);
}

function ProgressBarOn(){
  if(!setB){$(".progress-bar").each((i,el)=>{setTimeout(lonenProgress($(el)),100)});}
  setB=true;
}

function lonenProgress(el){
  var val = $(el).attr("progress") + "%";
  $(el).attr("style","width: "+val);
}



//END SKILLS SECTION
