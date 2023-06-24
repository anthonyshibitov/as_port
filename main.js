function resizeBorders() {
  const panelBorders = document.getElementsByClassName("panel-border");
  Array.from(panelBorders).forEach((panel) => {
    panel.style.height = window.innerHeight * 0.6 + "px";
    panel.style.top = window.innerHeight * 0.2 + "px";
  });

  const panels = document.getElementsByClassName("panel");
  Array.from(panels).forEach((panel) => {
    panel.style.height = window.innerHeight + "px";
  });

  const panelContainer = document.getElementsByClassName("panel-container");
  Array.from(panelContainer)[0].style.maxHeight = window.innerHeight + "px";

  const rescueBg = document.getElementsByClassName("rescue-bg");
  Array.from(rescueBg)[0].style.height = window.innerHeight + "px";
}

window.addEventListener("resize", resizeBorders);

const scroll = document.getElementsByClassName("scroll-wrapper");

resizeBorders();