function myFunction() {
    document.getElementById("demo").innerHTML="Biruk is a bot at basketball"
}

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("changeColorBtn");
  const body = document.body;

  button.addEventListener("click", function() {
    const randomColor = generateRandomColor();
    body.style.backgroundColor = randomColor;
  });

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
