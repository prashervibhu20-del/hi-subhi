const face = document.querySelector(".smiley-wrap");

if (face && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const blink = () => {
    face.classList.add("blink");
    window.setTimeout(() => face.classList.remove("blink"), 240);
    window.setTimeout(blink, 2200 + Math.random() * 1800);
  };
  window.setTimeout(blink, 1400);
}
