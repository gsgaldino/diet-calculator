import { HarrisBenedict } from './HarrisBenedict.js';

test('Deve calcular corretamente a taxa basal masculina', () => {
  const params = {
    weight: 100,
    age: 36,
    gender: 'm',
    height: 180,
    activityFactor: 'high',
  };
  const dietCalculator = new HarrisBenedict();
  const result = dietCalculator.calculate(params);
  expect(result.basalMetabolicRate).toBe(2098.5);
  expect(result.roundedBasalMetabolicRate).toBe(2100);
  expect(result.totalMetabolicRate).toBe(3570);
});

test('Deve calcular corretamente a taxa basal feminina', () => {
  const params = {
    weight: 76,
    age: 25,
    gender: 'f',
    height: 175,
    activityFactor: 'moderate',
  };
  const dietCalculator = new HarrisBenedict();
  const result = dietCalculator.calculate(params);
  expect(result.basalMetabolicRate).toBe(999.02);
  expect(result.roundedBasalMetabolicRate).toBe(1000);
  expect(result.totalMetabolicRate).toBe(1500);
});
