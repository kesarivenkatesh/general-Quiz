// imports
var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("Help me with your name...   ");
// welcome message
console.log(chalk.bgYellow('Hello, ' + userName + '   Welcome to quiz(by Venkatesh))\n\nBy the way It has got different levels\n'));

// Just exploring keyInYNStrict
if(readlineSync.keyInYNStrict("Do you love to watch Series, Cricket, Movies,...."))
{
  console.log(chalk.green("This quiz may be easy for you."));
}
else
{
  console.log(chalk.redBright("This quiz may be difficult for you, But try once"));
}

// high score updated by me when screenshot is sent by player
var highscores = { 'surya': 6, 'nikhil': 6 };

// questions list with answers
qlist = [
  { question: chalk.rgb(15, 100, 204)("What is name of the series(recently) in which bank robbery happens?\n"),
    options: ['Game of Thrones', 'Money Heist', 'Dark'],
    answer: 2
  }, {
    question: chalk.rgb(15, 100, 204)("What was the first movie of megastar Chiranjeevi?\n"),
    options: ['Mana oori pandavulu', 'Donga', 'Punaadi raalu'],
    answer: 3
  }, {
    question: chalk.rgb(15, 100, 204)("Jr NTR first movie\n"),
    options: ['Mana desam', 'Bala Ramayanam', 'Ninnu Choodalani'],
    answer: 1
  }, {
    question: chalk.rgb(15, 100, 204)("How many players does a cricket team has?\n"),
    options: [11, 9, 14],
    answer: 1
  }
  , {
    question: chalk.rgb(15, 100, 204)("How many overs does TEST match have?\n"),
    options: [50, 70, 90],
    answer: 3
  }, {
    question: chalk.rgb(15, 100, 204)("How many overs does IPL match have?\n"),
    options: [15, 20, 30],
    answer: 2
  }, {
    question: chalk.rgb(15, 100, 204)("How many overs does ODI match have?\n"),
    options: [50, 70, 90],
    answer: 1
  }, {
    question: chalk.rgb(15, 100, 204)("Name the technology used for assisting decision making in cricket match?\n"),
    options: ['LBW', 'DRS', 'OUT'],
    answer: 2
  }
];

// score of the playing user
var score = 0;

// function to ask and check answers to user
function askQuestion(question)
{
  console.log(chalk.rgb(245, 250, 90)('Your Level: ' + level));
  console.log(question.question);
  var uAns = readlineSync.keyInSelect(question.options, null, {cancel:'Can\'t decide'});
  // console.log('uans ' + uAns);
  if(uAns+1 === question.answer)
  {
    score += 1;
    console.log(chalk.green('correct, Your score: ' + score));
  }
  else if(uAns+1 != 0)
  {
    console.log(chalk.redBright('wrong one!!, Your score: ' + score));
    console.log(chalk.green('Correct option: ' + question.answer));
  }
  else
  {
    console.log(chalk.green('Your score: ' + score));
    console.log(chalk.green('Correct option: ' + question.answer));
  }
}

// for checking if user exited in middle or attempted all questions and his level of game
var b = false, finish = false, level = 0;

// exits if user press 'e' or all questions are completed
while(1)
{
    for(var i=0; i<qlist.length; i++)
    {
      // check if player want to exit in middle only
      var direction = readlineSync.keyIn('\npress e to exit, any other letter to continue  ', {limit: '$<A-Z>'});
      if(direction == 'e')
      {
        console.log(chalk.inverse('exited'));
        b = true;
        break;
      }

      // ask question
      askQuestion(qlist[i]);

      // check if change is there with levels
      if(score == 6)
      {
        level = 2;
        console.log(chalk.rgb(107, 204, 242)('CONGRATS\n-------------------\nYou Entered Level 2\n-------------------\n'));
      }
      else if(score == 3)
      {
        level = 1;
        console.log(chalk.rgb(107, 204, 242)('CONGRATS\n-------------------\nYou Entered Level 1\n-------------------\n'));
      }

      // questions completed
      if(i == qlist.length-1)
      {
        finish = true;
      }
    }
    // either exited in middle or attempted all questions
    if(b || finish){
      console.log(chalk.cyan('\n\nThank You for Playing :)'));
      break;
    }
}

console.log('Name' + '               ' + 'score\n');
for(var i in highscores)
{
  if(highscores.hasOwnProperty(i))
  {
    console.log(i + '             ' + highscores[i] + '\n');
  }
}

// checking if user beaten high score
for(var i in highscores)
{
  // console.log(highscores[i]);
  if(highscores.hasOwnProperty(i) && !(score < highscores[i]))
  {
    console.log(chalk.rgb(250, 130, 158)('\nCool! You have the highest score in the Game.\n'));
    console.log(chalk.rgb(175, 88, 237)('Send screenshot if you have beaten high score.'));
    break;
  }
}
