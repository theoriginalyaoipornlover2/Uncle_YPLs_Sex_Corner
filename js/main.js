/* ================================================================
   MÓDULO 1: CONFIGURACIÓN TÍTULO 3D Y PALETAS
   ================================================================ */
const titleLine1 = "YAOI PORN LOVER'S";
const titleLine2 = "CAVE OF PLEASURE";
const palettes = [
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
    { name: "Batman", colors: ["#000000", "#1a1a1a", "#ffd700", "#2c3e50"], special: "Capa negra mate y cinturón dorado" },
    { name: "Superman", colors: ["#003D7C", "#F2C80F", "#B22222", "#FFFFFF"], special: "Capa roja ondeante y pecho brillante" },
    { name: "Harley Quinn", colors: ["#ff0000", "#0000ff", "#ffffff", "#000000"], special: "Diamantes rojos y azules" },
    { name: "Joker", colors: ["#ffffff", "#00ff00", "#ff0000", "#4b0082"], special: "Piel blanca, cabello verde y sonrisa" },
    { name: "Nightwing", colors: ["#000080", "#000000", "#00bfff", "#ffffff"], special: "Traje azul nocturno con líneas negras" },
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
    { name: "Zephyr V2", colors: ["#f0f8ff", "#00bfff", "#ffd700", "#ffffff"], special: "Plumaje blanco y detalles celestes" },
    { name: "Splendid", colors: ["#0000ff", "#ff0000", "#ffff00", "#ffffff"], special: "Capa azul y pecho con estrella" },
    { name: "Protogen", colors: ["#000000", "#00ff00", "#00ffff", "#ffffff"], special: "Visor LED brillante y pelaje sintético" },
    { name: "Dragón Furry", colors: ["#800080", "#00ff00", "#ffd700", "#ff0000"], special: "Escamas iridiscentes y alas" },
    { name: "Lobo Furry", colors: ["#808080", "#c0c0c0", "#ffffff", "#ffff00"], special: "Pelaje gris plateado y ojos amarillos" }
];
let currentPaletteIndex = 0;

const individualColors = ["#ffffff", "#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3", "#ffd700", "#ff1493", "#00ffff", "#39ff14", "#ff00ff"];

function build3DTitle() {
    const container = document.getElementById('title-container');
    if (!container) return;
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
        span.dataset.colorIndex = 0;

        span.addEventListener('click', (e) => {
            e.stopPropagation();
            let currentIndex = parseInt(span.dataset.colorIndex) || 0;
            let nextIndex = (currentIndex + 1) % individualColors.length;
            let newColor = individualColors[nextIndex];

            span.style.color = newColor;
            span.style.textShadow = `0 1px 0 #111, 0 2px 0 #000, 0 0 12px ${newColor}`;
            span.dataset.colorIndex = nextIndex;

            if (typeof sfx !== 'undefined' && sfx.playTone) {
                sfx.playTone(600 + (nextIndex * 40), 'sine', 0.05);
            }
        });
        parentElement.appendChild(span);
    }
}

function applyCurrentPalette() {
    const container = document.getElementById('title-container');
    if (!container) return;
    const pal = palettes[currentPaletteIndex];
    
    const specialText = pal.special ? ` ✦ [${pal.special}]` : '';
    const paletteNameEl = document.getElementById('palette-name');
    if (paletteNameEl) paletteNameEl.innerText = `PALETA: ${pal.name}${specialText}`;
    
    const hudSchemeEl = document.getElementById('hud-scheme');
    if (hudSchemeEl) hudSchemeEl.innerText = pal.name.split(' ')[0].toUpperCase();
    
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
if (titleWrapper) {
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
}

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
    const toastIcon = document.getElementById('toast-icon');
    const toastTitle = document.getElementById('toast-title');
    const toastDesc = document.getElementById('toast-desc');
    const toast = document.getElementById('achievement-toast');
    
    if(toastIcon) toastIcon.innerText = ach.icon;
    if(toastTitle) toastTitle.innerText = `¡LOGRO: ${ach.title.toUpperCase()}!`;
    if(toastDesc) toastDesc.innerText = ach.desc;
    
    if (toast) {
        toast.classList.add('show');
        if (typeof sfx !== 'undefined' && sfx.playAchievement) sfx.playAchievement();
        setTimeout(() => toast.classList.remove('show'), 4000);
    }
}

function updateAchievementsUI() {
    const count = achievements.filter(a => a.unlocked).length;
    const achCountEl = document.getElementById('achievements-count');
    const badgeAchNumEl = document.getElementById('badge-ach-num');
    if(achCountEl) achCountEl.innerText = `${count}/${achievements.length}`;
    if(badgeAchNumEl) badgeAchNumEl.innerText = count;
    
    const container = document.getElementById('achievements-list-container');
    if (container) {
        container.innerHTML = '';
        achievements.forEach(a => {
            const item = document.createElement('div');
            item.className = `achieve-item ${a.unlocked ? 'unlocked' : ''}`;
            item.innerHTML = `
                <div style="font-size:1.5rem">${a.icon}</div>
                <div>
                    <div style="font-weight:bold; color:${a.unlocked ? 'var(--neon-green, #0f0)' : '#aaa'}">${a.title}</div>
                    <div style="font-size:0.7rem">${a.desc}</div>
                </div>`;
            container.appendChild(item);
        });
    }
    // FIX: Se activa cuando el conteo es IGUAL al total, no total - 1
    if (count === achievements.length) checkAchievement('collector');
}

/* ================================================================
   MÓDULO 3: TOGGLE SFW / NSFW
   ================================================================ */
const nsfwBtn = document.getElementById('nsfw-toggle-btn');
if (nsfwBtn) {
    nsfwBtn.addEventListener('click', () => {
        if (document.body.classList.contains('sfw-mode')) {
            document.body.classList.remove('sfw-mode');
            document.body.classList.add('nsfw-mode');
            nsfwBtn.innerText = "🔥 NSFW: ON";
            const hudBg = document.getElementById('hud-bg-mode');
            if(hudBg) hudBg.innerText = "NSFW FIRE";
            const modeText = document.getElementById('mode-text-display');
            if(modeText) modeText.innerText = "NSFW (ACTIVO)";
            checkAchievement('nsfw_master');
        } else {
            document.body.classList.remove('nsfw-mode');
            document.body.classList.add('sfw-mode');
            nsfwBtn.innerText = "🔥 NSFW: OFF";
            const hudBg = document.getElementById('hud-bg-mode');
            if(hudBg) hudBg.innerText = "SFW SAFE";
            const modeText = document.getElementById('mode-text-display');
            if(modeText) modeText.innerText = "SFW (SEGURO)";
        }
    });
}

/* ================================================================
   MÓDULO 4: MODAL LOGROS
   ================================================================ */
const openAchBtn = document.getElementById('open-achievements-btn');
const closeAchBtn = document.getElementById('close-modal-btn');
const modalAch = document.getElementById('modal-achievements');

if (openAchBtn && modalAch) openAchBtn.addEventListener('click', () => modalAch.classList.add('active'));
if (closeAchBtn && modalAch) closeAchBtn.addEventListener('click', () => modalAch.classList.remove('active'));

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
    elem.addEventListener('mouseenter', () => { if(sfx) sfx.playClick(); });
});

/* ================================================================
   MÓDULO 6: MOTOR DE PARTÍCULAS
   ================================================================ */
const canvas = document.getElementById('particle-canvas');
if (canvas) {
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
}

/* ================================================================
   MÓDULO 7: SHELL HACKER (F2 o ~)
   ================================================================ */
const shell = document.getElementById('cave-shell');
const shellInput = document.getElementById('shell-input');
const shellOutput = document.getElementById('shell-output');

if (shell && shellInput && shellOutput) {
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
                    if(sfx) sfx.playAchievement();
                    break;
                case 'clear': shellOutput.innerHTML = ''; return;
                case 'rainbow':
                    res.innerText = 'Acelerando motor gráfico...';
                    const titleCont = document.getElementById('title-container');
                    if(titleCont) titleCont.style.animationDuration = '0.5s';
                    break;
                default:
                    res.style.color = '#ff3366';
                    res.innerText = `Error: comando '${cmd}' no reconocido.`;
            }
            shellOutput.appendChild(res);
            shellOutput.scrollTop = shellOutput.scrollHeight;
        }
    });
}

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
        if(inner) inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        if(shine) shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 80%)`;
    });
    card.addEventListener('mouseleave', () => {
        if(inner) inner.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        if(shine) shine.style.background = '';
    });
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        showAchievementToast({ icon: '🎬', title: 'FANÁTICO DE YEYO', desc: `Inspeccionaste: ${title || 'Desconocido'}` });
        if(sfx) sfx.playAchievement();
    });
});

const vhsBtn = document.getElementById('btn-vhs-glitch');
if (vhsBtn) {
    vhsBtn.addEventListener('click', () => {
        document.body.classList.toggle('vhs-active');
        const isActive = document.body.classList.contains('vhs-active');
        vhsBtn.innerText = isActive ? "📼 MODO VHS: ON" : "📼 MODO VHS: OFF";
        vhsBtn.style.color = isActive ? "var(--gold, #ffd700)" : "var(--neon-green, #0f0)";
        if(sfx) sfx.playClick();
    });
}

/* ================================================================
   MÓDULO 9: SECUENCIA DE ARRANQUE SUPREMA
   ================================================================ */
const epicBootCSS = `
    @keyframes crtTurnOn { 0% { transform: scale(1, 0.002); opacity: 0; filter: brightness(30) blur(10px); } 30% { transform: scale(1, 0.002); opacity: 1; filter: brightness(20) blur(5px); } 60% { transform: scale(1, 1); filter: brightness(10) blur(2px); } 100% { transform: scale(1, 1); filter: brightness(1) blur(0px); } }
    @keyframes crtFlicker { 0% { opacity: 0.97; } 5% { opacity: 0.95; } 10% { opacity: 0.98; } 15% { opacity: 0.94; } 50% { opacity: 0.96; } 100% { opacity: 0.97; } }
    @keyframes logoPulse { 0%, 100% { filter: drop-shadow(0 0 10px #ff71ce) drop-shadow(0 0 20px #01cdfe); transform: scale(1); } 50% { filter: drop-shadow(0 0 25px #ff71ce) drop-shadow(0 0 40px #01cdfe); transform: scale(1.02); } }
    @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
    @keyframes hexRain { 0% { background-position: 0% 0%; } 100% { background-position: 0% 100%; } }
    .crt-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 4px, 6px 100%; pointer-events: none; z-index: 99999; animation: crtFlicker 0.15s infinite; }
    .scanline-beam { position: fixed; top: 0; left: 0; width: 100%; height: 20px; background: rgba(255, 255, 255, 0.05); animation: scanline 6s linear infinite; pointer-events: none; z-index: 99998; }
    .boot-container-epic { background: #050505; color: #00ff41; font-family: 'Courier New', monospace; font-size: 14px; padding: 20px; height: 100vh; overflow: hidden; text-shadow: 0 0 5px #00ff41; position: relative; }
    .logo-loading-screen { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #000; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 99990; opacity: 0; transition: opacity 1s ease-in-out; }
    .logo-loading-screen.active { opacity: 1; }
    .yeyo-logo-img { max-width: 300px; border: 2px solid #ff71ce; border-radius: 10px; animation: logoPulse 3s infinite ease-in-out; margin-bottom: 30px; background: #111; }
    .epic-progress-bar { width: 400px; height: 20px; border: 2px solid #01cdfe; background: #001100; position: relative; overflow: hidden; }
    .epic-progress-fill { height: 100%; background: linear-gradient(90deg, #ff71ce, #01cdfe, #05ffa1); width: 0%; transition: width 0.2s ease-out; box-shadow: 0 0 15px #01cdfe; }
    .loading-lore { color: #888; font-size: 12px; margin-top: 15px; font-style: italic; min-height: 20px; text-align: center; }
    .hex-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.05; font-size: 10px; line-height: 10px; color: #00ff41; overflow: hidden; pointer-events: none; z-index: -1; animation: hexRain 20s linear infinite; }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = epicBootCSS;
document.head.appendChild(styleSheet);

const bootContainer = document.getElementById('boot-sequence');
const terminalOverlay = document.getElementById('kasper-terminal-overlay');
const interactivePrompt = document.getElementById('interactive-prompt');
const terminalInput = document.getElementById('terminal-input');
const commandHistory = document.getElementById('command-history');

const LOGO_IMAGE_URL = "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif";
const loadingLore = ["Calibrando generadores de placer...", "Desencriptando archivos de Leo Kasper...", "Cargando texturas de pelaje furry en 4K...", "Conectando al servidor secreto de la Scaloneta...", "Inyectando código YAOILOVER en el kernel...", "Verificando existencia del Hermano Yeyo... [CONFIRMADO]", "Pulverizando bugs con martillo neumático...", "Sincronizando ritmo cardíaco con el beat de la cueva..."];
const bootLogs = [
    { text: "YEYO BIOS v9.01 ULTRA (C) 2007-2026 KASPER CORP.", type: "header", delay: 100 },
    { text: "CPU: PENTIUM IV YEYO EDITION 3.8GHz [OK]", type: "success", delay: 150 },
    { text: "Memory Test: ", type: "memory", delay: 800 },
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
            osc.frequency.setValueAtTime(554, now + 0.1);
            osc.frequency.setValueAtTime(659, now + 0.2);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
            osc.start(now); osc.stop(now + 0.6);
            break;
    }
}

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

async function showLogoLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'logo-loading-screen';
    loadingScreen.innerHTML = `
        <img src="${LOGO_IMAGE_URL}" class="yeyo-logo-img" alt="YEYO LOGO">
        <div style="color: #01cdfe; font-family: 'Courier New'; font-size: 18px; font-weight: bold; letter-spacing: 2px;">INICIANDO DOUZOZ 7...</div>
        <div class="epic-progress-bar"><div class="epic-progress-fill" id="epic-fill"></div></div>
        <div class="loading-lore" id="loading-lore-text">Preparando la Cueva...</div>
    `;
    document.body.appendChild(loadingScreen);
    
    await new Promise(r => setTimeout(r, 500));
    loadingScreen.classList.add('active');
    playEpicSound('success');
    
    const fill = document.getElementById('epic-fill');
    const loreText = document.getElementById('loading-lore-text');
    let progress = 0;
    
    while (progress < 100) {
        await new Promise(r => setTimeout(r, Math.random() * 150 + 50));
        const increment = Math.random() * 5 + 1;
        progress = Math.min(progress + increment, 100);
        if(fill) fill.style.width = `${progress}%`;
        
        if (Math.random() > 0.85 && loreText) {
            loreText.style.opacity = 0;
            await new Promise(r => setTimeout(r, 200));
            loreText.innerText = loadingLore[Math.floor(Math.random() * loadingLore.length)];
            loreText.style.opacity = 1;
        }
        if (progress > 30 && progress < 35) playEpicSound('hdd');
        if (progress > 70 && progress < 75) playEpicSound('hdd');
    }
    
    if(loreText) {
        loreText.innerText = "¡SISTEMA LISTO! BIENVENIDO, HERMANO.";
        loreText.style.color = "#05ffa1";
    }
    playEpicSound('success');
    await new Promise(r => setTimeout(r, 1500));
    
    loadingScreen.style.opacity = 0;
    await new Promise(r => setTimeout(r, 1000));
    loadingScreen.remove();
    
    if(terminalOverlay) terminalOverlay.style.display = 'block';
    if(interactivePrompt) interactivePrompt.style.display = 'block';
    if(terminalInput) terminalInput.focus();
    
    if (commandHistory) {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.style.cssText = "color: #05ffa1; font-size: 16px; margin: 10px 0; border: 1px solid #05ffa1; padding: 10px;";
        welcomeDiv.innerHTML = `╔═══════════════════════════════════════════════╗<br>║   🌟 BIENVENIDO A LA CUEVA DEL YEYO 🌟       ║<br>║   Escribe 'help' para ver los comandos.      ║<br>╚═══════════════════════════════════════════════╝`;
        commandHistory.appendChild(welcomeDiv);
        terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
    }
}

async function runEpicBoot() {
    if (!bootContainer) return;
    createCRTOverlays();
    bootContainer.className = 'boot-container-epic';
    bootContainer.appendChild(generateHexBackground());
    playEpicSound('poweron');
    bootContainer.style.animation = 'crtTurnOn 1.5s ease-out forwards';
    await new Promise(r => setTimeout(r, 1500));
    
    for (let i = 0; i < bootLogs.length; i++) {
        const log = bootLogs[i];
        const div = document.createElement('div');
        div.style.marginBottom = "4px";
        if (log.type === 'header') { div.style.color = "#ff71ce"; div.style.fontWeight = "bold"; div.style.fontSize = "16px"; } 
        else if (log.type === 'success') { div.style.color = "#05ffa1"; } 
        else if (log.type === 'drive' || log.type === 'info') { div.style.color = "#01cdfe"; div.style.paddingLeft = "15px"; } 
        else if (log.type === 'progress') { div.style.color = "#ffd700"; }
        bootContainer.appendChild(div);
        
        if (log.type === 'memory') {
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
    await new Promise(r => setTimeout(r, 500));
    bootContainer.style.display = 'none';
    showLogoLoadingScreen();
}

let skipBoot = false;
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !skipBoot && bootContainer && bootContainer.style.display !== 'none') {
        skipBoot = true;
        document.querySelectorAll('.boot-container-epic *').forEach(el => el.remove());
        showLogoLoadingScreen();
    }
});

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
    active: false, currentRoom: 'inicio', inventory: [],
    rooms: {
        inicio: { desc: `Te encontrás en una habitación oscura con paredes de concreto crudo. Un monitor CRT parpadea en la esquina.<br>Hay una <span style="color:#05ffa1">puerta_de_hierro</span> al norte y una <span style="color:#05ffa1">mesa</span> de madera podrida.`, exits: { norte: 'pasillo' }, items: ['disquete'] },
        pasillo: { desc: `Un pasillo largo e iluminado por tubos fluorescentes intermitentes.<br>Al sur volvés a la habitación. Al este hay una puerta blindada <span style="color:#05ffa1">SERVIDOR_CENTRAL</span>.`, exits: { sur: 'inicio', este: 'servidor' }, items: [] },
        servidor: { desc: `Una sala fría llena de racks de servidores de finales de los 90.`, exits: { oeste: 'pasillo' }, items: ['llave_master'] }
    },
    start() {
        this.active = true; this.currentRoom = 'inicio';
        return `<span style="color:#ff71ce; font-weight:bold;">=== ZORK I: THE DOUZOZ UNDERGROUND ===</span><br>Comandos: <b>mirar</b>, <b>ir [dir]</b>, <b>tomar [item]</b>, <b>inventario</b>, <b>exit</b><br><br>` + this.getRoomDescription();
    },
    getRoomDescription() {
        const room = this.rooms[this.currentRoom];
        let itemText = room.items.length > 0 ? `<br><span style="color:#fff1be;">Items:</span> ${room.items.join(', ')}` : '';
        return room.desc + itemText;
    },
    parseCommand(input) {
        const args = input.toLowerCase().trim().split(' ');
        const verb = args[0], noun = args[1];
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
   MÓDULO 11: PROCESADOR CENTRAL DE COMANDOS
   ================================================================ */
let commandHistoryStack = [];
let historyIndex = -1;
let isTypingEffectActive = false;
const availableCommands = ['help', 'start', 'enter', 'status', 'cls', 'clear', 'ver', 'sysinfo', 'logo', 'time', 'yeyo', 'yaoilover', 'whois_leo', 'note_final', 'zork', 'matrix', 'bsod', 'shutdown', 'sudo', 'hack', 'music', 'avatar', 'lore', 'credits', 'reboot'];
const systemResponses = { error: ["Error crítico: Comando inválido.", "¿Qué intentás hacer, pibe?", "El Yeyo no aprueba eso.", "Syntax Error: Revisa tus cables."], success: ["Acceso concedido.", "Procesando solicitud...", "Orden ejecutada con éxito.", "La Cueva obedece."], idle: ["Esperando input...", "Sistema estable.", "Modo reposo activado."] };
function getRandomResponse(type) { const arr = systemResponses[type] || systemResponses.idle; return arr[Math.floor(Math.random() * arr.length)]; }

function triggerTerminalGlitch() {
    const overlay = document.getElementById('kasper-terminal-overlay');
    if (!overlay) return;
    overlay.style.filter = "hue-rotate(90deg) invert(1)";
    overlay.style.transform = "translate(5px, -5px) skewX(5deg)";
    setTimeout(() => { overlay.style.filter = "none"; overlay.style.transform = "none"; }, 150);
}

function processCommand(cmd) {
    const responseDiv = document.createElement('div');
    responseDiv.style.marginBottom = "15px";
    responseDiv.className = 'command-response';
    
    if (cmd.trim() !== '') {
        commandHistoryStack.push(cmd);
        historyIndex = commandHistoryStack.length;
    }

    if (ZorkGame.active) {
        responseDiv.innerHTML = ZorkGame.parseCommand(cmd);
        if(commandHistory) commandHistory.appendChild(responseDiv);
        if(terminalOverlay) terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
        return;
    }

    const cleanCmd = cmd.toLowerCase().trim();
    const args = cleanCmd.split(/\s+/); // FIX CRÍTICO: Definir args antes de usarlo

    switch (cleanCmd) {
        case 'help':
            responseDiv.innerHTML = `<pre style="color: #01cdfe; font-family: monospace;">\n╔══════════════════════════════════════════════════╗\n║           📟 GUÍA DE COMANDOS DOUZOZ 7          ║\n╠══════════════════════════════════════════════════╣\n║  SYSTEM: start, status, sysinfo, ver, reboot    ║\n║  YEYO: yeyo, whois_leo, note_final, lore        ║\n║  FUN: zork, matrix, music, avatar               ║\n║  HACK: sudo, hack, bsod, shutdown               ║\n║  UTIL: cls, clear, time, logo                   ║\n╚══════════════════════════════════════════════════╝\n<span style="color:#888">Tip: Usa TAB para autocompletar y ↑↓ para historial.</span></pre>`;
            break;
        case 'start': case 'enter':
            responseDiv.style.color = "#05ffa1"; responseDiv.innerText = "Iniciando Interfaz Gráfica...";
            if(sfx) sfx.playTone(800, 'sine', 0.1);
            setTimeout(() => { if(terminalOverlay) terminalOverlay.style.display = 'none'; document.body.classList.add('ui-active'); }, 800);
            break;
        case 'status':
            responseDiv.innerHTML = `<span style="color:#05ffa1;">🖥️ SISTEMA:</span> DOUZOZ 7 [Stable]<br><span style="color:#05ffa1;">🧠 MEMORIA:</span> ${(Math.random() * 10 + 80).toFixed(1)}% Usada<br><span style="color:#ff71ce;">❤️ AMOR:</span> Infinito`;
            break;
        case 'cls': case 'clear':
            if(commandHistory) commandHistory.innerHTML = '';
            return;
        case 'ver': responseDiv.innerText = "DOUZOZ 7 OS [v3.01.7601 - SP2 Vaporwave Edition]"; break;
        case 'sysinfo':
            responseDiv.innerHTML = `<div style="border-left: 3px solid #01cdfe; padding-left: 10px;"><span style="color:#05ffa1;">CPU:</span> PENTIUM IV YEYO EDITION 3.8GHz<br><span style="color:#05ffa1;">RAM:</span> 512MB DDR2 (Overclocked)<br><span style="color:#ff355e;">ESTADO:</span> COPIA PIRATA NO ACTIVADA</div>`;
            break;
        case 'logo':
            responseDiv.innerHTML = `<pre style="color: #ff71ce; font-weight: bold; text-shadow: 0 0 10px #ff71ce;">\n██████╗  ██████╗ ██╗   ██╗███████╗\n██╔══██╗██╔═══██╗██║   ██║╚══███╔╝\n██║  ██║██║   ██║██║   ██║  ███╔╝\n██║  ██║██║   ██║██║   ██║ ███╔╝\n██████╔╝╚██████╔╝╚██████╔╝███████╗\n╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝</pre>`;
            if(sfx) sfx.playTone(1000, 'square', 0.05);
            break;
        case 'time': responseDiv.innerText = `Fecha BIOS: ${new Date().toLocaleString('es-AR')} (Hora de la Cueva)`; break;
        case 'yeyo':
            responseDiv.style.color = "#fff1be"; responseDiv.innerHTML = `<span style="font-size: 20px;">⚡ YEYO CODE DETECTED ⚡</span><br>¡Eso es rock, pibe!`;
            if(sfx) sfx.playTone(200, 'triangle', 0.5);
            break;
        case 'yaoilover': executeYaoiloverProtocol(); return;
        case 'whois_leo':
            responseDiv.innerHTML = `<div style="background: rgba(0,0,0,0.5); border: 1px dashed #01cdfe; padding: 10px;"><span style="color:#05ffa1; font-weight:bold;">FICHA CLASIFICADA: LEO KASPER</span><br>ID: LK-2007-X<br>Estado: <span style="color:#ff355e;">DESCONECTADO (Pero siempre observando)</span></div>`;
            break;
        case 'note_final':
            responseDiv.innerHTML = `<div style="border: 1px solid #ff71ce; padding: 15px; background: rgba(255, 113, 206, 0.05); font-style: italic; color: #ddd;"><span style="color: #ff71ce; font-weight: bold; font-style: normal;">[MEMORIA 0x08 - INTERCEPTADA]</span><br><br>De: Leo Kasper<br>Para: YaoiPornLover<br>La cueva es tuya ahora.</div>`;
            break;
        case 'zork': responseDiv.innerHTML = ZorkGame.start(); break;
        case 'matrix':
            responseDiv.innerHTML = `<div id="matrix-rain-container" style="height: 200px; overflow: hidden; position: relative; background: black; border: 1px solid #05ffa1;"></div>`;
            if(commandHistory) commandHistory.appendChild(responseDiv);
            startMatrixRain(document.getElementById('matrix-rain-container'));
            return;
        case 'bsod':
            document.body.innerHTML = `<div style="background:#0000aa; color:#fff; font-family:'Lucida Console', monospace; padding:30px; height:100vh; display:flex; flex-direction:column; justify-content:center;"><h1>A problem has been detected and Windows has been shut down.</h1><p>DRIVER_IRQL_NOT_LESS_OR_EQUAL</p><button onclick="location.reload()" style="margin-top:20px; padding:10px; cursor:pointer;">REINICIAR</button></div>`;
            return;
        case 'shutdown':
            const ss = document.getElementById('shutdown-screen');
            if(ss) ss.style.display = 'flex';
            responseDiv.style.color = "#ff71ce"; responseDiv.innerText = "Apagando DOUZOZ 7... Adiós, hermano.";
            break;
        case 'sudo':
            if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
                responseDiv.style.color = "#ff355e"; responseDiv.innerText = "⛔ ACCESO DENEGADO. El Yeyo protege sus archivos.";
                triggerTerminalGlitch();
            } else { responseDiv.innerText = "Usuario root requerido. Prueba con 'hack'."; }
            break;
        case 'hack':
            responseDiv.innerHTML = `<span style="color:#05ffa1;">Iniciando secuencia de intrusión...</span><br>`;
            if(commandHistory) commandHistory.appendChild(responseDiv);
            simulateHackSequence();
            return;
        case 'music':
            responseDiv.style.color = "#ffd700"; responseDiv.innerText = "🎵 Reproduciendo: YeYo_Theme.mp3 [Volume: 11/10]";
            if(sfx) sfx.playAchievement(); 
            break;
        case 'avatar':
            const avatars = ['👨‍💻 Hacker', '🐺 Furry', '👑 Rey Yeyo', '☁️ Cloud Strife'];
            responseDiv.innerHTML = `Cambias tu avatar a: <span style="font-size:24px;">${avatars[Math.floor(Math.random() * avatars.length)]}</span>`;
            break;
        case 'lore':
            responseDiv.innerHTML = `<div style="max-width: 500px; line-height: 1.4;"><span style="color:#ff71ce; font-weight:bold;">LA HISTORIA:</span><br>Todo comenzó en 2007, cuando Leo Kasper creó el primer servidor. Luego llegó el Yeyo, quien transformó el código en arte.</div>`;
            break;
        case 'credits':
            responseDiv.innerHTML = `<div style="text-align:center; color:#888;"><span style="color:#fff; font-weight:bold;">HECHO CON ❤️ Y ☕ POR:</span><br>👑 YaoiPornLover (Visión)<br>💻 Leo Kasper (Arquitectura)</div>`;
            break;
        case 'reboot': responseDiv.innerText = "Reiniciando núcleo..."; setTimeout(() => location.reload(), 1000); break;
        default:
            responseDiv.style.color = "#ff355e";
            responseDiv.innerHTML = `'${cmd}' no reconocido.<br><span style="color:#888; font-size:12px;">${getRandomResponse('error')}</span>`;
            triggerTerminalGlitch();
            if(sfx) sfx.playTone(150, 'sawtooth', 0.2);
    }
    if(commandHistory) commandHistory.appendChild(responseDiv);
    if(terminalOverlay) terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
}

function startMatrixRain(container) {
    if(!container) return;
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth; canvas.height = 200;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array.from({length: columns}).fill(1);
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0f0'; ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    const interval = setInterval(draw, 33);
    setTimeout(() => clearInterval(interval), 5000);
}

function simulateHackSequence() {
    const msgs = ["Escaneando puertos...", "Encontrando vulnerabilidad: CVE-2007-YEYO", "Inyectando payload...", "Bypassing Firewall...", "ACCESO OBTENIDO 🔓"];
    let idx = 0;
    const interval = setInterval(() => {
        if (idx < msgs.length) {
            const div = document.createElement('div');
            div.style.color = "#05ffa1"; div.innerText = `[+] ${msgs[idx]}`;
            if(commandHistory) commandHistory.appendChild(div);
            if(terminalOverlay) terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
            idx++;
        } else {
            clearInterval(interval);
            const finalDiv = document.createElement('div');
            finalDiv.style.color = "#ffd700"; finalDiv.innerHTML = "<b>¡BIENVENIDO AL SISTEMA ROOT!</b>";
            if(commandHistory) commandHistory.appendChild(finalDiv);
        }
    }, 400);
}

function executeYaoiloverProtocol() {
    document.body.classList.add('yaoilover-mode');
    if (typeof sfx !== 'undefined' && sfx.playTone) sfx.playTone(100, 'sawtooth', 0.5);
    let count = 0; const totalSpam = 40;
    const ch = document.getElementById('command-history');
    const to = document.getElementById('kasper-terminal-overlay');
    
    const interval = setInterval(() => {
        if (count < totalSpam) {
            const spamLine = document.createElement('div');
            spamLine.className = 'cloud-spam-line';
            const colors = ['#ff0055', '#00ffff', '#ffff00', '#ff71ce'];
            spamLine.style.color = colors[count % colors.length];
            spamLine.style.textShadow = `0 0 5px ${colors[count % colors.length]}`;
            spamLine.innerText = `[${count + 1}/${totalSpam}] Cloud Strife mi viejo we 🫦`;
            if(ch) ch.appendChild(spamLine);
            if(to) to.scrollTop = to.scrollHeight;
            count++;
        } else {
            clearInterval(interval);
            const countdownDiv = document.createElement('div');
            countdownDiv.style.cssText = "font-size: 24px; color: red; text-align: center; margin: 20px; font-weight: bold; animation: blink 0.5s infinite;";
            countdownDiv.innerText = "ELIMINANDO REALIDAD... 3";
            if(ch) ch.appendChild(countdownDiv);
            
            let seconds = 3;
            const cdInterval = setInterval(() => {
                seconds--;
                if(seconds > 0) countdownDiv.innerText = `ELIMINANDO REALIDAD... ${seconds}`;
                else {
                    clearInterval(cdInterval);
                    if(countdownDiv.parentNode) countdownDiv.remove();
                    if(to) to.style.display = 'none';
                    const ss = document.getElementById('shutdown-screen');
                    if(ss) ss.style.display = 'flex';
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
   MÓDULO 13: PAGER MULTI-SKIN "ULTRA ENCRYPTED"
   ================================================================ */
const pagerCSS = `.pager-lcd-encrypt { font-family: 'Courier New', monospace; letter-spacing: 1px; } .pager-low-battery { animation: blinkRed 1s infinite; color: #ff0000 !important; } @keyframes blinkRed { 50% { opacity: 0.3; } } .pager-chassis { transition: all 0.3s ease; }`;
const pagerStyle = document.createElement("style");
pagerStyle.innerText = pagerCSS;
document.head.appendChild(pagerStyle);

const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*¡!¿?";
const pagerSkinData = {
    gta3: { brand: "LIBERTY CITY WIRELESS", title: "LC-PAGER", sticker: "🚕", color: "#9bbc0f", bgColor: "#0f380f", messages: ["[8-BALL]: 'Tengo las bombas listas.'", "[EL BURRO]: 'Tengo un trabajo de carreras.'", "[LCPD]: 'Unidad 12, sospechoso huyendo.'"] },
    argentina: { brand: "LA SCALONETA 100% CRIOLLO", title: "MATE-PAGER", sticker: "🧉", color: "#75aadb", bgColor: "#ffffff", messages: ["🇦🇷 [Yaoilover]: 'Prendé el fuego pibe.'", "⚽ [Scaloni]: 'Muchachos, hoy se juega con el alma.'", "🏆 [Dibu]: 'Mirá que te como, hermano.'"] },
    matrix: { brand: "NEBUCHADNEZZAR COMM", title: "MATRIX-NET", sticker: "🕶️", color: "#00ff41", bgColor: "#000000", messages: ["[Morpheus]: 'Tomás la pastilla roja.'", "[Trinity]: 'El agente Smith está rastreando tu señal.'"] },
    yeyo_gold: { brand: "YEYO SUPREME CORP", title: "GOLD-PAGER", sticker: "👑", color: "#ffd700", bgColor: "#1a1a1a", messages: ["👑 [YEYO]: 'La cueva es tuya, hermano.'", "⚡ [YEYO]: 'Código secreto activado.'"] },
    protogen: { brand: "CYBER CANINE SYS", title: "PROTO-VISOR", sticker: "🐺", color: "#00ffff", bgColor: "#000000", messages: ["[Sistema]: 'Visor LED: 100%.'", "[Alerta]: 'Niveles de uwu detectados: CRÍTICOS.'"] }
};

let currentSkin = 'gta3', currentMsgIdx = 0, isBacklightOn = true, pagerBattery = 100, batteryDrainInterval = null;

function startBatteryDrain() {
    if (batteryDrainInterval) clearInterval(batteryDrainInterval);
    batteryDrainInterval = setInterval(() => {
        if (pagerBattery > 0) { pagerBattery -= 1; updateBatteryUI(); }
        else { clearInterval(batteryDrainInterval); const d = document.getElementById('pager-display-text'); if(d) d.innerText = "BATERÍA AGOTADA. CARGAR."; }
    }, 30000);
}

function updateBatteryUI() {
    const batteryText = document.getElementById('pager-battery-text');
    if(batteryText) {
        batteryText.innerText = `🔋 ${pagerBattery}%`;
        if (pagerBattery <= 20) batteryText.classList.add('pager-low-battery');
        else batteryText.classList.remove('pager-low-battery');
    }
}

function setPagerSkin(skinName, event) {
    if (pagerBattery <= 0) { alert("⚠️ ¡Batería agotada!"); return; }
    currentSkin = skinName; currentMsgIdx = 0;
    if (event && event.target) { document.querySelectorAll('.skin-btn').forEach(btn => btn.classList.remove('active')); event.target.classList.add('active'); }
    const chassis = document.getElementById('pager-hardware');
    if (chassis) chassis.className = `pager-chassis skin-${skinName}`;
    const data = pagerSkinData[skinName];
    const brandEl = document.getElementById('pager-brand-display');
    const titleEl = document.getElementById('pager-skin-title');
    const stickerEl = document.getElementById('pager-sticker-slot');
    if(brandEl) brandEl.innerText = data.brand;
    if(titleEl) titleEl.innerText = data.title;
    if(stickerEl) stickerEl.innerText = data.sticker;
    const lcdBox = document.getElementById('pager-lcd-box');
    if (lcdBox) { lcdBox.style.color = data.color; lcdBox.style.backgroundColor = data.bgColor; lcdBox.style.boxShadow = `inset 0 0 10px ${data.color}40`; }
    updatePagerLCD();
}

function decryptText(element, finalText, duration = 800) {
    if(!element) return;
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = finalText.split("").map((char, index) => {
            if (index < iterations) return finalText[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }).join("");
        if (iterations >= finalText.length) { clearInterval(interval); element.classList.remove('pager-lcd-encrypt'); }
        else { element.classList.add('pager-lcd-encrypt'); }
        iterations += 1 / 1.5;
    }, 30);
}

function updatePagerLCD() {
    if (pagerBattery <= 0) return;
    const data = pagerSkinData[currentSkin];
    const display = document.getElementById('pager-display-text');
    if(display) decryptText(display, data.messages[currentMsgIdx]);
    const counter = document.getElementById('pager-msg-counter');
    if(counter) counter.innerText = `MSG: ${currentMsgIdx + 1}/${data.messages.length}`;
}

function pagerNextMsg() { if (pagerBattery <= 0) return; currentMsgIdx = (currentMsgIdx + 1) % pagerSkinData[currentSkin].messages.length; updatePagerLCD(); pagerBattery = Math.max(0, pagerBattery - 1); updateBatteryUI(); }
function pagerPrevMsg() { if (pagerBattery <= 0) return; const max = pagerSkinData[currentSkin].messages.length; currentMsgIdx = (currentMsgIdx - 1 + max) % max; updatePagerLCD(); }
function togglePagerLight() {
    if (pagerBattery <= 0) return;
    isBacklightOn = !isBacklightOn;
    const box = document.getElementById('pager-lcd-box');
    if (box) {
        if (isBacklightOn) { box.classList.remove('backlight-off'); box.classList.add('backlight-on'); box.style.opacity = "1"; }
        else { box.classList.remove('backlight-on'); box.classList.add('backlight-off'); box.style.opacity = "0.3"; }
    }
}
function chargePagerBattery() {
    pagerBattery = 100; updateBatteryUI();
    const batteryText = document.getElementById('pager-battery-text');
    if(batteryText) {
        batteryText.innerText = "⚡ CARGANDO...";
        setTimeout(() => { batteryText.innerText = "🔋 100%"; }, 1000);
    }
}
function sendPagerCode() {
    if (pagerBattery <= 0) return;
    const code = document.getElementById('pager-code-input')?.value || '';
    if (code === '1978' || code === '1986' || code === '2022') { alert("🇦🇷 ¡MUCHACHOS! Modo Campeón Activado."); setPagerSkin('argentina'); }
    else if (code === '0351') { alert("🚕 CÓDIGO GTA 3: 'Ah, shit, here we go again.'"); setPagerSkin('gta3'); }
    else if (code === '9999') { alert("👑 CÓDIGO YEYO: Acceso Supremo Concedido."); setPagerSkin('yeyo_gold'); }
    else if (code === '1010') { alert("🐺 CÓDIGO FURRY: Modo Protogen Activado."); setPagerSkin('protogen'); }
    else if (code.length > 0) { alert(`📟 CÓDIGO [${code}] PROCESADO.`); }
    const inp = document.getElementById('pager-code-input');
    if(inp) inp.value = '';
    pagerBattery = Math.max(0, pagerBattery - 2); updateBatteryUI();
}
function playTone(freq, duration) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator(); const g = ctx.createGain();
        osc.type = 'square'; osc.frequency.value = freq;
        g.gain.setValueAtTime(0.04, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration);
        osc.connect(g); g.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration);
    } catch(e) {}
}
startBatteryDrain();

/* ================================================================
   MÓDULO 14: TAPE DECK-9000 "ANALOG SOUL"
   ================================================================ */
const tapeCSS = `@keyframes spinReel { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .reel-spinning-left { animation: spinReel 2s linear infinite; } .reel-spinning-right { animation: spinReel 2s linear infinite reverse; } .tape-deck-glow { box-shadow: 0 0 20px rgba(5, 255, 161, 0.6), inset 0 0 15px rgba(5, 255, 161, 0.2); }`;
const tapeStyle = document.createElement("style");
tapeStyle.innerText = tapeCSS;
document.head.appendChild(tapeStyle);

const cuevaTapePlaylist = [
    { id: 1, title: "01. CUEVA CYBERPUNK BEATS", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", skin: "skin-neon" },
    { id: 2, title: "02. PORTLAND NIGHTS", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", skin: "skin-gold" },
    { id: 3, title: "03. METAL SLUG MISSION", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", skin: "skin-red" },
    { id: 4, title: "04. YEYO VAPORWAVE MIX", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", skin: "skin-purple" }
];

let currentTapeIndex = 0, isTapePlaying = false, tapeAudio = new Audio(), tapeCounter = 0, counterInterval = null;
let audioCtx, analyser, dataArray, hissNode, hissGain;

function initTapeAudioContext() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioCtx.createMediaElementSource(tapeAudio);
            analyser = audioCtx.createAnalyser(); analyser.fftSize = 64;
            dataArray = new Uint8Array(analyser.frequencyBinCount);
            source.connect(analyser); analyser.connect(audioCtx.destination);
            
            const bufferSize = audioCtx.sampleRate * 2;
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            
            hissNode = audioCtx.createBufferSource();
            hissNode.buffer = buffer; hissNode.loop = true;
            hissGain = audioCtx.createGain();
            hissGain.gain.value = 0; // FIX: Start muted, control via gain to avoid BufferSource restart error
            
            hissNode.connect(hissGain); hissGain.connect(audioCtx.destination);
            hissNode.start(); // Start ONCE
        } catch (e) { console.warn("Web Audio API no soportada:", e); }
    }
}

tapeAudio.addEventListener('timeupdate', () => {
    if (!tapeAudio.duration) return;
    const currSecs = tapeAudio.currentTime, totalSecs = tapeAudio.duration;
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
    setTimeout(() => {
        currentTapeIndex = (currentTapeIndex + 1) % cuevaTapePlaylist.length;
        loadTapeTrack(currentTapeIndex);
        playTape();
    }, 800);
});

function formatTapeTime(seconds) { if (isNaN(seconds)) return "00:00"; const m = Math.floor(seconds / 60); const s = Math.floor(seconds % 60); return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; }
function loadTapeTrack(index) {
    currentTapeIndex = index; const track = cuevaTapePlaylist[index];
    tapeAudio.src = track.file;
    const titleEl = document.getElementById('cassette-title-display');
    const deckNameEl = document.getElementById('deck-song-name');
    if(titleEl) titleEl.innerText = track.title;
    if(deckNameEl) deckNameEl.innerText = track.title;
    const cassetteEl = document.getElementById('active-cassette');
    if(cassetteEl) cassetteEl.className = `cassette-body ${track.skin}`;
    resetTapeCounter();
}

function playTape() {
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    if (!tapeAudio.src) loadTapeTrack(0);
    initTapeAudioContext();
    tapeAudio.play().catch(e => console.log("Interacción requerida para audio"));
    if (hissGain) hissGain.gain.setTargetAtTime(0.015, audioCtx.currentTime, 0.1); // FIX: Unmute instead of restart
    
    isTapePlaying = true;
    const door = document.getElementById('deck-door');
    if(door) door.className = 'deck-door-chamber playing tape-deck-glow';
    document.querySelectorAll('.piano-btn').forEach(b => b.classList.remove('active'));
    const playBtn = document.getElementById('btn-tape-play');
    if(playBtn) playBtn.classList.add('active');
    const spoolLeft = document.getElementById('spool-left');
    const spoolRight = document.getElementById('spool-right');
    if(spoolLeft) spoolLeft.classList.add('reel-spinning-left');
    if(spoolRight) spoolRight.classList.add('reel-spinning-right');
    startCounter();
    startRealVUMeters();
}

function pauseTape() {
    tapeAudio.pause();
    if (hissGain) hissGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1); // FIX: Mute instead of stop
    isTapePlaying = false;
    const door = document.getElementById('deck-door');
    if(door) door.className = 'deck-door-chamber';
    const spoolLeft = document.getElementById('spool-left');
    const spoolRight = document.getElementById('spool-right');
    if(spoolLeft) spoolLeft.classList.remove('reel-spinning-left');
    if(spoolRight) spoolRight.classList.remove('reel-spinning-right');
    stopCounter();
}

function stopTape() {
    tapeAudio.pause(); tapeAudio.currentTime = 0;
    if (hissGain) hissGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1); // FIX: Mute instead of stop
    isTapePlaying = false;
    const door = document.getElementById('deck-door');
    if(door) door.className = 'deck-door-chamber';
    const spoolLeft = document.getElementById('spool-left');
    const spoolRight = document.getElementById('spool-right');
    if(spoolLeft) spoolLeft.classList.remove('reel-spinning-left');
    if(spoolRight) spoolRight.classList.remove('reel-spinning-right');
    resetTapeCounter(); stopCounter();
    const leftNeedle = document.getElementById('vu-left');
    const rightNeedle = document.getElementById('vu-right');
    if(leftNeedle) leftNeedle.style.transform = `rotate(-30deg)`;
    if(rightNeedle) rightNeedle.style.transform = `rotate(-30deg)`;
}

function ejectCassette() {
    stopTape();
    const chamber = document.getElementById('deck-door');
    if(chamber) chamber.classList.add('ejecting');
    setTimeout(() => {
        currentTapeIndex = (currentTapeIndex + 1) % cuevaTapePlaylist.length;
        loadTapeTrack(currentTapeIndex);
        setTimeout(() => { if(chamber) chamber.classList.remove('ejecting'); }, 300);
    }, 500);
}

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
    if(d1) d1.innerText = '0'; if(d2) d2.innerText = '0'; if(d3) d3.innerText = '0';
}

function updateSpoolSizes(pct) {
    const leftSize = 38 - (pct * 20);
    const rightSize = 18 + (pct * 20);
    const sLeft = document.getElementById('spool-left');
    const sRight = document.getElementById('spool-right');
    if (sLeft) { sLeft.style.width = `${leftSize}px`; sLeft.style.height = `${leftSize}px`; }
    if (sRight) { sRight.style.width = `${rightSize}px`; sRight.style.height = `${rightSize}px`; }
}

function startRealVUMeters() {
    if (!isTapePlaying || !analyser) return;
    analyser.getByteFrequencyData(dataArray);
    const leftAvg = dataArray.slice(0, 10).reduce((a, b) => a + b, 0) / 10;
    const rightAvg = dataArray.slice(10, 20).reduce((a, b) => a + b, 0) / 10;
    const leftDeg = (leftAvg / 255) * 60 - 30;
    const rightDeg = (rightAvg / 255) * 60 - 30;
    const leftNeedle = document.getElementById('vu-left');
    const rightNeedle = document.getElementById('vu-right');
    if (leftNeedle) leftNeedle.style.transform = `rotate(${leftDeg}deg)`;
    if (rightNeedle) rightNeedle.style.transform = `rotate(${rightDeg}deg)`;
    requestAnimationFrame(startRealVUMeters);
}

const fileInput = document.getElementById('custom-mp3-upload');
if (fileInput) {
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            stopTape();
            tapeAudio.src = objectUrl;
            const titleEl = document.getElementById('cassette-title-display');
            const deckNameEl = document.getElementById('deck-song-name');
            const fileNameEl = document.getElementById('custom-file-name');
            const cleanName = file.name.replace(/\.[^/.]+$/, "");
            if(titleEl) titleEl.innerText = "📂 " + cleanName.toUpperCase();
            if(deckNameEl) deckNameEl.innerText = "CUSTOM TRACK";
            if(fileNameEl) fileNameEl.innerText = "Cargado: " + file.name;
            const cassetteEl = document.getElementById('active-cassette');
            if(cassetteEl) cassetteEl.className = `cassette-body skin-neon`;
            resetTapeCounter();
            setTimeout(() => { playTape(); }, 600);
        }
    });
}
loadTapeTrack(0);

/* ================================================================
   MÓDULO 15: CHRONOS & ZEN ULTIMATE EDITION
   ================================================================ */
const ultraClockCSS = `
    @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.6; box-shadow: 0 0 10px #05ffa1; } 50% { transform: scale(1.5); opacity: 1; box-shadow: 0 0 30px #05ffa1, 0 0 60px #ff71ce; } }
    @keyframes neon-pulse { 0%, 100% { text-shadow: 0 0 5px currentColor; } 50% { text-shadow: 0 0 15px currentColor, 0 0 25px currentColor; } }
    @keyframes zen-bg { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    .theme-matrix { color: #00ff41 !important; text-shadow: 0 0 5px #00ff41; font-family: 'Courier New', monospace; }
    .theme-binary { color: #01cdfe !important; font-family: 'Courier New', monospace; letter-spacing: 3px; }
    .theme-yeyo { color: #ff71ce !important; text-shadow: 0 0 10px #ff71ce, 0 0 20px #01cdfe; animation: neon-pulse 2s infinite; }
    .zen-mode-active { animation: zen-bg 15s ease infinite; background: linear-gradient(-45deg, #a8e6cf, #dcedc1, #ffd3b6, #ffaaa5, #a8e6cf) !important; background-size: 400% 400% !important; }
    .zen-mode-active * { color: #2d3436 !important; text-shadow: none !important; border-color: #636e72 !important; box-shadow: none !important; }
    .breathing-circle { width: 50px; height: 50px; border-radius: 50%; background: radial-gradient(circle, #05ffa1, transparent); margin: 10px auto; transition: all 4s ease-in-out; }
    .breathing-in { animation: breathe 4s ease-in-out infinite; }
    .stress-btn-pop { transform: scale(0.92); transition: transform 0.05s; }
`;
const clockStyle = document.createElement("style");
clockStyle.innerText = ultraClockCSS;
document.head.appendChild(clockStyle);

let clockTheme = 'vaporwave', stressClicks = 0, zenModeActive = false, sessionStart = Date.now();
let stopwatchRunning = false, stopwatchTime = 0, stopwatchInterval = null;
let asmrCtx, asmrNode, asmrGain;
let lastOut = 0; // FIX: Declarar antes de usar

function setClockTheme(theme, event) {
    clockTheme = theme;
    const box = document.getElementById('clock-display-box');
    const views = ['digital-clock-view', 'analog-clock-view', 'binary-clock-view', 'world-clock-view', 'stopwatch-view'];
    document.querySelectorAll('.clk-mode-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    if (box) box.className = `clock-display-screen theme-${theme}`;
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === `${theme}-clock-view` || (theme === 'digital' && id === 'digital-clock-view')) ? 'block' : 'none';
    });
    if (typeof sfx !== 'undefined') sfx.playClick();
}

function updateClockLogic() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const ms = String(now.getMilliseconds()).padStart(3, '0');
    
    const timeText = document.getElementById('clock-time-text');
    if (timeText) timeText.innerText = clockTheme === 'matrix' ? `${hrs}:${mins}:${secs}` : `${hrs}:${mins}:${secs}:${ms}`;
    const dateText = document.getElementById('clock-date-text');
    if (dateText) dateText.innerText = now.toLocaleDateString('es-ES', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase();

    const binaryText = document.getElementById('binary-time-text');
    if (binaryText && clockTheme === 'binary') {
        const toBin = (num) => Number(num).toString(2).padStart(8, '0');
        binaryText.innerText = `H:${toBin(hrs)} M:${toBin(mins)} S:${toBin(secs)}`;
    }

    updateWorldClocks(now);

    const secDeg = ((now.getSeconds() + now.getMilliseconds() / 1000) / 60) * 360;
    const minDeg = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 360;
    const hrDeg = ((now.getHours() % 12 + now.getMinutes() / 60) / 12) * 360;
    const secHand = document.getElementById('second-hand');
    if (secHand) { secHand.style.transform = `rotate(${secDeg}deg)`; secHand.style.transformOrigin = "50% 50%"; }
    const minHand = document.getElementById('minute-hand');
    if (minHand) minHand.setAttribute('transform', `rotate(${minDeg} 50 50)`);
    const hrHand = document.getElementById('hour-hand');
    if (hrHand) hrHand.setAttribute('transform', `rotate(${hrDeg} 50 50)`);

    const sessionEl = document.getElementById('session-time-display');
    if (sessionEl) {
        const diff = Math.floor((Date.now() - sessionStart) / 1000);
        sessionEl.innerText = `TIEMPO EN LA CUEVA: ${Math.floor(diff / 60)}m ${diff % 60}s`;
    }
    requestAnimationFrame(updateClockLogic);
}
updateClockLogic();

function updateWorldClocks(now) {
    const cities = { 'Buenos Aires': { offset: -3, el: 'wc-ba' }, 'Tokyo': { offset: 9, el: 'wc-tk' }, 'New York': { offset: -4, el: 'wc-ny' }, 'Liberty City': { offset: -4, el: 'wc-lc' } };
    for (const [city, data] of Object.entries(cities)) {
        const el = document.getElementById(data.el);
        if (el) {
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const cityTime = new Date(utc + (3600000 * data.offset));
            el.innerText = `${city}: ${String(cityTime.getHours()).padStart(2,'0')}:${String(cityTime.getMinutes()).padStart(2,'0')}`;
        }
    }
}

function toggleStopwatch() {
    const btn = document.getElementById('stopwatch-btn');
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval); stopwatchRunning = false;
        if(btn) btn.innerText = "▶ INICIAR";
    } else {
        stopwatchRunning = true;
        if(btn) btn.innerText = "⏸ PAUSAR";
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            const m = String(Math.floor(stopwatchTime / 60)).padStart(2, '0');
            const s = String(stopwatchTime % 60).padStart(2, '0');
            const display = document.getElementById('stopwatch-display');
            if(display) display.innerText = `${m}:${s}`;
        }, 1000);
    }
}
function resetStopwatch() {
    clearInterval(stopwatchInterval); stopwatchRunning = false; stopwatchTime = 0;
    const display = document.getElementById('stopwatch-display');
    const btn = document.getElementById('stopwatch-btn');
    if(display) display.innerText = "00:00";
    if(btn) btn.innerText = "▶ INICIAR";
}

const fakeLocations = [
    { ip: "192.168.YE.YO", loc: "Cueva Secreta del Yeyo, Subsuelo", isp: "CAVE_NET_PROXY", flag: "🏴‍☠️" },
    { ip: "127.0.0.LOVE", loc: "Corazón del Servidor, Matrix", isp: "NEBUCHADNEZZAR ISP", flag: "🕶️" },
    { ip: "85.90.SC.AL", loc: "HQ La Scaloneta, Ezeiza", isp: "AFA Fiber Optic", flag: "🇦🇷" },
    { ip: "69.42.0.69", loc: "Area 51, Zona Furry", isp: "Alien Wave Net", flag: "👽" }
];
let spoofIndex = 0;

async function fetchUserGeoData() {
    const statusEl = document.getElementById('clock-ip-status');
    if (statusEl) statusEl.innerText = '📡 TRIANGULANDO SATÉLITES...';
    try {
        await new Promise(r => setTimeout(r, 600));
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('API limit or blocked');
        const data = await response.json();
        if (data.ip && !window.spoofedIP) {
            const ipEl = document.getElementById('user-ip-display');
            const locEl = document.getElementById('user-location-display');
            const ispEl = document.getElementById('user-isp-display');
            const flagEl = document.getElementById('user-flag');
            if(ipEl) ipEl.innerText = data.ip;
            if(locEl) locEl.innerText = `${data.city || 'Desconocida'}, ${data.region || ''}, ${data.country_name || 'Desconocido'}`;
            if(ispEl) ispEl.innerText = `ISP: ${data.org || 'Desconocido'}`;
            if(statusEl) statusEl.innerText = '🟢 OBJETIVO FIJADO';
            if (data.country_code && flagEl) flagEl.innerHTML = `<img src="https://flagcdn.com/24x18/${data.country_code.toLowerCase()}.png" alt="flag" style="vertical-align:middle; border-radius:2px;">`;
        }
    } catch (err) {
        console.warn("Geo fetch failed, applying spoof:", err);
        applySpoofedIP(0); // FIX: Fallback robusto si AdBlock bloquea la API
    }
}

function toggleSpoofIP() {
    window.spoofedIP = true;
    spoofIndex = (spoofIndex + 1) % fakeLocations.length;
    applySpoofedIP(spoofIndex);
    if (typeof sfx !== 'undefined') sfx.playTone(800, 'square', 0.1);
}

function applySpoofedIP(index) {
    const fake = fakeLocations[index];
    const ipEl = document.getElementById('user-ip-display');
    const locEl = document.getElementById('user-location-display');
    const ispEl = document.getElementById('user-isp-display');
    const flagEl = document.getElementById('user-flag');
    const statusEl = document.getElementById('clock-ip-status');
    if(ipEl) ipEl.innerText = fake.ip;
    if(locEl) locEl.innerText = fake.loc;
    if(ispEl) ispEl.innerText = `ISP: ${fake.isp}`;
    if(flagEl) flagEl.innerHTML = `<span style="font-size:1.5rem">${fake.flag}</span>`;
    if(statusEl) statusEl.innerText = '🛡️ MODO STEALTH / SPOOFING';
}
fetchUserGeoData();

const stressComments = ["Eso pibe... dale con ganas.", "El Yeyo aprueba tu spameo.", "¿Ya te sentís más relajado?", "¡Cuidado que vas a romper el botón!", "Nivel de rabia bajando al 50%...", "¡Eso es rock, pibe!", "Respirá... la cueva te protege.", "Los bugs no pueden con vos.", "Modo Zen cargando: 25%...", "Modo Zen cargando: 50%...", "Modo Zen cargando: 75%...", "¡CASI LO LOGRÁS, HERMANO!"];

function initASMR() {
    if (!asmrCtx) {
        asmrCtx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = 2 * asmrCtx.sampleRate;
        const buffer = asmrCtx.createBuffer(1, bufferSize, asmrCtx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; 
        }
        asmrNode = asmrCtx.createBufferSource(); // FIX: Typo corregido (era "asm rNode")
        asmrNode.buffer = buffer;
        asmrNode.loop = true;
        asmrGain = asmrCtx.createGain(); // FIX: Typo corregido
        asmrGain.gain.value = 0;
        asmrNode.connect(asmrGain); // FIX
        asmrGain.connect(asmrCtx.destination); // FIX
        asmrNode.start(); // Start ONCE
    }
}

let asmrPlaying = false;
function toggleASMR() {
    initASMR();
    asmrPlaying = !asmrPlaying;
    const btn = document.getElementById('asmr-btn');
    if (asmrPlaying) {
        if (asmrGain) asmrGain.gain.setTargetAtTime(0.05, asmrCtx.currentTime, 0.1); // FIX: Unmute
        if(btn) { btn.innerText = "🎧 ASMR: ON (Lluvia Digital)"; btn.classList.add('active'); }
    } else {
        if (asmrGain) asmrGain.gain.setTargetAtTime(0, asmrCtx.currentTime, 0.1); // FIX: Mute
        if(btn) { btn.innerText = "🎧 ASMR: OFF"; btn.classList.remove('active'); }
    }
}

const stressBtn = document.getElementById('anti-stress-btn');
if (stressBtn) {
    stressBtn.addEventListener('click', () => {
        stressClicks++;
        stressBtn.classList.add('stress-btn-pop');
        setTimeout(() => stressBtn.classList.remove('stress-btn-pop'), 100);
        const badge = document.getElementById('stress-counter-badge');
        if (badge) badge.innerText = `(${stressClicks} Clicks)`;
        const commentIndex = Math.min(Math.floor(stressClicks / 5), stressComments.length - 1);
        const commentEl = document.getElementById('stress-comment');
        if (commentEl) {
            commentEl.style.opacity = 0;
            setTimeout(() => {
                commentEl.innerText = `"${stressComments[commentIndex]}"`;
                commentEl.style.opacity = 1;
            }, 150);
        }
        if (typeof sfx !== 'undefined') sfx.playTone(300 + (stressClicks * 10), 'sine', 0.05);
        if (stressClicks === 50 && !zenModeActive) {
            zenModeActive = true;
            document.body.classList.add('zen-mode-active');
            showAchievementToast({ icon: '🧘‍♂️', title: 'MAESTRO ZEN', desc: 'La Cueva ahora es paz pura. Colores suavizados.' });
            if (typeof sfx !== 'undefined') sfx.playAchievement();
        }
        if (stressClicks === 100) {
            showAchievementToast({ icon: '👑', title: 'BENDICIÓN DEL YEYO', desc: 'Has alcanzado la iluminación digital máxima.' });
            if (commentEl) {
                commentEl.innerText = "\"El Yeyo sonríe. Eres uno con el código.\"";
                commentEl.style.color = "#ffd700";
                commentEl.style.fontWeight = "bold";
                commentEl.style.fontSize = "1.1rem";
                commentEl.style.animation = "neon-pulse 1s infinite";
            }
        }
    });
}

/* ================================================================
   MÓDULO 16: SIDEBAR TERMINAL OS MULTI-ARQUITECTURA
   ================================================================ */
const ASIDE_OS_CONFIG = {
    douzoz98: { name: "DOUZOZ 98'", prompt: "DOUZOZ:\\>", theme: "douzoz98", topbar: "DOUZOZ_98_TTY1.SYS", welcome: "DOUZOZ 98 [Version 4.10.1998]\nEscribe 'help' o 'zork'.", commands: { patreon: "🔗 Patreon: https://www.patreon.com/cw/YaoiPornLover", yeyo: "👑 Yaoipornlover es el Arquitecto Supremo.", arcade: "🕹️ Presiona F2 para la cueva completa.", dir: "ARCHIVOS:\nAUTOEXEC.BAT\nYEYO_LORE.TXT\nZORK_DOUZOZ.EXE" } },
    kasper64: { name: "Kasper 64", prompt: "kasper64@root:~#", theme: "kasper64", topbar: "KASPER_64_WORKSTATION.SH", welcome: "Kasper OS v6.4 Cyber-Workstation\nKernel 6.4-YEYO-SECURE.", commands: { patreon: "🔒 VIP: https://www.patreon.com/cw/YaoiPornLover", scan: "🔍 Yeyo Vault: ENCRIPTADO [AES-256]", firewall: "🛡️ CAVE_FIREWALL: 100% Operativo.", ls: "kasper_vault.dat  yeyo_patreon_link.sh" } },
    joylover10: { name: "JoyLover 10", prompt: "JoyLover-OS>", theme: "joylover10", topbar: "JOYLOVER_10_NEON.EXE", welcome: "JoyLover 10 Gamer Edition [Neon]", commands: { patreon: "💖 Patreon: https://www.patreon.com/cw/YaoiPornLover", boost: "🚀 FPS Boost: 240 FPS", rank: "🏆 Rango: Hermano de Hierro", apps: "JoyLover_UI.exe, Yeyo_App.exe" } },
    "yaoilover-mints": { name: "YaoiLover Mints", prompt: "yaoi-mint@user:~$", theme: "yaoilover-mints", topbar: "MINT_UNIX_TERMINAL.BASH", welcome: "YaoiLover Mints Linux 21.2 (Victoria)", commands: { patreon: "🌐 curl -s https://www.patreon.com/cw/YaoiPornLover", whoami: "usuario_cueva (Staff del Yeyo)", sudo: "🔐 Permiso concedido.", neofetch: "OS: YaoiLover Mints 21.2\nHOST: Yeyo Cave Server" } }
};

const ZORK_STORIES = {
    douzoz98: { title: "=== ZORK 1998: EL MITO DEL YEYO ===", stages: { 0: "Frente a una CRT gigante. Hay un disquete dorado 'Yaoipornlover'.\n(1: Insertar / 2: Ver Patreon / 3: Salir)", 1: { 1: "¡El disquete arranca! El Yeyo te ofrece una cerveza.\n(1: Brindar / 2: Preguntar por la cueva)", 2: "Abres Netscape: Patreon del Yeyo.", 3: "Saliendo..." }, 2: { 1: "¡Salud! Ganaste la Llave Maestra.", 2: "Yeyo: 'Apoyanos en Patreon'." } } },
    kasper64: { title: "=== ZORK CYBER: INFILTRACIÓN ===", stages: { 0: "Servidor oscuro. Archivo 'yeyo_patreon_secret.key'.\n(1: Hackear / 2: Patreon / 3: Salir)", 1: { 1: "ACCESO PERMITIDO. Blueprint 3D.\n(1: Cargar / 2: Mensaje)", 2: "Pase VIP 64-bit.", 3: "Saliendo..." }, 2: { 1: "Misión Cumplida.", 2: "Mensaje enviado: 'Yeyo, sos el uno'." } } },
    joylover10: { title: "=== ZORK NEON: BÚSQUEDA DEL PATREON ===", stages: { 0: "Letrero de neón rosa: 'CUEVA DEL YEYO'.\n(1: Joystick / 2: Patreon / 3: Salir)", 1: { 1: "¡COMBO! 1000 Puntos.\n(1: P1 Yeyo / 2: Trofeos)", 2: "¡Nivel VIP!", 3: "Saliendo..." }, 2: { 1: "¡VICTORIA NEON!", 2: "Trofeo: 'Hermano del Yeyo [Legendario]'." } } },
    "yaoilover-mints": { title: "=== ZORK UNIX: LABERINTO YAOI ===", stages: { 0: "Terminal Bash. Script 'yeyo_script.sh'.\n(1: ./yeyo_script.sh / 2: cat patreon.txt / 3: Salir)", 1: { 1: "Banner ASCII del Yeyo. Puerta secreta.\n(1: Entrar / 2: Donar)", 2: "patreon.txt: Apoya al Yeyo.", 3: "Saliendo..." }, 2: { 1: "¡Juego completado!", 2: "¡Patrón legendario!" } } }
};

let activeZork = null, zorkStage = 0, currentAsideOS = 'douzoz98';

document.addEventListener('DOMContentLoaded', () => {
    initAsideDrawer();
    initAsideOSSelector();
    initAsideConsole();
    loadAsideOS('douzoz98');
    setInterval(() => {
        const asideClock = document.getElementById('aside-clock');
        if(asideClock) asideClock.textContent = new Date().toLocaleTimeString();
    }, 1000);
    window.addEventListener('keydown', (e) => {
        if (e.altKey && (e.key === 't' || e.key === 'T')) {
            const aside = document.getElementById('vm-aside-root');
            if(aside) aside.classList.toggle('open');
        }
    });
    build3DTitle();
    updateAchievementsUI();
    setTimeout(() => checkAchievement('welcome'), 1000);
    loadTapeTrack(0);
});

function initAsideDrawer() {
    const sidebar = document.getElementById('vm-aside-root');
    const toggleBtn = document.getElementById('vm-aside-toggle-btn');
    const closeBtn = document.getElementById('vm-aside-close-btn');
    if (sidebar && toggleBtn) toggleBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
    if (sidebar && closeBtn) closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));
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
    currentAsideOS = osKey; activeZork = null; zorkStage = 0;
    const config = ASIDE_OS_CONFIG[osKey];
    const bootScreen = document.getElementById('vm-aside-boot');
    const bootLabel = document.getElementById('vm-boot-label');
    const viewport = document.getElementById('vm-aside-viewport');
    const topbar = document.getElementById('console-topbar');
    const promptSymbol = document.getElementById('aside-prompt-symbol');
    const output = document.getElementById('aside-console-output');
    if(bootScreen) bootScreen.classList.remove('hidden');
    if(bootLabel) bootLabel.textContent = `CARGANDO ${config.name}...`;
    setTimeout(() => {
        if(viewport) viewport.setAttribute('data-theme', config.theme);
        if(topbar) topbar.textContent = config.topbar;
        if(promptSymbol) promptSymbol.textContent = config.prompt;
        if(output) output.innerHTML = '';
        printAsideLine(config.welcome, 'system');
        if(bootScreen) bootScreen.classList.add('hidden');
    }, 500);
}

function initAsideConsole() {
    const form = document.getElementById('aside-console-form');
    const input = document.getElementById('aside-console-input');
    if(form && input) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const cmd = input.value.trim();
            if (cmd) { processAsideCommand(cmd); input.value = ''; }
        });
    }
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
        const output = document.getElementById('aside-console-output');
        if(output) output.innerHTML = '';
    } else if (cleanCmd === 'zork') {
        activeZork = currentAsideOS; zorkStage = 0;
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
    if(!output) return;
    const el = document.createElement('div');
    el.style.color = type === 'error' ? '#ff3366' : type === 'info' ? '#00f3ff' : type === 'warning' ? '#d4af37' : type === 'system' ? '#888' : '#fff';
    el.textContent = text;
    output.appendChild(el);
    output.scrollTop = output.scrollHeight;
}
