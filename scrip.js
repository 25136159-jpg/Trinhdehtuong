const startBtn = document.getElementById("start");
const message = document.getElementById("message");

const wishBtn = document.getElementById("wish");
const end = document.getElementById("end");

// Mở thư
startBtn.addEventListener("click", () => {

    // Ẩn nút Mở thư
    startBtn.style.display = "none";

    // Hiện nội dung
    message.classList.remove("hidden");

    // Cuộn nhẹ tới đầu lá thư
    message.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// Thổi nến
wishBtn.addEventListener("click", () => {

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    end.classList.remove("hidden");

    wishBtn.innerHTML = "🎉Yêu anhhhhh";
    wishBtn.disabled = true;

});
