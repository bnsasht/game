const theme_kathmandu = {
  id: 'kathmandu',
  name: 'Kathmandu Streets',
  emoji: '🏙',
  description: 'Busy alleys, street vendors, and hidden temples',
  premium: false,
  levels: [
    // paste your 5 kathmandu levels here
    {
    name: 'Kathmandu Street',
    difficulty: 'Easy',
    timeLimit: 60,
    differences: 6,
    coinsPerFind: 5,

    imgLeft: 'images/himalaya/kathmandu_level1_first.png',
    imgRight: 'images/himalaya/kathmandu_level1_second.png',
    
    hints: [
    'A silent prayer bell rings in one, but goes quiet in the other',          // Bell missing near the temple structure
    'The proud peaks of the double-triangle flag have vanished from the sky', // Nepal flag completely missing
    'The colorful string of prayer flags does not  stretch as far as it used to', 
    'The bus destination reveals a different journey on its signboard',      // Text change on the blue/white bus route
    'A passerby in the crowd changed their clothes for the stroll',           // Person/clothing variation in the mid-ground walking path
    'The shop sign has changed its name, but the taste remains delicious'     // Shop name changed from "Mitho..." to "Himali..."
  ],

    hotspots: [
      { x: 0.692, y: 0.419, r: 0.06 },
      { x: 0.745, y: 0.161, r: 0.06 },
      { x: 0.426, y: 0.085, r: 0.06 },
      { x: 0.366, y: 0.475, r: 0.06 },
      { x: 0.574, y: 0.373, r: 0.06 },
      { x: 0.739, y: 0.503, r: 0.06 },
    ]
    } 
     ,{
    name: 'Pashupatinath Temple',
    difficulty: 'Easy',
    timeLimit: 60,
    differences: 6,
    coinsPerFind: 5,

    imgLeft: 'images/himalaya/kathmandu_level2_first.png',
    imgRight: 'images/himalaya/kathmandu_level2_second.png',
    hints: [
    'The colorful strings of prayer flags dancing above the ghats have vanished', 
    'The holy Sadhu shelters under a completely different shade of umbrella',      
    'A new covered wooden pavilion structure has been built on the open roofline behind the stone shrine spire',        
    'A heavy brass bell hanging near the shrine has disappeared',                 
    'The sacred Nandi bull statue has lost its bright flower garland',             // Marigold garland missing from Nandi
    'The woman gazing at the river has changed the color of her traditional dress' // Woman's dress color swap (Red to Yellow/Orange)
  ],
    hotspots: [
    { x: 0.767, y: 0.750, r: 0.06 },
 { x: 0.300, y: 0.427, r: 0.06 },
 { x: 0.114, y: 0.523, r: 0.06 },
 { x: 0.155, y: 0.731, r: 0.06 },
 { x: 0.904, y: 0.469, r: 0.06 },
 { x: 0.676, y: 0.340, r: 0.06 },
    ]
  }
   ,
  {
    name: 'Night Thamel Bazar',
    difficulty: 'Medium',
    timeLimit: 70,
    differences: 7,
    coinsPerFind: 7,

    imgLeft: 'images/himalaya/kathmandu_level3_first.png',
    imgRight: 'images/himalaya/kathmandu_level3_second.png',
    
   hints: [
  'A neon-lit wheel on the right has completely rewritten its message to the night alley',
  'The parked white vehicle flashes a subtle, fiery warning from its quiet flank',
  'A new constellation of golden warmth has been woven directly into the dark sky above',
  'Emerald characters dancing down the alleyway have rearranged their secret language',
  'The silent melody outside the music lounge has faded, leaving its hanging cradle empty',
  'A tiny, glowing green herb emblem has spun around, losing its original orientation',
  'The azure geometric beacon beneath the lodging sign now broadcasts an entirely new word'
],
  
    hotspots: [
 { x: 0.420, y: 0.310, r: 0.06 },
 { x: 0.685, y: 0.462, r: 0.06 },
 { x: 0.649, y: 0.383, r: 0.06 },
 { x: 0.842, y: 0.626, r: 0.06 },
 { x: 0.073, y: 0.498, r: 0.06 },
 { x: 0.717, y: 0.619, r: 0.06 },
 { x: 0.644, y: 0.464, r: 0.06 },
    ]
  },
   {
    name: 'Tribhuvan International Airport',
    difficulty: 'Medium',
    timeLimit: 70,
    differences: 7,
    coinsPerFind: 7,

    imgLeft: 'images/himalaya/kathmandu_level4_first.png',
    imgRight: 'images/himalaya/kathmandu_level4_second.png',
ints: [
    'The grand metal welcome sign on the brick facade is missing its final letter',             // "AIRPORT" loses the "T"
    'A structural gateway emblem shifts its time from a lifetime experience to a specific year', // "Nepal Lifetime" billboard changes to "visit nepal 2020"
    'The breeze still blows, but the highest pole outside the tower has lost its colors',        // Nepal flag is missing
    'The yellow instructions above the entry canopy have quietly shifted into the plural form',  // "DEPARTURE" becomes "DEPARTURES"
    'The oncoming car on the far left has swapped out its distinctive red identification plate',// Red license plate block turns to standard blue/white
    'An orange safety marker guarding the crosswalk has vanished from the asphalt road',        // One of the traffic cones is missing
    'A solitary traveller near the luggage racks on the far right has slipped away unseen'
      ],      //
  hotspots: [
{ x: 0.054, y: 0.574, r: 0.06 },
 { x: 0.888, y: 0.495, r: 0.06 },
 { x: 0.702, y: 0.431, r: 0.06 },
 { x: 0.377, y: 0.459, r: 0.06 },
 { x: 0.225, y: 0.576, r: 0.06 },
 { x: 0.656, y: 0.578, r: 0.06 },
 { x: 0.476, y: 0.520, r: 0.06 },
]
  },
  {
  name: 'Boudhanath Night Kora',
  difficulty: 'Hard',
  timeLimit: 90,
  differences: 9,
  coinsPerFind: 10,

  imgLeft: 'images/himalaya/kathmandu_level5_first.png',
  imgRight: 'images/himalaya/kathmandu_level5_second.png',
hints: [
  'An emerald ring has quietly manifested around the mid-tier foundation of the sacred white dome',
  'The crimson path indicator pointing toward the sacred circuit has altered its geometry',
  'The highest standard on the right side has completely transformed its sovereign identity',
  'A twin-beam fixture illuminating the far right plaza has lost half of its brilliant glow',
  'A vivid spark of gold walking on the left side of the courtyard has completely dissolved into thin air',
  'High upon the terrace, a maintenance figure has shifted their posture and the angle of their long reach',
  'Amidst the sea of travelers, a single winter hat undergoes a silent transformation of hue',
  'A cloaked soul near the center has broken the pattern, exchanging their entire form with a stranger',
  'High above the masses on the upper deck, a distant shadow chooses a completely opposite path'
],
  hotspots: [
{ x: 0.904, y: 0.634, r: 0.06 },
{ x: 0.798, y: 0.634, r: 0.06 },
{ x: 0.069, y: 0.647, r: 0.06 },
{ x: 0.714, y: 0.602, r: 0.06 },
{ x: 0.076, y: 0.588, r: 0.06 },
{ x: 0.464, y: 0.467, r: 0.06 },
{ x: 0.555, y: 0.483, r: 0.06 },
{ x: 0.900, y: 0.388, r: 0.06 },
{ x: 0.984, y: 0.402, r: 0.06 },
  ]
}
  ]
};