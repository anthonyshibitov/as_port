function resizeBorders() {
  const panelBorders = document.getElementsByClassName("panel-border");
  Array.from(panelBorders).forEach((panel) => {
    panel.style.height = window.innerHeight * 0.6 + "px";
    panel.style.top = window.innerHeight * 0.2 + "px";
  });

  const panels = document.getElementsByClassName("panel");
  Array.from(panels).forEach((panel) => {
    panel.style.height = window.innerHeight;
  });
}

window.addEventListener("resize", resizeBorders);

const scroll = document.getElementsByClassName("scroll-wrapper");

resizeBorders();