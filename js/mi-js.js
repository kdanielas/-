  var balls = document.getElementsByClassName("bola");
  document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mouse
    //event.clientY => get the Vertical coordinate of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for(var i=0;i<2;i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
  }
/*
      window.onscroll = function(){scrollF()};
  function scrollF(){
      if(document.body.scrollTop >600 || document.documentElement.scrollTop>600){
          
          document.getElementById("menu").style.background ="#EFEDED";
          
           document.getElementById("menu").style.marginTop ="0px";
          
      }else{
          
           document.getElementById("menu").style.background ="none";
          
          document.getElementById("menu").style.marginTop ="40px";
          

      }
      
      
  }*/
    

    