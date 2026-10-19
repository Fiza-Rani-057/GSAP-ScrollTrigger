gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 4,         // Smoothness (higher is slower)
  effects: true,     // Enable data-speed & data-lag
});

