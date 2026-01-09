function renderPreview(objects) {
  const canvas = document.getElementById("preview");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let x = 10;

  objects.forEach(obj => {
    const id = parseInt(obj.split(",")[1]);

    ctx.fillStyle =
      id === 8 ? "#f33" :      // spike
      id === 36 ? "#ff0" :     // orb
      id >= 600 ? "#0ff" :     // wave portal
      "#0f0";                  // block

    ctx.fillRect(x, 110, 18, 18);
    x += 8;
  });
}
