const theme_himalaya = {
  id: 'himalaya',
  name: 'Himalayan Trek',
  emoji: '🏔',
  description: 'Snow peaks, suspension bridges, tea houses',
  premium: true,
  price: '$1.99',
  coinPrice: 200,
  levels: [

    //code for level 1 of himalaya theme
    {
      name: 'Namche Bazaar',
      difficulty: 'Easy',
      timeLimit: 60,
      differences: 5,
      coinsPerFind: 5,
      imgLeft:  'images/himalaya/himalaya_level1_first.jpeg',
      imgRight: 'images/himalaya/himalaya_level1_second.jpeg',
      hotspots: [
        { x: 0.591, y: 0.070, r: 0.06 },
        { x: 0.730, y: 0.476, r: 0.06 },
        { x: 0.646, y: 0.646, r: 0.06 },
        { x: 0.413, y: 0.677, r: 0.06 },
        { x: 0.523, y: 0.495, r: 0.06 },
      ]
    },

  ]
};