const paths = {
  1: {
    text: 'Ethan hears the whispers growing louder. Do you investigate the source of the whispers?',
    options: [
      { text: 'Investigate the whispers', next: '2' },
      { text: 'Ignore the whispers', next: '3' },
    ],
  },
  2: {
    text: 'You follow the whispers to the armchair. It seems to be the loudest. Do you sit in the armchair?',
    options: [
      { text: 'Sit in the armchair', next: '4' },
      { text: 'Step away from the armchair', next: '5' },
    ],
  },
  3: {
    text: 'You try to ignore the whispers, but they become unbearable. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '6' },
      { text: 'Stay and confront the whispers', next: '7' },
    ],
  },
  4: {
    text: "As you sit in the armchair, it feels like it's swallowing you. Do you try to get up?",
    options: [
      { text: 'Try to get up', next: '8' },
      { text: 'Stay seated', next: '9' },
    ],
  },
  5: {
    text: 'You step away from the armchair, but the whispers follow you. Do you confront the armchair?',
    options: [
      { text: 'Confront the armchair', next: '10' },
      { text: 'Run to another room', next: '11' },
    ],
  },
  6: {
    text: 'You leave the apartment and find yourself in the rain. Do you seek help?',
    options: [
      { text: 'Seek help', next: '12' },
      { text: 'Wander aimlessly', next: '13' },
    ],
  },
  7: {
    text: 'You decide to confront the whispers. Do you speak to the bookshelf?',
    options: [
      { text: 'Speak to the bookshelf', next: '14' },
      { text: 'Ignore the bookshelf', next: '15' },
    ],
  },
  8: {
    text: 'You struggle to get up, but the armchair holds you tight. Do you scream for help?',
    options: [
      { text: 'Scream for help', next: '16' },
      { text: 'Stay silent', next: '17' },
    ],
  },
  9: {
    text: "You stay seated, and the armchair's grip tightens. Do you fight back?",
    options: [
      { text: 'Fight back', next: '18' },
      { text: 'Give in', next: '19' },
    ],
  },
  10: {
    text: 'You confront the armchair, and it reveals a hidden compartment. Do you open it?',
    options: [
      { text: 'Open the compartment', next: '20' },
      { text: 'Leave it closed', next: '21' },
    ],
  },
  11: {
    text: 'You run to another room, but the whispers follow. Do you hide?',
    options: [
      { text: 'Hide', next: '22' },
      { text: 'Keep running', next: '23' },
    ],
  },
  12: {
    text: 'You seek help and find a neighbor willing to listen. Do you trust them?',
    options: [
      { text: 'Trust the neighbor', next: '24' },
      { text: 'Distrust the neighbor', next: '25' },
    ],
  },
  13: {
    text: 'You wander aimlessly in the rain, feeling lost. Do you find shelter?',
    options: [
      { text: 'Find shelter', next: '26' },
      { text: 'Keep wandering', next: '27' },
    ],
  },
  14: {
    text: 'You speak to the bookshelf, and it reveals a hidden message. Do you read it?',
    options: [
      { text: 'Read the message', next: '28' },
      { text: 'Ignore the message', next: '29' },
    ],
  },
  15: {
    text: 'You ignore the bookshelf, but the whispers grow louder. Do you confront the lamp?',
    options: [
      { text: 'Confront the lamp', next: '30' },
      { text: 'Ignore the lamp', next: '31' },
    ],
  },
  16: {
    text: 'You scream for help, but no one hears you. Do you keep struggling?',
    options: [
      { text: 'Keep struggling', next: '32' },
      { text: 'Give up', next: '33' },
    ],
  },
  17: {
    text: "You stay silent, and the armchair's grip loosens. Do you try to escape?",
    options: [
      { text: 'Try to escape', next: '34' },
      { text: 'Stay seated', next: '35' },
    ],
  },
  18: {
    text: 'You fight back and break free from the armchair. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '36' },
      { text: 'Stay and confront the whispers', next: '37' },
    ],
  },
  19: {
    text: 'You give in, and the armchair consumes you. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  20: {
    text: 'You open the compartment and find a key. Do you use it?',
    options: [
      { text: 'Use the key', next: '38' },
      { text: 'Keep the key', next: '39' },
    ],
  },
  21: {
    text: 'You leave the compartment closed, but the whispers persist. Do you confront the bookshelf?',
    options: [
      { text: 'Confront the bookshelf', next: '40' },
      { text: 'Ignore the bookshelf', next: '41' },
    ],
  },
  22: {
    text: 'You hide, but the whispers find you. Do you confront them?',
    options: [
      { text: 'Confront the whispers', next: '42' },
      { text: 'Keep hiding', next: '43' },
    ],
  },
  23: {
    text: 'You keep running, but you feel exhausted. Do you stop to rest?',
    options: [
      { text: 'Stop to rest', next: '44' },
      { text: 'Keep running', next: '45' },
    ],
  },
  24: {
    text: 'You trust the neighbor, and they help you find peace. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  25: {
    text: 'You distrust the neighbor, and they leave you alone. Do you seek help elsewhere?',
    options: [
      { text: 'Seek help elsewhere', next: '46' },
      { text: 'Stay alone', next: '47' },
    ],
  },
  26: {
    text: 'You find shelter and feel a bit safer. Do you rest?',
    options: [
      { text: 'Rest', next: '48' },
      { text: 'Stay alert', next: '49' },
    ],
  },
  27: {
    text: 'You keep wandering and feel lost. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  28: {
    text: 'You read the message, and it gives you hope. Do you follow its advice?',
    options: [
      { text: 'Follow the advice', next: '50' },
      { text: 'Ignore the advice', next: '51' },
    ],
  },
  29: {
    text: 'You ignore the message, and the whispers grow louder. Do you confront the lamp?',
    options: [
      { text: 'Confront the lamp', next: '52' },
      { text: 'Ignore the lamp', next: '53' },
    ],
  },
  30: {
    text: 'You confront the lamp, and it reveals a hidden switch. Do you flip it?',
    options: [
      { text: 'Flip the switch', next: '54' },
      { text: 'Leave it alone', next: '55' },
    ],
  },
  31: {
    text: 'You ignore the lamp, but the whispers grow unbearable. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '58' },
      { text: 'Stay and confront the whispers', next: '59' },
    ],
  },
  32: {
    text: "You keep struggling, but the armchair's grip is too strong. Do you try to calm down?",
    options: [
      { text: 'Calm down', next: '56' },
      { text: 'Keep struggling', next: '57' },
    ],
  },
  33: {
    text: 'You give up, and the armchair consumes you. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  34: {
    text: 'You try to escape, and the armchair releases you. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '58' },
      { text: 'Stay and confront the whispers', next: '59' },
    ],
  },
  35: {
    text: "You stay seated, and the armchair's grip tightens again. Do you fight back?",
    options: [
      { text: 'Fight back', next: '60' },
      { text: 'Give in', next: '61' },
    ],
  },
  36: {
    text: 'You leave the apartment and find yourself in the rain. Do you seek help?',
    options: [
      { text: 'Seek help', next: '62' },
      { text: 'Wander aimlessly', next: '63' },
    ],
  },
  37: {
    text: 'You stay and confront the whispers. Do you speak to the lamp?',
    options: [
      { text: 'Speak to the lamp', next: '64' },
      { text: 'Ignore the lamp', next: '65' },
    ],
  },
  38: {
    text: 'You use the key and unlock a hidden door. Do you enter?',
    options: [
      { text: 'Enter the door', next: '66' },
      { text: 'Stay outside', next: '67' },
    ],
  },
  39: {
    text: 'You keep the key, but the whispers persist. Do you confront the bookshelf?',
    options: [
      { text: 'Confront the bookshelf', next: '68' },
      { text: 'Ignore the bookshelf', next: '69' },
    ],
  },
  40: {
    text: 'You confront the bookshelf, and it reveals another hidden message. Do you read it?',
    options: [
      { text: 'Read the message', next: '70' },
      { text: 'Ignore the message', next: '71' },
    ],
  },
  41: {
    text: 'You ignore the bookshelf, but the whispers grow louder. Do you confront the lamp?',
    options: [
      { text: 'Confront the lamp', next: '72' },
      { text: 'Ignore the lamp', next: '73' },
    ],
  },
  42: {
    text: 'You confront the whispers, and they reveal a hidden truth. Do you accept it?',
    options: [
      { text: 'Accept the truth', next: '74' },
      { text: 'Reject the truth', next: '75' },
    ],
  },
  43: {
    text: 'You keep hiding, but the whispers find you. Do you confront them?',
    options: [
      { text: 'Confront the whispers', next: '76' },
      { text: 'Keep hiding', next: '77' },
    ],
  },
  44: {
    text: 'You stop to rest, but the whispers catch up. Do you confront them?',
    options: [
      { text: 'Confront the whispers', next: '78' },
      { text: 'Keep resting', next: '79' },
    ],
  },
  45: {
    text: 'You keep running, but you feel exhausted. Do you stop to rest?',
    options: [
      { text: 'Stop to rest', next: '80' },
      { text: 'Keep running', next: '81' },
    ],
  },
  46: {
    text: 'You seek help elsewhere and find a kind stranger. Do you trust them?',
    options: [
      { text: 'Trust the stranger', next: '82' },
      { text: 'Distrust the stranger', next: '83' },
    ],
  },
  47: {
    text: 'You stay alone, and the whispers consume you. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  48: {
    text: 'You rest and feel a bit better. Do you seek help?',
    options: [
      { text: 'Seek help', next: '84' },
      { text: 'Stay in shelter', next: '85' },
    ],
  },
  49: {
    text: 'You stay alert, but the whispers persist. Do you confront them?',
    options: [
      { text: 'Confront the whispers', next: '86' },
      { text: 'Ignore the whispers', next: '87' },
    ],
  },
  50: {
    text: 'You follow the advice, and it leads you to a hidden door. Do you enter?',
    options: [
      { text: 'Enter the door', next: '88' },
      { text: 'Stay outside', next: '89' },
    ],
  },
  51: {
    text: 'You ignore the advice, and the whispers grow louder. Do you confront the lamp?',
    options: [
      { text: 'Confront the lamp', next: '90' },
      { text: 'Ignore the lamp', next: '91' },
    ],
  },
  52: {
    text: 'You confront the lamp, and it reveals a hidden switch. Do you flip it?',
    options: [
      { text: 'Flip the switch', next: '92' },
      { text: 'Leave it alone', next: '93' },
    ],
  },
  53: {
    text: 'You ignore the lamp, but the whispers grow unbearable. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '94' },
      { text: 'Stay and confront the whispers', next: '95' },
    ],
  },
  54: {
    text: 'You flip the switch, and the whispers stop. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  55: {
    text: 'You leave the switch alone, and the whispers persist. Do you confront the bookshelf?',
    options: [
      { text: 'Confront the bookshelf', next: '96' },
      { text: 'Ignore the bookshelf', next: '97' },
    ],
  },
  56: {
    text: 'You calm down, and the armchair releases you. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '98' },
      { text: 'Stay and confront the whispers', next: '99' },
    ],
  },
  57: {
    text: 'You keep struggling, but the armchair consumes you. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  58: {
    text: 'You leave the apartment and find yourself in the rain. Do you seek help?',
    options: [
      { text: 'Seek help', next: '100' },
      { text: 'Wander aimlessly', next: '101' },
    ],
  },
  59: {
    text: 'You stay and confront the whispers. Do you speak to the lamp?',
    options: [
      { text: 'Speak to the lamp', next: '102' },
      { text: 'Ignore the lamp', next: '103' },
    ],
  },
  60: {
    text: 'You fight back and break free from the armchair. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '104' },
      { text: 'Stay and confront the whispers', next: '105' },
    ],
  },
  61: {
    text: 'You give in, and the armchair consumes you. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  62: {
    text: 'You seek help and find a neighbor willing to listen. Do you trust them?',
    options: [
      { text: 'Trust the neighbor', next: '106' },
      { text: 'Distrust the neighbor', next: '107' },
    ],
  },
  63: {
    text: 'You wander aimlessly in the rain, feeling lost. Do you find shelter?',
    options: [
      { text: 'Find shelter', next: '108' },
      { text: 'Keep wandering', next: '109' },
    ],
  },

  64: {
    text: 'You speak to the lamp, and it reveals a hidden switch. Do you flip it?',
    options: [
      { text: 'Flip the switch', next: '54' },
      { text: 'Leave it alone', next: '55' },
    ],
  },
  65: {
    text: 'You ignore the lamp, but the whispers grow unbearable. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '58' },
      { text: 'Stay and confront the whispers', next: '59' },
    ],
  },
  66: {
    text: 'You enter the hidden door and find a peaceful room. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  67: {
    text: 'You stay outside, and the whispers persist. Do you confront the bookshelf?',
    options: [
      { text: 'Confront the bookshelf', next: '40' },
      { text: 'Ignore the bookshelf', next: '41' },
    ],
  },
  68: {
    text: 'You confront the bookshelf, and it reveals another hidden message. Do you read it?',
    options: [
      { text: 'Read the message', next: '70' },
      { text: 'Ignore the message', next: '71' },
    ],
  },
  69: {
    text: 'You ignore the bookshelf, but the whispers grow louder. Do you confront the lamp?',
    options: [
      { text: 'Confront the lamp', next: '72' },
      { text: 'Ignore the lamp', next: '73' },
    ],
  },
  70: {
    text: 'You read the message, and it gives you hope. Do you follow its advice?',
    options: [
      { text: 'Follow the advice', next: '50' },
      { text: 'Ignore the advice', next: '51' },
    ],
  },
  71: {
    text: 'You ignore the message, and the whispers grow louder. Do you confront the lamp?',
    options: [
      { text: 'Confront the lamp', next: '52' },
      { text: 'Ignore the lamp', next: '53' },
    ],
  },
  72: {
    text: 'You confront the lamp, and it reveals a hidden switch. Do you flip it?',
    options: [
      { text: 'Flip the switch', next: '54' },
      { text: 'Leave it alone', next: '55' },
    ],
  },
  73: {
    text: 'You ignore the lamp, but the whispers grow unbearable. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '58' },
      { text: 'Stay and confront the whispers', next: '59' },
    ],
  },
  74: {
    text: 'You accept the hidden truth, and it brings you peace. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  75: {
    text: 'You reject the hidden truth, and the whispers consume you. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  76: {
    text: 'You confront the whispers, and they reveal a hidden truth. Do you accept it?',
    options: [
      { text: 'Accept the truth', next: '74' },
      { text: 'Reject the truth', next: '75' },
    ],
  },
  77: {
    text: 'You keep hiding, but the whispers find you. Do you confront them?',
    options: [
      { text: 'Confront the whispers', next: '76' },
      { text: 'Keep hiding', next: '77' },
    ],
  },
  78: {
    text: 'You confront the whispers, and they reveal a hidden truth. Do you accept it?',
    options: [
      { text: 'Accept the truth', next: '74' },
      { text: 'Reject the truth', next: '75' },
    ],
  },
  79: {
    text: 'You keep resting, but the whispers consume you. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  80: {
    text: 'You stop to rest, but the whispers catch up. Do you confront them?',
    options: [
      { text: 'Confront the whispers', next: '78' },
      { text: 'Keep resting', next: '79' },
    ],
  },
  81: {
    text: 'You keep running, but you feel exhausted. Do you stop to rest?',
    options: [
      { text: 'Stop to rest', next: '80' },
      { text: 'Keep running', next: '81' },
    ],
  },
  82: {
    text: 'You trust the stranger, and they help you find peace. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  83: {
    text: 'You distrust the stranger, and they leave you alone. Do you seek help elsewhere?',
    options: [
      { text: 'Seek help elsewhere', next: '46' },
      { text: 'Stay alone', next: '47' },
    ],
  },
  84: {
    text: 'You seek help and find a neighbor willing to listen. Do you trust them?',
    options: [
      { text: 'Trust the neighbor', next: '106' },
      { text: 'Distrust the neighbor', next: '107' },
    ],
  },
  85: {
    text: 'You stay in shelter, but the whispers persist. Do you confront them?',
    options: [
      { text: 'Confront the whispers', next: '86' },
      { text: 'Ignore the whispers', next: '87' },
    ],
  },
  86: {
    text: 'You confront the whispers, and they reveal a hidden truth. Do you accept it?',
    options: [
      { text: 'Accept the truth', next: '74' },
      { text: 'Reject the truth', next: '75' },
    ],
  },
  87: {
    text: 'You ignore the whispers, but they consume you. Bad ending.',
    options: [],
  },
  88: {
    text: 'You enter the hidden door and find a peaceful room. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  89: {
    text: 'You stay outside, and the whispers persist. Do you confront the bookshelf?',
    options: [
      { text: 'Confront the bookshelf', next: '40' },
      { text: 'Ignore the bookshelf', next: '41' },
    ],
  },
  90: {
    text: 'You confront the lamp, and it reveals a hidden switch. Do you flip it?',
    options: [
      { text: 'Flip the switch', next: '54' },
      { text: 'Leave it alone', next: '55' },
    ],
  },
  91: {
    text: 'You ignore the lamp, but the whispers grow unbearable. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '58' },
      { text: 'Stay and confront the whispers', next: '59' },
    ],
  },
  92: {
    text: 'You flip the switch, and the whispers stop. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  93: {
    text: 'You leave the switch alone, and the whispers persist. Do you confront the bookshelf?',
    options: [
      { text: 'Confront the bookshelf', next: '96' },
      { text: 'Ignore the bookshelf', next: '97' },
    ],
  },
  94: {
    text: 'You leave the apartment and find yourself in the rain. Do you seek help?',
    options: [
      { text: 'Seek help', next: '100' },
      { text: 'Wander aimlessly', next: '101' },
    ],
  },
  95: {
    text: 'You stay and confront the whispers. Do you speak to the lamp?',
    options: [
      { text: 'Speak to the lamp', next: '102' },
      { text: 'Ignore the lamp', next: '103' },
    ],
  },
  96: {
    text: 'You confront the bookshelf, and it reveals another hidden message. Do you read it?',
    options: [
      { text: 'Read the message', next: '70' },
      { text: 'Ignore the message', next: '71' },
    ],
  },
  97: {
    text: 'You ignore the bookshelf, but the whispers grow louder. Do you confront the lamp?',
    options: [
      { text: 'Confront the lamp', next: '90' },
      { text: 'Ignore the lamp', next: '91' },
    ],
  },
  98: {
    text: 'You leave the apartment and find yourself in the rain. Do you seek help?',
    options: [
      { text: 'Seek help', next: '100' },
      { text: 'Wander aimlessly', next: '101' },
    ],
  },
  99: {
    text: 'You stay and confront the whispers. Do you speak to the lamp?',
    options: [
      { text: 'Speak to the lamp', next: '102' },
      { text: 'Ignore the lamp', next: '103' },
    ],
  },
  100: {
    text: 'You seek help and find a neighbor willing to listen. Do you trust them?',
    options: [
      { text: 'Trust the neighbor', next: '106' },
      { text: 'Distrust the neighbor', next: '107' },
    ],
  },
  101: {
    text: 'You wander aimlessly in the rain, feeling lost. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  102: {
    text: 'You speak to the lamp, and it reveals a hidden switch. Do you flip it?',
    options: [
      { text: 'Flip the switch', next: '54' },
      { text: 'Leave it alone', next: '55' },
    ],
  },
  103: {
    text: 'You ignore the lamp, but the whispers grow unbearable. Do you leave the apartment?',
    options: [
      { text: 'Leave the apartment', next: '58' },
      { text: 'Stay and confront the whispers', next: '59' },
    ],
  },
  104: {
    text: 'You leave the apartment and find yourself in the rain. Do you seek help?',
    options: [
      { text: 'Seek help', next: '100' },
      { text: 'Wander aimlessly', next: '101' },
    ],
  },
  105: {
    text: 'You stay and confront the whispers. Do you speak to the lamp?',
    options: [
      { text: 'Speak to the lamp', next: '102' },
      { text: 'Ignore the lamp', next: '103' },
    ],
  },
  106: {
    text: 'You trust the neighbor, and they help you find peace. Good ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  107: {
    text: 'You distrust the neighbor, and they leave you alone. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
  108: {
    text: 'You find shelter and feel a bit safer. Do you rest?',
    options: [
      { text: 'Rest', next: '48' },
      { text: 'Stay alert', next: '49' },
    ],
  },
  109: {
    text: 'You keep wandering forever lost. Bad ending.',
    options: [{ text: 'Home Menu', next: 'start' }],
  },
};

export default paths;
