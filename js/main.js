const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".our-bar, .navbar-nav, .journey",{
    y:10,
    delay:0.5,
    // stagger:0.2,
    duration:1,
    opacity:0,
})


Shery.textAnimate(".animation22 h1", {
    style: 2,
    y: 10,
    delay: 2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from("#anam2",{
    y:30,
    stagger:.1,
    ease: Expo,
    delay:1,
    opacity:0,
})

Shery.imageEffect(".middle_img img",{
    style:3,
    config: {"uFrequencyX":{"value":17.56,"range":[0,100]},"uFrequencyY":{"value":9.16,"range":[0,100]},"uFrequencyZ":{"value":25.19,"range":[0,100]},"geoVertex":{"range":[1,64],"value":59.19},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500083286137855},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect(".animations img",{
    style:3,
    config: {"uFrequencyX":{"value":8.4,"range":[0,100]},"uFrequencyY":{"value":7.63,"range":[0,100]},"uFrequencyZ":{"value":7.63,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.14},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666908563134978},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
//    debug:true,
})

Shery.imageEffect(".left_img img",{
    style:3,
    config: {"uFrequencyX":{"value":8.4,"range":[0,100]},"uFrequencyY":{"value":7.63,"range":[0,100]},"uFrequencyZ":{"value":7.63,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.14},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666908563134978},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
//    debug:true,
})

Shery.imageEffect(".right_img img",{
    style:3,
    config: {"uFrequencyX":{"value":8.4,"range":[0,100]},"uFrequencyY":{"value":7.63,"range":[0,100]},"uFrequencyZ":{"value":7.63,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.14},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666908563134978},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
//    debug:true,
})

// Shery.imageEffect('.me',{
//     style:5,
//     // debug:true,
//     config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.25,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.4839285714285715},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":3.05,"range":[0,100]}},
//     gooey:true,
// })

document.querySelector(".textl button")
.addEventListener("mouseover", function (){
    // alert('hello')
    gsap.to('.upper-footer video',{
        opacity: 1,
        duration:1,
        ease:Power4,
    })
})

document.querySelector(".textl button")
.addEventListener("mouseleave", function (){
    gsap.to('.upper-footer video',{
        opacity: 0,
        duration:1,
        ease:Power4,
    })
})