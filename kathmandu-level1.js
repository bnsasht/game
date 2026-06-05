// Kathmandu Street - Level 1
// This file only changes Kathmandu Level 1.
// Main script.js and style.css can remain unchanged.

// Find Kathmandu world
const kathmanduWorld = worlds.find(world => world.id === 'kathmandu');

if (kathmanduWorld) {
  // Replace only Level 1 data
  kathmanduWorld.levels[0] = {
    name: 'Kathmandu Street',
    difficulty: 'Easy',
    timeLimit: 90,
    differences: 6,
    coinsPerFind: 10,

    imgLeft: 'images/kathmandu_level1_original.png',
    imgRight: 'images/kathmandu_level1_changed.png',

    hotspots: [
      { x: 75,  y: 41,  r: 32 }, // prayer flags
      { x: 265, y: 61,  r: 32 }, // Nepal flag
      { x: 197, y: 129, r: 30 }, // temple bell
      { x: 102, y: 153, r: 34 }, // bus route board
      { x: 279, y: 133, r: 36 }, // momo and tea signboard
      { x: 292, y: 173, r: 30 }, // Dhaka topi
    ]
  };
}

// Add a hint button without changing index.html powerup section manually
const powerups = document.getElementById('powerups');

if (powerups && !document.getElementById('hint-btn')) {
  const hintBtn = document.createElement('button');
  hintBtn.id = 'hint-btn';
  hintBtn.innerHTML = '💡 Hint <small>(20🪙)</small>';
  hintBtn.onclick = useHint;

  powerups.prepend(hintBtn);
}

// Hint power-up only for this added level system
function useHint() {
  if (!activeLevel) return;

  const hintCost = 20;

  if (coins < hintCost) {
    alert('Not enough coins! You need 20 coins for a hint.');
    return;
  }

  const remaining = activeLevel.hotspots.filter(spot => !spot.found);

  if (remaining.length === 0) {
    alert('You already found all differences.');
    return;
  }

  coins -= hintCost;
  updateAllCoinDisplays();
  saveProgress();

  const spot = remaining[0];

  ['img-left', 'img-right'].forEach(id => {
    const img = document.getElementById(id);
    const pctX = (spot.x / 340) * 100;
    const pctY = (spot.y / 340) * 100;

    const marker = document.createElement('div');
    marker.className = 'hint-marker';
    marker.style.left = pctX + '%';
    marker.style.top = pctY + '%';

    img.parentNode.querySelector('.markers').appendChild(marker);

    setTimeout(() => {
      marker.remove();
    }, 2500);
  });
}