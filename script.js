let x = 100;
let y = 200;
function kresli() {
  let cnv = document.getElementById("platno");
  let ctx = cnv.getContext("2d");

  ctx.clearRect(0,0,cnv.width,cnv.height);

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.moveTo(0,0);
  ctx.lineTo(200,100);
  ctx.lineTo(200,0);
  ctx.stroke();

  x = x + 1;
  y = y - 1;

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = "blue";
  ctx.arc(x,y,20,0,2*3.14);
  ctx.fill();

}
function animuj() {
  setInterval(kresli, 10);
}