const text = `
Chúc mừng anh iu của bé bước sang 19 nhieeeeeeeeee.

Chúc mừng anh vì lại thêm 1 năm đón sinh nhật cùng bé hihiii.

Chúc anh chân cứng đá mềm, đường xa không mỏi, đường đời nở hoaaaa 💕.

Mong tuổi mới mang đến nhiều niềm vui và thành công.

Mong anh làm điều mình yêu và yêu điều mình làm.

Vì anh xứng đáng với tất cả điều tốt đẹp nhất...

Là bé nèee 💖

Bé luôn nói là tụi mình không hợp nhau...
nhưng thật lòng bé vẫn muốn tương lai có anh ở đó.

Cảm ơn anh đã xuất hiện và ở lại.
`;

let currentSlide = 0;
let slides = [];
let slideshowStarted = false;

/* ENVELOPE */
function openLetter() {
  document.getElementById("screen-envelope").classList.add("hidden");
  document.getElementById("screen-letter").classList.remove("hidden");

  document.getElementById("bgm").play();

  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });

  typeWriter();
}

/* TYPEWRITER */
function typeWriter() {
  let i = 0;
  const el = document.getElementById("typewriter");

  const interval = setInterval(() => {
    el.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 25);
}

/* GALLERY */
function openGallery() {
  document.getElementById("screen-letter").classList.add("hidden");
  document.getElementById("screen-gallery").classList.remove("hidden");

  confetti({
    particleCount: 120,
    spread: 90
  });

  startSlideshow();
}

/* SLIDESHOW */
function startSlideshow() {
  if (slideshowStarted) return;
  slideshowStarted = true;

  slides = document.querySelectorAll(".slide");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }, 3000);
}

/* REPLAY */
function replay() {
  location.reload();
}
