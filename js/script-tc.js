$(function(){
    'use strict';
    $('.card').tilt({
      maxTilt:10,
      glare:true,
      maxGlare:.4
    });
  
  });

  document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("bcard")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
    }
}

VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 25,
      speed: 400,
      easing:"cubic-bezier(.03,.98,.52,.99)",
      perspective:500,
      transition:true
  });

/* footer */

const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);