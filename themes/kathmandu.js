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
    { x: 0.725, y: 0.190, r: 0.06 },
 { x: 0.387, y: 0.103, r: 0.06 },
 { x: 0.564, y: 0.386, r: 0.06 },
 { x: 0.724, y: 0.524, r: 0.06 },
 { x: 0.675, y: 0.412, r: 0.06 },
 { x: 0.321, y: 0.479, r: 0.06 },
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
   { x: 0.693, y: 0.797, r: 0.06 },
 { x: 0.359, y: 0.422, r: 0.06 },
 { x: 0.216, y: 0.539, r: 0.06 },
 { x: 0.616, y: 0.303, r: 0.06 },
 { x: 0.792, y: 0.470, r: 0.06 },
 { x: 0.253, y: 0.774, r: 0.06 },
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
{ x: 0.712, y: 0.690, r: 0.06 },
{ x: 0.847, y: 0.693, r: 0.06 },
{ x: 0.694, y: 0.445, r: 0.06 },
{ x: 0.644, y: 0.451, r: 0.06 },
{ x: 0.653, y: 0.333, r: 0.06 },
{ x: 0.062, y: 0.496, r: 0.06 },
{ x: 0.466, y: 0.190, r: 0.06 },
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
{ x: 0.703, y: 0.392, r: 0.06 },
 { x: 0.371, y: 0.396, r: 0.06 },
{ x: 0.047, y: 0.626, r: 0.06 },
{ x: 0.219, y: 0.639, r: 0.06 },
{ x: 0.658, y: 0.637, r: 0.06 },
{ x: 0.883, y: 0.493, r: 0.06 },
{ x: 0.478, y: 0.537, r: 0.06 },
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
{ x: 0.845, y: 0.692, r: 0.06 },
{ x: 0.768, y: 0.701, r: 0.06 },
{ x: 0.692, y: 0.659, r: 0.06 },
{ x: 0.104, y: 0.705, r: 0.06 },
{ x: 0.124, y: 0.631, r: 0.06 },
{ x: 0.494, y: 0.443, r: 0.06 },
{ x: 0.555, y: 0.476, r: 0.06 },
{ x: 0.853, y: 0.303, r: 0.06 },
{ x: 0.934, y: 0.341, r: 0.06 },
  ]
}
  ]
};