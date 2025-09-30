function drawText() {
  const canvas = document.getElementById("graffitiCanvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("nameInput").value || "Grafiti";

  // limpiar
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // lista de fuentes (mismos nombres que en style.css)
  const fuentes = [
    "VabioxeGraffiti", 
    "DonGraffiti",
  ];

  // escoger una al azar
  const fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];

  // aplicar la fuente
  ctx.font = "120px " + fuenteAleatoria;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // sombra simple
  ctx.shadowColor = "rgba(0,0,0,0.8)";
  ctx.shadowBlur = 8;

  // color sólido
  ctx.fillStyle = "#ff4d4d"; // rojo vivo
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // contorno negro
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#000";
  ctx.strokeText(name, canvas.width / 2, canvas.height / 2);
}

// descargar imagen en PNG
function downloadImage() {
  const canvas = document.getElementById("graffitiCanvas");
  const link = document.createElement("a");
  link.download = "graffiti.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// eventos al cargar
window.onload = function () {
  // botón generar
  document.getElementById("generateBtn").addEventListener("click", drawText);

  // botón descargar
  document.getElementById("downloadBtn").addEventListener("click", downloadImage);

  // generar QR
  const url = window.location.href;
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200,
  });
};
