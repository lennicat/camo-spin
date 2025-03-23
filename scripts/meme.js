let logo = document.getElementById("camo");
let container = document.getElementById("camo-container");

let text = document.getElementById("main-text")
let hue = 0;

let logoWidth = logo.width;
let logoHeight = logo.height;

let posX = Math.random() * (window.innerWidth - logoWidth);
let posY = Math.random() * (window.innerHeight - logoHeight);

let speedX = 1;
let speedY = 1;

let bounced = false;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

function moveLogo() {
    let bounced = false;
    posX += speedX;
    posY += speedY;

    // Collision detection for bouncing
    if (posX + logoWidth >= window.innerWidth || posX <= 0) {
        speedX = -speedX;
        changeLogoColor(); // Optional: Change color when bouncing off the wall
        bounced = true;
    }

    if (posY + logoHeight >= window.innerHeight || posY <= 0) {
        speedY = -speedY;
        changeLogoColor(); // Optional: Change color when bouncing off the wall
        bounced = true;
    }

    logo.style.left = posX + 'px';
    logo.style.top = posY + 'px';

    if (bounced) {
        text.style.color = getRandomColor();
    }

    requestAnimationFrame(moveLogo);
}

// Optional: Change the color of the DVD logo when it bounces
function changeLogoColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  logo.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
}
  
// Start the hue rotation animation

console.log("It fired.")
moveLogo(); // Start the movement