const paths = {
  1: {
    text: 'You find yourself at the entrance of a dark forest. Do you dare to enter?',
    options: [
      { text: 'Enter the forest', next: '2' },
      { text: 'Walk away', next: '3' },
    ],
  },
  2: {
    text: 'As you venture deeper into the forest, you come across a fork in the path. Which way do you go?',
    options: [
      { text: 'Take the left path', next: '4' },
      { text: 'Take the right path', next: '5' },
    ],
  },
  3: {
    text: "You decide it's best not to take any risks and walk away. You live a safe but uneventful life.",
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  4: {
    text: 'The left path leads you to a beautiful clearing with a sparkling pond. You feel at peace.',
    options: [
      { text: 'Sit by the pond', next: 'good_end' },
      { text: 'Continue exploring', next: '6' },
    ],
  },
  5: {
    text: 'The right path leads you to a dark cave. You hear strange noises coming from inside.',
    options: [
      { text: 'Enter the cave', next: 'bad_end' },
      { text: 'Turn back', next: '2' },
    ],
  },
  6: {
    text: 'As you continue exploring, you find a hidden treasure chest filled with gold and jewels.',
    options: [
      { text: 'Take the treasure', next: 'good_end' },
      { text: 'Leave it', next: 'bad_end' },
    ],
  },
  good_end: {
    text: 'Congratulations! You have found peace and prosperity. You live happily ever after.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  bad_end: {
    text: 'Oh no! You have met an unfortunate end. Better luck next time.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
};

export default paths;
