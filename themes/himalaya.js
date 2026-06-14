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
      differences: 6,
      coinsPerFind: 5,
      imgLeft:  'images/himalaya/himalaya_level1_first.jpeg',
      imgRight: 'images/himalaya/himalaya_level1_second.jpeg',
      hints: [
        'The wind carries a different story today',
        'A traveller packed differently for this journey',
        'Even the animals have their own sense of fashion',
        'Words can change meaning when you least expect it',
        'The path ahead is not quite what it seems',
        'What connects the two sides has quietly changed',
      ],
      hotspots: [
        { x: 0.591, y: 0.070, r: 0.06 },
        { x: 0.730, y: 0.476, r: 0.06 },
        { x: 0.646, y: 0.646, r: 0.06 },
        { x: 0.413, y: 0.677, r: 0.06 },
        { x: 0.523, y: 0.495, r: 0.06 },
        { x: 0.270, y: 0.299, r: 0.06 },
      ]
    },


    //code for level 2 of himalaya theme
    {
      name: 'Sagarmatha',
      difficulty: 'Easy',
      timeLimit: 60,
      differences: 6,
      coinsPerFind: 5,
      imgLeft: 'images/himalaya/himalaya_level2_first.jpg',
      imgRight: 'images/himalaya/himalaya_level2_second.jpg',
      hints: [
        'What is carried on the back tells a different tale',
        'The mountain cold demands a different colour today',
        'Even the beast of burden has a new accessory',
        'The sacred sound of the mountains has changed its face',
        'Not everything written in stone stays the same',
        'The trees are keeping a colourful secret',
      ],
      hotspots: [
        { x: 0.353, y: 0.605, r: 0.06 },
        { x: 0.518, y: 0.655, r: 0.06 },
        { x: 0.689, y: 0.911, r: 0.06 },
        { x: 0.740, y: 0.500, r: 0.06 },
        { x: 0.424, y: 0.282, r: 0.06 },
        { x: 0.268, y: 0.663, r: 0.06 },
      ]
    },

  ]
};