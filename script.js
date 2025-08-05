// Improved typing effect
const text = `Selamat ulang tahun, Mutia 🌼

Nggak terasa ya, udah sejauh ini kamu bertahan. Terima kasih karena tetap kuat sampai hari ini — aku bangga banget sama kamu.

Maaf kalau dunia kadang nggak adil, tapi kamu pantas dapat yang jauh lebih baik. Di mana pun kamu sekarang, jangan lupa senyum, ya... minimal lima kali sehari 😄

Ingat, sayangin dulu dirimu sendiri sebelum orang lain. Nggak apa-apa kalau belum terbiasa — pelan-pelan aja, yang penting kamu sadar kalau kamu juga layak diperhatikan.

Jangan terus-menerus mendahulukan orang lain sampai lupa jaga dirimu sendiri. Tetap jadi kamu, nggak perlu jadi siapa-siapa. Kamu versi asli udah cukup berharga.

Aku nggak minta kamu berubah — cukup jadi dirimu sendiri, itu udah lebih dari cukup. Jadi, jangan terus merasa nggak enakan, ya.

Semoga selalu sehat, bahagia, dan dikelilingi hal-hal baik. Sekali lagi, selamat ulang tahun. 🌸`;

let i = 0;
const speed = 35;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
    
    // Update progress bar
    const progress = Math.min(100, Math.floor((i / text.length) * 100));
    document.getElementById("progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-text").textContent = 
      progress < 100 ? `Loading happiness... ${progress}%` : "Happiness loaded! 100%";
  } else {
    setTimeout(showNextChat, 1000);
  }
}

// Enhanced chat system with avatars
const chats = [
  { 
    name: "Chisato", 
    msg: "Yaa~ Selamat ulang tahun, Mutia! 🎉",
    emoji: ""
  },
  { 
    name: "Yor", 
    msg: "Kuharap kamu selalu sehat dan bahagia! 🫶",
    emoji: ""
  },
  { 
    name: "Zero Two", 
    msg: "Hm? Hari ini ulang tahunmu? Well, be special 💕",
    emoji: ""
  },
  { 
    name: "Megumin", 
    msg: "SELAMAT ULANG TAHUN, Mutia! *ledakan! 💥*",
    emoji: ""
  },
  { 
    name: "Takina", 
    msg: "Tetap kuat dan teruslah tersenyum... selamat ulang tahun.",
    emoji: ""
  },
];

let chatIndex = 0;

function showNextChat() {
  if (chatIndex < chats.length) {
    const chatbox = document.getElementById("chatbox");
    const chat = chats[chatIndex];
    const div = document.createElement("div");
    div.className = "bubble";
    div.innerHTML = `
      <span style="font-size:1.5em;vertical-align:middle;margin-right:8px;">${chat.emoji}</span>
      <b>${chat.name}</b>: ${chat.msg}
    `;
    chatbox.appendChild(div);
    
    // Scroll to bottom of chat
    chatbox.scrollTop = chatbox.scrollHeight;
    
    chatIndex++;
    setTimeout(showNextChat, 2500);
  }
}

// Floating hearts background
function createFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  const heartCount = 30;
  
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ['‎ ', '‎ ', '‎ ', '‎ ', '‎ ', '‎ '][Math.floor(Math.random() * 6)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${10 + Math.random() * 20}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.fontSize = `${15 + Math.random() * 15}px`;
    container.appendChild(heart);
  }
}

// Cake interaction
document.getElementById('cake').addEventListener('click', function() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff4f93', '#ff92b5', '#d77fa1']
  });
  
  // Animate cake
  this.classList.add('animate__animated', 'animate__bounce');
  setTimeout(() => {
    this.classList.remove('animate__animated', 'animate__bounce');
  }, 1000);
});

// Confetti button
document.getElementById('confetti-btn').addEventListener('click', function() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.5 },
    colors: ['#ff4f93', '#ff92b5', '#d77fa1', '#6a5acd', '#9370db']
  });
  
  // Play sound if needed
  // new Audio('pop.mp3').play();
});

window.onload = () => {
  typeEffect();
  createFloatingHearts();
  
  // Try to autoplay music with fallback
  const audio = document.getElementById("bgm");
  const playAudio = () => {
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Autoplay prevented:", e));
  };
  
  // Try to play on load
  playAudio();
  
  // Add play button if audio didn't play
  setTimeout(() => {
    if (audio.paused) {
      const btn = document.createElement("button");
      btn.className = "confetti-btn";
      btn.innerHTML = "Putar Musik Ulang Tahun";
      btn.style.margin = "20px auto";
      btn.onclick = () => {
        playAudio();
        btn.remove();
      };
      document.querySelector(".container").appendChild(btn);
    }
  }, 1000);
};

// Heart Animation (canvas)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let hearts = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -25, -15);
  ctx.bezierCurveTo(-55, -15, -55, 22.5, -55, 22.5);
  ctx.bezierCurveTo(-55, 40, -35, 62, 0, 80);
  ctx.bezierCurveTo(35, 62, 55, 40, 55, 22.5);
  ctx.bezierCurveTo(55, 22.5, 55, -15, 25, -15);
  ctx.bezierCurveTo(10, -15, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y -= heart.speed;
    heart.opacity -= 0.005;
    drawHeart(heart.x, heart.y, heart.size, `rgba(255,105,180,${heart.opacity})`);
    if (heart.opacity <= 0) hearts.splice(index, 1);
  });
  requestAnimationFrame(animate);
}

setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 20;
  const size = Math.random() * 0.5 + 0.2;
  const speed = Math.random() * 1.5 + 0.5;
  hearts.push({ x, y, size, speed, opacity: 1 });
}, 200);

animate();

// Scroll effect for letter
window.addEventListener("scroll", () => {
  document.querySelectorAll(".letter p").forEach((p, i) => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      setTimeout(() => {
        p.classList.add("show");
      }, i * 200);
    }
  });
});