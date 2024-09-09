import { HarrisBenedict } from './HarrisBenedict.js';

test('Deve calcular corretamente a taxa basal masculina', () => {
  const params = {
    weight: 76,
    age: 25,
    gender: 'm',
    height: 175,
  };
  const dietCalculator = new HarrisBenedict();
  const result = dietCalculator.calculate(params);
  expect(result.basalMetabolicRate).toBe(1817.75);
});

test('Deve calcular corretamente a taxa basal feminina', () => {
  const params = {
    weight: 76,
    age: 25,
    gender: 'f',
    height: 175,
  };
  const dietCalculator = new HarrisBenedict();
  const result = dietCalculator.calculate(params);
  expect(result.basalMetabolicRate).toBe(999.02);
});
