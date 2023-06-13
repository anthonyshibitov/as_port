import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { printText } from "./digital-ghost";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller: ".panel-container",
})

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

gsap.from(".scroll-wrapper", {
  opacity: 0,
  duration: 2,
  delay: 7.5,
});

gsap.to("#line1, #line5", {
  width: "29vw",
  duration: 3,
  repeat: -1,
  yoyo: true,
  delay: 2,
  ease: "sine.inOut",
});

gsap.to("#line4", {
  width: "10vw",
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  delay: 2,
  ease: "sine.inOut",
});

gsap.to("#line3", {
  width: "1vw",
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  delay: 2,
  ease: "sine.inOut",
});

gsap.from(".about-wrapper", {
  scrollTrigger: {
    trigger: ".about-wrapper",
    onEnter: () => {
      setTimeout(() => {
        printText("hi. i'm anthony, a 27 year old web developer in new york.", "about", 25);
      }, 1000);
      console.log("enter");
    },
    once: true,
  },
});
