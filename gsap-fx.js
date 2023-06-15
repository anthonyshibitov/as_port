import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { printText } from "./digital-ghost";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: ".panel-container",
  // markers: true
});

setTimeout(() => {
  printText("2023 portfolio.", "hero", 100);
}, 1000);

setTimeout(() => {
  printText("• frontend design & backend development.", "text", 50);
}, 3000);

setTimeout(() => {
  printText("• javascript, three.js, gsap.", "text-2", 50);
}, 3000);

setTimeout(() => {
  printText("• postgresql, express, node.", "text-3", 50);
}, 3000);

gsap.from(".js-img", {
  opacity: 0,
  duration: 2,
  delay: 3,
});

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
  delay: 3.5,
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
        printText(
          "hi. i'm anthony, a 27 year old web developer from new york.",
          "about-1",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "i enjoy working on challenging and engaging designs, and experimenting with bleeding edge backend solutions.",
          "about-2",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "my designs take massive inspiration from the 2000s web aesthetic, but implemented on modern tech.",
          "about-3",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "wanna see what i've been working on? keep swiping.",
          "about-4",
          50
        );
      }, 1000);
    },
    once: true,
  },
});

// gsap.from("#p1-name", {
//     scrollTrigger: {
//         trigger: "#p1-name",
//         once: true,
//     },
//     opacity: 0,
//     duration: 2,
//     delay: 1,
// })

gsap.from("#p1-t4", {
  scrollTrigger: {
    trigger: "#p1-t4",
    onEnter: () => {
      setTimeout(() => {
        printText(
          "A site where anonymous users submit messages which are then read and judged by other anonymous users.",
          "p1-t1",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "Front end: Vanilla HTML, CSS, Greensock Animation Platform.",
          "p1-t2",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "Back end: Node.js, Express.js, PostgreSQL, EJS Templating.",
          "p1-t3",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "Hosted on a Debian VPS using Nginx as a reverse proxy and PM2 process manager for persistance.",
          "p1-t4",
          50
        );
      }, 1000);
    },
    once: true,
  },
});

gsap.from("header", {
  scrollTrigger: {
    trigger: "header",
    onEnter: () => {
      console.log("enter 1");
      document.getElementById("footer-left").innerHTML = "01 / 06";
    },
    onEnterBack: () => {
      console.log("enter 1");
      document.getElementById("footer-left").innerHTML = "01 / 06";
    },
  },
});

gsap.from("#about-2", {
  scrollTrigger: {
    trigger: "#about-2",
    onEnter: () => {
      console.log("enter 2");
      document.getElementById("footer-left").innerHTML = "02 / 06";
    },
    onEnterBack: () => {
      console.log("enter 2");
      document.getElementById("footer-left").innerHTML = "02 / 06";
    },
  },
});

gsap.from("#p1-t4", {
  scrollTrigger: {
    trigger: "#p1-t4",
    onEnter: () => {
      console.log("enter 3");
      document.getElementById("footer-left").innerHTML = "03 / 06";
    },
    onEnterBack: () => {
      console.log("enter 3");
      document.getElementById("footer-left").innerHTML = "03 / 06";
    },
  },
});
