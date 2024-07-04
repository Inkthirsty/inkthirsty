document.addEventListener("DOMContentLoaded", function() {
  const body = document.getElementById("stars");

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    body.appendChild(star);
    // stolen from chatgpt
    setTimeout(() => {
      star.remove();
    }, 2000);
  }
  setInterval(createStar, 100);
});
