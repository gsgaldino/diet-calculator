import { DietStrategy } from './DietStrategy/index.js';
import { askQuestion } from './utils.js';

const main = async () => {
  const weight = await askQuestion.ask('Qual seu peso?\n');
  const age = await askQuestion.ask('Qual sua idade?\n');
  const gender = await askQuestion.ask('Qual seu sexo?\n');
  const height = await askQuestion.ask('Qual sua altura em CM?\n');
  const activityFactor = await askQuestion.ask(
    'Qual seu fator de atividade? (mild / moderate / high)\n'
  );
  const dietStrategy = new DietStrategy();
  const params = { weight, age, gender, height, activityFactor };
  const result = dietStrategy.calculate('Harris-Benedict', params);
  askQuestion.close();
  console.log(
    `Seu gasto energético total é de: ${result.totalMetabolicRate}kcal`
  );
  console.log(
    `A recomendação é que você consuma diariamente: \n${result.diet.proteins}g de proteínas \n${result.diet.fat}g de lipídeos \n${result.diet.carbohydrates}g de carboidratos`
  );
};

main();
