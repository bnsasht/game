// ── HOME ANIMATION ─────────────────────────────
function initHome() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursor-trail');
  if (cursor) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      trail.style.left  = e.clientX + 'px';
      trail.style.top   = e.clientY + 'px';
    });
  }

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const particles = Array.from({length:80}, () => ({
    x: Math.random()*1400, y: Math.random()*900,
    r: Math.random()*1.8+0.3,
    vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3,
    alpha:Math.random()*0.5+0.1,
  }));

  function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0,0,W,H);
    const grd = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.7);
    grd.addColorStop(0,'rgba(255,60,95,0.05)');
    grd.addColorStop(1,'rgba(8,8,15,0)');
    ctx.fillStyle=grd; ctx.fillRect(0,0,W,H);

    particles.forEach(p => {
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=W; if(p.x>W)p.x=0;
      if(p.y<0)p.y=H; if(p.y>H)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,60,95,${p.alpha})`; ctx.fill();
    });

    for(let i=0;i<particles.length;i++) for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){
        ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle=`rgba(255,60,95,${0.07*(1-d/120)})`; ctx.lineWidth=0.5; ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  function spawnCircle(){
    const el=document.createElement('div'); el.className='diff-circle';
    const s=20+Math.random()*60;
    el.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*95}%;bottom:-80px;
      animation-duration:${8+Math.random()*12}s;animation-delay:${Math.random()*2}s;
      border-color:rgba(${Math.random()>.5?'255,60,95':'255,140,0'},0.2)`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),22000);
  }
  for(let i=0;i<6;i++) setTimeout(spawnCircle,i*400);
  setInterval(spawnCircle,1400);

  document.querySelectorAll('.btn-play,.btn-shop').forEach(b =>
    b.addEventListener('mouseenter', playHover));
}

// ── SOUND ENGINE ───────────────────────────────
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
function getAudio(){ if(!audioCtx) audioCtx=new AudioCtx(); return audioCtx; }

function playClick(){
  const ac=getAudio(), o=ac.createOscillator(), g=ac.createGain();
  o.connect(g); g.connect(ac.destination);
  o.frequency.setValueAtTime(880,ac.currentTime);
  o.frequency.exponentialRampToValueAtTime(1200,ac.currentTime+0.08);
  g.gain.setValueAtTime(0.15,ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+0.15);
  o.start(); o.stop(ac.currentTime+0.15);
}
function playHover(){
  const ac=getAudio(), o=ac.createOscillator(), g=ac.createGain();
  o.type='sine'; o.connect(g); g.connect(ac.destination);
  o.frequency.value=440;
  g.gain.setValueAtTime(0.04,ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+0.08);
  o.start(); o.stop(ac.currentTime+0.08);
}
function playFind(){
  const ac=getAudio();
  [523,659,784].forEach((f,i)=>{
    const o=ac.createOscillator(), g=ac.createGain();
    o.connect(g); g.connect(ac.destination); o.frequency.value=f;
    const t=ac.currentTime+i*0.12;
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.18,t+0.02);
    g.gain.exponentialRampToValueAtTime(0.001,t+0.25);
    o.start(t); o.stop(t+0.25);
  });
}
function playWrong(){
  const ac=getAudio(), o=ac.createOscillator(), g=ac.createGain();
  o.type='sawtooth'; o.connect(g); g.connect(ac.destination);
  o.frequency.setValueAtTime(200,ac.currentTime);
  o.frequency.exponentialRampToValueAtTime(100,ac.currentTime+0.2);
  g.gain.setValueAtTime(0.1,ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+0.2);
  o.start(); o.stop(ac.currentTime+0.2);
}
function playWin(){
  const ac=getAudio();
  [523,659,784,1047].forEach((f,i)=>{
    const o=ac.createOscillator(), g=ac.createGain();
    o.connect(g); g.connect(ac.destination); o.frequency.value=f;
    const t=ac.currentTime+i*0.15;
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.2,t+0.03);
    g.gain.exponentialRampToValueAtTime(0.001,t+0.4);
    o.start(t); o.stop(t+0.4);
  });
}

function playLose() {
  const ac = getAudio();
  [400, 350, 280, 220].forEach((f, i) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sawtooth';
    o.connect(g); g.connect(ac.destination);
    o.frequency.value = f;
    const t = ac.currentTime + i * 0.18;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.15, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.start(t); o.stop(t + 0.3);
  });
}

function playTimerWarning(){
  const ac=getAudio(), o=ac.createOscillator(), g=ac.createGain();
  o.type='square'; o.connect(g); g.connect(ac.destination);
  o.frequency.value=330;
  g.gain.setValueAtTime(0.06,ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+0.1);
  o.start(); o.stop(ac.currentTime+0.1);
}

function playPop() {
  const ac = getAudio();
  const o  = ac.createOscillator();
  const g  = ac.createGain();
  o.type = 'sine';
  o.connect(g); g.connect(ac.destination);
  o.frequency.setValueAtTime(400, ac.currentTime);
  o.frequency.exponentialRampToValueAtTime(900, ac.currentTime + 0.08);
  o.frequency.exponentialRampToValueAtTime(600, ac.currentTime + 0.15);
  g.gain.setValueAtTime(0, ac.currentTime);
  g.gain.linearRampToValueAtTime(0.3, ac.currentTime + 0.03);
  g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.2);
  o.start(); o.stop(ac.currentTime + 0.2);
}

function playHint() {
  const ac = getAudio();
  [400, 600, 800].forEach((f, i) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine';
    o.connect(g); g.connect(ac.destination);
    o.frequency.value = f;
    const t = ac.currentTime + i * 0.1;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.15, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    o.start(t); o.stop(t + 0.2);
  });
}

// ── VOICE & AMBIENT SOUNDS ─────────────────────
const correctPhrases = ['Correct!', 'You got it!', 'Nice find!', 'Great eye!', 'Spot on!'];
const wrongPhrases   = ['Nope!', 'Try again!', 'Not there!', 'Keep looking!'];

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate   = 1.1;
  u.pitch  = 1.2;
  u.volume = 0.9;
  window.speechSynthesis.speak(u);
}
function speakCorrect() {
  speak(correctPhrases[Math.floor(Math.random() * correctPhrases.length)]);
}
function speakWrong() {
  speak(wrongPhrases[Math.floor(Math.random() * wrongPhrases.length)]);
}

// ── HEARTBEAT ──────────────────────────────────
let heartbeatInterval = null;

function startHeartbeat() {
  stopHeartbeat();
  heartbeatInterval = setInterval(() => playHeartbeat(), 600);
}
function stopHeartbeat() {
  clearInterval(heartbeatInterval);
  heartbeatInterval = null;
}
function playHeartbeat() {
  const ac = getAudio();
  function beat(time) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine';
    o.connect(g); g.connect(ac.destination);
    o.frequency.setValueAtTime(60, time);
    o.frequency.exponentialRampToValueAtTime(40, time + 0.1);
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(0.4, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    o.start(time); o.stop(time + 0.15);
  }
  const now = ac.currentTime;
  beat(now);
  beat(now + 0.18);
}

// ── AMBIENT MUSIC ──────────────────────────────
let ambientNode = null;
let ambientGain = null;

function startAmbient() {
  if (ambientNode) return;
  const ac = getAudio();

  ambientGain = ac.createGain();
  ambientGain.gain.value = 0.07;
  ambientGain.connect(ac.destination);

  // this is pattern for exciting music
  const pattern = [
    523, 659, 784, 1047,   // C major arp up
    988, 784, 659, 523,    // back down
    587, 740, 880, 1175,   // D major arp up
    1047, 880, 740, 587,   // back down
  ];

  let step = 0;

  function playNote() {
    const o  = ac.createOscillator();
    const g  = ac.createGain();
    const lfo = ac.createOscillator(); // adds vibrato
    const lfoGain = ac.createGain();

    lfo.frequency.value = 5;
    lfoGain.gain.value  = 3;
    lfo.connect(lfoGain);
    lfoGain.connect(o.frequency);

    o.type = step % 8 < 4 ? 'triangle' : 'sine'; // alternates tone texture
    o.connect(g);
    g.connect(ambientGain);

    const freq = pattern[step % pattern.length];
    o.frequency.value = freq;

    const t = ac.currentTime;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.6, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);

    lfo.start(t); lfo.stop(t + 0.55);
    o.start(t);   o.stop(t + 0.55);

    step++;
  }

  playNote();
  ambientNode = setInterval(playNote, 280); // making music faster 
}

function stopAmbient() {
  clearInterval(ambientNode);
  ambientNode = null;
  if (ambientGain) {
    try {
      ambientGain.gain.setValueAtTime(ambientGain.gain.value, getAudio().currentTime);
      ambientGain.gain.exponentialRampToValueAtTime(0.001, getAudio().currentTime + 0.8);
    } catch(e) {}
    ambientGain = null;
  }
}

// ── STATE ──────────────────────────────────────
let coins = 0;
let currentWorldIndex = 0;
let currentLevelIndex = 0;
let timerSeconds = 0;
let timerInterval = null;
let timerFrozen = false;
let differencesFound = 0;
let activeLevel = null;
let hintIndex = 0;

// ── WORLD & LEVEL DATA ─────────────────────────
const worlds = [
  theme_kathmandu,
  theme_festivals,
  theme_himalaya,
  theme_genz,
];

// ── SAVE / LOAD ────────────────────────────────
function saveProgress() {
  const data = {
    coins,
    unlockedWorlds: worlds.map(w => w.unlocked || false),
    levelProgress: worlds.map(w => w.levels.map(l => l.completed || false)),
    earnedSpots: worlds.map(w => w.levels.map(l =>
      l.hotspots.map(h => h.coinEarned || false)
    ))
  };
  localStorage.setItem('eyeq_save', JSON.stringify(data));
}

function loadProgress() {
  const raw = localStorage.getItem('eyeq_save');
  if (!raw) {
    worlds[0].unlocked = true;
    worlds[1].unlocked = true;
    return;
  }
  const data = JSON.parse(raw);
  coins = data.coins || 0;
  worlds.forEach((w, wi) => {
  w.unlocked = data.unlockedWorlds[wi] || false;
  w.levels.forEach((l, li) => {
    l.completed = data.levelProgress[wi]?.[li] || false;
    l.hotspots.forEach((h, hi) => {
      h.coinEarned = data.earnedSpots?.[wi]?.[li]?.[hi] || false;
    });
  });
});
  worlds[0].unlocked = true;
  worlds[1].unlocked = true;
}

// ── SCREEN SWITCHING ───────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  updateAllCoinDisplays();
  if (id === 'screen-home' || id === 'screen-worlds' || id === 'screen-levels') {
    startAmbient();
  } else {
    stopAmbient();
  }
}

function updateAllCoinDisplays() {
  ['home-coins', 'worlds-coins', 'levels-coins', 'hud-coins'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = id === 'hud-coins' ? `🪙 ${coins}` : coins;
  });
}

// ── WORLD SELECT ───────────────────────────────
function renderWorlds() {
  const grid = document.getElementById('worlds-grid');
  grid.innerHTML = '';

  worlds.forEach((world, wi) => {
    const completed = world.levels.filter(l => l.completed).length;
    const total = world.levels.length;
    const isUnlocked = world.unlocked;

    const card = document.createElement('div');
    card.className = 'world-card' + (isUnlocked ? '' : ' locked');

    card.innerHTML = `
      <div class="world-thumb-placeholder">${world.emoji}</div>
      <div class="world-info">
        <h3>${world.name}</h3>
        <p>${world.description}</p>
        <div class="world-meta">
          <span class="world-progress">${completed}/${total} levels</span>
          ${world.premium
            ? `<span class="world-tag-premium">⭐ Premium</span>`
            : `<span class="world-tag-free">Free</span>`}
        </div>
      </div>
      ${!isUnlocked ? `<div class="lock-banner">🔒 ${world.coinPrice}🪙 or ${world.price}</div>` : ''}
    `;

    card.onclick = () => {
  playPop();
  isUnlocked ? openWorldLevels(wi) : openUnlockPrompt(wi);
};
    grid.appendChild(card);
  });
}

// ── LEVEL SELECT ───────────────────────────────
function openWorldLevels(wi) {
  currentWorldIndex = wi;
  const world = worlds[wi];
  document.getElementById('level-select-title').textContent = `${world.emoji} ${world.name}`;

  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';

  world.levels.forEach((lvl, li) => {
    const isLocked = (li > 0 && !world.levels[li - 1].completed) || lvl.completed;
    const card = document.createElement('div');
    card.className = 'level-card' + (isLocked ? ' locked' : '') + (lvl.completed ? ' completed' : '');
    card.innerHTML = `
      <div class="level-number">${isLocked ? '🔒' : li + 1}</div>
      <div class="level-stars">${starsDisplay(lvl)}</div>
      <div class="level-difficulty">${lvl.difficulty}</div>
    `;
    if (!isLocked) card.onclick = () => startLevel(wi, li);
    grid.appendChild(card);
  });

  showScreen('screen-levels');
}

function starsDisplay(lvl) {
  const map = { Easy: '★☆☆', Medium: '★★☆', Hard: '★★★', Expert: '★★★+' };
  return map[lvl.difficulty] || '';
}

// ── GAME START ─────────────────────────────────
function startLevel(wi, li) {
  currentWorldIndex = wi;
  currentLevelIndex = li;

  const lvl = worlds[wi].levels[li];
  activeLevel = lvl;
  differencesFound = 0;
  timerSeconds = lvl.timeLimit;
  timerFrozen = false;
  hintIndex = 0;

  lvl.hotspots.forEach(h => {
  h.found = false;
});

  document.getElementById('img-left').src  = lvl.imgLeft;
  document.getElementById('img-right').src = lvl.imgRight;
  document.getElementById('hud-level').textContent =
    `${worlds[wi].emoji} Lvl ${li + 1} — ${lvl.name}`;

  updateFoundLabel();
  updateAllCoinDisplays();
  clearMarkers();
  showScreen('screen-game');
  startTimer();
  setupClicks();
}

// ── TIMER ──────────────────────────────────────
function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timerFrozen) return;
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 10) {
      document.getElementById('hud-timer').classList.add('warning');
      playTimerWarning();
      startHeartbeat();
    }
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      stopHeartbeat();
      playLose();
      showScreen('screen-lose');
      setTimeout(launchSadRain, 300);
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById('hud-timer').textContent = `⏱ ${timerSeconds}s`;
}

// ── CLICK DETECTION ────────────────────────────
function setupClicks() {
  ['img-left', 'img-right'].forEach(id => {
    const img = document.getElementById(id);
    const wrapper = img.parentNode;
    
    wrapper.onclick = (e) => {
      const rect = img.getBoundingClientRect();
      const pctX = (e.clientX - rect.left) / rect.width;
      const pctY = (e.clientY - rect.top)  / rect.height;
      
      // ignore clicks outside the image bounds
      if (pctX < 0 || pctX > 1 || pctY < 0 || pctY > 1) return;
      
      handleClick(pctX, pctY, e.clientX, e.clientY);
    };
  });
}

function handleClick(pctX, pctY, rawX, rawY) {
  let hit = false;
  activeLevel.hotspots.forEach(spot => {
    if (spot.found) return;
    const dist = Math.sqrt(
      Math.pow(pctX - spot.x, 2) +
      Math.pow(pctY - spot.y, 2)
    );
    if (dist <= spot.r) {
      spot.found = true;
      differencesFound++;
       if (!spot.coinEarned) {
         coins += activeLevel.coinsPerFind;
         spot.coinEarned = true;
      }
      updateAllCoinDisplays();
      updateFoundLabel();
      placeMarker(spot);
      showFeedback('✅', rawX, rawY);
      playFind();
      speakCorrect();
      saveProgress();
      hit = true;
      if (differencesFound >= activeLevel.differences) {
        clearInterval(timerInterval);
        activeLevel.completed = true;
        saveProgress();
        setTimeout(showWin, 500);
      }
    }
  });
 if (!hit) {
  coins = Math.max(0, coins - 2);
  updateAllCoinDisplays();
  saveProgress();
  showFeedback('❌ -2🪙', rawX, rawY);
  playWrong();
  speakWrong();
}
}

function clearMarkers() {
  document.querySelectorAll('.markers').forEach(m => m.innerHTML = '');
}

function placeMarker(spot) {
  ['img-left', 'img-right'].forEach(id => {
    const img = document.getElementById(id);
    const marker = document.createElement('div');
    marker.className = 'diff-marker';
    marker.style.left = (spot.x * 100) + '%';
    marker.style.top  = (spot.y * 100) + '%';
    img.parentNode.querySelector('.markers').appendChild(marker);
  });
}

// ── FEEDBACK POP ───────────────────────────────
function showFeedback(emoji, x, y) {
  const el = document.createElement('div');
  el.className = 'feedback-pop';
  el.textContent = emoji;
  el.style.left = x + 'px';
  el.style.top  = y + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

// ── WIN / NEXT ─────────────────────────────────
function showWin() {
  playWin();
  stopHeartbeat();
  const earned = activeLevel.differences * activeLevel.coinsPerFind;
  document.getElementById('win-msg').textContent =
    `+${earned} 🪙 coins earned!`;
  showScreen('screen-win');
  setTimeout(launchConfetti, 300);
}

function nextLevel() {
  const world = worlds[currentWorldIndex];
  const next = currentLevelIndex + 1;

  if (next < world.levels.length) {
    startLevel(currentWorldIndex, next);
  } else {
    alert(`🏆 You finished ${world.name}!`);
    renderWorlds();
    showScreen('screen-worlds');
  }
}

function retryLevel() {
  startLevel(currentWorldIndex, currentLevelIndex);
}

// ── POWER-UPS ──────────────────────────────────
function useFreeze() {
  if (coins < 100) { alert('Not enough coins! Buy more below.'); return; }
  coins -= 100;
  timerFrozen = true;
  updateAllCoinDisplays();
  saveProgress();
  setTimeout(() => { timerFrozen = false; }, 10000);
}

function useSkip() {
  if (coins < 500) { alert('Not enough coins! Buy more below.'); return; }
  coins -= 500;
  updateAllCoinDisplays();
  saveProgress();
  clearInterval(timerInterval);
  activeLevel.completed = true;
  saveProgress();
  nextLevel();
}

// ── SHOP ───────────────────────────────────────
function openShop() {
  document.getElementById('shop-overlay').classList.remove('hidden');
}
function closeShop() {
  document.getElementById('shop-overlay').classList.add('hidden');
}
function buyCoin(amount, price) {
  if (confirm(`Pay $${price} for ${amount} coins?\n(This is a simulated purchase)`)) {
    coins += amount;
    updateAllCoinDisplays();
    saveProgress();
    closeShop();
  }
}

// ── UNLOCK ─────────────────────────────────────
let pendingUnlockIndex = null;

function openUnlockPrompt(wi) {
  pendingUnlockIndex = wi;
  const world = worlds[wi];
  document.getElementById('unlock-title').textContent = `${world.emoji} ${world.name}`;
  document.getElementById('unlock-desc').textContent = world.description;
  document.getElementById('unlock-coins-btn').textContent = `Unlock with ${world.coinPrice} 🪙`;
  document.getElementById('unlock-money-btn').textContent = `Buy for ${world.price}`;
  document.getElementById('unlock-overlay').classList.remove('hidden');
}

function closeUnlock() {
  document.getElementById('unlock-overlay').classList.add('hidden');
  pendingUnlockIndex = null;
}

function unlockWithCoins() {
  const world = worlds[pendingUnlockIndex];
  if (coins < world.coinPrice) {
    alert(`You need ${world.coinPrice} coins. You have ${coins}.`);
    return;
  }
  coins -= world.coinPrice;
  world.unlocked = true;
  saveProgress();
  closeUnlock();
  renderWorlds();
  updateAllCoinDisplays();
}

function unlockWithMoney() {
  if (confirm(`Buy ${worlds[pendingUnlockIndex].name} for ${worlds[pendingUnlockIndex].price}?`)) {
    worlds[pendingUnlockIndex].unlocked = true;
    saveProgress();
    closeUnlock();
    renderWorlds();
  }
}

// ── HELPERS ────────────────────────────────────
function updateFoundLabel() {
  document.getElementById('found-label').textContent =
    `Found: ${differencesFound} / ${activeLevel.differences}`;
}

function quitLevel() {
  const confirmed = confirm('Quit this level? Your progress will be lost.');
  if (!confirmed) return;
  clearInterval(timerInterval);
  stopHeartbeat();
  showScreen('screen-worlds');
}

function useHint() {
  if (!activeLevel) return;
  if (coins < 40) { alert('You need 40 coins for a hint!'); return; }

  const hints = activeLevel.hints || [];
  if (hintIndex >= hints.length) {
    alert('No more hints available for this level!');
    return;
  }

  coins -= 40;
  updateAllCoinDisplays();
  saveProgress();

  const hintText = hints[hintIndex];
  hintIndex++;
  playHint();

  const hintBox = document.createElement('div');
  hintBox.id = 'hint-box';
  hintBox.innerHTML = `
    <div id="hint-inner">
      <span>💡</span>
      <p><strong>Hint ${hintIndex}:</strong> ${hintText}</p>
    </div>
  `;
  document.body.appendChild(hintBox);
  setTimeout(() => hintBox.remove(), 4000);
}

// ── VISUAL EFFECTS ─────────────────────────────
function launchConfetti() {
  const colors = ['#ff3c5f','#ffd700','#4caf50','#00bcd4','#ff8c00','#e040fb'];
  for (let i = 0; i < 120; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      const size = 8 + Math.random() * 10;
      el.style.cssText = `
        position:fixed;
        left:${Math.random() * 100}%;
        top:-20px;
        width:${size}px;
        height:${size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        z-index:9999;
        pointer-events:none;
        animation:confettiFall ${1.5 + Math.random() * 2}s ease-in forwards;
        transform:rotate(${Math.random() * 360}deg);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 30);
  }
}

function launchSadRain() {
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed;
        left:${Math.random() * 100}%;
        top:-20px;
        width:2px;
        height:${20 + Math.random() * 30}px;
        background:rgba(100,160,255,${0.3 + Math.random() * 0.4});
        z-index:9999;
        pointer-events:none;
        border-radius:2px;
        animation:rainFall ${0.8 + Math.random() * 0.8}s linear forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }, i * 60);
  }
}


// ── HINT WHEEL ─────────────────────────────────
let wheelSpinning = false;
let wheelAngle = 0;
let wheelHints = [];

function openHintWheel() {
  if (!activeLevel) return;
  if (coins < 40) { alert('You need 40 coins to spin!'); return; }

  wheelHints = activeLevel.hints || [
    'Look at the top half',
    'Check the colors',
    'Something on the right changed',
    'Look at the bottom',
    'Check near the edges',
    'Something is missing',
  ];

  document.getElementById('hint-result').classList.add('hidden');
  document.getElementById('spin-btn').disabled = false;
  document.getElementById('spin-btn').textContent = '🎰 Spin! (40🪙)';
  document.getElementById('hint-wheel-overlay').classList.remove('hidden');
  drawWheel(wheelAngle);
}

function closeHintWheel() {
  document.getElementById('hint-wheel-overlay').classList.add('hidden');
}

function drawWheel(rotation) {
  const canvas = document.getElementById('wheel-canvas');
  const ctx = canvas.getContext('2d');
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r  = cx - 10;
  const n  = wheelHints.length;
  const arc = (2 * Math.PI) / n;

  const colors = [
    '#ff3c5f','#ff8c00','#ffd700','#4caf50',
    '#00bcd4','#7c4dff','#e040fb','#ff5722','#00e676'
  ];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  wheelHints.forEach((hint, i) => {
    const start = rotation + i * arc;
    const end   = start + arc;

    // Slice
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.strokeStyle = '#0f0f1a';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Number label
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 18px Syne, sans-serif';
    ctx.fillText(i + 1, r - 12, 6);
    ctx.restore();
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, 2 * Math.PI);
  ctx.fillStyle = '#0f0f1a';
  ctx.fill();
  ctx.strokeStyle = '#ffd700';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 13px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('EyeQ', cx, cy + 5);
}

function spinWheel() {
  if (wheelSpinning) return;
  if (coins < 40) { alert('Not enough coins!'); return; }

  coins -= 40;
  updateAllCoinDisplays();
  saveProgress();

  wheelSpinning = true;
  document.getElementById('spin-btn').disabled = true;
  document.getElementById('hint-result').classList.add('hidden');

  playWheelSpin();

  const n = wheelHints.length;
  const arc = (2 * Math.PI) / n;

  // Random winning segment
  const winner = Math.floor(Math.random() * n);

  // Spin 5-8 full rotations then land on winner
  const extraSpins = (5 + Math.random() * 3) * 2 * Math.PI;
  const targetAngle = extraSpins + (2 * Math.PI - winner * arc - arc / 2);

  const startAngle  = wheelAngle;
  const totalChange = targetAngle;
  const duration    = 4000;
  const startTime   = performance.now();

  function animate(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    wheelAngle = startAngle + totalChange * ease;

    drawWheel(wheelAngle);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      wheelSpinning = false;
      wheelAngle = wheelAngle % (2 * Math.PI);
      showWheelResult(winner);
    }
  }

  requestAnimationFrame(animate);
}

function showWheelResult(index) {
  playWheelWin();
  const hint = wheelHints[index];
  const resultEl = document.getElementById('hint-result');
  document.getElementById('hint-result-text').textContent =
    `Hint ${index + 1}: ${hint}`;
  resultEl.classList.remove('hidden');
  document.getElementById('spin-btn').textContent = '🎰 Spin Again! (40🪙)';
  document.getElementById('spin-btn').disabled = false;
}

// ── WHEEL SOUNDS ───────────────────────────────
function playWheelSpin() {
  const ac = getAudio();
  let tick = 0;
  const maxTicks = 30;

  function playTick() {
    if (tick >= maxTicks) return;
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'triangle';
    o.frequency.value = 300 + tick * 15;
    o.connect(g); g.connect(ac.destination);
    g.gain.setValueAtTime(0.1, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.05);
    o.start(ac.currentTime); o.stop(ac.currentTime + 0.05);

    tick++;
    // Ticks slow down as wheel slows
    const delay = 50 + tick * 8;
    setTimeout(playTick, delay);
  }
  playTick();
}

function playWheelWin() {
  const ac = getAudio();
  [600, 800, 1000, 1200].forEach((f, i) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine';
    o.connect(g); g.connect(ac.destination);
    o.frequency.value = f;
    const t = ac.currentTime + i * 0.1;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.2, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.start(t); o.stop(t + 0.3);
  });
}

// ── INIT ───────────────────────────────────────
loadProgress();
renderWorlds();
updateAllCoinDisplays();
initHome();
startAmbient();
// --- MANE (PRAYER WHEEL) SPIN LOGIC ---

isManeSpinning = false;
const MANE_SPIN_COST = 56;

// The official matched reward array dataset
const maneRewards = [
  { text: "+20", sub: "Coins", type: "coins", val: 20 },
  { text: "+50", sub: "Coins", type: "coins", val: 50 },
  { text: "+100", sub: "Coins", type: "coins", val: 100 },
  { text: "Try Again", sub: "Bonus", type: "event", val: 0 },
  { text: "-30", sub: "Coins", type: "coins", val: -30 },
  { text: "-50", sub: "Coins", type: "coins", val: -50 },
  { text: "+30", sub: "Coins", type: "coins", val: 30 }
];

// Initialize carousel items on bootup load sequence
function initManeCarousel() {
  const track = document.getElementById('carousel-track-scroll');
  if (!track) return;
  
  track.innerHTML = '';
  // Populate the strip sequence
  maneRewards.forEach(reward => {
    const node = document.createElement('div');
    node.className = 'carousel-node';
    node.innerHTML = `<div>${reward.text}</div><small>${reward.sub}</small>`;
    track.appendChild(node);
  });
}

function openManeModal() {
  document.getElementById('mane-overlay').classList.remove('hidden');
  document.getElementById('mane-result-container').classList.add('hidden');
  initManeCarousel(); // Build clean track nodes layout
  updateAllCoinDisplays(); 
}

function closeManeModal() {
  if (isManeSpinning) return; 
  document.getElementById('mane-overlay').classList.add('hidden');
}

function spinMane() {
  if (isManeSpinning) return;

  if (coins < MANE_SPIN_COST) {
    alert("❌ Not enough coins! You need 56 coins to spin the Mane.");
    return;
  }

  // Deduct asset cost allocation safely
  coins -= MANE_SPIN_COST;
  updateAllCoinDisplays();
  saveProgress();

  isManeSpinning = true;
  
  const cylinder = document.getElementById('mane-cylinder');
  const track = document.getElementById('carousel-track-scroll');
  const resultContainer = document.getElementById('mane-result-container');
  
  if (resultContainer) resultContainer.classList.add('hidden');
  if (cylinder) cylinder.classList.add('wheel-spinning-fast');

  // Choose the item index before starting execution loops
  const winningIndex = Math.floor(Math.random() * maneRewards.length);
  const targetReward = maneRewards[winningIndex];

  let ticks = 0;
  const maxTicks = 24;
  
  // High-speed carousel blurring execution loops
  const simulationInterval = setInterval(() => {
    ticks++;
    // Jitter slide offsets to look dynamic
    const randomShift = Math.floor(Math.random() * 80) - 40;
    if (track) track.style.transform = `translateX(calc(-50% + ${randomShift}px))`;
    
    if (ticks >= maxTicks) {
      clearInterval(simulationInterval);
      
      // Stop velocity shifts
      if (cylinder) cylinder.classList.remove('wheel-spinning-fast');
      
      // PERFECT SNAP FIX: Calculate the exact horizontal offset shift 
      // required to align the chosen index directly inside the golden pointer frame
      const nodeWidth = 90; // Matches your tracking node dimension width profiles
      const centerIndexOffset = Math.floor(maneRewards.length / 2);
      const shiftSteps = winningIndex - centerIndexOffset;
      const finalPixelAlignment = -(shiftSteps * nodeWidth);
      
      // Hard snap execution onto screen display layer frames
      if (track) {
        track.style.transform = `translateX(calc(-50% + ${finalPixelAlignment}px))`;
      }

      // Render the matching textual banner payout information
      if (resultContainer) {
        const rewardLabel = targetReward.type === "coins" 
          ? `${targetReward.text} ${targetReward.sub}` 
          : `${targetReward.text} ${targetReward.sub}`;
          
        document.getElementById('mane-reward-text').innerText = "Blessed With: " + rewardLabel;
        resultContainer.classList.remove('hidden');
      }

      // Disburse financial assets safely
      applyManeReward(targetReward);
      isManeSpinning = false;
    }
  }, 100);
}

function applyManeReward(rewardItem) {
  if (rewardItem.type === "coins") {
    coins += rewardItem.val;
  } else {
    console.log(`${rewardItem.text} balance item applied directly to inventory registers.`);
  }
  updateAllCoinDisplays();
  saveProgress();
}