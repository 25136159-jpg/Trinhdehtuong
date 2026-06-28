const modal = document.getElementById("letterModal");
const openBtn = document.getElementById("openLetterBtn");
const closeBtn = document.getElementById("closeBtn");

// CANVAS
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const colors = [
  "#ff4d4d", // đỏ
  "#ffd93d", // vàng
  "#6bcBef", // xanh
  "#b28dff", // tím
  "#ff7edb"  // hồng
];

let particles = [];

function createFirework(x, y) {
  const color = colors[Math.floor(Math.random() * colors.length)];

  for (let i = 0; i < 120; i++) {
    const angle = (Math.PI * 2 * i) / 120;

    particles.push({
      x,
      y,
      vx: Math.cos(angle) * (Math.random() * 4 + 2),
      vy: Math.sin(angle) * (Math.random() * 4 + 2),
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01,
      color
    });
  }
}

function animate() {
  // tạo hiệu ứng “fade trail” thay vì clear trắng
  ctx.fillStyle = "rgba(0,0,0,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.vy += 0.03; // gravity

    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= p.decay;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      return;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = p.color;

    ctx.fill();
  });

  requestAnimationFrame(animate);
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

animate();

// mở thư + bắn pháo hoa
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.5
      );
    }, i * 150);
  }
});

// đóng modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
