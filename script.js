gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,         // Smoothness (higher is slower)
    effects: true,     // Enable data-speed & data-lag
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,
    effects: true,
});

gsap.matchMedia().add("(min-width: 991px)", () => {

    gsap.to("#headphones", {
        scrollTrigger: {
            trigger: "#section2",
            start: "top bottom",
            end: "center center",
            scrub: true,
            markers: false
        },
        y: "92%",
        x: "50%",
        width: "47vw",
        rotate: 90,
        ease: "power1.inOut",
        immediateRender: false
    });
    gsap.to("#headphones", {
        scrollTrigger: {
            trigger: "#section3",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            markers: false
        },
        y: "340%",
        x: "0%",
        width: "45vw",
        rotate: 35,
        ease: "power1.inOut",
        immediateRender: false
    });
    gsap.to("#headphones", {
        scrollTrigger: {
            trigger: "#section4",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            markers: false
        },
        y: "400%",
        width: "50vw",
        rotate: 0,
        ease: "power1.inOut",
        immediateRender: false
    });
    gsap.to("#headphones", {
        scrollTrigger: {
            trigger: "#section5",
            start: "top bottom",
            end: "center bottom",
            scrub: true,
            markers: false
        },
        y: "580%",
        width: "37vw",
        ease: "power1.inOut",
        immediateRender: false
    });
    gsap.to("#headphones", {
        scrollTrigger: {
            trigger: "#section5",
            start: "top bottom",
            end: "center bottom",
            scrub: true,
            markers: false
        },
        y: "580%",
        width: "37vw",
        ease: "power1.inOut",
        immediateRender: false
    });
    gsap.to("#headphones", {
        scrollTrigger: {
            trigger: "#section5",
            start: "top bottom",
            end: "center bottom",
            scrub: true,
            markers: false
        },
        y: "580%",
        width: "37vw",
        ease: "power1.inOut",
        immediateRender: false
    });

    gsap.to("#headphones", {
        scrollTrigger: {
            trigger: "#section5",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
            markers: false
        },
        y: "870%",
        width: "30vw",
        ease: "power1.inOut",
        immediateRender: false
    });
    gsap.from('#section2 .content-wrapper', {
        scrollTrigger: {
            trigger: "#section2",
            start: "-50% bottom",
            end: "center center",
            scrub: true,
            markers: false
        },
        y: '140%',
        ease: "power1.inOut",

    });
    gsap.from('#section3 .heading', {
        scrollTrigger: {
            trigger: "#section3",
            start: "top bottom",
            end: "center center",
            scrub: true,
            markers: false
        },
        y: '140%',
        ease: "power1.inOut",

    })
    gsap.from('#section4 img', {
        scrollTrigger: {
            trigger: "#section4",
            start: "top bottom",
            end: "center center",
            scrub: true,
            markers: false
        },
        width: 0,
        opacity: 0,
        ease: "power1.inOut",

    })
        gsap.from('#section6 .content-wrapper', {
        scrollTrigger: {
            trigger: "#section6",
            start: "top bottom",
            end: "center center",
            scrub: true,
            markers: false
        },
        y:'40%',
        duratio:2,
        ease: "power1.inOut",
    })
    // text animation 
    let split = SplitText.create('.section1 .heading',{
        type:`chars, words , lines`,
        mask:`lines`
    });
    gsap.from(split.chars, {
        yPercent:()=> gsap.utils.random(-100, 100),
        rotation:()=> gsap.utils.random(-30, 30),
        autoAlpha:0,
         ease: "back.out(1.5)",
        stagger:{
            amount:0.5,
            from:'random'
        },
        duration:1.5
        
    });
    gsap.from('#headphones',{
        opacity:0,
        scale:0,
        duration:1,
        delay:1,
        ease: "power1.inOut"
    })
});



