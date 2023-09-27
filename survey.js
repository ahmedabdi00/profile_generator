const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'What\'s your name? Nicknames are also acceptable :) ',
  'What\'s an activity do you like doing? ',
  'What do you listen to while doing that? ',
  'Which meal is your favourite (eg: dinner, brunch, etc.)? ',
  'What\'s your favourite thing to eat for that meal? ',
  'Which sport is your absolute favourite? ',
  'What is your superpower? In a few words, tell us what you are amazing at! '
];

const answers = {};

const askQuestion = (questionIndex) => {
  if (questionIndex === questions.length) {
    console.log('Thank you for your valuable feedback:');
    for (const key in answers) {
      console.log(`${key}: ${answers[key]}`);
    }
    rl.close();
    return;
  }

  rl.question(questions[questionIndex], (answer) => {
    answers[questions[questionIndex]] = answer;
    askQuestion(questionIndex + 1);
  });
};

askQuestion(0);
