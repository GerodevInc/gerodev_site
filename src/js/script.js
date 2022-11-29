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



gsap.from(".introduce-section h2, .introduce-section p", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".introduce-section",
        start: "top 70%", 
        end: "top 55%",
        toggleActions: "play resume complete pause",  
        //              onEnter onLeave onEnterBack onLeaveBack
        // markers: {      
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "1.3rem",
        //     indent: 100,
        // },
    }
});

gsap.from(".offer-section .main-txt span:nth-child(1)", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".offer-section",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
});

gsap.from(".offer-section .main-txt h2, .offer-section .main-txt p", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".offer-section .main-txt",
        start: "top 70%",
        end: "top 75%",
        toggleActions: "play resume complete pause",
    },
});

gsap.from(".offer-section .main-txt .check-marks div:nth-child(1)", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: ".offer-section .main-txt",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
});

gsap.from(".offer-section .main-txt .check-marks div:nth-child(2)", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".offer-section .main-txt",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
});

gsap.from(".container-images .image-one, .container-images .image-two, .container-images .image-three, .container-images .image-four, .container-images .image-five, .container-images .image-six, .container-images .image-seven", {
    x: -200,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".offer-section .main-txt p",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
});

gsap.from(".show-section h2, .show-section p", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".show-section",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
});

gsap.from(".show-section img", {
    y: 200,
    duration: 0.5,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: ".show-section",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
});

// gsap.from(".branding-section .container-img img", {
//     x: 200,
//     duration: 0.5,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".branding-section",
//         start: "top 50%",
//         end: "top 35%",
//         toggleActions: "play resume complete pause",
//     },
// });



gsap.from(".banner h2", {
    y:100,
    skewY:5,
    opacity: 0,
    duration: 1,
    stagger: {
        amount: 0.4,
    },
    scrollTrigger: {
        trigger: ".branding-section",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
},
"-=1"
);

gsap.from(".grow-section h2", {
    x: -500,
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".grow-section",
        start: "top 70%",
        end: "top 55%",
        toggleActions: "play resume complete pause",
    },
});

gsap.to(".grow-section img", {
    x: 550,
    scrub: 5,
    scrollTrigger: {
        trigger: ".img-container",
        start: "top 30%", 
        end: "top -2%",
        toggleActions: "restart none none none",  
        //              onEnter onLeave onEnterBack onLeaveBack
        scrub: 1,
        // markers: {      
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "1.3rem",
        //     indent: 100,
        // },
    }
});


gsap.to(".grow-section img", {
    y: 850,
    scrub: 5,
    scrollTrigger: {
        trigger: ".img-container",
        start: "bottom 70%", 
        end: "bottom 40%",
        toggleActions: "restart none none none",  
        //              onEnter onLeave onEnterBack onLeaveBack
        scrub: 1,
        // markers: {      
        //     startColor: "blue",
        //     endColor: "yellow",
        //     fontSize: "1.3rem",
        //     indent: 100,
        // },
    }
});
