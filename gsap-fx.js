import gsap from "gsap";

gsap.from("#line1, #line2, #line3, #line4, #line5", {
    width: 0,
    duration: 2,
    // opacity: 0,
    ease: "power2.inOut",
});

gsap.from("header, footer", {
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
});

gsap.from(".about-wrapper", {
    opacity: 0,
    duration: 5,
    ease: "power2.inOut",
});

gsap.from(".scroll-wrapper, .big-div", {
    opacity: 0,
    duration: 2,
    delay: 7.5
});

gsap.to("#line1, #line5", {
    width: "29vw",
    duration: 3,
    repeat: -1,
    yoyo: true,
    delay: 2,
    ease: "sine.inOut",
})

gsap.to("#line4", {
    width: "10vw",
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    delay: 2,
    ease: "sine.inOut",
})

gsap.to("#line3", {
    width: "1vw",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    delay: 2,
    ease: "sine.inOut",
})
