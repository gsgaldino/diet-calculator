const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class AskQuestion {
  close() { rl.close() }

  ask(question) {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        if (!answer) {
          resolve(this.ask(question));
        } else {
          resolve(answer);
        }
      });
    });
  }
}

module.exports = { askQuestion: new AskQuestion() };
