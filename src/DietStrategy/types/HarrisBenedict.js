class HarrisBenedict {
  calculate({ weight, age, gender, height }) {
    const functionConstants = {
      'male': {
        weight: 13.75,
        height: 5,
        age: 6.75,
        constant: 66.5
      },
      'female': {
        weight: 9.56,
        height: 1.85,
        age: 4.68,
        constant: 65.71
      }
    }
    const constants = gender.toLowerCase() ===  'm'
      ? functionConstants['male']
      : functionConstants['female'];
    const weightResult = constants.weight * weight;
    const heightResult = constants.height * height
    const ageResult = constants.age * age;
    const basalMetabolicRate = weightResult + heightResult - ageResult + constants.constant;
    return { basalMetabolicRate: basalMetabolicRate };
  }
}

module.exports = { HarrisBenedict }
