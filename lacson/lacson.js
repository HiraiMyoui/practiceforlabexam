// Greeting alert on page load
window.onload = function() {
    alert("Welcome to Lacson Jr's Portfolio!");
};

// Change background color on button click with animation
const bgBtn = document.getElementById('bgBtn');
const colors = ["#f5f7fa", "#20242dff"];
let colorIndex = 0;

bgBtn.addEventListener('click', function() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.transition = "background 0.6s";
    document.body.style.background = colors[colorIndex];
    // Simple button click animation
    bgBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
        bgBtn.style.transform = "scale(1)";
    }, 150);
});