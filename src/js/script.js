const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.from(".left-section, .right-section .nav-links  li",{
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y:50,
    stagger: {
        amount: 0.4,
    },
});


tl.from(".principal-section .panda-image",{
    duration: 1,
    delay:0.5,
    opacity: 0,
    x: 100,
    skewX: 5
},
"-=1");

tl.from(".principal-section h1",{
    duration: 1,
    delay: 0.5,
    opacity: 0,
    x: -100,
    skewX: 5,
    stagger: {
        amount: 0.4,
    },
},
"-=1");

tl.from(".principal-section .btn-main", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    x: -100,
    skewX: 5,
    stagger:{
        amount: 0.4,
    },
},
"-=1");


tl.fromTo(".images-main .icon-1", {y: 150, opacity: 0, stagger:1}, {y:0, x: 0, opacity: 1, duration: 0.4,});
tl.fromTo(".images-main .icon-2", {y: 150, x: -110, opacity: 0, stagger:2}, {y:0, x: 0, opacity: 1, duration: 0.4,});
tl.fromTo(".images-main .icon-3", {y: 105, x: -210, opacity: 0, stagger:3}, {y:0, x: 0, opacity: 1, duration: 0.4,});
tl.fromTo(".images-main .icon-4", {y: -40, x: -300, opacity: 0, stagger:4}, {y:0, x: 0, opacity: 1, duration: 0.4,});
tl.fromTo(".images-main .icon-5", {y: -150, x: -220, opacity: 0, stagger:5}, {y:0, x: 0, opacity: 1, duration: 0.4,});
tl.fromTo(".images-main .icon-6", {y: -180, x: -100, opacity: 0, stagger:6}, {y:0, x: 0, opacity: 1, duration: 0.4,});
tl.fromTo(".images-main .icon-7", {y: -180, x: 5, opacity: 0, stagger:6}, {y:0, x: 0, opacity: 1, duration: 0.4,});



// gsap.from(".introduce-section h2, .introduce-section p", {
//     x: -200,
//     duration: 1,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".introduce-section",
//         start: "top 50%", //We could use px, or numbers or top, center and bottom
//         end: "top 35%",
//         toggleActions: "complete complete complete complete ",  // Keywords:  restart, play, reverse, pause, resume, reset, complete, none
//         //              onEnter onLeave onEnterBack onLeaveBack
//         scrub: 0.5,
//         // markers: {      // We could put true (With default settings) or modify the default settings
//         //     startColor: "purple",
//         //     endColor: "fuchsia",
//         //     fontSize: "1.3rem",
//         //     indent: 100,
//         // },
//     }
// });