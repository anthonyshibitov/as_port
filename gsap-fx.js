import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { printText } from "./digital-ghost";

gsap.registerPlugin(ScrollTrigger);

const rescueButton = document.getElementById("rescue");
rescueButton.addEventListener("click", () => {
  console.log("CLICKLY");
  Array.from(
    document.getElementsByClassName("panel-container")
  )[0].style.overflowY = "hidden";
  Array.from(document.getElementsByClassName("rescue-bg"))[0].style.display =
    "flex";
  Array.from(
    document.getElementsByClassName("rescue-modal-wrapper")
  )[0].style.display = "flex";
  document.getElementById("rescue").style.display = "none";

  Array.from(document.getElementsByClassName("rescue-bg"))[0].addEventListener(
    "click",
    killHeader
  );
  document
    .getElementById("modal-button-2")
    .addEventListener("click", killHeader);
});

document
  .getElementsByClassName("rescue-modal-wrapper")[0]
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });

const killHeader = () => {
  Array.from(
    document.getElementsByClassName("panel-container")
  )[0].style.overflowY = "scroll";
  Array.from(document.getElementsByClassName("rescue-bg"))[0].style.display =
    "none";
  Array.from(
    document.getElementsByClassName("rescue-modal-wrapper")
  )[0].style.display = "none";
  document.getElementById("rescue").style.display = "flex";
};

ScrollTrigger.defaults({
  scroller: ".panel-container",
  // markers: true
});

setTimeout(() => {
  printText("2024 portfolio.", "hero", 100);
}, 1000);

setTimeout(() => {
  printText("• frontend design & backend development.", "text", 50);
}, 3000);

setTimeout(() => {
  printText("• javascript, react, vue.", "text-2", 50);
}, 3000);

setTimeout(() => {
  printText("• postgresql, express, node.", "text-3", 50);
}, 3000);

gsap.to(".rescue-wrapper", {
  y: -10,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  // ease: "power2.inOut",
});

gsap.from(".js-img", {
  opacity: 0,
  duration: 2,
  delay: 3,
});

gsap.from("#rescue", {
  opacity: 0,
  duration: 2,
  ease: "power2.inOut",
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

// Panel 2
gsap.from("#pmp2", {
  scrollTrigger: {
    trigger: "#pmp2",
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

// Panel 3
gsap.from("#p1-name, #p1-name-gh", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#pmp3",
    once: true,
  },
  duration: 1,
  ease: "power2.inOut",
});
gsap.from("#pmp3", {
  scrollTrigger: {
    trigger: "#pmp3",
    onEnter: () => {
      setTimeout(() => {
        printText(
          "a site where anonymous users submit messages which are then read and judged by other anonymous users.",
          "p1-t1",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "front end: Vanilla HTML, CSS, Greensock Animation Platform.",
          "p1-t2",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "back end: Node.js, Express.js, PostgreSQL, EJS Templating.",
          "p1-t3",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "hosted on a Debian VPS using Nginx as a reverse proxy and PM2 process manager for persistance.",
          "p1-t4",
          50
        );
      }, 1000);
    },
    once: true,
  },
});

// Panel ja
gsap.from("#ja-name, #ja-name-gh", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#pmp-ja",
    once: true,
  },
  duration: 1,
  ease: "power2.inOut",
});
gsap.from("#pmp-ja", {
  scrollTrigger: {
    trigger: "#pmp-ja",
    onEnter: () => {
      setTimeout(() => {
        printText("an online Portable Executable reversing tool, for 32 and 64-bit files.", "ja-t1", 50);
      }, 1000);
      setTimeout(() => {
        printText("built entirely in javascript, executed client-side.", "ja-t2", 50);
      }, 1000);
      setTimeout(() => {
        printText("supports imports, exports, PE header parsing, sections headers, relocations, and more. provides information to quickly triage samples.", "ja-t3", 50);
      }, 1000);
    },
    once: true,
  }
});

// Panel 4
gsap.from("#p2-name, #p2-name-gh", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#pmp4",
    once: true,
  },
  duration: 1,
  ease: "power2.inOut",
});
gsap.from("#pmp4", {
  scrollTrigger: {
    trigger: "#pmp4",
    onEnter: () => {
      setTimeout(() => {
        printText(
          "activist.org is a network for political action that allows people to coordinate and collaborate on the issues that matter most to them.",
          "p2-t1",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "front end: Nuxt.js, Vue.js, Typescript, Tailwind CSS, Headless UI.",
          "p2-t2",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText("back end: Django, PostgreSQL.", "p2-t3", 50);
      }, 1000);
      setTimeout(() => {
        printText(
          "contributions: mobile bug fixes, custom vue components for displaying search results, planning backend implementations, drafting and designing database schemas.",
          "p2-t4",
          50
        );
      }, 1000);
    },
    once: true,
  },
});

// Panel 5
gsap.from("#p3-name, #p3-name-2", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#pmp5",
    once: true,
  },
  duration: 1,
  ease: "power2.inOut",
});
gsap.from("#pmp5", {
  scrollTrigger: {
    trigger: "#pmp5",
    onEnter: () => {
      setTimeout(() => {
        printText(
          "graduated from SUNY Fredonia in 2018 with a BS in computer science.",
          "p3-t1",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "fingerprint reconstruction - used OpenCV and Python to process images of latent fingerprints on a multitude of surfaces and textures and output reconstructed fingerprints.",
          "p3-t2",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "rubik's cube simulation - used freeglut and C++ to render a fully functional and playable Rubik's Cube in OpenGL.",
          "p3-t3",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "viola jones face detection- implemented the Viola-Jones Face Detection framework, as specified in the original paper, in OpenCV and Python.",
          "p3-t4",
          50
        );
      }, 1000);
    },
    once: true,
  },
});

// Panel 6
gsap.from("#p4-name, #p4-name-2, #p4-name-3", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#pmp6",
    once: true,
  },
  duration: 1,
  ease: "power2.inOut",
});
gsap.from("#pmp6", {
  scrollTrigger: {
    trigger: "#pmp6",
    onEnter: () => {
      setTimeout(() => {
        printText(
          "this is a collection of random experiments and tests for various topics that interest me!",
          "p4-t1",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "a realtime audio visualizer using webaudio API and canvas.",
          "p4-t2",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText(
          "a 3D coloring app using three.js. therapeutic!",
          "p4-t3",
          50
        );
      }, 1000);
    },
    once: true,
  },
});

// Panel 7
gsap.from("#contact-3, #contact-4", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#pmp7",
    once: true,
  },
  delay: 3,
  duration: 2,
  ease: "power2.inOut",
});
gsap.from("#pmp7", {
  scrollTrigger: {
    trigger: "#pmp7",
    onEnter: () => {
      setTimeout(() => {
        printText(
          "like what you see? have a question? wanna make something cool together?",
          "contact-1",
          50
        );
      }, 1000);
      setTimeout(() => {
        printText("let's get in touch.", "contact-2", 50);
      }, 1000);
    },
    once: true,
  },
});

// COUNTERS
// inc/dec bottom left
gsap.from("#pmp1", {
  scrollTrigger: {
    trigger: "#pmp1",
    onEnter: () => {
      console.log("enter 1");
      document.getElementById("footer-left").innerHTML = "01 / 08";
    },
    onEnterBack: () => {
      console.log("enter 1");
      document.getElementById("footer-left").innerHTML = "01 / 08";
    },
  },
});

gsap.from("#pmp2", {
  scrollTrigger: {
    trigger: "#pmp2",
    onEnter: () => {
      console.log("enter 2");
      document.getElementById("footer-left").innerHTML = "02 / 08";
    },
    onEnterBack: () => {
      console.log("enter 2");
      document.getElementById("footer-left").innerHTML = "02 / 08";
    },
  },
});

gsap.from("#pmp3", {
  scrollTrigger: {
    trigger: "#pmp3",
    onEnter: () => {
      console.log("enter 3");
      document.getElementById("footer-left").innerHTML = "03 / 08";
    },
    onEnterBack: () => {
      console.log("enter 3");
      document.getElementById("footer-left").innerHTML = "03 / 08";
    },
  },
});

gsap.from("#pmp-ja", {
  scrollTrigger: {
    trigger: "#pmp-ja",
    onEnter: () => {
      console.log("enter ja");
      document.getElementById("footer-left").innerHTML = "04 / 08";
    },
    onEnterBack: () => {
      console.log("enter ja");
      document.getElementById("footer-left").innerHTML = "04 / 08";
    },
  },
});

gsap.from("#pmp4", {
  scrollTrigger: {
    trigger: "#pmp4",
    onEnter: () => {
      console.log("enter 4");
      document.getElementById("footer-left").innerHTML = "05 / 08";
    },
    onEnterBack: () => {
      console.log("enter 4");
      document.getElementById("footer-left").innerHTML = "05 / 08";
    },
  },
});

gsap.from("#pmp5", {
  scrollTrigger: {
    trigger: "#pmp5",
    onEnter: () => {
      console.log("enter 5");
      document.getElementById("footer-left").innerHTML = "06 / 08";
    },
    onEnterBack: () => {
      console.log("enter 5");
      document.getElementById("footer-left").innerHTML = "06 / 08";
    },
  },
});

gsap.from("#pmp6", {
  scrollTrigger: {
    trigger: "#pmp6",
    onEnter: () => {
      console.log("enter 6");
      document.getElementById("footer-left").innerHTML = "07 / 08";
    },
    onEnterBack: () => {
      console.log("enter 6");
      document.getElementById("footer-left").innerHTML = "07 / 08";
    },
  },
});

gsap.from("#pmp7", {
  scrollTrigger: {
    trigger: "#pmp7",
    onEnter: () => {
      console.log("enter 7");
      document.getElementById("footer-left").innerHTML = "08 / 08";
    },
    onEnterBack: () => {
      console.log("enter 7");
      document.getElementById("footer-left").innerHTML = "08 / 08";
    },
  },
});
