const lenis = new Lenis();
gsap.registerPlugin(ScrollTrigger);
  
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


function Mycursor(){
 let cursor=document.querySelector(".cursor-div");
  document.addEventListener("mousemove",(e)=>{
    let X=e.clientX;
    let Y=e.clientY;
    gsap.to(cursor,{
      opacity:1,
      x:X,
      y:Y,
      ease:"Expo.Out",
      duration:.7,
    })
  })

}

Mycursor();

function animatelinks(){

  let container1=document.querySelectorAll(".w");

  let container2=document.querySelectorAll(".A");

  let container3=document.querySelectorAll(".s");

  let container4=document.querySelectorAll(".ar");

  let container5=document.querySelectorAll(".c");

  container1.forEach((c)=>{
      c.addEventListener("mouseenter",()=>{
        let elements=document.querySelectorAll(".w .text");
        gsap.to(elements,{
          y:-50,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })   
  
    container1.forEach((c)=>{
      c.addEventListener("mouseleave",()=>{
        let elements=document.querySelectorAll(".w .text");
        gsap.to(elements,{
          y:0,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })

    container2.forEach((c)=>{
      c.addEventListener("mouseenter",()=>{
        let elements=document.querySelectorAll(".A .text");
        gsap.to(elements,{
          y:-50,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })   
  
    container2.forEach((c)=>{
      c.addEventListener("mouseleave",()=>{
        let elements=document.querySelectorAll(".A .text");
        gsap.to(elements,{
          y:0,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })

    container3.forEach((c)=>{
      c.addEventListener("mouseenter",()=>{
        let elements=document.querySelectorAll(".s .text");
        gsap.to(elements,{
          y:-50,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })   
  
    container3.forEach((c)=>{
      c.addEventListener("mouseleave",()=>{
        let elements=document.querySelectorAll(".s .text");
        gsap.to(elements,{
          y:0,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })

    container4.forEach((c)=>{
      c.addEventListener("mouseenter",()=>{
        let elements=document.querySelectorAll(".ar .text");
        gsap.to(elements,{
          y:-50,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })   
  
    container4.forEach((c)=>{
      c.addEventListener("mouseleave",()=>{
        let elements=document.querySelectorAll(".ar .text");
        gsap.to(elements,{
          y:0,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })

    container5.forEach((c)=>{
      c.addEventListener("mouseenter",()=>{
        let elements=document.querySelectorAll(".c .text");
        gsap.to(elements,{
          y:-50,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })   
  
    container5.forEach((c)=>{
      c.addEventListener("mouseleave",()=>{
        let elements=document.querySelectorAll(".c .text");
        gsap.to(elements,{
          y:0,
          duration:.3,
          ease:"Power3.Out",
        })
      })
    })
}

animatelinks();

function animateHeadings(){
  var divs1=document.querySelectorAll(".overlay .h div");
  var divs2=document.querySelectorAll(".overlay .h1 div");
  var divs3=document.querySelectorAll(".overlay .h2 div");
  var divs4=document.querySelectorAll(".overlay .h3 div");

  gsap.from(divs1,{
    y:300,
    duration:1,
    ease: "power4.Out",
    stagger:.1,
  })

  gsap.from(divs2,{
    y:500,
    duration:1,
    ease:"power4.Out",
    delay:.1,
    stagger:.08,
  })

  gsap.from(divs3,{
    y:500,
    duration:1,
    ease:"power4.Out",
    delay:.1,
    stagger:.08,
  })

 /* gsap.from(divs4,{
    y:500,
    duration:1,
    ease:"power4.Out",
  })*/
}

animateHeadings();


function main1Scroll(){
  let logo=document.querySelector(".lf-l");
  let a=document.querySelector(".lf-r div a");
  let link=document.querySelector(".fd");

  let links=document.querySelectorAll(".text");

  gsap.to(a,{
    color:"#fff",
    ease:"power2.Out",
    scrollTrigger:{
      trigger:a,
      scroller:"body",
      start:"top 0%",
      scrub:3,
    }
  })

  gsap.to(logo,{
    opacity:0,
    ease:"power2.Out",
    borderRadius:"12px",
    scrollTrigger:{
      trigger:logo,
      scroller:"body",
      start:"top -100%",
      scrub:1,
    }
  })

  gsap.to(link,{
    color:"#fff",
    scale:.8,
    ease:"power3.Out",
    scrollTrigger:{
      trigger:a,
      scroller:"body",
      start:"top 40%",
      scrub:3,
    }
  })
  
  gsap.to(links,{
    color:"#fff",
    ease:"power2.Out",
    scrollTrigger:{
      trigger:links,
      scroller:"body",
      start:"top -50%",
      scrub:3,
    }
  })

}

main1Scroll();


function main2anim(){
  let anim=document.querySelector(".anim");
  let button=document.querySelector(".main2 button");
  let paras=document.querySelectorAll(".para-container div p");

  /*gsap.from(paras,{  //scrollTrigger approach
    y:150,
    ease:"Expo.Out",
    stagger:.1,
    scrollTrigger:{
      trigger:paras,
      start:"top 180%",
      markers:true,
      scrub:2,
    }
  })*/

  document.querySelector(".main2").addEventListener("mouseenter",()=>{
    gsap.to(paras,{
      y:0,
      ease:"Expo.Out",
      duration:.8,
      stagger:.2,
    })
  })

  button.addEventListener("mouseover",()=>{
    gsap.to(anim,{
      scale:25,
      duration:.3,
      ease:"power2.Out",
    })
  })

  button.addEventListener("mouseleave",()=>{
    gsap.to(anim,{
      scale:1,
      duration:.3,
      ease:"power2.Out",
      delay:.2,
    })
  })

  let spans=document.querySelectorAll(".section .div div");
  let section=document.querySelector(".section");

  console.log(spans);

  section.addEventListener("mouseenter",()=>{
    gsap.to(spans,{
      y:0,
      duration:.8,
      ease:"Expo.Out",
      stagger:.06,
    })
  })

  let descripts=document.querySelectorAll(".descrip .para-div p");
  let descrip=document.querySelector(".descrip");
  console.log(descripts);
  
  descrip.addEventListener("mouseenter",()=>{
    gsap.to(descripts,{
      y:0,
      duration:.4,
      ease:"Expo.Out",
      stagger:.1,
    })
  })
  
}

main2anim();


function MarqueeCard(){

  let card1=document.querySelector(".m1");
  
  let card2=document.querySelector(".m2");
  
  let card3=document.querySelector(".m3");
  
  let card4=document.querySelector(".m4");

  let cursor2=document.querySelector(".cursor-div");

  card1.addEventListener("mouseenter",()=>{
    gsap.to(cursor2,{
      scale:8.6,
      ease:"power2.Out",
      duration:.2,
    })
    cursor2.innerHTML="<p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p>";
  })

  card1.addEventListener("mouseout",()=>{
    gsap.to(cursor2,{
      scale:1,
      ease:"power2.Out",
      duration:.1,
    })
    cursor2.innerHTML=" ";
  })

  card2.addEventListener("mouseenter",()=>{
    gsap.to(cursor2,{
      scale:8.6,
      ease:"power2.Out",
      duration:.2,
    })
    cursor2.innerHTML="<p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p>";
  })

  card2.addEventListener("mouseout",()=>{
    gsap.to(cursor2,{
      scale:1,
      ease:"power2.Out",
      duration:.1,
    })
    cursor2.innerHTML=" ";
  })

  card3.addEventListener("mouseenter",()=>{
    gsap.to(cursor2,{
      scale:8.6,
      ease:"power2.Out",
      duration:.2,
    })
    cursor2.innerHTML="<p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p>";
  })

  card3.addEventListener("mouseout",()=>{
    gsap.to(cursor2,{
      scale:1,
      ease:"power2.Out",
      duration:.1,
    })
    cursor2.innerHTML=" ";
  })

  card4.addEventListener("mouseenter",()=>{
    gsap.to(cursor2,{
      scale:8.6,
      ease:"power2.Out",
      duration:.2,
    })
    cursor2.innerHTML="<p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p><p>De Online Psycholoog</p>";
  })

  card4.addEventListener("mouseout",()=>{
    gsap.to(cursor2,{
      scale:1,
      ease:"power2.Out",
      duration:.1,
    })
    cursor2.innerHTML=" ";
  })
}

MarqueeCard();

function animateButton(){
  let button=document.querySelector(".descrip button");
  let anim2=document.querySelector(".descrip button .anim");
  
  button.addEventListener("mouseenter",()=>{
   gsap.to(anim2,{
     scale:20.6,
     ease:"Expo.Out",
     duration:.45,
   })
  })

  button.addEventListener("mouseleave",()=>{
    gsap.to(anim2,{
      scale:1,
      ease:"Expo.Out",
      duration:.45,
    })
  })
}

animateButton();


function string(){
  let Finalpath=`M 10 100 Q 500 100 990 100`;
  let string=document.querySelector("svg");

  string.addEventListener("mousemove",(e)=>{
    var axisY=gsap.utils.clamp(100,400,e.y);
    path=`M 10 100 Q ${e.x} ${axisY} 990 100`,
    gsap.to("svg path",{
      attr:{d:path},
      duration:.4,
      ease:"powe1.out",
    })
  })

  string.addEventListener("mouseout",()=>{
    gsap.to("svg path",{
      attr:{d:Finalpath},
      ease:"elastic.out(1,0.34)",
    })
  })
}

string();

