import { DietSuggestion } from '../../DietSuggestion.js';

export class HarrisBenedict {
  constructor() {
    this.dietSuggestion = new DietSuggestion();
    this.functionConstants = {
      male: {
        weight: 13.75,
        height: 5,
        age: 6.75,
        constant: 66.5,
      },
      female: {
        weight: 9.56,
        height: 1.85,
        age: 4.68,
        constant: 65.71,
      },
      activityFactor: {
        mild: 1.3,
        moderate: 1.5,
        high: 1.7,
      },
    };
  }

  getRoundedBasalMetabolicRate(basalMetabolicRate) {
    return Math.round(basalMetabolicRate / 100) * 100;
  }

  getTotalMetabolicRate(basalMetabolicRate, activityFactor) {
    const userActivityFactor = activityFactor
      ? this.functionConstants.activityFactor[activityFactor]
      : this.functionConstants.activityFactor.mild;
    return basalMetabolicRate * userActivityFactor;
  }

  calculate({ weight, age, gender, height, activityFactor }) {
    const constants =
      gender.toLowerCase() === 'm'
        ? this.functionConstants.male
        : this.functionConstants.female;
    const weightResult = constants.weight * weight;
    const heightResult = constants.height * height;
    const ageResult = constants.age * age;
    const basalMetabolicRate =
      weightResult + heightResult - ageResult + constants.constant;
    const roundedBasalMetabolicRate =
      this.getRoundedBasalMetabolicRate(basalMetabolicRate);
    const totalMetabolicRate = this.getTotalMetabolicRate(
      roundedBasalMetabolicRate,
      activityFactor
    );

    return {
      basalMetabolicRate,
      roundedBasalMetabolicRate,
      totalMetabolicRate,
      diet: this.dietSuggestion.calculate({
        totalMetabolicRate,
        caloricDeficit: 400,
        weight,
      }),
    };
  }
}
