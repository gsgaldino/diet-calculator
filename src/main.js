const { DietStrategy } = require('./DietStrategy');
const { askQuestion } = require('./utils');

const main = async () => {
  const weight = await askQuestion.ask('Qual seu peso?\n');
  const age = await askQuestion.ask('Qual sua idade?\n');
  const gender = await askQuestion.ask('Qual seu sexo?\n');
  const height = await askQuestion.ask('Qual sua altura em CM?\n');

  const dietStrategy = new DietStrategy();
  const params = { weight, age, gender, height };
  const result = dietStrategy.calculate('Harris-Benedict', params);
  askQuestion.close();
  console.log('RESULT', result);
};

main();

