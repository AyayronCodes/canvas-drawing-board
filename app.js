const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const sliders = Array.from(document.querySelectorAll(".colorRange"));
const choice = document.querySelector(".color");
console.log(sliders);

window.addEventListener("load", () => {
  let drawing = false;
  colorize();

  function getColor() {
    const rgb = sliders.map((el) => parseInt(el.value));
    console.log(rgb);
    return rgb;
  }

  function showColor(rgb) {
    choice.style.backgroundColor = rgb;
  }

  function setColor(rgb) {
    ctx.strokeStyle = rgb;
  }

  function colorize() {
    const color = getColor();
    const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    showColor(rgb);
    setColor(rgb);
  }

  canvas.addEventListener("mousemove", (event) => {
    if (drawing) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
    }
    console.log(event);

    // if (event.offsetX < 0 || event.offsetX > )
  });

  canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  });

  canvas.addEventListener("mouseup", () => {
    drawing = false;
  });

  sliders.forEach((el) => {
    el.addEventListener("input", () => {
      colorize();
    });
  });
});
