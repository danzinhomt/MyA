atualizar();
function atualizar(){
  let MyA = document.getElementsByClassName('MyA');
  for (var i = 0; i < MyA.length; i++) {
    $(MyA[i]).replaceWith($(MyA[i]).clone());
  }

  for (var i = 0; i < MyA.length; i++) {
    let animar = MyA[i];
    let anmnome = "";
    let anim;
    for (var a = 0; a < MyA[i].classList.length; a++) {
      if (MyA[i].classList[a].includes("Mya_")) {
        anim = MyA[i].classList[a].replace("Mya_","").split("_");
      }
      if (MyA[i].classList[a].includes("myaOnClickTo-") || MyA[i].classList[a].includes("myaOnClickToOnly-")) {
        anmnome = MyA[i].classList[a].replace("myaOnClickTo-","").replace("myaOnClickToOnly-","");
        animar = document.getElementById(anmnome);
        animar.classList.add("MyA-lock");
        MyA[i].addEventListener("click", function(e){
          if (this.classList.contains("myaOnClickTo-" + anmnome)) {
            animar.classList.add("MyA-lock");
            window.setTimeout(function(eventds){
              animar.classList.remove("MyA-lock");
            },100);
          }
          else {
            animar.classList.remove("MyA-lock");
          }
        });
      }
      if (MyA[i].classList[a].includes("myaOnHoverTo-") || MyA[i].classList[a].includes("myaOnHoverToOnly-")) {
        anmnome = MyA[i].classList[a].replace("myaOnHoverTo-","").replace("myaOnHoverToOnly-","");
        animar = document.getElementById(anmnome);
        console.log(anmnome);
        console.log(animar);
        animar.classList.add("MyA-lock");
        MyA[i].addEventListener("mouseover", function(e){
          if (this.classList.contains("myaOnHoverTo-" + anmnome)) {
            animar.classList.add("MyA-lock");
            window.setTimeout(function(eventds){
              animar.classList.remove("MyA-lock");
            },100);
          }
          else {
            animar.classList.remove("MyA-lock");
          }
        });
      }
    }

    let animobo;
    let animacoes = "animation: ";

    try {
      for (var a = 0; a < anim.length; a++) {
        let name = "bounce";
        let delay = 0;
        let duration = "0.7s";
        let count = 1;
        let direction = "normal";
        let speed = "linear";
        let fill = "none";

        animobo = anim[a].split("/");
        try {
          name = animobo[0];
          duration = animobo[1];
          speed = ((animobo[2] == "same") ? "cubic-bezier(1, 1, 1, 1)" : animobo[2]);
          delay = animobo[3];
          direction = animobo[4];
          count = animobo[5];
          fill = animobo[6];
        } catch (e) {
          try {
            name = animobo[0];
            duration = animobo[1];
            speed = animobo[2];
          } catch (e) {
            console.log("To make animations in oneLine your code must to be like\n"+
            "Mya_Name/Duration(like 1.2s)/Speed(linear,ease,ease-in,ease-out,ease-in-out,same)/Delay(like 1.2s)/Direction(normal,reverse,alternate,alternate-reverse)/Count(Num or Infinite)/FillMode(none,forwards,backwards,both)");
            + "\n Or you can just add a name,duration,Speed like Mya_Name/Duration(like 1.2s)/Speed(linear,ease,ease-in,ease-out,ease-in-out,same)/Delay(like 1.2s)"
            + "\n in both codes you can add more then one animation just separate the animations with a _ like"
            + "\n Mya_clockwisespin/1.2s/same/0s/alternate/2/none_anticlockwisespin/1.2s/same/2.4s/alternate/2/none"
          }
        } finally {
          animacoes += name + " " + duration + " " + speed + " " + delay + " " + direction + " " + count + " " + fill + ((a == anim.length - 1) ? ";" : ",");
        }
      }
      MyA[i].style.cssText += animacoes;
    } catch (e) {

    }
  }



  let aonhover = document.getElementsByClassName('mya-Hover');
  for (var i = 0; i < aonhover.length; i++) {
    aonhover[i].classList.add('MyA-lock');

    aonhover[i].addEventListener('mouseover', function(event){
      this.classList.remove('MyA-lock');
    });
    aonhover[i].addEventListener('mouseout', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let aonscroll = document.getElementsByClassName('mya-onScroll');
  for (var i = 0; i < aonscroll.length; i++) {
    aonscroll[i].classList.add('MyA-lock');
  }
  let aonscrollo = document.getElementsByClassName('mya-onScrollOnly');
  for (var i = 0; i < aonscrollo.length; i++) {
    aonscrollo[i].classList.add('MyA-lock');
  }
  let aonhovero = document.getElementsByClassName('mya-HoverOnly');
  for (var i = 0; i < aonhovero.length; i++) {
    aonhovero[i].classList.add('MyA-lock');
    aonhovero[i].addEventListener('mouseover', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let aonafterhover = document.getElementsByClassName('mya-OnAfterHover');
  for (var i = 0; i < aonafterhover.length; i++) {
    aonafterhover[i].classList.add('MyA-lock');

    onafterhover[i].addEventListener('mouseover', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let aafterhover = document.getElementsByClassName('mya-AfterHover');
  for (var i = 0; i < aafterhover.length; i++) {
    aafterhover[i].classList.add('MyA-lock');

    aafterhover[i].addEventListener('mouseout', function(event){
      this.classList.remove('MyA-lock');
    });
  }


  let aonclick = document.getElementsByClassName('mya-Click');
  for (var i = 0; i < aonclick.length; i++) {
    aonclick[i].classList.add('MyA-lock');

    aonclick[i].addEventListener('click', function(event){
      let olas = this;
      olas.classList.add('MyA-lock');

      window.setTimeout( function(event){
        olas.classList.remove('MyA-lock');
      }, 100);
    });
  }
  let aonclicko = document.getElementsByClassName('mya-ClickOnly');
  for (var i = 0; i < aonclicko.length; i++) {
    aonclicko[i].classList.add('MyA-lock');

    aonclicko[i].addEventListener('click', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let aafterclick = document.getElementsByClassName('mya-AfterClick');
  for (var i = 0; i < aafterclick.length; i++) {
    aafterclick[i].classList.add('MyA-lock');

    aafterclick[i].addEventListener('click', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let afterhover = document.getElementsByClassName('mya-stopAfterHover');
  for (var i = 0; i < afterhover.length; i++) {
    afterhover[i].addEventListener('mouseleave', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let onafterhover = document.getElementsByClassName('mya-stopOnAfterHover');
  for (var i = 0; i < onafterhover.length; i++) {
    onafterhover[i].addEventListener('mouseover', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let pafterhover = document.getElementsByClassName('mya-pauseAfterHover');
  for (var i = 0; i < pafterhover.length; i++) {
    pafterhover[i].addEventListener('mouseleave', function(event){
      this.classList.add('MyA-paused');
    });
  }
  let ponafterclick = document.getElementsByClassName('mya-pauseOnClickOnly');
  for (var i = 0; i < ponafterclick.length; i++) {
    ponafterclick[i].addEventListener('click', function(event){
      this.classList.add('MyA-paused');
    });
  }
  let pafterclick = document.getElementsByClassName('mya-pauseOnClick');
  for (var i = 0; i < pafterclick.length; i++) {
    pafterclick[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-paused')) {
        this.classList.remove('MyA-paused');
      }
      else {
        this.classList.add('MyA-paused');
      }
    });
  }
  let ponafterhover = document.getElementsByClassName('mya-pauseOnAfterHover');
  for (var i = 0; i < ponafterhover.length; i++) {
    ponafterhover[i].addEventListener('mouseover', function(event){
      this.classList.add('MyA-paused');
    });
  }
  let click = document.getElementsByClassName('mya-ClickOnly');
  for (var i = 0; i < click.length; i++) {
    click[i].classList.add('MyA-lock');
    click[i].addEventListener('click', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let clickto = document.getElementsByClassName('mya-stopOnClickOnly');
  for (var i = 0; i < clickto.length; i++) {
    clickto[i].addEventListener('click', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let clickt = document.getElementsByClassName('mya-stopOnClick');
  for (var i = 0; i < clickt.length; i++) {
    clickt[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-lock')) {
        this.classList.remove('MyA-lock');
      }
      else {
        this.classList.add('MyA-lock');
      }
    });
  }
  let clicka = document.getElementsByClassName('mya-ClickAlternate');
  for (var i = 0; i < clicka.length; i++) {
    clicka[i].classList.add('MyA-lock');
    clicka[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-lock')) {
        this.classList.remove('MyA-lock');
      }
      else {
        this.classList.add('MyA-lock');
      }
    });
  }
  let clickao = document.getElementsByClassName('mya-ClickOnly');
  for (var i = 0; i < clickao.length; i++) {
    clickao[i].classList.add('MyA-lock');
    clickao[i].addEventListener('click', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let clickaob = document.getElementsByClassName('mya-ClickOnly-backwards');
  for (var i = 0; i < clickaob.length; i++) {
    clickaob[i].classList.remove('MyA-lock');
    clickaob[i].addEventListener('click', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let clickab = document.getElementsByClassName('mya-ClickAlternate-backwards');
  for (var i = 0; i < clickab.length; i++) {
    clickab[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-lock')) {
        this.classList.remove('MyA-lock');
      }
      else {
        this.classList.add('MyA-lock');
      }
    });
  }

  $(window).scroll(function(e){
    let onScroll = document.getElementsByClassName('mya-onScrollOnly');
    for (var i = 0; i < onScroll.length; i++) {
      let on = (($(onScroll[i]).parent().prop('className').includes("myaFather")) ? $(onScroll[i]).parent() : $(onScroll[i]));
      if (on.offset().top + on.height() > window.pageYOffset && on.offset().top + (on.height()/2) < $(window).height() + window.pageYOffset) {
        let slk = onScroll[i];
        window.setTimeout(function(e){
          slk.classList.remove('MyA-lock');
        },100);
      }
    }

    let onScrolli = document.getElementsByClassName('mya-onScroll');
    for (var i = 0; i < onScrolli.length; i++) {
      let on = (($(onScrolli[i]).parent().prop('className').includes("myaFather")) ? $(onScrolli[i]).parent() : $(onScrolli[i]));
      if (on.offset().top + on.height() > window.pageYOffset && on.offset().top + (on.height()/2) < $(window).height() + window.pageYOffset) {
        let slk = onScrolli[i];
        window.setTimeout(function(e){
          slk.classList.remove('MyA-lock');
        },100);
      }
      else {
        onScrolli[i].classList.add('MyA-lock');
      }
    }

  });

}
