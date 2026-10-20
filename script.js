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

});



