function videoCrsr(){
page1 = document.querySelector(".page1-content")

page1.addEventListener("mouseenter",function(){
gsap.to(".crsr",{
    scale:1
})
})
document.addEventListener("mousemove",function(dets){
    gsap.to(".crsr",{
        top:dets.y ,
        left:dets.x ,

    })
})
page1.addEventListener("mouseleave",function(){
    gsap.to(".crsr",{
        scale:0
    })
    })

    page6 = document.querySelector(".page6")

    page6.addEventListener("mouseenter",function(){
    gsap.to(".vidcrsr",{
        scale:1
    })
    })
    page6.addEventListener("mousemove",function(dets){
        gsap.to(".vidcrsr",{
            top:dets.y ,
            left:dets.x ,
    
        })
    })
    page6.addEventListener("mouseleave",function(){
        gsap.to(".vidcrsr",{
            scale:0
        })
        })    

}
function locoScroll(){
    
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
function textAnime(){
  
var tl = gsap.timeline()

tl.from(".loader h1",{
  x:100,
  opacity:0,
  stagger:0.15,
  delay:1.5,
})
tl.to(".loader h1",{
  x:-100,
  opacity:0,
  stagger:0.1,
  delay:1.5,
})
tl.to(".loader",{
  y:"-=100%",
  duration:1.5,
  ease:Expo.easeInOut
})
tl.from(".page1 h1",{
  y:100,
  opacity:0,
  ease:Power1,
  duration:1,
})

tl.from(".page2 .line h1", {
  y: 100,
  duration:0.8,
  delay:2,
  stagger:0.15,
  ease:Power2,
  scrollTrigger: {
    trigger: ".page2",
    scroller:".main",
    // markers: true,
    start:"top 60%",
    end:"top 56%",
    scrub:3
  }

})
tl.from(".page3 .wraper h1,.page3 .wraper h3", {
  y: 100,
  duration:0.8,
  delay:2,
  stagger:0.15,
  ease:Power2,
  scrollTrigger: {
    trigger: ".page3",
    scroller:".main",
    // markers: true,
    start:"top 60%",
    end:"top 57%",
    scrub:3
  }

})


tl.from(".page5 .line h1", {
  y: 100,
  duration:0.8,
  delay:2,
  stagger:0.15,
  ease:Power2,
  scrollTrigger: {
    trigger: ".page5",
    scroller:".main",
    // markers: true,
    start:"top 60%",
    end:"top 56%",
    scrub:3
  }

})


}














locoScroll()
videoCrsr()
textAnime()