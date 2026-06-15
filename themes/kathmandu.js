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
    difficulty: 'Medium',
    timeLimit: 60,
    differences: 6,
    coinsPerFind: 5,

    imgLeft: 'images/himalaya/kathmandu_level2_first.png',
    imgRight: 'images/himalaya/kathmandu_level2_second.png',

    hotspots: [
    { x: 0.595, y: 0.317, r: 0.06 },
    { x: 0.364, y: 0.417, r: 0.06 },
    { x: 0.339, y: 0.558, r: 0.06 },
    { x: 0.222, y: 0.525, r: 0.06 },
    { x: 0.279, y: 0.756, r: 0.06 },
    { x: 0.705, y: 0.721, r: 0.06 },
    ]
  }
   
  ]
};