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
   MÓDULO 9: SECUENCIA DE ARRANQUE + TERMINAL KASPER
   ================================================================ */
const bootLogs = [
    "KASPER BIOS v3.01 (C) 2007 KASPER CORP.",
    "Checking System Hardware...",
    "RAM: 640KB OK (Ext: 16384KB OK)",
    "Video Adapter: VAPORWAVE 3D FX VELOCITY - OK",
    "Audio: SOUND BLASTER 16 [DMA 1, IRQ 5] - OK",
    "GTA3_ENGINE: Checking Cd-Rom... OK",
    "VICE_CITY_SHELL: Loading ViceCity_Vapor.sys...",
    "CAVE_CORE: Initializing Pleasure Protocol...",
    "Mounting OS Partition [DOUZOZ 7]...",
    "--------------------------------------------------"
];
const bootContainer = document.getElementById('boot-sequence');
const interactivePrompt = document.getElementById('interactive-prompt');
const terminalInput = document.getElementById('terminal-input');
const commandHistory = document.getElementById('command-history');
const terminalOverlay = document.getElementById('kasper-terminal-overlay');
const shutdownScreen = document.getElementById('douzoz-shutdown-screen');
let lineIndex = 0;

function runBootSequence() {
    if (lineIndex < bootLogs.length) {
        const div = document.createElement('div');
        div.innerText = bootLogs[lineIndex];
        div.style.color = "#01cdfe";
        bootContainer.appendChild(div);
        lineIndex++;
        setTimeout(runBootSequence, 120);
    } else {
        setTimeout(() => {
            interactivePrompt.style.display = 'block';
            terminalInput.focus();
        }, 300);
    }
}
window.addEventListener('load', runBootSequence);

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
   MÓDULO 11: PROCESADOR CENTRAL DE COMANDOS
   ================================================================ */
function processCommand(cmd) {
    const responseDiv = document.createElement('div');
    responseDiv.style.marginBottom = "10px";
    if (ZorkGame.active) {
        responseDiv.innerHTML = ZorkGame.parseCommand(cmd);
        commandHistory.appendChild(responseDiv);
        return;
    }
    switch (cmd) {
        case 'help':
            responseDiv.innerHTML = `<span style="color:#05ffa1;">COMANDOS:</span><br>
                <b style="color:#ff71ce">start/enter</b> - Entrar a la cueva<br>
                <b style="color:#ff71ce">status</b> - Estado del SO<br>
                <b style="color:#ff71ce">cls/clear</b> - Limpiar pantalla<br>
                <b style="color:#ff71ce">ver</b> - Versión<br>
                <b style="color:#ff71ce">sysinfo</b> - Diagnóstico<br>
                <b style="color:#ff71ce">logo</b> - Logo ASCII<br>
                <b style="color:#ff71ce">time</b> - Hora BIOS<br>
                <b style="color:#ff71ce">yeyo</b> - Mensaje del hermano<br>
                <b style="color:#ff71ce">yaoilover</b> - Protocolo secreto<br>
                <b style="color:#ff71ce">whois_leo</b> - Ficha de Leo Kasper<br>
                <b style="color:#ff71ce">note_final</b> - Carta interceptada<br>
                <b style="color:#ff71ce">zork</b> - Aventura en texto<br>
                <b style="color:#ff71ce">matrix</b> - Datos binarios<br>
                <b style="color:#ff71ce">bsod</b> - Pantalla azul<br>
                <b style="color:#ff71ce">shutdown</b> - Apagar`;
            break;
        case 'start': case 'enter':
            responseDiv.style.color = "#05ffa1";
            responseDiv.innerText = "Acceso concedido...";
            setTimeout(() => terminalOverlay.style.display = 'none', 800);
            break;
        case 'status':
            responseDiv.innerText = "SISTEMA: DOUZOZ 7 | MEMORIA: 99% Llena de Edits.";
            break;
        case 'cls': case 'clear':
            commandHistory.innerHTML = '';
            return;
        case 'ver':
            responseDiv.innerText = "DOUZOZ 7 OS [v3.01.7601 - SP2 Vaporwave]";
            break;
        case 'sysinfo':
            responseDiv.innerHTML = `<span style="color:#05ffa1;">CPU:</span> PENTIUM IV 3.00GHz<br><span style="color:#05ffa1;">RAM:</span> 512MB DDR2<br><span style="color:#05ffa1;">GPU:</span> GeForce FX 5200<br><span style="color:#ff355e;">COPIA PIRATA NO ACTIVADA</span>`;
            break;
        case 'logo':
            responseDiv.innerHTML = `<pre style="color: #ff71ce; font-weight: bold;">
██████╗  ██████╗ ██╗   ██╗███████╗
██╔══██╗██╔═══██╗██║   ██║╚══███╔╝
██║  ██║██║   ██║██║   ██║  ███╔╝
██║  ██║██║   ██║██║   ██║ ███╔╝
██████╔╝╚██████╔╝╚██████╔╝███████╗
╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝</pre>`;
            break;
        case 'time':
            responseDiv.innerText = `Fecha BIOS: ${new Date().toLocaleString('es-ES')}`;
            break;
        case 'yeyo':
            responseDiv.style.color = "#fff1be";
            responseDiv.innerText = "⚡ YEYO CODE DETECTED: ¡Eso es rock, pibe!";
            break;
        case 'yaoilover':
            executeYaoiloverProtocol();
            return;
        case 'whois_leo':
            responseDiv.innerHTML = `<span style="color:#05ffa1;">FICHA: LEO KASPER</span><br>ID: LK-2007-X<br>Rol: Arquitecto Principal<br><span style="color:#ff355e;">Estado: DESCONECTADO</span>`;
            break;
        case 'note_final':
            responseDiv.innerHTML = `<div style="border: 1px solid #ff71ce; padding: 10px; background: rgba(255, 113, 206, 0.05);">
                <span style="color: #ff71ce; font-weight: bold;">[MEMORIA 0x08]</span><br>
                De: Leo Kasper<br>Para: YaoiPornLover<br>Fecha: 14 Nov 2007<br><br>
                Si estás leyendo esto, el script de apagado ya arrancó...<br>
                Gracias por haberte quedado del otro lado de la pantalla.<br><br>
                <i>- Leo Kasper.</i></div>`;
            break;
        case 'zork':
            responseDiv.innerHTML = ZorkGame.start();
            break;
        case 'matrix':
            responseDiv.innerHTML = `<div style="color: #05ffa1;">01001000 01100101 01101100 01101100 01110100<br>[RESTAURANDO MEMORIA...]</div>`;
            break;
        case 'bsod':
            document.body.innerHTML = `<div style="background:#0000aa; color:#fff; font-family:monospace; padding:30px; height:100vh;">
                <p>DRIVER_IRQL_NOT_LESS_OR_EQUAL</p>
                <p>*** STOP: 0x0000000A</p>
                <p>*** KASPER_SYS.SYS</p></div>`;
            return;
        case 'shutdown':
            if (shutdownScreen) shutdownScreen.style.display = 'flex';
            responseDiv.style.color = "#ff71ce";
            responseDiv.innerText = "Apagando DOUZOZ 7...";
            break;
        default:
            responseDiv.style.color = "#ff355e";
            responseDiv.innerText = `'${cmd}' no reconocido. Escribe 'help'.`;
    }
    commandHistory.appendChild(responseDiv);
}

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';
        if (cmd === '') return;
        const historyLine = document.createElement('div');
        const promptSymbol = ZorkGame.active ? 'ZORK>' : 'KASPER:\\DOUZOZ7>';
        historyLine.innerHTML = `<span class="prompt-symbol">${promptSymbol}</span> ${cmd}`;
        commandHistory.appendChild(historyLine);
        processCommand(cmd);
        terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
    }
});

function executeYaoiloverProtocol() {
    document.body.classList.add('yaoilover-mode');
    let count = 0;
    const interval = setInterval(() => {
        if (count < 40) {
            const spamLine = document.createElement('div');
            spamLine.className = 'cloud-spam-line';
            spamLine.innerText = `[${count + 1}/40] Cloud Strife mi viejo we 🫦`;
            commandHistory.appendChild(spamLine);
            terminalOverlay.scrollTop = terminalOverlay.scrollHeight;
            count++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                terminalOverlay.style.display = 'none';
                shutdownScreen.style.display = 'flex';
                setTimeout(() => {
                    document.body.innerHTML = '';
                    document.body.style.backgroundColor = '#000000';
                }, 3500);
            }, 1200);
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
   MÓDULO 13: PAGER MULTI-SKIN
   ================================================================ */
const pagerSkinData = {
    gta3: {
        brand: "LIBERTY CITY WIRELESS", title: "LC-PAGER", sticker: "🚕",
        messages: [
            "[8-BALL]: 'Tengo las bombas listas en Harwood.'",
            "[EL BURRO]: 'Tengo un trabajo de carreras.'",
            "[LCPD]: 'Unidad 12, sospechoso huyendo.'",
            "[LUIGI]: 'Vení al Club Sex-Jadd.'",
            "[PORTLAND]: 'El puente Callahan cerrado.'"
        ]
    },
    argentina: {
        brand: "LA SCALONETA 100% CRIOLLO", title: "MATE-PAGER", sticker: "🧉",
        messages: [
            "🇦🇷 [Yaoilover]: 'Prendé el fuego pibe.'",
            "⚽ [Scaloni]: 'Muchachos, hoy se juega con el alma.'",
            "🏆 [Dibu]: 'Mirá que te como, hermano.'",
            "🎵 [Cumbia]: 'Sonando la cumbia.'",
            "🥩 [La Vaga]: 'Saludos desde la pileta.'"
        ]
    },
    matrix: {
        brand: "NEBUCHADNEZZAR COMM", title: "MATRIX-NET", sticker: "🕶️",
        messages: [
            "[Morpheus]: 'Tomás la pastilla roja.'",
            "[Trinity]: 'El agente Smith está rastreando.'",
            "[Cypher]: 'La ignorancia es una bendición.'",
            "[System]: 'Conexión cuántica establecida.'"
        ]
    },
    classic: {
        brand: "MOTOROLA BEEPER 90s", title: "BEEPER-90", sticker: "📟",
        messages: [
            "🚨 [Estado]: Disfrutando el Sol 🌴",
            "📩 [YaoiLover]: 'Llamame al teléfono.'",
            "⚠️ [Sistema]: Mensaje de prueba P2P."
        ]
    }
};

let currentSkin = 'gta3';
let currentMsgIdx = 0;
let isBacklightOn = true;
let pagerBattery = 98;

function setPagerSkin(skinName) {
    currentSkin = skinName;
    currentMsgIdx = 0;
    document.querySelectorAll('.skin-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const chassis = document.getElementById('pager-hardware');
    chassis.className = `pager-chassis skin-${skinName}`;
    const data = pagerSkinData[skinName];
    document.getElementById('pager-brand-display').innerText = data.brand;
    document.getElementById('pager-skin-title').innerText = data.title;
    document.getElementById('pager-sticker-slot').innerText = data.sticker;
    updatePagerLCD();
    playPagerSFXForSkin(skinName);
}

function updatePagerLCD() {
    const data = pagerSkinData[currentSkin];
    document.getElementById('pager-display-text').innerText = data.messages[currentMsgIdx];
    document.getElementById('pager-msg-counter').innerText = `MSG: ${currentMsgIdx + 1}/${data.messages.length}`;
}

function pagerNextMsg() {
    const max = pagerSkinData[currentSkin].messages.length;
    currentMsgIdx = (currentMsgIdx + 1) % max;
    updatePagerLCD();
    playTone(900, 0.04);
}

function pagerPrevMsg() {
    const max = pagerSkinData[currentSkin].messages.length;
    currentMsgIdx = (currentMsgIdx - 1 + max) % max;
    updatePagerLCD();
    playTone(700, 0.04);
}

function togglePagerLight() {
    isBacklightOn = !isBacklightOn;
    const box = document.getElementById('pager-lcd-box');
    if (isBacklightOn) { box.classList.remove('backlight-off'); box.classList.add('backlight-on'); }
    else { box.classList.remove('backlight-on'); box.classList.add('backlight-off'); }
    playTone(1200, 0.03);
}

function chargePagerBattery() {
    pagerBattery = 100;
    document.getElementById('pager-battery-text').innerText = `🔋 100%`;
    alert("⚡ ¡Batería cargada!");
    playTone(1500, 0.1);
}

function playPagerAlert() {
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    if (currentSkin === 'gta3') {
        playTone(1000, 0.1);
        setTimeout(() => playTone(1400, 0.1), 120);
        setTimeout(() => playTone(800, 0.2), 240);
    } else if (currentSkin === 'argentina') {
        playTone(523, 0.08);
        setTimeout(() => playTone(659, 0.08), 90);
        setTimeout(() => playTone(783, 0.15), 180);
    } else {
        playTone(1200, 0.15);
    }
}

function pressPagerKey(n) {
    const inp = document.getElementById('pager-code-input');
    if (inp.value.length < 4) { inp.value += n; playTone(800, 0.03); }
}

function clearPagerKey() {
    document.getElementById('pager-code-input').value = '';
    playTone(400, 0.04);
}

function sendPagerCode() {
    const code = document.getElementById('pager-code-input').value;
    if (code === '1978' || code === '1986' || code === '2022') alert("🇦🇷 ¡MUCHACHOS! Modo Campeón.");
    else if (code === '0351') alert("🚕 CÓDIGO GTA 3.");
    else if (code.length > 0) alert(`📟 CÓDIGO [${code}] PROCESADO.`);
    document.getElementById('pager-code-input').value = '';
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
    else playTone(600, 0.05);
}

/* ================================================================
   MÓDULO 14: TAPE DECK-9000
   ================================================================ */
const cuevaTapePlaylist = [
    { id: 1, title: "01. CUEVA CYBERPUNK BEATS", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", skin: "skin-neon" },
    { id: 2, title: "02. PORTLAND NIGHTS", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", skin: "skin-gold" },
    { id: 3, title: "03. METAL SLUG MISSION", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", skin: "skin-red" }
];
let currentTapeIndex = 0;
let isTapePlaying = false;
let tapeAudio = new Audio();
let tapeCounter = 0;
let counterInterval = null;

tapeAudio.addEventListener('timeupdate', () => {
    if (!tapeAudio.duration) return;
    const currSecs = tapeAudio.currentTime;
    const totalSecs = tapeAudio.duration;
    document.getElementById('current-time-text').innerText = formatTapeTime(currSecs);
    document.getElementById('total-duration-text').innerText = formatTapeTime(totalSecs);
    const pct = (currSecs / totalSecs) * 100;
    document.getElementById('progress-fill').style.width = `${pct}%`;
    updateSpoolSizes(pct / 100);
});

tapeAudio.addEventListener('ended', () => ejectCassette());

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
    tapeAudio.playbackRate = parseFloat(document.getElementById('tape-pitch-select').value);
    document.getElementById('cassette-title-display').innerText = track.title;
    document.getElementById('deck-song-name').innerText = track.title;
    document.getElementById('direct-track-input').value = index + 1;
    document.getElementById('active-cassette').className = `cassette-body ${track.skin}`;
    resetTapeCounter();
}

function playTape() {
    if (!tapeAudio.src) loadTapeTrack(0);
    tapeAudio.play();
    isTapePlaying = true;
    document.getElementById('deck-door').className = 'deck-door-chamber playing';
    document.querySelectorAll('.piano-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-tape-play').classList.add('active');
    startCounter();
    startVUMeters();
    playMechanicalSFX('click');
}

function pauseTape() {
    tapeAudio.pause();
    isTapePlaying = false;
    document.getElementById('deck-door').className = 'deck-door-chamber';
    stopCounter();
    playMechanicalSFX('click');
}

function stopTape() {
    tapeAudio.pause();
    tapeAudio.currentTime = 0;
    isTapePlaying = false;
    document.getElementById('deck-door').className = 'deck-door-chamber';
    resetTapeCounter();
    stopCounter();
    playMechanicalSFX('clunk');
}

function ejectCassette() {
    stopTape();
    playMechanicalSFX('eject');
    const chamber = document.getElementById('deck-door');
    chamber.classList.add('ejecting');
    setTimeout(() => {
        currentTapeIndex = (currentTapeIndex + 1) % cuevaTapePlaylist.length;
        loadTapeTrack(currentTapeIndex);
        setTimeout(() => chamber.classList.remove('ejecting'), 300);
    }, 500);
}

function fastForwardTape() { if (tapeAudio.src) { tapeAudio.currentTime += 10; playMechanicalSFX('whir'); } }
function rewindTape() { if (tapeAudio.src) { tapeAudio.currentTime -= 10; playMechanicalSFX('whir'); } }

function startCounter() {
    stopCounter();
    counterInterval = setInterval(() => {
        if (isTapePlaying) {
            tapeCounter++;
            const str = String(tapeCounter % 1000).padStart(3, '0');
            document.getElementById('counter-d1').innerText = str[0];
            document.getElementById('counter-d2').innerText = str[1];
            document.getElementById('counter-d3').innerText = str[2];
        }
    }, 1000);
}

function stopCounter() { if (counterInterval) clearInterval(counterInterval); }
function resetTapeCounter() {
    tapeCounter = 0;
    document.getElementById('counter-d1').innerText = '0';
    document.getElementById('counter-d2').innerText = '0';
    document.getElementById('counter-d3').innerText = '0';
}

function updateSpoolSizes(pct) {
    const leftSize = 38 - (pct * 20);
    const rightSize = 18 + (pct * 20);
    const sLeft = document.getElementById('spool-left');
    const sRight = document.getElementById('spool-right');
    if (sLeft) { sLeft.style.width = `${leftSize}px`; sLeft.style.height = `${leftSize}px`; }
    if (sRight) { sRight.style.width = `${rightSize}px`; sRight.style.height = `${rightSize}px`; }
}

function startVUMeters() {
    if (!isTapePlaying) return;
    const leftNeedle = document.getElementById('vu-left');
    const rightNeedle = document.getElementById('vu-right');
    if (leftNeedle) leftNeedle.style.transform = `rotate(${Math.floor(Math.random() * 60) - 30}deg)`;
    if (rightNeedle) rightNeedle.style.transform = `rotate(${Math.floor(Math.random() * 60) - 30}deg)`;
    requestAnimationFrame(startVUMeters);
}

function playMechanicalSFX(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        if (type === 'click') { osc.frequency.value = 180; gain.gain.setValueAtTime(0.08, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04); osc.start(); osc.stop(ctx.currentTime + 0.04); }
        else if (type === 'eject') { osc.frequency.value = 320; gain.gain.setValueAtTime(0.12, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18); osc.start(); osc.stop(ctx.currentTime + 0.18); }
    } catch(e) {}
}

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
