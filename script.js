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

});



