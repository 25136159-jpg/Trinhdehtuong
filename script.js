function checkPass() {
  const pass = document.getElementById("pass").value;

  if (pass === "31012024") {
    window.location.href = "page2.html";
  } else {
    document.getElementById("msg").innerText =
      "Hmm… hình như chưa đúng rồi 😌";
  }
}
// simple fireworks (basic)
if (document.getElementById("fireworks")) {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function Particle(x,y){
    this.x=x; this.y=y;
    this.vx=Math.random()*4-2;
    this.vy=Math.random()*4-2;
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=p.vx;
      p.y+=p.vy;
      ctx.fillStyle="white";
      ctx.fillRect(p.x,p.y,3,3);
    });
    requestAnimationFrame(draw);
  }

  for(let i=0;i<100;i++){
    particles.push(new Particle(canvas.width/2,canvas.height/2));
  }

  draw();
}
