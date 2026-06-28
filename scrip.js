const startBtn = document.getElementById("start");
const message = document.getElementById("message");

const wishBtn = document.getElementById("wish");
const end = document.getElementById("end");

startBtn.onclick = () => {
    startBtn.style.display = "none";
    message.classList.remove("hidden");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

wishBtn.onclick = () => {

    confetti({
        particleCount:180,
        spread:120,
        origin:{y:0.6}
    });

    end.classList.remove("hidden");

    wishBtn.innerHTML = "🎉 Happy birthdayyyy";
    wishBtn.disabled = true;
};
