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

    //code for level 3 of himalaya theme
   {
      name: 'Khumbu Valley',
      difficulty: 'Medium',
      timeLimit: 70,
      differences: 7,
      coinsPerFind: 7,
      imgLeft:  'images/himalaya/himalaya_level3_first.png',
      imgRight: 'images/himalaya/himalaya_level3_second.png',
      hints: [
        'The all-seeing eyes may not be seeing the same thing',
        'Something at the very top has quietly disappeared',
        'A silent visitor passed through the sky',
        'The wanderer chose a different crown today',
        'Nature\'s colours have bloomed differently here',
        'Look at what guards the side of the sacred dome',
        'Shelter looks a little different from above',
      ],
      hotspots: [
        { x: 0.259, y: 0.447, r: 0.06 },
        { x: 0.254, y: 0.235, r: 0.06 },
        { x: 0.649, y: 0.232, r: 0.06 },
        { x: 0.601, y: 0.543, r: 0.06 },
        { x: 0.350, y: 0.663, r: 0.06 },
        { x: 0.181, y: 0.742, r: 0.06 },
        { x: 0.235, y: 0.605, r: 0.06 },
      ]
    },

    //code for level 4 of himalaya theme
   {
      name: 'Base Camp',
      difficulty: 'Medium',
      timeLimit: 70,
      differences: 7,
      coinsPerFind: 7,
      imgLeft:  'images/himalaya/himalaya_level4_first.jpeg',
      imgRight: 'images/himalaya/himalaya_level4_second.png',
      hints: [
         'The peak claims a different identity today',
          'A trekker repacked before the final ascent',
          'The cold dressed someone differently up here',
          'A small companion for the journey has changed',
          'The stones have been quietly rearranging themselves',
          'A shelter chose a different shade for the altitude',
          'Something that stood here has simply vanished',
      ],
      hotspots: [
        { x: 0.603, y: 0.072, r: 0.06 },
        { x: 0.591, y: 0.701, r: 0.06 },
        { x: 0.555, y: 0.667, r: 0.06 },
        { x: 0.523, y: 0.911, r: 0.06 },
        { x: 0.336, y: 0.873, r: 0.06 },
        { x: 0.353, y: 0.459, r: 0.06 },
        { x: 0.694, y: 0.522, r: 0.06 },
      ]
    },

    //code for level 5 of himalaya theme
   {
      name: 'Snowy Summit',
      difficulty: 'Hard',
      timeLimit: 90,
      differences: 9,
      coinsPerFind: 10,
      imgLeft:  'images/himalaya/himalaya_level5_first.png',
      imgRight: 'images/himalaya/himalaya_level5_second.jpeg',
      hints: [
        'A head covering chose a different shade for the day',
        'The words that guide travellers have shifted',
        'A merchant\'s pride is no longer on display',
        'The colourful prayers of the mountains fell silent',
        'One of the great beasts of burden took a different path',
        'Another heavy-footed wanderer chose to disappear',
        'Light no longer passes through the same opening',
        'A pillar of faith has quietly crumbled away',
        'Someone who was standing here has simply ceased to exist',
      ],
      hotspots: [
        { x: 0.217, y: 0.801, r: 0.03 },
        { x: 0.803, y: 0.775, r: 0.03 },
        { x: 0.319, y: 0.725, r: 0.03 },
        { x: 0.350, y: 0.641, r: 0.03 },
        { x: 0.531, y: 0.677, r: 0.03 },
        { x: 0.593, y: 0.553, r: 0.03 },
        { x: 0.634, y: 0.493, r: 0.03 },
        { x: 0.680, y: 0.490, r: 0.03 },
        { x: 0.591, y: 0.581, r: 0.03 },
      ]
    },
  ]
};