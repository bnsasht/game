// ── STATE ──────────────────────────────────────────────────────────────
let coins = 0;
let currentWorldIndex = 0;
let currentLevelIndex = 0;
let timerSeconds = 0;
let timerInterval = null;
let timerFrozen = false;
let differencesFound = 0;
let activeLevel = null;

// ── WORLD & LEVEL DATA ─────────────────────────────────────────────────
const worlds = [
  {
    id: 'kathmandu',
    name: 'Kathmandu Streets',
    emoji: '🏙',
    description: 'Busy alleys, street vendors, and hidden temples',
    premium: false,
    levels: [
      {
        name: 'Ason Bazaar',
        difficulty: 'Easy',
        timeLimit: 90,
        differences: 3,
        coinsPerFind: 10,
        imgLeft: 'images/kathmandu/1_original.jpg',
        imgRight: 'images/kathmandu/1_changed.jpg',
        hotspots: [
          { x: 120, y: 95, r: 35 },
          { x: 280, y: 180, r: 35 },
          { x: 75,  y: 260, r: 35 },
        ]
      },
      {
        name: 'Thamel Alley',
        difficulty: 'Easy',
        timeLimit: 80,
        differences: 3,
        coinsPerFind: 10,
        imgLeft: 'images/kathmandu/2_original.jpg',
        imgRight: 'images/kathmandu/2_changed.jpg',
        hotspots: [
          { x: 200, y: 130, r: 35 },
          { x: 310, y: 90,  r: 35 },
          { x: 150, y: 280, r: 35 },
        ]
      },
      {
        name: 'Durbar Square',
        difficulty: 'Medium',
        timeLimit: 70,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/kathmandu/3_original.jpg',
        imgRight: 'images/kathmandu/3_changed.jpg',
        hotspots: [
          { x: 90,  y: 70,  r: 30 },
          { x: 220, y: 160, r: 30 },
          { x: 300, y: 240, r: 30 },
          { x: 130, y: 310, r: 30 },
        ]
      },
      {
        name: 'Morning Market',
        difficulty: 'Medium',
        timeLimit: 65,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/kathmandu/4_original.jpg',
        imgRight: 'images/kathmandu/4_changed.jpg',
        hotspots: [
          { x: 180, y: 100, r: 30 },
          { x: 260, y: 200, r: 30 },
          { x: 80,  y: 290, r: 30 },
          { x: 320, y: 150, r: 30 },
        ]
      },
      {
        name: 'Swayambhu Steps',
        difficulty: 'Hard',
        timeLimit: 55,
        differences: 5,
        coinsPerFind: 20,
        imgLeft: 'images/kathmandu/5_original.jpg',
        imgRight: 'images/kathmandu/5_changed.jpg',
        hotspots: [
          { x: 100, y: 80,  r: 28 },
          { x: 240, y: 130, r: 28 },
          { x: 320, y: 220, r: 28 },
          { x: 160, y: 290, r: 28 },
          { x: 60,  y: 330, r: 28 },
        ]
      },
    ]
  },
  {
    id: 'indrajatra',
    name: 'Indra Jatra',
    emoji: '🎭',
    description: 'Masks, chariots, and festival chaos',
    premium: false,
    levels: [
      {
        name: 'Kumari Chariot',
        difficulty: 'Easy',
        timeLimit: 85,
        differences: 3,
        coinsPerFind: 10,
        imgLeft: 'images/indrajatra/1_original.jpg',
        imgRight: 'images/indrajatra/1_changed.jpg',
        hotspots: [
          { x: 140, y: 110, r: 35 },
          { x: 270, y: 195, r: 35 },
          { x: 90,  y: 275, r: 35 },
        ]
      },
      {
        name: 'Lakhe Dance',
        difficulty: 'Easy',
        timeLimit: 80,
        differences: 3,
        coinsPerFind: 10,
        imgLeft: 'images/indrajatra/2_original.jpg',
        imgRight: 'images/indrajatra/2_changed.jpg',
        hotspots: [
          { x: 200, y: 90,  r: 35 },
          { x: 100, y: 200, r: 35 },
          { x: 290, y: 270, r: 35 },
        ]
      },
      {
        name: 'Devi Procession',
        difficulty: 'Medium',
        timeLimit: 70,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/indrajatra/3_original.jpg',
        imgRight: 'images/indrajatra/3_changed.jpg',
        hotspots: [
          { x: 120, y: 85,  r: 30 },
          { x: 230, y: 150, r: 30 },
          { x: 310, y: 230, r: 30 },
          { x: 80,  y: 300, r: 30 },
        ]
      },
      {
        name: 'Newari Feast',
        difficulty: 'Medium',
        timeLimit: 65,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/indrajatra/4_original.jpg',
        imgRight: 'images/indrajatra/4_changed.jpg',
        hotspots: [
          { x: 170, y: 120, r: 30 },
          { x: 280, y: 90,  r: 30 },
          { x: 95,  y: 250, r: 30 },
          { x: 330, y: 310, r: 30 },
        ]
      },
      {
        name: 'Night Finale',
        difficulty: 'Hard',
        timeLimit: 55,
        differences: 5,
        coinsPerFind: 20,
        imgLeft: 'images/indrajatra/5_original.jpg',
        imgRight: 'images/indrajatra/5_changed.jpg',
        hotspots: [
          { x: 110, y: 75,  r: 28 },
          { x: 250, y: 120, r: 28 },
          { x: 180, y: 230, r: 28 },
          { x: 330, y: 195, r: 28 },
          { x: 70,  y: 320, r: 28 },
        ]
      },
    ]
  },
  {
    id: 'himalaya',
    name: 'Himalayan Trek',
    emoji: '🏔',
    description: 'Snow peaks, suspension bridges, tea houses',
    premium: true,
    price: '$1.99',
    coinPrice: 200,
    levels: [
      {
        name: 'Base Camp Trail',
        difficulty: 'Medium',
        timeLimit: 70,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/himalaya/1_original.jpg',
        imgRight: 'images/himalaya/1_changed.jpg',
        hotspots: [
          { x: 130, y: 100, r: 30 },
          { x: 260, y: 170, r: 30 },
          { x: 80,  y: 270, r: 30 },
          { x: 310, y: 300, r: 30 },
        ]
      },
      {
        name: 'Suspension Bridge',
        difficulty: 'Medium',
        timeLimit: 65,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/himalaya/2_original.jpg',
        imgRight: 'images/himalaya/2_changed.jpg',
        hotspots: [
          { x: 190, y: 80,  r: 30 },
          { x: 290, y: 190, r: 30 },
          { x: 120, y: 260, r: 30 },
          { x: 250, y: 330, r: 30 },
        ]
      },
      {
        name: 'Tea House Dusk',
        difficulty: 'Hard',
        timeLimit: 60,
        differences: 5,
        coinsPerFind: 20,
        imgLeft: 'images/himalaya/3_original.jpg',
        imgRight: 'images/himalaya/3_changed.jpg',
        hotspots: [
          { x: 100, y: 90,  r: 28 },
          { x: 220, y: 140, r: 28 },
          { x: 310, y: 210, r: 28 },
          { x: 155, y: 290, r: 28 },
          { x: 350, y: 330, r: 28 },
        ]
      },
      {
        name: 'Glacier Crossing',
        difficulty: 'Hard',
        timeLimit: 55,
        differences: 5,
        coinsPerFind: 20,
        imgLeft: 'images/himalaya/4_original.jpg',
        imgRight: 'images/himalaya/4_changed.jpg',
        hotspots: [
          { x: 85,  y: 110, r: 28 },
          { x: 200, y: 80,  r: 28 },
          { x: 330, y: 175, r: 28 },
          { x: 140, y: 280, r: 28 },
          { x: 290, y: 320, r: 28 },
        ]
      },
      {
        name: 'Summit View',
        difficulty: 'Expert',
        timeLimit: 45,
        differences: 6,
        coinsPerFind: 25,
        imgLeft: 'images/himalaya/5_original.jpg',
        imgRight: 'images/himalaya/5_changed.jpg',
        hotspots: [
          { x: 75,  y: 80,  r: 25 },
          { x: 170, y: 130, r: 25 },
          { x: 290, y: 100, r: 25 },
          { x: 120, y: 240, r: 25 },
          { x: 250, y: 290, r: 25 },
          { x: 340, y: 220, r: 25 },
        ]
      },
    ]
  },
  {
    id: 'genz',
    name: 'Gen Z Protest',
    emoji: '✊',
    description: 'Placards, paint, and people power',
    premium: true,
    price: '$2.49',
    coinPrice: 300,
    levels: [
      {
        name: 'Ratna Park Rally',
        difficulty: 'Medium',
        timeLimit: 70,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/genz/1_original.jpg',
        imgRight: 'images/genz/1_changed.jpg',
        hotspots: [
          { x: 155, y: 100, r: 30 },
          { x: 275, y: 180, r: 30 },
          { x: 95,  y: 265, r: 30 },
          { x: 320, y: 310, r: 30 },
        ]
      },
      {
        name: 'Slogan Wall',
        difficulty: 'Medium',
        timeLimit: 65,
        differences: 4,
        coinsPerFind: 15,
        imgLeft: 'images/genz/2_original.jpg',
        imgRight: 'images/genz/2_changed.jpg',
        hotspots: [
          { x: 110, y: 130, r: 30 },
          { x: 240, y: 90,  r: 30 },
          { x: 310, y: 235, r: 30 },
          { x: 175, y: 300, r: 30 },
        ]
      },
      {
        name: 'Paint Splash',
        difficulty: 'Hard',
        timeLimit: 60,
        differences: 5,
        coinsPerFind: 20,
        imgLeft: 'images/genz/3_original.jpg',
        imgRight: 'images/genz/3_changed.jpg',
        hotspots: [
          { x: 90,  y: 85,  r: 28 },
          { x: 210, y: 155, r: 28 },
          { x: 330, y: 105, r: 28 },
          { x: 145, y: 275, r: 28 },
          { x: 295, y: 310, r: 28 },
        ]
      },
      {
        name: 'Midnight March',
        difficulty: 'Hard',
        timeLimit: 55,
        differences: 5,
        coinsPerFind: 20,
        imgLeft: 'images/genz/4_original.jpg',
        imgRight: 'images/genz/4_changed.jpg',
        hotspots: [
          { x: 130, y: 95,  r: 28 },
          { x: 255, y: 145, r: 28 },
          { x: 80,  y: 250, r: 28 },
          { x: 340, y: 200, r: 28 },
          { x: 195, y: 320, r: 28 },
        ]
      },
      {
        name: 'The Final Stand',
        difficulty: 'Expert',
        timeLimit: 45,
        differences: 6,
        coinsPerFind: 25,
        imgLeft: 'images/genz/5_original.jpg',
        imgRight: 'images/genz/5_changed.jpg',
        hotspots: [
          { x: 70,  y: 100, r: 25 },
          { x: 180, y: 75,  r: 25 },
          { x: 295, y: 130, r: 25 },
          { x: 115, y: 250, r: 25 },
          { x: 255, y: 285, r: 25 },
          { x: 345, y: 215, r: 25 },
        ]
      },
    ]
  }
];

// ── SAVE / LOAD ────────────────────────────────────────────────────────
function saveProgress() {
  const data = {
    coins,
    unlockedWorlds: worlds.map(w => w.unlocked || false),
    levelProgress: worlds.map(w => w.levels.map(l => l.completed || false))
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
    });
  });
  // Free worlds always unlocked
  worlds[0].unlocked = true;
  worlds[1].unlocked = true;
}

// ── SCREEN SWITCHING ───────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  updateAllCoinDisplays();
}

function updateAllCoinDisplays() {
  ['home-coins', 'worlds-coins', 'levels-coins', 'hud-coins'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = id === 'hud-coins' ? `🪙 ${coins}` : coins;
  });
}

// ── WORLD SELECT ───────────────────────────────────────────────────────
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

    card.onclick = () => isUnlocked ? openWorldLevels(wi) : openUnlockPrompt(wi);
    grid.appendChild(card);
  });
}

// ── LEVEL SELECT ───────────────────────────────────────────────────────
function openWorldLevels(wi) {
  currentWorldIndex = wi;
  const world = worlds[wi];
  document.getElementById('level-select-title').textContent = `${world.emoji} ${world.name}`;

  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';

  world.levels.forEach((lvl, li) => {
    const isLocked = li > 0 && !world.levels[li - 1].completed;
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

// ── GAME START ─────────────────────────────────────────────────────────
function startLevel(wi, li) {
  currentWorldIndex = wi;
  currentLevelIndex = li;

  const lvl = worlds[wi].levels[li];
  activeLevel = lvl;
  differencesFound = 0;
  timerSeconds = lvl.timeLimit;
  timerFrozen = false;

  // Reset hotspot found state
  lvl.hotspots.forEach(h => h.found = false);

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

// ── TIMER ──────────────────────────────────────────────────────────────
function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timerFrozen) return;
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 10) {
      document.getElementById('hud-timer').classList.add('warning');
    }
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      showScreen('screen-lose');
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById('hud-timer').textContent = `⏱ ${timerSeconds}s`;
}

// ── CLICK DETECTION ────────────────────────────────────────────────────
function setupClicks() {
  ['img-left', 'img-right'].forEach(id => {
    const img = document.getElementById(id);
    const fresh = img.cloneNode(true);
    img.parentNode.replaceChild(fresh, img);

    fresh.addEventListener('click', (e) => {
      const rect = fresh.getBoundingClientRect();
      // Normalize click to a 340x340 coordinate space to match hotspot data
      const scaleX = 340 / rect.width;
      const scaleY = 340 / rect.height;
      const nx = (e.clientX - rect.left) * scaleX;
      const ny = (e.clientY - rect.top)  * scaleY;
      handleClick(nx, ny, e.clientX, e.clientY);
    });
  });
}

function handleClick(nx, ny, rawX, rawY) {
  let hit = false;
  activeLevel.hotspots.forEach(spot => {
    if (spot.found) return;
    if (Math.hypot(nx - spot.x, ny - spot.y) <= spot.r) {
      spot.found = true;
      differencesFound++;
      coins += activeLevel.coinsPerFind;
      updateAllCoinDisplays();
      updateFoundLabel();
      placeMarker(spot, rawX, rawY);
      showFeedback('✅', rawX, rawY);
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

  if (!hit) showFeedback('❌', rawX, rawY);
}

// ── MARKERS ────────────────────────────────────────────────────────────
function placeMarker(spot, rawX, rawY) {
  // Place circle on both images at the percentage position
  ['img-left', 'img-right'].forEach(id => {
    const img = document.getElementById(id);
    const rect = img.getBoundingClientRect();
    const pctX = (spot.x / 340) * 100;
    const pctY = (spot.y / 340) * 100;

    const marker = document.createElement('div');
    marker.className = 'diff-marker';
    marker.style.left = pctX + '%';
    marker.style.top  = pctY + '%';

    img.parentNode.querySelector('.markers').appendChild(marker);
  });
}

function clearMarkers() {
  document.querySelectorAll('.markers').forEach(m => m.innerHTML = '');
}

// ── FEEDBACK POP ───────────────────────────────────────────────────────
function showFeedback(emoji, x, y) {
  const el = document.createElement('div');
  el.className = 'feedback-pop';
  el.textContent = emoji;
  el.style.left = x + 'px';
  el.style.top  = y + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

// ── WIN / NEXT ─────────────────────────────────────────────────────────
function showWin() {
  const earned = activeLevel.differences * activeLevel.coinsPerFind;
  document.getElementById('win-msg').textContent =
    `+${earned} 🪙 coins earned!`;
  showScreen('screen-win');
}

function nextLevel() {
  const world = worlds[currentWorldIndex];
  const next = currentLevelIndex + 1;

  if (next < world.levels.length) {
    startLevel(currentWorldIndex, next);
  } else {
    // Last level in world — go back to world select
    alert(`🏆 You finished ${world.name}!`);
    renderWorlds();
    showScreen('screen-worlds');
  }
}

function retryLevel() {
  startLevel(currentWorldIndex, currentLevelIndex);
}

// ── POWER-UPS ──────────────────────────────────────────────────────────
function useFreeze() {
  if (coins < 10) { alert('Not enough coins! Buy more below.'); return; }
  coins -= 10;
  timerFrozen = true;
  updateAllCoinDisplays();
  saveProgress();
  setTimeout(() => { timerFrozen = false; }, 10000);
}

function useSkip() {
  if (coins < 20) { alert('Not enough coins! Buy more below.'); return; }
  coins -= 20;
  updateAllCoinDisplays();
  saveProgress();
  clearInterval(timerInterval);
  activeLevel.completed = true;
  saveProgress();
  nextLevel();
}

// ── SHOP ───────────────────────────────────────────────────────────────
function openShop() {
  document.getElementById('shop-overlay').classList.remove('hidden');
}
function closeShop() {
  document.getElementById('shop-overlay').classList.add('hidden');
}
function buyCoin(amount, price) {
  // Replace this confirm() with a real payment SDK (Stripe, etc.) later
  if (confirm(`Pay $${price} for ${amount} coins?\n(This is a simulated purchase)`)) {
    coins += amount;
    updateAllCoinDisplays();
    saveProgress();
    closeShop();
  }
}

// ── UNLOCK ─────────────────────────────────────────────────────────────
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
  // Replace with real payment SDK later
  if (confirm(`Buy ${worlds[pendingUnlockIndex].name} for ${worlds[pendingUnlockIndex].price}?`)) {
    worlds[pendingUnlockIndex].unlocked = true;
    saveProgress();
    closeUnlock();
    renderWorlds();
  }
}

// ── HELPERS ────────────────────────────────────────────────────────────
function updateFoundLabel() {
  document.getElementById('found-label').textContent =
    `Found: ${differencesFound} / ${activeLevel.differences}`;
}

// ── INIT ───────────────────────────────────────────────────────────────
loadProgress();
renderWorlds();
updateAllCoinDisplays();