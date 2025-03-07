
var main3=document.querySelector(".main3");
var tl=gsap.timeline();

function main3Scroll(){
  let mail=document.querySelector(".lf-r div a");
  let links=document.querySelectorAll(".text");
  let headings1=document.querySelectorAll(".ease1");
  let headings2=document.querySelectorAll(".ease2");
  let headings3=document.querySelectorAll(".ease3");
  let head=document.querySelector(".main3 .headings");
  
  main3.addEventListener("mouseenter",()=>{
    gsap.to(mail,{
        color:"#000000",
        scrollTrigger:{
            trigger:mail,
            start:"top 0%",
            scrub:3,
        }
    })
  })

  main3.addEventListener("mouseenter",()=>{
    gsap.to(links,{
        color:"#000000",
        scrollTrigger:{
            trigger:links,
            start:"top 10%",
            scrub:3,
        }
    })
  })

  head.addEventListener("mouseenter",()=>{
    gsap.to(headings1,{
        y:0,
        duration:1,
        ease:"Power4.In",
        stagger:.03,
    })
    gsap.to(headings2,{
        y:0,
        duration:1.3,
        ease:"Power4.In",
        stagger:.04,
        delay:.1,
    })
    tl.to(headings3,{
        y:0,
        duration:1.1,
        ease:"Power4.In",
        stagger:.06,
        delay:.1,
    })
  })
}

main3Scroll();


function moveCard(){
    let card=document.querySelector(".card");
    let boss=document.querySelector(".boss");

    boss.addEventListener("mousemove",(e)=>{
        
        //let rangeX=gsap.utils.clamp(100,900,e.x);
        //let rangeY=gsap.utils.clamp(80,1000,e.y);

        const bossWidth = boss.offsetWidth;
        const bossHeigh = boss.offsetHeight;

        const mousex = e.clientX - boss.getBoundingClientRect().left;
        const mousey = e.clientY - boss.getBoundingClientRect().top;

        const centerx = bossWidth/2;
        const centery = bossHeigh/2;

        const deltax = mousex - centerx;
        const deltay = mousey - centery;

        /*const rotateval = (deltax / centerx)*0.2;
        const rotatevalY = (deltay / centery)*0.2;*/

        gsap.to(card,{
            opacity:1,
            x:deltax,
            y:deltay,
           // rotate:rotateval,
        })
   })

   boss.addEventListener("mouseenter",()=>{
    gsap.to(card,{
        opacity:1,
        ease:"Powe2.Out",
    })
})

    boss.addEventListener("mouseleave",()=>{
        gsap.to(card,{
            opacity:0,
            ease:"Power2.Out",
        })
    })
}

moveCard();

function addImage(){
    let elm=document.querySelectorAll(".elm");
    let myimg=document.querySelector(".myimg");
    const assests=["IMAGES/loop1___brandium.jpg","IMAGES/apost___brandium.jpg",
    "IMAGES/solefits___brandium.jpg","IMAGES/sobo___brandium.jpg"];

    elm.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            const index=parseInt(e.getAttribute("data-index"));
            if(index >= 0 && index < assests.length){
                let imgsrc = assests[index];
                myimg.src=imgsrc;
            }
        })
    })
}

addImage();

function animateButton(){
    let button=document.querySelector(".i button");
    let anim3=document.querySelector(".i button .anim");
    
    button.addEventListener("mouseenter",()=>{
     gsap.to(anim3,{
       scale:24.6,
       duration:.45,
     })
     tl.to(button,{
        color:"#fff",
        scale:1.05,
        duration:.2,
        ease:"cubic-bezier(0.84, -0.01, 0.25, 0.99)",
     })
    })
  
    button.addEventListener("mouseleave",()=>{
      gsap.to(anim3,{
        scale:1,
        ease:"Expo.Out",
        duration:.45,
      })
      
      tl.to(button,{
        color:"black",
        scale:1,
        duration:.1,
        ease:"cubic-bezier(0.84, -0.01, 0.25, 0.99)",
      })
    })
}
  
animateButton();

function animatesClients(){
    let clients1 = document.querySelectorAll(".an1");
    let clients2 = document.querySelectorAll(".an2");
    let clients3 = document.querySelectorAll(".an3");
    let clients4 = document.querySelectorAll(".an4");

   let client_container = document.querySelector(".clients");

   client_container.addEventListener("mouseenter",()=>{
      gsap.to(clients1,{
        y:"-100%",
        ease:"cubic-bezier(.7, 0, .3, 1);",
        duration:.76,
        stagger:.066,
      })

      tl.to(clients2,{
        y:"-100%",
        ease:"cubic-bezier(.7, 0, .3, 1);",
        duration:.96,
        stagger:.12,
      })

      gsap.to(clients3,{
        y:"-100%",
        ease:"cubic-bezier(.7, 0, .3, 1);",
        duration:.86,
        stagger:.066,
        delay:.1
      })
      gsap.to(clients4,{
        y:"-100%",
        ease:"cubic-bezier(.7, 0, .3, 1);",
        duration:.86,
        stagger:.056,
        delay:.1,
      })
   })

}

animatesClients();

function Newsanim(){
  let head = document.querySelector(".news-head h1");
  let head_container = document.querySelector(".news-head");

  head_container.addEventListener("mouseenter",()=>{
    gsap.to(head,{
      y:0,
      ease:"back",
      duration:1.4,
      delay:.1,
    })
  })


}

Newsanim();

function animateBg(){
  let container = document.querySelector(".news-container");
  let bg1 = document.querySelector(".col1");
  let bg2 = document.querySelector(".col2");

  bg1.addEventListener("mouseenter",()=>{
    container.style.backgroundColor="#FFD7E7";
    bg2.style.opacity=".27";
    bg2.style.filter="blur(2px)";
  })

  bg1.addEventListener("mouseleave",()=>{
    bg2.style.opacity="1";
    bg2.style.filter="blur(0px)";
  })

  container.addEventListener("mouseleave",()=>{
    container.style.backgroundColor="transparent";
  })

  bg2.addEventListener("mouseenter",()=>{
    container.style.backgroundColor="#BAC4E2";
    bg1.style.opacity=".27";
    bg1.style.filter="blur(2px)";
  })

  bg2.addEventListener("mouseleave",()=>{
    bg1.style.opacity="1";
    bg1.style.filter="blur(0px)";
  })

  bg2.addEventListener("mouseleave",()=>{
    container.style.backgroundColor="transparent";
  })
}

animateBg();

function animateNewsCard(){
  let assests2 = ["IMAGES/SK@4x-100-Brandium.jpg","IMAGES/killer-brand-image.jpg"];
  let col1 = document.querySelector(".col1");
  let col2 = document.querySelector(".col2");

  let overlayimg = document.querySelector(".news-overlay img");
  
  col1.addEventListener("mouseenter",()=>{
    overlayimg.src=assests2[0];
  })

  col2.addEventListener("mouseenter",()=>{
    overlayimg.src=assests2[1];
  })
}

animateNewsCard();

function moveNewsCard(){
  let father = document.querySelector(".news-container");
  let card = document.querySelector(".news-overlay");

  father.addEventListener("mousemove",(e)=>{
    let fwidth = father.offsetWidth;
    let fheight = father.offsetHeight;
  
    let moveX = e.clientX - fwidth/3;
    let moveY = e.clientY - fheight/3;


    let posX = moveX - father.getBoundingClientRect().left;
    let posY = moveY - father.getBoundingClientRect().top;

    var rotate = 0;
    var diffrot = 0;
  
    /*diffrot = e.x-rotate;
    rotate = e.x;*/

    card.style.opacity="1";

    gsap.to(card,{
      scale:1,
      rotateX:"0deg",
      opacity:1,
      y:posY,
      x:posX,
      ease:Power3,
      //rotate:gsap.utils.clamp(-20,20,diffrot*0.2),
    })
  })

  father.addEventListener("mouseleave",()=>{
    gsap.to(card,{
      scale:0,
      rotateX:"150deg",
      ease:Power3,
    })
  })
}

moveNewsCard();


function MarqueeAnim(){
  window.addEventListener("wheel",(e)=>{
    if(e.deltaY > 0){
     gsap.to(".marquee",{
      transform:"translateX(-110%)",
      repeat:-1,
      duration:4,
      ease:"none",
     })

     gsap.to(".marquee img",{
      rotate:"180deg",
     })
    }
    else{
      gsap.to(".marquee",{
        transform:"translateX(110%)",
        repeat:-1,
        duration:4,
        ease:"none",
      })
      gsap.to(".marquee img",{
        rotate:"0deg",
      })
    }
  })
}

MarqueeAnim();