document.getElementById("clickMe").addEventListener("click", function() {
    const msg = document.getElementById("msg");
    msg.textContent = "Thanks for clicking the button!";
    msg.style.color = "green";
});