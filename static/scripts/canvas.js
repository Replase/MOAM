$(Document).ready(function(){
    var canvas = document.querySelector("#canvas");
    var X,Y,W,H,R;              
canvas.height = 180; 
function inicializarCanvas(){ 
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
        if (ctx) {
			 var s = getComputedStyle(canvas);
			 var w = s.width;
			 var h = s.height;
					
			 W = canvas.width = w.split("px")[0];
			 H = canvas.height = h.split("px")[0];
			 
			 X = Math.floor(W/2);
			 Y = Math.floor(H/2);
			 R = W/50;
             dibujarCorazonEnCanvas(ctx);
			 }
		}
	}

function dibujarCorazonEnCanvas(ctx) {
    ctx.strokeStyle = "#FF253C";
    ctx.fillStyle = "#FF253C";
    ctx.lineWidth = 5;
    let puntos = corazon(R,X,Y, 0.05);  
    ctx.beginPath();  
    ctx.moveTo(puntos[0].x, puntos[0].y);   
    puntos.forEach(p => {ctx.lineTo(p.x, p.y);});   
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
function corazon(r,cx,cy, paso) 
{
    let puntos = [];
    for (var a = 0; a < 2 * Math.PI; a += paso) 
    {
      let p = {};
      p.x = cx + 16 * r * (Math.sin(a) * Math.sin(a) * Math.sin(a));
      p.y = cy - 13 * r * Math.cos(a) + 5 * r * Math.cos(2 * a) + 2 * r * Math.cos(3 * a) + 1 * r * Math.cos(4 * a);
      puntos.push(p);
    };
    return puntos;
};
    setTimeout(function() {
    inicializarCanvas();
    addEventListener("resize", inicializarCanvas);
    }, 15);
});