/* ================================================================
   MÓDULO 1: CONFIGURACIÓN TÍTULO 3D Y PALETAS
   ================================================================ */
const titleLine1 = "YAOI PORN LOVER'S";
const titleLine2 = "CAVE OF PLEASURE";
const palettes = [
    // --- 🏳️‍🌈 BANDERAS & DIVERSIDAD (1-10) ---
    { name: "LGBT+ Clásica", colors: ["#e40303", "#ff8c00", "#ffed00", "#008026", "#004dff", "#750787"], special: "Orgullo en 6 franjas" },
    { name: "Lesbiana", colors: ["#d52d00", "#ef7627", "#ff9a56", "#ffffff", "#d162a4", "#b55690", "#a30262"], special: "Tonos cálidos y rosados" },
    { name: "Transgender", colors: ["#5bcefa", "#f5abb9", "#ffffff", "#f5abb9", "#5bcefa"], special: "Azul, rosa y blanco puro" },
    { name: "Bisexual", colors: ["#d60270", "#9b4f96", "#0038a8"], special: "Rosa, lavanda y azul real" },
    { name: "Pansexual", colors: ["#ff218c", "#ffd800", "#21b1ff"], special: "Rosa, amarillo y cian" },
    { name: "No-Binaria", colors: ["#fcf434", "#ffffff", "#9c59d1", "#2c2c2c"], special: "Amarillo, blanco, púrpura y negro" },
    { name: "Asexual", colors: ["#000000", "#a3a3a3", "#ffffff", "#800080"], special: "Negro, gris, blanco y morado" },
    { name: "Genderfluid", colors: ["#ff75a2", "#ffffff", "#be18d6", "#000000", "#333ebd"], special: "Fluidez en 5 tonos" },
    { name: "Intersexual", colors: ["#ffd800", "#7902aa"], special: "Amarillo y púrpura en círculo" },
    { name: "Polysexual", colors: ["#f1028b", "#00d7ff", "#3c8700"], special: "Rosa, azul y verde" },

    // --- 🐾 PERSONAJES PATREON & FURRIES (Con texturas) (11-25) ---
    { name: "Shadow", colors: ["#000000", "#e60012", "#ffffff", "#333333"], special: "Pelaje oscuro con estrías rojas" },
    { name: "Fang", colors: ["#800080", "#ffffff", "#ffd700", "#4b0082"], special: "Pelaje morado y sombrero de cuero" },
    { name: "Mordecai", colors: ["#0033cc", "#ffffff", "#000000", "#6699ff"], special: "Plumaje azul brillante" },
    { name: "King of Dinosaurs", colors: ["#228b22", "#8b4513", "#ff0000", "#ffd700"], special: "Escamas verdes y rugido dorado" },
    { name: "Amy Rose", colors: ["#ff1493", "#ff0000", "#ffffff", "#ffb6c1"], special: "Pelaje rosa suave y lazo" },
    { name: "Zavok", colors: ["#8b0000", "#000000", "#ffd700", "#ff4500"], special: "Armadura robótica roja y negra" },
    { name: "Pepsiman", colors: ["#004b93", "#c8102e", "#ffffff", "#c0c0c0"], special: "Traje de látex plateado y azul" },
    { name: "Senpai FNF", colors: ["#ffb7c5", "#87ceeb", "#ffffff", "#ff69b4"], special: "Piel melocotón y cabello pastel" },
    { name: "Yagami Iori", colors: ["#ff0000", "#4b0082", "#000000", "#800000"], special: "Cabello rojo fuego y aura púrpura" },
    { name: "Kaito", colors: ["#0047ab", "#ffffff", "#000000", "#87cefa"], special: "Bufanda azul larga y brillante" },
    { name: "Yanhu", colors: ["#ff4500", "#ff0000", "#ffd700", "#8b0000"], special: "Pelaje anaranjado con detalles de fuego" },
    { name: "Elliot Builder", colors: ["#ffff00", "#00a2ff", "#00ff00", "#ff0000"], special: "Piel de plástico amarillo clásico" },
    { name: "Builderman", colors: ["#ffff00", "#0000ff", "#ff0000", "#00ff00"], special: "Camisa azul y sonrisa de bloques" },
    { name: "Bacon Hair", colors: ["#8b4513", "#4682b4", "#ffd700", "#f5deb3"], special: "Cabello texturizado marrón" },
    { name: "C00lkidd", colors: ["#ff0000", "#000000", "#00ff00", "#ffffff"], special: "Hoodie rojo con ojos brillantes" },

    // --- 🦸‍♂️ DC COMICS & HÉROES (Con texturas) (26-30) ---
    { name: "Batman", colors: ["#000000", "#1a1a1a", "#ffd700", "#2c3e50"], special: "Capa negra mate y cinturón dorado" },
    { name: "Superman", colors: ["#003D7C", "#F2C80F", "#B22222", "#FFFFFF"], special: "Capa roja ondeante y pecho brillante" },
    { name: "Harley Quinn", colors: ["#ff0000", "#0000ff", "#ffffff", "#000000"], special: "Diamantes rojos y azules" },
    { name: "Joker", colors: ["#ffffff", "#00ff00", "#ff0000", "#4b0082"], special: "Piel blanca, cabello verde y sonrisa" },
    { name: "Nightwing", colors: ["#000080", "#000000", "#00bfff", "#ffffff"], special: "Traje azul nocturno con líneas negras" },

    // --- 💻 ESTÉTICAS YEYO, CÓDIGO & CULTURA (31-40) ---
    { name: "Yeyo Supremo", colors: ["#ffd700", "#bf00ff", "#39ff14", "#ffffff"], special: "Aura dorada y energía púrpura" },
    { name: "Leo Kasper", colors: ["#01cdfe", "#ff71ce", "#05ffa1", "#1a1a1a"], special: "Código matrix y neón rosa" },
    { name: "Cloud Strife", colors: ["#f4d03f", "#5b2c6f", "#1abc9c", "#2c3e50"], special: "Cabello rubio esponjoso y espada" },
    { name: "Argentina Scaloneta", colors: ["#75aadb", "#ffffff", "#f6b40e", "#000000"], special: "Textura de bandera y brillo de copa" },
    { name: "Vaporwave Sunset", colors: ["#ff0055", "#ff5500", "#ffaa00", "#ffdd00", "#ff00aa"], special: "Degradado cálido de los 80s" },
    { name: "Cyberpunk 2077", colors: ["#ff00ff", "#00ffff", "#ffff00", "#ff0099", "#00ff99"], special: "Neón amarillo y cian eléctrico" },
    { name: "Matrix Code", colors: ["#00ff00", "#00cc00", "#009900", "#00ff41", "#39ff14"], special: "Lluvia de caracteres verdes" },
    { name: "Dorado Metálico", class: "palette-gold", colors: null, special: "Brillo metálico reflectante" },
    { name: "Plata Brillante", class: "palette-silver", colors: null, special: "Acero pulido futurista" },
    { name: "Arcoíris Fluido", class: "palette-rainbow", colors: null, special: "Espectro de luz en movimiento" },

    // --- 🐺 EXTRAS FURRY & TEMÁTICOS (41-45) ---
    { name: "Zephyr V2", colors: ["#f0f8ff", "#00bfff", "#ffd700", "#ffffff"], special: "Plumaje blanco y detalles celestes" },
    { name: "Splendid", colors: ["#0000ff", "#ff0000", "#ffff00", "#ffffff"], special: "Capa azul y pecho con estrella" },
    { name: "Protogen", colors: ["#000000", "#00ff00", "#00ffff", "#ffffff"], special: "Visor LED brillante y pelaje sintético" },
    { name: "Dragón Furry", colors: ["#800080", "#00ff00", "#ffd700", "#ff0000"], special: "Escamas iridiscentes y alas" },
    { name: "Lobo Furry", colors: ["#808080", "#c0c0c0", "#ffffff", "#ffff00"], special: "Pelaje gris plateado y ojos amarillos" }
];
let currentPaletteIndex = 0;

// Nuevo: Colores para cambio individual de cada letra
const individualColors = [
    "#ffffff", "#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", 
    "#4b0082", "#9400d3", "#ffd700", "#ff1493", "#00ffff", "#39ff14", "#ff00ff"
];

function build3DTitle() {
    const container = document.getElementById('title-container');
    container.innerHTML = '';
    const line1Div = document.createElement('div');
    line1Div.className = 'title-line';
    const line2Div = document.createElement('div');
    line2Div.className = 'title-line';
    appendLetters(titleLine1, line1Div);
    appendLetters(titleLine2, line2Div);
    container.appendChild(line1Div);
    container.appendChild(line2Div);
    applyCurrentPalette();
}

function appendLetters(text, parentElement) {
    for (let char of text) {
        const span = document.createElement('span');
        span.className = 'char-3d';
        span.innerText = char === ' ' ? '\u00A0' : char;
        
        // Inicializa contador de color para cada letra
        span.dataset.colorIndex = 0;

        // Click individual en cada letra
        span.addEventListener('click', (e) => {
            e.stopPropagation(); // ⚠️ Evita que el click cambie toda la paleta
            
            let currentIndex = parseInt(span.dataset.colorIndex);
            let nextIndex = (currentIndex + 1) % individualColors.length;
            let newColor = individualColors[nextIndex];

            // Aplica color y sombra a esta letra específica
            span.style.color = newColor;
            span.style.textShadow = `0 1px 0 #111, 0 2px 0 #000, 0 0 12px ${newColor}`;
            span.dataset.colorIndex = nextIndex;

            // Sonido opcional
            if (typeof sfx !== 'undefined') {
                sfx.playTone(600 + (nextIndex * 40), 'sine', 0.05);
            }
        });

        parentElement.appendChild(span);
    }
}

function applyCurrentPalette() {
    const container = document.getElementById('title-container');
    const pal = palettes[currentPaletteIndex];
    
    // Muestra el nombre Y la descripción especial
    const specialText = pal.special ? ` ✦ [${pal.special}]` : '';
    document.getElementById('palette-name').innerText = `PALETA: ${pal.name}${specialText}`;
    document.getElementById('hud-scheme').innerText = pal.name.split(' ')[0].toUpperCase();
    
    container.className = 'title-3d';
    container.classList.remove('palette-gold', 'palette-silver', 'palette-rainbow');
    
    const allChars = container.querySelectorAll('.char-3d');
    
    if (pal.class) {
        container.classList.add(pal.class);
        allChars.forEach(c => { 
            c.style.color = ''; 
            c.style.textShadow = ''; 
            c.dataset.colorIndex = 0;
        });
    } else if (pal.colors) {
        allChars.forEach((c, index) => {
            const color = pal.colors[index % pal.colors.length];
            c.style.color = color;
            c.style.textShadow = `0 1px 0 #111, 0 2px 0 #000, 0 0 12px ${color}`;
            
            const foundIndex = individualColors.indexOf(color);
            c.dataset.colorIndex = foundIndex !== -1 ? foundIndex : 0;
        });
    }
}

const titleWrapper = document.getElementById('title-3d-btn');
titleWrapper.addEventListener('mousemove', (e) => {
    const rect = titleWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - (rect.width / 2);
    const y = e.clientY - rect.top - (rect.height / 2);
    titleWrapper.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg)`;
});
titleWrapper.addEventListener('mouseleave', () => {
    titleWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
titleWrapper.addEventListener('click', () => {
    currentPaletteIndex = (currentPaletteIndex + 1) % palettes.length;
    applyCurrentPalette();
    checkAchievement('diversity_explorer');
    if (currentPaletteIndex === 3) checkAchievement('lgbt_pride');
});

/* ================================================================
   MÓDULO 2: SISTEMA DE LOGROS
   ================================================================ */
const achievements = [
    { id: 'welcome', title: 'Bienvenido a la Cueva', desc: 'Ingresaste a la Cueva de Placer.', icon: '🕯️', unlocked: false },
    { id: 'diversity_explorer', title: 'Orgullo & Diversidad', desc: 'Cambiaste las banderas tipográficas.', icon: '🌈', unlocked: false },
    { id: 'lgbt_pride', title: 'Arcoíris Real', desc: 'Activaste la bandera LGBT+.', icon: '👑', unlocked: false },
    { id: 'nsfw_master', title: 'Modo Fuego', desc: 'Activaste el fondo NSFW 🔥.', icon: '🔥', unlocked: false },
    { id: 'yeyo_easter', title: 'El Hermano Yeyo', desc: 'Ingresaste el código secreto de la hermandad.', icon: '⚡', unlocked: false },
    { id: 'time_5min', title: 'Residente Fiel', desc: 'Permaneciste 5 minutos en la cueva.', icon: '⏳', unlocked: false },
    { id: 'clock_master', title: 'Señor del Tiempo', desc: 'Cambiaste el formato del reloj retro.', icon: '⏰', unlocked: false },
    { id: 'collector', title: 'Coleccionista Total', desc: 'Desbloqueaste todos los logros.', icon: '💎', unlocked: false }
];

function checkAchievement(id) {
    const ach = achievements.find(a => a.id === id);
    if (ach && !ach.unlocked) {
        ach.unlocked = true;
        showAchievementToast(ach);
        updateAchievementsUI();
    }
}

function showAchievementToast(ach) {
    document.getElementById('toast-icon').innerText = ach.icon;
    document.getElementById('toast-title').innerText = `¡LOGRO: ${ach.title.toUpperCase()}!`;
    document.getElementById('toast-desc').innerText = ach.desc;
    const toast = document.getElementById('achievement-toast');
    toast.classList.add('show');
    if (typeof sfx !== 'undefined') sfx.playAchievement();
    setTimeout(() => toast.classList.remove('show'), 4000);
}

function updateAchievementsUI() {
    const count = achievements.filter(a => a.unlocked).length;
    document.getElementById('achievements-count').innerText = `${count}/${achievements.length}`;
    document.getElementById('badge-ach-num').innerText = count;
    const container = document.getElementById('achievements-list-container');
    container.innerHTML = '';
    achievements.forEach(a => {
        const item = document.createElement('div');
        item.className = `achieve-item ${a.unlocked ? 'unlocked' : ''}`;
        item.innerHTML = `
            <div style="font-size:1.5rem">${a.icon}</div>
            <div>
                <div style="font-weight:bold; color:${a.unlocked ? 'var(--neon-green)' : '#aaa'}">${a.title}</div>
                <div style="font-size:0.7rem">${a.desc}</div>
            </div>`;
        container.appendChild(item);
    });
    if (count === achievements.length - 1) checkAchievement('collector');
}

/* ================================================================
   MÓDULO 3: TOGGLE SFW / NSFW
   ================================================================ */
const nsfwBtn = document.getElementById('nsfw-toggle-btn');
nsfwBtn.addEventListener('click', () => {
    if (document.body.classList.contains('sfw-mode')) {
        document.body.classList.remove('sfw-mode');
        document.body.classList.add('nsfw-mode');
        nsfwBtn.innerText = "🔥 NSFW: ON";
        document.getElementById('hud-bg-mode').innerText = "NSFW FIRE";
        document.getElementById('mode-text-display').innerText = "NSFW (ACTIVO)";
        checkAchievement('nsfw_master');
    } else {
        document.body.classList.remove('nsfw-mode');
        document.body.classList.add('sfw-mode');
        nsfwBtn.innerText = "🔥 NSFW: OFF";
        document.getElementById('hud-bg-mode').innerText = "SFW SAFE";
        document.getElementById('mode-text-display').innerText = "SFW (SEGURO)";
    }
});

/* ================================================================
   MÓDULO 4: MODAL LOGROS
   ================================================================ */
document.getElementById('open-achievements-btn').addEventListener('click', () => {
    document.getElementById('modal-achievements').classList.add('active');
});
document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('modal-achievements').classList.remove('active');
});

/* ================================================================
   MÓDULO 5: AUDIO SINTETIZADOR (Web Audio API)
   ================================================================ */
class SoundFX {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    playTone(freq, type = 'sine', duration = 0.1) {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }
    playClick() { this.playTone(800, 'square', 0.05); }
    playAchievement() {
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
            setTimeout(() => this.playTone(freq, 'triangle', 0.15), idx * 80);
        });
    }
}
const sfx = new SoundFX();

document.querySelectorAll('.char-3d, .custom-btn, .badge').forEach(elem => {
    elem.addEventListener('mouseenter', () => sfx.playClick());
});

/* ================================================================
   MÓDULO 6: MOTOR DE PARTÍCULAS
   ================================================================ */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y) {
        this.x = x; this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.life = 100;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 2;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

window.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.6) particles.push(new Particle(e.clientX, e.clientY));
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) { particles.splice(i, 1); i--; }
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ================================================================
   MÓDULO 7: SHELL HACKER (F2 o ~)
   ================================================================ */
const shell = document.getElementById('cave-shell');
const shellInput = document.getElementById('shell-input');
const shellOutput = document.getElementById('shell-output');

window.addEventListener('keydown', (e) => {
    if (e.key === 'F2' || e.key === '~') {
        e.preventDefault();
        shell.style.display = shell.style.display === 'none' ? 'block' : 'none';
        if (shell.style.display === 'block') shellInput.focus();
    }
});

shellInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = shellInput.value.trim().toLowerCase();
        shellInput.value = '';
        const line = document.createElement('div');
        line.innerText = `> ${cmd}`;
        shellOutput.appendChild(line);
        let res = document.createElement('div');
        res.style.color = '#39ff14';
        switch(cmd) {
            case 'help': res.innerText = 'Comandos: help, unlock, rainbow, clear, matrix'; break;
            case 'unlock':
                res.innerText = '¡Modo Dios activado!';
                achievements.forEach(a => a.unlocked = true);
                updateAchievementsUI();
                sfx.playAchievement();
                break;
            case 'clear': shellOutput.innerHTML = ''; return;
            case 'rainbow':
                res.innerText = 'Acelerando motor gráfico...';
                document.getElementById('title-container').style.animationDuration = '0.5s';
                break;
            default:
                res.style.color = '#ff3366';
                res.innerText = `Error: comando '${cmd}' no reconocido.`;
        }
        shellOutput.appendChild(res);
        shellOutput.scrollTop = shellOutput.scrollHeight;
    }
});

/* ================================================================
   MÓDULO 8: TILT HOLOGRÁFICO + VHS GLITCH
   ================================================================ */
document.querySelectorAll('.yeyo-holo-card').forEach(card => {
    const inner = card.querySelector('.holo-inner');
    const shine = card.querySelector('.holo-shine');
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 80%)`;
    });
    card.addEventListener('mouseleave', () => {
        inner.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        shine.style.background = '';
    });
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        showAchievementToast({ icon: '🎬', title: 'FANÁTICO DE YEYO', desc: `Inspeccionaste: ${title}` });
        sfx.playAchievement();
    });
});

const vhsBtn = document.getElementById('btn-vhs-glitch');
if (vhsBtn) {
    vhsBtn.addEventListener('click', () => {
        document.body.classList.toggle('vhs-active');
        const isActive = document.body.classList.contains('vhs-active');
        vhsBtn.innerText = isActive ? "📼 MODO VHS: ON" : "📼 MODO VHS: OFF";
        vhsBtn.style.color = isActive ? "var(--gold)" : "var(--neon-green)";
        sfx.playClick();
    });
}

/* ================================================================
   MÓDULO 9: SECUENCIA DE ARRANQUE SUPREMA - "YEYO BIOS v9.0 ULTRA"
   ================================================================ */

// ==========================================
// 1. INYECCIÓN DE CSS ÉPICO (No toques tu CSS)
// ==========================================
const epicBootCSS = `
    @keyframes crtTurnOn {
        0% { transform: scale(1, 0.002); opacity: 0; filter: brightness(30) blur(10px); }
        30% { transform: scale(1, 0.002); opacity: 1; filter: brightness(20) blur(5px); }
        60% { transform: scale(1, 1); filter: brightness(10) blur(2px); }
        100% { transform: scale(1, 1); filter: brightness(1) blur(0px); }
    }
    @keyframes crtFlicker {
        0% { opacity: 0.97; } 5% { opacity: 0.95; } 10% { opacity: 0.98; } 
        15% { opacity: 0.94; } 50% { opacity: 0.96; } 100% { opacity: 0.97; }
    }
    @keyframes logoPulse {
        0%, 100% { filter: drop-shadow(0 0 10px #ff71ce) drop-shadow(0 0 20px #01cdfe); transform: scale(1); }
        50% { filter: drop-shadow(0 0 25px #ff71ce) drop-shadow(0 0 40px #01cdfe); transform: scale(1.02); }
    }
    @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
    }
    @keyframes hexRain {
        0% { background-position: 0% 0%; }
        100% { background-position: 0% 100%; }
    }
    .crt-overlay {
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        background-size: 100% 4px, 6px 100%;
        pointer-events: none; z-index: 99999;
        animation: crtFlicker 0.15s infinite;
    }
    .scanline-beam {
        position: fixed; top: 0; left: 0; width: 100%; height: 20px;
        background: rgba(255, 255, 255, 0.05);
        animation: scanline 6s linear infinite;
        pointer-events: none; z-index: 99998;
    }
    .boot-container-epic {
        background: #050505; color: #00ff41; font-family: 'Courier New', monospace;
        font-size: 14px; padding: 20px; height: 100vh; overflow: hidden;
        text-shadow: 0 0 5px #00ff41; position: relative;
    }
    .logo-loading-screen {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: #000; display: flex; flex-direction: column;
        align-items: center; justify-content: center; z-index: 99990;
        opacity: 0; transition: opacity 1s ease-in-out;
    }
    .logo-loading-screen.active { opacity: 1; }
    .yeyo-logo-img {
        max-width: 300px; border: 2px solid #ff71ce; border-radius: 10px;
        animation: logoPulse 3s infinite ease-in-out; margin-bottom: 30px;
        background: #111; /* Fondo por si la imagen es transparente */
    }
    .epic-progress-bar {
        width: 400px; height: 20px; border: 2px solid #01cdfe;
        background: #001100; position: relative; overflow: hidden;
    }
    .epic-progress-fill {
        height: 100%; background: linear-gradient(90deg, #ff71ce, #01cdfe, #05ffa1);
        width: 0%; transition: width 0.2s ease-out;
        box-shadow: 0 0 15px #01cdfe;
    }
    .loading-lore {
        color: #888; font-size: 12px; margin-top: 15px; font-style: italic;
        min-height: 20px; text-align: center;
    }
    .hex-bg {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        opacity: 0.05; font-size: 10px; line-height: 10px; color: #00ff41;
        overflow: hidden; pointer-events: none; z-index: -1;
        animation: hexRain 20s linear infinite;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = epicBootCSS;
document.head.appendChild(styleSheet);

// ==========================================
// 2. CONFIGURACIÓN Y DATOS
// ==========================================
const bootContainer = document.getElementById('boot-sequence');
const interactivePrompt = document.getElementById('interactive-prompt');
const terminalInput = document.getElementById('terminal-input');
const commandHistory = document.getElementById('command-history');
const terminalOverlay = document.getElementById('kasper-terminal-overlay');

// ⚠️ ¡CAMBIA ESTA URL POR LA DE TU LOGO REAL! ⚠️
const LOGO_IMAGE_URL = "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"; // Placeholder retro, cámbialo por tu logo.png

const loadingLore = [
    "Calibrando generadores de placer...",
    "Desencriptando archivos de Leo Kasper...",
    "Cargando texturas de pelaje furry en 4K...",
    "Conectando al servidor secreto de la Scaloneta...",
    "Inyectando código YAOILOVER en el kernel...",
    "Verificando existencia del Hermano Yeyo... [CONFIRMADO]",
    "Pulverizando bugs con martillo neumático...",
    "Sincronizando ritmo cardíaco con el beat de la cueva..."
];

const bootLogs = [
    { text: "YEYO BIOS v9.01 ULTRA (C) 2007-2026 KASPER CORP.", type: "header", delay: 100 },
    { text: "CPU: PENTIUM IV YEYO EDITION 3.8GHz [OK]", type: "success", delay: 150 },
    { text: "Memory Test: ", type: "memory", delay: 800 }, // Especial
    { text: "Detecting Primary Master ... YEYO_NVME_2TB [OK]", type: "drive", delay: 200 },
    { text: "Detecting Primary Slave  ... CAVE_HDD_500GB [OK]", type: "drive", delay: 150 },
    { text: "Detecting Secondary Master ... DVD_ROM_YEYO [OK]", type: "drive", delay: 150 },
    { text: "USB Device Found: YEYO_KEYBOARD_RGB_MECHANICAL", type: "info", delay: 100 },
    { text: "USB Device Found: CAVE_MOUSE_HOVER_PRECISION", type: "info", delay: 100 },
    { text: "Video Adapter: VAPORWAVE GeForce RTX 4090 [24GB VRAM] [OK]", type: "success", delay: 200 },
    { text: "Audio: SOUND BLASTER AE-9 [DMA 1, IRQ 5, IO 220] [OK]", type: "success", delay: 150 },
    { text: "Network: REALTEK YEYO GIGABIT [MAC: 00:YE:YO:CA:VE:01] [OK]", type: "success", delay: 150 },
    { text: "DHCP ... [ACQUIRED IP: 192.168.YE.YO]", type: "info", delay: 200 },
    { text: "--------------------------------------------------", type: "blank", delay: 50 },
    { text: "Loading CAVE_CORE drivers...", type: "loading", delay: 300 },
    { text: "  [████████████████████] 100%", type: "progress", delay: 400 },
    { text: "Mounting file systems: C: [NTFS] D: [FAT32] Z: [YEYO_FS] [OK]", type: "success", delay: 200 },
    { text: "Starting DOUZOZ 7 Operating System...", type: "header", delay: 300 },
    { text: "Kernel: 7.0.1-YEYO-CAVE-EDITION [BUILD 2026.10.13]", type: "info", delay: 150 },
    { text: "Initializing Pleasure Protocol v3.0...", type: "loading", delay: 500 }
];

// ==========================================
// 3. MOTOR DE AUDIO AVANZADO
// ==========================================
const bootAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playEpicSound(type) {
    if (bootAudioCtx.state === 'suspended') bootAudioCtx.resume();
    const osc = bootAudioCtx.createOscillator();
    const gain = bootAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(bootAudioCtx.destination);
    
    const now = bootAudioCtx.currentTime;
    switch(type) {
        case 'poweron':
            osc.type = 'sine'; osc.frequency.setValueAtTime(50, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.5);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
            osc.start(now); osc.stop(now + 0.8);
            break;
        case 'beep':
            osc.type = 'square'; osc.frequency.value = 1000;
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now); osc.stop(now + 0.1);
            break;
        case 'hdd':
            osc.type = 'sawtooth'; osc.frequency.value = 120;
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.15);
            osc.start(now); osc.stop(now + 0.15);
            break;
        case 'success':
            osc.type = 'triangle'; osc.frequency.setValueAtTime(440, now);
            osc.frequency.setValueAtTime(554, now + 0.1); // C#
            osc.frequency.setValueAtTime(659, now + 0.2); // E
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
            osc.start(now); osc.stop(now + 0.6);
            break;
    }
}

// ==========================================
// 4. FUNCIONES VISUALES ÉPICAS
// ==========================================
function createCRTOverlays() {
    const overlay = document.createElement('div');
    overlay.className = 'crt-overlay';
    document.body.appendChild(overlay);
    
    const beam = document.createElement('div');
    beam.className = 'scanline-beam';
    document.body.appendChild(beam);
}

function generateHexBackground() {
    const hexDiv = document.createElement('div');
    hexDiv.className = 'hex-bg';
    let hexText = "";
    for(let i=0; i<3000; i++) {
        hexText += Math.random() > 0.5 ? "1" : "0";
        if(i % 80 === 0) hexText += "<br>";
    }
    hexDiv.innerHTML = hexText;
    return hexDiv;
}

function typeWriter(element, text, speed = 20) {
    return new Promise(resolve => {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

// ==========================================
// 5. PANTALLA DE CARGA CON LOGO (LA JOYA DE LA CORONA)
// ==========================================
async function showLogoLoadingScreen() {
    // 1. Crear la pantalla
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'logo-loading-screen';
    loadingScreen.innerHTML = `
        <img src="${LOGO_IMAGE_URL}" class="yeyo-logo-img" alt="YEYO LOGO">
        <div style="color: #01cdfe; font-family: 'Courier New'; font-size: 18px; font-weight: bold; letter-spacing: 2px;">
            INICIANDO DOUZOZ 7...
        </div>
        <div class="epic-progress-bar">
            <div class="epic-progress-fill" id="epic-fill"></div>
        </div>
        <div class="loading-lore" id="loading-lore-text">Preparando la Cueva...</div>
    `;
    document.body.appendChild(loadingScreen);
    
    // 2. Activar con fade-in
    await new Promise(r => setTimeout(r, 500));
    loadingScreen.classList.add('active');
    playEpicSound('success');
    
    // 3. Simular carga progresiva
    const fill = document.getElementById('epic-fill');
    const loreText = document.getElementById('loading-lore-text');
    let progress = 0;
    
    while (progress < 100) {
        await new Promise(r => setTimeout(r, Math.random() * 150 + 50));
        const increment = Math.random() * 5 + 1;
        progress = Math.min(progress + increment, 100);
        fill.style.width = `${progress}%`;
        
        // Cambiar texto de lore cada ~20%
        if (Math.random() > 0.85) {
            loreText.style.opacity = 0;
            await new Promise(r => setTimeout(r, 200));
            loreText.innerText = loadingLore[Math.floor(Math.random() * loadingLore.length)];
            loreText.style.opacity = 1;
        }
        
        if (progress > 30 && progress < 35) playEpicSound('hdd');
        if (progress > 70 && progress < 75) playEpicSound('hdd');
    }
    
    // 4. Finalizar carga
    loreText.innerText = "¡SISTEMA LISTO! BIENVENIDO, HERMANO.";
    loreText.style.color = "#05ffa1";
    playEpicSound('success');
    
    await new Promise(r => setTimeout(r, 1500));
    
    // 5. Desvanecer pantalla de carga y revelar terminal
    loadingScreen.style.opacity = 0;
    await new Promise(r => setTimeout(r, 1000));
    loadingScreen.remove();
    
    // Revelar terminal interactivo
    terminalOverlay.style.display = 'block';
    interactivePrompt.style.display = 'block';
    terminalInput.focus();
    
    // Mensaje final en la terminal
    const welcomeDiv = document.createElement('div');
    welcomeDiv.style.cssText = "color: #05ffa1; font-size: 16px; margin: 10px 0; border: 1px solid #05ffa1; padding: 10px;";
    welcomeDiv.innerHTML = `
        ╔═══════════════════════════════════════════════╗<br>
        ║   🌟 BIENVENIDO A LA CUEVA DEL YEYO 🌟       ║<br>
        ║   Escribe 'help' para ver los comandos.      ║<br>
        ╚═══════════════════════════════════════════════╝
    `;
    commandHistory.appendChild(welcomeDiv);
    terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
}

// ==========================================
// 6. SECUENCIA DE ARRANQUE PRINCIPAL
// ==========================================
async function runEpicBoot() {
    createCRTOverlays();
    bootContainer.className = 'boot-container-epic';
    bootContainer.appendChild(generateHexBackground());
    
    // Efecto de encendido
    playEpicSound('poweron');
    bootContainer.style.animation = 'crtTurnOn 1.5s ease-out forwards';
    
    await new Promise(r => setTimeout(r, 1500));
    
    // Procesar logs
    for (let i = 0; i < bootLogs.length; i++) {
        const log = bootLogs[i];
        const div = document.createElement('div');
        div.style.marginBottom = "4px";
        
        if (log.type === 'header') {
            div.style.color = "#ff71ce";
            div.style.fontWeight = "bold";
            div.style.fontSize = "16px";
        } else if (log.type === 'success') {
            div.style.color = "#05ffa1";
        } else if (log.type === 'drive' || log.type === 'info') {
            div.style.color = "#01cdfe";
            div.style.paddingLeft = "15px";
        } else if (log.type === 'progress') {
            div.style.color = "#ffd700";
        }
        
        bootContainer.appendChild(div);
        
        if (log.type === 'memory') {
            // Animación especial de conteo de RAM
            let ram = 0;
            const target = 65536;
            const ramInterval = setInterval(() => {
                ram += 1024;
                div.innerText = `Memory Test: ${ram}K OK`;
                if (ram >= target) {
                    clearInterval(ramInterval);
                    div.innerText = `Memory Test: ${target}K RAM System OK`;
                    playEpicSound('success');
                }
            }, 20);
            await new Promise(r => setTimeout(r, log.delay));
        } else {
            await typeWriter(div, log.text, 10);
            if (log.type === 'drive' || log.type === 'success') playEpicSound('hdd');
            await new Promise(r => setTimeout(r, log.delay));
        }
        
        bootContainer.scrollTop = bootContainer.scrollHeight;
    }
    
    // Transición a la pantalla de logo
    await new Promise(r => setTimeout(r, 500));
    bootContainer.style.display = 'none'; // Ocultar texto de boot
    showLogoLoadingScreen();
}

// ==========================================
// 7. EASTER EGGS Y CONTROLES
// ==========================================
window.addEventListener('load', runEpicBoot);

// Espacio para saltar la animación (por si el usuario tiene prisa)
let skipBoot = false;
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !skipBoot) {
        skipBoot = true;
        // Forzar fin del boot y mostrar logo directamente
        document.querySelectorAll('.boot-container-epic *').forEach(el => el.remove());
        showLogoLoadingScreen();
    }
});

// Código Konami para modo arcoíris extremo
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
window.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.filter = "hue-rotate(0deg)";
            document.body.style.animation = "hueRotate 5s linear infinite";
            const style = document.createElement('style');
            style.innerText = "@keyframes hueRotate { 100% { filter: hue-rotate(360deg); } }";
            document.head.appendChild(style);
            alert("🌈 ¡MODO ARCOÍRIS YEYO ACTIVADO! 🌈");
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

/* ================================================================
   MÓDULO 10: MOTOR ZORK
   ================================================================ */
const ZorkGame = {
    active: false,
    currentRoom: 'inicio',
    inventory: [],
    rooms: {
        inicio: {
            desc: `Te encontrás en una habitación oscura con paredes de concreto crudo. Un monitor CRT parpadea en la esquina.<br>Hay una <span style="color:#05ffa1">puerta_de_hierro</span> al norte y una <span style="color:#05ffa1">mesa</span> de madera podrida.`,
            exits: { norte: 'pasillo' },
            items: ['disquete']
        },
        pasillo: {
            desc: `Un pasillo largo e iluminado por tubos fluorescentes intermitentes.<br>Al sur volvés a la habitación. Al este hay una puerta blindada <span style="color:#05ffa1">SERVIDOR_CENTRAL</span>.`,
            exits: { sur: 'inicio', este: 'servidor' },
            items: []
        },
        servidor: {
            desc: `Una sala fría llena de racks de servidores de finales de los 90.`,
            exits: { oeste: 'pasillo' },
            items: ['llave_master']
        }
    },
    start() {
        this.active = true;
        this.currentRoom = 'inicio';
        return `<span style="color:#ff71ce; font-weight:bold;">=== ZORK I: THE DOUZOZ UNDERGROUND ===</span><br>Comandos: <b>mirar</b>, <b>ir [dir]</b>, <b>tomar [item]</b>, <b>inventario</b>, <b>exit</b><br><br>` + this.getRoomDescription();
    },
    getRoomDescription() {
        const room = this.rooms[this.currentRoom];
        let itemText = room.items.length > 0 ? `<br><span style="color:#fff1be;">Items:</span> ${room.items.join(', ')}` : '';
        return room.desc + itemText;
    },
    parseCommand(input) {
        const args = input.toLowerCase().trim().split(' ');
        const verb = args[0];
        const noun = args[1];
        if (verb === 'exit' || verb === 'quit') { this.active = false; return `<span style="color:#ff355e;">Has salido del Zork.</span>`; }
        if (verb === 'mirar' || verb === 'l') return this.getRoomDescription();
        if (verb === 'inventario' || verb === 'inv') return this.inventory.length > 0 ? `Llevás: ${this.inventory.join(', ')}` : `Tus bolsillos están vacíos.`;
        if (verb === 'ir') {
            const room = this.rooms[this.currentRoom];
            if (room.exits[noun]) { this.currentRoom = room.exits[noun]; return this.getRoomDescription(); }
            return `<span style="color:#ff355e;">No podés ir hacia '${noun}'. Salidas: ${Object.keys(room.exits).join(', ')}</span>`;
        }
        if (verb === 'tomar' || verb === 'agarra') {
            const room = this.rooms[this.currentRoom];
            const idx = room.items.indexOf(noun);
            if (idx !== -1) { room.items.splice(idx, 1); this.inventory.push(noun); return `Agarraste: <span style="color:#05ffa1;">${noun}</span>`; }
            return `<span style="color:#ff355e;">No ves '${noun}' acá.</span>`;
        }
        return `<span style="color:#ff355e;">Comando no reconocido.</span>`;
    }
};

/* ================================================================
   MÓDULO 11: PROCESADOR CENTRAL DE COMANDOS - "YEYO AI CORE v9.0"
   ================================================================ */

// ==========================================
// 1. CONFIGURACIÓN Y ESTADO GLOBAL
// ==========================================
let commandHistoryStack = []; // Para las flechas arriba/abajo
let historyIndex = -1;
let isTypingEffectActive = false;

// Lista de comandos para autocompletar
const availableCommands = [
    'help', 'start', 'enter', 'status', 'cls', 'clear', 'ver', 'sysinfo', 
    'logo', 'time', 'yeyo', 'yaoilover', 'whois_leo', 'note_final', 
    'zork', 'matrix', 'bsod', 'shutdown', 'sudo', 'hack', 'music', 
    'avatar', 'lore', 'credits', 'reboot'
];

// Frases aleatorias del sistema para dar vida
const systemResponses = {
    error: ["Error crítico: Comando inválido.", "¿Qué intentás hacer, pibe?", "El Yeyo no aprueba eso.", "Syntax Error: Revisa tus cables."],
    success: ["Acceso concedido.", "Procesando solicitud...", "Orden ejecutada con éxito.", "La Cueva obedece."],
    idle: ["Esperando input...", "Sistema estable.", "Modo reposo activado."]
};

function getRandomResponse(type) {
    const arr = systemResponses[type] || systemResponses.idle;
    return arr[Math.floor(Math.random() * arr.length)];
}

// ==========================================
// 2. MOTOR DE ESCRITURA Y GLITCHES
// ==========================================
function typeWriterEffect(element, text, speed = 10, callback) {
    isTypingEffectActive = true;
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            // Efecto glitch aleatorio mientras escribe
            if (Math.random() > 0.9 && text[i] !== '<') {
                element.innerHTML += `<span style="color:#ff355e">${text[i]}</span>`;
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(type, speed);
        } else {
            isTypingEffectActive = false;
            if (callback) callback();
        }
    }
    type();
}

function triggerTerminalGlitch() {
    const overlay = document.getElementById('kasper-terminal-overlay');
    if (!overlay) return;
    
    overlay.style.filter = "hue-rotate(90deg) invert(1)";
    overlay.style.transform = "translate(5px, -5px) skewX(5deg)";
    
    setTimeout(() => {
        overlay.style.filter = "none";
        overlay.style.transform = "none";
    }, 150);
}

// ==========================================
// 3. PROCESADOR PRINCIPAL MEJORADO
// ==========================================
function processCommand(cmd) {
    const responseDiv = document.createElement('div');
    responseDiv.style.marginBottom = "15px";
    responseDiv.className = 'command-response';
    
    // Guardar en historial
    if (cmd.trim() !== '') {
        commandHistoryStack.push(cmd);
        historyIndex = commandHistoryStack.length;
    }

    // Si estamos jugando ZORK, delegar al motor Zork
    if (ZorkGame.active) {
        responseDiv.innerHTML = ZorkGame.parseCommand(cmd);
        commandHistory.appendChild(responseDiv);
        terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
        return;
    }

    const cleanCmd = cmd.toLowerCase().trim();

    // ==========================================
    // SWITCH DE COMANDOS ÉPICOS
    // ==========================================
    switch (cleanCmd) {
        
        case 'help':
            responseDiv.innerHTML = `
                <pre style="color: #01cdfe; font-family: monospace;">
╔══════════════════════════════════════════════════╗
║           📟 GUÍA DE COMANDOS DOUZOZ 7          ║
╠══════════════════════════════════════════════════╣
║  <b>SYSTEM</b>                                      ║
║   • start/enter  -> Entrar a la interfaz gráfica║
║   • status       -> Estado del SO               ║
║   • sysinfo      -> Hardware detallado          ║
║   • ver          -> Versión del Kernel          ║
║   • reboot       -> Reiniciar Sistema           ║
║                                                 ║
║  <b>YEYO & LORE</b>                                 ║
║   • yeyo         -> Mensaje del hermano         ║
║   • whois_leo    -> Ficha de Leo Kasper         ║
║   • note_final   -> Carta interceptada          ║
║   • lore         -> Historia completa           ║
║   • credits      -> Equipo de desarrollo        ║
║                                                 ║
║  <b>GAMING & FUN</b>                                ║
║   • zork         -> Iniciar Aventura RPG        ║
║   • matrix       -> Lluvia de código binario    ║
║   • music        -> Reproducir track YeYo_Theme ║
║   • avatar       -> Cambiar skin de usuario     ║
║                                                 ║
║  <b>HACKER / SECRETOS</b>                           ║
║   • sudo rm -rf  -> Intentar borrar todo        ║
║   • hack         -> Simulación de intrusión     ║
║   • bsod         -> Pantalla Azul (Cuidado!)    ║
║   • shutdown     -> Apagar PC                   ║
║                                                 ║
║  <b>UTILIDADES</b>                                  ║
║   • cls/clear    -> Limpiar pantalla            ║
║   • time         -> Hora BIOS actual            ║
║   • logo         -> Logo ASCII gigante          ║
╚══════════════════════════════════════════════════╝
<span style="color:#888">Tip: Usa TAB para autocompletar y ↑↓ para historial.</span></pre>`;
            break;

        case 'start': 
        case 'enter':
            responseDiv.style.color = "#05ffa1";
            responseDiv.innerText = "Iniciando Interfaz Gráfica...";
            playSound('success');
            setTimeout(() => {
                terminalOverlay.style.display = 'none';
                // Aquí podrías mostrar el resto de la página si estaba oculta
                document.body.classList.add('ui-active');
            }, 800);
            break;

        case 'status':
            const uptime = Math.floor(performance.now() / 1000);
            responseDiv.innerHTML = `
                <span style="color:#05ffa1;">🖥️ SISTEMA:</span> DOUZOZ 7 [Stable]<br>
                <span style="color:#05ffa1;">🧠 MEMORIA:</span> ${(Math.random() * 10 + 80).toFixed(1)}% Usada<br>
                <span style="color:#05ffa1;">⏳ UPTIME:</span> ${uptime} segundos<br>
                <span style="color:#ff71ce;">❤️ AMOR:</span> Infinito<br>
                <span style="color:#ffd700;">✨ BRILLO:</span> Máximo`;
            break;

        case 'cls': 
        case 'clear':
            commandHistory.innerHTML = '';
            return; // No se añade nada más

        case 'ver':
            responseDiv.innerText = "DOUZOZ 7 OS [v3.01.7601 - SP2 Vaporwave Edition]";
            break;

        case 'sysinfo':
            responseDiv.innerHTML = `
                <div style="border-left: 3px solid #01cdfe; padding-left: 10px;">
                    <span style="color:#05ffa1;">CPU:</span> PENTIUM IV YEYO EDITION 3.8GHz<br>
                    <span style="color:#05ffa1;">RAM:</span> 512MB DDR2 (Overclocked)<br>
                    <span style="color:#05ffa1;">GPU:</span> GeForce FX 5200 [Vaporwave Mode]<br>
                    <span style="color:#05ffa1;">AUDIO:</span> Sound Blaster AE-9<br>
                    <span style="color:#ff355e;">ESTADO:</span> COPIA PIRATA NO ACTIVADA (Pero funciona mejor así)<br>
                    <span style="color:#ffd700;">MOD:</span> CAVE_CORE_LOADED
                </div>`;
            break;

        case 'logo':
            responseDiv.innerHTML = `<pre style="color: #ff71ce; font-weight: bold; text-shadow: 0 0 10px #ff71ce;">
██████╗  ██████╗ ██╗   ██╗███████╗
██╔══██╗██╔═══██╗██║   ██║╚══███╔╝
██║  ██║██║   ██║██║   ██║  ███╔╝
██║  ██║██║   ██║██║   ██║ ███╔╝
██████╔╝╚██████╔╝╚██████╔╝███████╗
╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝</pre>`;
            playSound('beep');
            break;

        case 'time':
            responseDiv.innerText = `Fecha BIOS: ${new Date().toLocaleString('es-AR')} (Hora de la Cueva)`;
            break;

        case 'yeyo':
            responseDiv.style.color = "#fff1be";
            responseDiv.innerHTML = `
                <span style="font-size: 20px;">⚡ YEYO CODE DETECTED ⚡</span><br>
                ¡Eso es rock, pibe!<br>
                <span style="color:#888; font-size: 12px;">[Sonido de guitarra eléctrica simulado]</span>`;
            playSound('guitar');
            break;

        case 'yaoilover':
            executeYaoiloverProtocol();
            return; // Sale sin añadir div normal

        case 'whois_leo':
            responseDiv.innerHTML = `
                <div style="background: rgba(0,0,0,0.5); border: 1px dashed #01cdfe; padding: 10px;">
                    <span style="color:#05ffa1; font-weight:bold;">FICHA CLASIFICADA: LEO KASPER</span><br>
                    ID: LK-2007-X<br>
                    Rol: Arquitecto Principal / Dios del Código<br>
                    Última Conexión: Hace 19 años<br>
                    Estado: <span style="color:#ff355e;">DESCONECTADO (Pero siempre observando)</span><br>
                    Nota: "Si lo encontrás, decile que le debo una cerveza."
                </div>`;
            break;

        case 'note_final':
            responseDiv.innerHTML = `
                <div style="border: 1px solid #ff71ce; padding: 15px; background: rgba(255, 113, 206, 0.05); font-style: italic; color: #ddd;">
                    <span style="color: #ff71ce; font-weight: bold; font-style: normal;">[MEMORIA 0x08 - INTERCEPTADA]</span><br><br>
                    De: Leo Kasper<br>
                    Para: YaoiPornLover<br>
                    Fecha: 14 Nov 2007<br><br>
                    Si estás leyendo esto, el script de apagado ya arrancó...<br>
                    Gracias por haberte quedado del otro lado de la pantalla.<br>
                    La cueva es tuya ahora.<br><br>
                    <span style="color: #ff71ce; font-weight: bold; font-style: normal;">- Leo Kasper.</span>
                </div>`;
            playSound('sad_beep');
            break;

        case 'zork':
            responseDiv.innerHTML = ZorkGame.start();
            break;

        case 'matrix':
            responseDiv.innerHTML = `<div id="matrix-rain-container" style="height: 200px; overflow: hidden; position: relative; background: black; border: 1px solid #05ffa1;"></div>`;
            commandHistory.appendChild(responseDiv);
            startMatrixRain(document.getElementById('matrix-rain-container'));
            return;

        case 'bsod':
            document.body.innerHTML = `
                <div style="background:#0000aa; color:#fff; font-family:'Lucida Console', Monaco, monospace; padding:30px; height:100vh; display:flex; flex-direction:column; justify-content:center;">
                    <h1>A problem has been detected and Windows has been shut down to prevent damage to your computer.</h1>
                    <p>DRIVER_IRQL_NOT_LESS_OR_EQUAL</p>
                    <p>If this is the first time you've seen this stop error screen,<br>restart your computer. If this screen appears again, follow these steps:</p>
                    <p>Check to make sure any new hardware or software is properly installed.<br>If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.</p>
                    <p>*** STOP: 0x0000000A (0x00000000, 0x00000002, 0x00000000, 0x804E4165)</p>
                    <p>*** KASPER_SYS.SYS - Address 804E4165 base at 804D0000, DateStamp 46c8a4d5</p>
                    <button onclick="location.reload()" style="margin-top:20px; padding:10px; cursor:pointer;">REINICIAR (Presiona F5)</button>
                </div>`;
            return;

        case 'shutdown':
            if (shutdownScreen) shutdownScreen.style.display = 'flex';
            responseDiv.style.color = "#ff71ce";
            responseDiv.innerText = "Apagando DOUZOZ 7... Adiós, hermano.";
            playSound('power_off');
            break;

        // --- NUEVOS COMANDOS ÉPICOS ---

        case 'sudo':
            if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
                responseDiv.style.color = "#ff355e";
                responseDiv.innerText = "⛔ ACCESO DENEGADO. El Yeyo protege sus archivos.";
                triggerTerminalGlitch();
            } else {
                responseDiv.innerText = "Usuario root requerido. Prueba con 'hack'.";
            }
            break;

        case 'hack':
            responseDiv.innerHTML = `<span style="color:#05ffa1;">Iniciando secuencia de intrusión...</span><br>`;
            commandHistory.appendChild(responseDiv);
            simulateHackSequence();
            return;

        case 'music':
            responseDiv.style.color = "#ffd700";
            responseDiv.innerText = "🎵 Reproduciendo: YeYo_Theme.mp3 [Volume: 11/10]";
            // Aquí llamarías a tu reproductor de audio existente
            if(typeof sfx !== 'undefined') sfx.playAchievement(); 
            break;

        case 'avatar':
            const avatars = ['️ Hacker', ' Furry', ' Rey Yeyo', '☁️ Cloud Strife'];
            const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
            responseDiv.innerHTML = `Cambias tu avatar a: <span style="font-size:24px;">${randomAvatar}</span>`;
            break;

        case 'lore':
            responseDiv.innerHTML = `
                <div style="max-width: 500px; line-height: 1.4;">
                    <span style="color:#ff71ce; font-weight:bold;">LA HISTORIA DE LA CUEVA:</span><br>
                    Todo comenzó en 2007, cuando Leo Kasper creó el primer servidor. 
                    Luego llegó el Yeyo, quien transformó el código en arte. 
                    Esta no es solo una web, es un santuario digital para los amantes del placer estético.
                    Cada línea de código contiene un recuerdo.
                </div>`;
            break;

        case 'credits':
            responseDiv.innerHTML = `
                <div style="text-align:center; color:#888;">
                    <span style="color:#fff; font-weight:bold;">HECHO CON ❤️ Y ☕ POR:</span><br>
                    👑 <span style="color:#ffd700;">YaoiPornLover</span> (Visión)<br>
                    💻 <span style="color:#01cdfe;">Leo Kasper</span> (Arquitectura)<br>
                    🎨 <span style="color:#ff71ce;">La Comunidad</span> (Inspiration)<br>
                    <br><small>v9.0 Ultra Edition</small>
                </div>`;
            break;

        case 'reboot':
            responseDiv.innerText = "Reiniciando núcleo... Espere.";
            setTimeout(() => location.reload(), 1000);
            break;

        default:
            responseDiv.style.color = "#ff355e";
            responseDiv.innerHTML = `'${cmd}' no reconocido.<br><span style="color:#888; font-size:12px;">${getRandomResponse('error')}</span>`;
            triggerTerminalGlitch();
            playSound('error');
    }
    
    commandHistory.appendChild(responseDiv);
    terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
}

// ==========================================
// 4. FUNCIONES AUXILIARES (MATRIZ, HACK, SONIDOS)
// ==========================================

function startMatrixRain(container) {
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = 200;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array.from({length: columns}).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const interval = setInterval(draw, 33);
    // Detener después de 5 segundos
    setTimeout(() => clearInterval(interval), 5000);
}

function simulateHackSequence() {
    const msgs = [
        "Escaneando puertos...",
        "Encontrando vulnerabilidad: CVE-2007-YEYO",
        "Inyectando payload...",
        "Bypassing Firewall...",
        "ACCESO OBTENIDO 🔓"
    ];
    
    let idx = 0;
    const interval = setInterval(() => {
        if (idx < msgs.length) {
            const div = document.createElement('div');
            div.style.color = "#05ffa1";
            div.innerText = `[+] ${msgs[idx]}`;
            commandHistory.appendChild(div);
            terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
            idx++;
        } else {
            clearInterval(interval);
            const finalDiv = document.createElement('div');
            finalDiv.style.color = "#ffd700";
            finalDiv.innerHTML = "<b>¡BIENVENIDO AL SISTEMA ROOT!</b>";
            commandHistory.appendChild(finalDiv);
        }
    }, 400);
}

function playSound(type) {
    // Usamos tu clase SFX existente o creamos un fallback simple
    if (typeof sfx !== 'undefined') {
        if (type === 'success') sfx.playTone(800, 'sine', 0.1);
        if (type === 'error') sfx.playTone(150, 'sawtooth', 0.2);
        if (type === 'beep') sfx.playTone(1000, 'square', 0.05);
        if (type === 'guitar') { /* Simular acorde */ sfx.playTone(200, 'triangle', 0.5); setTimeout(()=>sfx.playTone(300, 'triangle', 0.5), 100);}
    }
}

// ==========================================
// 5. EVENT LISTENERS AVANZADOS (TECLADO)
// ==========================================

terminalInput.addEventListener('keydown', (e) => {
    // ENTER: Ejecutar comando
    if (e.key === 'Enter') {
        if (isTypingEffectActive) return; // Evitar spam durante animaciones
        
        const cmd = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';
        if (cmd === '') return;
        
        const historyLine = document.createElement('div');
        const promptSymbol = ZorkGame.active ? 'ZORK>' : 'KASPER:\\DOUZOZ7>';
        historyLine.innerHTML = `<span class="prompt-symbol" style="color:#ff71ce;">${promptSymbol}</span> <span style="color:#fff;">${cmd}</span>`;
        commandHistory.appendChild(historyLine);
        
        processCommand(cmd);
        terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
    }
    
    // TAB: Autocompletar
    if (e.key === 'Tab') {
        e.preventDefault();
        const currentVal = terminalInput.value.toLowerCase();
        const match = availableCommands.find(c => c.startsWith(currentVal));
        if (match) {
            terminalInput.value = match;
        }
    }
    
    // ARROW UP/DOWN: Historial
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistoryStack[historyIndex];
        }
    }
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistoryStack.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistoryStack[historyIndex];
        } else {
            historyIndex = commandHistoryStack.length;
            terminalInput.value = '';
        }
    }
});

// ==========================================
// 6. PROTOCOLO YAOILOVER ULTRA MEJORADO
// ==========================================
function executeYaoiloverProtocol() {
    document.body.classList.add('yaoilover-mode');
    
    // Sonido inicial dramático
    if (typeof sfx !== 'undefined') {
        sfx.playTone(100, 'sawtooth', 0.5); // Bajo grave
    }

    let count = 0;
    const totalSpam = 40;
    const interval = setInterval(() => {
        if (count < totalSpam) {
            const spamLine = document.createElement('div');
            spamLine.className = 'cloud-spam-line';
            
            // Colores alternados para efecto psicodélico
            const colors = ['#ff0055', '#00ffff', '#ffff00', '#ff71ce'];
            spamLine.style.color = colors[count % colors.length];
            spamLine.style.textShadow = `0 0 5px ${colors[count % colors.length]}`;
            
            spamLine.innerText = `[${count + 1}/${totalSpam}] Cloud Strife mi viejo we 🫦`;
            commandHistory.appendChild(spamLine);
            terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
            count++;
        } else {
            clearInterval(interval);
            
            // Fase 2: Cuenta regresiva
            const countdownDiv = document.createElement('div');
            countdownDiv.style.cssText = "font-size: 24px; color: red; text-align: center; margin: 20px; font-weight: bold; animation: blink 0.5s infinite;";
            countdownDiv.innerText = "ELIMINANDO REALIDAD... 3";
            commandHistory.appendChild(countdownDiv);
            
            let seconds = 3;
            const cdInterval = setInterval(() => {
                seconds--;
                if(seconds > 0) {
                    countdownDiv.innerText = `ELIMINANDO REALIDAD... ${seconds}`;
                } else {
                    clearInterval(cdInterval);
                    countdownDiv.remove();
                    
                    // Fase 3: Apagado
                    terminalOverlay.style.display = 'none';
                    if(shutdownScreen) shutdownScreen.style.display = 'flex';
                    
                    setTimeout(() => {
                        document.body.innerHTML = '';
                        document.body.style.backgroundColor = '#000000';
                        document.body.style.transition = 'background-color 2s ease';
                    }, 3500);
                }
            }, 1000);
        }
    }, 40);
}
/* ================================================================
   MÓDULO 12: FEEDBACK BOTONES BLOQUEADOS
   ================================================================ */
function triggerLockedSound(featureName) {
    sfx.playTone(150, 'sawtooth', 0.25);
    showAchievementToast({ icon: '🚧', title: 'ACCESO RESTRINGIDO', desc: `${featureName} está en construcción.` });
}

/* ================================================================
   MÓDULO 13: PAGER MULTI-SKIN "ULTRA ENCRYPTED"
   ================================================================ */

// Inyección de CSS para efectos de pantalla LCD realista
const pagerCSS = `
    .pager-lcd-encrypt { font-family: 'Courier New', monospace; letter-spacing: 1px; }
    .pager-low-battery { animation: blinkRed 1s infinite; color: #ff0000 !important; }
    @keyframes blinkRed { 50% { opacity: 0.3; } }
    .pager-chassis { transition: all 0.3s ease; }
`;
const pagerStyle = document.createElement("style");
pagerStyle.innerText = pagerCSS;
document.head.appendChild(pagerStyle);

const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*¡!¿?";

const pagerSkinData = {
    gta3: {
        brand: "LIBERTY CITY WIRELESS", title: "LC-PAGER", sticker: "🚕",
        color: "#9bbc0f", bgColor: "#0f380f",
        messages: [
            "[8-BALL]: 'Tengo las bombas listas en Harwood.'",
            "[EL BURRO]: 'Tengo un trabajo de carreras. Ve al muelle.'",
            "[LCPD]: 'Unidad 12, sospechoso huyendo por Callahan.'",
            "[LUIGI]: 'Vení al Club Sex-Jadd. Hay chicas nuevas.'",
            "[PORTLAND]: 'El puente Callahan está cerrado. Nadie sale.'"
        ]
    },
    argentina: {
        brand: "LA SCALONETA 100% CRIOLLO", title: "MATE-PAGER", sticker: "🧉",
        color: "#75aadb", bgColor: "#ffffff",
        messages: [
            "🇦🇷 [Yaoilover]: 'Prendé el fuego pibe, que esto se pone bueno.'",
            "⚽ [Scaloni]: 'Muchachos, hoy se juega con el alma. Vamos carajo.'",
            "🏆 [Dibu]: 'Mirá que te como, hermano. Soy el mejor del mundo.'",
            "🎵 [Cumbia]: 'Sonando la cumbia en la villa, no hay quien nos pare.'",
            "🥩 [La Vaga]: 'Saludos desde la pileta. Asado a las 14hs.'"
        ]
    },
    matrix: {
        brand: "NEBUCHADNEZZAR COMM", title: "MATRIX-NET", sticker: "🕶️",
        color: "#00ff41", bgColor: "#000000",
        messages: [
            "[Morpheus]: 'Tomás la pastilla roja. La verdad te liberará.'",
            "[Trinity]: 'El agente Smith está rastreando tu señal. Desconectate.'",
            "[Cypher]: 'La ignorancia es una bendición. El bistec es jugoso.'",
            "[System]: 'Conexión cuántica establecida. Bienvenido al Desierto de lo Real.'"
        ]
    },
    yeyo_gold: {
        brand: "YEYO SUPREME CORP", title: "GOLD-PAGER", sticker: "👑",
        color: "#ffd700", bgColor: "#1a1a1a",
        messages: [
            "👑 [YEYO]: 'La cueva es tuya, hermano. Disfrutá el placer.'",
            "⚡ [YEYO]: 'Código secreto activado. Modo Dios: ON.'",
            "🔥 [YEYO]: 'Leo Kasper estaría orgulloso de este edit.'",
            "🌈 [YEYO]: 'Diversidad y buen gusto. Esa es la ley de la Cueva.'"
        ]
    },
    protogen: {
        brand: "CYBER CANINE SYS", title: "PROTO-VISOR", sticker: "🐺",
        color: "#00ffff", bgColor: "#000000",
        messages: [
            "[Sistema]: 'Visor LED: 100%. Pelaje sintético: Estable.'",
            "[Dueño]: 'Buen chico. Toma tu premio digital.'",
            "[Alerta]: 'Niveles de 'uwu' detectados: CRÍTICOS.'",
            "[Red]: 'Conectado a la red furry global. Ronroneo activado.'"
        ]
    }
};

let currentSkin = 'gta3';
let currentMsgIdx = 0;
let isBacklightOn = true;
let pagerBattery = 100;
let batteryDrainInterval = null;

function startBatteryDrain() {
    if (batteryDrainInterval) clearInterval(batteryDrainInterval);
    batteryDrainInterval = setInterval(() => {
        if (pagerBattery > 0) {
            pagerBattery -= 1;
            updateBatteryUI();
        } else {
            clearInterval(batteryDrainInterval);
            document.getElementById('pager-display-text').innerText = "BATERÍA AGOTADA. CARGAR.";
            playTone(200, 0.5);
        }
    }, 30000); // Baja 1% cada 30 segundos
}

function updateBatteryUI() {
    const batteryText = document.getElementById('pager-battery-text');
    batteryText.innerText = `🔋 ${pagerBattery}%`;
    if (pagerBattery <= 20) {
        batteryText.classList.add('pager-low-battery');
    } else {
        batteryText.classList.remove('pager-low-battery');
    }
}

function setPagerSkin(skinName, event) {
    if (pagerBattery <= 0) {
        alert("⚠️ ¡Batería agotada! Carga el pager primero.");
        return;
    }
    currentSkin = skinName;
    currentMsgIdx = 0;
    
    if (event && event.target) {
        document.querySelectorAll('.skin-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    
    const chassis = document.getElementById('pager-hardware');
    if (chassis) chassis.className = `pager-chassis skin-${skinName}`;
    
    const data = pagerSkinData[skinName];
    document.getElementById('pager-brand-display').innerText = data.brand;
    document.getElementById('pager-skin-title').innerText = data.title;
    document.getElementById('pager-sticker-slot').innerText = data.sticker;
    
    // Aplicar colores de LCD dinámicamente
    const lcdBox = document.getElementById('pager-lcd-box');
    if (lcdBox) {
        lcdBox.style.color = data.color;
        lcdBox.style.backgroundColor = data.bgColor;
        lcdBox.style.boxShadow = `inset 0 0 10px ${data.color}40`;
    }
    
    updatePagerLCD();
    playPagerSFXForSkin(skinName);
}

// Efecto de desencriptado de texto
function decryptText(element, finalText, duration = 800) {
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = finalText.split("").map((char, index) => {
            if (index < iterations) return finalText[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }).join("");
        
        if (iterations >= finalText.length) {
            clearInterval(interval);
            element.classList.remove('pager-lcd-encrypt');
        } else {
            element.classList.add('pager-lcd-encrypt');
        }
        iterations += 1 / 1.5; // Velocidad de desencriptado
    }, 30);
}

function updatePagerLCD() {
    if (pagerBattery <= 0) return;
    const data = pagerSkinData[currentSkin];
    const display = document.getElementById('pager-display-text');
    
    decryptText(display, data.messages[currentMsgIdx]);
    document.getElementById('pager-msg-counter').innerText = `MSG: ${currentMsgIdx + 1}/${data.messages.length}`;
}

function pagerNextMsg() {
    if (pagerBattery <= 0) return;
    const max = pagerSkinData[currentSkin].messages.length;
    currentMsgIdx = (currentMsgIdx + 1) % max;
    updatePagerLCD();
    playTone(900, 0.04);
    pagerBattery = Math.max(0, pagerBattery - 1); // Usar batería
    updateBatteryUI();
}

function pagerPrevMsg() {
    if (pagerBattery <= 0) return;
    const max = pagerSkinData[currentSkin].messages.length;
    currentMsgIdx = (currentMsgIdx - 1 + max) % max;
    updatePagerLCD();
    playTone(700, 0.04);
}

function togglePagerLight() {
    if (pagerBattery <= 0) return;
    isBacklightOn = !isBacklightOn;
    const box = document.getElementById('pager-lcd-box');
    if (isBacklightOn) { 
        box.classList.remove('backlight-off'); 
        box.classList.add('backlight-on'); 
        box.style.opacity = "1";
    } else { 
        box.classList.remove('backlight-on'); 
        box.classList.add('backlight-off'); 
        box.style.opacity = "0.3";
    }
    playTone(1200, 0.03);
}

function chargePagerBattery() {
    pagerBattery = 100;
    updateBatteryUI();
    
    // Efecto visual de carga
    const batteryText = document.getElementById('pager-battery-text');
    batteryText.innerText = "⚡ CARGANDO...";
    playTone(1500, 0.1);
    setTimeout(() => {
        batteryText.innerText = "🔋 100%";
        playTone(2000, 0.1);
    }, 1000);
}

function playPagerAlert() {
    if (pagerBattery <= 0) return;
    if (navigator.vibrate) {
        if (currentSkin === 'gta3') navigator.vibrate([100, 50, 100, 50, 300]);
        else if (currentSkin === 'argentina') navigator.vibrate([200, 100, 200]);
        else navigator.vibrate([150, 150, 150]);
    }
    
    // Sonidos polifónicos simples
    if (currentSkin === 'gta3') {
        playTone(1000, 0.1); setTimeout(() => playTone(1400, 0.1), 120); setTimeout(() => playTone(800, 0.2), 240);
    } else if (currentSkin === 'argentina') {
        playTone(523, 0.08); setTimeout(() => playTone(659, 0.08), 90); setTimeout(() => playTone(783, 0.15), 180);
    } else if (currentSkin === 'yeyo_gold') {
        playTone(880, 0.1); setTimeout(() => playTone(1100, 0.1), 100); setTimeout(() => playTone(1320, 0.2), 200);
    } else {
        playTone(1200, 0.15);
    }
}

function pressPagerKey(n) {
    if (pagerBattery <= 0) return;
    const inp = document.getElementById('pager-code-input');
    if (inp.value.length < 4) { 
        inp.value += n; 
        playTone(800 + (n * 50), 0.03); 
    }
}

function clearPagerKey() {
    if (pagerBattery <= 0) return;
    document.getElementById('pager-code-input').value = '';
    playTone(400, 0.04);
}

function sendPagerCode() {
    if (pagerBattery <= 0) {
        alert("⚠️ Sin batería. No se puede procesar.");
        return;
    }
    const code = document.getElementById('pager-code-input').value;
    
    // Easter Eggs de códigos
    if (code === '1978' || code === '1986' || code === '2022') {
        alert("🇦🇷 ¡MUCHACHOS! Modo Campeón Activado. La Scaloneta te saluda.");
        setPagerSkin('argentina');
    } else if (code === '0351') {
        alert("🚕 CÓDIGO GTA 3: 'Ah, shit, here we go again.'");
        setPagerSkin('gta3');
    } else if (code === '9999') {
        alert("👑 CÓDIGO YEYO: Acceso Supremo Concedido. Bienvenido, Arquitecto.");
        setPagerSkin('yeyo_gold');
    } else if (code === '1010') {
        alert("🐺 CÓDIGO FURRY: Modo Protogen Activado. UwU");
        setPagerSkin('protogen');
    } else if (code.length > 0) {
        alert(`📟 CÓDIGO [${code}] PROCESADO. Mensaje enviado a la red.`);
    }
    
    document.getElementById('pager-code-input').value = '';
    pagerBattery = Math.max(0, pagerBattery - 2); // Costo de enviar
    updateBatteryUI();
}

function playTone(freq, duration) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = freq;
        g.gain.setValueAtTime(0.04, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + duration);
    } catch(e) {}
}

function playPagerSFXForSkin(skin) {
    if (skin === 'gta3') playTone(1100, 0.08);
    else if (skin === 'argentina') playTone(880, 0.1);
    else if (skin === 'yeyo_gold') playTone(1320, 0.1);
    else playTone(600, 0.05);
}

// Iniciar drenaje de batería al cargar
startBatteryDrain();

/* ================================================================
   MÓDULO 14: TAPE DECK-9000 "ANALOG SOUL" (CON CARGA LOCAL)
   ================================================================ */

// 1. Inyección de CSS para animaciones de cinta realistas
const tapeCSS = `
    @keyframes spinReel { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .reel-spinning-left { animation: spinReel 2s linear infinite; }
    .reel-spinning-right { animation: spinReel 2s linear infinite reverse; }
    .tape-deck-glow { box-shadow: 0 0 20px rgba(5, 255, 161, 0.6), inset 0 0 15px rgba(5, 255, 161, 0.2); }
`;
const tapeStyle = document.createElement("style");
tapeStyle.innerText = tapeCSS;
document.head.appendChild(tapeStyle);

// 2. Playlist Predefinida (90 Tracks - ¡Edita los títulos y rutas!)
const cuevaTapePlaylist = [
    // --- BLOQUE 1-10 ---
    { id: 1, title: "01. TRACK 01", file: "music/track_01.mp3", skin: "skin-neon" },
    { id: 2, title: "02. TRACK 02", file: "music/track_02.mp3", skin: "skin-gold" },
    { id: 3, title: "03. TRACK 03", file: "music/track_03.mp3", skin: "skin-red" },
    { id: 4, title: "04. TRACK 04", file: "music/track_04.mp3", skin: "skin-purple" },
    { id: 5, title: "05. TRACK 05", file: "music/track_05.mp3", skin: "skin-blue" },
    { id: 6, title: "06. TRACK 06", file: "music/track_06.mp3", skin: "skin-green" },
    { id: 7, title: "07. TRACK 07", file: "music/track_07.mp3", skin: "skin-neon" },
    { id: 8, title: "08. TRACK 08", file: "music/track_08.mp3", skin: "skin-gold" },
    { id: 9, title: "09. TRACK 09", file: "music/track_09.mp3", skin: "skin-red" },
    { id: 10, title: "10. TRACK 10", file: "music/track_10.mp3", skin: "skin-purple" },

    // --- BLOQUE 11-20 ---
    { id: 11, title: "11. TRACK 11", file: "music/track_11.mp3", skin: "skin-blue" },
    { id: 12, title: "12. TRACK 12", file: "music/track_12.mp3", skin: "skin-green" },
    { id: 13, title: "13. TRACK 13", file: "music/track_13.mp3", skin: "skin-neon" },
    { id: 14, title: "14. TRACK 14", file: "music/track_14.mp3", skin: "skin-gold" },
    { id: 15, title: "15. TRACK 15", file: "music/track_15.mp3", skin: "skin-red" },
    { id: 16, title: "16. TRACK 16", file: "music/track_16.mp3", skin: "skin-purple" },
    { id: 17, title: "17. TRACK 17", file: "music/track_17.mp3", skin: "skin-blue" },
    { id: 18, title: "18. TRACK 18", file: "music/track_18.mp3", skin: "skin-green" },
    { id: 19, title: "19. TRACK 19", file: "music/track_19.mp3", skin: "skin-neon" },
    { id: 20, title: "20. TRACK 20", file: "music/track_20.mp3", skin: "skin-gold" },

    // --- BLOQUE 21-30 ---
    { id: 21, title: "21. TRACK 21", file: "music/track_21.mp3", skin: "skin-red" },
    { id: 22, title: "22. TRACK 22", file: "music/track_22.mp3", skin: "skin-purple" },
    { id: 23, title: "23. TRACK 23", file: "music/track_23.mp3", skin: "skin-blue" },
    { id: 24, title: "24. TRACK 24", file: "music/track_24.mp3", skin: "skin-green" },
    { id: 25, title: "25. TRACK 25", file: "music/track_25.mp3", skin: "skin-neon" },
    { id: 26, title: "26. TRACK 26", file: "music/track_26.mp3", skin: "skin-gold" },
    { id: 27, title: "27. TRACK 27", file: "music/track_27.mp3", skin: "skin-red" },
    { id: 28, title: "28. TRACK 28", file: "music/track_28.mp3", skin: "skin-purple" },
    { id: 29, title: "29. TRACK 29", file: "music/track_29.mp3", skin: "skin-blue" },
    { id: 30, title: "30. TRACK 30", file: "music/track_30.mp3", skin: "skin-green" },

    // --- BLOQUE 31-40 ---
    { id: 31, title: "31. TRACK 31", file: "music/track_31.mp3", skin: "skin-neon" },
    { id: 32, title: "32. TRACK 32", file: "music/track_32.mp3", skin: "skin-gold" },
    { id: 33, title: "33. TRACK 33", file: "music/track_33.mp3", skin: "skin-red" },
    { id: 34, title: "34. TRACK 34", file: "music/track_34.mp3", skin: "skin-purple" },
    { id: 35, title: "35. TRACK 35", file: "music/track_35.mp3", skin: "skin-blue" },
    { id: 36, title: "36. TRACK 36", file: "music/track_36.mp3", skin: "skin-green" },
    { id: 37, title: "37. TRACK 37", file: "music/track_37.mp3", skin: "skin-neon" },
    { id: 38, title: "38. TRACK 38", file: "music/track_38.mp3", skin: "skin-gold" },
    { id: 39, title: "39. TRACK 39", file: "music/track_39.mp3", skin: "skin-red" },
    { id: 40, title: "40. TRACK 40", file: "music/track_40.mp3", skin: "skin-purple" },

    // --- BLOQUE 41-50 ---
    { id: 41, title: "41. TRACK 41", file: "music/track_41.mp3", skin: "skin-blue" },
    { id: 42, title: "42. TRACK 42", file: "music/track_42.mp3", skin: "skin-green" },
    { id: 43, title: "43. TRACK 43", file: "music/track_43.mp3", skin: "skin-neon" },
    { id: 44, title: "44. TRACK 44", file: "music/track_44.mp3", skin: "skin-gold" },
    { id: 45, title: "45. TRACK 45", file: "music/track_45.mp3", skin: "skin-red" },
    { id: 46, title: "46. TRACK 46", file: "music/track_46.mp3", skin: "skin-purple" },
    { id: 47, title: "47. TRACK 47", file: "music/track_47.mp3", skin: "skin-blue" },
    { id: 48, title: "48. TRACK 48", file: "music/track_48.mp3", skin: "skin-green" },
    { id: 49, title: "49. TRACK 49", file: "music/track_49.mp3", skin: "skin-neon" },
    { id: 50, title: "50. TRACK 50", file: "music/track_50.mp3", skin: "skin-gold" },

    // --- BLOQUE 51-60 ---
    { id: 51, title: "51. TRACK 51", file: "music/track_51.mp3", skin: "skin-red" },
    { id: 52, title: "52. TRACK 52", file: "music/track_52.mp3", skin: "skin-purple" },
    { id: 53, title: "53. TRACK 53", file: "music/track_53.mp3", skin: "skin-blue" },
    { id: 54, title: "54. TRACK 54", file: "music/track_54.mp3", skin: "skin-green" },
    { id: 55, title: "55. TRACK 55", file: "music/track_55.mp3", skin: "skin-neon" },
    { id: 56, title: "56. TRACK 56", file: "music/track_56.mp3", skin: "skin-gold" },
    { id: 57, title: "57. TRACK 57", file: "music/track_57.mp3", skin: "skin-red" },
    { id: 58, title: "58. TRACK 58", file: "music/track_58.mp3", skin: "skin-purple" },
    { id: 59, title: "59. TRACK 59", file: "music/track_59.mp3", skin: "skin-blue" },
    { id: 60, title: "60. TRACK 60", file: "music/track_60.mp3", skin: "skin-green" },

    // --- BLOQUE 61-70 ---
    { id: 61, title: "61. TRACK 61", file: "music/track_61.mp3", skin: "skin-neon" },
    { id: 62, title: "62. TRACK 62", file: "music/track_62.mp3", skin: "skin-gold" },
    { id: 63, title: "63. TRACK 63", file: "music/track_63.mp3", skin: "skin-red" },
    { id: 64, title: "64. TRACK 64", file: "music/track_64.mp3", skin: "skin-purple" },
    { id: 65, title: "65. TRACK 65", file: "music/track_65.mp3", skin: "skin-blue" },
    { id: 66, title: "66. TRACK 66", file: "music/track_66.mp3", skin: "skin-green" },
    { id: 67, title: "67. TRACK 67", file: "music/track_67.mp3", skin: "skin-neon" },
    { id: 68, title: "68. TRACK 68", file: "music/track_68.mp3", skin: "skin-gold" },
    { id: 69, title: "69. TRACK 69", file: "music/track_69.mp3", skin: "skin-red" },
    { id: 70, title: "70. TRACK 70", file: "music/track_70.mp3", skin: "skin-purple" },

    // --- BLOQUE 71-80 ---
    { id: 71, title: "71. TRACK 71", file: "music/track_71.mp3", skin: "skin-blue" },
    { id: 72, title: "72. TRACK 72", file: "music/track_72.mp3", skin: "skin-green" },
    { id: 73, title: "73. TRACK 73", file: "music/track_73.mp3", skin: "skin-neon" },
    { id: 74, title: "74. TRACK 74", file: "music/track_74.mp3", skin: "skin-gold" },
    { id: 75, title: "75. TRACK 75", file: "music/track_75.mp3", skin: "skin-red" },
    { id: 76, title: "76. TRACK 76", file: "music/track_76.mp3", skin: "skin-purple" },
    { id: 77, title: "77. TRACK 77", file: "music/track_77.mp3", skin: "skin-blue" },
    { id: 78, title: "78. TRACK 78", file: "music/track_78.mp3", skin: "skin-green" },
    { id: 79, title: "79. TRACK 79", file: "music/track_79.mp3", skin: "skin-neon" },
    { id: 80, title: "80. TRACK 80", file: "music/track_80.mp3", skin: "skin-gold" },

    // --- BLOQUE 81-90 ---
    { id: 81, title: "81. TRACK 81", file: "music/track_81.mp3", skin: "skin-red" },
    { id: 82, title: "82. TRACK 82", file: "music/track_82.mp3", skin: "skin-purple" },
    { id: 83, title: "83. TRACK 83", file: "music/track_83.mp3", skin: "skin-blue" },
    { id: 84, title: "84. TRACK 84", file: "music/track_84.mp3", skin: "skin-green" },
    { id: 85, title: "85. TRACK 85", file: "music/track_85.mp3", skin: "skin-neon" },
    { id: 86, title: "86. TRACK 86", file: "music/track_86.mp3", skin: "skin-gold" },
    { id: 87, title: "87. TRACK 87", file: "music/track_87.mp3", skin: "skin-red" },
    { id: 88, title: "88. TRACK 88", file: "music/track_88.mp3", skin: "skin-purple" },
    { id: 89, title: "89. TRACK 89", file: "music/track_89.mp3", skin: "skin-blue" },
    { id: 90, title: "90. TRACK 90", file: "music/track_90.mp3", skin: "skin-green" }
];

let currentTapeIndex = 0;
let isTapePlaying = false;
let tapeAudio = new Audio();
tapeAudio.crossOrigin = "anonymous"; // Importante para Web Audio API
let tapeCounter = 0;
let counterInterval = null;

// Variables Web Audio API (VU Meters Reales + Tape Hiss)
let audioCtx, analyser, dataArray, hissNode, hissGain;

function initTapeAudioContext() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioCtx.createMediaElementSource(tapeAudio);
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 64;
            dataArray = new Uint8Array(analyser.frequencyBinCount);
            
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
            
            // Generar ruido de cinta (Tape Hiss) analógico
            const bufferSize = audioCtx.sampleRate * 2;
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1; // Ruido blanco
            }
            hissNode = audioCtx.createBufferSource();
            hissNode.buffer = buffer;
            hissNode.loop = true;
            hissGain = audioCtx.createGain();
            hissGain.gain.value = 0.015; // Volumen sutil y realista
            
            hissNode.connect(hissGain);
            hissGain.connect(audioCtx.destination);
        } catch (e) {
            console.warn("Web Audio API no soportada o bloqueada:", e);
        }
    }
}

// 3. Event Listeners del Audio
tapeAudio.addEventListener('timeupdate', () => {
    if (!tapeAudio.duration) return;
    const currSecs = tapeAudio.currentTime;
    const totalSecs = tapeAudio.duration;
    
    const timeEl = document.getElementById('current-time-text');
    const totalEl = document.getElementById('total-duration-text');
    if(timeEl) timeEl.innerText = formatTapeTime(currSecs);
    if(totalEl) totalEl.innerText = formatTapeTime(totalSecs);
    
    const pct = (currSecs / totalSecs) * 100;
    const progressEl = document.getElementById('progress-fill');
    if(progressEl) progressEl.style.width = `${pct}%`;
    
    updateSpoolSizes(pct / 100);
});

tapeAudio.addEventListener('ended', () => {
    playMechanicalSFX('clunk');
    setTimeout(() => {
        currentTapeIndex = (currentTapeIndex + 1) % cuevaTapePlaylist.length;
        loadTapeTrack(currentTapeIndex);
        playTape(); // Auto-reverse: reproduce la siguiente
    }, 800);
});

// 4. Funciones de Utilidad
function formatTapeTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function seekTapeProgress(event) {
    if (!tapeAudio.duration) return;
    const bar = event.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    tapeAudio.currentTime = (clickX / rect.width) * tapeAudio.duration;
    playMechanicalSFX('click');
}

function jumpToTrackNumber(num) {
    const idx = parseInt(num) - 1;
    if (idx >= 0 && idx < cuevaTapePlaylist.length) {
        loadTapeTrack(idx);
        if (isTapePlaying) playTape();
    }
}

function changeTapePitch(val) {
    tapeAudio.playbackRate = parseFloat(val);
    playMechanicalSFX('click');
}

function loadTapeTrack(index) {
    currentTapeIndex = index;
    const track = cuevaTapePlaylist[index];
    tapeAudio.src = track.file;
    
    const pitchSelect = document.getElementById('tape-pitch-select');
    tapeAudio.playbackRate = pitchSelect ? parseFloat(pitchSelect.value) : 1.0;
    
    const titleEl = document.getElementById('cassette-title-display');
    const deckNameEl = document.getElementById('deck-song-name');
    if(titleEl) titleEl.innerText = track.title;
    if(deckNameEl) deckNameEl.innerText = track.title;
    
    const inputEl = document.getElementById('direct-track-input');
    if(inputEl) inputEl.value = index + 1;
    
    const cassetteEl = document.getElementById('active-cassette');
    if(cassetteEl) cassetteEl.className = `cassette-body ${track.skin}`;
    
    resetTapeCounter();
}

// 5. Controles Principales del Deck
function playTape() {
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    if (!tapeAudio.src) loadTapeTrack(0);
    
    initTapeAudioContext();
    tapeAudio.play().catch(e => console.log("Interacción requerida para audio"));
    if (hissNode) hissNode.start();
    
    isTapePlaying = true;
    
    const door = document.getElementById('deck-door');
    if(door) door.className = 'deck-door-chamber playing tape-deck-glow';
    
    document.querySelectorAll('.piano-btn').forEach(b => b.classList.remove('active'));
    const playBtn = document.getElementById('btn-tape-play');
    if(playBtn) playBtn.classList.add('active');
    
    // Activar animación de carretes
    const spoolLeft = document.getElementById('spool-left');
    const spoolRight = document.getElementById('spool-right');
    if(spoolLeft) spoolLeft.classList.add('reel-spinning-left');
    if(spoolRight) spoolRight.classList.add('reel-spinning-right');
    
    startCounter();
    startRealVUMeters();
    playMechanicalSFX('click');
}

function pauseTape() {
    tapeAudio.pause();
    if (hissNode) { try { hissNode.stop(); } catch(e){} } // Detener ruido de cinta
    
    isTapePlaying = false;
    const door = document.getElementById('deck-door');
    if(door) door.className = 'deck-door-chamber';
    
    const spoolLeft = document.getElementById('spool-left');
    const spoolRight = document.getElementById('spool-right');
    if(spoolLeft) spoolLeft.classList.remove('reel-spinning-left');
    if(spoolRight) spoolRight.classList.remove('reel-spinning-right');
    
    stopCounter();
    playMechanicalSFX('click');
}

function stopTape() {
    tapeAudio.pause();
    tapeAudio.currentTime = 0;
    if (hissNode) { try { hissNode.stop(); } catch(e){} }
    
    isTapePlaying = false;
    const door = document.getElementById('deck-door');
    if(door) door.className = 'deck-door-chamber';
    
    const spoolLeft = document.getElementById('spool-left');
    const spoolRight = document.getElementById('spool-right');
    if(spoolLeft) spoolLeft.classList.remove('reel-spinning-left');
    if(spoolRight) spoolRight.classList.remove('reel-spinning-right');
    
    resetTapeCounter();
    stopCounter();
    playMechanicalSFX('clunk');
    
    // Resetear agujas VU
    const leftNeedle = document.getElementById('vu-left');
    const rightNeedle = document.getElementById('vu-right');
    if(leftNeedle) leftNeedle.style.transform = `rotate(-30deg)`;
    if(rightNeedle) rightNeedle.style.transform = `rotate(-30deg)`;
}

function ejectCassette() {
    stopTape();
    playMechanicalSFX('eject');
    const chamber = document.getElementById('deck-door');
    if(chamber) chamber.classList.add('ejecting');
    
    setTimeout(() => {
        currentTapeIndex = (currentTapeIndex + 1) % cuevaTapePlaylist.length;
        loadTapeTrack(currentTapeIndex);
        setTimeout(() => {
            if(chamber) chamber.classList.remove('ejecting');
        }, 300);
    }, 500);
}

function fastForwardTape() { 
    if (tapeAudio.src) { 
        tapeAudio.currentTime = Math.min(tapeAudio.duration || 0, tapeAudio.currentTime + 10); 
        playMechanicalSFX('whir'); 
    } 
}

function rewindTape() { 
    if (tapeAudio.src) { 
        tapeAudio.currentTime = Math.max(0, tapeAudio.currentTime - 10); 
        playMechanicalSFX('whir'); 
    } 
}

// 6. Contador Mecánico
function startCounter() {
    stopCounter();
    counterInterval = setInterval(() => {
        if (isTapePlaying) {
            tapeCounter++;
            const str = String(tapeCounter % 1000).padStart(3, '0');
            const d1 = document.getElementById('counter-d1');
            const d2 = document.getElementById('counter-d2');
            const d3 = document.getElementById('counter-d3');
            if(d1) d1.innerText = str[0];
            if(d2) d2.innerText = str[1];
            if(d3) d3.innerText = str[2];
        }
    }, 1000);
}

function stopCounter() { if (counterInterval) clearInterval(counterInterval); }

function resetTapeCounter() {
    tapeCounter = 0;
    const d1 = document.getElementById('counter-d1');
    const d2 = document.getElementById('counter-d2');
    const d3 = document.getElementById('counter-d3');
    if(d1) d1.innerText = '0';
    if(d2) d2.innerText = '0';
    if(d3) d3.innerText = '0';
}

function updateSpoolSizes(pct) {
    const leftSize = 38 - (pct * 20);
    const rightSize = 18 + (pct * 20);
    const sLeft = document.getElementById('spool-left');
    const sRight = document.getElementById('spool-right');
    if (sLeft) { sLeft.style.width = `${leftSize}px`; sLeft.style.height = `${leftSize}px`; }
    if (sRight) { sRight.style.width = `${rightSize}px`; sRight.style.height = `${rightSize}px`; }
}

// 7. VU METERS REALES (Reaccionan a la música)
function startRealVUMeters() {
    if (!isTapePlaying || !analyser) return;
    
    analyser.getByteFrequencyData(dataArray);
    
    // Promedio de frecuencias bajas (graves) -> Aguja Izquierda
    const leftAvg = dataArray.slice(0, 10).reduce((a, b) => a + b, 0) / 10;
    // Promedio de frecuencias altas (agudos) -> Aguja Derecha
    const rightAvg = dataArray.slice(10, 20).reduce((a, b) => a + b, 0) / 10;
    
    // Mapear 0-255 a un rango de -30 a 30 grados
    const leftDeg = (leftAvg / 255) * 60 - 30;
    const rightDeg = (rightAvg / 255) * 60 - 30;
    
    const leftNeedle = document.getElementById('vu-left');
    const rightNeedle = document.getElementById('vu-right');
    if (leftNeedle) leftNeedle.style.transform = `rotate(${leftDeg}deg)`;
    if (rightNeedle) rightNeedle.style.transform = `rotate(${rightDeg}deg)`;
    
    requestAnimationFrame(startRealVUMeters);
}

// 8. Efectos de Sonido Mecánicos (Sintetizados)
function playMechanicalSFX(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        
        if (type === 'click') { 
            osc.frequency.value = 180; 
            gain.gain.setValueAtTime(0.08, ctx.currentTime); 
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04); 
            osc.start(); osc.stop(ctx.currentTime + 0.04); 
        }
        else if (type === 'eject') { 
            osc.frequency.value = 320; 
            gain.gain.setValueAtTime(0.12, ctx.currentTime); 
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18); 
            osc.start(); osc.stop(ctx.currentTime + 0.18); 
        }
        else if (type === 'clunk') {
            osc.frequency.value = 100;
            osc.type = 'square';
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
            osc.start(); osc.stop(ctx.currentTime + 0.1);
        }
        else if (type === 'whir') {
            osc.frequency.value = 400;
            osc.type = 'sawtooth';
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            osc.start(); osc.stop(ctx.currentTime + 0.15);
        }
    } catch(e) {}
}

// 9. FUNCIÓN ESTRELLA: CARGAR MP3 LOCAL DESDE LA PC DEL USUARIO
const fileInput = document.getElementById('custom-mp3-upload');
if (fileInput) {
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            // Crear una URL temporal para el archivo subido
            const objectUrl = URL.createObjectURL(file);
            
            // Detener lo que esté sonando
            stopTape();
            
            // Sobrescribir la pista actual con el archivo del usuario
            tapeAudio.src = objectUrl;
            
            // Actualizar la interfaz
            const titleEl = document.getElementById('cassette-title-display');
            const deckNameEl = document.getElementById('deck-song-name');
            const fileNameEl = document.getElementById('custom-file-name');
            
            const cleanName = file.name.replace(/\.[^/.]+$/, ""); // Quitar extensión .mp3
            if(titleEl) titleEl.innerText = "📂 " + cleanName.toUpperCase();
            if(deckNameEl) deckNameEl.innerText = "CUSTOM TRACK";
            if(fileNameEl) fileNameEl.innerText = "Cargado: " + file.name;
            
            // Forzar skin "neon" para tracks personalizados
            const cassetteEl = document.getElementById('active-cassette');
            if(cassetteEl) cassetteEl.className = `cassette-body skin-neon`;
            
            resetTapeCounter();
            
            // Reproducir automáticamente después de un breve delay mecánico
            setTimeout(() => {
                playTape();
            }, 600);
            
            playMechanicalSFX('click');
        }
    });
}

// Inicializar primera pista al cargar la página (sin reproducir)
loadTapeTrack(0);

/* ================================================================
   MÓDULO 15: RELOJ SUPREMO + GEO IP + ANTI-ESTRÉS
   ================================================================ */
let clockTheme = 'vaporwave';

function setClockTheme(theme) {
    clockTheme = theme;
    const box = document.getElementById('clock-display-box');
    const digitalView = document.getElementById('digital-clock-view');
    const analogView = document.getElementById('analog-clock-view');
    document.querySelectorAll('.clk-mode-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    box.className = `clock-display-screen theme-${theme}`;
    if (theme === 'analog') { digitalView.style.display = 'none'; analogView.style.display = 'block'; }
    else { digitalView.style.display = 'block'; analogView.style.display = 'none'; }
    sfx.playClick();
}

function updateClockLogic() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock-time-text').innerText = `${hrs}:${mins}:${secs}`;
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('clock-date-text').innerText = now.toLocaleDateString('es-ES', options).toUpperCase();
    const secDeg = (now.getSeconds() / 60) * 360;
    const minDeg = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 360;
    const hrDeg = ((now.getHours() % 12 + now.getMinutes() / 60) / 12) * 360;
    const secHand = document.getElementById('second-hand');
    const minHand = document.getElementById('minute-hand');
    const hrHand = document.getElementById('hour-hand');
    if (secHand) secHand.setAttribute('transform', `rotate(${secDeg} 50 50)`);
    if (minHand) minHand.setAttribute('transform', `rotate(${minDeg} 50 50)`);
    if (hrHand) hrHand.setAttribute('transform', `rotate(${hrDeg} 50 50)`);
}
setInterval(updateClockLogic, 1000);
updateClockLogic();

async function fetchUserGeoData() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.ip) {
            document.getElementById('user-ip-display').innerText = data.ip;
            document.getElementById('user-location-display').innerText = `${data.city}, ${data.region}, ${data.country_name}`;
            document.getElementById('user-isp-display').innerText = `ISP: ${data.org || 'Desconocido'}`;
            document.getElementById('clock-ip-status').innerText = '🟢 IP RASTREADA';
            if (data.country_code) {
                document.getElementById('user-flag').innerHTML = `<img src="https://flagcdn.com/24x18/${data.country_code.toLowerCase()}.png" alt="flag" style="vertical-align:middle; border-radius:2px;">`;
            }
            if (data.latitude && data.longitude) fetchWeather(data.latitude, data.longitude);
        }
    } catch (err) {
        document.getElementById('user-ip-display').innerText = '127.0.0.1';
        document.getElementById('user-location-display').innerText = 'Cueva Secreta';
        document.getElementById('clock-ip-status').innerText = '⚠️ MODEM BLINDADO';
    }
}

async function fetchWeather(lat, lon) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const wData = await res.json();
        if (wData.current_weather) {
            const temp = Math.round(wData.current_weather.temperature);
            document.getElementById('user-weather-display').innerText = `${temp}°C 🌤️`;
        }
    } catch (e) {
        document.getElementById('user-weather-display').innerText = '24°C ☀️';
    }
}
fetchUserGeoData();

let stressClicks = 0;
const stressComments = [
    "Eso pibe... dale con ganas.",
    "El Yeyo aprueba tu spameo.",
    "¿Ya te sentís más relajado?",
    "¡Cuidado que vas a romper el botón!",
    "Nivel de rabia bajando al 50%...",
    "¡Eso es rock, pibe!",
    "DESBLOQUEASTE EL MODO ZEN MÁXIMO."
];

document.getElementById('anti-stress-btn').addEventListener('click', () => {
    stressClicks++;
    document.getElementById('stress-counter-badge').innerText = `(${stressClicks} Clicks)`;
    const commentIndex = Math.min(Math.floor(stressClicks / 5), stressComments.length - 1);
    document.getElementById('stress-comment').innerText = `"${stressComments[commentIndex]}"`;
    sfx.playClick();
    if (stressClicks === 50) {
        showAchievementToast({ icon: '🧘‍♂️', title: 'MAESTRO ZEN', desc: 'Presionaste 50 veces. Paz reina.' });
    }
});

/* ================================================================
   MÓDULO 16: SIDEBAR TERMINAL OS MULTI-ARQUITECTURA
   ================================================================ */
const ASIDE_OS_CONFIG = {
    douzoz98: {
        name: "DOUZOZ 98'", prompt: "DOUZOZ:\\>", theme: "douzoz98", topbar: "DOUZOZ_98_TTY1.SYS",
        welcome: "DOUZOZ 98 [Version 4.10.1998]\nEscribe 'help' o 'zork'.",
        commands: {
            patreon: "🔗 Patreon: https://www.patreon.com/cw/YaoiPornLover",
            yeyo: "👑 Yaoipornlover es el Arquitecto Supremo.",
            arcade: "🕹️ Presiona F2 para la cueva completa.",
            dir: "ARCHIVOS:\nAUTOEXEC.BAT\nYEYO_LORE.TXT\nZORK_DOUZOZ.EXE"
        }
    },
    kasper64: {
        name: "Kasper 64", prompt: "kasper64@root:~#", theme: "kasper64", topbar: "KASPER_64_WORKSTATION.SH",
        welcome: "Kasper OS v6.4 Cyber-Workstation\nKernel 6.4-YEYO-SECURE.",
        commands: {
            patreon: "🔒 VIP: https://www.patreon.com/cw/YaoiPornLover",
            scan: "🔍 Yeyo Vault: ENCRIPTADO [AES-256]",
            firewall: "🛡️ CAVE_FIREWALL: 100% Operativo.",
            ls: "kasper_vault.dat  yeyo_patreon_link.sh"
        }
    },
    joylover10: {
        name: "JoyLover 10", prompt: "JoyLover-OS>", theme: "joylover10", topbar: "JOYLOVER_10_NEON.EXE",
        welcome: "JoyLover 10 Gamer Edition [Neon]",
        commands: {
            patreon: "💖 Patreon: https://www.patreon.com/cw/YaoiPornLover",
            boost: "🚀 FPS Boost: 240 FPS",
            rank: "🏆 Rango: Hermano de Hierro",
            apps: "JoyLover_UI.exe, Yeyo_App.exe"
        }
    },
    "yaoilover-mints": {
        name: "YaoiLover Mints", prompt: "yaoi-mint@user:~$", theme: "yaoilover-mints", topbar: "MINT_UNIX_TERMINAL.BASH",
        welcome: "YaoiLover Mints Linux 21.2 (Victoria)",
        commands: {
            patreon: "🌐 curl -s https://www.patreon.com/cw/YaoiPornLover",
            whoami: "usuario_cueva (Staff del Yeyo)",
            sudo: "🔐 Permiso concedido.",
            neofetch: "OS: YaoiLover Mints 21.2\nHOST: Yeyo Cave Server"
        }
    }
};

const ZORK_STORIES = {
    douzoz98: {
        title: "=== ZORK 1998: EL MITO DEL YEYO ===",
        stages: {
            0: "Frente a una CRT gigante. Hay un disquete dorado 'Yaoipornlover'.\n(1: Insertar / 2: Ver Patreon / 3: Salir)",
            1: { 1: "¡El disquete arranca! El Yeyo te ofrece una cerveza.\n(1: Brindar / 2: Preguntar por la cueva)", 2: "Abres Netscape: Patreon del Yeyo.", 3: "Saliendo..." },
            2: { 1: "¡Salud! Ganaste la Llave Maestra.", 2: "Yeyo: 'Apoyanos en Patreon'." }
        }
    },
    kasper64: {
        title: "=== ZORK CYBER: INFILTRACIÓN ===",
        stages: {
            0: "Servidor oscuro. Archivo 'yeyo_patreon_secret.key'.\n(1: Hackear / 2: Patreon / 3: Salir)",
            1: { 1: "ACCESO PERMITIDO. Blueprint 3D.\n(1: Cargar / 2: Mensaje)", 2: "Pase VIP 64-bit.", 3: "Saliendo..." },
            2: { 1: "Misión Cumplida.", 2: "Mensaje enviado: 'Yeyo, sos el uno'." }
        }
    },
    joylover10: {
        title: "=== ZORK NEON: BÚSQUEDA DEL PATREON ===",
        stages: {
            0: "Letrero de neón rosa: 'CUEVA DEL YEYO'.\n(1: Joystick / 2: Patreon / 3: Salir)",
            1: { 1: "¡COMBO! 1000 Puntos.\n(1: P1 Yeyo / 2: Trofeos)", 2: "¡Nivel VIP!", 3: "Saliendo..." },
            2: { 1: "¡VICTORIA NEON!", 2: "Trofeo: 'Hermano del Yeyo [Legendario]'." }
        }
    },
    "yaoilover-mints": {
        title: "=== ZORK UNIX: LABERINTO YAOI ===",
        stages: {
            0: "Terminal Bash. Script 'yeyo_script.sh'.\n(1: ./yeyo_script.sh / 2: cat patreon.txt / 3: Salir)",
            1: { 1: "Banner ASCII del Yeyo. Puerta secreta.\n(1: Entrar / 2: Donar)", 2: "patreon.txt: Apoya al Yeyo.", 3: "Saliendo..." },
            2: { 1: "¡Juego completado!", 2: "¡Patrón legendario!" }
        }
    }
};

let activeZork = null;
let zorkStage = 0;
let currentAsideOS = 'douzoz98';

document.addEventListener('DOMContentLoaded', () => {
    initAsideDrawer();
    initAsideOSSelector();
    initAsideConsole();
    loadAsideOS('douzoz98');
    setInterval(() => {
        document.getElementById('aside-clock').textContent = new Date().toLocaleTimeString();
    }, 1000);
    window.addEventListener('keydown', (e) => {
        if (e.altKey && (e.key === 't' || e.key === 'T')) {
            document.getElementById('vm-aside-root').classList.toggle('open');
        }
    });
    build3DTitle();
    updateAchievementsUI();
    setTimeout(() => checkAchievement('welcome'), 1000);
    loadTapeTrack(0);
});

function initAsideDrawer() {
    const sidebar = document.getElementById('vm-aside-root');
    document.getElementById('vm-aside-toggle-btn').addEventListener('click', () => sidebar.classList.toggle('open'));
    document.getElementById('vm-aside-close-btn').addEventListener('click', () => sidebar.classList.remove('open'));
}

function initAsideOSSelector() {
    document.querySelectorAll('.os-mini-card:not(.os-locked)').forEach(card => {
        card.addEventListener('click', () => {
            const selected = card.getAttribute('data-os');
            if (selected && selected !== currentAsideOS) {
                document.querySelectorAll('.os-mini-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                loadAsideOS(selected);
            }
        });
    });
}

function loadAsideOS(osKey) {
    currentAsideOS = osKey;
    activeZork = null;
    zorkStage = 0;
    const config = ASIDE_OS_CONFIG[osKey];
    const bootScreen = document.getElementById('vm-aside-boot');
    const bootLabel = document.getElementById('vm-boot-label');
    const viewport = document.getElementById('vm-aside-viewport');
    const topbar = document.getElementById('console-topbar');
    const promptSymbol = document.getElementById('aside-prompt-symbol');
    const output = document.getElementById('aside-console-output');
    bootScreen.classList.remove('hidden');
    bootLabel.textContent = `CARGANDO ${config.name}...`;
    setTimeout(() => {
        viewport.setAttribute('data-theme', config.theme);
        topbar.textContent = config.topbar;
        promptSymbol.textContent = config.prompt;
        output.innerHTML = '';
        printAsideLine(config.welcome, 'system');
        bootScreen.classList.add('hidden');
    }, 500);
}

function initAsideConsole() {
    const form = document.getElementById('aside-console-form');
    const input = document.getElementById('aside-console-input');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cmd = input.value.trim();
        if (cmd) { processAsideCommand(cmd); input.value = ''; }
    });
}

function processAsideCommand(cmd) {
    const prompt = ASIDE_OS_CONFIG[currentAsideOS].prompt;
    printAsideLine(`${prompt} ${cmd}`, 'user');
    const cleanCmd = cmd.toLowerCase();
    if (activeZork) { handleZorkInput(cleanCmd); return; }
    const currentOSCmds = ASIDE_OS_CONFIG[currentAsideOS].commands;
    if (cleanCmd === 'help') {
        printAsideLine('--- COMANDOS ---', 'info');
        printAsideLine('  help, clear, zork, patreon');
        for (let c in currentOSCmds) printAsideLine(`  ${c} - Específico de ${ASIDE_OS_CONFIG[currentAsideOS].name}`);
    } else if (cleanCmd === 'clear') {
        document.getElementById('aside-console-output').innerHTML = '';
    } else if (cleanCmd === 'zork') {
        activeZork = currentAsideOS;
        zorkStage = 0;
        const story = ZORK_STORIES[activeZork];
        printAsideLine(story.title, 'warning');
        printAsideLine(story.stages[0], 'info');
    } else if (currentOSCmds[cleanCmd]) {
        printAsideLine(currentOSCmds[cleanCmd], 'info');
    } else {
        printAsideLine(`Comando no reconocido: '${cmd}'.`, 'error');
    }
}

function handleZorkInput(input) {
    const story = ZORK_STORIES[activeZork];
    if (zorkStage === 0) {
        if (input === '1') { zorkStage = 1; printAsideLine(story.stages[1][1], 'info'); }
        else if (input === '2') {
            printAsideLine("Abriendo Patreon...", 'warning');
            window.open('https://www.patreon.com/cw/YaoiPornLover', '_blank');
            activeZork = null;
        } else if (input === '3') { printAsideLine("Saliste del Zork.", 'system'); activeZork = null; }
        else printAsideLine("Opción inválida.", 'error');
    } else if (zorkStage === 1) {
        if (input === '1') { zorkStage = 2; printAsideLine(story.stages[2][1], 'warning'); printAsideLine("--- VICTORIA ---", 'system'); activeZork = null; }
        else if (input === '2') { zorkStage = 2; printAsideLine(story.stages[2][2], 'warning'); printAsideLine("--- FIN ---", 'system'); activeZork = null; }
        else printAsideLine("Opción inválida.", 'error');
    }
}

function printAsideLine(text, type = '') {
    const output = document.getElementById('aside-console-output');
    const el = document.createElement('div');
    el.style.color = type === 'error' ? '#ff3366' : type === 'info' ? '#00f3ff' : type === 'warning' ? '#d4af37' : type === 'system' ? '#888' : '#fff';
    el.textContent = text;
    output.appendChild(el);
    output.scrollTop = output.scrollHeight;
}
