var canvas = document.getElementById("canv1");
var ctx = canvas.getContext("2d");
let direction = false
var counter = 0;
var circles = setInterval(function () {
    counter++; 
    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI, direction);
    ctx.closePath();
  
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    if (counter == 10) {
      clearInterval(circles);
      ctx.clearRect(0, 0, 300, 300);
      ctx.beginPath();
      ctx.arc(150, 150, 100, 0, Math.PI*2, !direction);
      ctx.closePath();
  
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.stroke();
    }
    direction = !direction;
  }, 1000);